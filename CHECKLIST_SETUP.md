# CHECKLIST — Setup del proyecto Livio Landing

## Archivos que van en la RAÍZ del proyecto (antes de correr el prompt)

```
tu-proyecto/
├── CLAUDE.md                          ← El contexto completo del negocio
├── .claude/
│   └── commands/
│       ├── propose.md                 ← Propuesta creativa (paso 1)
│       ├── build.md                   ← Construir secciones
│       ├── mockup.md                  ← Construir mockups de producto
│       ├── review.md                  ← Revisión y mejoras
│       └── polish.md                  ← Pulido final
└── docs/                              ← (Opcional) Documentos de contexto
    ├── CTX_01_Identidad_Producto.md
    ├── CTX_03_Comercial_Clientes.md
    ├── Que_estamos_construyendo.md
    ├── Quienes_somos.md
    └── README_Leeme_primero.md
```

## Paso a paso

### 1. Crea la carpeta del proyecto
```bash
mkdir livio-landing && cd livio-landing
```

### 2. Copia CLAUDE.md a la raíz
El archivo que te generé. Ponlo en la raíz del proyecto.

### 3. Crea la carpeta de commands
```bash
mkdir -p .claude/commands
```
Copia los 5 archivos de commands ahí dentro.

### 4. (Opcional) Copia los documentos de contexto
Si quieres que Claude Code pueda profundizar en los docs originales, crea una carpeta `docs/` y pon ahí los .docx (o convierte a .md). No es obligatorio — CLAUDE.md ya tiene todo destilado.

### 5. Abre Claude Code en esa carpeta
```bash
claude
```

### 6. Pega el contenido de PROMPT_ARRANQUE.md
Ese es tu primer mensaje. Claude Code va a:
- Crear el proyecto Next.js
- Instalar Playwright y configurar Magic UI MCP
- Crear la estructura de carpetas
- Descargar las fotos del equipo
- Configurar fuentes y metadata
- Verificar que funciona
- Leer CLAUDE.md
- Arrancar con `/project:propose`

### 7. Flujo de trabajo después del setup

```
/project:propose          → Revisa la propuesta, da feedback
/project:build hero       → Construye sección por sección
/project:build problema
/project:build solucion
/project:mockup panel     → Mockups como componentes separados
/project:mockup app chofer
/project:review           → Revisión completa
/project:polish           → Pulido final
```

## Notas

- El prompt de arranque NO le dice cómo diseñar — solo configura el entorno.
- La creatividad empieza en `/project:propose` — ahí Claude propone su visión y tú validas.
- Puedes saltar commands si quieres — son guías, no un pipeline rígido.
- Si Claude pierde contexto en una sesión larga, pedirle que relea CLAUDE.md.
