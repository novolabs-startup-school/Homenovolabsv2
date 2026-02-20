# 🚀 Guía de Migración a v0 (Next.js) - Novolabs Startup School

## 📋 Índice
1. [Resumen del Proyecto](#resumen-del-proyecto)
2. [Estructura de Archivos](#estructura-de-archivos)
3. [Migración de Routing](#migración-de-routing)
4. [Configuración de Tailwind CSS v4](#configuración-de-tailwind-css-v4)
5. [Assets e Imágenes](#assets-e-imágenes)
6. [Dependencias del Proyecto](#dependencias-del-proyecto)
7. [Componentes Principales](#componentes-principales)
8. [Páginas del Sitio](#páginas-del-sitio)
9. [SEO y Metadata](#seo-y-metadata)
10. [Checklist de Migración](#checklist-de-migración)

---

## 🎯 Resumen del Proyecto

**Novolabs Startup School** es una landing page premium completa para un programa high-ticket ($2500-3750 USD) de validación de startups.

### Características Clave:
- **Dark Theme** con colores de marca específicos
- **Colores**: `#ff3b30` (rojo) y `#c6ff3e` (verde)
- **Tipografías**: 
  - GEIST para títulos
  - SATOSHI para textos
- **Responsive**: 90% tráfico móvil - UI mobile premium
- **Stack Actual**: React + Tailwind CSS v4 + Hash Routing
- **Stack Objetivo**: Next.js 15+ con App Router

### Páginas:
1. **Landing Principal** (`/`) - 10 secciones con Sistema de Validación Paga
2. **Prensa** (`/prensa`) - Cobertura de medios
3. **Podcast** (`/podcast`) - NovoTalks con 33 episodios
4. **Club de Fundadores** (`/club`) - Comunidad exclusiva
5. **Sobre Nosotros** (`/sobre-nosotros`) - Historia de los fundadores

---

## 📁 Estructura de Archivos para Next.js App Router

```
novolabs-nextjs/
├── app/
│   ├── layout.tsx              # Root layout con metadata global
│   ├── page.tsx                # Landing principal (/)
│   ├── prensa/
│   │   └── page.tsx            # Página de prensa (/prensa)
│   ├── podcast/
│   │   └── page.tsx            # Página de podcast (/podcast)
│   ├── club/
│   │   └── page.tsx            # Club de fundadores (/club)
│   ├── sobre-nosotros/
│   │   └── page.tsx            # Sobre nosotros (/sobre-nosotros)
│   └── globals.css             # Estilos globales con Tailwind v4
├── components/
│   ├── layout/
│   │   ├── Header.tsx          # Navbar sticky reutilizable
│   │   └── Footer.tsx          # Footer reutilizable
│   ├── sections/               # Secciones de la landing
│   │   ├── HeroSection.tsx
│   │   ├── IdentificationSection.tsx
│   │   ├── ParadigmShiftSection.tsx
│   │   ├── ValidationSystemSection.tsx
│   │   ├── ModulesSection.tsx
│   │   ├── StorySection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── FreeTrainingSection.tsx
│   │   ├── ProgramSection.tsx
│   │   ├── SocialProofReviewsSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── ClosingSection.tsx
│   ├── ui/                     # Componentes UI reutilizables
│   │   ├── Button.tsx
│   │   ├── BulletCard.tsx
│   │   ├── MentorCard.tsx
│   │   ├── PlanCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── VideoCard.tsx
│   │   ├── FAQItem.tsx
│   │   ├── TimelineCard.tsx
│   │   ├── SectionHeader.tsx
│   │   └── TrustpilotTestimonialCard.tsx
│   └── shared/
│       ├── ImageWithFallback.tsx
│       └── WhatsAppBanner.tsx
├── public/
│   └── images/                 # Todas las imágenes aquí
│       ├── logos/
│       ├── founders/
│       ├── podcast/
│       └── assets/
├── lib/
│   └── utils.ts                # Utilidades
├── types/
│   └── index.ts                # TypeScript types
├── tailwind.config.ts          # Configuración de Tailwind
├── next.config.js              # Configuración de Next.js
└── package.json
```

---

## 🔄 Migración de Routing

### De Hash Routing a Next.js App Router

**Antes (React con Hash Routing):**
```typescript
// App.tsx
const [currentPage, setCurrentPage] = useState('home');

useEffect(() => {
  const handleHashChange = () => {
    const hash = window.location.hash;
    if (hash === '#/prensa') setCurrentPage('prensa');
    else if (hash === '#/podcast') setCurrentPage('podcast');
    // ...
  };
}, []);

if (currentPage === 'prensa') return <Prensa />;
```

**Después (Next.js App Router):**
```
app/
├── page.tsx              → /
├── prensa/page.tsx       → /prensa
├── podcast/page.tsx      → /podcast
├── club/page.tsx         → /club
└── sobre-nosotros/page.tsx → /sobre-nosotros
```

### Navegación entre páginas

**Cambiar:**
```jsx
// De esto:
<a href="#/prensa">Prensa</a>
window.location.hash = '#/podcast';

// A esto:
import Link from 'next/link';
<Link href="/prensa">Prensa</Link>

// O con router:
import { useRouter } from 'next/navigation';
const router = useRouter();
router.push('/podcast');
```

---

## 🎨 Configuración de Tailwind CSS v4

### `app/globals.css`

```css
@import "tailwindcss";

@import url('https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap');
@import url('https://api.fontshare.com/v2/css?f[]=geist@400,500,600,700&display=swap');

@theme {
  --color-bg-main: #000000;
  --color-bg-secondary: #0b0b0b;
  --color-bg-card: #101010;
  --color-bg-card-soft: #121212;
  --color-border-subtle: #1f1f1f;

  --color-text-main: #ffffff;
  --color-text-muted: #b4b4b4;

  --color-novored: #ff3b30;
  --color-novored-hover: #ff584d;
  --color-novogreen: #c6ff3e;

  --radius-lg: 18px;
  --radius-md: 12px;
  --radius-full: 999px;

  --shadow-soft: 0 18px 40px rgba(0, 0, 0, 0.7);
  --shadow-subtle: 0 10px 25px rgba(0, 0, 0, 0.5);
  --shadow-glow-red: 0 0 40px rgba(255, 59, 48, 0.3);
  --shadow-glow-green: 0 0 40px rgba(198, 255, 62, 0.2);
  --shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.9);

  --max-width: 1120px;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: radial-gradient(circle at top, #111111 0, #000000 45%, #000000 100%);
  color: var(--color-text-main);
  font-family: 'Satoshi', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

p, span, div, a, li, label, input, textarea, button {
  font-family: 'Satoshi', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

img {
  max-width: 100%;
  display: block;
}
```

### `tailwind.config.ts`

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
```

---

## 🖼️ Assets e Imágenes

### Migración de `figma:asset` a `/public/images`

**Antes (React con figma:asset):**
```typescript
import imgNovolabsLogo from 'figma:asset/52020c0a501af2e202886d2601d951fdf3071574.png';
<img src={imgNovolabsLogo} alt="Logo" />
```

**Después (Next.js con Image):**
```typescript
import Image from 'next/image';

<Image 
  src="/images/logos/novolabs-logo.png" 
  alt="Novolabs Startup School Logo"
  width={120}
  height={32}
  priority
/>
```

### Organización de Imágenes en `/public/images`

```
public/images/
├── logos/
│   └── novolabs-logo.png
├── founders/
│   ├── tomas-bercun.png
│   ├── damian-stanfoni.png
│   ├── firma-tomas-volonte.png
│   └── firma-damian-sanchez.png
├── podcast/
│   ├── novotalk-01.png
│   ├── novotalk-02.png
│   └── ... (hasta 33)
├── club/
│   ├── networking-1.png
│   ├── networking-2.png
│   ├── masterclass.png
│   └── ...
├── testimonials/
│   ├── diego-akerman.png
│   ├── magdalena-laplacette.png
│   └── nahuel-turano.png
└── assets/
    └── ... (otros assets)
```

### Componente ImageWithFallback para Next.js

```typescript
'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
}

export function ImageWithFallback({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  return (
    <Image
      src={error ? '/images/placeholder.png' : src}
      alt={alt}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      fill={fill}
      className={className}
      priority={priority}
      onError={() => setError(true)}
    />
  );
}
```

---

## 📦 Dependencias del Proyecto

### `package.json`

```json
{
  "name": "novolabs-startup-school",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^15.1.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "lucide-react": "^0.469.0"
  },
  "devDependencies": {
    "@types/node": "^22",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "typescript": "^5",
    "tailwindcss": "^4.0.0",
    "postcss": "^8",
    "autoprefixer": "^10.4.20"
  }
}
```

---

## 🧩 Componentes Principales

### Header/Navbar Reutilizable

```typescript
// components/layout/Header.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface HeaderProps {
  variant?: 'light' | 'dark';
  showApplyButton?: boolean;
}

export function Header({ variant = 'dark', showApplyButton = true }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-black/90 border-b border-white/[0.02]">
      <div className="max-w-[var(--max-width)] mx-auto px-5 py-3.5 flex items-center justify-between">
        <Link 
          href="/" 
          className="cursor-pointer hover:opacity-80 transition-opacity"
          aria-label="Novolabs - Inicio"
        >
          <Image 
            src="/images/logos/novolabs-logo.png" 
            alt="Novolabs Startup School Logo" 
            width={120}
            height={32}
            className="h-7 md:h-8 w-auto"
          />
        </Link>
        
        <nav className="flex items-center gap-3" aria-label="Navegación principal">
          {showApplyButton && (
            <button 
              className="hidden sm:block px-5 py-2.5 rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors text-sm font-bold"
              onClick={() => window.open('https://info.novolabs.xyz/widget/form/kuNds4kU7sArnpVpkRI7', '_blank')}
              aria-label="Aplicar al Programa"
            >
              Aplicar al Programa
            </button>
          )}
          <a 
            href="https://www.curso-sistema-de-validacion-paga.novolabs.xyz/registro"
            className="px-5 py-2.5 rounded-full bg-[var(--color-novored)] text-white hover:bg-[#ff4d42] transition-colors text-sm font-bold"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Acceder al Entrenamiento Gratuito"
          >
            Entrenamiento Gratuito
          </a>
        </nav>
      </div>
    </header>
  );
}
```

### Button Component

```typescript
// components/ui/Button.tsx
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'primary-light' | 'secondary-light';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function Button({ 
  children, 
  variant = 'primary', 
  href, 
  onClick,
  className = '' 
}: ButtonProps) {
  const baseStyles = 'inline-block px-8 py-4 rounded-full font-bold text-base transition-all duration-300';
  
  const variants = {
    'primary': 'bg-[var(--color-novored)] text-white hover:bg-[var(--color-novored-hover)]',
    'secondary': 'bg-white/10 text-white border border-white/20 hover:bg-white/20',
    'primary-light': 'bg-[var(--color-novored)] text-white hover:bg-[var(--color-novored-hover)]',
    'secondary-light': 'bg-black text-white hover:bg-black/90',
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={styles} target={href.startsWith('http') ? '_blank' : undefined}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
```

---

## 📄 Páginas del Sitio

### Root Layout (`app/layout.tsx`)

```typescript
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Novolabs Startup School - Sistema de Validación Paga™',
  description: 'Lanzá tu startup paso a paso con el Sistema de Validación Paga™. Evita malgastar 12 meses y miles de dólares construyendo algo que nadie quiere comprar.',
  keywords: 'startup school, validación de startups, emprendimiento, sistema validación paga, MVP, lean startup, novolabs, programa startups',
  openGraph: {
    title: 'Novolabs Startup School - Sistema de Validación Paga™',
    description: 'Lanzá tu startup paso a paso con el Sistema de Validación Paga™. Evita malgastar 12 meses y miles de dólares.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Novolabs Startup School - Sistema de Validación Paga™",
              "description": "Programa completo para lanzar tu startup paso a paso con el Sistema de Validación Paga™.",
              "provider": {
                "@type": "Organization",
                "name": "Novolabs",
                "url": "https://novolabs.xyz"
              },
              "offers": {
                "@type": "Offer",
                "category": "Paid",
                "priceCurrency": "USD",
                "price": "2500-3750"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "300",
                "bestRating": "5",
                "worstRating": "1"
              }
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
```

### Landing Principal (`app/page.tsx`)

```typescript
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { IdentificationSection } from '@/components/sections/IdentificationSection';
import { ParadigmShiftSection } from '@/components/sections/ParadigmShiftSection';
import { ValidationSystemSection } from '@/components/sections/ValidationSystemSection';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { StorySection } from '@/components/sections/StorySection';
import { ProgramSection } from '@/components/sections/ProgramSection';
import { ModulesSection } from '@/components/sections/ModulesSection';
import { SocialProofReviewsSection } from '@/components/sections/SocialProofReviewsSection';
import { FreeTrainingSection } from '@/components/sections/FreeTrainingSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ClosingSection } from '@/components/sections/ClosingSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-transparent text-[var(--color-text-main)]">
      <Header />
      
      <main>
        <HeroSection />
        <IdentificationSection />
        <ParadigmShiftSection />
        <ValidationSystemSection />
        <BenefitsSection />
        <StorySection />
        <ProgramSection />
        <ModulesSection />
        <SocialProofReviewsSection />
        <FreeTrainingSection />
        <FAQSection />
        <ClosingSection />
      </main>

      <Footer />
    </div>
  );
}
```

### Página de Prensa (`app/prensa/page.tsx`)

```typescript
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Prensa - Novolabs Startup School',
  description: 'Descubrí la historia de Novolabs contada por Medios de Comunicación, Programas de TV / Radio y Podcasts de Emprendimiento.',
};

export default function PrensaPage() {
  return (
    <div className="min-h-screen bg-transparent text-[var(--color-text-main)]">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-24 md:py-32 bg-[rgb(0,0,0)]">
          <div className="max-w-[var(--max-width)] mx-auto px-5">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-8 tracking-[-0.01em]">
                Qué dicen de nosotros
              </h1>
              <p className="text-[#b4b4b4] text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
                Descubrí la historia de Novolabs contada por Medios de Comunicación, Programas de TV / Radio y Podcasts de Emprendimiento.
              </p>
            </div>

            {/* Media Logos */}
            <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 opacity-60">
              {/* Logos de medios aquí */}
            </div>
          </div>
        </section>

        {/* Resto del contenido... */}
      </main>

      <Footer />
    </div>
  );
}
```

---

## 🔍 SEO y Metadata

### Metadata por Página

**Landing Principal:**
```typescript
export const metadata: Metadata = {
  title: 'Novolabs Startup School - Sistema de Validación Paga™',
  description: 'Lanzá tu startup paso a paso con el Sistema de Validación Paga™...',
};
```

**Prensa:**
```typescript
export const metadata: Metadata = {
  title: 'Prensa - Novolabs Startup School',
  description: 'Descubrí la historia de Novolabs contada por medios...',
};
```

**Podcast:**
```typescript
export const metadata: Metadata = {
  title: 'NovoTalks - Podcast de Novolabs',
  description: 'Aprende directo de los mejores emprendedores de LATAM...',
};
```

**Club:**
```typescript
export const metadata: Metadata = {
  title: 'Club de Fundadores - Novolabs',
  description: 'Comunidad exclusiva de emprendedores e inversores...',
};
```

**Sobre Nosotros:**
```typescript
export const metadata: Metadata = {
  title: 'Sobre Nosotros - Novolabs Startup School',
  description: 'Conoce la historia de Tomás Volonté y Damián Sánchez...',
};
```

---

## ✅ Checklist de Migración

### Fase 1: Configuración Inicial
- [ ] Crear proyecto Next.js 15+ con App Router
- [ ] Configurar Tailwind CSS v4
- [ ] Copiar `globals.css` con variables CSS
- [ ] Configurar `tailwind.config.ts`
- [ ] Instalar dependencias: `lucide-react`

### Fase 2: Estructura de Carpetas
- [ ] Crear estructura `/app` con routing
- [ ] Crear carpetas `/components/layout`, `/components/sections`, `/components/ui`
- [ ] Crear carpeta `/public/images` y subcarpetas

### Fase 3: Assets
- [ ] Descargar todas las imágenes de `figma:asset`
- [ ] Renombrar y organizar en `/public/images`
- [ ] Actualizar todas las referencias de imágenes
- [ ] Implementar `ImageWithFallback` con Next.js Image

### Fase 4: Componentes
- [ ] Migrar componente `Header` a Next.js (usar Link)
- [ ] Migrar componente `Footer`
- [ ] Migrar todos los componentes de `/components/sections`
- [ ] Migrar todos los componentes de `/components/ui`
- [ ] Actualizar imports de imágenes

### Fase 5: Páginas
- [ ] Crear `app/layout.tsx` con metadata global
- [ ] Crear `app/page.tsx` (landing principal)
- [ ] Crear `app/prensa/page.tsx`
- [ ] Crear `app/podcast/page.tsx`
- [ ] Crear `app/club/page.tsx`
- [ ] Crear `app/sobre-nosotros/page.tsx`

### Fase 6: Routing y Navegación
- [ ] Eliminar hash routing
- [ ] Actualizar todos los `<a href="#/...">` a `<Link href="/...">`
- [ ] Actualizar navegación programática a `useRouter` de Next.js
- [ ] Verificar que todos los links internos funcionen

### Fase 7: SEO
- [ ] Configurar metadata en cada página
- [ ] Verificar structured data (JSON-LD)
- [ ] Configurar Open Graph tags
- [ ] Configurar Twitter Cards

### Fase 8: Testing
- [ ] Probar navegación entre páginas
- [ ] Verificar responsive en mobile (90% del tráfico)
- [ ] Verificar carga de imágenes
- [ ] Verificar CTAs (todos apuntan a https://info.novolabs.xyz/widget/form/kuNds4kU7sArnpVpkRI7)
- [ ] Verificar sticky navbar en todas las páginas
- [ ] Probar performance con Lighthouse

### Fase 9: Optimización
- [ ] Optimizar imágenes con Next.js Image
- [ ] Configurar `priority` en imágenes above-the-fold
- [ ] Lazy loading para imágenes below-the-fold
- [ ] Verificar Core Web Vitals

### Fase 10: Deploy
- [ ] Configurar `next.config.js` para producción
- [ ] Build de producción: `npm run build`
- [ ] Verificar no hay errores
- [ ] Deploy a Vercel/plataforma elegida

---

## 🚨 Puntos Críticos de Atención

### 1. Mobile First (90% del tráfico)
- Todas las secciones deben verse PREMIUM en mobile
- Tamaños de fuente específicos para mobile
- Touch targets mínimo 44px
- Scrolling fluido

### 2. Imágenes
- Todas las imágenes `figma:asset` deben descargarse manualmente
- Usar Next.js Image para optimización automática
- Lazy loading por defecto (excepto hero con `priority`)

### 3. CTAs
- TODOS los CTAs "Aplicar al Programa" apuntan a:
  `https://info.novolabs.xyz/widget/form/kuNds4kU7sArnpVpkRI7`
- Entrenamiento Gratuito apunta a:
  `https://www.curso-sistema-de-validacion-paga.novolabs.xyz/registro`

### 4. Navbar
- Sticky en todas las páginas
- Backdrop blur para efecto glassmorphism
- En mobile: ocultar botón "Aplicar al Programa", solo mostrar "Entrenamiento Gratuito"

### 5. Tipografías
- GEIST para todos los headings (h1, h2, h3, etc.)
- SATOSHI para todo el texto (p, span, li, etc.)
- Importar desde Fontshare en `globals.css`

### 6. Colores de Marca
- Rojo Novolabs: `#ff3b30`
- Verde Novolabs: `#c6ff3e`
- Mantener consistencia en TODA la web

---

## 📞 Contacto y Soporte

Si necesitas aclaraciones sobre algún componente o sección específica, estos son los archivos clave del proyecto actual:

- **Componentes de Sección**: `/components/*.tsx`
- **Páginas**: `/App.tsx`, `/Prensa.tsx`, `/Podcast.tsx`, `/Club.tsx`, `/SobreNosotros.tsx`
- **Estilos**: `/styles/globals.css`

---

## 🎓 Recursos Adicionales

- **Next.js 15 Docs**: https://nextjs.org/docs
- **Tailwind CSS v4**: https://tailwindcss.com/docs/v4-beta
- **Next.js Image**: https://nextjs.org/docs/app/api-reference/components/image
- **App Router**: https://nextjs.org/docs/app/building-your-application/routing
- **Metadata API**: https://nextjs.org/docs/app/building-your-application/optimizing/metadata

---

**Última actualización**: Enero 2026
**Versión**: 1.0.0
**Autor**: Equipo Novolabs
