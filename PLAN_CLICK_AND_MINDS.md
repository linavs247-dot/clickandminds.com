# PLAN MAESTRO — Click & Minds Website Rebuild

> Guarda este archivo en la raíz de tu carpeta del proyecto (Click and Minds website).
> Claude Code debe leerlo COMPLETO antes de escribir código.
> Todo el copy del sitio va en INGLÉS. Este plan está en español para la dueña del proyecto.

---

## 1. OBJETIVO

Reconstruir clickandminds.com para que se sienta como el homepage de una startup de IA de mil millones de dólares: elegante, premium, inmersivo, pulido. NO como un website de agencia genérica. El visitante debe entrar y pensar "yo necesito un agente de IA para mi negocio".

Target: business owners, founders, creators, freelancers y emprendedores.

Dos páginas principales:
1. **Home / AI Agents** — el servicio de ticket alto (agentes de IA, automatizaciones, herramientas internas). Desde $1,000. Sistemas completos multi-agente: $5,000–$15,000+.
2. **LinkedIn All-in-One** — servicio de contenido LinkedIn done-for-you en planes mensuales ($2,000 / $3,000 / $4,000) + Premium Add-Ons.

Todos los CTAs ("Book a Call", "Apply", "Contact") llevan a:
`https://docs.google.com/forms/d/e/1FAIpQLSeU1Tlbgs44nVuqGhQkTIkfWYbjajvwHgcYnqatnHfpDwWWrQ/viewform`
(abrir en pestaña nueva, `target="_blank" rel="noopener"`)

---

## 2. STACK TÉCNICO

- **Framework:** Astro + React islands (o Next.js 14 App Router si Claude Code lo prefiere; Astro es ideal aquí: sitio de contenido, performance perfecta, React solo donde hay interactividad).
- **Styling:** Tailwind CSS con design tokens custom (paleta de marca abajo).
- **Animaciones:** Framer Motion (React islands) + CSS para lo simple. Scroll animations con IntersectionObserver o Framer `whileInView`.
- **Fuentes:** Google Fonts — Sora (800 headlines), Inter (body), JetBrains Mono (eyebrows/labels), Caveat (highlights escritos a mano).
- **Deploy:** Vercel o Netlify (el que ya use el dominio actual).
- **Videos:** los 3 archivos "video 1 demo", "video 2 demo", "video 3 demo" de la carpeta. Comprimirlos a MP4 H.264 + WebM, `autoplay muted loop playsinline`, lazy load, poster frame.

Requisitos no negociables: responsive total, Lighthouse 90+, accesible (contraste AA, focus states, alt text), SEO (meta tags, OG images, sitemap), componentes modulares y reutilizables, smooth scrolling.

---

## 3. SISTEMA DE DISEÑO (BRAND)

### Paleta oficial (crear como tokens de Tailwind)

| Token | Hex | Uso |
|---|---|---|
| purple-primary | #38206F | Color principal de marca |
| lavender | #B9A8FF | Acentos suaves, fondos de cards |
| lime | #EFFF73 | FIRMA de la marca. Aparece SIEMPRE como acento cruzado (subrayados, tachados a mano, highlights, botones clave) |
| white-soft | #FAFAF8 | Fondo modo día |
| paper-dotted | #F6F4EF | Fondo con patrón de puntos (modo día) |
| navy-dark | #101426 | Fondo modo noche |
| dark-gradient | #20113F | Gradientes oscuros |
| neon-purple | #8F5CFF | Neón (modo noche) |
| electric-pink | #E04DFF | Neón (modo noche) |
| neon-blue | #47C7FF | Neón (modo noche) |

### Dos modos visuales
- **Modo día:** crema con patrón dotted (#F6F4EF) + morado #38206F + lima #EFFF73.
- **Modo noche:** navy #101426 + gradientes #20113F + neones (#8F5CFF, #E04DFF, #47C7FF) + lima.
- Implementar toggle día/noche en el navbar (persistir en localStorage NO — usar clase en `<html>` y una variable en memoria o cookie; en Astro/Next un simple data-theme funciona). El lima es la firma en AMBOS modos.

### Tipografía
- H1/H2: Sora 800, tracking apretado, tamaños grandes (clamp fluido).
- Body: Inter 400/500.
- Eyebrows/labels tipo `// agent_build.spec`: JetBrains Mono, uppercase, letter-spacing.
- Highlights a mano (palabras subrayadas/tachadas en lima): Caveat, o SVG strokes animados.

### Reglas de copy (MUY IMPORTANTE)
- Todo en inglés.
- **PROHIBIDO usar guiones em/en (— y –) en el copy.** Reemplazar por punto, coma, dos puntos o reescribir la frase. Esto aplica a TODO el texto visible del sitio. Hacer un check final buscando "—" y "–" en todos los archivos.
- Tono: directo, confiado, humano. Frases cortas. Nada que suene a IA genérica.

### Animaciones (tasteful, nada flashy)
Fade in on scroll, staggered reveals, floating gradients, hover effects suaves en cards, glass reflections, botones animados, contadores animados, glow suave en elementos clave, mouse parallax sutil en el hero, transiciones de página suaves. Respetar `prefers-reduced-motion`.

---

## 4. ESTRUCTURA DEL SITIO

### Navegación (navbar sticky, glass effect al scrollear)
- Logo Click & Minds (izquierda)
- Links: **AI Agents** (home) | **LinkedIn Studio** (página 2)
- Toggle día/noche
- CTA botón lima: **Book a Call** → Google Form

### Footer (compartido)
- Logo + tagline corto
- Links a las 2 páginas
- Íconos de redes sociales (usar los assets de la carpeta; los links de contacto están en el archivo md de la carpeta del escritorio)
- CTA final pequeño
- © 2026 Click & Minds · Content & AI Systems Studio

---

## 5. PÁGINA 1 — HOME / AI AGENTS

Orden de secciones (usar el copy base de abajo, mejorándolo si suena más profesional):

### 5.1 Hero
- Eyebrow (JetBrains Mono): `AI AGENTS & AUTOMATION FOR BUSINESS OWNERS`
- H1: **HIRE AI EMPLOYEES.** (con una palabra destacada en lima estilo Caveat/subrayado a mano)
- Sub: "Stop hiring for repetitive work. Start building a business that runs itself. We design custom AI Agents that research, write, organize, sell, and support your business 24/7. Built for creators, founders, freelancers, and business owners."
- CTA primario lima: **Book a Strategy Call**
- CTA secundario ghost: **See What We Build** (anchor)
- **VIDEO 1 DEMO integrado en el hero**: dentro de un mockup de dispositivo/ventana futurista con glow, o como fondo parcial con overlay de gradiente. Autoplay muted loop.
- Mouse parallax sutil en gradientes flotantes de fondo.

### 5.2 Pain Section — "YOUR BUSINESS IS GROWING. YOUR TIME ISN'T."
- Lista de tareas que consumen tiempo (writing content, researching competitors, following up leads, replying emails, organizing projects, creating proposals, managing clients) presentada como cards pequeñas o ticker animado.
- Cierre: "None of these tasks grow your business."

### 5.3 Shift — "WHAT IF YOU HAD A DIGITAL TEAM?"
- "Not another tool. Not another chatbot. A team of AI employees trained to work inside your business. Available 24/7. Fast. Consistent. Built around your workflows."
- Aquí puede ir el **VIDEO 2 DEMO** como pieza visual lateral o full-width con glass frame.

### 5.4 ⭐ AI EMPLOYEE GALLERY (CENTERPIECE DEL SITIO)
La sección estrella. Cards interactivas elegantes, una por agente:

1. **AI Content Strategist** — research trending topics, unlimited ideas, monthly calendars, repurposing.
2. **AI Sales Assistant** — find qualified leads, personalized outreach, auto follow-up, CRM updates, "book meetings while you sleep".
3. **AI Client Success Manager** — onboarding, FAQs, scheduling, deliverable tracking.
4. **Content Dashboard** — "One place to plan, write, and ship content" (el que ya está en la web actual, se vende bien).
5. Card final: **Any Internal Tool You Need** → CTA.

Cada card incluye: nombre del empleado, descripción corta, status indicator animado ("● Active" / "Working…" con pulso), mini interfaz simulada, workflow animado en loop, notificaciones animadas, progress bars, tareas completándose, resultados generándose en tiempo real.

Al hacer hover: la card se expande, revela detalles adicionales, las animaciones se enriquecen, el workflow se ve en movimiento. Objetivo: que el visitante QUIERA uno inmediatamente.

### 5.5 INTERACTIVE PRODUCT DEMOS
Mockups no funcionales pero con UX real (React components con datos fake y animaciones):
- **Content Writer Agent** (chat + draft generándose con efecto typing)
- **Content Dashboard** (pipeline kanban + gráfica de performance + "what to write next")
- **Proposal Generator** (call notes → proposal apareciendo sección por sección)
- **Lead Generator** (tabla de leads llenándose + scores + follow-up status)
- **Special Reports / Dashboards** (gráficas animadas con counters)

Presentarlos en tabs o en un carrusel horizontal con snap. Cada demo dentro de un browser/app frame con glass effect. **VIDEO 3 DEMO** puede cerrar esta sección o ir antes del pricing.

### 5.6 HOW IT WORKS (proceso, MUY importante mostrarlo)
4 pasos con línea de progreso animada al scroll:
1. We map your workflow.
2. We design your AI employee.
3. We customize it to your brand, tone, and tools.
4. Your AI employee starts working for you.

### 5.7 WHY BUSINESSES ARE SWITCHING
Checklist con checks en lima + counters animados:
- Save 10 to 40 hours every month
- Eliminate repetitive work
- Scale without hiring more people
- Stay consistent
- Focus on high-impact work
Reusar métricas de la web actual: "4h → 15min typical task time", "100% system ownership, no agency lock-in", "1:1 direct build with the operator".

### 5.8 PRICING / WAYS TO WORK
- **Project Build** — From $1,000 per project. Un workflow completo, scoped, built, handed off.
- **Complete AI Systems** — $5,000 to $15,000+. Sistemas multi-agente completos. (Sí colocarlo: ancla el valor y filtra clientes serios. Presentarlo como "for businesses ready to automate multiple workflows".)
- **Retainer** — Monthly, custom scope.
Todos los botones → Google Form.

### 5.9 LIMITED CLIENT SPOTS (urgencia)
"We don't build hundreds of generic automations. Every AI employee is carefully designed around your business. We only accept a limited number of new clients each month. When our calendar is full, applications close."
CTA grande: **Apply to Work With Us**

### 5.10 CTA final + Footer

---

## 6. PÁGINA 2 — LINKEDIN STUDIO (All-in-One)

Referencia de modelo de negocio: pblaunch.com (ella lo hace para Instagram; nosotros para LinkedIn, con MÁS valor: carousels + infografías + video edits). Reusar y mejorar el copy de content writing de la web actual.

### 6.1 Hero
- Eyebrow: `DONE FOR YOU LINKEDIN CONTENT`
- H1 tipo: **Content that sounds like you, built for you.** (palabra clave en lima Caveat)
- Sub: strategy, ideation, research, scripting, design, publishing. "You show up, grow your authority, and close clients."
- CTA: **Book a Free Strategy Call**

### 6.2 What's Included Free
Brand Strategy Document, Swipe File Starter Kit, Profile Optimization Guide (cards estilo `// brand_strategy.doc` en JetBrains Mono, como la web actual).

### 6.3 PRICING — 3 planes mensuales
Cards con jerarquía clara de valor creciente (el salto de valor debe VERSE):

- **Plan 1 — $2,000/mo**: base de posts escritos + calendar + strategy + publishing.
- **Plan 2 — $3,000/mo** (Most Popular, borde lima): todo lo anterior + carousels + infografías diseñadas + optimization guides.
- **Plan 3 — $4,000/mo**: TODO + **video edits** + más carousels/infografías + lead magnets incluidos.

En el plan 3 agregar una línea de justificación de valor tipo: "Hiring a designer, a video editor, and a ghostwriter separately costs $6,000+ per month. And consistency is what actually compounds on LinkedIn."
(Claude Code: ajustar los deliverables exactos por plan basándose en los paquetes de la web actual: 12/20/30 posts, y escalar carousels, infografías y lead magnets entre planes.)

### 6.4 Premium Add-Ons (sin precio, CTA "Contact Us")
- **Content Distribution**: adaptamos y distribuimos tu contenido a otras redes.
- **Lead Magnets — "Turn Your Audience Into Qualified Leads"**: PDF Guides, Playbooks, Checklists, Swipe Files, Templates, Notion Resources, Mini Courses, Email Courses, Workbooks, Resource Libraries, Interactive Tools, AI-Powered Resources. "Available as an add-on to any LinkedIn Authority package. Custom pricing based on scope and complexity."

### 6.5 Sección visual con frase fuerte
**"Don't Just Build an Audience. Build an Email List You Actually Own."**
"Social media platforms change. Algorithms change. Your email list is one of the few marketing assets that truly belongs to you. That's why we don't just create content. We help you build a complete authority and lead generation system."
Fondo modo noche con neones aunque el resto esté en modo día (sección de contraste dramático).

### 6.6 Process (4 pasos) + FAQ (reusar los de la web actual) + puente al servicio de AI Agents ("Ready to automate it later? That's what our AI Systems are for.") + CTA final + Footer

---

## 7. ESTRUCTURA DE ARCHIVOS (propuesta)

```
/src
  /components
    /ui          → Button, Card, Badge, SectionHeading, Eyebrow, Counter, ThemeToggle
    /layout      → Navbar, Footer, Section
    /animations  → FadeIn, Stagger, Parallax, GlowOrb
    /demos       → AgentCard, ContentDashboardDemo, ProposalGenDemo,
                   LeadGenDemo, ContentWriterDemo, DemoFrame (browser mockup)
  /pages (o /app)
    index        → AI Agents (home)
    linkedin     → LinkedIn Studio
  /styles        → tokens, patrón dotted, gradientes
/public
  /videos        → video-1.mp4/webm, video-2, video-3 + posters
  /brand         → logos, íconos de redes, assets de la carpeta
```

---

## 8. FASES DE DESARROLLO (para ejecutar con Claude Code en orden)

**Fase 0 — Setup (30 min)**
Inicializar proyecto, Tailwind con tokens de marca, fuentes, layout base, deploy preview en Vercel. Revisar los HTML de referencia que están en la carpeta.

**Fase 1 — Design System (1 sesión)**
Componentes UI base, modo día/noche, patrón dotted, botones lima con animación, eyebrows mono, highlights Caveat. Página de muestra /styleguide para validar visualmente ANTES de construir páginas.
✅ Checkpoint: la dueña aprueba el look del styleguide.

**Fase 2 — Home estructura + copy (1-2 sesiones)**
Todas las secciones de la Página 1 con copy final en inglés (sin guiones largos), videos integrados, layout responsive. Sin demos interactivos todavía (placeholders).
✅ Checkpoint: aprobar copy y estructura.

**Fase 3 — AI Employee Gallery + Demos interactivos (2-3 sesiones)**
La parte más laboriosa. Construir AgentCards animadas y los 4-5 demos mock. Un demo a la vez, empezando por Content Dashboard (ya se vende bien).
✅ Checkpoint por demo.

**Fase 4 — Página LinkedIn (1 sesión)**
Toda la página 2 con pricing, add-ons y sección "Email List You Own".

**Fase 5 — Polish (1 sesión)**
Animaciones de scroll finas, parallax, page transitions, hover states, contadores.

**Fase 6 — QA + Launch**
- Buscar y eliminar todo "—" y "–" del copy
- Verificar que TODOS los CTAs apuntan al Google Form con target _blank
- Lighthouse 90+ en performance/SEO/a11y
- Test móvil real (iPhone + Android)
- Meta tags, OG image, favicon, sitemap
- Conectar dominio clickandminds.com

---

## 9. PROMPT INICIAL SUGERIDO PARA CLAUDE CODE

Copia esto en la terminal dentro de la carpeta del proyecto:

```
Lee el archivo PLAN_CLICK_AND_MINDS.md completo. También revisa los archivos
HTML de referencia y los assets de la carpeta. Vamos a ejecutar el plan por
fases. Empieza con la Fase 0 y la Fase 1: setup del proyecto y design system
con la página /styleguide. No avances a la Fase 2 hasta que yo apruebe el
styleguide. Recuerda: todo el copy en inglés y sin guiones em dash.
```

---

## 10. DECISIONES YA TOMADAS (no preguntar de nuevo)

- Sí se muestra el rango $5,000–$15,000+ para sistemas completos.
- 2 páginas, no más. Nada de página "About" ni newsletter por ahora.
- El lima #EFFF73 es la firma visual y aparece en ambos modos.
- Los 3 videos van integrados (hero + 2 secciones más).
- El filtro de clientes es el Google Form; no hay Calendly ni email forms en el sitio.
- La web actual tiene buen copy base; se reutiliza y mejora, no se descarta.
