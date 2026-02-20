# 📁 Mapeo Detallado de Componentes para Next.js

Este documento lista **TODOS** los componentes del proyecto y los cambios específicos necesarios para cada uno.

---

## 🎯 Componentes Principales

### 1. App.tsx → app/page.tsx

**Ruta Actual:** `/App.tsx`  
**Ruta Next.js:** `/app/page.tsx`

**Cambios Necesarios:**
```tsx
// ✅ AGREGAR al inicio del archivo
'use client';

// ✅ CAMBIAR imports
// ANTES:
import { StickyNavbar } from './components/StickyNavbar';
import novolabsLogo from 'figma:asset/78f5c753c6bb6e66180b114349ff5dea0a70b98e.png';

// DESPUÉS:
import { StickyNavbar } from '@/components/StickyNavbar';
// Logo ahora viene desde /public/images/

// ✅ CAMBIAR imagen del footer
// ANTES:
<img src={novolabsLogo} alt="..." />

// DESPUÉS:
<img src="/images/novolabs-logo.png" alt="..." />

// ✅ REMOVER script tag (mover a layout.tsx)
// ANTES:
<script src="https://info.novolabs.xyz/js/form_embed.js" async></script>

// Este script ahora va en app/layout.tsx
```

---

## 🧩 Componentes de Secciones

### 2. HeroSection.tsx

**Ruta:** `/components/HeroSection.tsx`

**Cambios Necesarios:**
```tsx
// ✅ AGREGAR al inicio (si tiene interactividad)
'use client';

// ✅ CAMBIAR imports
// ANTES:
import { ImageWithFallback } from './figma/ImageWithFallback';
import novolabsHero from 'figma:asset/0ec5debbf555b71db07914d203718ce12290011f.png';

// DESPUÉS:
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
// O usar directamente:
<img src="/images/novolabs-hero.png" alt="..." />

// ✅ SI USA A/B Testing:
import { useABTest } from '@/hooks/useABTest';
```

**Asset a exportar desde Figma:**
- `0ec5debbf555b71db07914d203718ce12290011f.png` → `/public/images/novolabs-hero.png`

---

### 3. SocialProofSection.tsx

**Ruta:** `/components/SocialProofSection.tsx`

**Cambios Necesarios:**
```tsx
// ✅ AGREGAR si usa A/B Testing
'use client';

// ✅ CAMBIAR imports
import { useABTest } from '@/hooks/useABTest';
import { Badge } from '@/components/ui/badge';

// No cambiar nada más si no usa imágenes de Figma
```

---

### 4. ProblemSection.tsx

**Ruta:** `/components/ProblemSection.tsx`

**Cambios Necesarios:**
```tsx
// ✅ REQUERIDO: Este componente usa useState
'use client';

// ✅ CAMBIAR imports
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { useABTest } from '@/hooks/useABTest';

// No requiere cambios en la lógica, solo imports
```

---

### 5. RoadmapSection.tsx

**Ruta:** `/components/RoadmapSection.tsx`

**Cambios Necesarios:**
```tsx
// ✅ AGREGAR si usa A/B Testing
'use client';

// ✅ CAMBIAR imports
import { useABTest } from '@/hooks/useABTest';
import { CheckCircle, Lightbulb, Users, Target, BarChart, Rocket, TrendingUp } from 'lucide-react';

// Icons de lucide-react no necesitan cambios
```

---

### 6. DifferentiationSection.tsx

**Ruta:** `/components/DifferentiationSection.tsx`

**Cambios Necesarios:**
```tsx
// ✅ AGREGAR
'use client';

// ✅ CAMBIAR imports
import { useABTest } from '@/hooks/useABTest';
// Si tiene imagen de founders desde Figma:
// ANTES:
import foundersImg from 'figma:asset/XXXXXX.png';

// DESPUÉS:
// <img src="/images/founders.png" alt="..." />
```

**Asset a exportar desde Figma:**
- Imagen de founders → `/public/images/founders.png`

---

### 7. OfferStackSection.tsx

**Ruta:** `/components/OfferStackSection.tsx`

**Cambios Necesarios:**
```tsx
// ✅ REQUERIDO: Tiene modal/interactividad
'use client';

// ✅ CAMBIAR imports
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useABTest } from '@/hooks/useABTest';

// Props permanecen igual
interface OfferStackSectionProps {
  onOpenModal: () => void;
}
```

---

### 8. GuaranteeSection.tsx

**Ruta:** `/components/GuaranteeSection.tsx`

**Cambios Necesarios:**
```tsx
// ✅ AGREGAR si usa A/B Testing
'use client';

// ✅ CAMBIAR imports
import { useABTest } from '@/hooks/useABTest';
import { Shield, RefreshCw } from 'lucide-react';
```

---

### 9. FAQSection.tsx

**Ruta:** `/components/FAQSection.tsx`

**Cambios Necesarios:**
```tsx
// ✅ REQUERIDO: Usa Accordion (tiene estado)
'use client';

// ✅ CAMBIAR imports
import { useABTest } from '@/hooks/useABTest';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
```

---

### 10. FinalCTASection.tsx

**Ruta:** `/components/FinalCTASection.tsx`

**Cambios Necesarios:**
```tsx
// ✅ REQUERIDO: Usa Countdown (useEffect)
'use client';

// ✅ CAMBIAR imports
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Countdown } from '@/components/Countdown';
import { useABTest } from '@/hooks/useABTest';
import { Shield } from 'lucide-react';

// Props permanecen igual
interface FinalCTASectionProps {
  onOpenModal: () => void;
}
```

---

## 🎨 Componentes de UI/UX

### 11. StickyNavbar.tsx

**Ruta:** `/components/StickyNavbar.tsx`

**Cambios Necesarios:**
```tsx
// ✅ REQUERIDO: Usa scroll detection
'use client';

// ✅ CAMBIAR imports
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ProgressBar } from '@/components/ProgressBar';

// Si tiene logo desde Figma:
// ANTES:
import logo from 'figma:asset/XXXX.png';

// DESPUÉS:
<img src="/images/novolabs-logo.png" alt="..." />
```

---

### 12. StickyFloatingCTA.tsx

**Ruta:** `/components/StickyFloatingCTA.tsx`

**Cambios Necesarios:**
```tsx
// ✅ REQUERIDO: Usa scroll detection + useState
'use client';

// ✅ CAMBIAR imports
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useABTest } from '@/hooks/useABTest';
import { ChevronUp } from 'lucide-react';

// Props permanecen igual
interface StickyFloatingCTAProps {
  onOpenModal: () => void;
}
```

---

### 13. ProgressBar.tsx

**Ruta:** `/components/ProgressBar.tsx`

**Cambios Necesarios:**
```tsx
// ✅ REQUERIDO: Usa scroll detection
'use client';

// ✅ CAMBIAR imports
import { useState, useEffect } from 'react';

// No requiere otros cambios
```

---

### 14. Countdown.tsx

**Ruta:** `/components/Countdown.tsx`

**Cambios Necesarios:**
```tsx
// ✅ REQUERIDO: Usa useEffect para timer
'use client';

// ✅ CAMBIAR imports
import { useState, useEffect } from 'react';

// Props permanecen igual
interface CountdownProps {
  targetDate: Date;
}
```

---

## 🧪 Componentes de A/B Testing

### 15. ABTestDashboard.tsx

**Ruta:** `/components/ABTestDashboard.tsx`

**Cambios Necesarios:**
```tsx
// ✅ REQUERIDO: Usa useState + localStorage
'use client';

// ✅ CAMBIAR imports
import { useState, useEffect } from 'react';
import { getABTestResults } from '@/hooks/useABTest';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// ✅ AGREGAR verificación client-side
useEffect(() => {
  if (typeof window === 'undefined') return;
  
  const results = getABTestResults();
  setTestResults(results);
}, [isOpen]);
```

---

### 16. ABTestingIndicator.tsx

**Ruta:** `/components/ABTestingIndicator.tsx`

**Cambios Necesarios:**
```tsx
// ✅ AGREGAR
'use client';

// ✅ CAMBIAR imports
import { Button } from '@/components/ui/button';
import { FlaskConical } from 'lucide-react';

// Props permanecen igual
interface ABTestingIndicatorProps {
  onClick: () => void;
}
```

---

## 📊 Componentes de SEO/Metadata

### 17. SemanticMetadata.tsx

**Ruta:** `/components/SemanticMetadata.tsx`

**⚠️ IMPORTANTE: Este componente se puede eliminar**

En Next.js, la metadata semántica se maneja mejor en `app/layout.tsx` usando el objeto `metadata`:

```tsx
// /app/layout.tsx
export const metadata: Metadata = {
  title: 'Novolabs - Startup School',
  description: '...',
  // etc.
};
```

**Opción 1: Eliminar el componente**
**Opción 2: Convertirlo a Server Component (sin 'use client')**

```tsx
// NO agregar 'use client'
export function SemanticMetadata() {
  return (
    <head>
      {/* metadata tags */}
    </head>
  );
}
```

---

### 18. RichSnippets.tsx

**Ruta:** `/components/RichSnippets.tsx`

**Cambios Necesarios:**

Este componente puede mantenerse como Server Component:

```tsx
// NO agregar 'use client' si solo renderiza JSON-LD

export function RichSnippets() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          // ... schema data
        })
      }}
    />
  );
}
```

---

## 🖼️ Componentes de Utilidad

### 19. ImageWithFallback.tsx

**Ruta:** `/components/figma/ImageWithFallback.tsx`

**⚠️ Este es un componente protegido, pero necesitas adaptarlo para Next.js**

**Opción 1: Usar directamente `<img>`**
```tsx
// En lugar de ImageWithFallback, usa:
<img src="/images/novolabs-hero.png" alt="..." className="..." />
```

**Opción 2: Crear versión Next.js con next/image**
```tsx
// /components/ImageWithFallback.tsx (nueva versión)
'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fallback?: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export function ImageWithFallback({
  src,
  alt,
  fallback = '/images/placeholder.png',
  width = 500,
  height = 300,
  className,
  priority = false,
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      onError={() => {
        setImgSrc(fallback);
      }}
    />
  );
}
```

---

## 🎨 Componentes UI (shadcn/ui)

Todos los componentes en `/components/ui/` generalmente **NO necesitan** `'use client'` a menos que:
- Usen hooks directamente
- Tengan lógica de estado interna

### Componentes que SÍ necesitan 'use client':

#### 20. dialog.tsx
```tsx
'use client';
// Ya lo tiene porque usa Radix UI con estado
```

#### 21. accordion.tsx
```tsx
'use client';
// Ya lo tiene porque usa Radix UI con estado
```

#### 22. button.tsx
```tsx
// NO necesita 'use client' si solo es presentational
// PERO si usa forwardRef con interacciones, puede necesitarlo
```

### Cambios en imports de UI:

**ANTES (React/Vite):**
```tsx
import { Button } from './ui/button';
import { Dialog } from './ui/dialog';
```

**DESPUÉS (Next.js):**
```tsx
import { Button } from '@/components/ui/button';
import { Dialog } from '@/components/ui/dialog';
```

---

## 🪝 Hooks

### 23. useABTest.tsx → useABTest.ts

**Ruta Actual:** `/hooks/useABTest.tsx`  
**Ruta Next.js:** `/hooks/useABTest.ts`

**Cambios Necesarios:**
```tsx
// ✅ REQUERIDO
'use client';

// ✅ AGREGAR verificación window
useEffect(() => {
  if (typeof window === 'undefined') return;
  
  // Check for URL override
  const urlParams = new URLSearchParams(window.location.search);
  // ... resto del código
}, [testName, distribution]);

// ✅ ACTUALIZAR trackABTestConversion
export function trackABTestConversion(testName: string, conversionType: string = 'form_submit') {
  // ✅ AGREGAR verificación
  if (typeof window === 'undefined') return;
  
  const key = `ab_test_${testName}`;
  const variant = localStorage.getItem(key);
  // ... resto del código
}

// ✅ ACTUALIZAR getABTestResults
export function getABTestResults() {
  // ✅ AGREGAR verificación
  if (typeof window === 'undefined') return {};
  
  const assignments = JSON.parse(localStorage.getItem('ab_test_assignments') || '[]');
  // ... resto del código
}
```

---

## 📊 Resumen de Cambios por Componente

### Requieren 'use client' (15 componentes):
1. ✅ App.tsx → app/page.tsx
2. ✅ HeroSection.tsx
3. ✅ SocialProofSection.tsx
4. ✅ ProblemSection.tsx
5. ✅ RoadmapSection.tsx
6. ✅ DifferentiationSection.tsx
7. ✅ OfferStackSection.tsx
8. ✅ GuaranteeSection.tsx
9. ✅ FAQSection.tsx
10. ✅ FinalCTASection.tsx
11. ✅ StickyNavbar.tsx
12. ✅ StickyFloatingCTA.tsx
13. ✅ ProgressBar.tsx
14. ✅ Countdown.tsx
15. ✅ ABTestDashboard.tsx
16. ✅ ABTestingIndicator.tsx
17. ✅ useABTest.ts (hook)

### NO requieren 'use client' (Server Components):
- SemanticMetadata.tsx (puede eliminarse o dejarse como Server Component)
- RichSnippets.tsx

### Requieren migración de assets:
- HeroSection.tsx → `novolabs-hero.png`
- DifferentiationSection.tsx → `founders.png`
- App footer → `novolabs-logo.png`
- StickyNavbar.tsx → `novolabs-logo.png` (si aplica)

---

## 🎯 Checklist por Componente

Usa esta lista para verificar cada componente:

```
[ ] Agregar 'use client' si usa hooks/estado
[ ] Cambiar imports relativos por @/
[ ] Reemplazar figma:asset por /images/
[ ] Agregar if (typeof window === 'undefined') en hooks
[ ] Verificar que compile sin errores
[ ] Probar funcionalidad en navegador
```

---

## 🚀 Orden Sugerido de Migración

### Fase 1: Base
1. Crear `app/layout.tsx`
2. Crear `app/globals.css`
3. Migrar hooks (`useABTest.ts`)

### Fase 2: Componentes UI
4. Copiar toda la carpeta `/components/ui/`
5. Actualizar imports a `@/components/ui/...`

### Fase 3: Componentes de Utilidad
6. `ProgressBar.tsx`
7. `Countdown.tsx`
8. `ImageWithFallback.tsx` (adaptar)

### Fase 4: Componentes de Sección (en orden)
9. `HeroSection.tsx`
10. `SocialProofSection.tsx`
11. `ProblemSection.tsx`
12. `RoadmapSection.tsx`
13. `DifferentiationSection.tsx`
14. `OfferStackSection.tsx`
15. `GuaranteeSection.tsx`
16. `FAQSection.tsx`
17. `FinalCTASection.tsx`

### Fase 5: Componentes Sticky
18. `StickyNavbar.tsx`
19. `StickyFloatingCTA.tsx`

### Fase 6: A/B Testing
20. `ABTestDashboard.tsx`
21. `ABTestingIndicator.tsx`

### Fase 7: SEO
22. `SemanticMetadata.tsx` (migrar a layout.tsx)
23. `RichSnippets.tsx`

### Fase 8: Page Principal
24. `app/page.tsx` (migrar App.tsx)

---

## 💡 Tips Finales

1. **Trabaja en branches:** Migrá un componente a la vez y hacé commits frecuentes
2. **Testea constantemente:** Ejecutá `npm run dev` después de cada migración
3. **Console es tu amigo:** Revisar errores en browser console
4. **TypeScript ayuda:** Los errores de tipo te van a guiar
5. **Documentación oficial:** https://nextjs.org/docs es tu mejor recurso

---

**¡Éxito con la migración! 🎉**
