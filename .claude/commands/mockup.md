# Construir mockup de producto: $ARGUMENTS

Vas a construir un mockup de UI del producto Livio como componente JSX/Tailwind. Estos mockups son el asset visual más importante de la landing — deben verse como software real funcionando, no como wireframes ni screenshots.

## Contexto del producto

Lee `CLAUDE.md` para el detalle de los 4 módulos. Los mockups principales son:

- **Panel de pedidos** — Lista de pedidos del día con estados (nuevo, asignado, en ruta, entregado). Datos: nombre cliente, dirección, producto, cantidad, hora, canal de entrada (WhatsApp/llamada/manual), estado.
- **Planificación/asignación** — Vista donde el operador asigna pedidos a choferes por zona/vehículo. Tabla o kanban con conductores, zonas, número de paradas.
- **Seguimiento en tiempo real** — Mapa o vista de lista con choferes activos, progreso de entregas, estados en vivo.
- **App del chofer** — Vista mobile de la lista de entregas del día, detalle de una entrega con botones de acción (foto, firma, pago, incidente).
- **Evidencia de entrega** — Card con foto, firma digital, GPS, timestamp, método de pago. Todo vinculado a un pedido.
- **Cierre del día** — Resumen: entregas completadas, pendientes, incidencias, tasa de completado, pendientes para mañana.

## Cómo construirlos

- Componentes React + TypeScript + Tailwind.
- Datos hardcodeados pero realistas — nombres chilenos, direcciones reales de Santiago, productos que vende una distribuidora de agua (bidones, cajas, etc.).
- Los estados deben verse diferenciados con color/badge (nuevo = azul, en ruta = amarillo, entregado = verde, incidencia = rojo).
- Diseñar como si fuera el producto real — bordes, sombras, spacing, tipografía deben verse profesionales.
- Si el mockup tiene estados o pasos, considerar animación entre ellos (transición de "asignado" a "en ruta", datos que aparecen, etc.).
- Los mockups mobile (app del chofer) deben renderizarse dentro de un frame de teléfono para que se lea como app.

## Datos de ejemplo realistas

Usa estos como base (puedes variar):
- Clientes: "Distribuidora Central", "Comercial Norte", "Minimarket Los Olivos", "Bodega Sur", "Restaurant El Roble"
- Direcciones: "Los Aromos 234, La Florida", "Av. Irarrázaval 1820", "Gran Avenida 4501, San Miguel"
- Productos: "Bidón 20L", "Pack 6x1.5L", "Bidón 12L retornable"
- Choferes: "J. Pérez", "M. López", "C. Rojas"
- Vehículos: "ABC-123", "XYZ-789", "DEF-456"

## NO hacer
- No usar imágenes placeholder (gray boxes con "imagen aquí")
- No usar datos genéricos en inglés (John Doe, 123 Main St)
- No hacer wireframes — esto tiene que verse como UI terminada
- No inventar métricas de rendimiento del sistema
