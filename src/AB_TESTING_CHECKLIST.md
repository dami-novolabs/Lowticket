# ✅ A/B Testing Checklist

Usá esta checklist para asegurarte de implementar correctamente cada test.

---

## 📋 Pre-Test (Antes de implementar)

- [ ] **Definí tu hipótesis clara**
  - Ejemplo: "El headline enfocado en beneficios convertirá 15%+ mejor que el enfocado en problema"
  
- [ ] **Identificaste el elemento a testear**
  - ¿En qué componente está?
  - ¿Cuál es el código actual?
  
- [ ] **Creaste las dos variantes**
  - Variante A: [Descripción]
  - Variante B: [Descripción]
  
- [ ] **Verificaste que es un test de alto impacto**
  - ¿Es headline, CTA, precio o garantía?
  - ¿Vale la pena invertir tiempo en esto?
  
- [ ] **No tenés otro test corriendo en el mismo elemento**
  - Un test a la vez por elemento
  
---

## 🔧 Implementación

- [ ] **Importaste el hook**
  ```tsx
  import { useABTest } from '../hooks/useABTest';
  ```
  
- [ ] **Agregaste el hook en tu componente**
  ```tsx
  const { variant, isReady } = useABTest({ testName: 'nombre_unico' });
  ```
  
- [ ] **El nombre del test es único y descriptivo**
  - ✅ `hero_headline`
  - ✅ `cta_button_copy`
  - ❌ `test1`
  - ❌ `ab`
  
- [ ] **Implementaste el condicional correctamente**
  ```tsx
  {variant === 'A' ? 'Variante A' : 'Variante B'}
  ```
  
- [ ] **Agregaste el check de `isReady`** (para headlines/elementos grandes)
  ```tsx
  if (!isReady) return null;
  ```
  
---

## 🧪 Testing Pre-Launch

- [ ] **Probaste la Variante A**
  - URL: `?variant=A`
  - ¿Se ve bien? ¿Sin errores en consola?
  
- [ ] **Probaste la Variante B**
  - URL: `?variant=B`
  - ¿Se ve bien? ¿Sin errores en consola?
  
- [ ] **Verificaste en mobile**
  - Todo tu tráfico es mobile (WhatsApp)
  - ¿Se ve bien en pantalla chica?
  
- [ ] **Verificaste que persiste la variante**
  - Recargar la página → debe mostrar la misma variante
  
- [ ] **Abriste el dashboard**
  - `Ctrl/Cmd + Shift + A`
  - ¿Aparece tu test?
  
- [ ] **Testeaste una conversión**
  - Hace clic en un CTA
  - Abrí dashboard → ¿se registró la conversión?
  
---

## 🚀 Post-Launch

- [ ] **Documentaste el test**
  - Nombre: _______
  - Fecha inicio: _______
  - Hipótesis: _______
  - Variante A: _______
  - Variante B: _______
  
- [ ] **Compartiste con el equipo**
  - "Estamos corriendo un test de [elemento]"
  - "No tocar hasta [fecha]"
  
- [ ] **Marcaste fecha de revisión**
  - 7 días después: _______
  - Recordatorio en calendario
  
- [ ] **No vas a tocar nada durante 1 semana mínimo**
  - Resist the urge! 💪
  
---

## 📊 Durante el Test

- [ ] **Revisaste el dashboard cada 2-3 días** (opcional)
  - ¿Hay suficientes usuarios?
  - ¿Las conversiones se están registrando?
  
- [ ] **Verificaste que no haya errores técnicos**
  - Chequeá la consola del navegador
  - ¿Los usuarios se quejan de algo?
  
- [ ] **No cambiaste nada del test**
  - Nada de "pequeños ajustes"
  - Dejalo correr
  
---

## 🎯 Análisis de Resultados (Después de 1 semana)

- [ ] **Abriste el dashboard**
  - `Ctrl/Cmd + Shift + A`
  
- [ ] **Verificaste que tenés datos suficientes**
  - ¿Hay 100+ usuarios por variante?
  - ¿Hay al menos 10 conversiones en total?
  
- [ ] **Calculaste la diferencia**
  - Variante A: ____ conversiones / ____ usuarios = ____%
  - Variante B: ____ conversiones / ____ usuarios = ____%
  - Diferencia: ____% (A es ____% mejor/peor que B)
  
- [ ] **La diferencia es significativa**
  - ¿Es +10% o más?
  - ¿Hay suficientes conversiones para confiar?
  
- [ ] **Verificaste significancia estadística** (opcional pero recomendado)
  - Herramienta: https://abtestguide.com/calc/
  - Confidence level: >95% = válido
  
- [ ] **Tomaste screenshots**
  - Para documentación futura
  
---

## ✨ Implementación del Ganador

- [ ] **Identificaste el ganador claro**
  - Variante ____ ganó con ____% de conversión
  
- [ ] **Eliminaste el código de A/B test**
  - Dejá solo la variante ganadora
  - Borrá el código del useABTest
  
- [ ] **Actualizaste documentación**
  - "Test finalizado: [fecha]"
  - "Ganador: Variante ____"
  - "Mejora: ____%"
  
- [ ] **Compartiste los resultados**
  - Con el equipo
  - "Headline B ganó con +25% de conversión"
  
- [ ] **Aplicaste el aprendizaje**
  - ¿Qué aprendiste?
  - ¿Podés aplicarlo a otras secciones?
  
---

## 🔄 Next Test

- [ ] **Decidiste cuál es el próximo test**
  - Basado en impacto potencial
  
- [ ] **Esperaste 2-3 días antes de lanzar el siguiente**
  - Dejá estabilizar el tráfico
  
- [ ] **Volviste al inicio de esta checklist**
  - Cycle repeats! 🔁
  
---

## 🚫 Red Flags - Detener el Test Si...

- [ ] **Hay errores técnicos**
  - El test está roto
  - Usuarios se quejan
  
- [ ] **El tráfico cayó 50%+**
  - Algo raro pasó
  - Esperá a que vuelva a la normalidad
  
- [ ] **Cambió otra cosa en la landing**
  - Alguien hizo otro cambio grande
  - Invalida el test
  
- [ ] **La diferencia es <5% después de 2 semanas**
  - No hay ganador claro
  - Mejor probar otra cosa
  
---

## 📝 Template de Documentación

Usá esto para documentar cada test:

```markdown
# Test #[número]: [Nombre descriptivo]

## Hipótesis
[Variante B] convertirá mejor porque [razón]

## Elementos
- **Sección:** [Hero / CTA / Precio / etc]
- **Componente:** [/components/NombreComponente.tsx]
- **Test Name:** [nombre_del_test]

## Variantes
### Variante A (Control)
[Descripción o screenshot]

### Variante B (Challenger)
[Descripción o screenshot]

## Timeline
- **Inicio:** [fecha]
- **Fin planeado:** [fecha + 7 días]
- **Fin real:** [fecha real]

## Resultados
- **Usuarios totales:** [número]
  - Variante A: [número]
  - Variante B: [número]
  
- **Conversiones totales:** [número]
  - Variante A: [número] ([%])
  - Variante B: [número] ([%])
  
- **Ganador:** Variante [A/B]
- **Mejora:** +[%]
- **Confianza:** [%] (si usaste calculadora)

## Aprendizajes
- [Lo que aprendiste]
- [Aplicable a qué otras secciones]

## Estado
- [ ] Planificado
- [ ] En curso
- [ ] Finalizado
- [ ] Implementado

## Screenshots
[Agregar screenshots del dashboard]
```

---

## 🎓 Tests Recomendados (en orden)

### Semana 1: Hero Pre-headline
- [ ] Test planeado
- [ ] Test implementado
- [ ] Test corriendo
- [ ] Resultados analizados
- [ ] Ganador implementado

### Semana 2: CTA Button Copy
- [ ] Test planeado
- [ ] Test implementado
- [ ] Test corriendo
- [ ] Resultados analizados
- [ ] Ganador implementado

### Semana 3: Precio Display
- [ ] Test planeado
- [ ] Test implementado
- [ ] Test corriendo
- [ ] Resultados analizados
- [ ] Ganador implementado

### Semana 4: Garantía Duration
- [ ] Test planeado
- [ ] Test implementado
- [ ] Test corriendo
- [ ] Resultados analizados
- [ ] Ganador implementado

---

## 💡 Pro Tips

- [ ] **Usa nombres de tests consistentes**
  - Formato: `seccion_elemento` (ej: `hero_headline`)
  
- [ ] **Testea solo una cosa a la vez**
  - No cambies copy Y color Y posición
  - Una variable = resultados claros
  
- [ ] **Dale suficiente tiempo**
  - 1 semana mínimo
  - 2 semanas si el tráfico es bajo
  
- [ ] **No te cases con una variante**
  - Dejá que los datos decidan
  - A veces la "peor" gana
  
- [ ] **Documentá todo**
  - Tu yo del futuro te lo agradecerá
  - Crea un banco de conocimiento
  
---

## ✅ Test Completo - Summary

Un test está completo cuando:

✅ Corrió al menos 1 semana  
✅ Tuvo 100+ usuarios por variante  
✅ Tuvo 10+ conversiones totales  
✅ La diferencia es >10%  
✅ Documentaste los resultados  
✅ Implementaste el ganador  
✅ Compartiste los aprendizajes  

---

**Último recordatorio:** La optimización de conversión es un maratón, no un sprint. Mejoras consistentes del 10-20% se acumulan en lifts del 50-100%+ a lo largo de 3-6 meses. 

**¡Éxito! 🚀**
