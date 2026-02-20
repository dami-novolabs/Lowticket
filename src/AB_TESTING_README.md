# 🧪 A/B Testing System - Quick Start

## TL;DR

Sistema completo de A/B testing implementado y listo para usar en tu landing de Novolabs.

## 🎯 Ver Resultados

**Presiona:** `Ctrl + Shift + A` (Windows/Linux) o `Cmd + Shift + A` (Mac)

Se abrirá un dashboard con:
- Usuarios por variante
- Conversiones
- Tasas de conversión
- Variante ganadora

## ⚡ Quick Test

Para testear el sistema ahora mismo:

1. Abrí la landing en dos pestañas diferentes (o modo incógnito)
2. Una verá Variante A, otra Variante B
3. Hacé clic en un CTA en cada una
4. Presiona `Ctrl + Shift + A` para ver resultados

## 📁 Archivos Creados

```
/hooks/useABTest.tsx           → Hook principal para A/B testing
/components/ABTestDashboard.tsx → Dashboard de resultados
/components/HeroSectionAB.tsx  → Ejemplo completo de Hero con A/B
/examples/ABTestExamples.tsx   → 10 ejemplos de diferentes tests
/AB_TESTING_GUIDE.md          → Guía completa (LEER ESTO)
```

## 🚀 Cómo Implementar un Test

### 1. Importar el hook

```tsx
import { useABTest } from '../hooks/useABTest';
```

### 2. Usar en tu componente

```tsx
function MiComponente() {
  const { variant, isReady } = useABTest({ testName: 'mi_test' });
  
  if (!isReady) return null;
  
  return (
    <h1>
      {variant === 'A' ? 'Versión A' : 'Versión B'}
    </h1>
  );
}
```

### 3. Las conversiones ya se trackean automáticamente

Cuando un usuario hace clic en cualquier CTA y se abre el modal, se registra la conversión.

## 🎨 Tests Recomendados para Empezar

1. **Headlines del Hero** (mayor impacto)
2. **Copy de los CTAs** (fácil de implementar)
3. **Mostrar/ocultar descuento en precio**

## 🔍 Testing Manual

Para ver una variante específica:
- `?variant=A` → Fuerza Variante A
- `?variant=B` → Fuerza Variante B

## 📊 Cuándo tomar acción

- **Mínimo:** 100 usuarios por variante
- **Ideal:** 200+ usuarios por variante
- **Tiempo:** Al menos 1 semana de datos
- **Diferencia:** +10% o más es significativo

## 💾 Datos

Los datos se guardan en `localStorage`:
- No se envía nada a servidores (100% client-side)
- Persiste entre sesiones
- Fácil de integrar con GA4/Mixpanel después

## 🔥 Features

✅ Asignación automática 50/50  
✅ Persistencia en localStorage  
✅ Dashboard visual de resultados  
✅ Override manual por URL  
✅ Track automático de conversiones  
✅ Sin dependencias externas  
✅ Mobile-first (perfecto para WhatsApp)  
✅ Múltiples tests simultáneos  
✅ 100% TypeScript  

## 📚 Documentación Completa

Lee `/AB_TESTING_GUIDE.md` para:
- Ejemplos de código completos
- Cómo interpretar resultados
- Significancia estadística
- Integración con Google Analytics
- Troubleshooting
- Best practices

## 🎓 Ejemplos Listos

En `/examples/ABTestExamples.tsx` encontrás 10 ejemplos copy-paste de:
- Headlines
- CTAs
- Precios
- Garantías
- Urgencia
- Social proof
- Testimonios
- Value propositions
- Colores
- Y más...

## 🛠️ Reset de Datos

Si querés empezar de cero:

```javascript
localStorage.removeItem('ab_test_assignments');
localStorage.removeItem('ab_test_conversions');
```

---

**Próximo paso:** Lee `AB_TESTING_GUIDE.md` y empezá con un test simple de headlines.
