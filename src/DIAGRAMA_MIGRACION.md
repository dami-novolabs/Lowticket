# 🗺️ Diagrama Visual de Migración

## 📊 Flujo Completo de Migración

```
┌─────────────────────────────────────────────────────────────────┐
│                     PROYECTO ACTUAL                             │
│                    React + Vite                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  /App.tsx ──────────────────────────────┐                      │
│  /components/                            │                      │
│    ├── HeroSection.tsx                   │                      │
│    ├── SocialProofSection.tsx            │                      │
│    ├── ProblemSection.tsx                │                      │
│    ├── [7 secciones más...]              │                      │
│    └── ui/                                │                      │
│         └── [30+ componentes shadcn]     │                      │
│  /hooks/                                  │                      │
│    └── useABTest.tsx                      │                      │
│  /styles/                                 │                      │
│    └── globals.css                        │                      │
│  /index.html                              │                      │
│                                           │                      │
│  Imágenes: figma:asset/...                │                      │
│                                           │                      │
└───────────────────────────────────────────┼──────────────────────┘
                                            │
                                            ▼
                    ┌───────────────────────────────────┐
                    │     PROCESO DE MIGRACIÓN          │
                    │                                   │
                    │  1. Exportar Assets desde Figma   │
                    │     └─► 3 imágenes PNG            │
                    │                                   │
                    │  2. Crear Proyecto Next.js        │
                    │     └─► npx create-next-app       │
                    │                                   │
                    │  3. Configurar Base               │
                    │     ├─► tailwind.config.ts        │
                    │     ├─► globals.css               │
                    │     └─► layout.tsx                │
                    │                                   │
                    │  4. Migrar Componentes            │
                    │     ├─► Agregar 'use client'      │
                    │     ├─► Cambiar imports a @/      │
                    │     └─► Actualizar imágenes       │
                    │                                   │
                    │  5. Testing & Deploy              │
                    │     └─► Vercel                    │
                    │                                   │
                    └───────────────────────────────────┘
                                            │
                                            ▼
┌─────────────────────────────────────────────────────────────────┐
│                   PROYECTO MIGRADO                              │
│                     Next.js 14+                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  /app/                                                          │
│    ├── layout.tsx ──────────────────────┐                      │
│    │   (reemplaza index.html)            │                      │
│    ├── page.tsx ────────────────────────┤                      │
│    │   (reemplaza App.tsx)               │                      │
│    └── globals.css                       │                      │
│                                          │                      │
│  /components/                             │                      │
│    ├── HeroSection.tsx ('use client')    │                      │
│    ├── SocialProofSection.tsx            │                      │
│    ├── ProblemSection.tsx                │                      │
│    ├── [7 secciones más...]              │                      │
│    └── ui/                                │                      │
│         └── [30+ componentes]            │                      │
│                                          │                      │
│  /hooks/                                  │                      │
│    └── useABTest.ts ('use client')       │                      │
│                                          │                      │
│  /public/                                 │                      │
│    └── images/                            │                      │
│         ├── novolabs-logo.png            │                      │
│         ├── novolabs-hero.png            │                      │
│         └── founders.png                 │                      │
│                                          │                      │
│  Imports: @/components/...                │                      │
│  Imágenes: /images/...                   │                      │
│                                          │                      │
└──────────────────────────────────────────┼──────────────────────┘
                                           │
                                           ▼
                                  ┌──────────────┐
                                  │   VERCEL     │
                                  │   Deploy ✅   │
                                  └──────────────┘
```

---

## 🔄 Transformación de Archivos

### App.tsx → app/page.tsx

```
┌────────────────────────────────┐       ┌────────────────────────────────┐
│ /App.tsx                       │       │ /app/page.tsx                  │
│ (React/Vite)                   │  ───► │ (Next.js)                      │
├────────────────────────────────┤       ├────────────────────────────────┤
│                                │       │ 'use client';                  │
│ import React from 'react';     │       │                                │
│ import { Navbar } from './...';│       │ import { Navbar } from '@/...';│
│                                │       │                                │
│ export default function App()  │       │ export default function Page() │
│ {                              │       │ {                              │
│   return (                     │       │   return (                     │
│     <div>...</div>             │       │     <div>...</div>             │
│   );                           │       │   );                           │
│ }                              │       │ }                              │
└────────────────────────────────┘       └────────────────────────────────┘
```

### index.html → app/layout.tsx

```
┌────────────────────────────────┐       ┌────────────────────────────────┐
│ /index.html                    │       │ /app/layout.tsx                │
│ (HTML base)                    │  ───► │ (React Component)              │
├────────────────────────────────┤       ├────────────────────────────────┤
│ <!DOCTYPE html>                │       │ export const metadata = {      │
│ <html lang="es">               │       │   title: '...',                │
│   <head>                       │       │   description: '...'           │
│     <title>...</title>         │       │ };                             │
│     <meta name="..." />        │       │                                │
│     <script src="..."></script>│       │ export default function        │
│   </head>                      │       │ RootLayout({ children }) {     │
│   <body>                       │       │   return (                     │
│     <div id="root"></div>      │       │     <html lang="es">           │
│   </body>                      │       │       <head>...</head>         │
│ </html>                        │       │       <body>{children}</body>  │
│                                │       │     </html>                    │
│                                │       │   );                           │
│                                │       │ }                              │
└────────────────────────────────┘       └────────────────────────────────┘
```

### Figma Assets → Public Images

```
┌──────────────────────────────────────┐       ┌────────────────────────────┐
│ FIGMA                                │       │ /public/images/            │
│                                      │  ───► │                            │
├──────────────────────────────────────┤       ├────────────────────────────┤
│ Logo (Asset ID: 78f5c753...)         │       │ novolabs-logo.png          │
│ Hero (Asset ID: 0ec5debb...)         │       │ novolabs-hero.png          │
│ Founders (Asset ID: ...)             │       │ founders.png               │
└──────────────────────────────────────┘       └────────────────────────────┘

Código:
ANTES: import logo from 'figma:asset/78f5c753...';
       <img src={logo} />

DESPUÉS: <img src="/images/novolabs-logo.png" />
```

---

## 🏗️ Arquitectura de Componentes

```
┌─────────────────────────────────────────────────────────────┐
│                      app/page.tsx                           │
│                    (Client Component)                       │
│                     'use client'                            │
└──────────────┬──────────────────────────────────────────────┘
               │
               ├──► SemanticMetadata (Server ✓)
               │
               ├──► RichSnippets (Server ✓)
               │
               ├──► StickyNavbar (Client ✓)
               │    └──► ProgressBar (Client ✓)
               │
               ├──► HeroSection (Client ✓)
               │    ├──► useABTest hook
               │    └──► <img src="/images/..." />
               │
               ├──► SocialProofSection (Client ✓)
               │    └──► useABTest hook
               │
               ├──► ProblemSection (Client ✓)
               │    ├──► useState (checklist)
               │    └──► useABTest hook
               │
               ├──► RoadmapSection (Client ✓)
               │    └──► useABTest hook
               │
               ├──► DifferentiationSection (Client ✓)
               │    ├──► useABTest hook
               │    └──► <img src="/images/founders.png" />
               │
               ├──► OfferStackSection (Client ✓)
               │    ├──► Modal trigger
               │    └──► useABTest hook
               │
               ├──► GuaranteeSection (Client ✓)
               │    └──► useABTest hook
               │
               ├──► FAQSection (Client ✓)
               │    ├──► Accordion (Radix UI)
               │    └──► useABTest hook
               │
               ├──► FinalCTASection (Client ✓)
               │    ├──► Countdown component
               │    ├──► Modal trigger
               │    └──► useABTest hook
               │
               ├──► StickyFloatingCTA (Client ✓)
               │    ├──► Scroll detection
               │    └──► useABTest hook
               │
               ├──► ABTestDashboard (Client ✓)
               │    ├──► localStorage access
               │    └──► Dialog component
               │
               ├──► ABTestingIndicator (Client ✓)
               │
               ├──► Footer (integrado en page.tsx)
               │    └──► <img src="/images/logo.png" />
               │
               └──► Dialog (Modal compartido)
                    └──► Go High Level iframe
```

**Leyenda:**
- ✓ = Requiere `'use client'`
- Server = Puede ser Server Component

---

## 📦 Dependencias y Relaciones

```
                    ┌──────────────┐
                    │  Next.js 14  │
                    └──────┬───────┘
                           │
        ┌──────────────────┼──────────────────┐
        │                  │                  │
   ┌────▼────┐      ┌──────▼──────┐    ┌─────▼─────┐
   │  React  │      │   Tailwind  │    │TypeScript │
   └────┬────┘      └──────┬──────┘    └─────┬─────┘
        │                  │                  │
        │                  │                  │
   ┌────▼──────────────────▼──────────────────▼─────┐
   │              Componentes UI                    │
   ├───────────────────────────────────────────────┤
   │  ┌─────────────┐  ┌──────────────┐           │
   │  │ Radix UI    │  │ Lucide Icons │           │
   │  ├─────────────┤  ├──────────────┤           │
   │  │ • Dialog    │  │ • CheckCircle│           │
   │  │ • Accordion │  │ • Shield     │           │
   │  │ • Separator │  │ • Rocket     │           │
   │  │ • Slot      │  │ • TrendingUp │           │
   │  └─────────────┘  └──────────────┘           │
   └───────────────────────────────────────────────┘
                           │
                    ┌──────▼──────┐
                    │ shadcn/ui   │
                    ├─────────────┤
                    │ • Button    │
                    │ • Badge     │
                    │ • Card      │
                    │ • Input     │
                    └─────────────┘
```

---

## 🔄 Flujo de A/B Testing

```
┌──────────────────────────────────────────────────────────────┐
│                    Usuario Visita Landing                     │
└──────────────────────┬───────────────────────────────────────┘
                       │
                       ▼
              ┌─────────────────┐
              │  useABTest Hook │
              │  (Client Side)  │
              └────────┬────────┘
                       │
        ┌──────────────┼──────────────┐
        │              │              │
        ▼              ▼              ▼
┌───────────────┐ ┌────────┐ ┌──────────────┐
│ URL Override? │ │Existing│ │New User?     │
│ ?variant=A/B  │ │variant?│ │Random 50/50  │
└───────┬───────┘ └───┬────┘ └──────┬───────┘
        │             │              │
        └─────────────┼──────────────┘
                      │
                      ▼
            ┌──────────────────┐
            │  Set Variant A/B │
            │  localStorage    │
            └────────┬─────────┘
                     │
                     ▼
          ┌────────────────────────┐
          │  Render Content        │
          │  based on Variant      │
          └────────┬───────────────┘
                   │
         ┌─────────┴─────────┐
         │                   │
         ▼                   ▼
    ┌────────┐          ┌────────┐
    │Variant │          │Variant │
    │   A    │          │   B    │
    └────┬───┘          └───┬────┘
         │                  │
         └──────────┬───────┘
                    │
                    ▼
          User clicks CTA
                    │
                    ▼
        ┌───────────────────────┐
        │ trackABTestConversion │
        │   localStorage        │
        └───────────────────────┘
                    │
                    ▼
        ┌───────────────────────┐
        │ Dashboard (Ctrl+Shift+A)│
        │ Shows Results         │
        └───────────────────────┘
```

---

## 📱 Responsive Flow

```
┌─────────────────────────────────────────────────────────────┐
│                      Viewport Detection                      │
└──────────────────┬──────────────────────────────────────────┘
                   │
        ┌──────────┼──────────┬──────────────┐
        │          │          │              │
        ▼          ▼          ▼              ▼
  ┌─────────┐ ┌────────┐ ┌────────┐  ┌──────────┐
  │ Mobile  │ │ Tablet │ │ Desktop│  │  Wide    │
  │ < 640px │ │ 768px  │ │ 1024px │  │ 1920px+  │
  └────┬────┘ └───┬────┘ └───┬────┘  └────┬─────┘
       │          │          │            │
       ▼          ▼          ▼            ▼
  ┌──────────────────────────────────────────┐
  │      Tailwind Responsive Classes         │
  ├──────────────────────────────────────────┤
  │ Mobile-First Design:                     │
  │                                          │
  │ base → default (mobile)                  │
  │ sm: → small (tablet)                     │
  │ md: → medium                             │
  │ lg: → large (desktop)                    │
  │ xl: → extra large                        │
  │                                          │
  │ Example:                                 │
  │ text-3xl sm:text-4xl lg:text-6xl        │
  │                                          │
  │ 🎯 PRIORIDAD: Mobile (100% WhatsApp)    │
  └──────────────────────────────────────────┘
```

---

## 🚀 Deploy Flow

```
┌───────────────────────────────────────────────────────────┐
│                  Local Development                         │
│                   npm run dev                              │
└──────────────────────┬────────────────────────────────────┘
                       │
                       ▼
              ┌─────────────────┐
              │  Testing Local  │
              │  localhost:3000 │
              └────────┬────────┘
                       │
                       ▼
               ┌──────────────┐
               │ npm run build│
               └──────┬───────┘
                      │
            ┌─────────┴─────────┐
            │                   │
            ▼                   ▼
       ┌─────────┐         ┌─────────┐
       │ Success │         │  Errors │
       └────┬────┘         └────┬────┘
            │                   │
            │                   └──► Fix & Retry
            │
            ▼
    ┌──────────────────┐
    │  Git Repository  │
    │  (GitHub)        │
    └────────┬─────────┘
             │
             ▼
    ┌──────────────────┐
    │     Vercel       │
    │  Auto-Deploy     │
    └────────┬─────────┘
             │
    ┌────────┴────────┐
    │                 │
    ▼                 ▼
┌─────────┐      ┌──────────┐
│Preview  │      │Production│
│Deploys  │      │ Deploy   │
└─────────┘      └────┬─────┘
                      │
                      ▼
              ┌───────────────┐
              │  Custom Domain│
              │  (Optional)   │
              └───────────────┘
```

---

## 📊 Estado de Componentes

### Componentes que Requieren 'use client'

```
┌─────────────────────────────────────────┐
│        useState / useEffect             │
├─────────────────────────────────────────┤
│ ✅ HeroSection (si tiene interacción)   │
│ ✅ SocialProofSection                   │
│ ✅ ProblemSection (checklist useState)  │
│ ✅ RoadmapSection                       │
│ ✅ DifferentiationSection               │
│ ✅ OfferStackSection                    │
│ ✅ GuaranteeSection                     │
│ ✅ FAQSection (Accordion state)         │
│ ✅ FinalCTASection (countdown)          │
│ ✅ StickyNavbar (scroll detection)      │
│ ✅ StickyFloatingCTA (scroll detection) │
│ ✅ ProgressBar (scroll listener)        │
│ ✅ Countdown (timer useEffect)          │
│ ✅ ABTestDashboard (localStorage)       │
│ ✅ ABTestingIndicator                   │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│        Server Components OK             │
├─────────────────────────────────────────┤
│ ❌ SemanticMetadata (solo JSX)          │
│ ❌ RichSnippets (solo JSON-LD)          │
└─────────────────────────────────────────┘
```

---

## 🎯 Optimización de Performance

```
┌──────────────────────────────────────────────────────────┐
│              Performance Optimization                     │
└────┬─────────────────────────────────────────────────────┘
     │
     ├──► Images
     │    ├──► Use next/image
     │    ├──► Optimize file size
     │    ├──► WebP format
     │    └──► Lazy loading
     │
     ├──► Fonts
     │    ├──► next/font/google
     │    ├──► Preload critical fonts
     │    └──► Font display: swap
     │
     ├──► Code Splitting
     │    ├──► Dynamic imports
     │    ├──► Route-based splitting (automatic)
     │    └──► Component lazy loading
     │
     ├──► Caching
     │    ├──► Static Generation (SSG)
     │    ├──► Incremental Static Regeneration (ISR)
     │    └──► Edge caching
     │
     └──► Monitoring
          ├──► Vercel Analytics
          ├──► Lighthouse CI
          └──► Core Web Vitals
```

---

## 🔐 Seguridad y Privacidad

```
┌─────────────────────────────────────────┐
│         Security Considerations          │
├─────────────────────────────────────────┤
│                                         │
│  Client-Side Data:                      │
│  ├─► A/B Test Data (localStorage)       │
│  ├─► User Preferences                   │
│  └─► No PII (Personal Info)             │
│                                         │
│  Form Data (Go High Level):             │
│  ├─► Handled by iframe                  │
│  ├─► HTTPS only                         │
│  └─► GHL handles storage                │
│                                         │
│  Scripts:                               │
│  ├─► Go High Level embed (trusted)      │
│  ├─► Next.js Script component           │
│  └─► CSP headers (Content Security)     │
│                                         │
│  GDPR/LGPD Compliance:                  │
│  ├─► Privacy Policy page needed         │
│  ├─► Cookie consent (if needed)         │
│  └─► Terms & Conditions page            │
│                                         │
└─────────────────────────────────────────┘
```

---

## 📈 Tracking y Analytics

```
┌────────────────────────────────────────────────────────┐
│              Analytics Integration                      │
└──────┬─────────────────────────────────────────────────┘
       │
       ├──► A/B Testing (Custom)
       │    ├──► localStorage tracking
       │    ├──► Assignment tracking
       │    ├──► Conversion tracking
       │    └──► Dashboard (Ctrl+Shift+A)
       │
       ├──► Google Analytics (Optional)
       │    ├──► Page views
       │    ├──► Events
       │    ├──► Conversions
       │    └──► GA4 recommended
       │
       ├──► Facebook Pixel (Optional)
       │    ├──► PageView
       │    ├──► Lead events
       │    └──► Custom conversions
       │
       ├──► Vercel Analytics (Built-in)
       │    ├──► Real User Monitoring
       │    ├──► Core Web Vitals
       │    └──► Performance metrics
       │
       └──► WhatsApp Tracking
            ├──► UTM parameters
            ├──► Click tracking
            └──► Conversion attribution
```

---

## 🎨 Customización Post-Migración

```
┌───────────────────────────────────────────────────────┐
│           Post-Migration Enhancements                 │
├───────────────────────────────────────────────────────┤
│                                                       │
│  🎨 Design:                                           │
│  ├─► Add dark/light mode toggle                      │
│  ├─► Enhanced animations                             │
│  ├─► Loading states                                  │
│  └─► Error boundaries                                │
│                                                       │
│  🚀 Features:                                         │
│  ├─► WhatsApp integration                            │
│  ├─► Email notifications                             │
│  ├─► Live chat widget                                │
│  └─► Multi-language support                          │
│                                                       │
│  📊 Analytics:                                        │
│  ├─► Heatmaps (Hotjar/Microsoft Clarity)             │
│  ├─► Session recordings                              │
│  ├─► A/B test reporting                              │
│  └─► Conversion funnels                              │
│                                                       │
│  🔧 SEO:                                              │
│  ├─► Sitemap.xml generation                          │
│  ├─► robots.txt optimization                         │
│  ├─► OpenGraph images                                │
│  └─► Schema.org enhancement                          │
│                                                       │
└───────────────────────────────────────────────────────┘
```

---

## ✅ Final Checklist Visual

```
PRE-MIGRACIÓN
├─ [ ] Leer documentación
├─ [ ] Exportar assets desde Figma
├─ [ ] Backup de código actual
└─ [ ] Node.js 18+ instalado

SETUP
├─ [ ] Crear proyecto Next.js
├─ [ ] Instalar dependencias
├─ [ ] Configurar Tailwind
├─ [ ] Setup layout.tsx
└─ [ ] Setup globals.css

MIGRACIÓN
├─ [ ] Copiar /components/ui/
├─ [ ] Copiar componentes de secciones
├─ [ ] Copiar hooks
├─ [ ] Migrar App.tsx → page.tsx
├─ [ ] Actualizar imports
├─ [ ] Reemplazar imágenes Figma
└─ [ ] Agregar 'use client' donde corresponda

TESTING
├─ [ ] npm run dev sin errores
├─ [ ] Todas las secciones renderizan
├─ [ ] Modal funciona
├─ [ ] A/B testing activo
├─ [ ] Responsive mobile/desktop
├─ [ ] Lighthouse Score > 90
└─ [ ] Cross-browser testing

DEPLOY
├─ [ ] npm run build exitoso
├─ [ ] Deploy a Vercel
├─ [ ] Configurar dominio
├─ [ ] Setup redirects
├─ [ ] Setup analytics
└─ [ ] Monitoring activo

POST-LAUNCH
├─ [ ] Monitor performance
├─ [ ] Review A/B test results
├─ [ ] User feedback
├─ [ ] Iterate and improve
└─ [ ] Document changes
```

---

## 🎯 Rutas de Aprendizaje

```
                    INICIO
                      │
        ┌─────────────┼─────────────┐
        │             │             │
        ▼             ▼             ▼
   ┌─────────┐  ┌──────────┐  ┌─────────┐
   │Principiante│  │Intermedio│  │Avanzado │
   └────┬────┘  └─────┬────┘  └────┬────┘
        │             │             │
        ▼             ▼             ▼
QUICK_START_V0  MIGRACION_V0   EXPORT_COMPLETO
    (30 min)     (2-3 horas)      (Referencia)
        │             │             │
        └─────────────┼─────────────┘
                      │
                      ▼
              MAPEO_COMPONENTES
               (Según necesidad)
                      │
                      ▼
                   TESTING
                      │
                      ▼
                    DEPLOY
                      │
                      ▼
                   SUCCESS! 🎉
```

---

**¡Visualiza tu camino hacia Next.js! 🚀**

Esta guía visual te ayuda a entender el flujo completo de migración y las relaciones entre componentes.
