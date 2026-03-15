# CLAUDE.md — Livio Landing Page

## Proyecto

Landing page comercial de **Livio** (liviogistics.com). Es una página de marketing para captar empresas piloto — NO es el producto. El objetivo es que un dueño de pyme de distribución en Chile entre, se identifique con el problema, entienda qué hace Livio, y llene el formulario para unirse al piloto gratuito.

Stack: Next.js 15 (App Router), React, TypeScript, Tailwind CSS, deploy en Vercel.

## Qué es Livio

Software de gestión logística para pymes chilenas con flota de 1-15 vehículos. Centraliza pedidos (que hoy llegan por WhatsApp, llamadas, Excel), asigna entregas a choferes con app móvil, da seguimiento en tiempo real, registra evidencia digital de cada entrega (foto, firma, GPS), y cierra el día con un reporte completo.

**Estado:** Pre-lanzamiento. MVP completado, en stress testing. Piloto arranca abril 2026. Buscando 10-15 empresas piloto que entren gratis por 2 meses.

**Claim principal:** "Tu negocio funciona aunque no estés mirando."

**Idea fuerza del hero:** "Hiciste crecer tu negocio solo, ahora que no se caiga sin ti."

**Diferenciador real:** Livio convierte lo que hoy está en la cabeza de una persona en un sistema que funciona igual todos los días. No somos software de rutas — somos el sistema operativo que le permite a una pyme logística funcionar sin depender de una persona específica.

## Target

Dueños y operadores de pymes de distribución en Chile: agua embotellada (bidones), gas licuado, mayoristas con reparto recurrente, distribuidores Horeca. Gente que coordina todo con WhatsApp + Excel + memoria. Dolor real: toda la operación depende de una persona y si esa persona falta, todo se cae.

## Tono

- Directo, confiable, sin humo startup. Sobrio pero cercano.
- Hablarle a un dueño de pyme real, no a un enterprise.
- Frases cortas. Una idea por frase.
- Empatía antes que ataque — no decirle al dueño que está mal.
- Hablar de resultados, no de features. Hablar de "tú", no de "las empresas".

## Producto — los 4 módulos del MVP

1. **Recepción de pedidos vía WhatsApp + IA** — El cliente envía WhatsApp en lenguaje informal. La IA lo interpreta y genera un pedido estructurado. El operador solo revisa y confirma.
2. **Panel operacional web** — El operador ve todos los pedidos del día, asigna a choferes, monitorea entregas en tiempo real, cierra el día con resumen completo.
3. **App móvil del chofer** — El chofer ve sus entregas en orden, actualiza estado, sube foto, captura firma, registra pago, reporta incidentes.
4. **Panel admin SaaS** — Panel interno de Livio para gestionar clientes. No visible para el usuario final.

**Flujo del día:** Pedido por WhatsApp → IA estructura → Operador revisa y asigna chofer → Chofer ejecuta con app → Evidencia (foto + firma + GPS) → Cierre del día automático.

## Equipo fundador

| Nombre | Rol público | Bio para la web |
|--------|------------|-----------------|
| Tomás Fuentealba | Co-Founder & CEO | Vio el problema desde adentro trabajando en distribución de agua y paquetería. Construyó Livio para resolverlo. |
| Tomás Escalante | Co-Founder & CTO | Estuvo en terreno desde el primer día. Lidera la visión técnica del producto. |
| Esteban Cortés | Software Architect — Founder Team | Diseñó y construyó la arquitectura completa de Livio. |
| Ignacio Saavedra | Head of Operations — Founder Team | Conoce el rubro logístico desde adentro. Acompaña la implementación con cada cliente. |

Las fotos del equipo están en `/public/images/` (FuentealbaIA.jpeg, EscalanteIA.png, estebanIA.png, ignacioIA.jpeg).

## Oferta del piloto (lo que comunicamos)

- Piloto gratuito: 2 meses sin costo
- Precio especial de lanzamiento a partir del mes 3
- Onboarding incluido desde el día uno
- Acceso directo al equipo
- Cupos limitados — arranca en abril

## Competencia (para sección de diferenciación si la hay)

Los principales son SimpliRoute, Drivin y Optiroute (todos chilenos). Se enfocan en optimización de rutas. Livio cubre el flujo operativo completo: pedidos → asignación → ejecución → evidencia → cierre. Los competidores están diseñados para empresas más grandes con equipos logísticos dedicados. La pyme no tiene eso.

---

## REGLAS DURAS — NO NEGOCIABLES

### NUNCA:
- Inventar métricas, testimonios, clientes, logos o casos de éxito. No tenemos clientes activos.
- Posicionar como "app de rutas" o "optimizador de rutas".
- Usar fotos stock de camiones, ejecutivos, flotas o bodegas. La identidad visual es software, no transporte.
- Prometer funcionalidades que no existen: facturación electrónica/SII, integraciones ERP/SAP/CRM, inventario, atención 100% automatizada por WhatsApp, optimización avanzada de rutas con IA.
- Mencionar precios específicos (ni CLP ni USD).
- Decir "El negocio funciona sin ti" — asusta al dueño. El mensaje es "funciona aunque no estés mirando".
- Usar jerga startup (disrumpir, escalar, growth hacking, unicornio, etc.).
- Decir "primero y único en Chile" — no es defendible.
- Exagerar la IA — el bot recibe pedidos por WhatsApp, pero las excepciones las resuelve el operador humano.
- Sobreingenierar — es una landing, no un dashboard.

### SIEMPRE:
- Los mockups de UI son el asset visual más fuerte. Construirlos como componentes JSX/Tailwind que se vean como software real, no como imágenes.
- Mostrar el flujo completo del día: pedido → asignación → ejecución → evidencia → cierre.
- Transmitir urgencia real sobre los cupos del piloto (limitados, arranca en abril).
- El contraste "sin Livio / con Livio" es poderoso — usarlo.
- Empatía genuina con el dolor del target — esta gente trabaja 12 horas al día.

---

## DISEÑO — DIRECCIÓN GENERAL

### Lo que funciona de la página actual (mantener el espíritu):
- El copy/texto está validado y es bueno — se puede reutilizar y adaptar.
- La sección "Cómo funciona" con 5 pasos y mockups interactivos de UI es el punto más fuerte.
- El formulario de contacto como CTA final funciona.
- Los mockups en JSX/Tailwind (no imágenes) se ven como software real.

### Lo que hay que mejorar:
- La página se siente plana — todo el mismo fondo, sin contraste entre secciones. Necesita profundidad visual, capas, cambios de ritmo.
- La sección del problema no transmite urgencia ni emoción — es solo texto.
- El hero tenía una foto stock de furgonetas que posiciona como "empresa de transporte" en vez de "software". El hero necesita identidad de producto tech.
- Falta un bloque claro de urgencia/escasez para el piloto.
- La sección de diferenciación (no somos rutas, somos operación completa) es solo texto sin soporte visual.

### Principios de diseño:
- Tipografía con personalidad — no genérica (nada de Inter, Roboto, Arial).
- Paleta con intención — colores dominantes con acentos claros, no todo del mismo tono.
- Contraste entre secciones — fondos alternados, cambios de densidad visual, respiración.
- Animaciones con propósito — scroll reveals, transiciones entre pasos, hover states que sumen.
- Los mockups de producto deben ser el centro visual — no decoraciones alrededor de texto.

### Lo que NO hacer en diseño:
- No hacer un SaaS landing genérico con gradient púrpura y cards flotantes.
- No poner hero con ilustración abstracta de "logística".
- No usar iconos genéricos de Lucide/Heroicons como sustituto de diseño real.
- No hacer que todas las secciones se vean igual — necesita ritmo y variación.

---

## HERRAMIENTAS DISPONIBLES

- **Skill `frontend-design`** en `/mnt/skills/public/frontend-design/SKILL.md` — LEER antes de diseñar.
- **Playwright** — Para hacer screenshots de la página actual y testear en browser.
- **Magic UI MCP** — Componentes de animación y efectos. Usar donde sume.

---

## DOCUMENTOS DE CONTEXTO

Si necesitas profundizar en algún aspecto del negocio, los documentos fuente están disponibles. No es necesario leerlos todos — usa los que necesites según la tarea.

| Documento | Para qué sirve |
|-----------|----------------|
| `LIVIO_CTX_01_Identidad_Producto_Mercado.docx` | Identidad de marca, ADN, producto completo, competencia, mercado, roadmap. Es el documento más completo. |
| `LIVIO_CTX_03_Comercial_Clientes_Platanus.docx` | Modelo de precios (SENSIBLE — no publicar cifras), perfiles de clientes piloto, estrategia comercial, manejo de objeciones. |
| `Livio_Que_estamos_construyendo_v3_BORRADOR.docx` | Detalle técnico del MVP: módulos, flujo de uso, criterios de éxito del piloto. |
| `Livio_Quienes_somos_v3.docx` | Historia del equipo, cómo se formó, contexto humano. |
| `README_Léeme_primero.docx` | Visión general del negocio, estado actual, estructura del equipo, glosario. |

---

## ESTRUCTURA DE LA PÁGINA — NARRATIVA GENERAL

La página cuenta una historia en este orden conceptual. No son secciones fijas — puedes fusionarlas, reordenarlas o inventar transiciones. Lo importante es que la narrativa fluya:

1. **Gancho** — El dueño se identifica. Siente que le están hablando a él. Entiende que esto es para su negocio.
2. **Problema** — El dolor se hace tangible. No es una lista de features que faltan — es la realidad de su día a día: el teléfono que no para, el Excel que se pierde, el chofer que no reporta.
3. **Solución** — Qué hace Livio, paso a paso. El flujo del día. Aquí los mockups de UI son protagonistas. Que se vea el software funcionando.
4. **Contraste** — El antes/después. Sin Livio vs Con Livio. Que el cambio sea visceral, no solo informativo.
5. **Qué incluye** — Lo esencial, sin humo. Que quede claro qué hay hoy disponible.
6. **Diferenciación** — Por qué no es "otra app de rutas". Idealmente con soporte visual, no solo texto.
7. **Equipo** — Quiénes somos. Breve, humano, sin inflar.
8. **Urgencia + CTA** — El piloto arranca en abril, cupos limitados, 2 meses gratis. Formulario.
9. **FAQ** — Preguntas frecuentes para resolver objeciones antes de que pregunten.

El CTA "Unirme al piloto" / "Quiero ser empresa piloto" debe estar accesible en todo momento (nav, hero, secciones intermedias, final).
