# PROMPT DE ARRANQUE — Pegar en Claude Code

---

## Contexto

Vamos a construir la landing page comercial de Livio (liviogistics.com). Es un proyecto Next.js nuevo desde cero. Antes de tocar cualquier diseño necesito que configures todo el entorno correctamente.

## Paso 1 — Crear el proyecto

Inicializa un proyecto Next.js 15 con App Router, TypeScript, Tailwind CSS y ESLint. Sin src/ directory (todo en la raíz). Sin import alias raro — usa `@/` estándar.

## Paso 2 — Instalar herramientas

Necesito que tengas disponibles estas herramientas para el proyecto:

### Playwright (para screenshots y testing visual)
Instala Playwright CLI. Lo vas a usar para:
- Hacer screenshots de la página actual en https://www.liviogistics.com/ (referencia)
- Testear tu trabajo en el browser durante el desarrollo
- Verificar responsive en distintos viewports

### Magic UI
Configura el MCP de Magic UI. Lo vas a usar para explorar componentes de animación, efectos de scroll, text animations, backgrounds, y cualquier componente que sume al diseño. No es obligatorio usar todo — es tu caja de herramientas creativa.

## Paso 3 — Estructura base del proyecto

Crea la estructura de carpetas:
```
app/
  layout.tsx        # Layout raíz con fonts, metadata base
  page.tsx          # Landing page principal
  globals.css       # Estilos globales + CSS variables
components/
  sections/         # Cada sección de la landing como componente
  ui/               # Componentes reutilizables (botones, badges, etc.)
  mockups/          # Mockups de UI del producto (panel, app chofer, etc.)
public/
  images/           # Fotos del equipo y assets estáticos
```

## Paso 4 — Copiar assets existentes

Las fotos del equipo fundador de la página actual están en:
- `/public/images/FuentealbaIA.jpeg`
- `/public/images/EscalanteIA.png`
- `/public/images/estebanIA.png`
- `/public/images/ignacioIA.jpeg`

Descárgalas de https://www.liviogistics.com/ y ponlas en `/public/images/`. Si no puedes descargarlas, déjalas como placeholder y avísame.

## Paso 5 — Configuración de fuentes y metadata

En `layout.tsx`:
- Carga las fuentes que elijas de Google Fonts con `next/font/google` y `display: 'swap'`
- Metadata base: title "Livio — La operación logística de tu pyme, en orden", description orientada a SEO con keywords: gestión logística, pymes, Chile, distribuidoras, última milla
- Open Graph básico
- Favicon (usa un placeholder simple por ahora)
- Lang: `es-CL`

## Paso 6 — Verificar que todo funciona

Levanta el servidor de desarrollo y verifica con Playwright que la página carga correctamente. Screenshot de la página vacía como baseline.

## Paso 7 — Leer CLAUDE.md

Lee el archivo `CLAUDE.md` en la raíz del proyecto. Tiene TODO el contexto del negocio, las reglas de contenido, la dirección de diseño y los documentos de referencia. Es tu biblia para este proyecto.

## Paso 8 — Arrancar con la propuesta

Una vez que todo está configurado y funcionando, ejecuta el command `/project:propose`. Ese command te guía para hacer la propuesta creativa completa antes de escribir código de la landing.

---

**No empieces a diseñar ni a escribir componentes de la landing hasta que todo lo anterior esté funcionando y hayas leído CLAUDE.md completo.**
