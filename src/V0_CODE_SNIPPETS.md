# 💻 Code Snippets para v0 - Copy & Paste Ready

Snippets de código listos para copiar y pegar en v0 para Next.js.

---

## 📋 Índice
1. [Configuración Inicial](#configuración-inicial)
2. [Layout y Estructura](#layout-y-estructura)
3. [Componentes UI Core](#componentes-ui-core)
4. [Páginas Completas](#páginas-completas)
5. [Utilidades y Helpers](#utilidades-y-helpers)

---

## ⚙️ Configuración Inicial

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

### `next.config.js`

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
    ],
  },
};

module.exports = nextConfig;
```

---

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

---

## 🏗️ Layout y Estructura

### `app/layout.tsx`

```typescript
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Novolabs Startup School - Sistema de Validación Paga™',
  description: 'Lanzá tu startup paso a paso con el Sistema de Validación Paga™. Evita malgastar 12 meses y miles de dólares construyendo algo que nadie quiere comprar. Programa de $2500-3750 USD.',
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
              "description": "Programa completo para lanzar tu startup paso a paso con el Sistema de Validación Paga™. Aprende a validar tu idea antes de construir.",
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
              "educationalLevel": "Professional",
              "audience": {
                "@type": "EducationalAudience",
                "educationalRole": "Entrepreneur"
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

---

### `components/layout/Header.tsx`

```typescript
'use client';

import Link from 'next/link';
import Image from 'next/image';

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
            priority
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

---

### `components/layout/Footer.tsx`

```typescript
import Link from 'next/link';
import { Instagram, Linkedin, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[var(--color-bg-card)] border-t border-white/[0.02] py-12 md:py-16">
      <div className="max-w-[var(--max-width)] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Columna 1: Logo y descripción */}
          <div className="md:col-span-2">
            <h3 className="text-white text-xl font-bold mb-4">Novolabs</h3>
            <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">
              La primera Startup School de LATAM. Ayudamos a emprendedores a lanzar startups exitosas con el Sistema de Validación Paga™.
            </p>
          </div>

          {/* Columna 2: Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/prensa" className="text-[var(--color-text-muted)] hover:text-white transition-colors text-sm">
                  Prensa
                </Link>
              </li>
              <li>
                <Link href="/podcast" className="text-[var(--color-text-muted)] hover:text-white transition-colors text-sm">
                  Podcast
                </Link>
              </li>
              <li>
                <Link href="/club" className="text-[var(--color-text-muted)] hover:text-white transition-colors text-sm">
                  Club de Fundadores
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-[var(--color-text-muted)] hover:text-white transition-colors text-sm">
                  Sobre Nosotros
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Redes Sociales */}
          <div>
            <h4 className="text-white font-bold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/novolabs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--color-text-muted)] hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/novolabs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--color-text-muted)] hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com/@novolabs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[var(--color-text-muted)] hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/[0.05] pt-8">
          <p className="text-[var(--color-text-muted)] text-sm text-center">
            © 2026 Novolabs. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

---

## 🎨 Componentes UI Core

### `components/ui/Button.tsx`

```typescript
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
  const baseStyles = 'inline-block px-8 py-4 rounded-full font-bold text-base transition-all duration-300 text-center';
  
  const variants = {
    'primary': 'bg-[var(--color-novored)] text-white hover:bg-[var(--color-novored-hover)]',
    'secondary': 'bg-white/10 text-white border border-white/20 hover:bg-white/20',
    'primary-light': 'bg-[var(--color-novored)] text-white hover:bg-[var(--color-novored-hover)]',
    'secondary-light': 'bg-black text-white hover:bg-black/90',
  };

  const styles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http');
    return (
      <Link 
        href={href} 
        className={styles} 
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
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

### `components/ui/SectionHeader.tsx`

```typescript
interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ 
  tag, 
  title, 
  subtitle, 
  centered = true 
}: SectionHeaderProps) {
  const containerClass = centered ? 'text-center' : '';
  
  return (
    <div className={`mb-12 md:mb-16 ${containerClass}`}>
      {tag && (
        <p className="text-[var(--color-novogreen)] text-xs md:text-sm uppercase tracking-wider mb-4 font-bold">
          {tag}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 tracking-[-0.01em]">
        {title}
      </h2>
      {subtitle && (
        <p className="text-[var(--color-text-muted)] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
```

---

### `components/ui/BulletCard.tsx`

```typescript
interface BulletCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function BulletCard({ icon, title, description }: BulletCardProps) {
  return (
    <div className="p-6 md:p-8 rounded-2xl bg-[var(--color-bg-card)] border border-white/[0.05] hover:border-white/[0.1] hover:bg-[var(--color-bg-card-soft)] transition-all duration-300">
      <div className="mb-4">{icon}</div>
      <h3 className="text-white text-xl font-bold mb-3">{title}</h3>
      <p className="text-[var(--color-text-muted)] leading-relaxed">{description}</p>
    </div>
  );
}
```

---

### `components/ui/TestimonialCard.tsx`

```typescript
'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company?: string;
  text: string;
  avatar: string;
  rating?: number;
}

export function TestimonialCard({ 
  name, 
  role, 
  company, 
  text, 
  avatar, 
  rating = 5 
}: TestimonialCardProps) {
  return (
    <div className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 hover:shadow-[0_12px_32px_rgba(255,255,255,0.05)] transition-all duration-300">
      {/* Header con avatar y nombre */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-white/10 border-2 border-white/10 flex-shrink-0">
          <Image
            src={avatar}
            alt={name}
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <p className="text-white font-semibold">{name}</p>
          <p className="text-[var(--color-text-muted)] text-sm">
            {role}{company && ` · ${company}`}
          </p>
        </div>
      </div>

      {/* Rating stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-[#00b67a] text-[#00b67a]" />
        ))}
      </div>

      {/* Testimonial text */}
      <p className="text-white/80 leading-relaxed italic">
        "{text}"
      </p>
    </div>
  );
}
```

---

### `components/ui/FAQItem.tsx`

```typescript
'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export function FAQItem({ question, answer, defaultOpen = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-white/[0.05] last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:opacity-80 transition-opacity"
      >
        <h3 className="text-white text-lg md:text-xl font-bold pr-8">
          {question}
        </h3>
        <ChevronDown 
          className={`w-6 h-6 text-white flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-[var(--color-text-muted)] leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}
```

---

## 📄 Páginas Completas

### `app/page.tsx` (Landing Principal)

```typescript
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { BulletCard } from '@/components/ui/BulletCard';
import { CheckCircle, TrendingUp, Users, Zap } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-transparent text-[var(--color-text-main)]">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="max-w-[var(--max-width)] mx-auto px-5 text-center">
            <p className="text-[var(--color-novogreen)] text-sm md:text-base uppercase tracking-wider mb-6 font-bold">
              SISTEMA DE VALIDACIÓN PAGA™
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight mb-8 tracking-[-0.01em]">
              Lanzá tu startup <br />
              <span className="text-[var(--color-novored)]">paso a paso</span>
            </h1>
            <p className="text-[var(--color-text-muted)] text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed">
              Evita malgastar 12 meses y miles de dólares construyendo algo que nadie quiere comprar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="primary" href="https://info.novolabs.xyz/widget/form/kuNds4kU7sArnpVpkRI7">
                Aplicar al Programa
              </Button>
              <Button variant="secondary" href="https://www.curso-sistema-de-validacion-paga.novolabs.xyz/registro">
                Entrenamiento Gratuito
              </Button>
            </div>
          </div>
        </section>

        {/* Identification Section */}
        <section className="py-20 md:py-32 bg-[var(--color-bg-secondary)]">
          <div className="max-w-[var(--max-width)] mx-auto px-5">
            <SectionHeader
              title="¿Te identificas con esto?"
              subtitle="Estos son los problemas más comunes que enfrentan los emprendedores al inicio"
              centered={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <BulletCard
                icon={<CheckCircle className="w-8 h-8 text-[var(--color-novored)]" />}
                title="Miedo a equivocarte"
                description="No sabes si tu idea funcionará y temes invertir tiempo y dinero en algo que podría fallar."
              />
              <BulletCard
                icon={<TrendingUp className="w-8 h-8 text-[var(--color-novored)]" />}
                title="Parálisis por análisis"
                description="Tienes demasiadas ideas y no sabes por dónde empezar ni cómo validarlas."
              />
              <BulletCard
                icon={<Users className="w-8 h-8 text-[var(--color-novored)]" />}
                title="Construyes sin validar"
                description="Gastas meses construyendo un producto que nadie quiere o necesita."
              />
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 md:py-32">
          <div className="max-w-[var(--max-width)] mx-auto px-5">
            <SectionHeader
              tag="BENEFICIOS"
              title="¿Qué lograrás con el programa?"
              centered={true}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <BulletCard
                icon={<Zap className="w-8 h-8 text-[var(--color-novogreen)]" />}
                title="Valida antes de construir"
                description="Aprende a validar tu idea con clientes reales antes de invertir en desarrollo."
              />
              <BulletCard
                icon={<TrendingUp className="w-8 h-8 text-[var(--color-novogreen)]" />}
                title="Ahorra tiempo y dinero"
                description="Evita malgastar 12 meses y miles de dólares en algo que nadie quiere."
              />
              <BulletCard
                icon={<Users className="w-8 h-8 text-[var(--color-novogreen)]" />}
                title="Comunidad exclusiva"
                description="Accede a una red de emprendedores e inversores de toda LATAM."
              />
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-32 md:py-40 bg-[var(--color-bg-secondary)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-novored)] opacity-[0.05] blur-[120px] rounded-full" />
          
          <div className="max-w-[var(--max-width)] mx-auto px-5 relative z-10">
            <div className="max-w-[56rem] mx-auto text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-8 tracking-[-0.01em]">
                No fracasa quien lo intenta.
                <br />
                <span className="text-[var(--color-novored)]">Solo quien construye sin validar.</span>
              </h2>
              
              <p className="text-[var(--color-text-muted)] text-xl md:text-2xl mb-14">
                Emprendé rodeado de mentores expertos con años de experiencia lanzando empresas. Dejá de improvisar.
              </p>

              <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
                <Button variant="primary" href="https://info.novolabs.xyz/widget/form/kuNds4kU7sArnpVpkRI7">
                  Aplicar al Programa
                </Button>
                <Button variant="secondary" href="https://www.curso-sistema-de-validacion-paga.novolabs.xyz/registro">
                  Entrenamiento Gratuito
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
```

---

### `app/prensa/page.tsx`

```typescript
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

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
              <Image 
                src="https://cdn.prod.website-files.com/65c3bc2125baf9326a2181b1/67b5fe046140a88bbe4334aa_Group%20(18).svg"
                alt="La Nación"
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
              <Image 
                src="https://cdn.prod.website-files.com/65c3bc2125baf9326a2181b1/67b5fe1ae4af6e734e864db3_Vector%20(28).svg"
                alt="Forbes"
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
              <Image 
                src="https://cdn.prod.website-files.com/65c3bc2125baf9326a2181b1/67b5fe239e9cbc67e8d0aa6c_layer1%20(1).svg"
                alt="Clarín"
                width={120}
                height={40}
                className="h-8 md:h-10 w-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </section>

        {/* Featured Article - Forbes */}
        <section className="py-24 md:py-32 bg-[rgb(0,0,0)]">
          <div className="max-w-[var(--max-width)] mx-auto px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image 
                  src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/67aea76c5651f3c752401e05_Vector%20(27).svg"
                  alt="Forbes"
                  width={120}
                  height={40}
                  className="h-10 mb-8"
                />
                <h2 className="text-2xl md:text-3xl lg:text-4xl leading-tight mb-8">
                  Cómo dos jóvenes argentinos transformaron su experiencia en la primera escuela de startups
                </h2>
                <a 
                  href="https://www.forbesargentina.com/negocios/como-dos-jovenes-argentinos-transformaron-su-experiencia-primera-escuela-startups-secreto-evitar-fracaso-emprendedor-n57606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[var(--color-novored)] hover:underline font-semibold"
                >
                  Ver nota <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div>
                <Image 
                  src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/67aea7d0db6c79bb4a1f3f5d_Frame%201686557502.png"
                  alt="Forbes Article"
                  width={600}
                  height={400}
                  className="w-full rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
```

---

## 🛠️ Utilidades y Helpers

### `lib/utils.ts`

```typescript
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, currency: string = 'USD'): string {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
  }).format(price);
}

export function formatDate(date: string | Date): string {
  return new Intl.DateTimeFormat('es-AR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}
```

---

### `types/index.ts`

```typescript
export interface Episode {
  id: number;
  number: number;
  title: string;
  guest: string;
  guestRole: string;
  duration: string;
  category: string;
  image: string;
  url: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  text: string;
  avatar: string;
  rating?: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface PressArticle {
  media: string;
  title: string;
  url: string;
  logo?: string;
  image?: string;
  excerpt?: string;
}
```

---

### `lib/constants.ts`

```typescript
export const URLS = {
  applyProgram: 'https://info.novolabs.xyz/widget/form/kuNds4kU7sArnpVpkRI7',
  freeTraining: 'https://www.curso-sistema-de-validacion-paga.novolabs.xyz/registro',
  whatsapp: 'https://api.whatsapp.com/send/?phone=5491163544698&text&type=phone_number&app_absent=0',
};

export const PROGRAM_STATS = {
  studentsHelped: 300,
  rating: 4.8,
  reviewCount: 300,
  successRate: '85%',
  avgSavings: 12000,
  avgTimeSaved: 12,
  price: {
    min: 2500,
    max: 3750,
    currency: 'USD'
  }
};

export const SOCIAL_LINKS = {
  instagram: 'https://instagram.com/novolabs',
  linkedin: 'https://linkedin.com/company/novolabs',
  youtube: 'https://youtube.com/@novolabs',
  twitter: 'https://twitter.com/novolabs',
};
```

---

**Última actualización**: Enero 2026
**Versión**: 1.0.0

---

## 📝 Notas de Uso

1. **Copiar y pegar**: Todos estos snippets están listos para copiar directamente a v0.
2. **Orden de implementación**: Seguir el orden de la guía de migración.
3. **Imágenes**: Reemplazar todas las URLs de imágenes con las correspondientes de `/public/images`.
4. **Testing**: Probar cada componente individualmente antes de integrar.
5. **Mobile First**: Verificar SIEMPRE en mobile antes que en desktop.

---

