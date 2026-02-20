# 📦 Referencia Completa de Componentes - Novolabs

Este documento contiene todos los componentes principales del proyecto con ejemplos de uso para facilitar la migración a v0/Next.js.

---

## 📑 Tabla de Contenidos

1. [Componentes de Layout](#componentes-de-layout)
2. [Componentes UI](#componentes-ui)
3. [Secciones de la Landing](#secciones-de-la-landing)
4. [Páginas Completas](#páginas-completas)
5. [Datos y Constantes](#datos-y-constantes)

---

## 🏗️ Componentes de Layout

### Header / Navbar

**Ubicación**: `components/layout/Header.tsx`

**Props**:
```typescript
interface HeaderProps {
  variant?: 'light' | 'dark';
  showApplyButton?: boolean; // Ocultar en mobile para simplificar
}
```

**Características**:
- Sticky top-0
- Backdrop blur (glassmorphism)
- Logo clickeable que navega a "/"
- Botón "Aplicar al Programa" (oculto en mobile < sm)
- Botón "Entrenamiento Gratuito" (siempre visible)

**Uso**:
```tsx
<Header variant="dark" showApplyButton={true} />
```

---

### Footer

**Ubicación**: `components/layout/Footer.tsx`

**Estructura**:
- Links a redes sociales
- Links de navegación interna
- Copyright y legal
- Diseño responsive con grid

**Características**:
- Fondo oscuro
- Iconos de redes sociales con hover effects
- Links a: Prensa, Podcast, Club, Sobre Nosotros

---

## 🎨 Componentes UI

### Button

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
- `primary`: Rojo Novolabs (#ff3b30)
- `secondary`: Blanco transparente con borde
- `primary-light`: Rojo para fondos claros
- `secondary-light`: Negro para fondos claros

**Uso**:
```tsx
<Button variant="primary" href="/aplicar">
  Aplicar al Programa
</Button>

<Button variant="secondary" onClick={handleClick}>
  Ver más
</Button>
```

---

### BulletCard

**Props**:
```typescript
interface BulletCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
```

**Características**:
- Card con icono, título y descripción
- Hover effects
- Border sutil
- Background semi-transparente

**Uso**:
```tsx
<BulletCard
  icon={<CheckCircle className="w-6 h-6 text-[var(--color-novogreen)]" />}
  title="Validación constante"
  description="Cada paso validado con el mercado"
/>
```

---

### MentorCard

**Props**:
```typescript
interface MentorCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  bio?: string;
}
```

**Uso**:
```tsx
<MentorCard
  name="Juan Pérez"
  role="Co-fundador"
  company="Startup XYZ"
  image="/images/mentors/juan-perez.png"
  bio="15 años de experiencia..."
/>
```

---

### TestimonialCard

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

**Características**:
- Avatar redondo
- Estrellas de rating
- Quote del testimonial
- Hover effects premium

**Uso**:
```tsx
<TestimonialCard
  name="María García"
  role="Fundadora de TechCo"
  text="Novolabs cambió mi forma de emprender..."
  avatar="/images/testimonials/maria-garcia.png"
  rating={5}
/>
```

---

### VideoCard

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

**Características**:
- Play button overlay
- Duración del video
- Thumbnail responsive
- Click para abrir video

---

### PlanCard

**Props**:
```typescript
interface PlanCardProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
  ctaLink?: string;
}
```

**Características**:
- Lista de features con checks
- Highlight para plan recomendado
- CTA button integrado
- Pricing destacado

**Uso**:
```tsx
<PlanCard
  name="Sistema de Validación Paga"
  price="$2,500 - $3,750 USD"
  description="Programa completo para lanzar tu startup"
  features={[
    "12 semanas de acompañamiento",
    "Mentorías 1-on-1",
    "Acceso al Club de Fundadores"
  ]}
  highlighted={true}
  ctaText="Aplicar al Programa"
  ctaLink="https://info.novolabs.xyz/widget/form/kuNds4kU7sArnpVpkRI7"
/>
```

---

### FAQItem

**Props**:
```typescript
interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}
```

**Características**:
- Accordion expandible
- Smooth animation
- Icon de chevron que rota
- Responsive

**Uso**:
```tsx
<FAQItem
  question="¿Cuánto dura el programa?"
  answer="El programa tiene una duración de 12 semanas..."
  defaultOpen={false}
/>
```

---

### SectionHeader

**Props**:
```typescript
interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}
```

**Características**:
- Tag opcional en verde Novolabs
- Título grande con tipografía Geist
- Subtítulo opcional
- Alineación configurable

**Uso**:
```tsx
<SectionHeader
  tag="SISTEMA DE VALIDACIÓN PAGA"
  title="Lanzá tu startup paso a paso"
  subtitle="Sin malgastar tiempo ni dinero"
  centered={true}
/>
```

---

### TrustpilotTestimonialCard

**Props**:
```typescript
interface TrustpilotTestimonialCardProps {
  name: string;
  rating: number;
  text: string;
  date: string;
  verified?: boolean;
}
```

**Características**:
- Estrellas verdes de Trustpilot
- Badge "Verified"
- Fecha de review
- Layout tipo Trustpilot

---

### TimelineCard

**Props**:
```typescript
interface TimelineCardProps {
  week: number;
  title: string;
  description: string;
  items: string[];
}
```

**Características**:
- Número de semana destacado
- Lista de items con bullets
- Línea vertical conectando cards
- Diseño vertical para mobile

---

## 📄 Secciones de la Landing

### 1. HeroSection

**Características**:
- H1 grande y impactante
- Subtítulo descriptivo
- CTA principal "Aplicar al Programa"
- CTA secundario "Entrenamiento Gratuito"
- Background gradient

**Estructura**:
```tsx
<section className="py-20 md:py-32">
  <div className="max-w-[var(--max-width)] mx-auto px-5 text-center">
    <h1 className="text-4xl md:text-6xl lg:text-7xl mb-8">
      Lanzá tu startup paso a paso
    </h1>
    <p className="text-xl md:text-2xl mb-12">
      Con el Sistema de Validación Paga™
    </p>
    <div className="flex gap-4 justify-center">
      <Button variant="primary" href="...">Aplicar</Button>
      <Button variant="secondary" href="...">Gratis</Button>
    </div>
  </div>
</section>
```

---

### 2. IdentificationSection

**Objetivo**: Identificar pain points del usuario

**Estructura**:
- Título que resuena con el problema
- Lista de problemas comunes (bullets con X rojo)
- Transición a la solución

**Elementos clave**:
- "¿Te identificas con esto?"
- Bullets de problemas
- Call-out emocional

---

### 3. ParadigmShiftSection

**Objetivo**: Cambio de mentalidad

**Estructura**:
- Comparación "Antes vs Después"
- Tabla comparativa o cards
- Highlight del nuevo approach

**Elementos**:
- ❌ Forma tradicional (errónea)
- ✅ Forma con Novolabs (correcta)

---

### 4. ValidationSystemSection

**Objetivo**: Presentar el Sistema de Validación Paga™ (CORE)

**Estructura**:
- Header grande con el nombre del sistema
- Descripción del sistema en pasos
- Visualización del proceso (timeline/diagrama)
- Features principales

**Elementos clave**:
- Timeline de 12 semanas
- Pasos del sistema numerados
- Beneficios de cada paso

---

### 5. BenefitsSection

**Objetivo**: Mostrar beneficios tangibles

**Estructura**:
- Grid de BulletCards
- Cada card con icono + título + descripción
- 3 columnas en desktop, 1 en mobile

**Beneficios típicos**:
- Ahorro de tiempo
- Ahorro de dinero
- Acompañamiento experto
- Comunidad exclusiva
- Validación constante
- Reducción de riesgo

---

### 6. StorySection

**Objetivo**: Storytelling de los fundadores

**Estructura**:
- Fotos de Tomás y Damián
- Historia de cómo nació Novolabs
- Credibilidad y experiencia
- Resultados obtenidos

**Elementos**:
- "Nuestra historia"
- +200 emprendedores ayudados
- Años de experiencia

---

### 7. ProgramSection

**Objetivo**: Detalles del programa

**Estructura**:
- Duración y formato
- Qué incluye
- Metodología
- Resultados esperados

**PlanCard** con detalles completos

---

### 8. ModulesSection

**Objetivo**: Mostrar contenido del programa

**Estructura**:
- Lista de módulos o semanas
- TimelineCards con progresión
- Temas de cada módulo

**Elementos**:
- Semana 1-12
- Temas por semana
- Entregables

---

### 9. SocialProofReviewsSection

**Objetivo**: Testimoniales y social proof

**Estructura**:
- Grid de TestimonialCards
- Logos de empresas / medios
- Ratings y reviews
- Casos de éxito

**Elementos**:
- Testimonios de alumnos
- Logos de prensa (Forbes, La Nación, etc.)
- Rating aggregate (4.8/5)
- "300+ emprendedores"

---

### 10. FreeTrainingSection

**Objetivo**: Generar leads con entrenamiento gratuito

**Estructura**:
- Título del training
- Beneficios del training
- CTA para registrarse
- Preview del contenido

**CTA**: Link a entrenamiento gratuito

---

### 11. FAQSection

**Objetivo**: Responder objeciones comunes

**Estructura**:
- Lista de FAQItems
- Preguntas frecuentes
- Accordion expandible

**Preguntas típicas**:
- ¿Cuánto dura?
- ¿Cuánto cuesta?
- ¿Para quién es?
- ¿Qué incluye?
- ¿Cómo aplico?

---

### 12. ClosingSection

**Objetivo**: Último push para conversión

**Estructura**:
- Headline impactante
- Urgencia o escasez (si aplica)
- CTA final prominente
- Garantía o risk reversal

**Elementos**:
- "No fracasa quien lo intenta..."
- CTA grande "Aplicar al Programa"
- CTA secundario "Entrenamiento Gratuito"

---

## 🌐 Páginas Completas

### Página: Prensa (`/prensa`)

**Secciones**:
1. Hero con logos de medios
2. Featured articles (La Nación, iProfesional, Forbes)
3. Grid de todos los medios
4. CTA para contacto prensa

**Datos necesarios**:
```typescript
const mediaList = [
  {
    media: "Forbes",
    title: "Título del artículo...",
    url: "https://..."
  },
  // ... más medios
];
```

---

### Página: Podcast (`/podcast`)

**Secciones**:
1. Hero "NovoTalks"
2. Filtros por categoría
3. Grid de episodios (6 por página)
4. Paginación

**Características**:
- 33 episodios totales
- Categorías: Emprendimiento, Inversión, Fintech, IA, etc.
- Filtrado en tiempo real
- Pagination funcional

**Estructura de Episodio**:
```typescript
interface Episode {
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
```

---

### Página: Club (`/club`)

**Secciones**:
1. Hero "Club de Fundadores"
2. Stats (300+ miembros, 18 países, etc.)
3. Eventos de networking (fotos)
4. Masterclass y sesiones
5. Beneficios (+5000 USD en herramientas)
6. Testimonios de miembros
7. CTA final

**Características**:
- Fondo blanco (diferente al resto)
- Visualización de beneficios con logos
- Testimonials con LinkedIn

---

### Página: Sobre Nosotros (`/sobre-nosotros`)

**Secciones**:
1. Hero con tagline
2. Logos de prensa
3. Carta/Mensaje de los fundadores
4. Fotos y firmas de Tomás y Damián

**Estructura**:
- Formato de carta/letter
- Q&A style:
  - ¿Cómo llegamos hasta acá?
  - ¿Para quién NO es Novolabs?
  - ¿Para quién es Novolabs?
  - ¿Qué esperamos conseguir?

**Tono**: Personal, honesto, aspiracional

---

## 📊 Datos y Constantes

### Colores de Marca

```typescript
export const COLORS = {
  novored: '#ff3b30',
  novoredHover: '#ff584d',
  novogreen: '#c6ff3e',
  bgMain: '#000000',
  bgSecondary: '#0b0b0b',
  bgCard: '#101010',
  textMain: '#ffffff',
  textMuted: '#b4b4b4',
};
```

---

### Breakpoints Responsive

```typescript
export const BREAKPOINTS = {
  sm: '640px',   // Tablets
  md: '768px',   // Tablets landscape
  lg: '1024px',  // Desktop
  xl: '1280px',  // Large desktop
};
```

**Nota**: 90% del tráfico es mobile, optimizar primero para mobile.

---

### URLs Importantes

```typescript
export const URLS = {
  applyProgram: 'https://info.novolabs.xyz/widget/form/kuNds4kU7sArnpVpkRI7',
  freeTraining: 'https://www.curso-sistema-de-validacion-paga.novolabs.xyz/registro',
  whatsapp: 'https://api.whatsapp.com/send/?phone=5491163544698&text&type=phone_number&app_absent=0',
};
```

---

### Stats del Programa

```typescript
export const PROGRAM_STATS = {
  studentsHelped: 300,
  rating: 4.8,
  reviewCount: 300,
  successRate: '85%',
  avgSavings: 12000, // USD
  avgTimeSaved: 12, // meses
  price: {
    min: 2500,
    max: 3750,
    currency: 'USD'
  }
};
```

---

### FAQ Data

```typescript
export const faqs = [
  {
    question: "¿Cuánto dura el programa?",
    answer: "El programa tiene una duración de 12 semanas con sesiones semanales y acceso de por vida a los materiales."
  },
  {
    question: "¿Cuánto cuesta?",
    answer: "El programa tiene un costo entre $2,500 y $3,750 USD dependiendo del plan que elijas."
  },
  {
    question: "¿Para quién es este programa?",
    answer: "Para emprendedores que quieren validar su idea antes de construir, evitando malgastar tiempo y dinero."
  },
  // ... más FAQs
];
```

---

### Media/Press Data

```typescript
export const pressLogos = [
  { name: 'Forbes', url: 'https://...', logo: '/images/press/forbes.svg' },
  { name: 'La Nación', url: 'https://...', logo: '/images/press/lanacion.svg' },
  { name: 'Clarín', url: 'https://...', logo: '/images/press/clarin.svg' },
  { name: 'iProfesional', url: 'https://...', logo: '/images/press/iprofesional.svg' },
];
```

---

## 🎯 Optimizaciones Mobile

### Tamaños de Fuente Mobile-First

```css
/* Headings */
h1 {
  font-size: 2rem;      /* 32px mobile */
  md:font-size: 4rem;   /* 64px desktop */
}

h2 {
  font-size: 1.75rem;   /* 28px mobile */
  md:font-size: 3rem;   /* 48px desktop */
}

h3 {
  font-size: 1.5rem;    /* 24px mobile */
  md:font-size: 2rem;   /* 32px desktop */
}

/* Body */
p {
  font-size: 1rem;      /* 16px mobile */
  md:font-size: 1.125rem; /* 18px desktop */
}
```

---

### Spacing Mobile-First

```css
/* Sections */
section {
  padding-y: 3rem;      /* 48px mobile */
  md:padding-y: 5rem;   /* 80px desktop */
}

/* Containers */
.container {
  padding-x: 1.25rem;   /* 20px mobile */
  md:padding-x: 2rem;   /* 32px desktop */
}
```

---

### Grid Responsive

```jsx
{/* 1 columna mobile, 2 tablet, 3 desktop */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Cards aquí */}
</div>

{/* 1 columna mobile, 2 desktop */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  {/* Content aquí */}
</div>
```

---

## ⚡ Performance Tips

### 1. Lazy Loading de Imágenes

```tsx
import Image from 'next/image';

// Hero image (carga inmediata)
<Image src="..." alt="..." priority />

// Imágenes below-the-fold (lazy load)
<Image src="..." alt="..." loading="lazy" />
```

---

### 2. Code Splitting

```tsx
import dynamic from 'next/dynamic';

// Lazy load de componentes pesados
const PodcastPage = dynamic(() => import('./podcast/page'));
```

---

### 3. Optimización de Fonts

```tsx
// En app/layout.tsx
import { Geist, Satoshi } from 'next/font/google'; // Si están en Google Fonts

// O usar @font-face en globals.css para Fontshare
```

---

## 📱 Mobile UX Específico

### Touch Targets

```css
/* Mínimo 44px para touch targets */
button {
  min-height: 44px;
  min-width: 44px;
}
```

---

### Sticky Header Mobile

```tsx
<header className="sticky top-0 z-50 backdrop-blur-md">
  {/* En mobile, ocultar "Aplicar al Programa" */}
  <button className="hidden sm:block">Aplicar</button>
  
  {/* Siempre visible */}
  <button className="block">Entrenamiento Gratuito</button>
</header>
```

---

### Scroll Behavior

```css
html {
  scroll-behavior: smooth;
}

/* Offset para sticky header */
section[id] {
  scroll-margin-top: 80px;
}
```

---

## 🔗 Links Útiles de Referencia

- **Código Actual**: Ver archivos en `/components/`, `/App.tsx`, etc.
- **Estilos**: `/styles/globals.css`
- **Assets**: Todas las imágenes en `figma:asset/...` (necesitan descarga manual)

---

**Última actualización**: Enero 2026
**Versión**: 1.0.0
