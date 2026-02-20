# 📦 Export Completo para v0.dev

Este archivo contiene todo el código necesario para recrear la landing en v0.dev.

---

## 🎯 Estructura de Archivos Requerida

```
novolabs-nextjs/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── [todos los componentes de secciones]
│   ├── ui/ [componentes shadcn]
│   └── figma/
├── hooks/
│   └── useABTest.ts
├── lib/
│   └── utils.ts
├── public/
│   └── images/
│       ├── novolabs-logo.png
│       ├── novolabs-hero.png
│       └── founders.png
├── package.json
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

---

## 📄 Archivos de Configuración

### 1. package.json

```json
{
  "name": "novolabs-landing",
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
    "@radix-ui/react-separator": "^1.0.3",
    "@radix-ui/react-slot": "^1.0.2",
    "@radix-ui/react-visually-hidden": "^1.0.3",
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

### 2. next.config.js

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;
```

### 3. tailwind.config.ts

```typescript
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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        thunder: ['system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 58, 32, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 58, 32, 0.6)' },
        },
        'subtle-float': {
          '0%, 100%': { transform: 'translateY(0px) scale(1)' },
          '50%': { transform: 'translateY(-3px) scale(1.005)' },
        },
        'gentle-pulse': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(255, 58, 32, 0.3)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 25px rgba(255, 58, 32, 0.5)',
            transform: 'scale(1.01)'
          },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'premium-float': 'subtle-float 3s ease-in-out infinite',
        'premium-pulse': 'gentle-pulse 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
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

## 🎨 App Directory

### app/layout.tsx

```typescript
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Novolabs - Startup School | Validá tu idea en 7 días',
  description: 'Sistema 100% práctico con Asistentes de IA para evaluar ideas y encontrar tu cliente ideal. Garantía de 7 días. Ayudando a emprendedores de Latinoamérica desde 2019.',
  keywords: [
    'emprendimiento',
    'startup',
    'validación de ideas',
    'latinoamérica',
    'novolabs',
    'curso emprendimiento',
    'idea de negocio',
    'inteligencia artificial',
  ],
  authors: [{ name: 'Novolabs' }],
  creator: 'Novolabs',
  publisher: 'Novolabs',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://novolabs.com',
    title: 'Novolabs Startup School',
    description: 'Encontrá tu idea ganadora en 7 días',
    siteName: 'Novolabs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Novolabs Startup School',
    description: 'Validá tu idea con IA en 7 días',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Go High Level Form Embed Script */}
        <script src="https://info.novolabs.xyz/js/form_embed.js" async />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://info.novolabs.xyz" />
        <link rel="dns-prefetch" href="https://info.novolabs.xyz" />
      </head>
      <body className="bg-novo-background text-novo-white antialiased">
        {children}
      </body>
    </html>
  );
}
```

### app/globals.css

```css
@import url('https://fonts.googleapis.com/css2?family=Satoshi:wght@300;400;500;600;700;800;900&display=swap');

@custom-variant dark (&:is(.dark *));

:root {
  --font-size: 16px;
  --background: #ffffff;
  --foreground: oklch(0.145 0 0);
  --card: #ffffff;
  --card-foreground: oklch(0.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.145 0 0);
  --primary: #030213;
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(0.95 0.0058 264.53);
  --secondary-foreground: #030213;
  --muted: #ececf0;
  --muted-foreground: #717182;
  --accent: #e9ebef;
  --accent-foreground: #030213;
  --destructive: #d4183d;
  --destructive-foreground: #ffffff;
  --border: rgba(0, 0, 0, 0.1);
  --input: transparent;
  --input-background: #f3f3f5;
  --switch-background: #cbced4;
  --font-weight-medium: 500;
  --font-weight-normal: 400;
  --ring: oklch(0.708 0 0);
  --radius: 0.625rem;

  /* Novolabs Brand Colors */
  --novo-primary: #FF3A20;
  --novo-secondary: #D4FF78;
  --novo-background: #141414;
  --novo-background-2: #1D1D1D;
  --novo-black: #000000;
  --novo-grey: #F2F2F2;
  --novo-white: #FFFFFF;
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }

  body {
    @apply bg-novo-background text-novo-white;
    font-family: 'Satoshi', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    -webkit-tap-highlight-color: transparent;
  }

  button, .touch-manipulation, .no-select {
    -webkit-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
  }

  p, h1, h2, h3, h4, h5, h6, span, div:not(.no-select), article, section {
    -webkit-user-select: text;
    user-select: text;
  }

  .touch-manipulation {
    touch-action: manipulation;
  }

  html {
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
  }
}

@layer base {
  .thunder-font {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-weight: 800;
    letter-spacing: -0.02em;
  }

  .satoshi-font {
    font-family: 'Satoshi', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
}

html {
  font-size: var(--font-size);
  scroll-behavior: smooth;
}

.pulse-glow {
  animation: pulse-glow 2s ease-in-out infinite;
}

.premium-float {
  animation: subtle-float 3s ease-in-out infinite;
}

.premium-pulse {
  animation: gentle-pulse 2.5s ease-in-out infinite;
}
```

---

## 📋 Listado de Assets de Figma

### Assets a Exportar

Estos son los assets que necesitas exportar desde tu proyecto de Figma:

#### 1. Logo Novolabs
- **Asset ID actual:** `78f5c753c6bb6e66180b114349ff5dea0a70b98e.png`
- **Guardar como:** `/public/images/novolabs-logo.png`
- **Dimensiones sugeridas:** 200x50px (o mantener aspecto original)
- **Formato:** PNG con fondo transparente
- **Usado en:**
  - Footer (App.tsx)
  - Navbar sticky (si aplica)

#### 2. Hero Image
- **Asset ID actual:** `0ec5debbf555b71db07914d203718ce12290011f.png`
- **Guardar como:** `/public/images/novolabs-hero.png`
- **Dimensiones sugeridas:** 1200x800px o mayor
- **Formato:** PNG o JPG
- **Usado en:**
  - HeroSection.tsx
  - Variante A/B del hero

#### 3. Founders/Team Image
- **Asset ID actual:** (buscar en DifferentiationSection.tsx)
- **Guardar como:** `/public/images/founders.png`
- **Dimensiones sugeridas:** 800x600px
- **Formato:** PNG o JPG
- **Usado en:**
  - DifferentiationSection.tsx

### Cómo Exportar desde Figma

1. **Abre tu proyecto en Figma**
2. **Selecciona cada asset/imagen**
3. **Panel derecho → Export**
4. **Configuración:**
   - Format: PNG (con transparencia) o JPG (imágenes fotográficas)
   - Scale: 2x o 3x para pantallas retina
5. **Export → Guardar con nombre descriptivo**

### Script de Reemplazo Automático

Después de exportar las imágenes, necesitas buscar y reemplazar todos los imports:

**Buscar:**
```
figma:asset/78f5c753c6bb6e66180b114349ff5dea0a70b98e.png
```

**Reemplazar por:**
```
/images/novolabs-logo.png
```

Repetir para cada asset ID.

---

## 🔑 Variables de Entorno (opcional)

Si quieres hacer el formulario de Go High Level configurable:

### .env.local

```bash
# Go High Level Form Configuration
NEXT_PUBLIC_GHL_FORM_URL=https://info.novolabs.xyz/widget/form/Nwsr5FOSTx7o6aVlRudg
NEXT_PUBLIC_GHL_SCRIPT_URL=https://info.novolabs.xyz/js/form_embed.js
```

Luego en el código:
```tsx
const formUrl = process.env.NEXT_PUBLIC_GHL_FORM_URL;
```

---

## 🎯 Prompt Completo para v0.dev

Copia y pega este prompt cuando estés listo para importar a v0:

```
Hola! Necesito ayuda para recrear mi landing page de Novolabs en Next.js 14+.

CONTEXTO:
- Landing page para Novolabs Startup School
- Público: Emprendedores de Latinoamérica
- Distribución: 100% por WhatsApp (mobile-first)
- Manual de marca: Tipografías Thunder/Satoshi, colores #FF3A20 (primary) y #D4FF78 (secondary)
- Fondos oscuros: #141414 y #1D1D1D

ESTRUCTURA (10 secciones):
1. Hero con precio tachado, garantía, CTA principal
2. Social Proof con testimonios y números
3. Problem checklist interactivo
4. Roadmap de 7 días con tabs/acordeón
5. Differentiation con imagen de founders
6. Offer Stack con modal de formulario
7. Garantía sin letra chica
8. FAQs con accordion
9. Final CTA con countdown
10. Footer

FEATURES TÉCNICAS:
- Sistema de A/B Testing completo (19 tests activos en títulos e imágenes)
- Modal compartido con iframe de Go High Level
- Navbar sticky con progress bar
- Floating CTA sticky (aparece al scrollear)
- Countdown timer dinámico
- Dashboard de A/B testing (Ctrl+Shift+A)
- Metadata SEO + Schema.org
- Optimización mobile-first
- Animaciones suaves (premium-float, premium-pulse)

COMPONENTES UI:
- Uso extensivo de shadcn/ui: Button, Dialog, Accordion, Badge, Separator
- Iconos: lucide-react (CheckCircle, Shield, Rocket, TrendingUp, etc.)

COPYWRITING CLAVE:
- Hero headline: "Encontrá tu idea ganadora y su nicho de clientes en 7 días"
- Pre-headline: "¿Ganas de emprender y miedo a quemar ahorros?"
- Precio: US$200 → US$47
- Garantía: "7 días de reembolso 100%"
- CTA principal: "Ingresar ahora mismo"

ASSETS:
Tengo 3 imágenes en /public/images/:
- novolabs-logo.png
- novolabs-hero.png
- founders.png

GO HIGH LEVEL:
- URL del form: https://info.novolabs.xyz/widget/form/Nwsr5FOSTx7o6aVlRudg
- Script: https://info.novolabs.xyz/js/form_embed.js
- Debe abrirse en modal al hacer clic en cualquier CTA

A/B TESTING:
Sistema con localStorage que:
- Asigna variante A o B (50/50)
- Persiste durante toda la sesión
- Trackea conversiones (clicks en CTA)
- Dashboard con resultados (Ctrl+Shift+A)
- Tests en: headlines, subtítulos, imágenes, CTAs

¿Podés ayudarme a crear esta landing completa y funcional en Next.js?
```

---

## 📂 Archivos Adicionales

### lib/utils.ts

```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

---

## 🚀 Pasos para Deploy en Vercel

1. **Push a GitHub:**
```bash
git init
git add .
git commit -m "Initial commit - Novolabs landing"
git branch -M main
git remote add origin https://github.com/tu-usuario/novolabs-landing.git
git push -u origin main
```

2. **Deploy en Vercel:**
- Ir a https://vercel.com
- Import Git Repository
- Seleccionar tu repo
- Click "Deploy"

3. **Configurar dominio (opcional):**
- Settings → Domains
- Agregar tu dominio custom

---

## 📊 Tracking de Conversión

### Integración con Google Analytics (opcional)

```tsx
// app/layout.tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

### Integración con Facebook Pixel (opcional)

```tsx
<Script id="facebook-pixel" strategy="afterInteractive">
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', 'YOUR_PIXEL_ID');
    fbq('track', 'PageView');
  `}
</Script>
```

---

## 🎨 Customización del Sistema de A/B Testing

### Ejemplo: Agregar nuevo test

```tsx
// En cualquier componente con 'use client'
'use client';

import { useABTest } from '@/hooks/useABTest';

export function MiComponente() {
  const { variant, isReady } = useABTest({
    testName: 'mi_nuevo_test',
    distribution: 0.5 // 50/50
  });

  if (!isReady) return null;

  return (
    <h2>
      {variant === 'A' ? (
        'Título Original'
      ) : (
        'Título Alternativo'
      )}
    </h2>
  );
}
```

---

## 📱 Testing en Diferentes Dispositivos

### Viewport Breakpoints (Tailwind)

- **Mobile:** < 640px (sm)
- **Tablet:** 640px - 768px (md)
- **Desktop:** > 1024px (lg)

### Responsive Testing Checklist

```
[ ] iPhone SE (375px)
[ ] iPhone 12 Pro (390px)
[ ] iPhone 14 Pro Max (428px)
[ ] iPad Mini (768px)
[ ] iPad Pro (1024px)
[ ] Desktop 1440px
[ ] Desktop 1920px
```

---

## 🔒 Seguridad y Privacidad

### Políticas Requeridas (para LATAM)

Crear páginas adicionales:

1. **Términos y Condiciones** (`/app/terminos/page.tsx`)
2. **Política de Privacidad** (`/app/privacidad/page.tsx`)
3. **Política de Cookies** (`/app/cookies/page.tsx`)

### GDPR/LGPD Compliance

Considerar agregar banner de cookies si operas en EU/Brasil.

---

## 💡 Optimizaciones Adicionales

### Performance

```tsx
// app/layout.tsx
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={inter.className}>
      {children}
    </html>
  )
}
```

### SEO

```tsx
// app/layout.tsx
export const metadata = {
  metadataBase: new URL('https://novolabs.com'),
  alternates: {
    canonical: '/',
  },
}
```

---

## 📞 Soporte Post-Migración

### Recursos Útiles

- **Next.js Docs:** https://nextjs.org/docs
- **Vercel Docs:** https://vercel.com/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **shadcn/ui:** https://ui.shadcn.com
- **Radix UI:** https://www.radix-ui.com

### Community

- Next.js Discord: https://discord.gg/nextjs
- GitHub Issues: https://github.com/vercel/next.js/issues

---

**¡Todo listo para migrar a v0.dev! 🚀**

Este export incluye toda la información necesaria para recrear tu landing page en Next.js con todas sus funcionalidades.
