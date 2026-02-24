import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { X, Zap } from 'lucide-react';

interface StickyFloatingCTAProps {
  onOpenModal: () => void;
}

export function StickyFloatingCTA({ onOpenModal }: StickyFloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isFinalCTAVisible, setIsFinalCTAVisible] = useState(false);
  const [isOfferStackVisible, setIsOfferStackVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detectar si es mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      // Show after scrolling past hero section (approximately 800px)
      // Hide when final CTA section is visible or when offer stack is visible
      const shouldShow = window.scrollY > 800;
      const shouldHide = isFinalCTAVisible || isOfferStackVisible;
      setIsVisible(shouldShow && !isDismissed && !shouldHide);
    };

    // Intersection Observer para detectar cuando FinalCTASection está visible
    const finalCTAElement = document.getElementById('final-cta');
    // Intersection Observer para detectar cuando OfferStackSection está visible
    const offerStackElement = document.querySelector('[data-section="offer-stack"]');
    
    const observers = [];

    if (finalCTAElement) {
      const finalCTAObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsFinalCTAVisible(entry.isIntersecting);
          });
        },
        {
          threshold: 0.1, // Se considera visible cuando el 10% está en viewport
          rootMargin: '0px'
        }
      );

      finalCTAObserver.observe(finalCTAElement);
      observers.push(finalCTAObserver);
    }

    if (offerStackElement) {
      const offerStackObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsOfferStackVisible(entry.isIntersecting);
          });
        },
        {
          threshold: 0.1, // Se considera visible cuando el 10% está en viewport
          rootMargin: '0px'
        }
      );

      offerStackObserver.observe(offerStackElement);
      observers.push(offerStackObserver);
    }

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      observers.forEach(observer => observer.disconnect());
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isDismissed, isFinalCTAVisible, isOfferStackVisible, isMobile]);

  const handleCTAClick = () => {
    onOpenModal();
  };

  const handleDismiss = () => {
    setIsDismissed(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 lg:right-4 lg:top-1/2 lg:left-auto lg:bottom-auto lg:transform lg:-translate-y-1/2 lg:translate-x-0 z-50 animate-in slide-in-from-bottom-5 lg:slide-in-from-right-5">
      <div className="bg-novo-background-2/95 backdrop-blur-sm border border-novo-primary/20 rounded-xl p-3 shadow-2xl w-64 max-w-[calc(100vw-2rem)]">
        {/* Header con close button */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-novo-secondary rounded-full animate-pulse"></div>
              <span className="text-novo-secondary font-bold text-xs">66% OFF</span>
            </div>
          <button 
            onClick={handleDismiss}
            className="text-novo-grey hover:text-novo-white transition-colors p-1 touch-manipulation"
          >
            <X className="w-3 h-3" />
          </button>
        </div>

        {/* Precios compactos */}
        <div className="text-center mb-3">
          <div className="flex items-center justify-center gap-2">
            <span className="text-novo-grey line-through text-sm">{'$1.150'}</span>
            <span className="text-novo-primary font-bold text-xl">
              $390 <span className="text-sm">USD</span>
            </span>
          </div>
          <p className="text-novo-secondary text-xs font-semibold mt-1">OFERTA LANZAMIENTO</p>
        </div>

        {/* CTA Button compacto */}
        <Button 
          onClick={handleCTAClick}
          className="w-full bg-novo-primary hover:bg-novo-primary/90 hover:scale-[1.02] text-novo-white font-semibold py-3 rounded-lg transition-all duration-300 premium-float premium-pulse min-h-[44px] touch-manipulation mb-2 text-sm transform-gpu active:scale-[0.98]"
        >
          Quiero el sistema
        </Button>

        {/* Texto de garantía */}
        <p className="text-novo-grey text-xs text-center">
          Pago único. Acceso inmediato.
        </p>
      </div>
    </div>
  );
}
