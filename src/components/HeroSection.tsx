import React from 'react';
import { Button } from './ui/button';
import { CheckCircle, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import novolabsHero from 'figma:asset/0ec5debbf555b71db07914d203718ce12290011f.png';

export function HeroSection() {
  const handleCTAClick = () => {
    const element = document.getElementById('final-cta');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Mobile-first single column layout */}
        <div className="space-y-8">
          {/* Pre-headline - Optimized for mobile */}
          <div className="text-center">
            <span className="text-novo-white font-semibold leading-relaxed text-sm sm:text-base md:text-lg px-4 sm:px-0">
              {'¿Tenes una idea en mente pero te da miedo malgastar ahorros?'}
            </span>
          </div>

          {/* Main Headline - Mobile optimized */}
          <div className="text-center space-y-6">
            <h1 className="thunder-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-novo-white leading-tight not-italic">
              {'Valida tu idea y consegui tus primeros clientes '}
              <span className="text-novo-secondary">antes de lanzar</span>
            </h1>
            
            {/* Sub-headline - Mobile optimized */}
            <p className="text-lg sm:text-xl text-novo-grey leading-relaxed max-w-3xl mx-auto">
              {'Gracias al Sistema de Validación Paga\u2122 evitarás malgastar miles de dólares y meses de tu vida para dar en la tecla con lo que funciona.'}
            </p>
          </div>

          {/* Visual - Mobile optimized */}
          <div className="relative max-w-lg mx-auto">
            <div className="bg-novo-background-2 rounded-2xl p-2 border border-novo-grey/10 shadow-2xl">
              <ImageWithFallback 
                src={novolabsHero}
                alt="Eventos y comunidad Novolabs - Emprendedores de Latinoamérica en acción"
                className="w-full h-48 sm:h-64 object-cover rounded-xl"
              />
              
              {/* Floating elements - Mobile optimized */}
              <div className="absolute -top-3 -right-3 bg-[rgba(212,255,120,0.35)] text-[rgba(255,255,255,1)] px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg">
                EST. 2019
              </div>
              
              <div className="absolute -bottom-3 -left-3 bg-[rgba(255,58,32,0.35)] text-novo-white px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg">
                350+ Alumni en LATAM
              </div>
            </div>
          </div>

          {/* Pricing - Mobile optimized */}
          <div className="text-center space-y-4">
            <p className="text-novo-grey text-sm">{'Precio regular:'} <span className="line-through">$1.150 USD</span></p>
            <div className="flex justify-center items-baseline gap-3 flex-wrap">
              <span className="thunder-font text-3xl sm:text-4xl text-novo-primary">$390</span>
              <span className="text-novo-white text-base sm:text-lg font-medium">USD</span>
            </div>
            <p className="text-novo-secondary text-sm font-semibold">PRECIO LANZAMIENTO</p>
            <div className="flex items-center justify-center gap-3">
              <Shield className="w-5 h-5 text-novo-secondary flex-shrink-0" />
              <span className="text-novo-grey text-sm sm:text-base">
                {'Garant\u00eda de 7 d\u00edas. Reembolso del 100%'}
              </span>
            </div>
          </div>

          {/* CTA Button - Mobile optimized with larger touch target */}
          <div className="px-4 sm:px-0 flex justify-center">
            <Button 
              onClick={() => {
                const offerSection = document.querySelector('[data-section="offer-stack"]');
                if (offerSection) {
                  offerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="w-full max-w-md mx-auto bg-novo-primary hover:bg-novo-primary/90 hover:scale-[1.02] text-novo-white px-8 py-5 rounded-lg text-lg font-bold transition-all duration-300 premium-float premium-pulse min-h-[56px] touch-manipulation transform-gpu active:scale-[0.98]"
            >
              QUIERO EL SISTEMA COMPLETO
            </Button>
          </div>

          {/* Trust indicator - Below CTA */}
          <div className="text-center">
            <p className="text-novo-grey text-xs">{'Pago seguro \u2022 Acceso inmediato'}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
