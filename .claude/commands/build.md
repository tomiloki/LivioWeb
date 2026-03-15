# Construir sección: $ARGUMENTS

Vas a implementar la sección indicada de la landing page de Livio.

## Antes de escribir código

1. Lee `CLAUDE.md` si no lo has hecho en esta sesión.
2. Lee `/mnt/skills/public/frontend-design/SKILL.md` — sigue sus principios.
3. Si ya hiciste una propuesta de diseño antes (con `/project:propose`), mantén coherencia con esa dirección. Si no existe propuesta previa, define tu dirección creativa antes de codear.
4. Revisa Magic UI MCP para componentes que puedan sumar a esta sección específica. No fuerces componentes — úsalos donde encajen naturalmente.

## Cómo construir

- Escribe componentes React + TypeScript + Tailwind.
- Los mockups de UI del producto (panel de pedidos, app del chofer, cierre del día, etc.) se construyen como componentes JSX/Tailwind — NUNCA como imágenes.
- Las animaciones tienen propósito: revelar contenido en scroll, transiciones entre estados, hover que invite a explorar. No decorar por decorar.
- Cada sección debe tener identidad visual propia — fondo, espaciado y densidad que la diferencien de la anterior y la siguiente.
- Mobile-first. Tiene que funcionar perfecto en celular — el dueño de pyme lo va a ver desde el teléfono.

## Después de construir

- Usa Playwright para screenshot de la sección en desktop y mobile.
- Mira el screenshot con ojo crítico: ¿se ve como una landing de producto seria o como template genérico? Si es lo segundo, itera.
- Verifica que el copy respete las reglas de `CLAUDE.md` — especialmente que no prometa cosas que no existen y que el tono sea correcto.

## Libertad creativa

Tienes libertad total sobre:
- Layout y composición espacial
- Animaciones y micro-interacciones
- Cómo mostrar la información (no tiene que ser la forma obvia)
- Efectos visuales, texturas, gradientes, overlays
- Cómo construir los mockups de producto internamente

No tienes libertad sobre:
- Las reglas de contenido de `CLAUDE.md` (sección NUNCA/SIEMPRE)
- El tono de comunicación
- Inventar datos falsos
