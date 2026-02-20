# 🖼️ MAPEO DE IMÁGENES PARA V0 - NOVOLABS

## 🎯 INSTRUCCIONES PARA V0

**IMPORTANTE**: No necesitas el ZIP de Figma. Todas las imágenes están mapeadas aquí con URLs públicas o instrucciones de placeholders.

### Estrategia de Imágenes:

1. **Imágenes de Prensa/Press**: Usar URLs de CDN (ya hosteadas)
2. **Logo de Novolabs**: Usar placeholder o SVG inline
3. **Fotos de Fundadores**: Usar placeholders de UI Avatars
4. **Podcast Episodes**: Usar placeholders de Unsplash con query relevante
5. **Testimoniales**: Usar placeholders de UI Avatars
6. **Club/Eventos**: Usar placeholders de Unsplash

---

## 📦 IMÁGENES POR SECCIÓN

### 1. LOGO DE NOVOLABS

**Ubicación**: Header, Footer

**Opción A - Placeholder**:
```jsx
<div className="h-8 flex items-center gap-2">
  <div className="w-8 h-8 bg-[var(--color-novored)] rounded-lg flex items-center justify-center">
    <span className="text-white font-bold text-sm">N</span>
  </div>
  <span className="text-white font-bold text-xl">NOVOLABS</span>
</div>
```

**Opción B - SVG Inline** (si tienes el logo):
```jsx
<svg width="120" height="32" viewBox="0 0 120 32" fill="none">
  {/* SVG paths aquí */}
</svg>
```

**Opción C - Imagen externa**:
```jsx
<Image 
  src="https://novolabs.xyz/logo.png" 
  alt="Novolabs" 
  width={120} 
  height={32}
/>
```

---

### 2. LOGOS DE PRENSA (URLs REALES)

Estas URLs ya están hosteadas y funcionan:

```typescript
export const pressLogos = {
  forbes: "https://cdn.prod.website-files.com/65c3bc2125baf9326a2181b1/67b5fe1ae4af6e734e864db3_Vector%20(28).svg",
  laNacion: "https://cdn.prod.website-files.com/65c3bc2125baf9326a2181b1/67b5fe046140a88bbe4334aa_Group%20(18).svg",
  clarin: "https://cdn.prod.website-files.com/65c3bc2125baf9326a2181b1/67b5fe239e9cbc67e8d0aa6c_layer1%20(1).svg",
  iProfesional: "https://cdn.prod.website-files.com/65c3bc2125baf9326a2181b1/67b5fe0f951533c4da1b8220_Grupo%20260.svg",
};
```

**Uso en Página de Prensa**:
```jsx
<Image 
  src="https://cdn.prod.website-files.com/65c3bc2125baf9326a2181b1/67b5fe1ae4af6e734e864db3_Vector%20(28).svg"
  alt="Forbes"
  width={120}
  height={40}
  className="h-8 md:h-10 w-auto grayscale hover:grayscale-0 transition-all"
/>
```

---

### 3. ARTÍCULOS DE PRENSA (URLs REALES)

**Forbes Article**:
```jsx
<Image 
  src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/67aea7d0db6c79bb4a1f3f5d_Frame%201686557502.png"
  alt="Forbes Article"
  width={600}
  height={400}
  className="w-full rounded-2xl shadow-lg"
/>
```

**La Nación Logo (artículo)**:
```jsx
<Image 
  src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/67aea5d94a6779d304a484e9_image%20657.svg"
  alt="La Nación"
  width={120}
  height={40}
  className="h-10 mb-8"
/>
```

**La Nación Image**:
```jsx
<Image 
  src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/67aea53ed7714a7e02dfffe6_image%20662.png"
  alt="La Nación Article"
  width={600}
  height={400}
  className="w-full rounded-2xl shadow-lg"
/>
```

**iProfesional Logo**:
```jsx
<Image 
  src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/67aea6b9b060bf32391dde00_image%20658.svg"
  alt="iProfesional"
  width={120}
  height={40}
  className="h-10 mb-8"
/>
```

**iProfesional Image**:
```jsx
<Image 
  src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/67aea6a83e857e1557b07b95_image%20662%20(1).png"
  alt="iProfesional Article"
  width={600}
  height={400}
  className="w-full rounded-2xl shadow-lg"
/>
```

**Forbes Logo (grande)**:
```jsx
<Image 
  src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/67aea76c5651f3c752401e05_Vector%20(27).svg"
  alt="Forbes"
  width={120}
  height={40}
  className="h-10 mb-8"
/>
```

**Clarín Logo**:
```jsx
<Image 
  src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/67aea9fbc36b3a4decdd536d_image%20655.svg"
  alt="Clarín"
  width={100}
  height={32}
  className="h-8 mb-4"
/>
```

**Clarín Image**:
```jsx
<Image 
  src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/67aea9c76dce78c3e57e73ae_Frame%201686557502%20(1).png"
  alt="Clarín Article"
  width={600}
  height={400}
  className="w-full rounded-xl mb-6"
/>
```

**iProUP Image**:
```jsx
<Image 
  src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/67aeaa7f6dce78c3e57f0bb6_Frame%201686557502%20(2).png"
  alt="iProUP Article"
  width={600}
  height={400}
  className="w-full rounded-xl mb-6"
/>
```

**iProUP Logo**:
```jsx
<Image 
  src="https://cdn.prod.website-files.com/65c39c8aee4ff1f31a820ce3/68bee2c8b26737f904a5efcb_iproup%202.svg"
  alt="iProUP"
  width={100}
  height={32}
  className="h-8 mb-4"
/>
```

---

### 4. LOGOS DE PRENSA PEQUEÑOS (Página Sobre Nosotros)

**Forbes**:
```jsx
<Image
  src="https://i.ibb.co/dshP666Q/forbes.png"
  alt="Forbes"
  width={80}
  height={20}
  className="h-3 md:h-5 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
/>
```

**Clarín**:
```jsx
<Image
  src="https://i.ibb.co/MyhSG301/clarin.png"
  alt="Clarín"
  width={80}
  height={20}
  className="h-3 md:h-5 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
/>
```

**La Nación**:
```jsx
<Image
  src="https://i.ibb.co/fTvW07W/la-nacion.png"
  alt="La Nación"
  width={80}
  height={20}
  className="h-3 md:h-5 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
/>
```

**iProfesional**:
```jsx
<Image
  src="https://i.ibb.co/KxhFyyDF/iprofesional.png"
  alt="iProfesional"
  width={80}
  height={20}
  className="h-3 md:h-5 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity"
/>
```

---

### 5. FOTOS DE FUNDADORES

**Opción A - Placeholders de UI Avatars**:

**Tomás Volonté**:
```jsx
<Image 
  src="https://ui-avatars.com/api/?name=Tomas+Volonte&size=200&background=ff3b30&color=fff&bold=true"
  alt="Tomás Volonté"
  width={160}
  height={160}
  className="w-full h-full object-cover"
/>
```

**Damián Sánchez**:
```jsx
<Image 
  src="https://ui-avatars.com/api/?name=Damian+Sanchez&size=200&background=ff3b30&color=fff&bold=true"
  alt="Damián Sánchez"
  width={160}
  height={160}
  className="w-full h-full object-cover"
/>
```

**Opción B - Placeholders de foto realista**:

**Tomás Volonté**:
```jsx
<Image 
  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces"
  alt="Tomás Volonté"
  width={160}
  height={160}
  className="w-full h-full object-cover"
/>
```

**Damián Sánchez**:
```jsx
<Image 
  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=faces"
  alt="Damián Sánchez"
  width={160}
  height={160}
  className="w-full h-full object-cover"
/>
```

---

### 6. FIRMAS DE FUNDADORES

**Opción - SVG de Texto Manuscrito**:

```jsx
{/* Firma Tomás Volonté */}
<div className="w-40 h-20 flex items-center justify-center">
  <svg width="160" height="80" viewBox="0 0 160 80">
    <text 
      x="10" 
      y="50" 
      fontFamily="'Brush Script MT', cursive" 
      fontSize="24" 
      fill="currentColor"
    >
      Tomás Volonté
    </text>
  </svg>
</div>

{/* Firma Damián Sánchez */}
<div className="w-40 h-20 flex items-center justify-center">
  <svg width="160" height="80" viewBox="0 0 160 80">
    <text 
      x="10" 
      y="50" 
      fontFamily="'Brush Script MT', cursive" 
      fontSize="24" 
      fill="currentColor"
    >
      Damián Sánchez
    </text>
  </svg>
</div>
```

---

### 7. PODCAST - EPISODIOS (33 IMÁGENES)

**Estrategia**: Usar Unsplash con queries específicas por categoría

**Helper Function**:
```typescript
function getPodcastThumbnail(episodeNumber: number, category: string) {
  const queries = {
    'Emprendimiento': 'entrepreneur-startup-office',
    'Inversión': 'business-investment-finance',
    'Innovación': 'innovation-technology',
    'Crecimiento Personal': 'personal-growth-mindset',
    'Fintech': 'financial-technology',
    'Inteligencia Artificial': 'artificial-intelligence-tech',
    'Ventas': 'sales-business-meeting'
  };
  
  const query = queries[category] || 'business-professional';
  return `https://images.unsplash.com/photo-${1500000000000 + episodeNumber}?w=600&h=400&fit=crop&q=80`;
}
```

**Ejemplo de Uso**:
```jsx
<Image 
  src={getPodcastThumbnail(33, 'Emprendimiento')}
  alt={episode.guest}
  width={600}
  height={400}
  className="absolute inset-0 w-full h-full object-cover"
/>
```

**O URLs Específicas por Episodio**:

```typescript
const podcastThumbnails = {
  33: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop",
  32: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop",
  31: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  30: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
  // ... usar imágenes profesionales de Unsplash
};
```

---

### 8. TESTIMONIALES - AVATARES

**Usar UI Avatars con nombres reales**:

**Diego Akerman**:
```jsx
<Image 
  src="https://ui-avatars.com/api/?name=Diego+Akerman&size=200&background=1a1a1a&color=fff"
  alt="Diego Akerman"
  width={48}
  height={48}
  className="w-full h-full object-cover"
/>
```

**Magdalena Laplacette**:
```jsx
<Image 
  src="https://ui-avatars.com/api/?name=Magdalena+Laplacette&size=200&background=1a1a1a&color=fff"
  alt="Magdalena Laplacette"
  width={48}
  height={48}
  className="w-full h-full object-cover"
/>
```

**Nahuel Turano**:
```jsx
<Image 
  src="https://ui-avatars.com/api/?name=Nahuel+Turano&size=200&background=1a1a1a&color=fff"
  alt="Nahuel Turano"
  width={48}
  height={48}
  className="w-full h-full object-cover"
/>
```

**Logo de LinkedIn (para testimoniales)**:
```jsx
<svg className="w-6 h-6 opacity-60" viewBox="0 0 24 24" fill="currentColor">
  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
</svg>
```

---

### 9. CLUB - IMÁGENES DE COMUNIDAD/EVENTOS

**Banner Comunidad**:
```jsx
<Image 
  src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop"
  alt="Comunidad Novolabs"
  width={800}
  height={600}
  className="absolute inset-0 w-full h-full object-cover"
/>
```

**Networking Event 1**:
```jsx
<Image 
  src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&h=400&fit=crop"
  alt="Evento de networking"
  width={600}
  height={400}
  className="w-full h-full object-cover"
/>
```

**Networking Event 2**:
```jsx
<Image 
  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&h=400&fit=crop"
  alt="Evento de networking"
  width={600}
  height={400}
  className="w-full h-full object-cover"
/>
```

**Networking Event 3**:
```jsx
<Image 
  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=400&fit=crop"
  alt="Evento de networking"
  width={600}
  height={400}
  className="w-full h-full object-cover"
/>
```

**Masterclass**:
```jsx
<Image 
  src="https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&h=400&fit=crop"
  alt="Masterclass en vivo"
  width={600}
  height={400}
  className="w-full h-full object-cover"
/>
```

**Sesiones en Grupo**:
```jsx
<Image 
  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
  alt="Sesiones en grupo"
  width={600}
  height={400}
  className="w-full h-full object-cover"
/>
```

---

### 10. LOGOS DE BENEFICIOS/HERRAMIENTAS

**Notion**:
```jsx
<svg className="w-8 h-8" viewBox="0 0 100 100" fill="none">
  <path d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z" fill="#000"/>
  <path d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z" fill="#fff"/>
</svg>
```

**Stripe**:
```jsx
<svg className="w-8 h-8" viewBox="0 0 60 25" fill="none">
  <path d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 0 1-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 0 0-4.1-1.06c-.86 0-1.44.25-1.44.93 0 1.85 6.29.97 6.29 5.88z" fill="#6772E5"/>
</svg>
```

**Azure**:
```jsx
<svg className="w-8 h-8" viewBox="0 0 96 96" fill="none">
  <defs>
    <linearGradient id="e399c19f-b68f-429d-b176-18c2117ff73c" x1="-1032.172" x2="-1059.213" y1="145.312" y2="65.426" gradientTransform="matrix(1 0 0 -1 1075 158)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#114a8b"/>
      <stop offset="1" stopColor="#0669bc"/>
    </linearGradient>
    <linearGradient id="ac2a6fc2-ca48-4327-9a3c-d4dcc3256e15" x1="-1023.725" x2="-1029.98" y1="108.083" y2="105.968" gradientTransform="matrix(1 0 0 -1 1075 158)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopOpacity=".3"/>
      <stop offset=".071" stopOpacity=".2"/>
      <stop offset=".321" stopOpacity=".1"/>
      <stop offset=".623" stopOpacity=".05"/>
      <stop offset="1" stopOpacity="0"/>
    </linearGradient>
    <linearGradient id="a7fee970-a784-4bb1-af8d-63d18e5f7db9" x1="-1027.165" x2="-997.482" y1="147.642" y2="68.561" gradientTransform="matrix(1 0 0 -1 1075 158)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#3ccbf4"/>
      <stop offset="1" stopColor="#2892df"/>
    </linearGradient>
  </defs>
  <path fill="url(#e399c19f-b68f-429d-b176-18c2117ff73c)" d="M33.338 6.544h26.038l-27.03 80.087a4.152 4.152 0 0 1-3.933 2.824H8.149a4.145 4.145 0 0 1-3.928-5.47L29.404 9.368a4.152 4.152 0 0 1 3.934-2.825z"/>
  <path fill="#0078d4" d="M71.175 60.261h-41.29a1.911 1.911 0 0 0-1.305 3.309l26.532 24.764a4.171 4.171 0 0 0 2.846 1.121h23.38z"/>
  <path fill="url(#ac2a6fc2-ca48-4327-9a3c-d4dcc3256e15)" d="M33.338 6.544a4.118 4.118 0 0 0-3.943 2.879L4.252 83.917a4.14 4.14 0 0 0 3.908 5.538h20.787a4.443 4.443 0 0 0 3.41-2.9l5.014-14.777 17.91 16.705a4.237 4.237 0 0 0 2.666.972H81.24L71.024 60.261l-29.781.007L59.47 6.544z"/>
  <path fill="url(#a7fee970-a784-4bb1-af8d-63d18e5f7db9)" d="M66.595 9.364a4.145 4.145 0 0 0-3.928-2.82H33.648a4.146 4.146 0 0 1 3.928 2.82l25.184 74.62a4.146 4.146 0 0 1-3.928 5.472h29.02a4.146 4.146 0 0 0 3.927-5.472z"/>
</svg>
```

**Webflow**:
```jsx
<svg className="w-8 h-8" viewBox="0 0 200 200" fill="none">
  <path d="M170.8 161.8c-8.2 8.2-21.6 8.2-29.8 0L100 120.9l41-41c8.2-8.2 8.2-21.6 0-29.8-8.2-8.2-21.6-8.2-29.8 0L70.3 91l-41-41c-8.2-8.2-21.6-8.2-29.8 0-8.2 8.2-8.2 21.6 0 29.8L40.4 121 .5 161c-8.2 8.2-8.2 21.6 0 29.8 8.2 8.2 21.6 8.2 29.8 0l41-41 41 41c8.2 8.2 21.6 8.2 29.8 0 8.2-8.2 8.2-21.6 0-29.8l-41-41 41-41c8.2-8.2 8.2-21.6 0-29.8z" fill="#4353FF"/>
</svg>
```

---

### 11. ICONOS DE LUCIDE-REACT

Usar estos iconos del paquete `lucide-react`:

```typescript
import { 
  CheckCircle,      // Checkmarks, success
  XCircle,          // Errores, problemas
  AlertCircle,      // Alertas
  TrendingUp,       // Crecimiento
  TrendingDown,     // Decline
  Users,            // Comunidad
  Zap,              // Velocidad, energía
  Target,           // Objetivos
  Rocket,           // Lanzamiento
  Clock,            // Tiempo
  DollarSign,       // Dinero
  Star,             // Rating
  ChevronDown,      // Accordion
  ChevronRight,     // Paginación
  ChevronLeft,      // Paginación
  ExternalLink,     // Links externos
  Instagram,        // Redes
  Linkedin,         // Redes
  Youtube,          // Redes
  Video,            // Video content
  FileText,         // Documentos
  X,                // Close, error
  Menu,             // Hamburger menu
} from 'lucide-react';
```

---

## 🎨 COMPONENTE HELPER PARA IMÁGENES

Crea este componente para manejar placeholders automáticamente:

```typescript
// components/ui/ImagePlaceholder.tsx
'use client';

import Image from 'next/image';

interface ImagePlaceholderProps {
  src?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  fallbackType?: 'avatar' | 'business' | 'tech' | 'event';
}

export function ImagePlaceholder({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fallbackType = 'business'
}: ImagePlaceholderProps) {
  
  const getFallbackUrl = () => {
    if (src) return src;
    
    const queries = {
      avatar: 'professional-portrait-headshot',
      business: 'business-meeting-office',
      tech: 'technology-innovation-startup',
      event: 'conference-networking-event'
    };
    
    const query = queries[fallbackType];
    return `https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=${width}&h=${height}&fit=crop&q=80`;
  };
  
  return (
    <Image 
      src={getFallbackUrl()}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
    />
  );
}
```

**Uso**:
```jsx
<ImagePlaceholder 
  alt="Evento de networking"
  width={600}
  height={400}
  fallbackType="event"
  className="w-full h-full object-cover"
/>
```

---

## 📋 CHECKLIST DE IMÁGENES

### Landing Principal:
- [ ] Logo Novolabs (header/footer)
- [ ] Hero background (opcional, puede ser solo gradiente)
- [ ] Fotos fundadores (2 - Tomás y Damián)
- [ ] Firmas fundadores (2 - SVG o imagen)
- [ ] Logos de prensa (4 - Forbes, La Nación, Clarín, iProfesional)
- [ ] Testimoniales avatares (3+)

### Página Prensa:
- [ ] Logos de medios grandes (4)
- [ ] Imágenes de artículos featured (5)
- [ ] Grid de medios adicionales (placeholders OK)

### Página Podcast:
- [ ] 33 thumbnails de episodios (usar placeholders de Unsplash)
- [ ] Background pattern (opcional)

### Página Club:
- [ ] Banner de comunidad
- [ ] Fotos de eventos (3)
- [ ] Foto de masterclass
- [ ] Foto de sesiones en grupo
- [ ] Logos de herramientas/beneficios (8-10)
- [ ] Avatares de testimoniales (3)

### Página Sobre Nosotros:
- [ ] Logos de prensa pequeños (4)
- [ ] Fotos fundadores (2)
- [ ] Firmas fundadores (2)

---

## 🚀 INSTRUCCIÓN FINAL PARA V0

**Para v0**: Usa EXACTAMENTE estas URLs y placeholders. No necesitas el ZIP de Figma. Todas las imágenes críticas están mapeadas aquí. Para cualquier imagen que no tenga URL específica, usa los placeholders de Unsplash con las queries sugeridas.

**Prioridad de imágenes**:
1. ✅ Logo de Novolabs (placeholder SVG está bien)
2. ✅ Logos de prensa (URLs reales proporcionadas)
3. ✅ Fotos de fundadores (usar placeholders)
4. ✅ Thumbnails de podcast (usar placeholders de Unsplash)
5. ✅ Avatares de testimoniales (usar UI Avatars)

**Todas las imágenes deben ser responsive** y usar Next.js `<Image>` component con `width` y `height` especificados.

