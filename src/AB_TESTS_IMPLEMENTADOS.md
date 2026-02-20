# 🧪 Tests A/B Implementados en la Landing de Novolabs

## ✅ Estado: TODOS LOS TESTS ACTIVOS

Sistema completo de A/B testing implementado en **TODAS** las secciones principales de la landing page.

---

## 📊 Tests Implementados por Sección

### 1️⃣ **Hero Section** (4 tests)

**Archivo:** `/components/HeroSection.tsx`

#### Test 1: Pre-headline
- **Test Name:** `hero_pre_headline`
- **Variante A (Original):** "¿Ganas de emprender y miedo a quemar ahorros?"
- **Variante B (Nueva):** "¿Querés validar tu idea antes de invertir?"

#### Test 2: Headline Principal
- **Test Name:** `hero_headline`
- **Variante A (Original):** "Encontrá tu idea ganadora y su nicho de clientes en 7 días"
- **Variante B (Nueva):** "Validá tu idea con IA y conseguí tus primeros clientes en 1 semana"

#### Test 3: Sub-headline
- **Test Name:** `hero_subheadline`
- **Variante A (Original):** "Te damos un sistema 100% práctico con Asistentes de IA Especializados, para evaluar tus ideas y encontrar a tu cliente ideal."
- **Variante B (Nueva):** "Sistema paso a paso con IA que te guía desde la idea hasta tus primeros clientes. Sin teoría, solo resultados."

#### Test 4: Imagen Hero
- **Test Name:** `hero_image`
- **Variante A:** Imagen actual
- **Variante B:** Sistema listo para cambiar imagen (mismo por ahora)
- **Nota:** Cuando tengas otra imagen, solo cambiá la variable `novolabsHero` por la nueva

---

### 2️⃣ **Problem Section** (2 tests)

**Archivo:** `/components/ProblemSection.tsx`

#### Test 1: Título
- **Test Name:** `problem_title`
- **Variante A (Original):** "¿Con qué situaciones te sentís identificado?"
- **Variante B (Nueva):** "¿Cuáles de estos problemas te están frenando?"

#### Test 2: Subtítulo
- **Test Name:** `problem_subtitle`
- **Variante A (Original):** "Hace clic en las que te pasan a vos (sé honesto)"
- **Variante B (Nueva):** "Seleccioná las que aplican a tu situación (sin filtro)"

---

### 3️⃣ **Social Proof Section** (1 test)

**Archivo:** `/components/SocialProofSection.tsx`

#### Test 1: Título Principal
- **Test Name:** `social_proof_title`
- **Variante A (Original):** "250+ Emprendedores en 18 países lanzaron con Novo"
- **Variante B (Nueva):** "+800 personas ya validaron su idea con Novolabs"

---

### 4️⃣ **Differentiation Section** (2 tests)

**Archivo:** `/components/DifferentiationSection.tsx`

#### Test 1: Título
- **Test Name:** `differentiation_title`
- **Variante A (Original):** "Aprendé directo de emprendedores que ya recorrieron este camino"
- **Variante B (Nueva):** "Conocé a los fundadores que construyeron Novolabs desde cero"

#### Test 2: Imagen Founders
- **Test Name:** `differentiation_image`
- **Variante A:** Imagen actual de founders
- **Variante B:** Sistema listo para cambiar imagen (mismo por ahora)
- **Nota:** Cuando tengas otra imagen de los founders, solo cambiá la variable

---

### 5️⃣ **Roadmap Section** (2 tests)

**Archivo:** `/components/RoadmapSection.tsx`

#### Test 1: Título
- **Test Name:** `roadmap_title`
- **Variante A (Original):** "Cronograma del curso"
- **Variante B (Nueva):** "¿Qué vas a aprender en 7 días?"

#### Test 2: Subtítulo
- **Test Name:** `roadmap_subtitle`
- **Variante A (Original):** "Cada módulo tiene objetivos claros, herramientas específicas para aplicar, tutoriales paso a paso y entregables concretos. Diseñado para que no haya lugar a confusiones."
- **Variante B (Nueva):** "Un paso a paso concreto con objetivos claros, herramientas de IA especializadas y entregables medibles. Sin fluff, solo acción."

---

### 6️⃣ **Offer Stack Section** (2 tests)

**Archivo:** `/components/OfferStackSection.tsx`

#### Test 1: Título Principal
- **Test Name:** `offer_title`
- **Variante A (Original):** "Empezá a trabajar en una idea que tenga potencial"
- **Variante B (Nueva):** "Dejá de perder tiempo en ideas sin futuro"

#### Test 2: Subtítulo
- **Test Name:** `offer_subtitle`
- **Variante A (Original):** "Por menos de lo que cuesta una cena para 2 en un restaurante."
- **Variante B (Nueva):** "Validá tu idea por menos de lo que gastas en delivery en una semana."

---

### 7️⃣ **Guarantee Section** (1 test)

**Archivo:** `/components/GuaranteeSection.tsx`

#### Test 1: Título
- **Test Name:** `guarantee_title`
- **Variante A (Original):** "Garantía sin letra chica"
- **Variante B (Nueva):** "Garantía de reembolso 100%"

---

### 8️⃣ **FAQ Section** (2 tests)

**Archivo:** `/components/FAQSection.tsx`

#### Test 1: Título
- **Test Name:** `faq_title`
- **Variante A (Original):** "Si aún quedan dudas..."
- **Variante B (Nueva):** "¿Todavía tenés preguntas?"

#### Test 2: Subtítulo
- **Test Name:** `faq_subtitle`
- **Variante A (Original):** "Las preguntas más frecuentes de la comunidad"
- **Variante B (Nueva):** "Acá respondemos todas las dudas más comunes"

---

### 9️⃣ **Final CTA Section** (2 tests)

**Archivo:** `/components/FinalCTASection.tsx`

#### Test 1: Pre-headline
- **Test Name:** `final_cta_pre_headline`
- **Variante A (Original):** "¿Listo para dar el primer paso?"
- **Variante B (Nueva):** "¿Querés dejar de dar vueltas?"

#### Test 2: Headline Principal
- **Test Name:** `final_cta_headline`
- **Variante A (Original):** "Encontrá una idea con potencial y un nicho con capacidad de pago"
- **Variante B (Nueva):** "Validá tu idea en 7 días y empezá con el pie derecho"

---

### 🔟 **Sticky Floating CTA** (1 test)

**Archivo:** `/components/StickyFloatingCTA.tsx`

#### Test 1: Copy del Botón
- **Test Name:** `sticky_cta_button`
- **Variante A (Original):** "Inscribirme ahora"
- **Variante B (Nueva):** "Validar mi idea"

---

## 📈 Total de Tests Activos

- **Secciones con A/B testing:** 10
- **Tests individuales:** 19
- **Tests de texto:** 17
- **Tests de imagen:** 2 (preparados para cuando tengas imágenes alternativas)

---

## 🎯 Cómo Ver los Resultados

Presiona **`Ctrl + Shift + A`** (Windows/Linux) o **`Cmd + Shift + A`** (Mac)

El dashboard te mostrará:
- Usuarios por variante para cada test
- Conversiones
- Tasas de conversión
- Variante ganadora

---

## 🔄 Cómo Modificar una Variante

### Ejemplo: Cambiar el headline del Hero

1. Abrí `/components/HeroSection.tsx`
2. Buscá la línea con `headlineVariant === 'A'`
3. Modificá el texto de la Variante B:

```tsx
{headlineVariant === 'A' ? (
  <>
    Encontrá tu idea ganadora y su nicho de clientes{' '}
    <span className="text-novo-secondary">en 7 días</span>
  </>
) : (
  <>
    TU NUEVO HEADLINE ACÁ{' '}
    <span className="text-novo-secondary">CON TU COPY</span>
  </>
)}
```

4. Guardá el archivo y listo!

---

## 🖼️ Cómo Agregar Imágenes Alternativas

### Ejemplo: Cambiar la imagen del Hero

1. Subí tu nueva imagen a Figma
2. Importala en el componente:
   ```tsx
   import novolabsHeroAlt from 'figma:asset/TU_NUEVO_ASSET_ID.png';
   ```
3. Cambiá la línea del test:
   ```tsx
   src={imageVariant === 'A' ? novolabsHero : novolabsHeroAlt}
   ```
4. Listo! El sistema ahora testeará ambas imágenes

---

## 🧪 Testing Manual (Forzar Variantes)

Para ver una variante específica en tu navegador:

- **Ver todas las Variantes A:** `?variant=A`
- **Ver todas las Variantes B:** `?variant=B`

**Ejemplo:**
```
https://tu-landing.com?variant=B
```

Esto te permite:
- Mostrar una versión específica a tu equipo
- Tomar screenshots de cada variante
- Revisar el diseño antes de lanzar el test

---

## 📋 Checklist de Implementación

✅ Hero Section (Pre-headline, Headline, Subheadline, Imagen)  
✅ Problem Section (Título, Subtítulo)  
✅ Social Proof Section (Título)  
✅ Differentiation Section (Título, Imagen)  
✅ Roadmap Section (Título, Subtítulo)  
✅ Offer Stack Section (Título, Subtítulo)  
✅ Guarantee Section (Título)  
✅ FAQ Section (Título, Subtítulo)  
✅ Final CTA Section (Pre-headline, Headline)  
✅ Sticky Floating CTA (Copy del botón)  

---

## 🎓 Qué Testear Primero

### **Prioridad ALTA** (Mayor impacto):
1. **Hero Headline** → Es lo primero que ven
2. **Hero Pre-headline** → Frame mental inicial
3. **Offer Title** → Momento de decisión de compra

### **Prioridad MEDIA** (Impacto moderado):
4. **Final CTA Headline** → Último empujón
5. **Problem Title** → Engagement con el checklist
6. **Sticky CTA Button** → Conversión rápida

### **Prioridad BAJA** (Optimización fina):
7. Social Proof Title
8. FAQ Title
9. Guarantee Title
10. Roadmap Title

---

## 💡 Tips para Experimentar

### **Tipos de hipótesis que podés testear:**

#### 1. **Enfoque emocional:**
- Variante A: Miedo/problema ("¿miedo a quemar ahorros?")
- Variante B: Aspiración/beneficio ("¿listo para validar?")

#### 2. **Especificidad:**
- Variante A: Específico ("en 7 días")
- Variante B: Genérico ("en 1 semana")

#### 3. **Longitud:**
- Variante A: Copy largo (más detalles)
- Variante B: Copy corto (más directo)

#### 4. **Tono:**
- Variante A: Formal/profesional
- Variante B: Casual/conversacional

#### 5. **Urgencia:**
- Variante A: Sin urgencia
- Variante B: Con urgencia/escasez

---

## 🚀 Próximos Pasos

1. **Esperá tráfico real** → Mínimo 100 usuarios por variante
2. **Revisá resultados** → Presiona Ctrl+Shift+A después de 1 semana
3. **Implementá ganadora** → Dejá solo el copy que mejor convirtió
4. **Empezá nuevo test** → Probá otra sección/elemento

---

## 💾 Datos y Privacidad

- Todos los datos se guardan en `localStorage` del navegador
- 100% client-side, no se envía nada a servidores
- Los datos persisten entre sesiones
- Cada usuario mantiene su variante asignada

---

## 🔥 Pro Tips

1. **No testees múltiples cosas a la vez** → Cambios aislados = resultados claros
2. **Dale tiempo suficiente** → 1 semana mínimo, idealmente 2
3. **Esperá significancia estadística** → Mínimo 100 usuarios por variante
4. **Documentá tus hipótesis** → Escribí por qué pensás que B va a ganar
5. **Aprendé de los "fracasos"** → Un test que "pierde" igual te da información valiosa

---

## 📞 Soporte

Si tenés dudas sobre cómo modificar o agregar tests, revisá:
- `/COMO_USAR_AB_TESTING.md` → Guía práctica completa
- `/AB_TESTING_GUIDE.md` → Documentación técnica
- `/examples/ABTestExamples.tsx` → 10 ejemplos copy-paste

---

**¡El sistema está 100% operativo y listo para empezar a generar insights!** 🎉
