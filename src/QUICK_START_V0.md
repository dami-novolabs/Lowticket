# ⚡ Quick Start: Migración a v0.dev en 30 Minutos

Esta guía te lleva paso a paso para migrar tu landing de Novolabs a v0.dev lo más rápido posible.

---

## 🎯 Resumen Ejecutivo

**Tiempo estimado:** 30-45 minutos  
**Dificultad:** Media  
**Pre-requisitos:** Cuenta en v0.dev o crear proyecto Next.js local

---

## 📋 Checklist Rápida

```
[ ] Paso 1: Exportar imágenes desde Figma (5 min)
[ ] Paso 2: Crear proyecto Next.js (2 min)
[ ] Paso 3: Configurar archivos base (5 min)
[ ] Paso 4: Copiar componentes (10 min)
[ ] Paso 5: Migrar App.tsx a page.tsx (5 min)
[ ] Paso 6: Testing y ajustes (10 min)
[ ] TOTAL: ~37 minutos
```

---

## 🚀 Paso 1: Exportar Imágenes (5 min)

### Assets Necesarios

Abrí Figma y exportá estos 3 assets:

1. **Logo Novolabs**
   - Buscar: Asset ID `78f5c753c6bb6e66180b114349ff5dea0a70b98e`
   - Exportar como: `novolabs-logo.png`
   - Scale: 2x, Formato: PNG

2. **Hero Image**
   - Buscar: Asset ID `0ec5debbf555b71db07914d203718ce12290011f`
   - Exportar como: `novolabs-hero.png`
   - Scale: 2x, Formato: PNG o JPG

3. **Founders Image**
   - Buscar en DifferentiationSection.tsx
   - Exportar como: `founders.png`
   - Scale: 2x, Formato: PNG o JPG

### ✅ Guardar en carpeta temporal
Crea una carpeta `novolabs-assets/` y guarda las 3 imágenes ahí.

---

## 🚀 Paso 2: Crear Proyecto Next.js (2 min)

### Opción A: Local (Recomendado)

```bash
npx create-next-app@latest novolabs-landing
```

**Respuestas al wizard:**
- TypeScript? → **Yes**
- ESLint? → **Yes**
- Tailwind CSS? → **Yes**
- `src/` directory? → **No**
- App Router? → **Yes**
- Import alias? → **Yes** (`@/*`)

```bash
cd novolabs-landing
```

### Opción B: En v0.dev

1. Ir a https://v0.dev
2. Click "New Project"
3. Seleccionar "Next.js"
4. Nombrar: "Novolabs Landing"

---

## 🚀 Paso 3: Configurar Archivos Base (5 min)

### 3.1. Crear carpeta de imágenes

```bash
mkdir -p public/images
```

Copiar las 3 imágenes exportadas a `public/images/`

### 3.2. Instalar dependencias

```bash
npm install @radix-ui/react-accordion @radix-ui/react-dialog @radix-ui/react-separator @radix-ui/react-slot @radix-ui/react-visually-hidden lucide-react class-variance-authority clsx tailwind-merge tailwindcss-animate
```

### 3.3. Actualizar tailwind.config.ts

Reemplazar TODO el contenido con:

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
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
      },
      keyframes: {
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
        'premium-float': 'subtle-float 3s ease-in-out infinite',
        'premium-pulse': 'gentle-pulse 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

### 3.4. Actualizar app/globals.css

Agregar al INICIO del archivo (antes de `@tailwind`):

```css
@import url('https://fonts.googleapis.com/css2?family=Satoshi:wght@300;400;500;600;700;800;900&display=swap');

:root {
  --novo-primary: #FF3A20;
  --novo-secondary: #D4FF78;
  --novo-background: #141414;
  --novo-background-2: #1D1D1D;
  --novo-black: #000000;
  --novo-grey: #F2F2F2;
  --novo-white: #FFFFFF;
}

@layer base {
  body {
    @apply bg-novo-background text-novo-white;
    font-family: 'Satoshi', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    -webkit-tap-highlight-color: transparent;
  }

  .thunder-font {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-weight: 800;
    letter-spacing: -0.02em;
  }

  html {
    scroll-behavior: smooth;
  }
}

.premium-float {
  animation: subtle-float 3s ease-in-out infinite;
}

.premium-pulse {
  animation: gentle-pulse 2.5s ease-in-out infinite;
}
```

### 3.5. Actualizar app/layout.tsx

Reemplazar TODO el contenido con:

```typescript
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Novolabs - Startup School | Validá tu idea en 7 días',
  description: 'Sistema 100% práctico con Asistentes de IA para evaluar ideas y encontrar tu cliente ideal.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <script src="https://info.novolabs.xyz/js/form_embed.js" async />
      </head>
      <body className="bg-novo-background text-novo-white antialiased">
        {children}
      </body>
    </html>
  );
}
```

---

## 🚀 Paso 4: Copiar Componentes (10 min)

### 4.1. Crear estructura de carpetas

```bash
mkdir -p components/ui
mkdir -p hooks
mkdir -p lib
```

### 4.2. Copiar lib/utils.ts

```bash
# En tu proyecto ACTUAL de React/Vite, busca:
# /components/ui/utils.ts o similar

# Copiá el contenido a /lib/utils.ts en el proyecto Next.js
```

**Si no existe, crear `/lib/utils.ts`:**

```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### 4.3. Copiar componentes UI (shadcn)

```bash
# Copiar TODA la carpeta /components/ui/ desde tu proyecto actual
# a /components/ui/ en el proyecto Next.js

# En cada archivo .tsx de /components/ui/, buscar y reemplazar:
# BUSCAR:  from "./utils"
# REEMPLAZAR:  from "@/lib/utils"

# BUSCAR:  from "../ui/
# REEMPLAZAR:  from "@/components/ui/
```

### 4.4. Copiar hooks

```bash
# Copiar /hooks/useABTest.tsx a /hooks/useABTest.ts

# Agregar al INICIO del archivo:
'use client';

# En useEffect, agregar verificación:
if (typeof window === 'undefined') return;
```

### 4.5. Copiar componentes de secciones

Copiar estos archivos desde `/components/` a `/components/`:

**Lista de archivos a copiar:**
```
HeroSection.tsx
SocialProofSection.tsx
ProblemSection.tsx
RoadmapSection.tsx
DifferentiationSection.tsx
OfferStackSection.tsx
GuaranteeSection.tsx
FAQSection.tsx
FinalCTASection.tsx
StickyNavbar.tsx
StickyFloatingCTA.tsx
ABTestDashboard.tsx
ABTestingIndicator.tsx
Countdown.tsx
ProgressBar.tsx
SemanticMetadata.tsx
RichSnippets.tsx
```

### 4.6. Aplicar cambios globales a TODOS los componentes

**Usar Find & Replace en tu editor:**

1. **Agregar 'use client' a componentes con hooks**

Archivos que REQUIEREN `'use client'` al INICIO:
- HeroSection.tsx
- SocialProofSection.tsx
- ProblemSection.tsx
- RoadmapSection.tsx
- DifferentiationSection.tsx
- OfferStackSection.tsx
- GuaranteeSection.tsx
- FAQSection.tsx
- FinalCTASection.tsx
- StickyNavbar.tsx
- StickyFloatingCTA.tsx
- ABTestDashboard.tsx
- ABTestingIndicator.tsx
- Countdown.tsx
- ProgressBar.tsx

2. **Reemplazar imports**

**BUSCAR:** `from './components/`  
**REEMPLAZAR:** `from '@/components/`

**BUSCAR:** `from './ui/`  
**REEMPLAZAR:** `from '@/components/ui/`

**BUSCAR:** `from '../ui/`  
**REEMPLAZAR:** `from '@/components/ui/`

**BUSCAR:** `from './hooks/`  
**REEMPLAZAR:** `from '@/hooks/`

**BUSCAR:** `from '../hooks/`  
**REEMPLAZAR:** `from '@/hooks/`

3. **Reemplazar imágenes de Figma**

**BUSCAR:** `import novolabsLogo from 'figma:asset/78f5c753c6bb6e66180b114349ff5dea0a70b98e.png';`  
**REEMPLAZAR:** (eliminar esta línea)

**BUSCAR:** `src={novolabsLogo}`  
**REEMPLAZAR:** `src="/images/novolabs-logo.png"`

**BUSCAR:** `import novolabsHero from 'figma:asset/0ec5debbf555b71db07914d203718ce12290011f.png';`  
**REEMPLAZAR:** (eliminar esta línea)

**BUSCAR:** `src={novolabsHero}`  
**REEMPLAZAR:** `src="/images/novolabs-hero.png"`

**BUSCAR:** `import { ImageWithFallback } from './figma/ImageWithFallback';`  
**REEMPLAZAR:** (eliminar esta línea)

**BUSCAR:** `<ImageWithFallback`  
**REEMPLAZAR:** `<img`

---

## 🚀 Paso 5: Migrar App.tsx a page.tsx (5 min)

### 5.1. Copiar contenido de App.tsx

```bash
# Copiar TODO el contenido de /App.tsx
# Pegar en /app/page.tsx (reemplazando el contenido existente)
```

### 5.2. Modificar app/page.tsx

**AL INICIO del archivo, agregar:**
```typescript
'use client';
```

**CAMBIAR la función:**
```typescript
// ANTES:
export default function App() {

// DESPUÉS:
export default function HomePage() {
```

**APLICAR los mismos reemplazos de imports del Paso 4.6**

**ELIMINAR al final:**
```typescript
// ELIMINAR estas líneas:
<script src="https://info.novolabs.xyz/js/form_embed.js" async></script>
```
(Ya está en layout.tsx)

---

## 🚀 Paso 6: Testing (10 min)

### 6.1. Ejecutar en desarrollo

```bash
npm run dev
```

Abrir http://localhost:3000

### 6.2. Verificar en consola

**Buscar errores comunes:**

❌ **"localStorage is not defined"**
→ Agregar `if (typeof window === 'undefined') return;` en el hook

❌ **"Cannot find module '@/components/...' "**
→ Verificar que el archivo existe y el import es correcto

❌ **"You're importing a component that needs useState"**
→ Agregar `'use client'` al inicio del archivo

❌ **"Image not found"**
→ Verificar que las imágenes están en `/public/images/`

### 6.3. Testing Funcional

**Checklist de verificación:**

```
[ ] Hero section se ve correctamente
[ ] Imágenes cargan (logo, hero, founders)
[ ] Scroll suave funciona
[ ] Navbar sticky aparece al scrollear
[ ] Sticky CTA aparece después de scroll
[ ] Modal se abre al hacer clic en CTA
[ ] Iframe de Go High Level se ve en el modal
[ ] Accordion de FAQs funciona
[ ] Checklist de problemas es clickeable
[ ] Countdown funciona
[ ] Dashboard de A/B testing abre con Ctrl+Shift+A
[ ] Mobile responsive (abrir DevTools → Toggle device)
```

### 6.4. Revisar responsive

```bash
# En el navegador:
# F12 → Toggle device toolbar (Ctrl+Shift+M)
# Probar en:
# - iPhone SE (375px)
# - iPhone 12 Pro (390px)
# - iPad (768px)
# - Desktop (1440px)
```

---

## 🎉 ¡Listo!

### Próximos Pasos

1. **Build de producción:**
```bash
npm run build
npm start
```

2. **Deploy a Vercel:**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

3. **Conectar dominio:**
- Ir a proyecto en Vercel
- Settings → Domains
- Agregar tu dominio

---

## 🐛 Troubleshooting Rápido

### Problema: Estilos de Tailwind no se aplican

**Solución:**
```bash
# Reiniciar servidor
Ctrl+C
npm run dev
```

### Problema: Componentes UI no se encuentran

**Solución:**
Verificar que `tsconfig.json` tiene:
```json
"paths": {
  "@/*": ["./*"]
}
```

### Problema: A/B Testing no funciona

**Solución:**
Verificar que `useABTest.ts` tiene:
```typescript
'use client';

useEffect(() => {
  if (typeof window === 'undefined') return;
  // ... resto del código
}, []);
```

### Problema: Modal no se abre

**Solución:**
Verificar que `app/layout.tsx` tiene el script:
```tsx
<script src="https://info.novolabs.xyz/js/form_embed.js" async />
```

---

## 📊 Métricas de Éxito

Después de la migración, verificar:

```
✅ Lighthouse Score > 90
✅ First Contentful Paint < 1.5s
✅ Time to Interactive < 3s
✅ Cumulative Layout Shift < 0.1
✅ Mobile-friendly test ✅
```

**Test en:**
- https://pagespeed.web.dev/
- https://search.google.com/test/mobile-friendly

---

## 💰 Costos

**Hosting en Vercel:**
- Free tier: Ilimitado para proyectos personales
- Pro: $20/mes (si necesitas analytics avanzado)

**Recomendación:** Empezar con Free tier

---

## 📞 Ayuda Adicional

### Documentos de referencia:
1. `/MIGRACION_V0_NEXTJS.md` - Guía completa detallada
2. `/MAPEO_COMPONENTES_NEXTJS.md` - Mapeo de cada componente
3. `/EXPORT_COMPLETO_V0.md` - Código completo copy-paste
4. `/AB_TESTS_IMPLEMENTADOS.md` - Tests A/B activos

### Recursos:
- Next.js Docs: https://nextjs.org/docs
- Vercel Deploy: https://vercel.com/docs
- v0.dev: https://v0.dev

---

## 🎯 Resumen de Comandos

```bash
# 1. Crear proyecto
npx create-next-app@latest novolabs-landing
cd novolabs-landing

# 2. Instalar dependencias
npm install @radix-ui/react-accordion @radix-ui/react-dialog @radix-ui/react-separator @radix-ui/react-slot @radix-ui/react-visually-hidden lucide-react class-variance-authority clsx tailwind-merge tailwindcss-animate

# 3. Crear carpetas
mkdir -p public/images components/ui hooks lib

# 4. Copiar archivos (manual)

# 5. Ejecutar
npm run dev

# 6. Build
npm run build

# 7. Deploy
vercel
```

---

**¡Éxito con tu migración! 🚀**

Tiempo total estimado: **30-45 minutos**

Si seguiste todos los pasos, tu landing de Novolabs debería estar corriendo perfectamente en Next.js.
