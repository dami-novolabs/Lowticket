# 🧪 Guía de A/B Testing para Novolabs

## ¿Qué es y por qué lo necesitás?

El A/B testing te permite comparar **dos versiones diferentes** de un elemento de tu landing page para determinar cuál convierte mejor. En lugar de adivinar qué funciona, dejás que los datos decidan.

## 🚀 Cómo Funciona

### Sistema Automático

El sistema de A/B testing que implementamos:

1. **Asigna automáticamente** a cada visitante a la Variante A o Variante B (50/50)
2. **Mantiene la consistencia** - si un usuario ve la Variante A, siempre verá la Variante A
3. **Trackea las conversiones** - registra cuando un usuario hace clic en un CTA
4. **Calcula el ganador** - te muestra qué variante tiene mejor tasa de conversión

### Dashboard de Resultados

Para ver los resultados de tus tests:

**Presiona:** `Ctrl + Shift + A` (Windows/Linux) o `Cmd + Shift + A` (Mac)

Esto abrirá un dashboard donde verás:
- Número de usuarios asignados a cada variante
- Número de conversiones de cada variante
- Tasa de conversión (%)
- Qué variante está ganando 🏆

## 📝 Cómo Implementar un Test

### Ejemplo 1: Test de Headlines

```tsx
import { useABTest } from '../hooks/useABTest';

function MiComponente() {
  const { variant, isReady } = useABTest({ testName: 'hero_headline' });
  
  // No mostrar nada hasta que la variante esté lista (evita "flash")
  if (!isReady) return null;
  
  return (
    <h1>
      {variant === 'A' 
        ? 'Encontrá tu idea ganadora en 7 días'
        : 'Validá tu idea con IA en 1 semana'
      }
    </h1>
  );
}
```

### Ejemplo 2: Test de CTAs

```tsx
import { useABTest } from '../hooks/useABTest';
import { Button } from './ui/button';

function MiCTA() {
  const { variant } = useABTest({ testName: 'cta_button_copy' });
  
  return (
    <Button>
      {variant === 'A'
        ? 'QUIERO ENCONTRAR MI NICHO AHORA'
        : 'EMPEZAR MI VALIDACIÓN GRATIS'
      }
    </Button>
  );
}
```

### Ejemplo 3: Test de Elementos Visuales

```tsx
function TestDeColor() {
  const { variant } = useABTest({ testName: 'cta_color' });
  
  const buttonClass = variant === 'A'
    ? 'bg-novo-primary' // Rojo
    : 'bg-novo-secondary text-black'; // Verde lima
  
  return <Button className={buttonClass}>EMPEZAR AHORA</Button>;
}
```

## 🎯 Track de Conversiones

Para registrar cuando un usuario convierte (hace clic en un CTA):

```tsx
import { trackABTestConversion } from '../hooks/useABTest';

function handleCTAClick() {
  // Track la conversión para este test
  trackABTestConversion('hero_headline', 'cta_click');
  
  // Abrir modal, ir a checkout, etc.
  openModal();
}
```

**IMPORTANTE:** Ya está implementado en `App.tsx` - cuando un usuario hace clic en cualquier CTA y se abre el modal, se trackean automáticamente las conversiones para todos los tests activos.

## 🔧 Testing Manual

### Ver una Variante Específica

Para ver manualmente la Variante A o B (útil para QA):

- **Variante A:** `https://tudominio.com/?variant=A`
- **Variante B:** `https://tudominio.com/?variant=B`

Esto sobrescribe la asignación automática.

## 💡 Ideas de Tests para Novolabs

### Tests de Alto Impacto

1. **Hero Headline**
   - A: "¿Ganas de emprender y miedo a quemar ahorros?"
   - B: "¿Listo para lanzar tu emprendimiento sin riesgos?"

2. **CTA Principal**
   - A: "QUIERO ENCONTRAR MI NICHO AHORA"
   - B: "EMPEZAR MI VALIDACIÓN GRATIS"

3. **Precio (Mostrar descuento)**
   - A: Mostrar precio tachado + descuento
   - B: Solo mostrar precio final

4. **Garantía**
   - A: 30 días de garantía
   - B: 60 días de garantía

5. **Urgencia**
   - A: Countdown timer
   - B: "Solo quedan X cupos"

6. **Social Proof**
   - A: Números (+800 emprendedores)
   - B: Logos de medios (La Nación, iProfesional)

7. **Color del CTA**
   - A: Rojo (#FF3A20)
   - B: Verde lima (#D4FF78)

### Tests de Menor Impacto (pero valiosos)

8. **Formato de Testimonios**
   - A: Foto + texto tradicional
   - B: Formato tipo tweet/screenshot

9. **Value Proposition**
   - A: Enfoque en features ("7 módulos en video")
   - B: Enfoque en beneficios ("Validar tu idea sin gastar")

10. **Orden de Secciones**
    - A: Roadmap antes de Diferenciación
    - B: Diferenciación antes de Roadmap

## 📊 Interpretando Resultados

### ¿Cuándo es significativo un resultado?

Para que un test sea válido necesitás:

1. **Mínimo 100 usuarios por variante** (idealmente 200+)
2. **Diferencia del 10%+ en tasa de conversión**
3. **Al menos 1 semana de datos** (para eliminar sesgos de días/horarios)

### Ejemplo de Cálculo

```
Variante A:
- 150 usuarios asignados
- 15 conversiones
- Tasa: 10%

Variante B:
- 150 usuarios asignados
- 21 conversiones
- Tasa: 14%

Resultado: Variante B gana (+40% mejora)
```

### Significancia Estadística

Para calcular si la diferencia es estadísticamente significativa (no solo suerte), usá esta herramienta:

👉 https://abtestguide.com/calc/

## 🔄 Workflow Recomendado

1. **Semana 1:** Lanzar test de headlines + CTA copy
2. **Semana 2:** Analizar resultados, implementar ganador
3. **Semana 3:** Test de precio + garantía
4. **Semana 4:** Test de social proof + urgencia

**No corras múltiples tests en el mismo elemento** - confunde los resultados.

## 🎓 Componente de Ejemplo

Ya tenés un componente completo de ejemplo en `/components/HeroSectionAB.tsx` que muestra cómo testear el Hero.

También hay 10 ejemplos más en `/examples/ABTestExamples.tsx` con patrones que podés copiar.

## 🔗 Integración con Analytics

### Google Analytics 4

Para enviar datos a GA4, descomentá este código en `/hooks/useABTest.tsx`:

```tsx
// En trackABTestAssignment:
if (typeof gtag !== 'undefined') {
  gtag('event', 'ab_test_assignment', {
    test_name: testName,
    variant: variant,
    source: source,
  });
}

// En trackABTestConversion:
if (typeof gtag !== 'undefined') {
  gtag('event', 'ab_test_conversion', {
    test_name: testName,
    variant: variant,
    conversion_type: conversionType,
  });
}
```

Luego podés crear reportes personalizados en GA4 para ver los resultados.

## 🛠️ Troubleshooting

### "No veo datos en el dashboard"

- Asegúrate de haber hecho clic en al menos un CTA (para registrar conversión)
- Abrí el dashboard con `Ctrl/Cmd + Shift + A`
- Revisá la consola del navegador (debe mostrar logs en development)

### "La variante cambia al recargar la página"

- Esto no debería pasar. Los datos se guardan en `localStorage`
- Si pasa, revisá que no estés en modo incógnito (localStorage no persiste)

### "Quiero resetear todos los datos"

Ejecutá esto en la consola del navegador:

```javascript
localStorage.removeItem('ab_test_assignments');
localStorage.removeItem('ab_test_conversions');
```

## ⚠️ Consideraciones Importantes

1. **Mobile vs Desktop:** Como todo tu tráfico viene de WhatsApp (mobile), los resultados son 100% mobile. Esto es bueno - datos más limpios.

2. **LATAM Audience:** Tu audiencia es homogénea (todo LATAM), lo cual hace los tests más confiables.

3. **No Testees Todo:** Enfocate en elementos de alto impacto primero (headlines, CTAs, precio).

4. **Paciencia:** No cambies tests antes de tener datos suficientes. Dale al menos 1 semana y 100 usuarios por variante.

5. **Legal:** Este sistema guarda datos en el navegador del usuario. No recolecta PII. Pero mencionalo en tu política de privacidad.

## 🎉 Siguiente Paso

1. Decidí qué elemento querés testear primero
2. Creá las dos variantes
3. Implementá usando los ejemplos
4. Esperá 1 semana
5. Revisá resultados con `Ctrl + Shift + A`
6. Implementá el ganador
7. Repetí con el siguiente elemento

---

**¿Preguntas?** Este sistema es simple pero poderoso. Empezá con un test pequeño (headlines) y andá escalando.

**Pro Tip:** Los mayores lifts usualmente vienen de testear:
1. Headlines (puede mejorar 20-50%)
2. CTAs (10-30%)
3. Precio/Oferta (15-40%)
