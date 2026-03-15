# Polish final — detalles, animaciones y responsive

Última pasada antes de entregar. Esto es lo que separa una landing decente de una que se siente profesional.

## Animaciones y transiciones

- Revisa que cada sección tenga entrada animada en scroll (fade, slide, reveal — lo que calce con la estética).
- Los mockups de producto deben tener vida: transiciones entre estados, datos que "aparecen", elementos interactivos con hover.
- El hero debe tener la animación más cuidada de toda la página — es lo primero que se ve.
- No animes todo igual. Varía timing, easing y dirección para que no se sienta mecánico.
- Verifica performance: las animaciones no pueden lagear ni en mobile.

## Responsive

Testa con Playwright en estos anchos:
- 390px (iPhone)
- 768px (tablet)
- 1024px (laptop)
- 1440px (desktop)

Revisa especialmente:
- Que los mockups de producto se adapten y sigan viéndose bien en mobile
- Que la tipografía escale correctamente
- Que no haya overflow horizontal
- Que el formulario sea cómodo de llenar en mobile
- Que la navegación funcione en todos los tamaños

## Detalles tipográficos

- Que no haya líneas huérfanas ni títulos solos al fondo de viewport
- Que el interlineado respire
- Que el contraste de color pase AA mínimo (idealmente AAA para texto body)

## Performance

- Las fuentes de Google Fonts deben cargarse con `display: swap`
- No cargar pesos de fuente que no se usen
- Componentes pesados con lazy loading si aplica

## SEO básico

- Cada página necesita: title, meta description, og:title, og:description, og:image
- El title debe incluir: Livio, gestión logística, pymes, Chile
- Meta description que invite a hacer clic desde Google
- Estructura semántica: un solo h1, jerarquía de headings correcta
- Alt text descriptivo si hay imágenes

## Checklist final

Antes de terminar, verifica:
- [ ] Hero engancha al llegar
- [ ] Mockups se ven como software real
- [ ] CTA visible sin scroll
- [ ] Formulario funciona y es claro
- [ ] Mobile se ve profesional
- [ ] Animaciones fluidas sin lag
- [ ] Cero contenido inventado (métricas, testimonios, clientes)
- [ ] Cero features prometidas que no existen
- [ ] Tono correcto en todo el copy
