# REDESIGN PLAN — Click & Minds Premium Overhaul (v2)

> Save this file in the project root. Claude Code: read this ENTIRE
> file before writing any code. Execute in phase order. All site copy
> in English, no em dashes (— or –) anywhere in visible copy.
> Reference for premium feel: https://www.sandcastles.ai/

---

## PHASE 1 — CONTENT SAFETY FIRST (do this before anything else)

1. **Backup the LinkedIn Studio page content.** Before deleting
   anything, extract ALL copy, pricing plans, add-ons, FAQ, and
   section structure from the LinkedIn Studio page into a new file:
   `LINKEDIN_PAGE_BACKUP.md` in the project root. Organize it by
   section with headers so it can be rebuilt later. Commit this file
   to git before proceeding.
2. **Remove the LinkedIn Studio page** from the site: delete the
   route, remove it from the navbar and footer links, remove any
   internal links or CTA references pointing to it.

---

## PHASE 2 — GLOBAL CHANGES (both/all pages)

### 2.1 Navbar (full redesign, Sandcastles style)
- Sticky/fixed bar that stays visible while scrolling.
- Translucent glass effect (backdrop-blur) tinted with the brand
  purple (#38206F base, semi-transparent).
- Contains the HORIZONTAL Click & Minds logo (use the horizontal logo
  asset).
- Nav links: **AI Agents** | **Websites** | **Portfolio** (Portfolio
  links to a simple "Coming Soon" state: either a small elegant page
  or a disabled item with a subtle "Coming soon" badge, design
  something tasteful).
- The hamburger icon on mobile must be static/fixed with the bar.
- The "Book a Call" CTA stays in the bar (Google Form link).

### 2.2 Theme: dark only
- Remove the day/night toggle COMPLETELY, including all day-mode
  styles and theme-switching logic. The site is dark mode only.
- Clean up: remove dead code, unused day-mode tokens, and the toggle
  component.

### 2.3 New toggle: language switcher ES | EN
- In the same spot where the theme toggle was, add a language
  switcher styled as "ES | EN" (active language highlighted).
- Implement real i18n: every piece of site copy must exist in both
  English and Spanish. Use Astro's i18n routing or a lightweight
  translation dictionary approach, whichever is cleaner for a static
  GitHub Pages build. Default language: English.
- The choice must persist while navigating between pages.

### 2.4 Kill the lime highlights, keep lime buttons
- Remove ALL lime highlight blocks behind words (the block + pin
  style). Headlines go clean.
- New headline accent style, inspired by the reference (white +
  electric blue two-tone look, but with OUR palette): most of the
  headline in soft white #FAFAF8, with 1-2 key words in a purple
  gradient accent (#8F5CFF to #B9A8FF, or #8F5CFF to #E04DFF used
  sparingly). Two colors total per headline, that restraint is what
  makes it feel premium.
- Lime #EFFF73 stays ONLY on primary CTA buttons and tiny accents
  (checkmarks, small labels), nowhere else.

### 2.5 Button style: translucent premium
- Restyle primary buttons with a translucent/glassy look: lime
  background with reduced opacity + backdrop blur + a subtle inner
  glow and 1px lighter border, similar to the "Try It Risk-Free"
  reference. Text stays dark purple for contrast.
- Secondary buttons: dark glass (navy translucent + blur + subtle
  border).
- Smooth hover: slight brightness lift + soft outer glow. No harsh
  color jumps.

### 2.6 Background: remove dots, flowing gradients
- Remove the dotted pattern from ALL backgrounds site-wide.
- Replace with clean, deep purple gradient backgrounds (#101426,
  #20113F, #38206F blended) with soft floating gradient orbs/mesh,
  very subtle movement.
- **Section transitions must flow:** no visible hard lines or color
  breaks between sections. Use long smooth gradient blends so the
  whole page feels like one continuous canvas.

### 2.7 Favicon
- Replace the favicon with the logo1 image (the brain icon only, no
  text). Generate proper sizes (16, 32, 180 apple-touch, 512) from
  the asset.

---

## PHASE 3 — AI AGENTS PAGE CHANGES

### 3.1 Hero video: immersive, not boxed
- The hero video currently sits inside a browser-frame quadrant.
  Redesign so the video feels IMMERSED in the hero: no card, no
  frame, no border box. Options (pick what looks best): video
  bleeding off the right edge of the viewport with a gradient mask
  fading it into the background, or a full-bleed background video
  behind the hero content with a dark purple overlay for text
  contrast. The video should melt into the section, not sit in a
  rectangle.
- Keep hiding the corner watermark (crop/offset technique).

### 3.2 "A closer look at what we build" → premium slides
- Convert the current static card grid (Content Writer Agent, Content
  Dashboard, Proposal Generator, Lead Generator, Special Reports &
  Dashboards) into an elegant slider/carousel.
- Each slide gets a custom icon in the brand line-art style plus
  title and description. Generous spacing, large type, smooth slide
  transitions. It must feel expensive, not like a bootstrap carousel.

### 3.3 REMOVE the "This is what it looks like running" section
- Delete the entire live mockup carousel section (CONTENT_AGENT.LIVE
  / LEAD_MAGNET.LIVE etc.). The owner will retake this later with
  real agent screenshots and videos. Keep the components in the
  codebase if trivial to preserve (commented or unused folder), but
  nothing renders on the page.

### 3.4 REMOVE the "Meet your AI employees" gallery section
- Delete the agent gallery (AI Content Strategist / AI Sales
  Assistant cards) from the page as well, same reason: will return
  later with real material.

### 3.5 Redesign "How it works" ("From workflow to working AI employee")
- Full redesign of this section. Keep the 4 steps and copy but
  elevate the design: consider a vertical timeline with scroll
  progress, or large numbered cards with the custom step icons,
  refined typography, more breathing room, subtle reveal animations.
  It should feel like a premium product walkthrough, not a basic
  4-column row.

### 3.6 Pricing: center card glow on hover
- On the "Pick the way in" pricing (Project Build / Complete AI
  Systems / Retainer), make the CENTER card ("Complete AI Systems")
  light up on hover like the reference: a soft radial glow rising
  from behind/below the card (purple #8F5CFF glow, not lime), border
  brightening, slight lift. The other two cards get a much subtler
  hover.

---

## PHASE 4 — NEW PAGE: WEBSITES

Simple, elegant, conversion-focused page. Services: **Websites, Sales
Funnels, Brand Identity.** Write original copy (do NOT copy the
reference sites), tone: direct, confident, premium, written for
business owners and creators. Research current best practices for
high-converting web design service pages and write copy that sells
outcomes (more clients, credibility, conversion) not features.

Suggested structure:
1. **Hero**: strong headline about websites that actually convert,
   sub line, Book a Call CTA.
2. **Three services**: Websites / Sales Funnels / Brand Identity as
   three premium cards or an alternating layout, each with a short
   outcome-driven description and what's included.
3. **Testimonials**: horizontal slider/scroll of clean testimonial
   cards (5 stars, quote, name). Use these four real testimonials
   (keep meaning, light grammar cleanup only):
   - "I was very excited and very happy to work with her. She's very
     talented, excellent job, excellent communication. Looking
     forward to working with her again soon."
   - "Very recommended. Number one in knowledge, communication, and
     talent. We are going to continue working together, hopefully
     very soon."
   - "We had the opportunity to hire Linabell for our web design
     project from scratch and we are very pleased with her work. She
     did all the development and design for our brand. We recently
     hired her again to manage and prepare an SEO campaign for our
     private security company this year. She is very professional,
     creative, and organized."
   - The Spanish testimonial from Esther (keep it in Spanish in the
     ES version; provide a faithful English translation in the EN
     version): thank-you note about a clean, warm website design
     where every section flows and the message lands from the first
     scroll.
4. **Process** (short, 3-4 steps) and a final CTA section.

### Footer glow effect (site-wide)
- Recreate the Sandcastles footer effect: a soft vertical light beam
  / flame-like glow rising from the bottom center of the footer, but
  in PURPLE (#8F5CFF core fading to transparent). Subtle animation
  (slow breathing/shimmer).

### Footer "Find me" block (site-wide)
- Add a "FIND ME" list with icon + label + external-link arrow:
  - LinkedIn → https://www.linkedin.com/in/lina-smith/
  - Join My Newsletter → https://clickandminds.beehiiv.com/
  - Email → mailto:hey@clickandminds.com
- Style it consistent with the dark premium footer.

---

## PHASE 5 — PREMIUM POLISH PASS (suggestions to implement)

These are the owner-approved ideas to make the whole site feel more
expensive:

1. **Color restraint**: max 2 accent colors visible per viewport
   (purple gradient + lime CTA). Neon pink/blue only as rare micro
   accents.
2. **Typography scale up**: bigger, tighter headlines (Sora 800,
   tracking -2%), more whitespace between sections, body text max
   width ~65ch.
3. **Micro-interactions**: subtle magnetic hover on primary buttons,
   soft cursor-following glow in hero only, smooth 200-300ms eases
   everywhere, nothing bouncy.
4. **Depth without borders**: replace visible card borders with soft
   shadows + very low-opacity white borders (1px, 5-8% opacity) +
   backdrop blur, the "dark glass" look.
5. **A social proof strip** near the hero (e.g. "Trusted by founders
   and creators" with subtle logos or a metric line) once assets
   exist; leave a tasteful placeholder pattern ready.
6. **Performance**: preload fonts, lazy-load video, keep Lighthouse
   90+ after all changes.
7. **Consistent scroll rhythm**: every section reveals with the same
   fade+rise timing so the page feels art-directed.

---

## PHASE 6 — QA + DEPLOY

- Verify ES/EN toggle translates ALL copy on every page.
- Verify navbar: sticky, translucent purple, horizontal logo,
  correct links, Portfolio coming-soon state, static hamburger.
- Verify NO dotted backgrounds remain, NO hard section lines, NO
  lime highlight blocks, NO day mode remnants, NO LinkedIn page
  routes or links.
- Confirm LINKEDIN_PAGE_BACKUP.md exists and is committed.
- Check favicon renders in browser tab.
- Full mobile pass at 375px and 390px.
- Search all copy for em dashes and remove any found.
- Commit and push to main, confirm the GitHub Actions deploy goes
  green, hard refresh clickandminds.com.
