# 🎯 Guía Práctica: A/B Testing en tu Landing de Novolabs

## ¿Qué puedes testear?

### **Tests que más impactan en conversión:**

1. **Headlines del Hero** (cambio de enfoque)
2. **Copy de los CTAs** (acción específica)
3. **Precio con/sin descuento** (psicología de precios)
4. **Garantía 30 vs 60 días** (reducir riesgo)
5. **Urgencia: tiempo vs escasez** (tipo de trigger)
6. **Color del botón principal** (rojo vs verde lima)

---

## 🚀 Implementación Paso a Paso

### **EJEMPLO 1: Cambiar el headline del Hero**

**Archivo:** `/components/HeroSection.tsx`

```tsx
import { useABTest } from '../hooks/useABTest';

export function HeroSection() {
  const { variant, isReady } = useABTest({ testName: 'hero_headline_oct2025' });
  
  if (!isReady) return null; // Evita "flash" de contenido
  
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h1 className="thunder-font text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-novo-white">
          {variant === 'A' 
            ? '¿Ganas de emprender y miedo a quemar ahorros?' // ORIGINAL
            : '¿Listo para validar tu idea sin gastar un peso?' // NUEVA
          }
        </h1>
        
        <p className="text-lg sm:text-xl text-novo-grey leading-relaxed">
          {variant === 'A'
            ? 'Encontrá tu idea ganadora y su nicho de clientes en 7 días'
            : 'Validá tu idea con IA y conseguí tus primeros clientes en 1 semana'
          }
        </p>
      </div>
    </section>
  );
}
```

---

### **EJEMPLO 2: Cambiar el copy del CTA principal**

**Archivo:** `/components/StickyFloatingCTA.tsx` o cualquier botón

```tsx
import { useABTest } from '../hooks/useABTest';
import { Button } from './ui/button';

export function MainCTA() {
  const { variant } = useABTest({ testName: 'cta_copy_oct2025' });
  
  return (
    <Button className="w-full sm:w-auto px-8 py-6 bg-novo-primary hover:bg-novo-primary/90">
      {variant === 'A'
        ? 'QUIERO ENCONTRAR MI NICHO AHORA' // ORIGINAL
        : 'SÍ, QUIERO VALIDAR MI IDEA GRATIS' // NUEVA
      }
    </Button>
  );
}
```

---

### **EJEMPLO 3: Mostrar u ocultar descuento en precio**

**Archivo:** `/components/OfferStackSection.tsx`

```tsx
import { useABTest } from '../hooks/useABTest';

export function PriceDisplay() {
  const { variant } = useABTest({ testName: 'price_display_oct2025' });
  
  if (variant === 'A') {
    // Mostrar precio con descuento
    return (
      <div className="text-center">
        <div className="flex items-center justify-center gap-3">
          <span className="text-novo-grey line-through text-xl">USD $297</span>
          <span className="text-novo-primary text-4xl font-bold">USD $97</span>
        </div>
        <p className="text-novo-secondary text-sm mt-2">
          ¡Ahorrás $200 hoy!
        </p>
      </div>
    );
  } else {
    // Solo precio final (sin ancla de precio alto)
    return (
      <div className="text-center">
        <div className="text-novo-primary text-4xl font-bold">USD $97</div>
        <p className="text-novo-grey text-sm mt-2">Inversión única</p>
      </div>
    );
  }
}
```

---

### **EJEMPLO 4: Cambiar duración de la garantía**

**Archivo:** `/components/GuaranteeSection.tsx`

```tsx
import { useABTest } from '../hooks/useABTest';

export function GuaranteeDisplay() {
  const { variant } = useABTest({ testName: 'guarantee_duration_oct2025' });
  
  const days = variant === 'A' ? 30 : 60;
  
  return (
    <div className="bg-novo-secondary/10 border-2 border-novo-secondary rounded-xl p-6">
      <h3 className="thunder-font text-novo-white text-2xl text-center mb-2">
        Garantía de {days} días
      </h3>
      <p className="text-novo-grey text-center">
        Si no encontrás valor, te devolvemos el 100% sin preguntas
      </p>
    </div>
  );
}
```

---

### **EJEMPLO 5: Tipo de urgencia (Countdown vs Escasez)**

**Archivo:** `/components/FinalCTASection.tsx`

```tsx
import { useABTest } from '../hooks/useABTest';
import { Countdown } from './Countdown';

export function UrgencyElement() {
  const { variant } = useABTest({ testName: 'urgency_type_oct2025' });
  
  if (variant === 'A') {
    // Urgencia basada en TIEMPO
    return (
      <div className="bg-novo-primary/20 border border-novo-primary rounded-xl p-6 text-center">
        <p className="text-novo-white mb-4">
          ⏰ Esta oferta termina en:
        </p>
        <Countdown />
      </div>
    );
  } else {
    // Urgencia basada en ESCASEZ
    return (
      <div className="bg-novo-primary/20 border border-novo-primary rounded-xl p-6 text-center">
        <p className="text-novo-white text-xl mb-2">
          🔥 Solo quedan <span className="text-novo-secondary font-bold">7 cupos</span> disponibles
        </p>
        <p className="text-novo-grey text-sm">
          No te quedes afuera de este lanzamiento
        </p>
      </div>
    );
  }
}
```

---

### **EJEMPLO 6: Color del botón principal**

```tsx
import { useABTest } from '../hooks/useABTest';
import { Button } from './ui/button';

export function CTAButton() {
  const { variant } = useABTest({ testName: 'cta_color_oct2025' });
  
  const colorClass = variant === 'A'
    ? 'bg-novo-primary hover:bg-novo-primary/90' // ROJO (original)
    : 'bg-novo-secondary text-black hover:bg-novo-secondary/90'; // VERDE LIMA
  
  return (
    <Button className={`w-full sm:w-auto px-8 py-6 ${colorClass}`}>
      QUIERO VALIDAR MI IDEA AHORA
    </Button>
  );
}
```

---

## 📊 Ver los resultados

### **Abrir el Dashboard:**

Presiona: **`Ctrl + Shift + A`** (Windows/Linux) o **`Cmd + Shift + A`** (Mac)

El dashboard te mostrará:
- ✅ **Usuarios por variante** (A vs B)
- ✅ **Conversiones** (cuántos hicieron clic en CTA)
- ✅ **Tasa de conversión** (% de conversión)
- ✅ **Variante ganadora** (cuál funciona mejor)

### **¿Cuándo decidir?**

- **Mínimo:** 100 usuarios por variante
- **Ideal:** 200+ usuarios por variante
- **Tiempo:** Al menos 1 semana de tráfico
- **Diferencia significativa:** +10% o más

---

## 🧪 Testing Manual

Para testear manualmente las variantes:

- **Ver Variante A:** `https://tu-landing.com?variant=A`
- **Ver Variante B:** `https://tu-landing.com?variant=B`

Esto fuerza la variante específica, útil para:
- Mostrar a tu equipo
- Revisar diseño
- Tomar screenshots

---

## ✅ Conversiones automáticas

Las conversiones **ya se trackean automáticamente** cuando:
- Un usuario hace clic en cualquier CTA
- Se abre el modal de Go High Level
- Se completa el formulario

No necesitas agregar código extra para tracking.

---

## 🎯 Ejemplos de hipótesis para testear

### **Headlines:**
- **A:** "¿Ganas de emprender y miedo a quemar ahorros?" (basado en MIEDO)
- **B:** "¿Listo para validar tu idea sin riesgos?" (basado en ASPIRACIÓN)

### **CTAs:**
- **A:** "QUIERO ENCONTRAR MI NICHO AHORA" (específico)
- **B:** "EMPEZAR AHORA GRATIS" (simple + gratis)

### **Precio:**
- **A:** Mostrar precio tachado $297 → $97 (ancla)
- **B:** Solo mostrar $97 (directo)

### **Garantía:**
- **A:** 30 días (estándar)
- **B:** 60 días (más confianza)

### **Urgencia:**
- **A:** Countdown de 24 horas (tiempo)
- **B:** "Solo 7 cupos" (escasez)

---

## 🔄 Implementar la variante ganadora

Una vez que tengas datos suficientes y una variante clara ganadora:

1. **Elimina el código del A/B test**
2. **Deja solo el contenido de la variante ganadora**
3. **Empieza un nuevo test con otra hipótesis**

**Ejemplo:**

```tsx
// ANTES (con A/B test)
const { variant } = useABTest({ testName: 'hero_headline' });
return (
  <h1>
    {variant === 'A' ? 'Headline A' : 'Headline B'}
  </h1>
);

// DESPUÉS (ganadora implementada)
return (
  <h1>Headline B</h1> // Esta fue la ganadora
);
```

---

## 💡 Tips importantes

1. **Un test a la vez:** No cambies múltiples cosas simultáneamente
2. **Nombre único:** Cada test debe tener un `testName` único
3. **Tiempo suficiente:** Espera al menos 1 semana antes de decidir
4. **Tráfico real:** Los tests funcionan mejor con tráfico real de WhatsApp
5. **Mobile-first:** Como tu tráfico viene de WhatsApp, testea en mobile

---

## 🚀 Qué testear primero

### **Prioridad ALTA (empezá por acá):**
1. **Headline del Hero** → Mayor impacto visual
2. **CTA principal** → Acción directa
3. **Precio con/sin descuento** → Psicología de compra

### **Prioridad MEDIA (después):**
4. **Garantía 30 vs 60 días** → Reducir fricción
5. **Tipo de urgencia** → Motivadores diferentes
6. **Color del botón** → Visibilidad y acción

### **Prioridad BAJA (opcional):**
7. Social proof (números vs logos)
8. Testimonios (formato)
9. Orden de secciones

---

## 📁 Archivos relevantes

- `/hooks/useABTest.tsx` → Hook principal
- `/components/ABTestDashboard.tsx` → Dashboard de resultados
- `/components/HeroSectionAB.tsx` → Ejemplo completo implementado
- `/examples/ABTestExamples.tsx` → 10 ejemplos copy-paste
- `/AB_TESTING_GUIDE.md` → Documentación completa técnica

---

## 🆘 Troubleshooting

**Problema:** "Veo un flash de contenido"
**Solución:** Asegúrate de usar `if (!isReady) return null;`

**Problema:** "Los datos no se guardan"
**Solución:** Verifica que localStorage funcione (no funciona en modo incógnito de algunos navegadores)

**Problema:** "Quiero resetear los datos"
**Solución:** 
```javascript
localStorage.removeItem('ab_test_assignments');
localStorage.removeItem('ab_test_conversions');
```

---

## 🎓 Próximos pasos

1. **Elegí tu primer test** (recomiendo: headline del hero)
2. **Implementá el código** (copy-paste los ejemplos de arriba)
3. **Esperá tráfico real** (1 semana mínimo)
4. **Revisá resultados** (Ctrl+Shift+A)
5. **Implementá ganadora** y empezá nuevo test

---

¿Dudas? Todos los archivos de documentación están en tu proyecto:
- `AB_TESTING_README.md` → Quick start
- `AB_TESTING_GUIDE.md` → Guía técnica completa
- `IMPLEMENTATION_EXAMPLE.md` → Ejemplo paso a paso
- `AB_TESTING_CHECKLIST.md` → Checklist para implementar
