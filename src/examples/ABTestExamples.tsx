import React from 'react';
import { useABTest } from '../hooks/useABTest';
import { Button } from '../components/ui/button';

/**
 * EJEMPLOS DE A/B TESTING PARA NOVOLABS
 * 
 * Este archivo muestra diferentes formas de implementar A/B testing
 * en tu landing page. Puedes usar estos patrones en cualquier componente.
 */

// ============================================
// EJEMPLO 1: Test de Headlines
// ============================================
export function HeadlineTest() {
  const { variant } = useABTest({ testName: 'hero_headline' });
  
  return (
    <h1 className="thunder-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-novo-white">
      {variant === 'A' 
        ? 'Encontrá tu idea ganadora en 7 días'
        : 'Validá tu idea con IA en 1 semana'
      }
    </h1>
  );
}

// ============================================
// EJEMPLO 2: Test de CTAs (Copy del botón)
// ============================================
export function CTAButtonTest() {
  const { variant } = useABTest({ testName: 'cta_button_copy' });
  
  return (
    <Button className="w-full sm:w-auto px-8 py-6 bg-novo-primary hover:bg-novo-primary/90">
      {variant === 'A'
        ? 'QUIERO ENCONTRAR MI NICHO AHORA'
        : 'EMPEZAR MI VALIDACIÓN GRATIS'
      }
    </Button>
  );
}

// ============================================
// EJEMPLO 3: Test de Precio (Mostrar descuento o no)
// ============================================
export function PriceDisplayTest() {
  const { variant } = useABTest({ testName: 'price_display' });
  
  if (variant === 'A') {
    // Mostrar precio tachado con descuento
    return (
      <div className="text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="text-novo-grey line-through text-xl">USD $297</span>
          <span className="text-novo-primary text-3xl">USD $97</span>
        </div>
        <p className="text-novo-secondary text-sm mt-2">
          ¡Ahorrás $200 hoy!
        </p>
      </div>
    );
  } else {
    // Mostrar solo precio final
    return (
      <div className="text-center">
        <div className="text-novo-primary text-3xl">USD $97</div>
        <p className="text-novo-grey text-sm mt-2">
          Inversión única
        </p>
      </div>
    );
  }
}

// ============================================
// EJEMPLO 4: Test de Garantía (30 vs 60 días)
// ============================================
export function GuaranteeTest() {
  const { variant } = useABTest({ testName: 'guarantee_duration' });
  
  const days = variant === 'A' ? 30 : 60;
  
  return (
    <div className="bg-novo-secondary/10 border-2 border-novo-secondary rounded-xl p-6">
      <h3 className="text-novo-white text-center mb-2">
        Garantía de {days} días
      </h3>
      <p className="text-novo-grey text-sm text-center">
        Si no encontrás valor, te devolvemos el 100% sin preguntas
      </p>
    </div>
  );
}

// ============================================
// EJEMPLO 5: Test de Urgencia (Countdown vs Scarcity)
// ============================================
export function UrgencyTest() {
  const { variant } = useABTest({ testName: 'urgency_type' });
  
  if (variant === 'A') {
    // Urgencia basada en tiempo
    return (
      <div className="bg-novo-primary/20 border border-novo-primary rounded-lg p-4 text-center">
        <p className="text-novo-white">
          ⏰ Esta oferta termina en:
        </p>
        <div className="text-novo-secondary text-2xl mt-2">
          23:45:12
        </div>
      </div>
    );
  } else {
    // Urgencia basada en escasez
    return (
      <div className="bg-novo-primary/20 border border-novo-primary rounded-lg p-4 text-center">
        <p className="text-novo-white">
          🔥 Solo quedan 7 cupos disponibles
        </p>
        <p className="text-novo-grey text-sm mt-1">
          No te quedes afuera
        </p>
      </div>
    );
  }
}

// ============================================
// EJEMPLO 6: Test de Testimonios (Video vs Texto)
// ============================================
export function TestimonialFormatTest() {
  const { variant } = useABTest({ testName: 'testimonial_format' });
  
  if (variant === 'A') {
    // Testimonial con foto y texto
    return (
      <div className="bg-novo-background-2 rounded-xl p-6 border border-novo-grey/10">
        <p className="text-novo-white italic mb-4">
          "Pasé de la idea al primer cliente en 10 días. Increíble."
        </p>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-novo-grey/20 rounded-full" />
          <div>
            <p className="text-novo-white text-sm">María González</p>
            <p className="text-novo-grey text-xs">Buenos Aires, Argentina</p>
          </div>
        </div>
      </div>
    );
  } else {
    // Testimonial formato tweet/screenshot
    return (
      <div className="bg-novo-background-2 rounded-xl p-6 border border-novo-grey/10 border-l-4 border-l-novo-secondary">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 bg-novo-grey/20 rounded-full" />
          <div>
            <p className="text-novo-white text-sm">@mariagonzalez</p>
            <p className="text-novo-grey text-xs">hace 2 días</p>
          </div>
        </div>
        <p className="text-novo-white">
          Pasé de la idea al primer cliente en 10 días. Increíble. 🚀
        </p>
      </div>
    );
  }
}

// ============================================
// EJEMPLO 7: Test de Valor Único (Features vs Beneficios)
// ============================================
export function ValuePropositionTest() {
  const { variant } = useABTest({ testName: 'value_prop_angle' });
  
  if (variant === 'A') {
    // Enfoque en features/características
    return (
      <div className="space-y-3">
        <h3 className="text-novo-white">Qué incluye:</h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-novo-grey">
            <span className="text-novo-secondary mt-1">✓</span>
            7 módulos en video
          </li>
          <li className="flex items-start gap-2 text-novo-grey">
            <span className="text-novo-secondary mt-1">✓</span>
            Asistentes de IA especializados
          </li>
          <li className="flex items-start gap-2 text-novo-grey">
            <span className="text-novo-secondary mt-1">✓</span>
            Templates y frameworks
          </li>
        </ul>
      </div>
    );
  } else {
    // Enfoque en beneficios/resultados
    return (
      <div className="space-y-3">
        <h3 className="text-novo-white">Qué lograrás:</h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-novo-grey">
            <span className="text-novo-secondary mt-1">✓</span>
            Validar tu idea sin gastar un peso
          </li>
          <li className="flex items-start gap-2 text-novo-grey">
            <span className="text-novo-secondary mt-1">✓</span>
            Encontrar a tu cliente ideal rápido
          </li>
          <li className="flex items-start gap-2 text-novo-grey">
            <span className="text-novo-secondary mt-1">✓</span>
            Lanzar con confianza en 7 días
          </li>
        </ul>
      </div>
    );
  }
}

// ============================================
// EJEMPLO 8: Test de Color del CTA Principal
// ============================================
export function CTAColorTest() {
  const { variant } = useABTest({ testName: 'cta_color' });
  
  const buttonClass = variant === 'A'
    ? 'bg-novo-primary hover:bg-novo-primary/90' // Rojo
    : 'bg-novo-secondary text-black hover:bg-novo-secondary/90'; // Verde lima
  
  return (
    <Button className={`w-full sm:w-auto px-8 py-6 ${buttonClass}`}>
      EMPEZAR AHORA
    </Button>
  );
}

// ============================================
// EJEMPLO 9: Test de Social Proof (Números vs Logos)
// ============================================
export function SocialProofTest() {
  const { variant } = useABTest({ testName: 'social_proof_type' });
  
  if (variant === 'A') {
    // Números y estadísticas
    return (
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-novo-secondary text-2xl">800+</div>
          <div className="text-novo-grey text-xs">Emprendedores</div>
        </div>
        <div>
          <div className="text-novo-secondary text-2xl">4.9/5</div>
          <div className="text-novo-grey text-xs">Valoración</div>
        </div>
        <div>
          <div className="text-novo-secondary text-2xl">15k+</div>
          <div className="text-novo-grey text-xs">Comunidad</div>
        </div>
      </div>
    );
  } else {
    // Logos de medios
    return (
      <div className="flex items-center justify-center gap-6 flex-wrap">
        <div className="text-novo-grey text-sm">Visto en:</div>
        <div className="opacity-60 text-novo-white text-xs">LA NACIÓN</div>
        <div className="opacity-60 text-novo-white text-xs">iPROFESIONAL</div>
      </div>
    );
  }
}

// ============================================
// EJEMPLO 10: Test de Orden de Secciones
// ============================================
export function SectionOrderTest({ children }: { children: React.ReactNode }) {
  const { variant } = useABTest({ testName: 'section_order' });
  
  // Este es un ejemplo conceptual - en la práctica reorganizarías 
  // las secciones en el componente principal
  
  return <>{children}</>;
}
