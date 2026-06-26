# Waira Solutions — Sitio Web Corporativo

Sitio web de presentación para **Waira Solutions**, empresa de tecnología con sede en Popayán, Cauca, Colombia. Construido con Next.js 15, React Three Fiber y Tailwind CSS v4.

---

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19 + TypeScript 5.7 |
| Estilos | Tailwind CSS v4 |
| Componentes | Base UI + shadcn/ui |
| 3D | React Three Fiber + Drei + Three.js |
| Animaciones | Framer Motion |
| Formularios | React Hook Form + Zod |
| Carrusel | Embla Carousel |
| Analytics | Vercel Analytics |
| Gestor de paquetes | pnpm |

---

## Requisitos

- Node.js 18 o superior
- pnpm 9 o superior

```bash
npm install -g pnpm
```

---

## Instalación

```bash
# Clonar el repositorio
git clone <url-del-repo>
cd waira-solutions-website

# Instalar dependencias
pnpm install

# Iniciar servidor de desarrollo
pnpm dev
```

El sitio queda disponible en `http://localhost:3000`.

---

## Scripts

```bash
pnpm dev      # Desarrollo con Turbopack (HMR)
pnpm build    # Build de producción
pnpm start    # Servidor de producción
pnpm lint     # Linter ESLint
```

---

## Estructura del proyecto

```
waira-solutions-website/
├── app/
│   ├── actions/          # Server actions (envío de formularios)
│   ├── globals.css       # Variables CSS y estilos globales
│   ├── layout.tsx        # Layout raíz (metadata, fuentes, providers)
│   ├── page.tsx          # Página principal
│   ├── opengraph-image.tsx  # OG image dinámica (Edge runtime)
│   └── sitemap.ts        # Sitemap automático
│
├── components/
│   ├── animations/       # Reveal, Counter y utilidades de animación
│   ├── forms/            # Formulario de contacto con validación
│   ├── layout/           # Navbar, Footer
│   ├── providers/        # ThemeProvider, LanguageProvider (ES/EN)
│   ├── sections/         # Secciones de la página (Hero, About, Services…)
│   ├── seo/              # JsonLd, metadatos estructurados
│   ├── three/            # Escena 3D del Hero (React Three Fiber)
│   └── ui/               # Componentes base (Button, Card, Logo…)
│
├── content/
│   └── dictionary.ts     # Contenido bilingüe ES / EN
│
├── lib/
│   ├── i18n/             # Configuración de idiomas
│   └── utils.ts          # Helpers (cn, etc.)
│
└── public/
    ├── waira 3d logo.png   # Logo 3D del jaguar (escena hero)
    └── waira-logo-fb.jpg   # Logo plano (navbar, footer, badges)
```

---

## Secciones del sitio

| Sección | ID | Descripción |
|---|---|---|
| Hero | `#inicio` | Escena 3D + propuesta de valor |
| Servicios | `#servicios` | Desarrollo, IA, Automatización, Cloud, UX/UI, Data |
| Soluciones | `#soluciones` | Casos de uso por industria |
| Proceso | `#proceso` | Metodología de trabajo |
| Casos | `#casos` | Proyectos destacados |
| Nosotros | `#nosotros` | Misión, visión y valores |
| Clientes | — | Logos y testimonios |
| FAQ | `#faq` | Preguntas frecuentes |
| Contacto | `#contacto` | Formulario de contacto |

---

## Internacionalización

El sitio soporta **español** e **inglés** mediante un sistema de diccionarios en `content/dictionary.ts`. El idioma se gestiona desde el `LanguageProvider` y se alterna con el botón en la barra de navegación, sin recarga de página.

---

## Escena 3D

La escena del hero (`components/three/hero-scene.tsx`) muestra el logo del jaguar de Waira Solutions flotando en 3D:

- Renderizado con **React Three Fiber** sobre un `<Canvas>` con fondo transparente
- El logo PNG se carga y recorta vía Canvas API (elimina el texto inferior)
- El fondo blanco se elimina en la GPU con un **shader GLSL** de color-keying (`onBeforeCompile`)
- Animación de levitación con `<Float>` de Drei
- Oscilación suave en el eje Y con `useFrame`
- Partículas cian con `<Sparkles>`

---

## Despliegue

El proyecto está optimizado para **Vercel**:

```bash
# Build y despliegue desde Vercel CLI
vercel deploy
```

O simplemente conectar el repositorio en [vercel.com](https://vercel.com) y el deploy es automático en cada push a `main`.

---

## Contacto

**Waira Solutions**  
Popayán · Cauca · Colombia  
[facebook.com/WairaSolutions](https://www.facebook.com/WairaSolutions)  
[instagram.com/wairasolutions](https://www.instagram.com/wairasolutions)
