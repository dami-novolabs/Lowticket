# ✏️ Guía Rápida: Modificar Variantes de A/B Tests

## 🎯 Objetivo

Esta guía te muestra exactamente dónde y cómo modificar el texto de las variantes B en cada sección.

---

## 1️⃣ Hero Section

### 📁 Archivo: `/components/HeroSection.tsx`

#### Pre-headline (Línea ~33)
```tsx
{preHeadlineVariant === 'A' 
  ? '¿Ganas de emprender y miedo a quemar ahorros?'
  : '¿Querés validar tu idea antes de invertir?'  // ← MODIFICÁ ACÁ
}
```

#### Headline Principal (Línea ~40-50)
```tsx
{headlineVariant === 'A' ? (
  <>
    Encontrá tu idea ganadora y su nicho de clientes{' '}
    <span className="text-novo-secondary">en 7 días</span>
  </>
) : (
  <>
    Validá tu idea con IA y conseguí tus primeros clientes{' '}  // ← MODIFICÁ ACÁ
    <span className="text-novo-secondary">en 1 semana</span>  // ← MODIFICÁ ACÁ
  </>
)}
```

#### Sub-headline (Línea ~55)
```tsx
{subheadlineVariant === 'A'
  ? 'Te damos un sistema 100% práctico con Asistentes de IA Especializados, para evaluar tus ideas y encontrar a tu cliente ideal.'
  : 'Sistema paso a paso con IA que te guía desde la idea hasta tus primeros clientes. Sin teoría, solo resultados.'  // ← MODIFICÁ ACÁ
}
```

---

## 2️⃣ Problem Section

### 📁 Archivo: `/components/ProblemSection.tsx`

#### Título (Línea ~67)
```tsx
{titleVariant === 'A' ? (
  <>
    ¿Con qué situaciones te{" "}
    <span className="whitespace-nowrap">sentís identificado?</span>
  </>
) : (
  <>
    ¿Cuáles de estos problemas{" "}  // ← MODIFICÁ ACÁ
    <span className="whitespace-nowrap">te están frenando?</span>  // ← MODIFICÁ ACÁ
  </>
)}
```

#### Subtítulo (Línea ~76)
```tsx
{subtitleVariant === 'A' ? (
  <>
    Hace clic en las que te pasan a vos{" "}
    <span className="whitespace-nowrap">(sé honesto)</span>
  </>
) : (
  <>
    Seleccioná las que aplican a tu situación{" "}  // ← MODIFICÁ ACÁ
    <span className="whitespace-nowrap">(sin filtro)</span>  // ← MODIFICÁ ACÁ
  </>
)}
```

---

## 3️⃣ Social Proof Section

### 📁 Archivo: `/components/SocialProofSection.tsx`

#### Título (Línea ~147)
```tsx
{titleVariant === 'A' ? (
  <>
    <span className="text-novo-secondary">250+ Emprendedores</span> en <span className="text-novo-primary">18 países</span> lanzaron con Novo
  </>
) : (
  <>
    <span className="text-novo-primary">+800 personas</span> ya validaron su idea con <span className="text-novo-secondary">Novolabs</span>  // ← MODIFICÁ ACÁ
  </>
)}
```

---

## 4️⃣ Differentiation Section

### 📁 Archivo: `/components/DifferentiationSection.tsx`

#### Título (Línea ~80)
```tsx
{titleVariant === 'A' 
  ? 'Aprendé directo de emprendedores que ya recorrieron este camino'
  : 'Conocé a los fundadores que construyeron Novolabs desde cero'  // ← MODIFICÁ ACÁ
}
```

---

## 5️⃣ Roadmap Section

### 📁 Archivo: `/components/RoadmapSection.tsx`

#### Título (Línea ~77)
```tsx
{titleVariant === 'A' 
  ? 'Cronograma del curso'
  : '¿Qué vas a aprender en 7 días?'  // ← MODIFICÁ ACÁ
}
```

#### Subtítulo (Línea ~88)
```tsx
{subtitleVariant === 'A'
  ? 'Cada módulo tiene objetivos claros, herramientas específicas para aplicar, tutoriales paso a paso y entregables concretos. Diseñado para que no haya lugar a confusiones.'
  : 'Un paso a paso concreto con objetivos claros, herramientas de IA especializadas y entregables medibles. Sin fluff, solo acción.'  // ← MODIFICÁ ACÁ
}
```

---

## 6️⃣ Offer Stack Section

### 📁 Archivo: `/components/OfferStackSection.tsx`

#### Título (Línea ~42)
```tsx
{titleVariant === 'A'
  ? 'Empezá a trabajar en una idea que tenga potencial'
  : 'Dejá de perder tiempo en ideas sin futuro'  // ← MODIFICÁ ACÁ
}
```

#### Subtítulo (Línea ~47)
```tsx
{subtitleVariant === 'A'
  ? 'Por menos de lo que cuesta una cena para 2 en un restaurante.'
  : 'Validá tu idea por menos de lo que gastas en delivery en una semana.'  // ← MODIFICÁ ACÁ
}
```

---

## 7️⃣ Guarantee Section

### 📁 Archivo: `/components/GuaranteeSection.tsx`

#### Título (Línea ~38)
```tsx
{titleVariant === 'A'
  ? 'Garantía sin letra chica'
  : 'Garantía de reembolso 100%'  // ← MODIFICÁ ACÁ
}
```

---

## 8️⃣ FAQ Section

### 📁 Archivo: `/components/FAQSection.tsx`

#### Título (Línea ~72)
```tsx
{titleVariant === 'A'
  ? 'Si aún quedan dudas...'
  : '¿Todavía tenés preguntas?'  // ← MODIFICÁ ACÁ
}
```

#### Subtítulo (Línea ~76)
```tsx
{subtitleVariant === 'A' ? (
  <>
    <span className="sm:hidden">Preguntas frecuentes de la comunidad</span>
    <span className="hidden sm:inline">Las preguntas más frecuentes de la comunidad</span>
  </>
) : (
  <>
    <span className="sm:hidden">Acá están las respuestas</span>  // ← MODIFICÁ ACÁ
    <span className="hidden sm:inline">Acá respondemos todas las dudas más comunes</span>  // ← MODIFICÁ ACÁ
  </>
)}
```

---

## 9️⃣ Final CTA Section

### 📁 Archivo: `/components/FinalCTASection.tsx`

#### Pre-headline (Línea ~38)
```tsx
{preHeadlineVariant === 'A'
  ? '¿Listo para dar el primer paso?'
  : '¿Querés dejar de dar vueltas?'  // ← MODIFICÁ ACÁ
}
```

#### Headline (Línea ~44)
```tsx
{headlineVariant === 'A'
  ? 'Encontrá una idea con potencial y un nicho con capacidad de pago'
  : 'Validá tu idea en 7 días y empezá con el pie derecho'  // ← MODIFICÁ ACÁ
}
```

---

## 🔟 Sticky Floating CTA

### 📁 Archivo: `/components/StickyFloatingCTA.tsx`

#### Copy del Botón (Línea ~140)
```tsx
{buttonVariant === 'A'
  ? 'Inscribirme ahora'
  : 'Validar mi idea'  // ← MODIFICÁ ACÁ
}
```

---

## 🖼️ Cómo Cambiar Imágenes

### Hero Image

**Archivo:** `/components/HeroSection.tsx` (Línea ~67)

```tsx
// 1. Importá tu nueva imagen al inicio del archivo
import novolabsHeroAlt from 'figma:asset/TU_ASSET_ID.png';

// 2. Cambiá la línea del src:
src={imageVariant === 'A' ? novolabsHero : novolabsHeroAlt}  // ← ACÁ
```

### Founders Image

**Archivo:** `/components/DifferentiationSection.tsx` (Líneas ~88 y ~109)

```tsx
// 1. Importá tu nueva imagen al inicio del archivo
import foundersImageAlt from 'figma:asset/TU_ASSET_ID.png';

// 2. Cambiá ambas instancias:
src={imageVariant === 'A' ? foundersImage : foundersImageAlt}  // ← ACÁ
```

---

## 💡 Tips para Crear Buenas Variantes

### 1. **Contraste de Enfoque**
- **Variante A:** Enfoque en el problema/miedo
- **Variante B:** Enfoque en la solución/beneficio

**Ejemplo:**
- A: "¿Miedo a quemar ahorros?"
- B: "¿Listo para validar tu idea?"

### 2. **Contraste de Longitud**
- **Variante A:** Copy detallado
- **Variante B:** Copy conciso

**Ejemplo:**
- A: "Te damos un sistema 100% práctico con Asistentes de IA Especializados"
- B: "Validá tu idea con IA en 7 días"

### 3. **Contraste de Tono**
- **Variante A:** Tono educativo/informativo
- **Variante B:** Tono urgente/directo

**Ejemplo:**
- A: "Cronograma del curso"
- B: "¿Qué vas a lograr en 7 días?"

### 4. **Contraste de Especificidad**
- **Variante A:** Números específicos
- **Variante B:** Términos generales

**Ejemplo:**
- A: "en 7 días"
- B: "en 1 semana"

---

## ✅ Checklist de Modificación

Antes de modificar una variante, preguntate:

- [ ] ¿Es diferente suficiente de la variante A?
- [ ] ¿Mantiene el mismo mensaje de fondo?
- [ ] ¿Es claro y fácil de entender?
- [ ] ¿Usa el tono de voz de Novolabs?
- [ ] ¿Es mobile-friendly? (texto no muy largo)
- [ ] ¿Tiene una hipótesis clara de por qué podría funcionar mejor?

---

## 🚀 Workflow Recomendado

1. **Elegí UNA sección para testear**
2. **Modificá solo la Variante B** (dejá A como está)
3. **Guardá el archivo**
4. **Testeá manualmente:** Agregá `?variant=B` a la URL
5. **Revisá en mobile y desktop**
6. **Dejá correr el test por 1 semana mínimo**
7. **Revisá resultados:** Presiona Ctrl+Shift+A
8. **Implementá ganadora y empezá nuevo test**

---

## 🎨 Formato de Copy

### Para mantener consistencia:

#### Headlines:
- Primera letra en mayúscula
- Sin punto final
- Usar negrita con `<span className="text-novo-primary">` para palabras clave
- Mantener el Thunder font (ya aplicado)

#### Subheadlines:
- Primera letra en mayúscula
- Punto final al terminar
- Máximo 2 líneas en mobile
- Usar Satoshi font (ya aplicado)

---

## 📞 Necesitás Ayuda?

Si no estás seguro de cómo modificar algo:

1. Buscá el archivo en la lista de arriba
2. Usá Ctrl+F (o Cmd+F en Mac) para buscar el texto exacto de la Variante A
3. Modificá solo el texto después del `:`
4. Guardá y recargá la página con `?variant=B`

---

**¡Listo para empezar a optimizar tu landing page! 🚀**
