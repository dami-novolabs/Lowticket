# 🚀 PROMPT COMPLETO PARA V0 - LANDING PAGE NOVOLABS STARTUP SCHOOL

## 📋 INSTRUCCIONES PARA V0

Crea una landing page completa de conversión para **Novolabs Startup School** usando **Next.js 14+** con App Router, **React**, **TypeScript**, **Tailwind CSS v4** y **shadcn/ui**.

Esta es una landing page de alta conversión con 10 secciones principales, sistema de A/B testing completo, modal compartido con formulario embebido, y múltiples micro-interacciones optimizadas para mobile (todo el tráfico viene desde WhatsApp en dispositivos móviles de LATAM).

---

## 🎨 MANUAL DE MARCA NOVOLABS

### Colores Principales
```css
/* Colores de marca - Usar estrictamente estos */
--novo-primary: #FF3A20;        /* Rojo vibrante - CTAs principales */
--novo-secondary: #D4FF78;       /* Verde lima - Acentos y highlights */
--novo-background: #141414;      /* Fondo principal oscuro */
--novo-background-2: #1D1D1D;    /* Fondo secundario oscuro */
--novo-black: #000000;           /* Negro puro */
--novo-grey: #F2F2F2;            /* Gris claro para textos secundarios */
--novo-white: #FFFFFF;           /* Blanco para textos principales */
```

### Tipografías
```css
/* CRITICAL: Usar estas tipografías exactamente así */

/* Thunder (para títulos y headlines) */
.thunder-font {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-weight: 800;
  letter-spacing: -0.02em;
}

/* Satoshi (para body text) */
.satoshi-font {
  font-family: 'Satoshi', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

/* Import Satoshi */
@import url('https://fonts.googleapis.com/css2?family=Satoshi:wght@300;400;500;600;700;800;900&display=swap');
```

### Animaciones Personalizadas
```css
/* Animación de pulso suave con glow */
@keyframes pulse-glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(255, 58, 32, 0.3);
  }
  50% {
    box-shadow: 0 0 30px rgba(255, 58, 32, 0.6);
  }
}

.pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

/* Animación de shake para countdown */
@keyframes countdown-shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-2px); }
  75% { transform: translateX(2px); }
}

.countdown-shake {
  animation: countdown-shake 0.5s ease-in-out;
}

/* Animación float sutil */
@keyframes subtle-float {
  0%, 100% { 
    transform: translateY(0px) scale(1);
  }
  50% { 
    transform: translateY(-3px) scale(1.005);
  }
}

.premium-float {
  animation: subtle-float 3s ease-in-out infinite;
}

/* Animación pulse premium */
@keyframes gentle-pulse {
  0%, 100% { 
    box-shadow: 0 0 20px rgba(255, 58, 32, 0.3);
    transform: scale(1);
  }
  50% { 
    box-shadow: 0 0 25px rgba(255, 58, 32, 0.5);
    transform: scale(1.01);
  }
}

.premium-pulse {
  animation: gentle-pulse 2.5s ease-in-out infinite;
}

/* Scroll infinito para logos de prensa */
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
```

### Clases Utility Personalizadas
```css
/* Touch optimization para mobile */
.touch-manipulation {
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}

/* Transform optimizado para GPU */
.transform-gpu {
  transform: translateZ(0);
  will-change: transform;
}
```

---

## 📐 ESTRUCTURA COMPLETA DE LA LANDING PAGE

### Layout Principal (app/page.tsx)
```typescript
'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

// Componentes principales
import { StickyNavbar } from '@/components/StickyNavbar'
import { HeroSection } from '@/components/HeroSection'
import { SocialProofSection } from '@/components/SocialProofSection'
import { ProblemSection } from '@/components/ProblemSection'
import { DifferentiationSection } from '@/components/DifferentiationSection'
import { RoadmapSection } from '@/components/RoadmapSection'
import { OfferStackSection } from '@/components/OfferStackSection'
import { GuaranteeSection } from '@/components/GuaranteeSection'
import { FAQSection } from '@/components/FAQSection'
import { FinalCTASection } from '@/components/FinalCTASection'
import { StickyFloatingCTA } from '@/components/StickyFloatingCTA'
import { SemanticMetadata } from '@/components/SemanticMetadata'
import { RichSnippets } from '@/components/RichSnippets'
import ABTestDashboard from '@/components/ABTestDashboard'
import { ABTestingIndicator } from '@/components/ABTestingIndicator'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { trackABTestConversion } from '@/hooks/useABTest'

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isDashboardOpen, setIsDashboardOpen] = useState(false)
  
  // Keyboard shortcut: Ctrl/Cmd + Shift + A para abrir dashboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'A') {
        e.preventDefault()
        setIsDashboardOpen(prev => !prev)
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])
  
  // Track conversión cuando se abre el modal
  const handleOpenModal = () => {
    setIsModalOpen(true)
    
    // Track TODOS los tests activos
    trackABTestConversion('hero_pre_headline', 'cta_click')
    trackABTestConversion('hero_headline', 'cta_click')
    trackABTestConversion('hero_subheadline', 'cta_click')
    trackABTestConversion('hero_image', 'cta_click')
    trackABTestConversion('problem_title', 'cta_click')
    trackABTestConversion('problem_subtitle', 'cta_click')
    trackABTestConversion('social_proof_title', 'cta_click')
    trackABTestConversion('differentiation_title', 'cta_click')
    trackABTestConversion('differentiation_image', 'cta_click')
    trackABTestConversion('roadmap_title', 'cta_click')
    trackABTestConversion('roadmap_subtitle', 'cta_click')
    trackABTestConversion('offer_title', 'cta_click')
    trackABTestConversion('offer_subtitle', 'cta_click')
    trackABTestConversion('guarantee_title', 'cta_click')
    trackABTestConversion('faq_title', 'cta_click')
    trackABTestConversion('faq_subtitle', 'cta_click')
    trackABTestConversion('final_cta_pre_headline', 'cta_click')
    trackABTestConversion('final_cta_headline', 'cta_click')
    trackABTestConversion('sticky_cta_button', 'cta_click')
  }

  return (
    <div className="min-h-screen bg-novo-background text-novo-white overflow-x-hidden">
      <SemanticMetadata />
      <RichSnippets />
      <StickyNavbar />
      
      <main itemScope itemType="https://schema.org/WebPage" role="main">
        <HeroSection />
        <SocialProofSection />
        <ProblemSection />
        <RoadmapSection />
        <DifferentiationSection />
        <OfferStackSection onOpenModal={handleOpenModal} />
        <GuaranteeSection />
        <FAQSection />
        <FinalCTASection onOpenModal={handleOpenModal} />
      </main>
      
      <StickyFloatingCTA onOpenModal={handleOpenModal} />
      <ABTestingIndicator onClick={() => setIsDashboardOpen(true)} />
      <ABTestDashboard isOpen={isDashboardOpen} onClose={() => setIsDashboardOpen(false)} />
      
      {/* Footer */}
      <footer className="bg-novo-black py-6 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-4 text-novo-grey text-xs sm:text-sm">
              <a href="#" className="hover:text-novo-white transition-colors">Términos</a>
              <a href="#" className="hover:text-novo-white transition-colors">Privacidad</a>
              <a href="mailto:soporte@novolabs.com" className="hover:text-novo-white transition-colors">Soporte</a>
            </div>
          </div>
          <div className="text-center mt-4 pt-4 border-t border-novo-grey/20">
            <p className="text-novo-grey text-xs sm:text-sm">
              © 2025 Novolabs. Todos los derechos reservados.
            </p>
            <p className="text-novo-grey text-xs mt-1">
              Ayudando a emprendedores de Latinoamérica desde el 2019.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal compartido para TODOS los CTAs */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-lg w-[95vw] p-0 m-0 border-2 border-novo-primary/30 sm:max-w-2xl overflow-hidden bg-[#1E1B1B]">
          <iframe
            src="https://info.novolabs.xyz/widget/form/Nwsr5FOSTx7o6aVlRudg"
            style={{
              display: 'block',
              width: '100%',
              height: '352px',
              border: 'none',
              backgroundColor: '#1E1B1B',
              borderRadius: '3px',
              margin: '0',
              padding: '0'
            }}
            id="popup-Nwsr5FOSTx7o6aVlRudg" 
            data-layout='{"id":"POPUP"}'
            data-trigger-type="alwaysShow"
            data-form-name="Curso Novolabs"
            data-height="352"
            title="Curso Novolabs"
          />
        </DialogContent>
      </Dialog>
    </div>
  )
}
```

---

## 🧩 COMPONENTES DETALLADOS

### 1. StickyNavbar (components/StickyNavbar.tsx)
**Descripción**: Navbar sticky con logo centrado, texto de credibilidad y progress bar animado.

**Copywriting exacto**:
- Texto: "250+ Alumni en Latinoamérica"

**Características**:
- Progress bar que se llena con el scroll (0-100%)
- Gradiente novo-primary → novo-secondary en el progress bar
- Logo centrado con positioning absolute
- Mobile-first design

```typescript
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export function StickyNavbar() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full bg-novo-background-2/95 backdrop-blur-sm z-50">
      <div className="container mx-auto px-3 py-6 flex items-center justify-between relative">
        <div className="flex items-center gap-2 justify-center w-full absolute left-1/2 transform -translate-x-1/2">
          {/* Usar Image component de Next.js para el logo */}
          <Image 
            src="/images/novolabs-logo.png" 
            alt="Novolabs - Startup School" 
            width={120}
            height={40}
            className="h-10 w-auto"
          />
          <div className="block">
            <span className="text-novo-white/90 text-xs font-semibold">
              250+ Alumni en Latinoamérica
            </span>
          </div>
        </div>
      </div>
      
      {/* Progress Bar */}
      <div className="relative h-1 bg-novo-background-2">
        <div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-novo-primary to-novo-secondary transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </nav>
  )
}
```

---

### 2. HeroSection (components/HeroSection.tsx)
**Copywriting EXACTO (NO cambiar ni una palabra)**:

**Pre-headline**:
```
¿Ganas de emprender y miedo a quemar ahorros?
```

**Headline principal**:
```
Encontrá tu idea ganadora y su nicho de clientes en 7 días
```
(Nota: "en 7 días" debe estar en color novo-secondary)

**Sub-headline**:
```
Te damos un sistema 100% práctico con Asistentes de IA Especializados, para evaluar tus ideas y encontrar a tu cliente ideal.
```

**Precio**:
- Tachado: US$200
- Actual: US$47 (en color novo-primary)

**Garantía**:
```
Garantía de 7 días. Reembolso del 100%
```

**CTA Button**:
```
Ingresar ahora mismo
```

**Trust indicators**:
```
Pago seguro • Acceso inmediato
```

**Elementos visuales**:
- Imagen hero: foto de eventos/comunidad Novolabs
- Badge flotante superior derecha: "EST. 2019" (fondo rgba(212,255,120,0.35))
- Badge flotante inferior izquierda: "250+ Alumni en LATAM" (fondo rgba(255,58,32,0.35))

```typescript
'use client'

import { Button } from '@/components/ui/button'
import { Shield } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  const handleCTAClick = () => {
    const offerSection = document.querySelector('[data-section="offer-stack"]')
    if (offerSection) {
      offerSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-8">
          {/* Pre-headline */}
          <div className="text-center">
            <span className="text-novo-white font-semibold leading-relaxed text-sm sm:text-base md:text-lg px-4 sm:px-0 whitespace-nowrap">
              ¿Ganas de emprender y miedo a quemar ahorros?
            </span>
          </div>

          {/* Main Headline */}
          <div className="text-center space-y-6">
            <h1 className="thunder-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-novo-white leading-tight not-italic">
              Encontrá tu idea ganadora y su nicho de clientes{' '}
              <span className="text-novo-secondary">en 7 días</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-novo-grey leading-relaxed max-w-3xl mx-auto">
              Te damos un sistema 100% práctico con Asistentes de IA Especializados, para evaluar tus ideas y encontrar a tu cliente ideal.
            </p>
          </div>

          {/* Visual */}
          <div className="relative max-w-lg mx-auto">
            <div className="bg-novo-background-2 rounded-2xl p-2 border border-novo-grey/10 shadow-2xl">
              <Image 
                src="/images/novolabs-hero.png"
                alt="Eventos y comunidad Novolabs - Emprendedores de Latinoamérica en acción"
                width={600}
                height={400}
                className="w-full h-48 sm:h-64 object-cover rounded-xl"
              />
              
              {/* Floating badges */}
              <div className="absolute -top-3 -right-3 bg-[rgba(212,255,120,0.35)] text-[rgba(255,255,255,1)] px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg">
                EST. 2019
              </div>
              
              <div className="absolute -bottom-3 -left-3 bg-[rgba(255,58,32,0.35)] text-novo-white px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg">
                250+ Alumni en LATAM
              </div>
            </div>
          </div>

          {/* Pricing */}
          <div className="text-center space-y-4">
            <div className="flex justify-center items-baseline gap-3 flex-wrap">
              <span className="text-xl sm:text-2xl text-novo-grey line-through">US$200</span>
              <span className="thunder-font text-3xl sm:text-4xl text-novo-primary">US$47</span>
            </div>
            
            <div className="flex items-center justify-center gap-3">
              <Shield className="w-5 h-5 text-novo-secondary flex-shrink-0" />
              <span className="text-novo-grey text-sm sm:text-base">
                Garantía de 7 días. Reembolso del 100%
              </span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="px-4 sm:px-0 flex justify-center">
            <Button 
              onClick={handleCTAClick}
              className="w-full max-w-md mx-auto bg-novo-primary hover:bg-novo-primary/90 hover:scale-[1.02] text-novo-white px-8 py-5 rounded-lg text-lg font-bold transition-all duration-300 premium-float premium-pulse min-h-[56px] touch-manipulation transform-gpu active:scale-[0.98]"
            >
              Ingresar ahora mismo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="text-center">
            <p className="text-novo-grey text-sm">
              Pago seguro • Acceso inmediato
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

### 3. SocialProofSection (components/SocialProofSection.tsx)
**Copywriting EXACTO**:

**Título principal**:
```
250+ Emprendedores en 18 países lanzaron con Novo
```
(Nota: "250+ Emprendedores" en novo-secondary, "18 países" en novo-primary)

**Trustpilot badge**:
- Rating: 4.8 estrellas (4 completas + 1 a 70%)
- Logo de Trustpilot
- Color de estrellas: #00B67A (verde Trustpilot)

**Carousel de Reviews**:
- 14 imágenes de reviews reales
- Auto-play cada 4 segundos
- Pause on hover
- Mobile: 1 por slide, Desktop: 3 por slide
- Botones de navegación solo en desktop

**Logos de Prensa** (menciones):
- C5N
- Clarín
- Forbes
- LA NACIÓN
- iPROFESIONAL

**Mobile**: Scroll infinito animado
**Desktop**: Grid estático con hover effects (grayscale → color)

```typescript
'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

export function SocialProofSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [carouselApi, setCarouselApi] = useState<any>(null)

  // Reviews data
  const reviews = [
    { id: 1, alt: "Review de Soledad Martinez - Válido cada centavo", src: "/images/reviews/review-1.png" },
    { id: 2, alt: "Review de Ignacio Ferreira - Respuesta de leads, validación de problema", src: "/images/reviews/review-2.png" },
    // ... 14 reviews totales
  ]

  // Auto-play effect
  useEffect(() => {
    if (!carouselApi || !isAutoPlaying) return

    const interval = setInterval(() => {
      if (carouselApi.canScrollNext()) {
        carouselApi.scrollNext()
      } else {
        carouselApi.scrollTo(0)
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [carouselApi, isAutoPlaying])

  return (
    <section className="py-20 px-4 bg-novo-background-2">
      <div className="container mx-auto max-w-7xl">
        {/* Main Metric */}
        <div className="text-center mb-16">
          <h2 className="thunder-font text-3xl md:text-4xl text-novo-white text-[32px]">
            <span className="text-novo-secondary">250+ Emprendedores</span> en <span className="text-novo-primary">18 países</span> lanzaron con Novo
          </h2>
        </div>

        {/* Trustpilot Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 bg-[rgba(255,255,255,0.1)] px-3 py-1.5 rounded-lg mb-4">
            <span className="text-novo-white font-bold text-sm">4.8</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 relative" viewBox="0 0 24 24">
                  {/* Estrella con fill condicional */}
                  <path 
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
                    fill={i < 4 ? "#00B67A" : "#E5E7EB"} 
                  />
                  {i === 4 && (
                    <path 
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
                      fill="#00B67A"
                      style={{ clipPath: 'polygon(0% 0%, 70% 0%, 70% 100%, 0% 100%)' }}
                    />
                  )}
                </svg>
              ))}
            </div>
            <Image 
              src="/images/trustpilot-logo.png"
              alt="Trustpilot"
              width={60}
              height={14}
              className="h-3.5 w-auto"
            />
          </div>
        </div>

        {/* Reviews Carousel */}
        <div 
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full max-w-6xl mx-auto"
            setApi={setCarouselApi}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {reviews.map((review) => (
                <CarouselItem key={review.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <Image 
                      src={review.src}
                      alt={review.alt}
                      width={400}
                      height={300}
                      className="w-full h-auto object-contain"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="bg-novo-primary hover:bg-novo-primary/90 text-white border-novo-primary" />
              <CarouselNext className="bg-novo-primary hover:bg-novo-primary/90 text-white border-novo-primary" />
            </div>
          </Carousel>
        </div>

        {/* Texto histórico */}
        <div className="text-center mt-8">
          <p className="text-novo-grey text-sm">Desde el 2019 ayudando a emprendedores.</p>
        </div>

        {/* Press Mentions */}
        <div className="bg-gradient-to-r from-novo-background-2 via-novo-black to-novo-background-2 py-8 -mx-4 px-4 mt-20">
          <div className="container mx-auto max-w-6xl text-center">
            <h3 className="thunder-font text-novo-white mb-6 text-base sm:text-xl">
              Menciones en prensa:
            </h3>
            
            {/* Mobile: Animated scroll */}
            <div className="block sm:hidden">
              <div className="relative w-full max-w-xs mx-auto overflow-hidden">
                <div className="flex animate-[scroll_12s_linear_infinite] hover:[animation-play-state:paused]">
                  {[1, 2].map((iteration) => (
                    <div key={iteration} className="flex gap-10 shrink-0">
                      {['c5n', 'clarin', 'forbes', 'lanacion', 'iprofesional'].map((logo) => (
                        <div key={logo} className="flex justify-center items-center w-24">
                          <Image 
                            src={`/images/press/${logo}-logo.png`}
                            alt={`${logo} - Logo`}
                            width={96}
                            height={24}
                            className="h-6 w-auto filter grayscale opacity-70 drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]"
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Desktop: Static grid */}
            <div className="hidden sm:flex items-center justify-center gap-6 opacity-70">
              {['c5n', 'clarin', 'forbes', 'lanacion', 'iprofesional'].map((logo) => (
                <Image 
                  key={logo}
                  src={`/images/press/${logo}-logo.png`}
                  alt={`${logo} - Logo`}
                  width={120}
                  height={32}
                  className="h-8 w-auto filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

### 4. ProblemSection (components/ProblemSection.tsx)
**Copywriting EXACTO**:

**Título**:
```
¿Con qué situaciones te sentís identificado?
```

**Subtítulo**:
```
Hace clic en las que te pasan a vos (sé honesto)
```

**Lista de problemas** (5 items):
1. "Tengo 3+ ideas y no se cuál priorizar con criterios objetivos."
2. "No sé dónde encontrar a mis primeros clientes."
3. "No sé cómo definir el precio de mi producto/servicio."
4. "No sé cómo definir experimentos rápidos para validar mis hipótesis con clientes."
5. "No se medir la deseabilidad, viabilidad y factibilidad de mis ideas de negocio."

**Indicador de progreso**:
- 0-39%: "✅ Nivel moderado" (novo-secondary)
- 40-69%: "⚠️ Nivel alto" (yellow-400)
- 70%+: "🚨 Nivel crítico" (novo-primary)

**Modal de Urgencia** (se abre automáticamente al marcar 3+ items):

**Título del modal**:
```
Hace una pausa y responde 👇
```

**Pregunta**:
```
Dentro de 6 meses... ¿Preferís seguir estancado en el mismo escalón o tener tus primeros clientes?
```

**CTA del modal**:
```
Quiero que mi proyecto funcione
```

**Subtexto CTA**:
```
Accede de inmediato, por sólo 47 USD y Garantía del 100%
```

**Link secundario**:
```
Prefiero seguir improvisando (y procastinando)
```

**Agitation (después del checklist)**:

**Título**:
```
Por si aún no te diste cuenta 👇
```

**Copy**:
```
Invertir $47 USD para ahorrar un montón de tiempo y errores evitables es mucho más barato que seguir estancado sin llegar a nada.
```
(Nota: "$47 USD" en novo-primary y thunder-font, "ahorrar", "tiempo y errores evitables" en novo-secondary, "es", "barato" en novo-primary, "seguir estancado" en novo-secondary)

```typescript
'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/card'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { X, AlertTriangle } from 'lucide-react'

export function ProblemSection() {
  const [checkedItems, setCheckedItems] = useState<number[]>([])
  const [isUrgencyModalOpen, setIsUrgencyModalOpen] = useState(false)

  const problems = [
    "Tengo 3+ ideas y no se cuál priorizar con criterios objetivos.",
    "No sé dónde encontrar a mis primeros clientes.",
    "No sé cómo definir el precio de mi producto/servicio.",
    "No sé cómo definir experimentos rápidos para validar mis hipótesis con clientes.",
    "No se medir la deseabilidad, viabilidad y factibilidad de mis ideas de negocio."
  ]

  const toggleCheck = (index: number) => {
    setCheckedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  // Abrir modal cuando se marcan 3+ items
  useEffect(() => {
    if (checkedItems.length >= 3 && !isUrgencyModalOpen) {
      setIsUrgencyModalOpen(true)
    }
  }, [checkedItems.length, isUrgencyModalOpen])

  const checkedCount = checkedItems.length
  const percentage = Math.round((checkedCount / problems.length) * 100)

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="thunder-font text-2xl sm:text-3xl md:text-4xl text-novo-white mb-4">
            ¿Con qué situaciones te{" "}
            <span className="whitespace-nowrap">sentís identificado?</span>
          </h2>
          <p className="text-lg sm:text-xl text-novo-grey">
            Hace clic en las que te pasan a vos{" "}
            <span className="whitespace-nowrap">(sé honesto)</span>
          </p>
        </div>

        {/* Indicador de progreso */}
        {checkedCount > 0 && (
          <div className="mb-6 p-4 bg-novo-primary/10 rounded-lg border border-novo-primary/20 max-w-2xl mx-auto">
            <div className="text-center">
              {percentage >= 70 && (
                <span className="text-novo-primary font-semibold text-sm sm:text-base">
                  {checkedCount}/{problems.length} marcadas ({percentage}%) 🚨 Nivel crítico
                </span>
              )}
              {percentage >= 40 && percentage < 70 && (
                <span className="text-yellow-400 font-semibold text-sm sm:text-base">
                  {checkedCount}/{problems.length} marcadas ({percentage}%) ⚠️ Nivel alto
                </span>
              )}
              {percentage < 40 && (
                <span className="text-novo-secondary font-semibold text-sm sm:text-base">
                  ✅ Nivel moderado • {checkedCount}/{problems.length} ({percentage}%)
                </span>
              )}
            </div>
          </div>
        )}

        {/* Checklist interactivo */}
        <Card className="bg-novo-background-2 border-novo-primary/20 p-4 sm:p-6 mb-6">
          <div className="space-y-3">
            {problems.map((problem, index) => (
              <div 
                key={index}
                onClick={() => toggleCheck(index)}
                className={`flex items-start gap-3 p-4 rounded-lg cursor-pointer transition-all duration-300 touch-manipulation ${
                  checkedItems.includes(index) 
                    ? 'bg-novo-primary/20 border-novo-primary' 
                    : 'bg-novo-background border-novo-grey/20 hover:border-novo-primary/40'
                } border min-h-[60px]`}
              >
                <div className={`w-6 h-6 rounded border-2 flex-shrink-0 flex items-center justify-center mt-0.5 ${
                  checkedItems.includes(index)
                    ? 'bg-novo-primary border-novo-primary'
                    : 'border-novo-secondary'
                }`}>
                  {checkedItems.includes(index) && (
                    <X className="w-4 h-4 text-novo-white" />
                  )}
                </div>
                <span className={`text-sm sm:text-base leading-relaxed ${
                  checkedItems.includes(index) ? 'text-novo-white' : 'text-novo-grey'
                }`}>
                  {problem}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Modal de Urgencia */}
        <Dialog open={isUrgencyModalOpen} onOpenChange={() => {}}>
          <DialogContent 
            className="bg-gradient-to-br from-novo-primary to-red-600 border-2 border-novo-primary max-w-[95vw] sm:max-w-md mx-auto overflow-hidden"
            onEscapeKeyDown={(e) => e.preventDefault()}
            onPointerDownOutside={(e) => e.preventDefault()}
          >
            <DialogHeader className="relative z-10 text-center space-y-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-novo-white/20 rounded-full flex items-center justify-center mx-auto animate-pulse">
                <AlertTriangle className="w-6 h-6 sm:w-8 sm:h-8 text-novo-white" />
              </div>
              
              <DialogTitle className="thunder-font text-xl sm:text-4xl text-novo-white leading-tight text-center px-2">
                Hace una pausa y responde 👇
              </DialogTitle>
            </DialogHeader>

            <div className="relative z-10 space-y-4 mt-4">
              <div className="text-center">
                <div className="bg-novo-white/10 rounded-lg p-3 mb-4">
                  <p className="text-novo-white text-xs sm:text-sm">
                    Dentro de 6 meses... ¿Preferís seguir estancado en el mismo escalón o tener tus primeros clientes?
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  onClick={() => {
                    const offerSection = document.querySelector('[data-section="offer-stack"]')
                    if (offerSection) {
                      offerSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                    setTimeout(() => {
                      setIsUrgencyModalOpen(false)
                      setCheckedItems([])
                    }, 800)
                  }}
                  className="w-full bg-novo-white text-novo-primary hover:bg-novo-grey hover:scale-[1.02] py-4 text-base sm:text-lg font-bold rounded-lg transition-all duration-300 premium-float premium-pulse min-h-[50px] touch-manipulation transform-gpu active:scale-[0.98]"
                >
                  Quiero que mi proyecto funcione
                </Button>
                
                <div className="text-center">
                  <p className="text-novo-white/70 text-xs">
                    Accede de inmediato, por sólo 47 USD y Garantía del 100%
                  </p>
                </div>
                
                <button 
                  onClick={() => {
                    setIsUrgencyModalOpen(false)
                    setCheckedItems([])
                  }}
                  className="w-full text-novo-white/80 hover:text-novo-white text-xs sm:text-sm py-2 transition-colors touch-manipulation text-center underline"
                >
                  Prefiero seguir improvisando (y procastinando)
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Agitation */}
        <div className="text-center bg-novo-background-2 p-6 sm:p-8 rounded-2xl border border-novo-primary/20">
          <h3 className="thunder-font text-xl sm:text-2xl text-novo-white mb-3">
            Por si aún no te diste cuenta 👇
          </h3>
          <p className="text-lg sm:text-xl text-novo-grey leading-relaxed satoshi-font">
            Invertir <span className="text-novo-primary thunder-font font-bold">$47 USD</span> para <span className="text-novo-secondary font-semibold">ahorrar</span> un montón de <span className="text-novo-secondary font-semibold">tiempo y errores evitables</span> <span className="text-novo-primary font-semibold">es</span> mucho más <span className="text-novo-primary font-semibold">barato</span> que <span className="text-novo-secondary font-semibold">seguir estancado</span> sin llegar a nada.
          </p>
        </div>
      </div>
    </section>
  )
}
```

---

### 5. RoadmapSection (components/RoadmapSection.tsx)
**Copywriting EXACTO**:

**Título**:
```
Cronograma del curso
```

**Subtítulo**:
```
Cada módulo tiene objetivos claros, herramientas específicas para aplicar, tutoriales paso a paso y entregables concretos. Diseñado para que no haya lugar a confusiones.
```

**7 Días del Roadmap** (contenido exacto):

**Día 1**: Fundamentos del Emprendimiento
- Descripción: "Desarrollá la mentalidad correcta para emprender. Conocé los fundamentos del proceso de validación y configurá las herramientas que vas a usar durante todo el curso."
- Entregable: "Mentalidad y herramientas configuradas"

**Día 2**: Generación de Ideas
- Descripción: "Aprende a usar inteligencia artificial y pasa de 0 a 10+ ideas de negocio en minutos, sin quedarte paralizado frente a la hoja en blanco."
- Entregable: "Inventario completo de ideas"

**Día 3**: Selección de Idea ganadora
- Descripción: "Aprende a aplicar criterios objetivos para filtrar tus ideas y evitar decisiones basadas solo en intuición o emoción."
- Entregable: "Top 3 ideas priorizadas"

**Día 4**: Identificación de Nichos Rentables
- Descripción: "Aprende a identificar nichos de mercado donde la gente quiera y pueda pagar por tu producto/servicio."
- Entregable: "Análisis de nicho detallado"

**Día 5**: Descubrimiento de Problemas Urgentes
- Descripción: "Aprende a diferenciar entre lo que la gente dice que quiere / necesita y lo que en verdad está dispuesta a pagar."
- Entregable: "Mapa de problemas urgentes"

**Día 6**: Definición del Modelo de Negocios
- Descripción: "Aprende a estructurar tu idea y su modelo de negocios de forma clara y atacando los 9 cuadrantes del Lean Canvas."
- Entregable: "Modelo de negocio definido"

**Día 7**: Creación Experimentos de validación
- Descripción: "Pasa de la teoría a la práctica con pruebas rápidas que confirmen si tu idea genera tracción real de tus clientes."
- Entregable: "Plan de experimentos listo"

**Día 🎁 (Bonus)**: Preparación de entrevistas a clientes
- Descripción: "Aprende las bases de una buena entrevista: cómo escuchar, qué preguntar y cómo evitar cesgar las respuestas de tus potenciales clientes."
- Entregable: "Guión de entrevistas estructurado"

**Resumen final** (3 columnas):
```
✓ Una idea con potencial
✓ Un nicho con capacidad de pago
✓ Un plan de acción paso a paso
```

**Características visuales**:
- Línea vertical de timeline (gradiente novo-primary → novo-secondary → novo-primary)
- Dots en la línea con número del día
- Cards con hover effect (border cambia a novo-secondary/40)

```typescript
'use client'

import { Card } from '@/components/ui/card'
import { CheckCircle } from 'lucide-react'

export function RoadmapSection() {
  const roadmapDays = [
    {
      day: 1,
      title: "Fundamentos del Emprendimiento",
      description: "Desarrollá la mentalidad correcta para emprender. Conocé los fundamentos del proceso de validación y configurá las herramientas que vas a usar durante todo el curso.",
      deliverable: "Mentalidad y herramientas configuradas"
    },
    {
      day: 2, 
      title: "Generación de Ideas",
      description: "Aprende a usar inteligencia artificial y pasa de 0 a 10+ ideas de negocio en minutos, sin quedarte paralizado frente a la hoja en blanco.",
      deliverable: "Inventario completo de ideas"
    },
    {
      day: 3,
      title: "Selección de Idea ganadora",
      description: "Aprende a aplicar criterios objetivos para filtrar tus ideas y evitar decisiones basadas solo en intuición o emoción.",
      deliverable: "Top 3 ideas priorizadas"
    },
    {
      day: 4,
      title: "Identificación de Nichos Rentables",
      description: "Aprende a identificar nichos de mercado donde la gente quiera y pueda pagar por tu producto/servicio.",
      deliverable: "Análisis de nicho detallado"
    },
    {
      day: 5,
      title: "Descubrimiento de Problemas Urgentes", 
      description: "Aprende a diferenciar entre lo que la gente dice que quiere / necesita y lo que en verdad está dispuesta a pagar.",
      deliverable: "Mapa de problemas urgentes"
    },
    {
      day: 6,
      title: "Definición del Modelo de Negocios",
      description: "Aprende a estructurar tu idea y su modelo de negocios de forma clara y atacando los 9 cuadrantes del Lean Canvas.",
      deliverable: "Modelo de negocio definido"
    },
    {
      day: 7,
      title: "Creación Experimentos de validación",
      description: "Pasa de la teoría a la práctica con pruebas rápidas que confirmen si tu idea genera tracción real de tus clientes.",
      deliverable: "Plan de experimentos listo"
    },
    {
      day: "🎁",
      title: "Bonus: Preparación de entrevistas a clientes",
      description: "Aprende las bases de una buena entrevista: cómo escuchar, qué preguntar y cómo evitar cesgar las respuestas de tus potenciales clientes.",
      deliverable: "Guión de entrevistas estructurado"
    }
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="thunder-font text-2xl sm:text-3xl md:text-4xl text-novo-white mb-4">
            Cronograma del curso
          </h2>
          
          <p className="text-lg sm:text-xl text-novo-grey max-w-3xl mx-auto">
            Cada módulo tiene objetivos claros, herramientas específicas para aplicar, tutoriales paso a paso y entregables concretos. Diseñado para que no haya lugar a confusiones.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-novo-primary via-novo-secondary to-novo-primary"></div>

          {/* Roadmap items */}
          <div className="space-y-8">
            {roadmapDays.map((day) => (
              <div key={day.day} className="relative flex items-start gap-6 pl-16">
                {/* Timeline dot */}
                <div className="absolute left-3 top-7 w-6 h-6 bg-novo-primary rounded-full border-4 border-novo-background flex items-center justify-center z-10">
                  <span className="block sm:hidden text-novo-white text-xs font-bold">{day.day}</span>
                </div>

                {/* Content card */}
                <Card className="w-full bg-novo-background-2 border-novo-primary/20 p-4 sm:p-5 hover:border-novo-secondary/40 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="hidden sm:flex w-10 h-10 bg-novo-primary/20 rounded-lg items-center justify-center flex-shrink-0">
                      <span className="text-novo-primary font-bold text-lg">{day.day}</span>
                    </div>
                    <div className="flex-1">
                      <div className="thunder-font text-novo-white sm:text-lg leading-tight text-[20px]">
                        {day.title}
                      </div>
                    </div>
                  </div>

                  <p className="text-novo-grey text-sm sm:text-base leading-relaxed">
                    {day.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-novo-primary/10 to-novo-secondary/10 border-novo-primary/20 p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="thunder-font text-xl sm:text-2xl text-novo-white mb-6">
              Al finalizar este curso obtendrás:
            </h3>
            <div className="space-y-3 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6">
              <div className="flex items-center gap-3 sm:flex-col sm:text-center sm:gap-0">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-novo-secondary flex-shrink-0 sm:mx-auto sm:mb-2" />
                <div className="text-novo-white font-semibold text-sm sm:text-base">Una idea con potencial</div>
              </div>
              <div className="flex items-center gap-3 sm:flex-col sm:text-center sm:gap-0">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-novo-secondary flex-shrink-0 sm:mx-auto sm:mb-2" />
                <div className="text-novo-white font-semibold text-sm sm:text-base">Un nicho con capacidad de pago</div>
              </div>
              <div className="flex items-center gap-3 sm:flex-col sm:text-center sm:gap-0">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-novo-secondary flex-shrink-0 sm:mx-auto sm:mb-2" />
                <div className="text-novo-white font-semibold text-sm sm:text-base">Un plan de acción paso a paso</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
```

---

### 6. DifferentiationSection (components/DifferentiationSection.tsx)
**Copywriting EXACTO**:

**Título principal**:
```
Aprendé directo de emprendedores que ya recorrieron este camino
```

**Fundadores**:
```
Tomás Volonté y Damián Sánchez
Co-fundadores de Novolabs Startup School
```

**Bio**:
```
Más de 10 años de experiencia emprendiendo y 6 años construyendo Novolabs. Ya vivimos en carne propia lo que se siente empezar de cero, muchas veces, cagarla, aprender, ajustar y volver a intentar.
```

**Sobre Novolabs**:
**Título**: "Sobre Novolabs Startup School"
```
Estamos construyendo la empresa que nos hubiera gustado que exista hace 10 años cuando empezamos a emprender. Sin teorías vacías, sin brillitos de colores y lo más importante de todo: libre de vendehúmos.
```

**Métricas** (4 columnas):
- +250 | Estudiantes
- +100 | Proyectos Lanzados
- 9.2 | NPS (en novo-secondary)
- 6 años | Ayudando emprendedores

**Elementos visuales**:
- Imagen de los founders (aspect-ratio 4:3)
- En mobile: la imagen va ANTES del contenido
- En desktop: imagen a la izquierda, contenido a la derecha

```typescript
'use client'

import { Card } from '@/components/ui/card'
import Image from 'next/image'

export function DifferentiationSection() {
  return (
    <section className="py-20 px-4 bg-novo-background-2">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="thunder-font text-3xl md:text-5xl text-novo-white mb-6 max-w-4xl mx-auto">
            Aprendé directo de emprendedores que ya recorrieron este camino
          </h2>
        </div>

        {/* Mobile Image - Only visible on mobile */}
        <div className="block lg:hidden mb-12">
          <div className="aspect-[4/3] bg-novo-background rounded-2xl overflow-hidden">
            <Image 
              src="/images/founders.png"
              alt="Fundadores de Novolabs"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image - Hidden on mobile */}
          <div className="order-2 lg:order-1 hidden lg:block">
            <div className="aspect-[4/3] bg-novo-background rounded-2xl overflow-hidden">
              <Image 
                src="/images/founders.png"
                alt="Fundadores de Novolabs"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Founders */}
            <div>
              <h3 className="thunder-font text-xl sm:text-2xl text-novo-white mb-2">
                Tomás Volonté y Damián Sánchez
              </h3>
              <p className="text-novo-secondary mb-4">
                Co-fundadores de Novolabs Startup School
              </p>
              <p className="text-novo-grey leading-relaxed">
                Más de 10 años de experiencia emprendiendo y 6 años construyendo Novolabs. Ya vivimos en carne propia lo que se siente empezar de cero, muchas veces, cagarla, aprender, ajustar y volver a intentar.
              </p>
            </div>

            {/* About section */}
            <div>
              <h4 className="thunder-font text-lg text-novo-white mb-3 tracking-wider">
                Sobre Novolabs Startup School
              </h4>
              <p className="text-novo-grey leading-relaxed">
                Estamos construyendo la empresa que nos hubiera gustado que exista hace 10 años cuando empezamos a emprender. Sin teorías vacías, sin brillitos de colores y lo más importante de todo: libre de vendehúmos.
              </p>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="thunder-font text-2xl md:text-3xl text-novo-white mb-1">
                  +250
                </div>
                <div className="text-novo-grey text-sm">
                  Estudiantes
                </div>
              </div>
              <div className="text-center">
                <div className="thunder-font text-2xl md:text-3xl text-novo-white mb-1">
                  +100
                </div>
                <div className="text-novo-grey text-sm">
                  Proyectos Lanzados
                </div>
              </div>
              <div className="text-center">
                <div className="thunder-font text-2xl md:text-3xl text-novo-secondary mb-1">
                  9.2
                </div>
                <div className="text-novo-grey text-sm">
                  NPS
                </div>
              </div>
              <div className="text-center">
                <div className="thunder-font text-2xl md:text-3xl text-novo-white mb-1">
                  6 años
                </div>
                <div className="text-novo-grey text-sm">
                  Ayudando emprendedores
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

### 7. OfferStackSection (components/OfferStackSection.tsx)
**Copywriting EXACTO**:

**Título principal**:
```
Empezá a trabajar en una idea que tenga potencial
```

**Subtítulo**:
```
Por menos de lo que cuesta una cena para 2 en un restaurante.
```

**Precio**:
- Tachado: $200 USD
- Actual: $47 USD (gradiente novo-primary)

**CTA dentro del pricing card**:
```
👉 Acceder ahora
```

**Subtexto**:
```
Garantía de 7 días. Reembolso del 100%.
```

**Trust badges**:
- Shield icon: "Pago Seguro"
- Logo: "STRIPE" (color #635BFF)

**¿Qué incluye? - Contenido del Curso**:
✓ Acceso de por vida al contenido del curso.
✓ Acceso a 7 módulos paso a paso para validar tu idea.
✓ Acceso a 7 Asistentes de IA Especializados.
✓ Acceso a plantillas y herramientas descargables.
✓ Acceso a un Certificado al completar el Curso al 100%.
✓ Soporte por canal de WhatsApp para resolver dudas del curso.

**Contenido Bonus**:
🎁 Bonus #1: Mini-tutorial: Cómo entrevistar clientes.
🎁 Bonus #2: Asistente de IA entrenado para Entrevistar clientes.
🎁 Bonus #3: Cupón de US$ 300 OFF para el "Programa Lanzar".

**CTA Principal (fuera del pricing card)**:
```
👉 Acceso inmediato
```

**Elementos visuales**:
- Background glow effects (gradientes sutiles)
- Corner accent decorations
- Premium float y premium pulse en botones

```typescript
'use client'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, Shield } from 'lucide-react'

interface OfferStackSectionProps {
  onOpenModal: () => void
}

export function OfferStackSection({ onOpenModal }: OfferStackSectionProps) {
  return (
    <section data-section="offer-stack" className="py-16 px-4 bg-novo-background-2">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-gradient-to-br from-novo-background to-novo-background-2 border-2 border-novo-primary/30 p-6 sm:p-8 md:p-12 relative overflow-hidden shadow-2xl">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-novo-primary/5 via-transparent to-novo-secondary/5 pointer-events-none"></div>
          
          <div className="relative z-10">
            {/* Título Principal */}
            <div className="text-center mb-16">
              <h2 className="thunder-font text-3xl sm:text-4xl md:text-5xl text-novo-white mb-6 leading-tight">
                Empezá a trabajar en una idea que tenga potencial
              </h2>
              <p className="text-xl sm:text-2xl text-novo-grey max-w-3xl mx-auto font-light">
                Por menos de lo que cuesta una cena para 2 en un restaurante.
              </p>
            </div>

            {/* Tarjeta de Pricing */}
            <div className="max-w-md mx-auto mb-16">
              <Card className="bg-gradient-to-br from-novo-background-2 to-novo-background border-2 border-novo-primary/40 p-8 sm:p-10 text-center relative overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-novo-primary/5 to-transparent pointer-events-none"></div>
                
                <div className="relative z-10">
                  {/* Old price */}
                  <div className="text-novo-grey/60 text-lg sm:text-xl line-through mb-3 font-medium">$200 USD</div>
                  
                  {/* Current price */}
                  <div className="mb-6">
                    <div className="thunder-font text-6xl sm:text-7xl text-transparent bg-gradient-to-r from-novo-primary to-novo-primary/80 bg-clip-text leading-none relative inline-block pr-12 sm:pr-16">
                      $47
                      <span className="text-novo-white text-base sm:text-lg font-medium absolute -top-1 sm:-top-2 -right-0 sm:-right-2">
                        USD
                      </span>
                    </div>
                  </div>

                  {/* CTA dentro del pricing card */}
                  <div className="text-center mt-6">
                    <Button 
                      onClick={onOpenModal}
                      className="w-full bg-novo-primary hover:bg-novo-primary/90 hover:scale-[1.02] text-novo-white px-6 py-4 text-lg font-bold rounded-lg transition-all duration-300 premium-float premium-pulse mb-4 transform-gpu active:scale-[0.98]"
                    >
                      👉 Acceder ahora
                    </Button>
                    
                    <p className="text-novo-grey mt-3 text-sm font-medium">
                      Garantía de 7 días. Reembolso del 100%.
                    </p>
                    <div className="flex items-center justify-center gap-3 text-novo-grey text-sm mt-3">
                      <div className="flex items-center gap-1">
                        <Shield className="w-4 h-4 text-novo-secondary" />
                        <span className="font-medium">Pago Seguro</span>
                      </div>
                      <div className="w-px h-4 bg-novo-grey/30"></div>
                      <div className="flex items-center gap-1">
                        <span className="text-[#635BFF] font-bold tracking-wider text-xs">STRIPE</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-bl from-novo-primary/20 to-transparent rounded-bl-full"></div>
              </Card>
            </div>

            {/* ¿Qué incluye? */}
            <div className="mb-16">
              <div className="max-w-3xl mx-auto">
                <div className="mb-10">
                  <h4 className="text-novo-white font-semibold text-lg mb-6 text-[20px]">
                    Contenido del Curso:
                  </h4>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4 group">
                      <CheckCircle className="w-5 h-5 text-novo-secondary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-novo-grey group-hover:text-novo-white transition-colors">Acceso de por vida al contenido del curso.</span>
                    </div>
                    
                    <div className="flex items-start gap-4 group">
                      <CheckCircle className="w-5 h-5 text-novo-secondary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-novo-grey group-hover:text-novo-white transition-colors">Acceso a 7 módulos paso a paso para validar tu idea.</span>
                    </div>
                    
                    <div className="flex items-start gap-4 group">
                      <CheckCircle className="w-5 h-5 text-novo-secondary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-novo-grey group-hover:text-novo-white transition-colors">Acceso a 7 Asistentes de IA Especializados.</span>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <CheckCircle className="w-5 h-5 text-novo-secondary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-novo-grey group-hover:text-novo-white transition-colors">Acceso a plantillas y herramientas descargables.</span>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <CheckCircle className="w-5 h-5 text-novo-secondary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-novo-grey group-hover:text-novo-white transition-colors">Acceso a un Certificado al completar el Curso al 100%.</span>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <CheckCircle className="w-5 h-5 text-novo-secondary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="text-novo-grey group-hover:text-novo-white transition-colors">Soporte por canal de WhatsApp para resolver dudas del curso.</span>
                    </div>
                  </div>
                </div>

                {/* Separador visual */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-novo-primary/30 to-transparent mb-10"></div>

                {/* Bonus */}
                <div>
                  <h4 className="text-novo-white font-semibold text-lg mb-6">
                    Contenido Bonus
                  </h4>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4 group">
                      <span className="text-xl mt-1 flex-shrink-0 group-hover:scale-110 transition-transform">🎁</span>
                      <span className="text-novo-grey group-hover:text-novo-white transition-colors">Bonus #1: Mini-tutorial: Cómo entrevistar clientes.</span>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <span className="text-xl mt-1 flex-shrink-0 group-hover:scale-110 transition-transform">🎁</span>
                      <span className="text-novo-grey group-hover:text-novo-white transition-colors">Bonus #2: Asistente de IA entrenado para Entrevistar clientes.</span>
                    </div>

                    <div className="flex items-start gap-4 group">
                      <span className="text-xl mt-1 flex-shrink-0 group-hover:scale-110 transition-transform">🎁</span>
                      <span className="text-novo-grey group-hover:text-novo-white transition-colors">Bonus #3: Cupón de US$ 300 OFF para el "Programa Lanzar".</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Principal */}
            <div className="text-center mb-12">
              <Button 
                onClick={onOpenModal}
                className="bg-novo-primary hover:bg-novo-primary/90 hover:scale-[1.02] text-novo-white px-10 py-5 text-xl font-bold rounded-lg transition-all duration-300 premium-float premium-pulse mb-6 transform-gpu active:scale-[0.98]"
              >
                <span className="mr-2 text-lg">👉</span>
                Acceso inmediato
              </Button>
              
              <div className="flex items-center justify-center gap-4 mt-6 text-novo-grey">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-novo-secondary" />
                  <span className="font-medium">Pago Seguro</span>
                </div>
                <div className="w-px h-5 bg-novo-grey/30"></div>
                <div className="flex items-center gap-2">
                  <span className="text-[#635BFF] font-bold tracking-wider">STRIPE</span>
                </div>
              </div>
              <p className="text-novo-grey mt-4 text-lg font-medium">
                Garantía de 7 días. Reembolso del 100%.
              </p>
            </div>
          </div>
          
          {/* Corner accent decorations */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-novo-secondary/10 to-transparent rounded-br-full opacity-50"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-novo-primary/10 to-transparent rounded-tl-full opacity-50"></div>
        </Card>
      </div>
    </section>
  )
}
```

---

### 8. GuaranteeSection (components/GuaranteeSection.tsx)
**Copywriting EXACTO**:

**Título**:
```
Garantía sin letra chica
```

**Copy principal**:
```
Si después de completar todos los módulos y entregables del curso, no obtuviste una idea clara + un nicho claro + un experimento ejecutable, te devolvemos tu inversión.
```

**2 bloques** (grid de 2 columnas):
1. RefreshCw icon: "Reembolso en 48hs máximo"
2. Shield icon: "Devolución del 100%"

```typescript
'use client'

import { Card } from '@/components/ui/card'
import { Shield, RefreshCw } from 'lucide-react'

export function GuaranteeSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-gradient-to-br from-novo-secondary/10 to-novo-primary/10 border-novo-secondary/20 p-8 md:p-12 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <Shield className="w-full h-full text-novo-secondary" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="hidden sm:flex w-20 h-20 bg-novo-secondary/20 rounded-full items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-novo-secondary" />
            </div>

            <h3 className="thunder-font text-2xl md:text-3xl text-novo-white mb-6">
              Garantía sin letra chica
            </h3>

            <div className="max-w-2xl mx-auto space-y-6">
              <p className="text-lg text-novo-grey leading-relaxed">
                Si después de completar todos los módulos y entregables del curso, no obtuviste una idea clara + un nicho claro + un experimento ejecutable, te devolvemos tu inversión.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mt-8 justify-center max-w-2xl mx-auto">
                <div className="text-center">
                  <RefreshCw className="w-8 h-8 text-novo-secondary mx-auto mb-3" />
                  <div className="text-novo-white font-semibold mb-2">Reembolso en 48hs máximo</div>
                </div>
                
                <div className="text-center">
                  <Shield className="w-8 h-8 text-novo-secondary mx-auto mb-3" />
                  <div className="text-novo-white font-semibold mb-2">Devolución del 100%</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
```

---

### 9. FAQSection (components/FAQSection.tsx)
**Copywriting EXACTO**:

**Título**:
```
Si aún quedan dudas...
```

**Subtítulo**:
```
Las preguntas más frecuentes de la comunidad
```

**10 FAQs** (usar Accordion de shadcn/ui):

**1. ¿El curso es en vivo?**
"No, este curso no es en vivo. Todo el contenido está pregrabado y disponible 24/7 para que puedas avanzar a tu ritmo y en tus propios horarios. Además, tienes acceso de por vida al contenido, lo que significa que puedes repetir el curso las veces que quieras con cualquier nueva idea de negocio que se te ocurra en el futuro."

**2. ¿Cuánto tiempo necesito dedicarle por día?**
"El curso no tiene una cantidad de horas definida como tal. Esta diseñado para personas ocupadas. La idea es que puedas hacerlo en los días que puedas destinar 90 minutos de foco continuo."

**3. ¿Funciona para cualquier tipo de negocio?**
"Sí, el método funciona para productos digitales, servicios, e-commerce, SaaS, consultoría, etc. Los principios de validación son universales."

**4. ¿Puedo pagar desde LATAM?**
"Si, aceptamos pagos en dólares desde toda Latinoamérica. Nuestro proveedor de pagos es Stripe, empresa líder en infraestructura de pagos para comercio internacional."

**5. ¿Cuál es la diferencia con el programa de 4 meses?**
"Este curso es para quienes no están seguros del potencial de su idea de negocio. El Programa 'Lanzar' de 4 meses es para personas que están listas para ejecutar y construir su negocio. Este curso es el primer paso."

**6. ¿Qué pasa si mi experimento 'falla'?**
"¡Perfecto! Un experimento que 'falla' te ahorra meses de tiempo y dinero. El objetivo es encontrar la verdad, no confirmar lo que querés escuchar. Podes volver a repetir el proceso con otro experimento u otra idea de negocios."

**7. ¿Necesito conocimientos técnicos?**
"No. Este curso lo han completado con éxito personas no-técnicas de 55+años. Los Asistentes de IA Especializados de Novolabs hacen el trabajo pesado."

**8. ¿Hay soporte o comunidad?**
"Si, tendrás soporte por WhatsApp durante los primeros 7 días del curso. Para acceder a la comunidad de emprendedores y al soporte extendido esta el Programa 'Lanzar' de 4 meses."

**9. ¿Qué pasa después del curso?**
"Tendrás una idea de negocios estructurada, un nicho de clientes con capacidad de pago y un plan de acción definido. Podes ejecutarlo por tu cuenta o unirte al Programa 'Lanzar' de 4 meses con $300 USD de descuento (bono incluido)."

**10. ¿Es realmente una garantía sin letra chica?**
"Sí. Si seguís el método y no tenés claridad al día 7, reembolsamos 100% en 48hs. Sin preguntas. Así de simple."

**CTA de WhatsApp** (al final):
- Título: "¿Tenés otra pregunta?"
- Subtítulo: "¡Hablemos por WhatsApp!"
- Botón: "Abrir WhatsApp" (color #25D366 → #1DA851 en hover)
- Link: https://wa.me/5491163544698?text=Hola!%20Tengo%20una%20consulta%20sobre%20el%20Curso%20de%207%20días%20de%20Novolabs

```typescript
'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export function FAQSection() {
  const faqs = [
    {
      question: "¿El curso es en vivo?",
      answer: "No, este curso no es en vivo. Todo el contenido está pregrabado y disponible 24/7 para que puedas avanzar a tu ritmo y en tus propios horarios. Además, tienes acceso de por vida al contenido, lo que significa que puedes repetir el curso las veces que quieras con cualquier nueva idea de negocio que se te ocurra en el futuro."
    },
    {
      question: "¿Cuánto tiempo necesito dedicarle por día?",
      answer: "El curso no tiene una cantidad de horas definida como tal. Esta diseñado para personas ocupadas. La idea es que puedas hacerlo en los días que puedas destinar 90 minutos de foco continuo."
    },
    {
      question: "¿Funciona para cualquier tipo de negocio?",
      answer: "Sí, el método funciona para productos digitales, servicios, e-commerce, SaaS, consultoría, etc. Los principios de validación son universales."
    },
    {
      question: "¿Puedo pagar desde LATAM?",
      answer: "Si, aceptamos pagos en dólares desde toda Latinoamérica. Nuestro proveedor de pagos es Stripe, empresa líder en infraestructura de pagos para comercio internacional."
    },
    {
      question: "¿Cuál es la diferencia con el programa de 4 meses?",
      answer: "Este curso es para quienes no están seguros del potencial de su idea de negocio. El Programa 'Lanzar' de 4 meses es para personas que están listas para ejecutar y construir su negocio. Este curso es el primer paso."
    },
    {
      question: "¿Qué pasa si mi experimento 'falla'?",
      answer: "¡Perfecto! Un experimento que 'falla' te ahorra meses de tiempo y dinero. El objetivo es encontrar la verdad, no confirmar lo que querés escuchar. Podes volver a repetir el proceso con otro experimento u otra idea de negocios."
    },
    {
      question: "¿Necesito conocimientos técnicos?",
      answer: "No. Este curso lo han completado con éxito personas no-técnicas de 55+años. Los Asistentes de IA Especializados de Novolabs hacen el trabajo pesado."
    },
    {
      question: "¿Hay soporte o comunidad?",
      answer: "Si, tendrás soporte por WhatsApp durante los primeros 7 días del curso. Para acceder a la comunidad de emprendedores y al soporte extendido esta el Programa 'Lanzar' de 4 meses."
    },
    {
      question: "¿Qué pasa después del curso?",
      answer: "Tendrás una idea de negocios estructurada, un nicho de clientes con capacidad de pago y un plan de acción definido. Podes ejecutarlo por tu cuenta o unirte al Programa 'Lanzar' de 4 meses con $300 USD de descuento (bono incluido)."
    },
    {
      question: "¿Es realmente una garantía sin letra chica?",
      answer: "Sí. Si seguís el método y no tenés claridad al día 7, reembolsamos 100% en 48hs. Sin preguntas. Así de simple."
    }
  ]

  return (
    <section className="py-16 px-4 bg-novo-background-2">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="thunder-font text-2xl sm:text-3xl md:text-4xl text-novo-white mb-4">
            Si aún quedan dudas...
          </h2>
          <p className="text-lg sm:text-xl text-novo-grey">
            Las preguntas más frecuentes de la comunidad
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-novo-background border border-novo-primary/20 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-4 sm:px-6 py-4 text-left text-novo-white hover:text-novo-secondary hover:no-underline text-sm sm:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 sm:px-6 pb-4 text-novo-grey leading-relaxed text-sm sm:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* WhatsApp CTA */}
        <div className="mt-12 text-center">
          <div className="bg-novo-background-2 border border-novo-primary/20 rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Left Side - Text */}
              <div className="flex-1">
                <h3 className="thunder-font text-2xl md:text-3xl text-novo-white mb-2">
                  ¿Tenés otra pregunta?
                </h3>
                <p className="text-novo-grey text-lg">
                  ¡Hablemos por WhatsApp!
                </p>
              </div>
              
              {/* Center Arrow */}
              <div className="hidden md:block">
                <svg 
                  className="w-12 h-8 text-novo-secondary" 
                  viewBox="0 0 48 32" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M2 16H46M46 16L32 2M46 16L32 30" 
                    stroke="currentColor" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              
              {/* Right Side - WhatsApp Button */}
              <div className="flex-1 flex justify-center md:justify-end">
                <a 
                  href="https://wa.me/5491163544698?text=Hola!%20Tengo%20una%20consulta%20sobre%20el%20Curso%20de%207%20días%20de%20Novolabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1DA851] text-white px-6 py-3 rounded-lg transition-colors duration-200 opacity-80 hover:opacity-100"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                  <span className="font-semibold text-lg">Abrir WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

### 10. FinalCTASection (components/FinalCTASection.tsx)
**Copywriting EXACTO**:

**Pre-headline**:
```
¿Listo para dar el primer paso?
```

**Headline principal**:
```
Encontrá una idea con potencial y un nicho con capacidad de pago
```

**CTA Button**:
```
Emprender con Novolabs
```

**Subtexto**:
```
Acceso inmediato. Garantía de 7 días.
```

**Validación social** (fuera del card):
```
250+ personas en Latinoamérica ya lanzaron con Novo
```

**Badge de Trustpilot**:
- Rating: 4.8
- Logo de Trustpilot

**Características visuales**:
- Fondo novo-secondary (amarillo-verde)
- Texto en novo-black
- Card con bordes redondeados

```typescript
'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface FinalCTASectionProps {
  onOpenModal: () => void
}

export function FinalCTASection({ onOpenModal }: FinalCTASectionProps) {
  return (
    <section id="final-cta" className="py-20 px-4 bg-novo-background">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-novo-secondary border-0 rounded-2xl p-8 md:p-16">
          <div className="text-center">
            {/* Small text above */}
            <p className="text-novo-black text-lg mb-6 satoshi-font">
              ¿Listo para dar el primer paso?
            </p>
            
            {/* Main headline */}
            <h2 className="thunder-font text-xl sm:text-3xl md:text-4xl lg:text-5xl text-novo-black mb-8 leading-tight">
              Encontrá una idea con potencial y un nicho con capacidad de pago
            </h2>
            
            {/* CTA Button */}
            <Button 
              onClick={onOpenModal}
              size="lg"
              className="bg-novo-primary hover:bg-novo-primary/90 hover:scale-[1.02] text-novo-white px-8 py-4 text-lg font-bold rounded-lg mb-4 transition-all duration-300 premium-float premium-pulse transform-gpu active:scale-[0.98]"
            >
              Emprender con Novolabs
            </Button>
            
            {/* Guarantee text */}
            <p className="text-novo-black satoshi-font font-medium text-sm mb-4">
              Acceso inmediato. Garantía de 7 días.
            </p>
          </div>
        </Card>
        
        {/* Social Validation Text - Outside Card */}
        <p className="text-novo-white satoshi-font font-medium text-sm text-center mt-6 mb-4">
          250+ personas en Latinoamérica ya lanzaron con Novo
        </p>
        
        {/* Trustpilot Rating Only - Outside Card */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-1.5 bg-[rgba(255,255,255,0.1)] px-3 py-1.5 rounded-lg">
            <span className="text-novo-white font-bold text-sm">4.8</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 relative" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
                        fill="#E5E7EB" />
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
                        fill="#00B67A"
                        clipPath={i < 4 ? undefined : "inset(0 30% 0 0)"} 
                        style={{ 
                          clipPath: i < 4 ? undefined : 'polygon(0% 0%, 70% 0%, 70% 100%, 0% 100%)'
                        }} />
                </svg>
              ))}
            </div>
            <span className="text-novo-white font-semibold text-sm">Trustpilot</span>
          </div>
        </div>
      </div>
    </section>
  )
}
```

---

### 11. StickyFloatingCTA (components/StickyFloatingCTA.tsx)
**Descripción**: CTA flotante que aparece después de scrollear 800px y se oculta cuando el usuario está en las secciones de Offer Stack o Final CTA.

**Copywriting**:
- Badge: "76% OFF" con dot animado
- Precio: $200 (tachado) → $47 USD
- Botón: "Inscribirme ahora"
- Subtexto: "Garantía 7 días. Acceso inmediato."

**Posición**:
- Mobile: Bottom center (fixed bottom-4)
- Desktop: Right center (fixed right-4 top-1/2)

```typescript
'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

interface StickyFloatingCTAProps {
  onOpenModal: () => void
}

export function StickyFloatingCTA({ onOpenModal }: StickyFloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)
  const [isFinalCTAVisible, setIsFinalCTAVisible] = useState(false)
  const [isOfferStackVisible, setIsOfferStackVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 800
      const shouldHide = isFinalCTAVisible || isOfferStackVisible
      setIsVisible(shouldShow && !isDismissed && !shouldHide)
    }

    // Intersection Observers
    const finalCTAElement = document.getElementById('final-cta')
    const offerStackElement = document.querySelector('[data-section="offer-stack"]')
    
    const observers: IntersectionObserver[] = []

    if (finalCTAElement) {
      const finalCTAObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsFinalCTAVisible(entry.isIntersecting)
          })
        },
        { threshold: 0.1 }
      )
      finalCTAObserver.observe(finalCTAElement)
      observers.push(finalCTAObserver)
    }

    if (offerStackElement) {
      const offerStackObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setIsOfferStackVisible(entry.isIntersecting)
          })
        },
        { threshold: 0.1 }
      )
      offerStackObserver.observe(offerStackElement)
      observers.push(offerStackObserver)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      observers.forEach(observer => observer.disconnect())
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isDismissed, isFinalCTAVisible, isOfferStackVisible])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 lg:right-4 lg:top-1/2 lg:left-auto lg:bottom-auto lg:transform lg:-translate-y-1/2 lg:translate-x-0 z-50 animate-in slide-in-from-bottom-5 lg:slide-in-from-right-5">
      <div className="bg-novo-background-2/95 backdrop-blur-sm border border-novo-primary/20 rounded-xl p-3 shadow-2xl w-64 max-w-[calc(100vw-2rem)]">
        {/* Header con close button */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 bg-novo-secondary rounded-full animate-pulse"></div>
            <span className="text-novo-secondary font-bold text-xs">76% OFF</span>
          </div>
          <button 
            onClick={() => setIsDismissed(true)}
            className="text-novo-grey hover:text-novo-white transition-colors p-1 touch-manipulation"
          >
            <X className="w-3 h-3" />
          </button>
        </div>

        {/* Precios compactos */}
        <div className="text-center mb-3">
          <div className="flex items-center justify-center gap-2">
            <span className="text-novo-grey line-through text-sm">$200</span>
            <span className="text-novo-primary font-bold text-xl">
              $47 <span className="text-sm">USD</span>
            </span>
          </div>
        </div>

        {/* CTA Button compacto */}
        <Button 
          onClick={onOpenModal}
          className="w-full bg-novo-primary hover:bg-novo-primary/90 hover:scale-[1.02] text-novo-white font-semibold py-3 rounded-lg transition-all duration-300 premium-float premium-pulse min-h-[44px] touch-manipulation mb-2 text-sm transform-gpu active:scale-[0.98]"
        >
          Inscribirme ahora
        </Button>

        {/* Texto de garantía */}
        <p className="text-novo-grey text-xs text-center">
          Garantía 7 días. Acceso inmediato.
        </p>
      </div>
    </div>
  )
}
```

---

## 🧪 SISTEMA DE A/B TESTING COMPLETO

### Hook useABTest (hooks/useABTest.ts)
**Descripción**: Sistema completo de A/B testing con distribución 50/50, persistencia en localStorage, tracking de asignaciones y conversiones.

**10 Tests Implementados**:
1. `hero_pre_headline` - Pre-headline del hero
2. `hero_headline` - Headline principal del hero
3. `hero_subheadline` - Sub-headline del hero
4. `hero_image` - Imagen del hero
5. `problem_title` - Título de Problem Section
6. `problem_subtitle` - Subtítulo de Problem Section
7. `social_proof_title` - Título de Social Proof
8. `differentiation_title` - Título de Differentiation
9. `differentiation_image` - Imagen de Differentiation
10. `roadmap_title` - Título de Roadmap
11. `roadmap_subtitle` - Subtítulo de Roadmap
12. `offer_title` - Título de Offer Stack
13. `offer_subtitle` - Subtítulo de Offer Stack
14. `guarantee_title` - Título de Garantía
15. `faq_title` - Título de FAQ
16. `faq_subtitle` - Subtítulo de FAQ
17. `final_cta_pre_headline` - Pre-headline del CTA final
18. `final_cta_headline` - Headline del CTA final
19. `sticky_cta_button` - Texto del botón sticky

**Características clave**:
- Distribución automática 50/50
- Persistencia en localStorage durante toda la sesión
- URL override para testing manual (?variant=A o ?variant=B)
- Tracking de asignaciones y conversiones
- Dashboard accesible con Ctrl/Cmd + Shift + A
- Indicador visual en desarrollo

```typescript
import { useEffect, useState } from 'react'

export type ABVariant = 'A' | 'B'

interface ABTestConfig {
  testName: string
  storageKey?: string
  distribution?: number // 0.5 = 50/50 split
}

interface ABTestResult {
  variant: ABVariant
  isReady: boolean
}

export function useABTest({ 
  testName, 
  storageKey, 
  distribution = 0.5 
}: ABTestConfig): ABTestResult {
  const [variant, setVariant] = useState<ABVariant>('A')
  const [isReady, setIsReady] = useState(false)
  const key = storageKey || `ab_test_${testName}`

  useEffect(() => {
    // Check for URL override
    const urlParams = new URLSearchParams(window.location.search)
    const urlVariant = urlParams.get('variant')
    
    if (urlVariant === 'A' || urlVariant === 'B') {
      setVariant(urlVariant)
      localStorage.setItem(key, urlVariant)
      setIsReady(true)
      trackABTestAssignment(testName, urlVariant, 'url_override')
      return
    }

    // Check for existing assignment
    const existingVariant = localStorage.getItem(key)
    
    if (existingVariant === 'A' || existingVariant === 'B') {
      setVariant(existingVariant)
      setIsReady(true)
      trackABTestAssignment(testName, existingVariant, 'returning')
    } else {
      // New user - assign randomly
      const randomVariant: ABVariant = Math.random() < distribution ? 'A' : 'B'
      setVariant(randomVariant)
      localStorage.setItem(key, randomVariant)
      setIsReady(true)
      trackABTestAssignment(testName, randomVariant, 'new_assignment')
    }
  }, [testName, key, distribution])

  return { variant, isReady }
}

function trackABTestAssignment(testName: string, variant: ABVariant, source: string) {
  const assignment = {
    testName,
    variant,
    source,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
  }

  const assignments = JSON.parse(localStorage.getItem('ab_test_assignments') || '[]')
  assignments.push(assignment)
  localStorage.setItem('ab_test_assignments', JSON.stringify(assignments))

  if (process.env.NODE_ENV === 'development') {
    console.log('🧪 A/B Test Assignment:', assignment)
  }
}

export function trackABTestConversion(testName: string, conversionType: string = 'form_submit') {
  const key = `ab_test_${testName}`
  const variant = localStorage.getItem(key)

  if (!variant) {
    console.warn('No variant found for A/B test conversion tracking')
    return
  }

  const conversion = {
    testName,
    variant,
    conversionType,
    timestamp: new Date().toISOString(),
  }

  const conversions = JSON.parse(localStorage.getItem('ab_test_conversions') || '[]')
  conversions.push(conversion)
  localStorage.setItem('ab_test_conversions', JSON.stringify(conversions))

  if (process.env.NODE_ENV === 'development') {
    console.log('🎯 A/B Test Conversion:', conversion)
  }
}

export function getABTestResults() {
  const assignments = JSON.parse(localStorage.getItem('ab_test_assignments') || '[]')
  const conversions = JSON.parse(localStorage.getItem('ab_test_conversions') || '[]')

  const results: Record<string, {
    variantA: { assignments: number; conversions: number }
    variantB: { assignments: number; conversions: number }
  }> = {}

  assignments.forEach((assignment: any) => {
    if (!results[assignment.testName]) {
      results[assignment.testName] = {
        variantA: { assignments: 0, conversions: 0 },
        variantB: { assignments: 0, conversions: 0 },
      }
    }

    if (assignment.variant === 'A') {
      results[assignment.testName].variantA.assignments++
    } else {
      results[assignment.testName].variantB.assignments++
    }
  })

  conversions.forEach((conversion: any) => {
    if (results[conversion.testName]) {
      if (conversion.variant === 'A') {
        results[conversion.testName].variantA.conversions++
      } else {
        results[conversion.testName].variantB.conversions++
      }
    }
  })

  return results
}
```

---

## 📱 OPTIMIZACIONES MOBILE

**CRÍTICO**: Todo el tráfico viene desde WhatsApp en dispositivos móviles de LATAM.

### Principios de Diseño Mobile-First:
1. **Touch targets mínimos de 44px**
2. **Botones con `touch-manipulation` y `transform-gpu`**
3. **Active states con `active:scale-[0.98]`**
4. **Texto legible sin zoom (mínimo 16px)**
5. **Spacing generoso entre elementos interactivos**
6. **Imágenes optimizadas con lazy loading**
7. **Animaciones con GPU acceleration**
8. **Scroll suave y natural**

### Clases Críticas:
```css
/* Aplicar a TODOS los botones */
.touch-manipulation {
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
}

.transform-gpu {
  transform: translateZ(0);
  will-change: transform;
}

/* Active state para feedback táctil */
.active\:scale-\[0\.98\]:active {
  transform: scale(0.98);
}
```

---

## 🖼️ ASSETS E IMÁGENES

### Estructura de Carpetas en Next.js:
```
/public
  /images
    - novolabs-logo.png (Logo principal)
    - novolabs-hero.png (Imagen hero)
    - founders.png (Foto de Tomás y Damián)
    - cronograma.png (Imagen workspace opcional)
    /reviews
      - review-1.png
      - review-2.png
      ... (14 reviews totales)
    /press
      - c5n-logo.png
      - clarin-logo.png
      - forbes-logo.png
      - lanacion-logo.png
      - iprofesional-logo.png
      - trustpilot-logo.png
```

### URLs de las Imágenes Actuales (para referencia):
Si no tienes acceso a las imágenes originales, usa placeholders de Unsplash similares:
- Hero: Foto de comunidad/eventos de emprendedores
- Founders: Foto profesional de 2 personas
- Reviews: Screenshots de reviews de Trustpilot
- Press logos: Logos oficiales de los medios

---

## 🎯 CONVERSIÓN Y CTAs

### Jerarquía de CTAs (de más a menos importante):
1. **Hero Section**: "Ingresar ahora mismo"
2. **Offer Stack (dentro del pricing)**: "👉 Acceder ahora"
3. **Offer Stack (principal)**: "👉 Acceso inmediato"
4. **Final CTA**: "Emprender con Novolabs"
5. **Sticky Floating CTA**: "Inscribirme ahora"
6. **Modal de Urgencia**: "Quiero que mi proyecto funcione"

### Todos los CTAs:
- Deben abrir el MISMO modal con el formulario embebido
- Trackear conversión para TODOS los tests activos
- Tener las clases: `premium-float premium-pulse`
- Color: `bg-novo-primary hover:bg-novo-primary/90 hover:scale-[1.02]`
- Touch-friendly: `min-h-[56px] touch-manipulation transform-gpu active:scale-[0.98]`

---

## 🔧 COMPONENTES DE shadcn/ui NECESARIOS

Instalar estos componentes con `npx shadcn@latest add`:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
npx shadcn@latest add accordion
npx shadcn@latest add carousel
npx shadcn@latest add progress
```

---

## 📦 DEPENDENCIAS ADICIONALES

```json
{
  "dependencies": {
    "embla-carousel-react": "^8.0.0",
    "lucide-react": "^0.300.0",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-accordion": "^1.1.2"
  }
}
```

---

## 🚀 INSTRUCCIONES FINALES PARA V0

1. **Crea la estructura completa de Next.js 14+ con App Router**
2. **Implementa TODOS los componentes exactamente como se especifica**
3. **Usa el copywriting EXACTO sin cambiar ni una palabra**
4. **Implementa el sistema de A/B testing completo**
5. **Optimiza TODO para mobile (touch-friendly, min-h correcto, etc.)**
6. **Usa las animaciones personalizadas especificadas**
7. **Implementa el modal compartido que se abre desde TODOS los CTAs**
8. **Trackea conversiones cuando se abre el modal**
9. **Implementa el dashboard de A/B testing (Ctrl+Shift+A)**
10. **Usa los colores de marca EXACTOS**

### Next.js Specific:
- Todos los componentes client-side deben tener `'use client'` al inicio
- Usa `Image` de Next.js para todas las imágenes
- Usa `Link` de Next.js para navegación interna
- Los estilos globales van en `app/globals.css`
- Las animaciones CSS en `app/globals.css`

### Archivos Clave:
- `app/page.tsx` - Landing page principal
- `app/globals.css` - Estilos globales + animaciones
- `app/layout.tsx` - Layout root con metadata
- `components/` - Todos los componentes de secciones
- `components/ui/` - Componentes de shadcn/ui
- `hooks/useABTest.ts` - Sistema de A/B testing

---

## 🎨 METADATA Y SEO

```typescript
// app/layout.tsx
export const metadata = {
  title: 'Novolabs Startup School - Encontrá tu idea ganadora en 7 días',
  description: 'Curso práctico con Asistentes de IA para validar tu idea de negocio y encontrar tu nicho de clientes en 7 días. Garantía de 7 días. US$47.',
  openGraph: {
    title: 'Novolabs Startup School - Encontrá tu idea ganadora en 7 días',
    description: 'Te damos un sistema 100% práctico con Asistentes de IA Especializados, para evaluar tus ideas y encontrar a tu cliente ideal.',
    images: ['/images/og-image.png'],
  },
}
```

---

## ✅ CHECKLIST DE IMPLEMENTACIÓN

- [ ] Estructura de Next.js 14+ creada
- [ ] Todos los componentes implementados
- [ ] Sistema de A/B testing funcionando
- [ ] Modal compartido implementado
- [ ] Tracking de conversiones implementado
- [ ] Dashboard de A/B testing (Ctrl+Shift+A)
- [ ] Sticky navbar con progress bar
- [ ] Sticky floating CTA con lógica de ocultamiento
- [ ] Checklist interactivo con modal de urgencia
- [ ] Carousel de reviews con autoplay
- [ ] Logos de prensa con scroll infinito (mobile)
- [ ] Accordion de FAQs
- [ ] WhatsApp CTA en FAQs
- [ ] Roadmap con timeline visual
- [ ] Offer stack con pricing card
- [ ] Garantía section
- [ ] Final CTA section con Trustpilot
- [ ] Footer completo
- [ ] Todas las animaciones CSS funcionando
- [ ] Colores de marca exactos
- [ ] Tipografías Thunder/Satoshi
- [ ] Optimización mobile completa
- [ ] Touch-friendly en todos los botones
- [ ] Copywriting exacto sin cambios

---

**¡IMPORTANTE!**: Este prompt contiene TODO el detalle necesario para clonar la landing page completa. No inventes ni cambies nada del copywriting. Usa los colores EXACTOS de la marca. Optimiza SIEMPRE para mobile primero.

**Contexto LATAM**: Todo el copy usa "voseo" (vos, tenés, sentís) propio de Argentina y otros países de LATAM. NO cambiar a "tú".

**Goal**: Landing de conversión de alta performance con múltiples tests A/B activos para optimizar continuamente el funnel de conversión desde WhatsApp mobile.
