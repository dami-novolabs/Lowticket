# 📑 Índice Rápido - Migración a v0.dev

## 🎯 ¿Qué necesitas hacer ahora mismo?

### Migrar RÁPIDO (30 min)
👉 **[QUICK_START_V0.md](./QUICK_START_V0.md)**
- Pasos exactos sin explicaciones largas
- Comandos copy-paste
- Checklist simple

---

### Entender TODO en detalle
👉 **[MIGRACION_V0_NEXTJS.md](./MIGRACION_V0_NEXTJS.md)**
- Explicación completa de diferencias React vs Next.js
- Guía exhaustiva paso a paso
- Troubleshooting detallado

---

### Ver cambios componente por componente
👉 **[MAPEO_COMPONENTES_NEXTJS.md](./MAPEO_COMPONENTES_NEXTJS.md)**
- Lista de TODOS los componentes
- Qué cambiar en cada uno
- Orden recomendado de migración

---

### Código listo para copy-paste
👉 **[EXPORT_COMPLETO_V0.md](./EXPORT_COMPLETO_V0.md)**
- Archivos de configuración completos
- package.json, tailwind.config.ts, etc.
- Prompt optimizado para v0.dev

---

### Diagramas visuales del proceso
👉 **[DIAGRAMA_MIGRACION.md](./DIAGRAMA_MIGRACION.md)**
- Flujos de migración visualizados
- Arquitectura de componentes
- Transformación de archivos

---

### Índice maestro con toda la info
👉 **[README_MIGRACION.md](./README_MIGRACION.md)**
- Overview completo del proyecto
- Guía según tu nivel de expertise
- Recursos adicionales

---

## 📂 Estructura de Documentos

```
Documentación de Migración/
│
├── 📘 README_MIGRACION.md
│   └─► Punto de entrada principal
│       Contiene índice de TODO
│
├── ⚡ QUICK_START_V0.md
│   └─► Para desarrolladores con prisa
│       30 minutos, paso a paso
│
├── 📖 MIGRACION_V0_NEXTJS.md
│   └─► Guía completa y detallada
│       Explicaciones en profundidad
│
├── 🗺️ MAPEO_COMPONENTES_NEXTJS.md
│   └─► Referencia de cada componente
│       Qué cambiar en cada archivo
│
├── 📦 EXPORT_COMPLETO_V0.md
│   └─► Código copy-paste
│       Configuración completa
│
├── 📊 DIAGRAMA_MIGRACION.md
│   └─► Visualización del proceso
│       Flujos y arquitectura
│
└── 📑 INDICE_RAPIDO.md (este archivo)
    └─► Índice de navegación rápida
        Encuentra lo que necesitas YA
```

---

## 🔍 Busca por Tema

### Quiero saber sobre...

#### Imágenes / Assets
- **Exportar desde Figma** → [QUICK_START_V0.md - Paso 1](./QUICK_START_V0.md#paso-1-exportar-im%C3%A1genes-5-min)
- **Migrar figma:asset** → [MIGRACION_V0_NEXTJS.md - Migración de Imágenes](./MIGRACION_V0_NEXTJS.md#migraci%C3%B3n-de-im%C3%A1genes-y-assets)
- **Lista de assets** → [EXPORT_COMPLETO_V0.md - Assets](./EXPORT_COMPLETO_V0.md#listado-de-assets-de-figma)

#### Componentes
- **Qué componentes cambiar** → [MAPEO_COMPONENTES_NEXTJS.md](./MAPEO_COMPONENTES_NEXTJS.md)
- **'use client' donde va** → [MAPEO_COMPONENTES_NEXTJS.md - Resumen](./MAPEO_COMPONENTES_NEXTJS.md#resumen-de-cambios-por-componente)
- **Orden de migración** → [MAPEO_COMPONENTES_NEXTJS.md - Orden](./MAPEO_COMPONENTES_NEXTJS.md#orden-sugerido-de-migraci%C3%B3n)

#### Configuración
- **package.json** → [EXPORT_COMPLETO_V0.md - package.json](./EXPORT_COMPLETO_V0.md#1-packagejson)
- **tailwind.config.ts** → [EXPORT_COMPLETO_V0.md - tailwind.config](./EXPORT_COMPLETO_V0.md#3-tailwindconfigts)
- **next.config.js** → [EXPORT_COMPLETO_V0.md - next.config](./EXPORT_COMPLETO_V0.md#2-nextconfigjs)
- **layout.tsx** → [EXPORT_COMPLETO_V0.md - layout](./EXPORT_COMPLETO_V0.md#applayouttsx)
- **globals.css** → [EXPORT_COMPLETO_V0.md - globals](./EXPORT_COMPLETO_V0.md#appglobalscss)

#### A/B Testing
- **Tests implementados** → [AB_TESTS_IMPLEMENTADOS.md](./AB_TESTS_IMPLEMENTADOS.md)
- **Cómo usar** → [COMO_USAR_AB_TESTING.md](./COMO_USAR_AB_TESTING.md)
- **Modificar variantes** → [MODIFICAR_VARIANTES.md](./MODIFICAR_VARIANTES.md)
- **useABTest en Next.js** → [MAPEO_COMPONENTES_NEXTJS.md - Hooks](./MAPEO_COMPONENTES_NEXTJS.md#23-useabtesttsx--useabtestts)

#### Problemas / Errores
- **localStorage undefined** → [MIGRACION_V0_NEXTJS.md - Problemas Comunes](./MIGRACION_V0_NEXTJS.md#problemas-comunes-y-soluciones)
- **Cannot find module** → [QUICK_START_V0.md - Troubleshooting](./QUICK_START_V0.md#troubleshooting-r%C3%A1pido)
- **Component needs useState** → [MAPEO_COMPONENTES_NEXTJS.md - Checklist](./MAPEO_COMPONENTES_NEXTJS.md#checklist-de-migraci%C3%B3n)

#### Deploy
- **Build producción** → [QUICK_START_V0.md - Testing](./QUICK_START_V0.md#61-ejecutar-en-desarrollo)
- **Deploy a Vercel** → [EXPORT_COMPLETO_V0.md - Deploy](./EXPORT_COMPLETO_V0.md#pasos-para-deploy-en-vercel)
- **Dominio custom** → [EXPORT_COMPLETO_V0.md - Vercel](./EXPORT_COMPLETO_V0.md#3-configurar-dominio-opcional)

#### v0.dev
- **Prompt para v0** → [EXPORT_COMPLETO_V0.md - Prompt](./EXPORT_COMPLETO_V0.md#prompt-completo-para-v0dev)
- **Qué subir a v0** → [README_MIGRACION.md - Opción 3](./README_MIGRACION.md#opci%C3%B3n-3-asistido-con-v0dev-)

---

## 🚀 Flujos de Trabajo

### Escenario 1: "Necesito migrar YA"
```
1. Abrí QUICK_START_V0.md
2. Exportá las 3 imágenes de Figma (5 min)
3. Seguí los pasos 2-6 sin saltearte nada
4. Total: 30-45 minutos
```

### Escenario 2: "Primera vez con Next.js"
```
1. Lee README_MIGRACION.md (overview general)
2. Lee MIGRACION_V0_NEXTJS.md (entender diferencias)
3. Usa MAPEO_COMPONENTES_NEXTJS.md como guía
4. Consulta EXPORT_COMPLETO_V0.md para código
5. Total: 2-3 horas
```

### Escenario 3: "Quiero usar v0.dev"
```
1. Exportá las imágenes desde Figma
2. Abrí EXPORT_COMPLETO_V0.md
3. Busca "Prompt Completo para v0.dev"
4. Copiá y pegá en v0.dev
5. Subí las imágenes cuando te las pida
6. Ajustá el código generado según necesites
```

### Escenario 4: "Tengo un error específico"
```
1. Buscá el error en QUICK_START_V0.md - Troubleshooting
2. Si no está, busca en MIGRACION_V0_NEXTJS.md - Problemas Comunes
3. Verifica el componente específico en MAPEO_COMPONENTES_NEXTJS.md
4. Consulta la documentación oficial de Next.js
```

---

## 📊 Checklist Súper Rápida

```bash
# 1. EXPORTAR ASSETS (5 min)
[ ] novolabs-logo.png
[ ] novolabs-hero.png
[ ] founders.png

# 2. CREAR PROYECTO (2 min)
[ ] npx create-next-app@latest novolabs-landing
[ ] cd novolabs-landing

# 3. INSTALAR DEPS (2 min)
[ ] npm install @radix-ui/react-accordion @radix-ui/react-dialog lucide-react

# 4. CONFIGURAR (5 min)
[ ] Actualizar tailwind.config.ts
[ ] Actualizar app/globals.css
[ ] Actualizar app/layout.tsx
[ ] Crear lib/utils.ts

# 5. COPIAR COMPONENTES (10 min)
[ ] Copiar /components/ui/ completo
[ ] Copiar componentes de secciones
[ ] Copiar /hooks/useABTest.tsx
[ ] Agregar 'use client' donde corresponda
[ ] Cambiar imports a @/
[ ] Reemplazar figma:asset por /images/

# 6. MIGRAR PAGE (5 min)
[ ] Copiar App.tsx a app/page.tsx
[ ] Agregar 'use client'
[ ] Actualizar imports
[ ] Cambiar función a HomePage()

# 7. TESTING (5 min)
[ ] npm run dev
[ ] Verificar consola sin errores
[ ] Probar todas las secciones
[ ] Verificar modal
[ ] Probar responsive

# 8. DEPLOY
[ ] npm run build
[ ] vercel
```

---

## 🎓 Según tu Nivel

### 👶 Principiante
**Nunca usé Next.js**

**Lee en orden:**
1. [README_MIGRACION.md](./README_MIGRACION.md) - Para entender el overview
2. [MIGRACION_V0_NEXTJS.md](./MIGRACION_V0_NEXTJS.md) - Para aprender las diferencias
3. [QUICK_START_V0.md](./QUICK_START_V0.md) - Para seguir paso a paso

**Recursos adicionales:**
- https://nextjs.org/learn - Tutorial oficial de Next.js
- https://nextjs.org/docs - Documentación oficial

---

### 🧑‍💻 Intermedio
**Conozco React pero no Next.js**

**Lee:**
1. [MIGRACION_V0_NEXTJS.md - Diferencias Clave](./MIGRACION_V0_NEXTJS.md#diferencias-clave)
2. [QUICK_START_V0.md](./QUICK_START_V0.md) - Para ejecutar
3. [MAPEO_COMPONENTES_NEXTJS.md](./MAPEO_COMPONENTES_NEXTJS.md) - Como referencia

**Tip:** Enfocate en entender 'use client' y Server Components

---

### 🚀 Avanzado
**Experiencia con Next.js**

**Usa:**
1. [EXPORT_COMPLETO_V0.md](./EXPORT_COMPLETO_V0.md) - Código de referencia
2. [MAPEO_COMPONENTES_NEXTJS.md](./MAPEO_COMPONENTES_NEXTJS.md) - Checklist rápido

**Tip:** Podes saltearte explicaciones y usar solo el código

---

## 🎯 Por Objetivo

### "Solo quiero que funcione"
→ [QUICK_START_V0.md](./QUICK_START_V0.md)

### "Quiero entender qué estoy haciendo"
→ [MIGRACION_V0_NEXTJS.md](./MIGRACION_V0_NEXTJS.md)

### "Necesito código copy-paste"
→ [EXPORT_COMPLETO_V0.md](./EXPORT_COMPLETO_V0.md)

### "Quiero ver los cambios visualizados"
→ [DIAGRAMA_MIGRACION.md](./DIAGRAMA_MIGRACION.md)

### "Necesito saber qué tocar en cada componente"
→ [MAPEO_COMPONENTES_NEXTJS.md](./MAPEO_COMPONENTES_NEXTJS.md)

### "Quiero usar v0.dev para que me ayude"
→ [EXPORT_COMPLETO_V0.md - Sección Prompt](./EXPORT_COMPLETO_V0.md#prompt-completo-para-v0dev)

---

## 💡 Tips de Navegación

### Ctrl+F es tu amigo
Usa búsqueda en los archivos markdown para encontrar términos específicos:
- "localStorage" → Encuentra problemas con storage
- "'use client'" → Encuentra qué componentes lo necesitan
- "figma:asset" → Encuentra info sobre migración de imágenes
- "error" → Encuentra troubleshooting

### Usa los enlaces internos
Todos los documentos tienen enlaces internos que te llevan a secciones específicas

### Marcadores útiles
Agregá estos archivos a favoritos/bookmarks:
- README_MIGRACION.md - Para volver al índice
- QUICK_START_V0.md - Para consultas rápidas
- MAPEO_COMPONENTES_NEXTJS.md - Para checklist de componentes

---

## 📞 ¿Necesitas Ayuda?

### Antes de pedir ayuda:

1. ✅ Revisaste QUICK_START_V0.md - Troubleshooting?
2. ✅ Buscaste el error en MIGRACION_V0_NEXTJS.md?
3. ✅ Verificaste el componente en MAPEO_COMPONENTES_NEXTJS.md?
4. ✅ Consultaste la doc oficial de Next.js?

### Recursos oficiales:

- **Next.js Discord:** https://discord.gg/nextjs
- **Stack Overflow:** Tag `next.js`
- **GitHub Issues:** https://github.com/vercel/next.js/issues

---

## 🎉 ¡Éxito en tu Migración!

Esta documentación está diseñada para que puedas migrar tu landing de Novolabs a Next.js de forma eficiente y sin frustraciones.

**Recorda:**
- No hay preguntas tontas
- Hace commits frecuentes
- Testea continuamente
- Usa Git branches para experimentar

---

## 📚 Documentos Relacionados (Ya existentes)

### A/B Testing
- [AB_TESTS_IMPLEMENTADOS.md](./AB_TESTS_IMPLEMENTADOS.md) - 19 tests activos
- [COMO_USAR_AB_TESTING.md](./COMO_USAR_AB_TESTING.md) - Guía de uso
- [MODIFICAR_VARIANTES.md](./MODIFICAR_VARIANTES.md) - Editar variantes

### Otros
- [Guidelines.md](./guidelines/Guidelines.md) - Guías del proyecto original

---

**Última actualización:** Enero 2025  
**Creado para:** Migración de Novolabs Landing a v0.dev/Next.js  
**Nivel de detalle:** Completo
