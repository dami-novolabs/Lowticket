# 📘 Guía Maestra de Migración a v0.dev / Next.js

## 🎯 Bienvenido

Esta documentación completa te guiará para migrar tu landing page de **Novolabs Startup School** desde **React + Vite** a **Next.js 14+** para v0.dev.

---

## 📚 Índice de Documentación

### 🚀 Empezar Aquí

| Documento | Descripción | Tiempo | Audiencia |
|-----------|-------------|--------|-----------|
| **[QUICK_START_V0.md](./QUICK_START_V0.md)** | ⚡ Guía rápida paso a paso | 30-45 min | Desarrolladores con prisa |
| **[MIGRACION_V0_NEXTJS.md](./MIGRACION_V0_NEXTJS.md)** | 📖 Guía completa y detallada | 2-3 horas | Lectura completa |
| **[MAPEO_COMPONENTES_NEXTJS.md](./MAPEO_COMPONENTES_NEXTJS.md)** | 🗺️ Mapeo componente por componente | Referencia | Migración detallada |
| **[EXPORT_COMPLETO_V0.md](./EXPORT_COMPLETO_V0.md)** | 📦 Código listo para copy-paste | Referencia | Copy-paste rápido |

### 📖 Documentación Adicional (Ya existente)

| Documento | Propósito |
|-----------|-----------|
| **[AB_TESTS_IMPLEMENTADOS.md](./AB_TESTS_IMPLEMENTADOS.md)** | Lista completa de 19 tests A/B activos |
| **[COMO_USAR_AB_TESTING.md](./COMO_USAR_AB_TESTING.md)** | Guía práctica del sistema de A/B testing |
| **[MODIFICAR_VARIANTES.md](./MODIFICAR_VARIANTES.md)** | Cómo editar variantes de tests |

---

## 🎓 ¿Por Dónde Empiezo?

### Opción 1: Rápido (30 min) ⚡
**Para:** Desarrolladores experimentados que quieren migrar rápido

**Lee:** [QUICK_START_V0.md](./QUICK_START_V0.md)

**Flujo:**
1. Exportar imágenes desde Figma (5 min)
2. Crear proyecto Next.js (2 min)
3. Configurar archivos base (5 min)
4. Copiar componentes (10 min)
5. Migrar App.tsx (5 min)
6. Testing (3-5 min)

---

### Opción 2: Completo (2-3 horas) 📚
**Para:** Primera vez migrando a Next.js o quieres entender todo

**Lee en orden:**
1. [MIGRACION_V0_NEXTJS.md](./MIGRACION_V0_NEXTJS.md) - Guía completa
2. [MAPEO_COMPONENTES_NEXTJS.md](./MAPEO_COMPONENTES_NEXTJS.md) - Detalle por componente
3. [EXPORT_COMPLETO_V0.md](./EXPORT_COMPLETO_V0.md) - Código de referencia

**Flujo:**
1. Leer diferencias React vs Next.js
2. Preparar estructura de proyecto
3. Migrar componente por componente
4. Configurar deployment
5. Testing exhaustivo

---

### Opción 3: Asistido con v0.dev 🤖
**Para:** Dejar que v0.dev haga el trabajo pesado

**Lee:** [EXPORT_COMPLETO_V0.md](./EXPORT_COMPLETO_V0.md) → Sección "Prompt para v0.dev"

**Flujo:**
1. Exportar imágenes desde Figma
2. Ir a v0.dev
3. Usar el prompt preparado
4. Subir imágenes cuando v0 te las pida
5. Revisar y ajustar el código generado

---

## 🏗️ Arquitectura del Proyecto

### Estructura Actual (React + Vite)
```
novolabs-landing/
├── App.tsx                    # ← Entry point
├── components/
│   ├── HeroSection.tsx
│   ├── SocialProofSection.tsx
│   ├── [8 secciones más...]
│   ├── ui/                    # shadcn/ui
│   │   └── [30+ componentes]
│   └── figma/
│       └── ImageWithFallback.tsx
├── hooks/
│   └── useABTest.tsx          # A/B testing
├── styles/
│   └── globals.css
└── index.html
```

### Estructura Objetivo (Next.js)
```
novolabs-landing-nextjs/
├── app/
│   ├── layout.tsx             # ← Reemplaza index.html
│   ├── page.tsx               # ← Reemplaza App.tsx
│   └── globals.css
├── components/                # ← Mismos componentes
│   ├── HeroSection.tsx        # + 'use client'
│   ├── [todos los demás...]
│   └── ui/
├── hooks/
│   └── useABTest.ts           # + 'use client'
├── lib/
│   └── utils.ts
└── public/
    └── images/                # ← Imágenes de Figma
```

---

## 🔄 Cambios Principales

### 1. Imports
```tsx
// ANTES (React/Vite)
import { Button } from './components/ui/button';
import { useABTest } from './hooks/useABTest';

// DESPUÉS (Next.js)
import { Button } from '@/components/ui/button';
import { useABTest } from '@/hooks/useABTest';
```

### 2. Imágenes
```tsx
// ANTES (Figma Assets)
import logo from 'figma:asset/78f5c753c6bb6e66180b114349ff5dea0a70b98e.png';
<img src={logo} alt="Logo" />

// DESPUÉS (Next.js)
<img src="/images/novolabs-logo.png" alt="Logo" />

// O con next/image:
import Image from 'next/image';
<Image src="/images/novolabs-logo.png" width={200} height={50} alt="Logo" />
```

### 3. Componentes con Estado
```tsx
// ANTES (React/Vite)
import { useState } from 'react';

export function MiComponente() {
  const [state, setState] = useState(false);
  // ...
}

// DESPUÉS (Next.js)
'use client'; // ← REQUERIDO

import { useState } from 'react';

export function MiComponente() {
  const [state, setState] = useState(false);
  // ...
}
```

### 4. LocalStorage
```tsx
// ANTES (React/Vite)
useEffect(() => {
  localStorage.setItem('key', 'value');
}, []);

// DESPUÉS (Next.js)
useEffect(() => {
  if (typeof window === 'undefined') return; // ← Verificación
  localStorage.setItem('key', 'value');
}, []);
```

---

## 📊 Componentes del Proyecto

### Total: 17 Componentes Principales + 30+ UI

#### Secciones de la Landing (10)
1. ✅ **HeroSection.tsx** - Hero con precio, garantía, CTA
2. ✅ **SocialProofSection.tsx** - Testimonios y números
3. ✅ **ProblemSection.tsx** - Checklist interactivo
4. ✅ **RoadmapSection.tsx** - Cronograma de 7 días
5. ✅ **DifferentiationSection.tsx** - Fundadores
6. ✅ **OfferStackSection.tsx** - Oferta con modal
7. ✅ **GuaranteeSection.tsx** - Garantía
8. ✅ **FAQSection.tsx** - Preguntas frecuentes
9. ✅ **FinalCTASection.tsx** - CTA final con countdown
10. ✅ **Footer** - En App.tsx/page.tsx

#### UI/UX (5)
11. ✅ **StickyNavbar.tsx** - Navbar pegado con progress
12. ✅ **StickyFloatingCTA.tsx** - CTA flotante
13. ✅ **ProgressBar.tsx** - Barra de progreso
14. ✅ **Countdown.tsx** - Timer de urgencia

#### A/B Testing (2)
15. ✅ **ABTestDashboard.tsx** - Dashboard de resultados
16. ✅ **ABTestingIndicator.tsx** - Indicador visual

#### SEO (2)
17. ✅ **SemanticMetadata.tsx** - Metadata semántica
18. ✅ **RichSnippets.tsx** - Schema.org JSON-LD

---

## 🖼️ Assets a Exportar

### Imágenes desde Figma (3 archivos)

| Archivo | Asset ID | Guardar Como | Usado En |
|---------|----------|--------------|----------|
| Logo | `78f5c753...` | `novolabs-logo.png` | Footer, Navbar |
| Hero | `0ec5debb...` | `novolabs-hero.png` | HeroSection |
| Founders | (buscar en código) | `founders.png` | DifferentiationSection |

**Exportar desde Figma:**
1. Seleccionar asset
2. Export → PNG
3. Scale: 2x (retina)
4. Guardar en `/public/images/`

---

## ✅ Checklist de Migración

### Pre-Migración
- [ ] Leer QUICK_START_V0.md o MIGRACION_V0_NEXTJS.md
- [ ] Tener cuenta en Vercel (opcional, para deploy)
- [ ] Node.js 18+ instalado
- [ ] Acceso al proyecto de Figma

### Exportar Assets
- [ ] Exportar novolabs-logo.png
- [ ] Exportar novolabs-hero.png
- [ ] Exportar founders.png
- [ ] Guardar en carpeta temporal

### Crear Proyecto
- [ ] Crear proyecto Next.js: `npx create-next-app@latest`
- [ ] Instalar dependencias (Radix UI, Lucide, etc.)
- [ ] Crear carpeta `/public/images/`
- [ ] Copiar imágenes exportadas

### Configuración
- [ ] Actualizar `tailwind.config.ts` con colores Novolabs
- [ ] Actualizar `app/globals.css` con fuentes y estilos
- [ ] Actualizar `app/layout.tsx` con metadata
- [ ] Crear `lib/utils.ts`

### Componentes
- [ ] Copiar carpeta `/components/ui/` completa
- [ ] Copiar todos los componentes de secciones
- [ ] Agregar `'use client'` donde corresponda
- [ ] Actualizar todos los imports a `@/`
- [ ] Reemplazar `figma:asset` por `/images/`

### Hooks
- [ ] Copiar `/hooks/useABTest.tsx` → `useABTest.ts`
- [ ] Agregar `'use client'`
- [ ] Agregar verificaciones `typeof window`

### Page Principal
- [ ] Migrar `App.tsx` → `app/page.tsx`
- [ ] Agregar `'use client'`
- [ ] Actualizar imports
- [ ] Actualizar imágenes

### Testing
- [ ] Ejecutar `npm run dev`
- [ ] Verificar que no hay errores en consola
- [ ] Probar cada sección
- [ ] Probar modal de formulario
- [ ] Probar A/B testing dashboard (Ctrl+Shift+A)
- [ ] Verificar responsive (mobile/desktop)
- [ ] Probar navegación suave
- [ ] Verificar countdown
- [ ] Probar sticky navbar y CTA

### Build & Deploy
- [ ] Build: `npm run build`
- [ ] Verificar que no hay errores de build
- [ ] Test local: `npm start`
- [ ] Deploy a Vercel: `vercel`
- [ ] Verificar en producción

---

## 🎯 Tests A/B Implementados

### 19 Tests Activos en 10 Secciones

| Sección | Tests | Elementos Testeados |
|---------|-------|---------------------|
| Hero | 4 | Pre-headline, Headline, Subheadline, Imagen |
| Problem | 2 | Título, Subtítulo |
| Social Proof | 1 | Título |
| Differentiation | 2 | Título, Imagen |
| Roadmap | 2 | Título, Subtítulo |
| Offer Stack | 2 | Título, Subtítulo |
| Guarantee | 1 | Título |
| FAQ | 2 | Título, Subtítulo |
| Final CTA | 2 | Pre-headline, Headline |
| Sticky CTA | 1 | Copy del botón |

**Dashboard:** Ctrl/Cmd + Shift + A

**Detalles:** Ver [AB_TESTS_IMPLEMENTADOS.md](./AB_TESTS_IMPLEMENTADOS.md)

---

## 🎨 Manual de Marca

### Colores
```css
--novo-primary: #FF3A20      /* Rojo/Naranja */
--novo-secondary: #D4FF78    /* Verde Lima */
--novo-background: #141414   /* Gris Oscuro */
--novo-background-2: #1D1D1D /* Gris Oscuro 2 */
--novo-black: #000000        /* Negro */
--novo-grey: #F2F2F2         /* Gris Claro */
--novo-white: #FFFFFF        /* Blanco */
```

### Tipografías
- **Thunder:** Títulos principales (system-ui fallback)
- **Satoshi:** Body copy (Google Fonts)

### Animaciones
- `premium-float` - Flotación sutil
- `premium-pulse` - Pulso suave
- `pulse-glow` - Brillo pulsante

---

## 📦 Dependencias Clave

```json
{
  "next": "^14.2.0",
  "@radix-ui/react-accordion": "^1.1.2",
  "@radix-ui/react-dialog": "^1.0.5",
  "@radix-ui/react-visually-hidden": "^1.0.3",
  "lucide-react": "latest",
  "tailwindcss-animate": "^1.0.7"
}
```

**Total:** ~15 dependencias principales

---

## 🚀 Comandos Rápidos

```bash
# Crear proyecto
npx create-next-app@latest novolabs-landing

# Instalar dependencias
npm install @radix-ui/react-accordion @radix-ui/react-dialog lucide-react tailwindcss-animate

# Desarrollo
npm run dev

# Build
npm run build

# Producción local
npm start

# Deploy a Vercel
vercel
```

---

## 🐛 Problemas Comunes

| Error | Solución |
|-------|----------|
| `localStorage is not defined` | Agregar `if (typeof window === 'undefined') return;` |
| `Cannot find module '@/...'` | Verificar `tsconfig.json` paths |
| `Component needs useState` | Agregar `'use client'` |
| `Image not found` | Verificar ruta en `/public/images/` |
| Estilos no se aplican | Reiniciar dev server |
| Modal no abre | Verificar script en `layout.tsx` |

**Más detalles:** Ver sección Troubleshooting en cada guía

---

## 📞 Recursos

### Documentación Oficial
- **Next.js:** https://nextjs.org/docs
- **Vercel:** https://vercel.com/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **shadcn/ui:** https://ui.shadcn.com
- **Radix UI:** https://www.radix-ui.com

### Herramientas
- **v0.dev:** https://v0.dev
- **Lighthouse:** https://pagespeed.web.dev
- **Mobile-Friendly Test:** https://search.google.com/test/mobile-friendly

### Community
- **Next.js Discord:** https://discord.gg/nextjs
- **GitHub Issues:** https://github.com/vercel/next.js/issues

---

## 💡 Tips Pro

1. **Migra componente por componente** - No intentes hacer todo a la vez
2. **Usa Git branches** - Hace un branch por cada componente migrado
3. **Testea frecuentemente** - Corre `npm run dev` después de cada cambio
4. **Documenta tus cambios** - Hace commits descriptivos
5. **Usa TypeScript** - Los errores de tipo te guiarán
6. **Optimiza después** - Primero que funcione, luego optimiza
7. **Lighthouse es tu amigo** - Verifica performance continuamente

---

## 📊 Métricas de Éxito

### Performance Goals
- ✅ Lighthouse Score > 90
- ✅ First Contentful Paint < 1.5s
- ✅ Time to Interactive < 3s
- ✅ Cumulative Layout Shift < 0.1

### Funcionalidad
- ✅ Todas las secciones renderean
- ✅ Modal de formulario funciona
- ✅ A/B testing activo
- ✅ Navegación suave
- ✅ Responsive mobile/desktop
- ✅ SEO metadata completa

---

## 🎓 Niveles de Expertise

### Principiante
**Recomendación:** Sigue QUICK_START_V0.md paso a paso, sin saltear.

### Intermedio
**Recomendación:** Lee MIGRACION_V0_NEXTJS.md para entender conceptos, luego usa MAPEO_COMPONENTES_NEXTJS.md como referencia.

### Avanzado
**Recomendación:** Usa EXPORT_COMPLETO_V0.md como referencia rápida, personaliza lo que necesites.

---

## 🗺️ Roadmap Post-Migración

### Fase 1: Migración Básica (Día 1)
- [x] Exportar assets
- [x] Crear proyecto Next.js
- [x] Copiar componentes
- [x] Testing básico

### Fase 2: Optimización (Día 2-3)
- [ ] Optimizar imágenes con `next/image`
- [ ] Implementar ISR (Incremental Static Regeneration) si aplica
- [ ] Configurar Analytics (Google Analytics, Meta Pixel)
- [ ] Optimizar fonts con `next/font`

### Fase 3: Features Avanzadas (Día 4-7)
- [ ] Implementar middleware para A/B testing server-side
- [ ] Agregar páginas de Términos y Privacidad
- [ ] Configurar monitoreo con Vercel Analytics
- [ ] Implementar edge functions si necesitas

### Fase 4: Launch (Día 8+)
- [ ] Build de producción
- [ ] Deploy a Vercel
- [ ] Configurar dominio custom
- [ ] Setup redirects si migrás desde otra URL
- [ ] Configurar monitoring y alerts

---

## 🎯 Siguiente Paso

### ¿Listo para empezar?

**Para migración rápida (30 min):**
👉 Abrí [QUICK_START_V0.md](./QUICK_START_V0.md)

**Para entender todo en profundidad:**
👉 Abrí [MIGRACION_V0_NEXTJS.md](./MIGRACION_V0_NEXTJS.md)

**Para usar v0.dev como asistente:**
👉 Abrí [EXPORT_COMPLETO_V0.md](./EXPORT_COMPLETO_V0.md) y busca "Prompt para v0.dev"

---

## 📝 Notas Finales

### Tiempo Total Estimado
- **Migración Rápida:** 30-45 minutos
- **Migración Completa:** 2-3 horas
- **Con Optimizaciones:** 1 día

### Costo
- **Hosting (Vercel Free):** $0/mes
- **Dominio:** ~$12/año (opcional)
- **Total:** Gratis para empezar

### Soporte
Si tenés dudas durante la migración, revisá:
1. La sección de troubleshooting en cada guía
2. La documentación oficial de Next.js
3. Los issues en GitHub del proyecto Next.js

---

**¡Éxito con tu migración a v0.dev! 🚀**

Creado con ❤️ para ayudarte a llevar Novolabs Startup School a Next.js.

---

## 📄 Licencia

Este proyecto utiliza componentes de:
- **shadcn/ui** - MIT License
- **Radix UI** - MIT License
- **Lucide Icons** - ISC License
- **Tailwind CSS** - MIT License

---

**Última actualización:** Enero 2025  
**Versión de Next.js:** 14.2.0  
**Compatibilidad:** v0.dev ✅
