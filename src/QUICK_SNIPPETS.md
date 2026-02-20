# ⚡ Quick Snippets - Copy & Paste

Snippets listos para copiar y pegar en tus componentes.

---

## 🎯 Test de Headlines

```tsx
import { useABTest } from '../hooks/useABTest';

function MiComponente() {
  const { variant, isReady } = useABTest({ testName: 'nombre_del_test' });
  
  if (!isReady) return null; // Evita flash
  
  return (
    <h1>
      {variant === 'A' 
        ? 'Texto de la Variante A'
        : 'Texto de la Variante B'
      }
    </h1>
  );
}
```

---

## 🔘 Test de Botones (Copy)

```tsx
import { useABTest } from '../hooks/useABTest';
import { Button } from './ui/button';

function MiCTA() {
  const { variant } = useABTest({ testName: 'cta_copy' });
  
  return (
    <Button>
      {variant === 'A'
        ? 'TEXTO BOTÓN A'
        : 'TEXTO BOTÓN B'
      }
    </Button>
  );
}
```

---

## 🎨 Test de Colores

```tsx
import { useABTest } from '../hooks/useABTest';
import { Button } from './ui/button';

function MiBoton() {
  const { variant } = useABTest({ testName: 'button_color' });
  
  const colorClass = variant === 'A'
    ? 'bg-novo-primary hover:bg-novo-primary/90'
    : 'bg-novo-secondary text-black hover:bg-novo-secondary/90';
  
  return (
    <Button className={colorClass}>
      EMPEZAR AHORA
    </Button>
  );
}
```

---

## 💰 Test de Precio (Con/Sin Descuento)

```tsx
import { useABTest } from '../hooks/useABTest';

function PrecioDisplay() {
  const { variant } = useABTest({ testName: 'price_display' });
  
  if (variant === 'A') {
    // Mostrar descuento
    return (
      <div className="text-center">
        <div className="flex items-center justify-center gap-2">
          <span className="text-novo-grey line-through text-xl">USD $297</span>
          <span className="text-novo-primary text-3xl">USD $97</span>
        </div>
        <p className="text-novo-secondary text-sm mt-2">
          ¡Ahorrás $200 hoy!
        </p>
      </div>
    );
  } else {
    // Solo precio
    return (
      <div className="text-center">
        <div className="text-novo-primary text-3xl">USD $97</div>
        <p className="text-novo-grey text-sm mt-2">
          Inversión única
        </p>
      </div>
    );
  }
}
```

---

## ⏰ Test de Urgencia (Timer vs Escasez)

```tsx
import { useABTest } from '../hooks/useABTest';

function Urgencia() {
  const { variant } = useABTest({ testName: 'urgency_type' });
  
  if (variant === 'A') {
    // Urgencia por tiempo
    return (
      <div className="bg-novo-primary/20 border border-novo-primary rounded-lg p-4 text-center">
        <p className="text-novo-white">⏰ Esta oferta termina en:</p>
        <div className="text-novo-secondary text-2xl mt-2">23:45:12</div>
      </div>
    );
  } else {
    // Urgencia por escasez
    return (
      <div className="bg-novo-primary/20 border border-novo-primary rounded-lg p-4 text-center">
        <p className="text-novo-white">🔥 Solo quedan 7 cupos disponibles</p>
        <p className="text-novo-grey text-sm mt-1">No te quedes afuera</p>
      </div>
    );
  }
}
```

---

## 🛡️ Test de Garantía (30 vs 60 días)

```tsx
import { useABTest } from '../hooks/useABTest';

function Garantia() {
  const { variant } = useABTest({ testName: 'guarantee_duration' });
  
  const dias = variant === 'A' ? 30 : 60;
  
  return (
    <div className="bg-novo-secondary/10 border-2 border-novo-secondary rounded-xl p-6">
      <h3 className="text-novo-white text-center mb-2">
        Garantía de {dias} días
      </h3>
      <p className="text-novo-grey text-sm text-center">
        Si no encontrás valor, te devolvemos el 100% sin preguntas
      </p>
    </div>
  );
}
```

---

## 📊 Test de Social Proof (Números vs Logos)

```tsx
import { useABTest } from '../hooks/useABTest';

function SocialProof() {
  const { variant } = useABTest({ testName: 'social_proof_type' });
  
  if (variant === 'A') {
    // Números
    return (
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-novo-secondary text-2xl">800+</div>
          <div className="text-novo-grey text-xs">Emprendedores</div>
        </div>
        <div>
          <div className="text-novo-secondary text-2xl">4.9/5</div>
          <div className="text-novo-grey text-xs">Valoración</div>
        </div>
        <div>
          <div className="text-novo-secondary text-2xl">15k+</div>
          <div className="text-novo-grey text-xs">Comunidad</div>
        </div>
      </div>
    );
  } else {
    // Logos
    return (
      <div className="flex items-center justify-center gap-6 flex-wrap">
        <div className="text-novo-grey text-sm">Visto en:</div>
        <div className="opacity-60 text-novo-white text-xs">LA NACIÓN</div>
        <div className="opacity-60 text-novo-white text-xs">iPROFESIONAL</div>
      </div>
    );
  }
}
```

---

## 💬 Test de Testimonios (Formato)

```tsx
import { useABTest } from '../hooks/useABTest';

function Testimonio() {
  const { variant } = useABTest({ testName: 'testimonial_format' });
  
  if (variant === 'A') {
    // Formato clásico
    return (
      <div className="bg-novo-background-2 rounded-xl p-6 border border-novo-grey/10">
        <p className="text-novo-white italic mb-4">
          "Pasé de la idea al primer cliente en 10 días. Increíble."
        </p>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-novo-grey/20 rounded-full" />
          <div>
            <p className="text-novo-white text-sm">María González</p>
            <p className="text-novo-grey text-xs">Buenos Aires, Argentina</p>
          </div>
        </div>
      </div>
    );
  } else {
    // Formato tweet
    return (
      <div className="bg-novo-background-2 rounded-xl p-6 border border-novo-grey/10 border-l-4 border-l-novo-secondary">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-10 h-10 bg-novo-grey/20 rounded-full" />
          <div>
            <p className="text-novo-white text-sm">@mariagonzalez</p>
            <p className="text-novo-grey text-xs">hace 2 días</p>
          </div>
        </div>
        <p className="text-novo-white">
          Pasé de la idea al primer cliente en 10 días. Increíble. 🚀
        </p>
      </div>
    );
  }
}
```

---

## 🎁 Test de Value Prop (Features vs Beneficios)

```tsx
import { useABTest } from '../hooks/useABTest';

function ValueProposition() {
  const { variant } = useABTest({ testName: 'value_prop_type' });
  
  if (variant === 'A') {
    // Features
    return (
      <div className="space-y-3">
        <h3 className="text-novo-white">Qué incluye:</h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-novo-grey">
            <span className="text-novo-secondary mt-1">✓</span>
            7 módulos en video
          </li>
          <li className="flex items-start gap-2 text-novo-grey">
            <span className="text-novo-secondary mt-1">✓</span>
            Asistentes de IA especializados
          </li>
          <li className="flex items-start gap-2 text-novo-grey">
            <span className="text-novo-secondary mt-1">✓</span>
            Templates y frameworks
          </li>
        </ul>
      </div>
    );
  } else {
    // Beneficios
    return (
      <div className="space-y-3">
        <h3 className="text-novo-white">Qué lograrás:</h3>
        <ul className="space-y-2">
          <li className="flex items-start gap-2 text-novo-grey">
            <span className="text-novo-secondary mt-1">✓</span>
            Validar tu idea sin gastar un peso
          </li>
          <li className="flex items-start gap-2 text-novo-grey">
            <span className="text-novo-secondary mt-1">✓</span>
            Encontrar a tu cliente ideal rápido
          </li>
          <li className="flex items-start gap-2 text-novo-grey">
            <span className="text-novo-secondary mt-1">✓</span>
            Lanzar con confianza en 7 días
          </li>
        </ul>
      </div>
    );
  }
}
```

---

## 🎯 Track Manual de Conversiones

Si necesitás trackear conversiones manualmente (además del tracking automático):

```tsx
import { trackABTestConversion } from '../hooks/useABTest';

function handleClick() {
  // Track la conversión
  trackABTestConversion('nombre_del_test', 'tipo_de_conversion');
  
  // Continuar con tu lógica...
  openModal();
}
```

---

## 🔍 Forzar una Variante (para Testing)

En la URL:
```
https://tudominio.com/?variant=A
https://tudominio.com/?variant=B
```

---

## 📊 Ver Dashboard

**Keyboard Shortcut:**
- Windows/Linux: `Ctrl + Shift + A`
- Mac: `Cmd + Shift + A`

**O hacer clic en el botón flotante verde** (solo visible en desarrollo)

---

## 🧹 Limpiar Datos de Tests

Ejecutar en la consola del navegador:

```javascript
// Limpiar todo
localStorage.removeItem('ab_test_assignments');
localStorage.removeItem('ab_test_conversions');

// O limpiar un test específico
localStorage.removeItem('ab_test_nombre_del_test');
```

---

## 💾 Exportar Datos

Ejecutar en la consola del navegador:

```javascript
// Ver todas las asignaciones
console.table(JSON.parse(localStorage.getItem('ab_test_assignments')));

// Ver todas las conversiones
console.table(JSON.parse(localStorage.getItem('ab_test_conversions')));

// Exportar como CSV (copiar el resultado)
const assignments = JSON.parse(localStorage.getItem('ab_test_assignments'));
console.log(assignments.map(a => `${a.testName},${a.variant},${a.timestamp}`).join('\n'));
```

---

## 🎓 Test Completo de Ejemplo

```tsx
import React from 'react';
import { useABTest } from '../hooks/useABTest';
import { Button } from './ui/button';

export function HeroSectionAB() {
  // Definir múltiples tests
  const { variant: headlineVariant } = useABTest({ testName: 'hero_headline' });
  const { variant: ctaVariant } = useABTest({ testName: 'hero_cta' });
  const { variant: colorVariant } = useABTest({ testName: 'cta_color' });
  
  const handleClick = () => {
    // Tu lógica de CTA...
    console.log('CTA clicked');
  };
  
  // Color dinámico basado en test
  const buttonColor = colorVariant === 'A'
    ? 'bg-novo-primary hover:bg-novo-primary/90'
    : 'bg-novo-secondary text-black hover:bg-novo-secondary/90';
  
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl text-center space-y-8">
        {/* Headline con A/B test */}
        <h1 className="thunder-font text-4xl md:text-6xl text-novo-white">
          {headlineVariant === 'A'
            ? 'Encontrá tu idea ganadora en 7 días'
            : 'Validá tu idea con IA en 1 semana'
          }
        </h1>
        
        {/* CTA con A/B test de copy y color */}
        <Button 
          onClick={handleClick}
          className={`px-8 py-6 ${buttonColor}`}
        >
          {ctaVariant === 'A'
            ? 'QUIERO ENCONTRAR MI NICHO AHORA'
            : 'EMPEZAR MI VALIDACIÓN GRATIS'
          }
        </Button>
      </div>
    </section>
  );
}
```

---

## 🚀 Workflow Rápido

1. **Copiar snippet** de arriba
2. **Pegar** en tu componente
3. **Cambiar** los textos de Variante A y B
4. **Cambiar** el nombre del test (`testName: 'tu_nombre_aqui'`)
5. **Guardar** y dejar correr 1 semana
6. **Presionar** `Ctrl+Shift+A` para ver resultados
7. **Implementar** el ganador

---

¿Necesitás más ejemplos? Revisá `/examples/ABTestExamples.tsx` 🎯
