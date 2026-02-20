# 🚀 Guía Completa de Migración a v0.dev (Next.js)

## 📋 Índice
1. [Introducción](#introducción)
2. [Diferencias Clave: React/Vite vs Next.js](#diferencias-clave)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Dependencias Necesarias](#dependencias-necesarias)
5. [Migración de Componentes](#migración-de-componentes)
6. [Migración de Imágenes y Assets](#migración-de-imágenes-y-assets)
7. [Migración de Estilos](#migración-de-estilos)
8. [Migración de Hooks y Lógica](#migración-de-hooks-y-lógica)
9. [Configuración de Next.js](#configuración-de-nextjs)
10. [Checklist de Migración](#checklist-de-migración)

---

## 📌 Introducción

Esta landing page de Novolabs está construida con **React + Vite** y necesita ser migrada a **Next.js 14+** para funcionar en v0.dev.

### ¿Qué incluye este proyecto?
- ✅ 10 secciones completas de landing page
- ✅ Sistema completo de A/B Testing (19 tests activos)
- ✅ Modal compartido con iframe de Go High Level
- ✅ Optimización mobile-first
- ✅ Sistema de tipografías Thunder/Satoshi
- ✅ Colores de marca Novolabs
- ✅ Componentes UI (shadcn/ui)
- ✅ Animaciones y micro-interacciones
- ✅ SEO y metadata semántica

---

## 🔄 Diferencias Clave

### React/Vite → Next.js

| Aspecto | React/Vite (Actual) | Next.js (v0.dev) |
|---------|---------------------|------------------|
| **Entry Point** | `/App.tsx` | `/app/page.tsx` |
| **Imports** | `import img from 'figma:asset/...'` | `import img from '@/public/...'` |
| **CSS Global** | `/styles/globals.css` | `/app/globals.css` |
| **Hooks** | Client-side por defecto | Requiere `'use client'` |
| **Metadata** | HTML en `index.html` | `export const metadata` |
| **Scripts** | Inyección directa | `<Script>` component |

---

## 📁 Estructura del Proyecto

### Estructura Actual (React/Vite)
```
/
├── App.tsx                          # Entry point principal
├── components/                      # Componentes de la landing
│   ├── HeroSection.tsx
│   ├── SocialProofSection.tsx
│   ├── ProblemSection.tsx
│   ├── RoadmapSection.tsx
│   ├── DifferentiationSection.tsx
│   ├── OfferStackSection.tsx
│   ├── GuaranteeSection.tsx
│   ├── FAQSection.tsx
│   ├── FinalCTASection.tsx
│   ├── StickyNavbar.tsx
│   ├── StickyFloatingCTA.tsx
│   ├── ABTestDashboard.tsx
│   ├── ABTestingIndicator.tsx
│   ├── Countdown.tsx
│   ├── ProgressBar.tsx
│   ├── SemanticMetadata.tsx
│   ├── RichSnippets.tsx
│   └── ui/                          # Shadcn/ui components
│       ├── button.tsx
│       ├── dialog.tsx
│       ├── accordion.tsx
│       ├── badge.tsx
│       └── ... (30+ componentes)
├── hooks/
│   └── useABTest.tsx                # Hook de A/B testing
├── styles/
│   └── globals.css                  # Estilos globales + Tailwind
└── index.html                       # HTML base
```

### Estructura Recomendada para Next.js
```
/
├── app/
│   ├── layout.tsx                   # Root layout (reemplaza index.html)
│   ├── page.tsx                     # Home page (reemplaza App.tsx)
│   └── globals.css                  # Estilos globales
├── components/                      # Mismos componentes
│   ├── HeroSection.tsx
│   ├── SocialProofSection.tsx
│   └── ... (todos los demás)
├── hooks/
│   └── useABTest.ts                 # Hook de A/B testing
├── public/                          # Assets estáticos
│   └── images/
│       ├── novolabs-logo.png
│       ├── novolabs-hero.png
│       └── founders.png
└── lib/
    └── utils.ts                     # Utilidades
```

---

## 📦 Dependencias Necesarias

### package.json para Next.js

```json
{
  "name": "novolabs-landing-nextjs",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "@radix-ui/react-accordion": "^1.1.2",
    "@radix-ui/react-dialog": "^1.0.5",
    "@radix-ui/react-visually-hidden": "^1.0.3",
    "@radix-ui/react-separator": "^1.0.3",
    "@radix-ui/react-slot": "^1.0.2",
    "lucide-react": "latest",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "autoprefixer": "^10.4.18",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}
```

---

## 🔧 Migración de Componentes

### 1. App.tsx → app/page.tsx

**ANTES (React/Vite):**
```tsx
// /App.tsx
import React, { useState, useEffect } from 'react';
import { StickyNavbar } from './components/StickyNavbar';
// ... otros imports

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div className="min-h-screen">
      {/* contenido */}
    </div>
  );
}
```

**DESPUÉS (Next.js):**
```tsx
// /app/page.tsx
'use client'; // ⚠️ IMPORTANTE: Requerido para usar hooks

import { useState, useEffect } from 'react';
import { StickyNavbar } from '@/components/StickyNavbar';
// ... otros imports

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <div className="min-h-screen">
      {/* contenido */}
    </div>
  );
}
```

### 2. Componentes con Hooks

**⚠️ REGLA CRÍTICA:** Todos los componentes que usen hooks de React (`useState`, `useEffect`, etc.) necesitan `'use client'` al inicio del archivo.

**Componentes que REQUIEREN 'use client':**
- ✅ HeroSection.tsx (si tiene interacción)
- ✅ SocialProofSection.tsx
- ✅ ProblemSection.tsx (tiene checklist interactivo)
- ✅ OfferStackSection.tsx (tiene modal)
- ✅ FAQSection.tsx (accordion)
- ✅ FinalCTASection.tsx (countdown + modal)
- ✅ StickyNavbar.tsx (scroll detection)
- ✅ StickyFloatingCTA.tsx (scroll detection)
- ✅ ABTestDashboard.tsx (estado + localStorage)
- ✅ Countdown.tsx (useEffect para timer)
- ✅ ProgressBar.tsx (scroll detection)

**Ejemplo de migración:**
```tsx
// ANTES (React/Vite)
import React, { useState } from 'react';
import { Button } from './ui/button';

export function ProblemSection() {
  const [selectedProblems, setSelectedProblems] = useState<number[]>([]);
  // ...
}

// DESPUÉS (Next.js)
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function ProblemSection() {
  const [selectedProblems, setSelectedProblems] = useState<number[]>([]);
  // ...
}
```

### 3. Imports de Componentes

**ANTES (React/Vite):**
```tsx
import { Button } from './components/ui/button';
import { HeroSection } from './components/HeroSection';
```

**DESPUÉS (Next.js):**
```tsx
import { Button } from '@/components/ui/button';
import { HeroSection } from '@/components/HeroSection';
```

**⚠️ Nota:** El alias `@/` apunta a la raíz del proyecto en Next.js.

---

## 🖼️ Migración de Imágenes y Assets

### Problema Principal
El proyecto actual usa un esquema especial de importación de Figma:

```tsx
import novolabsLogo from 'figma:asset/78f5c753c6bb6e66180b114349ff5dea0a70b98e.png';
```

Este esquema **NO funciona en Next.js**. Necesitas migrar las imágenes a assets estáticos.

### Solución: Migración a /public

#### Paso 1: Exportar imágenes desde Figma
1. Abrí tu proyecto en Figma
2. Seleccioná cada imagen/asset usado en el proyecto
3. Click derecho → Export → PNG (o el formato que uses)
4. Guardá con nombres descriptivos:
   - `novolabs-logo.png`
   - `novolabs-hero.png`
   - `founders.png`

#### Paso 2: Estructura de carpetas
```
/public/
  └── images/
      ├── novolabs-logo.png
      ├── novolabs-hero.png
      └── founders.png
```

#### Paso 3: Actualizar imports

**ANTES (React/Vite con Figma assets):**
```tsx
import novolabsLogo from 'figma:asset/78f5c753c6bb6e66180b114349ff5dea0a70b98e.png';
import novolabsHero from 'figma:asset/0ec5debbf555b71db07914d203718ce12290011f.png';

<img src={novolabsLogo} alt="Novolabs" />
```

**DESPUÉS (Next.js):**

**Opción 1: next/image (Recomendado)**
```tsx
import Image from 'next/image';

<Image 
  src="/images/novolabs-logo.png" 
  alt="Novolabs - Startup School"
  width={200}
  height={50}
  priority // Para imágenes above the fold
/>
```

**Opción 2: HTML img (Más simple)**
```tsx
<img 
  src="/images/novolabs-logo.png" 
  alt="Novolabs - Startup School"
  className="h-8 w-auto"
/>
```

#### Listado de Assets a Migrar

Según el código actual, estos son los assets que debes exportar desde Figma:

1. **Logo Novolabs**
   - Asset ID: `78f5c753c6bb6e66180b114349ff5dea0a70b98e.png`
   - Guardar como: `/public/images/novolabs-logo.png`
   - Usado en: Footer, Navbar

2. **Hero Image**
   - Asset ID: `0ec5debbf555b71db07914d203718ce12290011f.png`
   - Guardar como: `/public/images/novolabs-hero.png`
   - Usado en: HeroSection

3. **Founders Image**
   - Asset ID: (buscar en DifferentiationSection.tsx)
   - Guardar como: `/public/images/founders.png`
   - Usado en: DifferentiationSection

### ImageWithFallback Component

Si usaste el componente `ImageWithFallback`, necesitas adaptarlo:

**ANTES (React/Vite):**
```tsx
import { ImageWithFallback } from './components/figma/ImageWithFallback';

<ImageWithFallback 
  src={novolabsHero}
  alt="Hero"
  className="w-full"
/>
```

**DESPUÉS (Next.js):**
```tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

export function ImageWithFallback({ 
  src, 
  alt, 
  fallback = '/images/placeholder.png',
  ...props 
}: any) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(fallback)}
    />
  );
}
```

---

## 🎨 Migración de Estilos

### 1. globals.css

**MOVER:** `/styles/globals.css` → `/app/globals.css`

El contenido permanece **IGUAL**, solo cambia la ubicación.

### 2. Google Fonts (Satoshi)

**ANTES (En globals.css):**
```css
@import url('https://fonts.googleapis.com/css2?family=Satoshi:wght@300;400;500;600;700;800;900&display=swap');
```

**DESPUÉS (Next.js - Mejor performance):**

```tsx
// /app/layout.tsx
import { Inter } from 'next/font/google';

// Como Satoshi no está en Google Fonts, mantén el @import en globals.css
// O usa next/font/local para fuentes custom
```

**Opción con fuente local:**
```tsx
import localFont from 'next/font/local';

const satoshi = localFont({
  src: [
    {
      path: '../public/fonts/Satoshi-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
});

// Luego en el HTML:
<body className={satoshi.variable}>
```

### 3. Tailwind Config

**Crear:** `/tailwind.config.ts`

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'novo-primary': '#FF3A20',
        'novo-secondary': '#D4FF78',
        'novo-background': '#141414',
        'novo-background-2': '#1D1D1D',
        'novo-black': '#000000',
        'novo-grey': '#F2F2F2',
        'novo-white': '#FFFFFF',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

---

## 🪝 Migración de Hooks y Lógica

### useABTest Hook

El hook de A/B Testing usa `localStorage`, que solo está disponible en el cliente.

**ANTES (React/Vite):**
```tsx
// /hooks/useABTest.tsx
import { useEffect, useState } from 'react';

export function useABTest({ testName, distribution = 0.5 }) {
  const [variant, setVariant] = useState<ABVariant>('A');
  // ... lógica
  return { variant, isReady };
}
```

**DESPUÉS (Next.js):**
```tsx
// /hooks/useABTest.ts
'use client'; // ⚠️ REQUERIDO

import { useEffect, useState } from 'react';

export function useABTest({ testName, distribution = 0.5 }) {
  const [variant, setVariant] = useState<ABVariant>('A');
  const [isReady, setIsReady] = useState(false);
  
  useEffect(() => {
    // Verificar que window existe (client-side)
    if (typeof window === 'undefined') return;
    
    // ... resto de la lógica
  }, [testName, distribution]);
  
  return { variant, isReady };
}
```

### Tracking de Conversiones

```tsx
'use client';

export function trackABTestConversion(testName: string, conversionType: string = 'form_submit') {
  // Verificar client-side
  if (typeof window === 'undefined') return;
  
  const key = `ab_test_${testName}`;
  const variant = localStorage.getItem(key);
  // ... resto de la lógica
}
```

---

## ⚙️ Configuración de Next.js

### 1. Root Layout (app/layout.tsx)

Reemplaza el `index.html` con un layout de Next.js:

```tsx
// /app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Novolabs - Startup School | Validá tu idea en 7 días',
  description: 'Sistema 100% práctico con Asistentes de IA para evaluar ideas y encontrar tu cliente ideal. Garantía de 7 días.',
  keywords: ['emprendimiento', 'startup', 'validación de ideas', 'latinoamérica', 'novolabs'],
  openGraph: {
    title: 'Novolabs Startup School',
    description: 'Encontrá tu idea ganadora en 7 días',
    type: 'website',
    locale: 'es_AR',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Go High Level Form Script */}
        <script src="https://info.novolabs.xyz/js/form_embed.js" async />
      </head>
      <body className="bg-novo-background text-novo-white antialiased">
        {children}
      </body>
    </html>
  );
}
```

### 2. Home Page (app/page.tsx)

Migrar todo el contenido de `App.tsx`:

```tsx
// /app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { StickyNavbar } from '@/components/StickyNavbar';
import { HeroSection } from '@/components/HeroSection';
import { SocialProofSection } from '@/components/SocialProofSection';
import { ProblemSection } from '@/components/ProblemSection';
import { RoadmapSection } from '@/components/RoadmapSection';
import { DifferentiationSection } from '@/components/DifferentiationSection';
import { OfferStackSection } from '@/components/OfferStackSection';
import { GuaranteeSection } from '@/components/GuaranteeSection';
import { FAQSection } from '@/components/FAQSection';
import { FinalCTASection } from '@/components/FinalCTASection';
import { StickyFloatingCTA } from '@/components/StickyFloatingCTA';
import { SemanticMetadata } from '@/components/SemanticMetadata';
import { RichSnippets } from '@/components/RichSnippets';
import ABTestDashboard from '@/components/ABTestDashboard';
import { ABTestingIndicator } from '@/components/ABTestingIndicator';
import { trackABTestConversion } from '@/hooks/useABTest';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  
  // Keyboard shortcut para dashboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        setIsDashboardOpen(prev => !prev);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  const handleOpenModal = () => {
    setIsModalOpen(true);
    
    // Track conversiones para todos los tests
    trackABTestConversion('hero_pre_headline', 'cta_click');
    trackABTestConversion('hero_headline', 'cta_click');
    // ... resto de los trackings
  };

  return (
    <div className="min-h-screen bg-novo-background text-novo-white overflow-x-hidden">
      <SemanticMetadata />
      <RichSnippets />
      <StickyNavbar />
      
      <main itemScope itemType="https://schema.org/WebPage" role="main">
        <section data-section="hero">
          <HeroSection />
        </section>
        
        <section data-section="testimonials">
          <SocialProofSection />
        </section>
        
        <section data-section="problem-identification">
          <ProblemSection />
        </section>
        
        <section data-section="curriculum">
          <RoadmapSection />
        </section>
        
        <section data-section="differentiation">
          <DifferentiationSection />
        </section>
        
        <section data-section="offer">
          <OfferStackSection onOpenModal={handleOpenModal} />
        </section>
        
        <section data-section="guarantee">
          <GuaranteeSection />
        </section>
        
        <section data-section="faq">
          <FAQSection />
        </section>
        
        <section data-section="final-cta">
          <FinalCTASection onOpenModal={handleOpenModal} />
        </section>
      </main>
      
      <StickyFloatingCTA onOpenModal={handleOpenModal} />
      <ABTestingIndicator onClick={() => setIsDashboardOpen(true)} />
      <ABTestDashboard isOpen={isDashboardOpen} onClose={() => setIsDashboardOpen(false)} />
      
      {/* Footer */}
      <footer className="bg-novo-black py-6 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col items-center gap-4">
            <img 
              src="/images/novolabs-logo.png" 
              alt="Novolabs - Startup School" 
              className="h-8 w-auto"
            />
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

      {/* Modal compartido */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-lg w-[95vw] p-0 m-0 border-2 border-novo-primary/30 sm:max-w-2xl overflow-hidden bg-[#1E1B1B]">
          <VisuallyHidden.Root>
            <DialogTitle>Formulario de inscripción - Novolabs Startup School</DialogTitle>
          </VisuallyHidden.Root>
          <VisuallyHidden.Root>
            <DialogDescription>
              Completa el formulario para inscribirte al curso Novolabs Startup School.
            </DialogDescription>
          </VisuallyHidden.Root>
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
            title="Curso Novolabs"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
```

### 3. next.config.js

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Si usas imágenes externas, agregalas acá
  },
};

module.exports = nextConfig;
```

### 4. tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## ✅ Checklist de Migración

### Fase 1: Preparación
- [ ] Exportar todas las imágenes desde Figma
- [ ] Crear carpeta `/public/images/`
- [ ] Guardar imágenes con nombres descriptivos
- [ ] Crear proyecto Next.js nuevo: `npx create-next-app@latest novolabs-nextjs`

### Fase 2: Estructura
- [ ] Crear `/app/layout.tsx`
- [ ] Crear `/app/page.tsx`
- [ ] Crear `/app/globals.css`
- [ ] Copiar carpeta `/components/` completa
- [ ] Copiar carpeta `/hooks/`
- [ ] Copiar carpeta `/lib/` si existe

### Fase 3: Configuración
- [ ] Configurar `tailwind.config.ts`
- [ ] Configurar `next.config.js`
- [ ] Configurar `tsconfig.json`
- [ ] Instalar dependencias desde `package.json`

### Fase 4: Migración de Código
- [ ] Agregar `'use client'` a todos los componentes con hooks
- [ ] Cambiar imports relativos (`./`) por alias (`@/`)
- [ ] Reemplazar imports de `figma:asset` por rutas `/images/`
- [ ] Adaptar componente `ImageWithFallback` para Next.js
- [ ] Migrar metadata de `index.html` a `layout.tsx`

### Fase 5: Componentes Individuales

#### Componentes que requieren 'use client':
- [ ] `/components/HeroSection.tsx`
- [ ] `/components/SocialProofSection.tsx`
- [ ] `/components/ProblemSection.tsx`
- [ ] `/components/RoadmapSection.tsx`
- [ ] `/components/DifferentiationSection.tsx`
- [ ] `/components/OfferStackSection.tsx`
- [ ] `/components/GuaranteeSection.tsx`
- [ ] `/components/FAQSection.tsx`
- [ ] `/components/FinalCTASection.tsx`
- [ ] `/components/StickyNavbar.tsx`
- [ ] `/components/StickyFloatingCTA.tsx`
- [ ] `/components/ABTestDashboard.tsx`
- [ ] `/components/ABTestingIndicator.tsx`
- [ ] `/components/Countdown.tsx`
- [ ] `/components/ProgressBar.tsx`

#### Componentes UI (shadcn):
- [ ] Verificar que todos los componentes de `/components/ui/` tengan imports correctos
- [ ] Actualizar imports en componentes que los usan

### Fase 6: Hooks y Utilities
- [ ] Agregar `'use client'` a `/hooks/useABTest.ts`
- [ ] Agregar verificación `typeof window !== 'undefined'` en hooks
- [ ] Actualizar función `trackABTestConversion`
- [ ] Actualizar función `getABTestResults`

### Fase 7: Testing
- [ ] Ejecutar `npm run dev`
- [ ] Verificar que no haya errores en consola
- [ ] Probar cada sección de la landing
- [ ] Verificar que el modal de Go High Level funcione
- [ ] Probar A/B Testing dashboard (Ctrl+Shift+A)
- [ ] Verificar scroll suave entre secciones
- [ ] Probar sticky navbar y sticky CTA
- [ ] Verificar countdown
- [ ] Probar responsive design (mobile/desktop)
- [ ] Verificar que todas las imágenes carguen

### Fase 8: Optimización
- [ ] Optimizar imágenes con `next/image` donde sea posible
- [ ] Verificar performance con Lighthouse
- [ ] Verificar Core Web Vitals
- [ ] Optimizar First Contentful Paint (FCP)
- [ ] Optimizar Largest Contentful Paint (LCP)

### Fase 9: Deploy
- [ ] Build de producción: `npm run build`
- [ ] Verificar que no haya errores de build
- [ ] Deploy a Vercel (recomendado para Next.js)
- [ ] Verificar en producción

---

## 🚨 Problemas Comunes y Soluciones

### Error: "localStorage is not defined"

**Problema:** Intentar acceder a `localStorage` en Server Component.

**Solución:**
```tsx
'use client';

useEffect(() => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('key', 'value');
}, []);
```

### Error: "You're importing a component that needs useState"

**Problema:** Componente sin `'use client'` usando hooks.

**Solución:** Agregar `'use client'` al inicio del archivo.

### Error: Import de imagen no resuelto

**Problema:** Ruta de imagen incorrecta.

**Solución:**
```tsx
// ✅ Correcto
<img src="/images/logo.png" alt="Logo" />

// ❌ Incorrecto
<img src="./images/logo.png" alt="Logo" />
<img src="../public/images/logo.png" alt="Logo" />
```

### Estilos no se aplican

**Problema:** `globals.css` no importado.

**Solución:** Verificar que `/app/layout.tsx` importe:
```tsx
import './globals.css';
```

---

## 📞 Prompt para v0.dev

Cuando estés listo para importar a v0.dev, usa este prompt:

```
Necesito ayuda para migrar mi landing page de React/Vite a Next.js 14+.

La landing page es para Novolabs Startup School con:
- 10 secciones completas optimizadas para mobile
- Sistema de A/B Testing con 19 tests activos
- Modal compartido con iframe de Go High Level
- Navbar y CTA sticky
- Countdown timer
- Manual de marca: Thunder/Satoshi fonts, colores #FF3A20 y #D4FF78
- Componentes UI de shadcn/ui

Los assets están en /public/images/:
- novolabs-logo.png
- novolabs-hero.png
- founders.png

Necesito:
1. app/layout.tsx con metadata SEO
2. app/page.tsx como componente cliente
3. Todos los componentes con 'use client' donde corresponda
4. Sistema de A/B testing funcional con localStorage
5. Modal de Go High Level embebido
6. Optimización mobile-first

¿Podés ayudarme con la migración completa?
```

---

## 🎯 Próximos Pasos

1. **Exportá todas las imágenes** desde Figma
2. **Creá el proyecto Next.js:** `npx create-next-app@latest`
3. **Copiá todos los archivos** siguiendo el checklist
4. **Ejecutá y probá:** `npm run dev`
5. **Deployá a Vercel** cuando esté listo

---

**¡Éxito con la migración! 🚀**

Si tenés dudas, revisá la documentación oficial de Next.js: https://nextjs.org/docs
