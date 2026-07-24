# Waira Solutions — Sitio Web Corporativo

Sitio web de presentación para **Waira Solutions**, empresa de tecnología con sede en Popayán, Cauca, Colombia. Construido con Next.js 16 y Tailwind CSS v4.

---

## Stack tecnológico

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19 + TypeScript 5.7 |
| Estilos | Tailwind CSS v4 |
| Componentes | Base UI + shadcn/ui |
| Iconografía | Phosphor Icons |
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
    └── waira-logo-fb.jpg   # Logo (navbar, footer, hero, badges)
```

---

## Secciones del sitio

| Sección | ID | Descripción |
|---|---|---|
| Hero | `#inicio` | Propuesta de valor |
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
