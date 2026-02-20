# 🚀 PROMPT COMPLETO PARA V0 - NOVOLABS STARTUP SCHOOL

## 🎯 OBJETIVO
Construir una landing page completa y premium para **Novolabs Startup School** en Next.js 15+ con App Router, Tailwind CSS v4, diseño mobile-first (90% tráfico móvil), y un dark theme profesional para un producto high-ticket de $2,500-$3,750 USD dirigido a emprendedores de ~40 años.

---

## 📊 CONTEXTO DEL PROYECTO

### Información del Negocio
- **Nombre**: Novolabs Startup School
- **Producto**: Sistema de Validación Paga™
- **Precio**: $2,500 - $3,750 USD (high-ticket)
- **Target**: Emprendedores de ~40 años en LATAM y España
- **Inversión en Ads**: $10,000 USD semanales
- **Tráfico**: 90% móvil (CRITICAL: diseño mobile-first premium)
- **Propuesta**: Programa de 12 semanas para validar y lanzar startups sin malgastar tiempo/dinero

### Estadísticas Clave
- 300+ emprendedores ayudados
- Rating: 4.8/5 estrellas
- 300 reviews
- 18 países con miembros activos
- 150+ startups activas
- Tasa de éxito: 85%

---

## 🎨 DISEÑO Y BRANDING

### Colores de Marca (USAR EXACTAMENTE ESTOS)
```css
--color-novored: #ff3b30;
--color-novored-hover: #ff584d;
--color-novogreen: #c6ff3e;
```

### Tipografías (IMPORTAR DESDE FONTSHARE)
- **GEIST**: Para TODOS los headings (h1, h2, h3, h4, h5, h6)
- **SATOSHI**: Para TODO el texto (p, span, li, a, button, input, label)

### Paleta Completa
```css
/* Backgrounds */
--color-bg-main: #000000;
--color-bg-secondary: #0b0b0b;
--color-bg-card: #101010;
--color-bg-card-soft: #121212;
--color-border-subtle: #1f1f1f;

/* Text */
--color-text-main: #ffffff;
--color-text-muted: #b4b4b4;

/* Shadows */
--shadow-soft: 0 18px 40px rgba(0, 0, 0, 0.7);
--shadow-subtle: 0 10px 25px rgba(0, 0, 0, 0.5);
--shadow-glow-red: 0 0 40px rgba(255, 59, 48, 0.3);
--shadow-glow-green: 0 0 40px rgba(198, 255, 62, 0.2);
--shadow-xl: 0 25px 50px -12px rgba(0, 0, 0, 0.9);

/* Border Radius */
--radius-lg: 18px;
--radius-md: 12px;
--radius-full: 999px;

/* Max Width */
--max-width: 1120px;
```

### Background del Body
```css
background: radial-gradient(circle at top, #111111 0, #000000 45%, #000000 100%);
```

---

## 📱 ESTRUCTURA DEL SITIO (5 PÁGINAS)

### 1. Landing Principal `/`
- 12 secciones enfocadas en Sistema de Validación Paga™
- Hero → Identificación → Paradigm Shift → Sistema → Beneficios → Historia → Programa → Módulos → Social Proof → Training → FAQ → Closing

### 2. Prensa `/prensa`
- Hero con logos de medios (Forbes, La Nación, Clarín, iProfesional)
- Featured articles destacados
- Grid completo de +17 medios
- CTA para contacto prensa

### 3. Podcast `/podcast` (NovoTalks)
- 33 episodios con filtros por categoría
- Paginación (6 episodios por página)
- Categorías: Emprendimiento, Inversión, Innovación, Crecimiento Personal, Fintech, IA, Ventas
- Cards con imagen de invitado, título, rol

### 4. Club `/club`
- Club de Fundadores (comunidad exclusiva)
- Stats (300+ miembros, 18 países, etc.)
- Eventos de networking (fotos)
- Beneficios (+$5,000 USD en herramientas)
- Testimonials con LinkedIn
- **IMPORTANTE**: Fondo blanco (única página con fondo claro)

### 5. Sobre Nosotros `/sobre-nosotros`
- Mensaje personal de fundadores
- Formato carta/letter
- Fotos y firmas de Tomás Volonté y Damián Sánchez
- Q&A style

---

## 🔗 URLs CRÍTICAS (USAR EXACTAMENTE ESTAS)

```typescript
// CTA Principal - "Aplicar al Programa"
https://info.novolabs.xyz/widget/form/kuNds4kU7sArnpVpkRI7

// CTA Secundario - "Entrenamiento Gratuito"
https://www.curso-sistema-de-validacion-paga.novolabs.xyz/registro

// WhatsApp
https://api.whatsapp.com/send/?phone=5491163544698&text&type=phone_number&app_absent=0
```

---

## 📦 ESTRUCTURA DE ARCHIVOS NEXT.JS

```
novolabs-nextjs/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── prensa/
│   │   └── page.tsx
│   ├── podcast/
│   │   └── page.tsx
│   ├── club/
│   │   └── page.tsx
│   └── sobre-nosotros/
│       └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── IdentificationSection.tsx
│   │   ├── ParadigmShiftSection.tsx
│   │   ├── ValidationSystemSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── StorySection.tsx
│   │   ├── ProgramSection.tsx
│   │   ├── ModulesSection.tsx
│   │   ├── SocialProofReviewsSection.tsx
│   │   ├── FreeTrainingSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── ClosingSection.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── SectionHeader.tsx
│       ├── BulletCard.tsx
│       ├── TestimonialCard.tsx
│       ├── FAQItem.tsx
│       ├── VideoCard.tsx
│       ├── PlanCard.tsx
│       ├── MentorCard.tsx
│       ├── TimelineCard.tsx
│       └── TrustpilotTestimonialCard.tsx
├── public/
│   └── images/
│       ├── logos/
│       ├── founders/
│       ├── podcast/
│       ├── testimonials/
│       └── press/
└── lib/
    ├── constants.ts
    └── utils.ts
```

---

## 🎨 GLOBALS.CSS COMPLETO

```css
@import "tailwindcss";

/* Fonts desde Fontshare */
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

html {
  scroll-behavior: smooth;
}
```

---

## 🏗️ COMPONENTES PRINCIPALES

### 1. Header (Navbar Sticky)

**Archivo**: `components/layout/Header.tsx`

**Especificaciones**:
- Sticky top-0 z-40
- Backdrop blur glassmorphism: `backdrop-blur-md bg-black/90`
- Border bottom sutil: `border-b border-white/[0.02]`
- Max width: `max-w-[var(--max-width)]`
- Padding: `px-5 py-3.5`

**Elementos**:
1. **Logo (izquierda)**:
   - Link a `/` (usar Next.js `<Link>`)
   - Imagen del logo de Novolabs
   - Hover: `hover:opacity-80 transition-opacity`
   - Height: `h-7 md:h-8`

2. **Nav (derecha)**:
   - Gap entre botones: `gap-3`
   
   **Botón "Aplicar al Programa"**:
   - Texto: "Aplicar al Programa"
   - Estilo: Transparente con borde
   - Classes: `hidden sm:block px-5 py-2.5 rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors text-sm font-bold`
   - onClick: Abrir en nueva pestaña → `https://info.novolabs.xyz/widget/form/kuNds4kU7sArnpVpkRI7`
   - **IMPORTANTE**: Oculto en mobile (`hidden sm:block`)
   
   **Botón "Entrenamiento Gratuito"**:
   - Texto: "Entrenamiento Gratuito"
   - Estilo: Rojo Novolabs
   - Classes: `px-5 py-2.5 rounded-full bg-[var(--color-novored)] text-white hover:bg-[#ff4d42] transition-colors text-sm font-bold`
   - href: `https://www.curso-sistema-de-validacion-paga.novolabs.xyz/registro`
   - target="_blank" rel="noopener noreferrer"
   - **IMPORTANTE**: Siempre visible en mobile

**Código Base**:
```tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-black/90 border-b border-white/[0.02]">
      <div className="max-w-[var(--max-width)] mx-auto px-5 py-3.5 flex items-center justify-between">
        <Link href="/" className="cursor-pointer hover:opacity-80 transition-opacity">
          <Image 
            src="/images/logos/novolabs-logo.png" 
            alt="Novolabs Startup School Logo" 
            width={120}
            height={32}
            className="h-7 md:h-8 w-auto"
            priority
          />
        </Link>
        
        <nav className="flex items-center gap-3">
          <button 
            className="hidden sm:block px-5 py-2.5 rounded-full border border-white/10 text-white hover:bg-white/5 transition-colors text-sm font-bold"
            onClick={() => window.open('https://info.novolabs.xyz/widget/form/kuNds4kU7sArnpVpkRI7', '_blank')}
          >
            Aplicar al Programa
          </button>
          <a 
            href="https://www.curso-sistema-de-validacion-paga.novolabs.xyz/registro"
            className="px-5 py-2.5 rounded-full bg-[var(--color-novored)] text-white hover:bg-[#ff4d42] transition-colors text-sm font-bold"
            target="_blank"
            rel="noopener noreferrer"
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

### 2. Footer

**Archivo**: `components/layout/Footer.tsx`

**Especificaciones**:
- Background: `bg-[var(--color-bg-card)]`
- Border top: `border-t border-white/[0.02]`
- Padding: `py-12 md:py-16`

**Estructura**:
Grid de 4 columnas en desktop, 1 en mobile

**Columna 1 (span 2 columnas)**:
- Logo/Nombre: "Novolabs"
- Descripción: "La primera Startup School de LATAM. Ayudamos a emprendedores a lanzar startups exitosas con el Sistema de Validación Paga™."

**Columna 2 - Navegación**:
- Título: "Navegación"
- Links:
  - Prensa → `/prensa`
  - Podcast → `/podcast`
  - Club de Fundadores → `/club`
  - Sobre Nosotros → `/sobre-nosotros`

**Columna 3 - Redes Sociales**:
- Título: "Síguenos"
- Icons: Instagram, LinkedIn, YouTube
- Usar `lucide-react` icons
- Hover: `hover:text-white`

**Copyright**:
- Border top: `border-t border-white/[0.05]`
- Texto: "© 2026 Novolabs. Todos los derechos reservados."
- Centrado

---

### 3. Button Component

**Archivo**: `components/ui/Button.tsx`

**Props**:
```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'primary-light' | 'secondary-light';
  href?: string;
  onClick?: () => void;
  className?: string;
}
```

**Variantes**:

1. **primary** (Rojo Novolabs - fondo oscuro):
   - `bg-[var(--color-novored)] text-white hover:bg-[var(--color-novored-hover)]`

2. **secondary** (Transparente con borde - fondo oscuro):
   - `bg-white/10 text-white border border-white/20 hover:bg-white/20`

3. **primary-light** (Rojo Novolabs - fondo claro):
   - `bg-[var(--color-novored)] text-white hover:bg-[var(--color-novored-hover)]`

4. **secondary-light** (Negro - fondo claro):
   - `bg-black text-white hover:bg-black/90`

**Base Styles**:
- `inline-block px-8 py-4 rounded-full font-bold text-base transition-all duration-300 text-center`

**Comportamiento**:
- Si tiene `href` → usar Next.js `<Link>`
- Si href empieza con "http" → target="_blank" rel="noopener noreferrer"
- Si tiene `onClick` → usar `<button>`

---

### 4. SectionHeader Component

**Archivo**: `components/ui/SectionHeader.tsx`

**Props**:
```typescript
interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}
```

**Estructura**:
1. **Tag** (opcional):
   - Verde Novolabs
   - Uppercase
   - Classes: `text-[var(--color-novogreen)] text-xs md:text-sm uppercase tracking-wider mb-4 font-bold`

2. **Title**:
   - Tipografía Geist
   - Classes: `text-3xl md:text-4xl lg:text-5xl leading-tight mb-6 tracking-[-0.01em]`

3. **Subtitle** (opcional):
   - Color muted
   - Classes: `text-[var(--color-text-muted)] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed`

---

### 5. BulletCard Component

**Archivo**: `components/ui/BulletCard.tsx`

**Props**:
```typescript
interface BulletCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
```

**Especificaciones**:
- Padding: `p-6 md:p-8`
- Border radius: `rounded-2xl`
- Background: `bg-[var(--color-bg-card)]`
- Border: `border border-white/[0.05]`
- Hover: `hover:border-white/[0.1] hover:bg-[var(--color-bg-card-soft)]`
- Transition: `transition-all duration-300`

**Estructura**:
1. Icon (mb-4)
2. Title (text-white text-xl font-bold mb-3)
3. Description (text-[var(--color-text-muted)] leading-relaxed)

---

### 6. TestimonialCard Component

**Archivo**: `components/ui/TestimonialCard.tsx`

**Props**:
```typescript
interface TestimonialCardProps {
  name: string;
  role: string;
  company?: string;
  text: string;
  avatar: string;
  rating?: number;
}
```

**Especificaciones**:
- Card premium con hover effect
- Background: `bg-white/5`
- Border: `border border-white/10`
- Hover: `hover:border-white/20 hover:shadow-[0_12px_32px_rgba(255,255,255,0.05)]`

**Estructura**:
1. **Header** (flex items-center gap-4 mb-6):
   - Avatar circular (w-12 h-12 rounded-full)
   - Name (text-white font-semibold)
   - Role · Company (text-[var(--color-text-muted)] text-sm)

2. **Rating Stars** (mb-4):
   - Usar `lucide-react` Star icon
   - Color Trustpilot: `fill-[#00b67a] text-[#00b67a]`
   - Default: 5 estrellas

3. **Text**:
   - Italic
   - Classes: `text-white/80 leading-relaxed italic`
   - Con comillas: `"{text}"`

---

### 7. FAQItem Component (Accordion)

**Archivo**: `components/ui/FAQItem.tsx`

**Props**:
```typescript
interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}
```

**Especificaciones**:
- State para open/close
- Border bottom: `border-b border-white/[0.05]`
- Button clickeable para toggle

**Estructura**:
1. **Button** (w-full py-6 flex justify-between):
   - Question (text-white text-lg md:text-xl font-bold)
   - ChevronDown icon (rotate-180 cuando está abierto)

2. **Answer** (collapsible):
   - Overflow hidden
   - Transition: `transition-all duration-300`
   - Max-height: 0 cuando cerrado, max-h-96 cuando abierto
   - Padding bottom cuando abierto: `pb-6`

---

### 8. VideoCard Component

**Archivo**: `components/ui/VideoCard.tsx`

**Props**:
```typescript
interface VideoCardProps {
  title: string;
  thumbnail: string;
  duration?: string;
  onClick?: () => void;
  videoUrl?: string;
}
```

**Especificaciones**:
- Thumbnail con overlay oscuro
- Play button centrado
- Hover effect: escala 1.05

**Estructura**:
1. Container (relative rounded-2xl overflow-hidden)
2. Thumbnail image (absolute inset-0)
3. Dark overlay (bg-black/40)
4. Play button icon (centrado, blanco)
5. Duration badge (esquina inferior derecha)

---

## 📄 PÁGINA PRINCIPAL (LANDING) - `app/page.tsx`

### ESTRUCTURA COMPLETA DE 12 SECCIONES

---

### **SECCIÓN 1: Hero**

**Objetivo**: Capturar atención inmediata

**Layout**:
- Padding: `py-20 md:py-32`
- Max width centrado
- Text center

**Contenido**:
```tsx
<section className="py-20 md:py-32">
  <div className="max-w-[var(--max-width)] mx-auto px-5 text-center">
    {/* Tag verde */}
    <p className="text-[var(--color-novogreen)] text-sm md:text-base uppercase tracking-wider mb-6 font-bold">
      SISTEMA DE VALIDACIÓN PAGA™
    </p>
    
    {/* H1 Principal */}
    <h1 className="text-4xl md:text-6xl lg:text-7xl leading-tight mb-8 tracking-[-0.01em]">
      Lanzá tu startup <br />
      <span className="text-[var(--color-novored)]">paso a paso</span>
    </h1>
    
    {/* Subtítulo */}
    <p className="text-[var(--color-text-muted)] text-xl md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed">
      Evita malgastar 12 meses y miles de dólares construyendo algo que nadie quiere comprar.
    </p>
    
    {/* CTAs */}
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
```

---

### **SECCIÓN 2: Identification (Pain Points)**

**Objetivo**: Identificar problemas del usuario

**Layout**:
- Background: `bg-[var(--color-bg-secondary)]`
- Padding: `py-20 md:py-32`

**Contenido**:
```tsx
<SectionHeader
  title="¿Te identificas con esto?"
  subtitle="Estos son los problemas más comunes que enfrentan los emprendedores al inicio"
  centered={true}
/>

{/* Grid de 3 columnas */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
  
  <BulletCard
    icon={<XCircle className="w-8 h-8 text-[var(--color-novored)]" />}
    title="Miedo a equivocarte"
    description="No sabes si tu idea funcionará y temes invertir tiempo y dinero en algo que podría fallar."
  />
  
  <BulletCard
    icon={<AlertCircle className="w-8 h-8 text-[var(--color-novored)]" />}
    title="Parálisis por análisis"
    description="Tienes demasiadas ideas y no sabes por dónde empezar ni cómo validarlas."
  />
  
  <BulletCard
    icon={<TrendingDown className="w-8 h-8 text-[var(--color-novored)]" />}
    title="Construyes sin validar"
    description="Gastas meses construyendo un producto que nadie quiere o necesita."
  />
  
  <BulletCard
    icon={<Clock className="w-8 h-8 text-[var(--color-novored)]" />}
    title="Pérdida de tiempo"
    description="Llevas meses o años 'validando' tu idea sin resultados concretos."
  />
  
  <BulletCard
    icon={<DollarSign className="w-8 h-8 text-[var(--color-novored)]" />}
    title="Dinero malgastado"
    description="Has invertido miles de dólares en desarrollo, marketing o herramientas sin ROI."
  />
  
  <BulletCard
    icon={<Users className="w-8 h-8 text-[var(--color-novored)]" />}
    title="Emprendes solo"
    description="No tienes mentores ni una comunidad que te apoye en el proceso."
  />
  
</div>
```

---

### **SECCIÓN 3: Paradigm Shift**

**Objetivo**: Cambio de mentalidad (Antes vs Después)

**Layout**:
- Padding: `py-20 md:py-32`

**Contenido**:
```tsx
<SectionHeader
  tag="CAMBIA TU ENFOQUE"
  title="El problema no es tu idea. Es cómo la validas."
  centered={true}
/>

{/* Tabla comparativa 2 columnas */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
  
  {/* Columna ANTES (rojo) */}
  <div className="p-8 md:p-10 rounded-2xl bg-[var(--color-bg-card)] border-2 border-[var(--color-novored)]/30">
    <div className="flex items-center gap-3 mb-6">
      <X className="w-8 h-8 text-[var(--color-novored)]" />
      <h3 className="text-2xl font-bold text-[var(--color-novored)]">Forma Tradicional</h3>
    </div>
    
    <ul className="space-y-4">
      <li className="flex gap-3 text-[var(--color-text-muted)]">
        <X className="w-5 h-5 text-[var(--color-novored)] flex-shrink-0 mt-0.5" />
        <span>Construyes primero, preguntas después</span>
      </li>
      <li className="flex gap-3 text-[var(--color-text-muted)]">
        <X className="w-5 h-5 text-[var(--color-novored)] flex-shrink-0 mt-0.5" />
        <span>Inviertes 12+ meses sin validación</span>
      </li>
      <li className="flex gap-3 text-[var(--color-text-muted)]">
        <X className="w-5 h-5 text-[var(--color-novored)] flex-shrink-0 mt-0.5" />
        <span>Gastas $20,000+ USD en desarrollo</span>
      </li>
      <li className="flex gap-3 text-[var(--color-text-muted)]">
        <X className="w-5 h-5 text-[var(--color-novored)] flex-shrink-0 mt-0.5" />
        <span>Lanzas y descubres que nadie lo necesita</span>
      </li>
      <li className="flex gap-3 text-[var(--color-text-muted)]">
        <X className="w-5 h-5 text-[var(--color-novored)] flex-shrink-0 mt-0.5" />
        <span>Te quedas sin recursos para pivotar</span>
      </li>
    </ul>
  </div>
  
  {/* Columna DESPUÉS (verde) */}
  <div className="p-8 md:p-10 rounded-2xl bg-[var(--color-bg-card)] border-2 border-[var(--color-novogreen)]/30">
    <div className="flex items-center gap-3 mb-6">
      <CheckCircle className="w-8 h-8 text-[var(--color-novogreen)]" />
      <h3 className="text-2xl font-bold text-[var(--color-novogreen)]">Con Novolabs</h3>
    </div>
    
    <ul className="space-y-4">
      <li className="flex gap-3 text-white">
        <CheckCircle className="w-5 h-5 text-[var(--color-novogreen)] flex-shrink-0 mt-0.5" />
        <span>Validas antes de construir nada</span>
      </li>
      <li className="flex gap-3 text-white">
        <CheckCircle className="w-5 h-5 text-[var(--color-novogreen)] flex-shrink-0 mt-0.5" />
        <span>Obtienes feedback real en 12 semanas</span>
      </li>
      <li className="flex gap-3 text-white">
        <CheckCircle className="w-5 h-5 text-[var(--color-novogreen)] flex-shrink-0 mt-0.5" />
        <span>Inviertes menos de $5,000 USD total</span>
      </li>
      <li className="flex gap-3 text-white">
        <CheckCircle className="w-5 h-5 text-[var(--color-novogreen)] flex-shrink-0 mt-0.5" />
        <span>Lanzas con clientes reales esperando</span>
      </li>
      <li className="flex gap-3 text-white">
        <CheckCircle className="w-5 h-5 text-[var(--color-novogreen)] flex-shrink-0 mt-0.5" />
        <span>Pivotas rápido si algo no funciona</span>
      </li>
    </ul>
  </div>
  
</div>
```

---

### **SECCIÓN 4: Validation System (CORE)**

**Objetivo**: Presentar el Sistema de Validación Paga™

**Layout**:
- Background: `bg-[var(--color-bg-secondary)]`
- Padding: `py-20 md:py-32`

**Contenido**:
```tsx
<SectionHeader
  tag="SISTEMA DE VALIDACIÓN PAGA™"
  title="Lanzá tu startup en 12 semanas siguiendo un sistema probado"
  subtitle="Paso a paso, con validación constante, para que no malgastes tiempo ni dinero."
  centered={true}
/>

{/* Timeline visual (12 pasos) */}
<div className="max-w-4xl mx-auto space-y-8">
  
  {/* Semana 1-3: Problema */}
  <div className="relative pl-8 border-l-2 border-[var(--color-novogreen)]">
    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[var(--color-novogreen)] flex items-center justify-center text-black text-xs font-bold">
      1
    </div>
    <h3 className="text-xl md:text-2xl font-bold mb-2">Semanas 1-3: Validación del Problema</h3>
    <p className="text-[var(--color-text-muted)] mb-3">
      Identificás y validás el problema real que resolverás. Entrevistas con potenciales clientes.
    </p>
    <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
      <li className="flex gap-2">
        <CheckCircle className="w-4 h-4 text-[var(--color-novogreen)] flex-shrink-0 mt-0.5" />
        <span>Definición de ICP (Ideal Customer Profile)</span>
      </li>
      <li className="flex gap-2">
        <CheckCircle className="w-4 h-4 text-[var(--color-novogreen)] flex-shrink-0 mt-0.5" />
        <span>30+ entrevistas de validación</span>
      </li>
      <li className="flex gap-2">
        <CheckCircle className="w-4 h-4 text-[var(--color-novogreen)] flex-shrink-0 mt-0.5" />
        <span>Problem-Solution Fit validado</span>
      </li>
    </ul>
  </div>
  
  {/* Semana 4-6: Solución */}
  <div className="relative pl-8 border-l-2 border-[var(--color-novogreen)]">
    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[var(--color-novogreen)] flex items-center justify-center text-black text-xs font-bold">
      2
    </div>
    <h3 className="text-xl md:text-2xl font-bold mb-2">Semanas 4-6: Validación de Solución</h3>
    <p className="text-[var(--color-text-muted)] mb-3">
      Creás un MVP mínimo (prototipo, landing, demo) y lo validás con clientes reales.
    </p>
    <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
      <li className="flex gap-2">
        <CheckCircle className="w-4 h-4 text-[var(--color-novogreen)] flex-shrink-0 mt-0.5" />
        <span>Landing page de validación</span>
      </li>
      <li className="flex gap-2">
        <CheckCircle className="w-4 h-4 text-[var(--color-novogreen)] flex-shrink-0 mt-0.5" />
        <span>Prototipo funcional básico</span>
      </li>
      <li className="flex gap-2">
        <CheckCircle className="w-4 h-4 text-[var(--color-novogreen)] flex-shrink-0 mt-0.5" />
        <span>Testing con primeros usuarios</span>
      </li>
    </ul>
  </div>
  
  {/* Semana 7-9: Modelo */}
  <div className="relative pl-8 border-l-2 border-[var(--color-novogreen)]">
    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[var(--color-novogreen)] flex items-center justify-center text-black text-xs font-bold">
      3
    </div>
    <h3 className="text-xl md:text-2xl font-bold mb-2">Semanas 7-9: Validación del Modelo de Negocio</h3>
    <p className="text-[var(--color-text-muted)] mb-3">
      Validás que la gente esté dispuesta a PAGAR por tu solución.
    </p>
    <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
      <li className="flex gap-2">
        <CheckCircle className="w-4 h-4 text-[var(--color-novogreen)] flex-shrink-0 mt-0.5" />
        <span>Primeras ventas reales</span>
      </li>
      <li className="flex gap-2">
        <CheckCircle className="w-4 h-4 text-[var(--color-novogreen)] flex-shrink-0 mt-0.5" />
        <span>Pricing strategy validado</span>
      </li>
      <li className="flex gap-2">
        <CheckCircle className="w-4 h-4 text-[var(--color-novogreen)] flex-shrink-0 mt-0.5" />
        <span>Unit economics claros</span>
      </li>
    </ul>
  </div>
  
  {/* Semana 10-12: Crecimiento */}
  <div className="relative pl-8 border-l-2 border-[var(--color-novogreen)]">
    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[var(--color-novogreen)] flex items-center justify-center text-black text-xs font-bold">
      4
    </div>
    <h3 className="text-xl md:text-2xl font-bold mb-2">Semanas 10-12: Tracción y Crecimiento</h3>
    <p className="text-[var(--color-text-muted)] mb-3">
      Estrategia de crecimiento, primeros canales de adquisición, y métricas clave.
    </p>
    <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
      <li className="flex gap-2">
        <CheckCircle className="w-4 h-4 text-[var(--color-novogreen)] flex-shrink-0 mt-0.5" />
        <span>Canales de adquisición testeados</span>
      </li>
      <li className="flex gap-2">
        <CheckCircle className="w-4 h-4 text-[var(--color-novogreen)] flex-shrink-0 mt-0.5" />
        <span>CAC y LTV calculados</span>
      </li>
      <li className="flex gap-2">
        <CheckCircle className="w-4 h-4 text-[var(--color-novogreen)] flex-shrink-0 mt-0.5" />
        <span>Roadmap de escalamiento</span>
      </li>
    </ul>
  </div>
  
</div>
```

---

### **SECCIÓN 5: Benefits**

**Objetivo**: Beneficios tangibles del programa

**Layout**:
- Padding: `py-20 md:py-32`

**Contenido**:
```tsx
<SectionHeader
  tag="BENEFICIOS"
  title="¿Qué lograrás con el programa?"
  centered={true}
/>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
  
  <BulletCard
    icon={<Zap className="w-8 h-8 text-[var(--color-novogreen)]" />}
    title="Validación Constante"
    description="Cada paso del proceso está validado con clientes reales antes de avanzar."
  />
  
  <BulletCard
    icon={<TrendingUp className="w-8 h-8 text-[var(--color-novogreen)]" />}
    title="Ahorra $12,000+ USD"
    description="Evita gastar en desarrollo, marketing y herramientas sin validar primero."
  />
  
  <BulletCard
    icon={<Clock className="w-8 h-8 text-[var(--color-novogreen)]" />}
    title="Ahorra 12+ meses"
    description="Lo que te llevaría un año solo, lo logramos juntos en 12 semanas."
  />
  
  <BulletCard
    icon={<Users className="w-8 h-8 text-[var(--color-novogreen)]" />}
    title="Comunidad Exclusiva"
    description="Acceso al Club de Fundadores con +300 emprendedores de 18 países."
  />
  
  <BulletCard
    icon={<Target className="w-8 h-8 text-[var(--color-novogreen)]" />}
    title="Mentorías 1-on-1"
    description="Sesiones personalizadas con mentores que han lanzado startups exitosas."
  />
  
  <BulletCard
    icon={<Rocket className="w-8 h-8 text-[var(--color-novogreen)]" />}
    title="De Idea a Tracción"
    description="Terminas el programa con clientes reales y un producto validado."
  />
  
</div>
```

---

### **SECCIÓN 6: Story (Fundadores)**

**Objetivo**: Credibilidad y conexión emocional

**Layout**:
- Background: `bg-[var(--color-bg-secondary)]`
- Padding: `py-20 md:py-32`

**Contenido**:
```tsx
<div className="max-w-5xl mx-auto">
  
  <SectionHeader
    tag="NUESTRA HISTORIA"
    title="Creamos Novolabs porque pasamos por lo mismo que vos"
    centered={true}
  />
  
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* Fotos de los fundadores */}
    <div className="flex gap-4 justify-center">
      <div className="text-center">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 border-4 border-white/10 mx-auto">
          <Image 
            src="/images/founders/tomas-volonte.png"
            alt="Tomás Volonté"
            width={160}
            height={160}
            className="w-full h-full object-cover"
          />
        </div>
        <h4 className="text-white font-bold text-lg">Tomás Volonté</h4>
        <p className="text-[var(--color-text-muted)] text-sm">Co-fundador & CEO</p>
      </div>
      
      <div className="text-center">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 border-4 border-white/10 mx-auto">
          <Image 
            src="/images/founders/damian-sanchez.png"
            alt="Damián Sánchez"
            width={160}
            height={160}
            className="w-full h-full object-cover"
          />
        </div>
        <h4 className="text-white font-bold text-lg">Damián Sánchez</h4>
        <p className="text-[var(--color-text-muted)] text-sm">Co-fundador & CPO</p>
      </div>
    </div>
    
    {/* Historia */}
    <div className="space-y-4 text-[var(--color-text-muted)] leading-relaxed">
      <p>
        Entre 2019 y 2023, Novolabs fue una agencia de producto que ayudó a <strong className="text-white">+200 emprendedores</strong> a validar, construir y lanzar sus MVPs.
      </p>
      <p>
        Vimos de todo. Productos que fracasaban porque nadie los quería. Fundadores que gastaban miles de dólares sin validar. Startups que pivoteaban 5 veces en 2 años.
      </p>
      <p>
        A medida que lanzábamos más y más startups, entendimos que <strong className="text-white">lo más importante al comienzo es entender profundamente a tu cliente</strong>, sus problemas, necesidades y deseos.
      </p>
      <p className="text-white font-medium">
        Por eso creamos el Sistema de Validación Paga™: Para que no malgastes tiempo ni dinero en algo que nadie quiere comprar.
      </p>
    </div>
    
  </div>
  
  {/* Stats */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-bold text-[var(--color-novogreen)] mb-2">300+</p>
      <p className="text-[var(--color-text-muted)]">Emprendedores ayudados</p>
    </div>
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-bold text-[var(--color-novogreen)] mb-2">4.8</p>
      <p className="text-[var(--color-text-muted)]">Rating promedio</p>
    </div>
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-bold text-[var(--color-novogreen)] mb-2">18</p>
      <p className="text-[var(--color-text-muted)]">Países</p>
    </div>
    <div className="text-center">
      <p className="text-4xl md:text-5xl font-bold text-[var(--color-novogreen)] mb-2">150+</p>
      <p className="text-[var(--color-text-muted)]">Startups activas</p>
    </div>
  </div>
  
</div>
```

---

### **SECCIÓN 7: Program (Qué Incluye)**

**Objetivo**: Detalles del programa

**Layout**:
- Padding: `py-20 md:py-32`

**Contenido**:
```tsx
<SectionHeader
  tag="QUÉ INCLUYE"
  title="Todo lo que necesitás para lanzar tu startup"
  centered={true}
/>

<div className="max-w-4xl mx-auto">
  
  {/* Card principal del programa */}
  <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-[var(--color-bg-card)] to-[var(--color-bg-secondary)] border-2 border-[var(--color-novogreen)]/20">
    
    {/* Header */}
    <div className="text-center mb-10">
      <h3 className="text-3xl md:text-4xl font-bold mb-4">Sistema de Validación Paga™</h3>
      <p className="text-[var(--color-text-muted)] text-xl">
        Programa completo de 12 semanas
      </p>
      <div className="mt-6">
        <span className="text-5xl md:text-6xl font-bold text-[var(--color-novogreen)]">
          $2,500 - $3,750 USD
        </span>
      </div>
    </div>
    
    {/* Features Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
      
      <div className="flex gap-4">
        <CheckCircle className="w-6 h-6 text-[var(--color-novogreen)] flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-white font-bold mb-1">12 Semanas de Acompañamiento</h4>
          <p className="text-[var(--color-text-muted)] text-sm">Seguimiento semanal personalizado</p>
        </div>
      </div>
      
      <div className="flex gap-4">
        <CheckCircle className="w-6 h-6 text-[var(--color-novogreen)] flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-white font-bold mb-1">Mentorías 1-on-1</h4>
          <p className="text-[var(--color-text-muted)] text-sm">Sesiones privadas con expertos</p>
        </div>
      </div>
      
      <div className="flex gap-4">
        <CheckCircle className="w-6 h-6 text-[var(--color-novogreen)] flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-white font-bold mb-1">Club de Fundadores</h4>
          <p className="text-[var(--color-text-muted)] text-sm">Acceso de por vida a la comunidad</p>
        </div>
      </div>
      
      <div className="flex gap-4">
        <CheckCircle className="w-6 h-6 text-[var(--color-novogreen)] flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-white font-bold mb-1">Masterclasses en Vivo</h4>
          <p className="text-[var(--color-text-muted)] text-sm">Con fundadores exitosos de LATAM</p>
        </div>
      </div>
      
      <div className="flex gap-4">
        <CheckCircle className="w-6 h-6 text-[var(--color-novogreen)] flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-white font-bold mb-1">+$5,000 en Beneficios</h4>
          <p className="text-[var(--color-text-muted)] text-sm">Descuentos en herramientas (Notion, Stripe, etc.)</p>
        </div>
      </div>
      
      <div className="flex gap-4">
        <CheckCircle className="w-6 h-6 text-[var(--color-novogreen)] flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-white font-bold mb-1">Templates y Frameworks</h4>
          <p className="text-[var(--color-text-muted)] text-sm">Todo listo para usar</p>
        </div>
      </div>
      
    </div>
    
    {/* CTA */}
    <div className="text-center">
      <Button variant="primary" href="https://info.novolabs.xyz/widget/form/kuNds4kU7sArnpVpkRI7">
        Aplicar al Programa
      </Button>
      <p className="text-[var(--color-text-muted)] text-sm mt-4">
        Cupos limitados · Proceso de selección
      </p>
    </div>
    
  </div>
  
</div>
```

---

### **SECCIÓN 8: Modules (Contenido)**

**Objetivo**: Mostrar el contenido semana por semana

**Layout**:
- Background: `bg-[var(--color-bg-secondary)]`
- Padding: `py-20 md:py-32`

**Contenido**:
```tsx
<SectionHeader
  tag="CONTENIDO DEL PROGRAMA"
  title="Qué aprenderás semana a semana"
  centered={true}
/>

<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
  
  {/* Módulo 1 */}
  <div className="p-6 rounded-2xl bg-[var(--color-bg-card)] border border-white/[0.05]">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-[var(--color-novogreen)] flex items-center justify-center text-black font-bold">
        1
      </div>
      <h4 className="text-white font-bold text-lg">Mindset Emprendedor</h4>
    </div>
    <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
      <li>• De empleado a fundador</li>
      <li>• Gestión de incertidumbre</li>
      <li>• Pensamiento lean</li>
    </ul>
  </div>
  
  {/* Módulo 2 */}
  <div className="p-6 rounded-2xl bg-[var(--color-bg-card)] border border-white/[0.05]">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-[var(--color-novogreen)] flex items-center justify-center text-black font-bold">
        2
      </div>
      <h4 className="text-white font-bold text-lg">Identificación del Problema</h4>
    </div>
    <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
      <li>• Definición de ICP</li>
      <li>• Jobs to be Done</li>
      <li>• Entrevistas de validación</li>
    </ul>
  </div>
  
  {/* Módulo 3 */}
  <div className="p-6 rounded-2xl bg-[var(--color-bg-card)] border border-white/[0.05]">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-[var(--color-novogreen)] flex items-center justify-center text-black font-bold">
        3
      </div>
      <h4 className="text-white font-bold text-lg">Propuesta de Valor</h4>
    </div>
    <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
      <li>• Value Proposition Canvas</li>
      <li>• Diferenciación competitiva</li>
      <li>• Messaging framework</li>
    </ul>
  </div>
  
  {/* Módulo 4 */}
  <div className="p-6 rounded-2xl bg-[var(--color-bg-card)] border border-white/[0.05]">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-[var(--color-novogreen)] flex items-center justify-center text-black font-bold">
        4
      </div>
      <h4 className="text-white font-bold text-lg">MVP y Prototipado</h4>
    </div>
    <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
      <li>• Diseño de MVP</li>
      <li>• No-code tools</li>
      <li>• Landing page de validación</li>
    </ul>
  </div>
  
  {/* Módulo 5 */}
  <div className="p-6 rounded-2xl bg-[var(--color-bg-card)] border border-white/[0.05]">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-[var(--color-novogreen)] flex items-center justify-center text-black font-bold">
        5
      </div>
      <h4 className="text-white font-bold text-lg">Modelo de Negocio</h4>
    </div>
    <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
      <li>• Business Model Canvas</li>
      <li>• Pricing strategy</li>
      <li>• Unit economics</li>
    </ul>
  </div>
  
  {/* Módulo 6 */}
  <div className="p-6 rounded-2xl bg-[var(--color-bg-card)] border border-white/[0.05]">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-[var(--color-novogreen)] flex items-center justify-center text-black font-bold">
        6
      </div>
      <h4 className="text-white font-bold text-lg">Primeras Ventas</h4>
    </div>
    <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
      <li>• Pre-venta de MVP</li>
      <li>• Pitch de venta</li>
      <li>• Cierre de early adopters</li>
    </ul>
  </div>
  
  {/* Módulo 7 */}
  <div className="p-6 rounded-2xl bg-[var(--color-bg-card)] border border-white/[0.05]">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-[var(--color-novogreen)] flex items-center justify-center text-black font-bold">
        7
      </div>
      <h4 className="text-white font-bold text-lg">Growth & Adquisición</h4>
    </div>
    <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
      <li>• Canales de adquisición</li>
      <li>• CAC y LTV</li>
      <li>• Growth loops</li>
    </ul>
  </div>
  
  {/* Módulo 8 */}
  <div className="p-6 rounded-2xl bg-[var(--color-bg-card)] border border-white/[0.05]">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-full bg-[var(--color-novogreen)] flex items-center justify-center text-black font-bold">
        8
      </div>
      <h4 className="text-white font-bold text-lg">Métricas y Analytics</h4>
    </div>
    <ul className="space-y-2 text-sm text-[var(--color-text-muted)]">
      <li>• North Star Metric</li>
      <li>• Dashboards</li>
      <li>• Data-driven decisions</li>
    </ul>
  </div>
  
</div>
```

---

### **SECCIÓN 9: Social Proof & Reviews**

**Objetivo**: Testimoniales y prueba social

**Layout**:
- Padding: `py-20 md:py-32`

**Contenido**:
```tsx
<SectionHeader
  title="Lo que dicen nuestros alumnos"
  subtitle="Más de 300 emprendedores han transformado sus ideas en startups reales"
  centered={true}
/>

{/* Logos de Prensa */}
<div className="flex flex-wrap items-center justify-center gap-12 mb-16 opacity-60">
  <Image src="/images/press/forbes.svg" alt="Forbes" width={100} height={30} className="h-8 grayscale" />
  <Image src="/images/press/lanacion.svg" alt="La Nación" width={100} height={30} className="h-8 grayscale" />
  <Image src="/images/press/clarin.svg" alt="Clarín" width={100} height={30} className="h-8 grayscale" />
  <Image src="/images/press/iprofesional.svg" alt="iProfesional" width={100} height={30} className="h-8 grayscale" />
</div>

{/* Grid de Testimoniales */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  
  <TestimonialCard
    name="Diego Akerman"
    role="Fundador"
    company="Argentina"
    text="Novolabs es la mejor forma de entrar al mundo emprendedor. La experiencia es realmente memorable, no sólo por lo que aprendés, sino también por sentirte parte de una familia que quiere que te vaya bien."
    avatar="/images/testimonials/diego-akerman.png"
    rating={5}
  />
  
  <TestimonialCard
    name="Magdalena Laplacette"
    role="Fundadora"
    company="Uruguay"
    text="Los chicos de Novolabs son grandes profesionales que te ayudan a llevar a cabo tu proyecto, con paciencia, sabiduría, y lo más importante, desafiándote a ir por todo."
    avatar="/images/testimonials/magdalena-laplacette.png"
    rating={5}
  />
  
  <TestimonialCard
    name="Nahuel Turano"
    role="Fundador"
    company="Chile"
    text="Después de 6 meses de terminar el programa levantamos inversión y ya tenemos más de 15 clientes. Lo mejor que pueden hacer en una etapa temprana."
    avatar="/images/testimonials/nahuel-turano.png"
    rating={5}
  />
  
</div>

{/* Trustpilot Rating */}
<div className="text-center mt-12">
  <div className="inline-flex items-center gap-2 mb-2">
    <Star className="w-6 h-6 fill-[#00b67a] text-[#00b67a]" />
    <Star className="w-6 h-6 fill-[#00b67a] text-[#00b67a]" />
    <Star className="w-6 h-6 fill-[#00b67a] text-[#00b67a]" />
    <Star className="w-6 h-6 fill-[#00b67a] text-[#00b67a]" />
    <Star className="w-6 h-6 fill-[#00b67a] text-[#00b67a]" />
  </div>
  <p className="text-white font-bold text-xl mb-1">4.8 de 5 estrellas</p>
  <p className="text-[var(--color-text-muted)]">Basado en 300+ reviews</p>
</div>
```

---

### **SECCIÓN 10: Free Training**

**Objetivo**: Lead magnet

**Layout**:
- Background: `bg-[var(--color-bg-secondary)]`
- Padding: `py-20 md:py-32`

**Contenido**:
```tsx
<div className="max-w-4xl mx-auto text-center">
  
  <div className="inline-block px-4 py-2 rounded-full bg-[var(--color-novogreen)]/10 border border-[var(--color-novogreen)]/30 mb-6">
    <span className="text-[var(--color-novogreen)] font-bold text-sm uppercase tracking-wide">
      100% Gratuito
    </span>
  </div>
  
  <h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-6">
    ¿Querés probarlo antes de aplicar al programa?
  </h2>
  
  <p className="text-[var(--color-text-muted)] text-xl mb-10">
    Accede a nuestro <strong className="text-white">Entrenamiento Gratuito</strong> de 90 minutos donde aprendés los fundamentos del Sistema de Validación Paga™
  </p>
  
  {/* Features del training */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-full bg-[var(--color-novogreen)]/20 flex items-center justify-center mb-3">
        <Video className="w-6 h-6 text-[var(--color-novogreen)]" />
      </div>
      <p className="text-white font-semibold mb-1">Masterclass en video</p>
      <p className="text-[var(--color-text-muted)] text-sm">90 minutos de contenido</p>
    </div>
    
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-full bg-[var(--color-novogreen)]/20 flex items-center justify-center mb-3">
        <FileText className="w-6 h-6 text-[var(--color-novogreen)]" />
      </div>
      <p className="text-white font-semibold mb-1">Framework gratuito</p>
      <p className="text-[var(--color-text-muted)] text-sm">Para empezar a validar</p>
    </div>
    
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-full bg-[var(--color-novogreen)]/20 flex items-center justify-center mb-3">
        <Users className="w-6 h-6 text-[var(--color-novogreen)]" />
      </div>
      <p className="text-white font-semibold mb-1">Casos de éxito</p>
      <p className="text-[var(--color-text-muted)] text-sm">Ejemplos reales</p>
    </div>
  </div>
  
  <Button variant="primary" href="https://www.curso-sistema-de-validacion-paga.novolabs.xyz/registro">
    Acceder al Entrenamiento Gratuito
  </Button>
  
  <p className="text-[var(--color-text-muted)] text-sm mt-4">
    No necesitas tarjeta de crédito · Acceso inmediato
  </p>
  
</div>
```

---

### **SECCIÓN 11: FAQ**

**Objetivo**: Responder objeciones

**Layout**:
- Padding: `py-20 md:py-32`

**Contenido**:
```tsx
<SectionHeader
  title="Preguntas Frecuentes"
  subtitle="Todo lo que necesitas saber sobre el programa"
  centered={true}
/>

<div className="max-w-3xl mx-auto">
  
  <FAQItem
    question="¿Cuánto dura el programa?"
    answer="El programa tiene una duración de 12 semanas con sesiones semanales en vivo. Además, tendrás acceso de por vida a todos los materiales, grabaciones, y al Club de Fundadores."
    defaultOpen={true}
  />
  
  <FAQItem
    question="¿Cuánto cuesta?"
    answer="El programa tiene un costo entre $2,500 y $3,750 USD dependiendo del plan que elijas (pago único o en cuotas). Esto incluye 12 semanas de acompañamiento, mentorías 1-on-1, acceso al Club de Fundadores, y +$5,000 USD en beneficios en herramientas."
  />
  
  <FAQItem
    question="¿Para quién es este programa?"
    answer="Es ideal para emprendedores que tienen una idea de negocio pero no saben cómo validarla, o que ya han intentado lanzar algo y fracasaron. No necesitas experiencia técnica ni saber programar. Funciona para productos digitales, físicos, servicios, B2B o B2C."
  />
  
  <FAQItem
    question="¿Para quién NO es este programa?"
    answer="No es para quien busca atajos o fórmulas mágicas. Tampoco para quienes no están dispuestos a ejecutar y validar con clientes reales. Si no puedes dedicarle al menos 10-15 horas semanales, este programa no es para ti."
  />
  
  <FAQItem
    question="¿Qué pasa si no tengo una idea todavía?"
    answer="¡No hay problema! Parte del programa incluye técnicas para identificar problemas reales en el mercado y generar ideas de negocio validables. Muchos de nuestros alumnos llegan sin idea y terminan con un producto lanzado."
  />
  
  <FAQItem
    question="¿Cómo funciona el proceso de aplicación?"
    answer="Primero completas un formulario de aplicación donde nos cuentas sobre ti y tu proyecto. Luego tenemos una llamada de 30 minutos para conocernos y ver si hay fit. No aceptamos a todos - buscamos gente comprometida y lista para ejecutar."
  />
  
  <FAQItem
    question="¿El programa es en vivo o grabado?"
    answer="Es una combinación. Tienes sesiones en vivo semanales con el grupo, mentorías 1-on-1, y acceso a contenido grabado que puedes ver a tu ritmo. Todo queda grabado para que lo veas cuando quieras."
  />
  
  <FAQItem
    question="¿Ofrecen garantía?"
    answer="Sí. Si después de las primeras 2 semanas sientes que el programa no es para ti, te devolvemos el 100% de tu inversión sin preguntas. Nuestra prioridad es que tengas resultados reales."
  />
  
  <FAQItem
    question="¿Necesito saber programar o tener conocimientos técnicos?"
    answer="No. Te enseñamos a usar herramientas no-code para crear prototipos y MVPs sin escribir una línea de código. Lo importante es la validación, no la tecnología."
  />
  
  <FAQItem
    question="¿Cuál es la diferencia con una incubadora o aceleradora?"
    answer="Las incubadoras buscan 'el caballo ganador' para invertir. Nosotros nos enfocamos en transformar al emprendedor, dándole herramientas que le servirán toda la vida. No pedimos equity ni tomamos decisiones por ti. Sos el dueño 100% de tu startup."
  />
  
</div>
```

---

### **SECCIÓN 12: Closing CTA**

**Objetivo**: Último push para conversión

**Layout**:
- Background: `bg-[var(--color-bg-secondary)]`
- Padding: `py-32 md:py-40`
- Elementos decorativos (blurs)

**Contenido**:
```tsx
<section className="py-32 md:py-40 bg-[var(--color-bg-secondary)] relative overflow-hidden">
  
  {/* Decorative blurs */}
  <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--color-novored)] opacity-[0.05] blur-[120px] rounded-full" />
  <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--color-novogreen)] opacity-[0.03] blur-[120px] rounded-full" />
  
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

      <div className="flex flex-col sm:flex-row gap-5 items-center justify-center mb-8">
        <Button variant="primary" href="https://info.novolabs.xyz/widget/form/kuNds4kU7sArnpVpkRI7">
          Aplicar al Programa
        </Button>
        <Button variant="secondary" href="https://www.curso-sistema-de-validacion-paga.novolabs.xyz/registro">
          Entrenamiento Gratuito
        </Button>
      </div>
      
      <p className="text-[var(--color-text-muted)] text-sm">
        300+ emprendedores ya transformaron sus ideas en startups reales
      </p>
      
    </div>
  </div>
  
</section>
```

---

## 📄 PÁGINAS ADICIONALES

### PÁGINA: `/prensa`

**Metadata**:
```typescript
export const metadata = {
  title: 'Prensa - Novolabs Startup School',
  description: 'Descubrí la historia de Novolabs contada por Medios de Comunicación...',
};
```

**Estructura**:

1. **Hero Section**:
   - Título: "Qué dicen de nosotros"
   - Subtítulo descriptivo
   - Logos de medios (Forbes, La Nación, Clarín, iProfesional)
   - Layout similar al ejemplo en el código actual

2. **Featured Articles** (alternando fondos blanco/negro):
   - La Nación (con imagen y excerpt)
   - iProfesional (con imagen y excerpt)
   - Forbes (destacado en negro)
   - Clarín + iProUP (grid de 2 columnas)

3. **All Media Grid**:
   - Grid de cards clickeables
   - 17+ medios en total
   - Enlaces externos

4. **CTA Section**:
   - "¿Te gustaría hacernos una entrevista?"
   - Button WhatsApp

**Nota**: Usa el código de `Prensa.tsx` actual como referencia exacta

---

### PÁGINA: `/podcast`

**Metadata**:
```typescript
export const metadata = {
  title: 'NovoTalks - Podcast de Novolabs',
  description: 'Aprende directo de los mejores emprendedores de LATAM...',
};
```

**Estructura**:

1. **Hero + Filters**:
   - Título: "Aprende directo de los mejores"
   - Descripción del podcast
   - **Filtros por categoría**:
     - Emprendimiento
     - Inversión
     - Innovación
     - Crecimiento Personal
     - Fintech
     - Inteligencia Artificial
     - Ventas
   - Button para limpiar filtros (X)

2. **Episodes Grid**:
   - 6 episodios por página
   - Cards con:
     - Imagen del invitado como background
     - Gradient overlay oscuro
     - Badge de categoría (esquina superior derecha)
     - Número de episodio "NovoTalk #33"
     - Título del episodio
     - Nombre del invitado
     - Rol del invitado
   - Responsive: 1 columna mobile, 2 desktop

3. **Pagination**:
   - Botones anterior/siguiente
   - Números de página (5 máximo visible)
   - Página actual destacada en rojo

**IMPORTANTE - Data de Episodios**:
Hay **33 episodios** en total. Usa exactamente esta data:

```typescript
const episodes = [
  {
    number: 33,
    title: 'De un Local de Sushi a Liderar un Ecosistema Foodtech en Latam',
    guest: 'Uriel Krimer',
    role: 'Co-fundador de Atomic Kitchens',
    category: 'Emprendimiento',
    url: 'https://www.youtube.com/watch?v=RVo8SWoE1no'
  },
  {
    number: 32,
    title: 'Cómo prepararte para levantar capital y no morir en el intento',
    guest: 'Cristóbal Perdomo',
    role: 'Co-fundador de Jaguar Ventures',
    category: 'Inversión',
    url: 'https://www.youtube.com/watch?v=ZGH3cffIPQw'
  },
  // ... [incluir los 33 episodios del código actual]
];
```

**Nota**: Usa el código de `Podcast.tsx` actual para la data completa de los 33 episodios

---

### PÁGINA: `/club`

**Metadata**:
```typescript
export const metadata = {
  title: 'Club de Fundadores - Novolabs',
  description: 'Comunidad exclusiva de emprendedores e inversores de LATAM...',
};
```

**IMPORTANTE**: Esta página tiene **fondo blanco** (única excepción)

**Estructura**:

1. **Hero** (fondo blanco):
   - Título: "Club de Fundadores, alumní exclusivo"
   - Subtítulo: "Donde podes conectar con emprendedores e inversores..."
   - CTA: Aplicar al Programa

2. **Stats Section** (fondo oscuro):
   - Grid 2x2 en desktop
   - Stats:
     - 300+ Miembros Activos
     - 200% Crecimiento anual
     - 18 Países con miembros activos
     - 150+ Startups activas
   - Imagen de comunidad (lado derecho)

3. **Eventos de Networking** (fondo blanco):
   - Grid de 3 fotos
   - Título: "Eventos de networking"

4. **Masterclass & Sesiones** (fondo blanco):
   - 2 cards lado a lado
   - Card 1 (fondo gris claro): Masterclass en vivo
   - Card 2 (fondo oscuro): Sesiones en grupo

5. **Beneficios** (fondo blanco):
   - Título: "Acceso a +5.000 USD en beneficios exclusivos"
   - Visualización con logos de herramientas conectados con líneas
   - Logos: AWS, Notion, Dropbox, Azure, Stripe, Webflow, Adalo, Make, etc.

6. **Testimonios** (fondo negro):
   - 3 testimonials de miembros
   - Con avatar, nombre, país
   - Stars de rating
   - Logo de LinkedIn

7. **CTA Final** (fondo blanco):
   - "No fracasa quien lo intenta..."
   - 2 CTAs

**Nota**: Usa el código de `Club.tsx` actual como referencia exacta

---

### PÁGINA: `/sobre-nosotros`

**Metadata**:
```typescript
export const metadata = {
  title: 'Sobre Nosotros - Novolabs Startup School',
  description: 'Conoce la historia de Tomás Volonté y Damián Sánchez...',
};
```

**Estructura**:

1. **Hero** (fondo negro):
   - Tag: "SOBRE NOVOLABS"
   - Título: "No somos 'otra escuela más' de negocios"
   - Descripción del propósito

2. **Press Logos** (fondo negro):
   - Texto pequeño: "tal vez nos viste en..."
   - 4 logos pequeños: Forbes, Clarín, La Nación, iProfesional

3. **Carta de los Fundadores** (fondo #fafafa):
   - Container blanco con shadow (formato carta/letter)
   - Q&A style:
     - "¿Cómo llegamos hasta acá?"
     - "¿Para quién NO es Novolabs?"
     - "¿Para quién es Novolabs?"
     - "¿Qué esperamos conseguir?"
   
4. **Founders** (dentro de la carta):
   - Border top
   - Texto: "Fundado y liderado por:"
   - 2 columnas:
     - Tomás Volonté (foto + nombre + cargo + firma)
     - Damián Sánchez (foto + nombre + cargo + firma)

**Nota**: Usa el código de `SobreNosotros.tsx` actual como referencia exacta

---

## 🎯 PRIORIDADES DE IMPLEMENTACIÓN

### **FASE 1: Fundamentos** (CRÍTICO)
1. ✅ Configurar `app/globals.css` con todas las variables CSS
2. ✅ Crear `components/layout/Header.tsx` (sticky navbar)
3. ✅ Crear `components/layout/Footer.tsx`
4. ✅ Crear `components/ui/Button.tsx` con todas las variantes
5. ✅ Configurar `app/layout.tsx` con metadata y SEO

### **FASE 2: Componentes UI** (IMPORTANTE)
6. ✅ `SectionHeader.tsx`
7. ✅ `BulletCard.tsx`
8. ✅ `TestimonialCard.tsx`
9. ✅ `FAQItem.tsx`

### **FASE 3: Landing Principal** (CORE)
10. ✅ `app/page.tsx` con las 12 secciones
11. ✅ Hero Section
12. ✅ Identification Section
13. ✅ Paradigm Shift Section
14. ✅ Validation System Section (CORE)
15. ✅ Benefits Section
16. ✅ Story Section
17. ✅ Program Section
18. ✅ Modules Section
19. ✅ Social Proof Section
20. ✅ Free Training Section
21. ✅ FAQ Section
22. ✅ Closing CTA Section

### **FASE 4: Páginas Adicionales**
23. ✅ `app/prensa/page.tsx`
24. ✅ `app/podcast/page.tsx` (con filtros y paginación)
25. ✅ `app/club/page.tsx` (fondo blanco)
26. ✅ `app/sobre-nosotros/page.tsx`

---

## 📱 OPTIMIZACIÓN MOBILE (CRÍTICO)

### **Tamaños de Fuente Mobile-First**

```css
/* Headings */
h1: text-4xl (mobile) → md:text-6xl → lg:text-7xl
h2: text-3xl (mobile) → md:text-4xl → lg:text-5xl
h3: text-2xl (mobile) → md:text-3xl
h4: text-xl (mobile) → md:text-2xl

/* Body */
p: text-base (mobile) → md:text-lg
small: text-sm (mobile) → md:text-base
```

### **Spacing Mobile**

```css
/* Sections */
py-20 (mobile) → md:py-32

/* Containers */
px-5 (mobile) → md:px-8 → lg:px-12

/* Gaps */
gap-4 (mobile) → md:gap-6 → lg:gap-8
```

### **Grids Responsive**

```jsx
{/* 1 col mobile, 2 tablet, 3 desktop */}
grid-cols-1 md:grid-cols-2 lg:grid-cols-3

{/* 1 col mobile, 2 desktop */}
grid-cols-1 lg:grid-cols-2
```

### **Navbar Mobile**

```jsx
{/* Ocultar en mobile, mostrar en sm+ */}
<button className="hidden sm:block">Aplicar al Programa</button>

{/* Siempre visible */}
<button className="block">Entrenamiento Gratuito</button>
```

---

## ✅ CHECKLIST FINAL DE CALIDAD

### **Design**
- [ ] Colores exactos: #ff3b30 (rojo), #c6ff3e (verde)
- [ ] Tipografías: GEIST (headings), SATOSHI (body)
- [ ] Variables CSS funcionando correctamente
- [ ] Background gradient radial en body
- [ ] Todas las cards con hover effects

### **Mobile**
- [ ] Todas las secciones responsive
- [ ] Tamaños de fuente adaptados
- [ ] CTAs táctiles (min 44px)
- [ ] Navbar sticky funciona en mobile
- [ ] "Aplicar al Programa" oculto en mobile

### **Navegación**
- [ ] Header sticky en todas las páginas
- [ ] Links entre páginas funcionando
- [ ] CTAs apuntan a URLs correctas
- [ ] Links externos con target="_blank"

### **SEO**
- [ ] Metadata en cada página
- [ ] Open Graph tags
- [ ] Structured data (JSON-LD)
- [ ] Alt text en todas las imágenes

### **Performance**
- [ ] Next.js Image en lugar de <img>
- [ ] Priority en imágenes above-the-fold
- [ ] Lazy loading en imágenes below-the-fold

### **Contenido**
- [ ] Todos los textos en español
- [ ] CTAs claros y accionables
- [ ] 33 episodios de podcast con data correcta
- [ ] 17+ medios en página de prensa
- [ ] FAQs respondiendo objeciones comunes

---

## 🚀 INSTRUCCIONES PARA V0

**Por favor, construye este proyecto siguiendo EXACTAMENTE estas especificaciones:**

1. **Stack**: Next.js 15+ con App Router, React 19, Tailwind CSS v4, TypeScript
2. **Estructura**: 5 páginas (`/`, `/prensa`, `/podcast`, `/club`, `/sobre-nosotros`)
3. **Diseño**: Dark theme premium, mobile-first (90% tráfico móvil)
4. **Colores**: Rojo #ff3b30, Verde #c6ff3e (usar EXACTAMENTE estos)
5. **Tipografías**: GEIST para headings, SATOSHI para body (importar desde Fontshare)
6. **CTAs**: Usar las URLs exactas proporcionadas
7. **Responsive**: Todas las secciones deben verse premium en mobile
8. **SEO**: Metadata completa en cada página

**Prioriza**:
- ✅ Mobile experience impecable (90% del tráfico)
- ✅ Landing principal completa (12 secciones)
- ✅ Navbar sticky con backdrop blur
- ✅ CTAs correctos y visibles

**Referencias**:
- Usa el código de los archivos actuales (`Prensa.tsx`, `Podcast.tsx`, `Club.tsx`, `SobreNosotros.tsx`) como guía EXACTA para esas páginas
- Mantén la estructura y contenido tal cual está
- Adapta de React con hash routing a Next.js con App Router

---

**NOTA FINAL**: Este prompt es extremadamente detallado para asegurar que v0 pueda construir el sitio exactamente como lo necesitas. Si hay alguna sección que necesites más detallada, házmelo saber.

