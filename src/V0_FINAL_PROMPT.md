# 🚀 PROMPT FINAL PARA V0 - NOVOLABS (SIN ZIP)

## 📦 ARCHIVOS QUE DEBES ADJUNTAR A V0

1. ✅ **V0_COMPLETE_PROMPT.md** - Especificaciones completas del proyecto
2. ✅ **V0_IMAGE_MAPPING.md** - Mapeo de todas las imágenes (URLs y placeholders)
3. ✅ **V0_CODE_SNIPPETS.md** - Código copy-paste ready (opcional, pero útil)

**NO NECESITAS** el archivo ZIP de Figma. Todo está documentado.

---

## 💬 PROMPT PARA V0

Copia y pega esto en v0:

```
Hola v0! Necesito que construyas una landing page completa y premium para 
"Novolabs Startup School" en Next.js 15 con App Router.

📦 ARCHIVOS ADJUNTOS:
He adjuntado 2 archivos markdown con TODAS las especificaciones:
1. V0_COMPLETE_PROMPT.md - Especificaciones completas
2. V0_IMAGE_MAPPING.md - Mapeo de imágenes (URLs y placeholders)

🎯 OBJETIVO:
Construir un sitio de 5 páginas para un producto high-ticket ($2,500-$3,750 USD) 
de validación de startups. El sitio recibirá $10,000 USD semanales en ads con 
90% de tráfico MÓVIL, por lo que la experiencia mobile debe ser PREMIUM.

⚡ PRIORIDADES CRÍTICAS:
1. Mobile-first design (90% del tráfico)
2. Colores exactos: #ff3b30 (rojo Novolabs), #c6ff3e (verde Novolabs)
3. Tipografías: GEIST para headings, SATOSHI para body (desde Fontshare)
4. CTAs correctos:
   - "Aplicar al Programa" → https://info.novolabs.xyz/widget/form/kuNds4kU7sArnpVpkRI7
   - "Entrenamiento Gratuito" → https://www.curso-sistema-de-validacion-paga.novolabs.xyz/registro
5. Navbar sticky con backdrop blur en TODAS las páginas
6. En mobile: ocultar botón "Aplicar al Programa" del navbar (solo "Entrenamiento Gratuito")

📄 ESTRUCTURA (5 PÁGINAS):
- / (Landing principal con 12 secciones)
- /prensa (Cobertura de medios)
- /podcast (NovoTalks - 33 episodios con filtros y paginación)
- /club (Club de Fundadores - única página con fondo BLANCO)
- /sobre-nosotros (Historia de fundadores)

🖼️ IMÁGENES:
NO tengo ZIP de Figma. Usa V0_IMAGE_MAPPING.md donde están TODAS las URLs 
de imágenes hosteadas (logos de prensa, artículos) y placeholders para el resto.

Para imágenes sin URL específica:
- Logos/avatares: usar UI Avatars o SVG placeholders
- Fotos de equipo/eventos: usar Unsplash con queries relevantes
- Thumbnails de podcast: usar Unsplash

🎨 DISEÑO:
- Dark theme con background gradient radial
- Cards con hover effects premium
- Shadows suaves (--shadow-soft, --shadow-subtle)
- Border radius redondeados (--radius-lg: 18px)
- Transiciones smooth en todos los hover states

📱 RESPONSIVE:
- Headings: text-4xl (mobile) → md:text-6xl → lg:text-7xl
- Sections: py-20 (mobile) → md:py-32
- Grids: grid-cols-1 → md:grid-cols-2 → lg:grid-cols-3
- Touch targets: mínimo 44px

✅ COMPONENTES CLAVE:
Usa las especificaciones exactas de V0_COMPLETE_PROMPT.md para:
- Header (sticky navbar)
- Footer
- Button (4 variantes)
- SectionHeader
- BulletCard
- TestimonialCard
- FAQItem (accordion)

📖 CONTENIDO:
Landing principal tiene 12 secciones (en orden):
1. Hero
2. Identification (pain points)
3. Paradigm Shift (antes vs después)
4. Validation System (CORE - timeline 12 semanas)
5. Benefits
6. Story (fundadores)
7. Program (qué incluye)
8. Modules (contenido)
9. Social Proof & Reviews
10. Free Training
11. FAQ
12. Closing CTA

Cada sección tiene código JSX completo en V0_COMPLETE_PROMPT.md

🔍 SEO:
- Metadata en cada página
- Structured data (JSON-LD) en landing
- Open Graph tags
- Twitter Cards

Por favor, construye el proyecto siguiendo EXACTAMENTE las especificaciones 
de los archivos adjuntos. Prioriza la experiencia mobile premium.

¿Empezamos con la configuración base (globals.css, Header, Footer, Button)?
```

---

## 🎯 ESTRATEGIA DE IMPLEMENTACIÓN EN V0

### **TURN 1: Setup Base**

```
Perfecto. Empecemos con la configuración base del proyecto.

Crea:
1. app/globals.css - Copia EXACTAMENTE de V0_COMPLETE_PROMPT.md sección "GLOBALS.CSS COMPLETO"
2. app/layout.tsx - Con metadata completa y structured data
3. components/layout/Header.tsx - Sticky navbar con backdrop blur
4. components/layout/Footer.tsx - Con links de navegación
5. components/ui/Button.tsx - Con las 4 variantes

Usa las especificaciones EXACTAS de V0_COMPLETE_PROMPT.md

IMPORTANTE para el Header:
- En mobile (< sm): ocultar botón "Aplicar al Programa"
- Botón "Entrenamiento Gratuito" siempre visible
- Usar placeholder SVG para logo de Novolabs (ver V0_IMAGE_MAPPING.md)
```

---

### **TURN 2: Componentes UI**

```
Ahora crea los componentes UI restantes:

1. components/ui/SectionHeader.tsx
2. components/ui/BulletCard.tsx
3. components/ui/TestimonialCard.tsx
4. components/ui/FAQItem.tsx

Usa las especificaciones exactas de V0_COMPLETE_PROMPT.md sección "COMPONENTES PRINCIPALES"

Para los iconos, usa lucide-react:
- CheckCircle, XCircle, TrendingUp, Users, Zap, Clock, DollarSign, Star, etc.
```

---

### **TURN 3: Landing Principal (Parte 1)**

```
Crea app/page.tsx con las primeras 6 secciones:

1. Hero Section
2. Identification Section (pain points con X rojos)
3. Paradigm Shift Section (antes vs después, tabla comparativa)
4. Validation System Section (CORE - timeline de 12 semanas)
5. Benefits Section (grid de BulletCards)
6. Story Section (fundadores con stats)

Usa el código JSX COMPLETO de cada sección que está en V0_COMPLETE_PROMPT.md 
secciones "SECCIÓN 1" a "SECCIÓN 6"

Para las imágenes de fundadores, usa placeholders de V0_IMAGE_MAPPING.md
```

---

### **TURN 4: Landing Principal (Parte 2)**

```
Continúa app/page.tsx con las secciones restantes:

7. Program Section (card del programa con pricing)
8. Modules Section (grid de 8 módulos)
9. Social Proof & Reviews Section (testimoniales + logos prensa)
10. Free Training Section (lead magnet)
11. FAQ Section (accordion con 10 preguntas)
12. Closing CTA Section (con decorative blurs)

Usa el código JSX COMPLETO de V0_COMPLETE_PROMPT.md secciones "SECCIÓN 7" a "SECCIÓN 12"

Para logos de prensa, usa las URLs REALES de V0_IMAGE_MAPPING.md
Para testimoniales, usa placeholders de UI Avatars
```

---

### **TURN 5: Página Prensa**

```
Crea app/prensa/page.tsx

Estructura (de V0_COMPLETE_PROMPT.md sección "PÁGINA: /prensa"):
1. Hero con logos de medios
2. Featured articles (La Nación, iProfesional, Forbes)
3. Articles grid (Clarín, iProUP)
4. All media list
5. CTA para contacto

USA LAS URLs REALES de V0_IMAGE_MAPPING.md para:
- Logos de prensa
- Imágenes de artículos

Todas las URLs están en la sección "LOGOS DE PRENSA" y "ARTÍCULOS DE PRENSA" 
de V0_IMAGE_MAPPING.md
```

---

### **TURN 6: Página Podcast**

```
Crea app/podcast/page.tsx

Características:
- 33 episodios con data completa
- Filtros por categoría (Emprendimiento, Inversión, Fintech, IA, etc.)
- Paginación (6 episodios por página)
- Cards con imagen de invitado como background + gradient overlay

Usa la estructura EXACTA de V0_COMPLETE_PROMPT.md sección "PÁGINA: /podcast"

Para thumbnails de episodios, usa placeholders de Unsplash 
(helper function en V0_IMAGE_MAPPING.md sección "PODCAST - EPISODIOS")

Los 33 episodios con data completa están en el código actual de Podcast.tsx
que puedes ver en V0_COMPLETE_PROMPT.md
```

---

### **TURN 7: Página Club**

```
Crea app/club/page.tsx

IMPORTANTE: Esta es la ÚNICA página con fondo BLANCO

Estructura:
1. Hero (fondo blanco)
2. Stats Section (fondo oscuro) - 300+ miembros, 18 países, etc.
3. Eventos de Networking (fondo blanco, grid de 3 fotos)
4. Masterclass & Sesiones (2 cards: 1 gris claro, 1 oscura)
5. Beneficios (visualización con logos de herramientas)
6. Testimonios (fondo negro)
7. CTA Final (fondo blanco)

Usa la estructura de V0_COMPLETE_PROMPT.md sección "PÁGINA: /club"

Para fotos de eventos, usa placeholders de Unsplash (V0_IMAGE_MAPPING.md sección "CLUB")
```

---

### **TURN 8: Página Sobre Nosotros**

```
Crea app/sobre-nosotros/page.tsx

Estructura:
1. Hero (fondo negro) - "No somos 'otra escuela más'"
2. Press logos pequeños (fondo negro)
3. Carta de fundadores (fondo #fafafa, container blanco tipo letter)
   - Q&A: ¿Cómo llegamos?, ¿Para quién NO es?, ¿Para quién es?, ¿Qué esperamos?
4. Fotos y firmas de Tomás Volonté y Damián Sánchez

Usa la estructura de V0_COMPLETE_PROMPT.md sección "PÁGINA: /sobre-nosotros"

Para logos pequeños de prensa, usa las URLs de V0_IMAGE_MAPPING.md sección 
"LOGOS DE PRENSA PEQUEÑOS"

Para fotos de fundadores, usa placeholders de UI Avatars
Para firmas, usa SVG de texto manuscrito (ver V0_IMAGE_MAPPING.md)
```

---

### **TURN 9: Revisión Final y Optimización**

```
Revisión final del proyecto:

✅ Checklist:
1. Todas las páginas tienen Header sticky y Footer
2. Navbar en mobile oculta "Aplicar al Programa"
3. Colores exactos: #ff3b30 (rojo), #c6ff3e (verde)
4. Tipografías: GEIST (headings), SATOSHI (body)
5. CTAs apuntan a URLs correctas
6. Metadata en todas las páginas
7. Responsive en todas las secciones
8. Hover effects en cards y buttons
9. Imágenes con Next.js Image component
10. Priority en imágenes above-the-fold

Haz los ajustes necesarios para que TODO sea mobile-first premium.
```

---

## 📊 RESUMEN DE ARCHIVOS

### Archivos que tienes que adjuntar a v0:

1. ✅ **V0_COMPLETE_PROMPT.md** (58KB)
   - Especificaciones completas
   - Código JSX de todas las secciones
   - Componentes con props y uso
   - Estructura de 5 páginas

2. ✅ **V0_IMAGE_MAPPING.md** (25KB)
   - URLs reales de logos de prensa
   - URLs de imágenes de artículos
   - Placeholders para podcast, testimoniales, etc.
   - Helper functions para imágenes

3. 📄 **V0_CODE_SNIPPETS.md** (opcional, 20KB)
   - Código adicional copy-paste ready
   - Útil para referencia rápida

### Total: ~103KB (muy por debajo del límite de 50MB)

---

## 🎯 VENTAJAS DE ESTE APPROACH

✅ No necesitas ZIP de Figma (que pesa más de 50MB)
✅ Todas las imágenes críticas tienen URLs reales
✅ Placeholders inteligentes para el resto
✅ Código completo y detallado
✅ Instrucciones paso a paso
✅ Mobile-first desde el inicio
✅ SEO y metadata incluidos

---

## 🚀 SIGUIENTE PASO

1. **Adjunta** a v0:
   - V0_COMPLETE_PROMPT.md
   - V0_IMAGE_MAPPING.md

2. **Pega** el prompt inicial que está arriba

3. **Sigue** la estrategia incremental (Turn 1 → Turn 9)

4. **Verifica** que todo se vea premium en mobile

---

## 💡 TIPS ADICIONALES

### Si v0 pregunta por imágenes específicas:
- Dirígelo a V0_IMAGE_MAPPING.md
- Usa las URLs reales que están ahí
- Para placeholders, sugiere Unsplash o UI Avatars

### Si v0 necesita clarificación de diseño:
- Dirígelo a V0_COMPLETE_PROMPT.md
- Todas las secciones tienen código completo
- Tamaños, colores, spacing todo está especificado

### Si algo no se ve bien en mobile:
- Recuerda: 90% del tráfico es mobile
- Prioriza siempre mobile sobre desktop
- Todos los tamaños están mobile-first

---

**¿Listo para empezar con v0?** 🚀

