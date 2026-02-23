import React, { useState, useEffect } from 'react';
import { Countdown } from './Countdown';
import { Button } from './ui/button';
import novolabsLogo from 'figma:asset/78f5c753c6bb6e66180b114349ff5dea0a70b98e.png';

export function StickyNavbar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getProgressText = () => {
    if (scrollProgress < 20) return "Descubrí el método validado";
    if (scrollProgress < 40) return "Conocé las pruebas sociales";
    if (scrollProgress < 60) return "Entendé tu problema actual";
    if (scrollProgress < 80) return "Vé lo que incluye la oferta";
    return "¡Estás listo para empezar!";
  };

  const handleCTAClick = () => {
    const element = document.getElementById('final-cta');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-novo-background-2/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-3 py-6 flex items-center justify-between relative">
        <div className="flex items-center gap-2 justify-center w-full absolute left-1/2 transform -translate-x-1/2">
          <img 
            src={novolabsLogo} 
            alt="Novolabs - Startup School" 
            className="h-10 w-auto"
          />
          <div className="block">
            <span className="text-novo-white/90 text-xs font-semibold">
              {'350+ Alumni en Latinoamérica'}
            </span>
          </div>
        </div>
        
        <Button 
          onClick={handleCTAClick}
          className="hidden bg-novo-primary hover:bg-novo-primary/90 hover:scale-[1.02] text-novo-white px-3 sm:px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 premium-float premium-pulse shadow-lg min-h-[40px] touch-manipulation transform-gpu active:scale-[0.98]"
        >
          <span>Acceder ahora</span>
        </Button>
      </div>
      
      {/* Progress Bar */}
      <div className="relative h-1 bg-novo-background-2">
        <div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-novo-primary to-novo-secondary transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

    </nav>
  );
}
