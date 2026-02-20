import React from 'react';
import { Button } from './ui/button';
import { CheckCircle, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import novolabsHero from 'figma:asset/0ec5debbf555b71db07914d203718ce12290011f.png';
import { useABTest } from '../hooks/useABTest';

/**
 * Ejemplo de Hero Section con A/B Testing
 * 
 * VARIANTE A: Headline original enfocado en miedo/problema
 * VARIANTE B: Headline alternativo enfocado en beneficio/aspiración
 */
export function HeroSectionAB() {
  const { variant, isReady } = useABTest({ testName: 'hero_headline' });
  
  const handleCTAClick = () => {
    const element = document.getElementById('final-cta');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  // No renderizar hasta que la variante esté lista para evitar flash
  if (!isReady) {
    return null;
  }

  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Mobile-first single column layout */}
        <div className="space-y-8">
          {/* Pre-headline - Variante A vs B */}
          <div className="text-center">
            <span className="text-novo-white font-semibold leading-relaxed text-sm sm:text-base md:text-lg px-4 sm:px-0 whitespace-nowrap">
              {variant === 'A' 
                ? '¿Ganas de emprender y miedo a quemar ahorros?'
                : '¿Listo para lanzar tu emprendimiento sin riesgos?'
              }
            </span>
          </div>

          {/* Main Headline - Variante A vs B */}
          <div className="text-center space-y-6">
            <h1 className="thunder-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-novo-white leading-tight not-italic">
              {variant === 'A' ? (
                <>
                  Encontrá tu idea ganadora y su nicho de clientes{' '}
                  <span className="text-novo-secondary">en 7 días</span>
                </>
              ) : (
                <>
                  Validá tu idea con IA y conseguí tus primeros clientes{' '}
                  <span className="text-novo-secondary">en 1 semana</span>
                </>
              )}
            </h1>
            
            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-novo-grey leading-relaxed max-w-3xl mx-auto">
              {variant === 'A'
                ? 'Te damos un sistema 100% práctico con Asistentes de IA Especializados, para evaluar tus ideas y encontrar a tu cliente ideal.'
                : 'Sistema paso a paso con IA que te guía desde la idea hasta tus primeros clientes. Sin teoría, solo resultados.'
              }
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
              
              <div className="absolute -bottom-3 -left-3 bg-[rgba(255,58,32,0.35)] text-[rgba(255,255,255,1)] px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg flex items-center gap-2">
                <Shield className="w-4 h-4" />
                100% GARANTÍA
              </div>
            </div>
          </div>

          {/* Trust badges - Mobile optimized */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="flex items-center gap-2 bg-novo-background-2 p-3 rounded-lg border border-novo-grey/10">
              <CheckCircle className="w-5 h-5 text-novo-secondary flex-shrink-0" />
              <span className="text-xs sm:text-sm text-novo-white leading-tight">
                Sin experiencia previa necesaria
              </span>
            </div>
            <div className="flex items-center gap-2 bg-novo-background-2 p-3 rounded-lg border border-novo-grey/10">
              <CheckCircle className="w-5 h-5 text-novo-secondary flex-shrink-0" />
              <span className="text-xs sm:text-sm text-novo-white leading-tight">
                Sistema probado por +800 emprendedores
              </span>
            </div>
            <div className="flex items-center gap-2 bg-novo-background-2 p-3 rounded-lg border border-novo-grey/10">
              <CheckCircle className="w-5 h-5 text-novo-secondary flex-shrink-0" />
              <span className="text-xs sm:text-sm text-novo-white leading-tight">
                Soporte en español 7/24
              </span>
            </div>
          </div>

          {/* Primary CTA - Mobile optimized */}
          <div className="text-center space-y-4">
            <Button 
              onClick={handleCTAClick}
              className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 bg-novo-primary hover:bg-novo-primary/90 text-novo-white text-base sm:text-lg shadow-xl shadow-novo-primary/30"
            >
              QUIERO ENCONTRAR MI NICHO AHORA
            </Button>
            
            <p className="text-xs sm:text-sm text-novo-grey">
              🔒 Garantía de reembolso 100% | ⚡ Acceso inmediato
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
