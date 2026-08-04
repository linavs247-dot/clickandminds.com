# LinkedIn Studio Page: Content Backup

> This file preserves the full copy, pricing, structure, and design notes
> for the LinkedIn Studio page (`/linkedin-studio`) before it was removed
> from the site per REDESIGN_PLAN_V2.md, Phase 1. Nothing here is deleted
> from the repo without first being captured below. Route source lived at
> `src/pages/linkedin-studio.astro`, built from the section components
> listed under each heading.

Page `<title>`: **LinkedIn Studio**
Page meta description: "Done for you LinkedIn content. Click & Minds writes, designs, and publishes content that sounds like you, so you show up, grow your authority, and close clients."

Page section order:
1. Hero
2. What's Included Free
3. Pricing
4. Premium Add-Ons
5. Email List Section
6. Process (How it works)
7. FAQ
8. Final CTA

---

## 1. Hero (`LinkedInHero.astro`)

- Eyebrow: **Done for you LinkedIn content**
- Headline: "Content that sounds like you," + highlighted "built for you."
- Subhead: "Strategy, ideation, research, scripting, design, and publishing. You show up, grow your authority, and close clients."
- Buttons:
  - Primary (lime, external, links to Google Form): **Book a Free Strategy Call**
  - Secondary (ghost, links to `#plans`): **See the Plans**
- Visual: floating LinkedIn "in" mark icons (4x, varied size/position) with mouse-parallax effect.

---

## 2. What's Included Free (`WhatsIncludedFree.astro`)

- Eyebrow: **Before you pay a dollar**
- Heading: "What you get" + highlighted "for free."
- Three cards:

| Tag | Name | Description |
|---|---|---|
| `// brand_strategy.doc` | Brand Strategy Document | Your voice, your pillars, your audience, written down before a single post goes out. |
| `// swipe_file.kit` | Swipe File Starter Kit | A library of proven hooks and formats to keep ideas flowing between strategy calls. |
| `// profile_optimization.doc` | Profile Optimization Guide | A rewritten headline, about section, and featured section that actually convert. |

---

## 3. Pricing (`LinkedInPricing.astro`)

- Eyebrow: **Plans**
- Heading: "Choose your" + highlighted "content plan."
- Section anchor id: `plans`

### Starter, $1,500/mo
- 12 posts written and scheduled every month
- 2 carousels designed every month
- 2 infographics designed every month
- Content calendar and monthly strategy call
- Profile optimization guide included
- You approve every post before it goes live
- Scripting and design included
- Weekday email support
- Monthly analytics report
- CTA: "Start with Starter"

### Growth, $2,500/mo (Most Popular / featured card)
- Everything in Starter
- 20 posts every month
- 4 carousels designed every month
- 4 infographics designed every month
- Revision rounds included
- Scripting and design included
- Uploading and publishing included
- Weekday email support
- Monthly analytics report
- CTA: "Start with Growth"

### Authority, $3,500/mo
- Subtitle: "The complete content engine"
- Everything in Growth
- 30 posts every month
- 8 carousels and 6 infographics every month
- Video editing included, the only tier with video
- Uploading and publishing included
- One lead magnet included as a thank you
- Weekday email support
- Monthly analytics report
- CTA: "Start with Authority"

Footnote under pricing: "Hiring a designer, a video editor, and a ghostwriter separately costs $6,000 or more a month. Consistency is what actually compounds on LinkedIn."

All plan CTAs link to the Google Form (`GOOGLE_FORM_URL`).

---

## 4. Premium Add-Ons (`PremiumAddOns.astro`)

- Eyebrow: **Premium add-ons**
- Heading: "More ways to" + highlighted "grow your reach."

### Add-on 1: Content Distribution
- Tag: `// content_distribution.addon`
- Copy: "We adapt and distribute your LinkedIn content to other networks, so one month of strategy work shows up everywhere your audience actually is."
- CTA: "Contact Us" (Google Form)

### Add-on 2: Turn Your Audience Into Qualified Leads
- Tag: `// lead_magnets.addon`
- Copy: "Great content builds attention. Lead magnets turn that attention into email subscribers, qualified prospects, and future clients."
- Format tag pills: PDF Guides, Playbooks, Checklists, Swipe Files, Templates, Notion Resources, Mini Courses, Email Courses, Workbooks, Resource Libraries, Interactive Tools, AI Powered Resources
- Fine print: "Available as an add-on to any LinkedIn Authority package. Custom pricing based on scope and complexity."
- CTA: "Contact Us" (Google Form)

---

## 5. Email List Section (`EmailListSection.astro`)

- Eyebrow line: "Don't just build an audience."
- Headline (fully highlighted): "Build an email list you actually own."
- Body: "Social media platforms change. Algorithms change. Your email list is one of the few marketing assets that truly belongs to you. That is why we do not just create content. We help you build a complete authority and lead generation system."
- Visual: pink + blue glow orbs, LinkedIn mark icons.

---

## 6. Process: "How it works" (`LinkedInProcess.astro`)

- Eyebrow: **How it works**
- Heading: "From strategy call to" + highlighted "published post."
- Four numbered steps, each with a step icon and animated progress line:

1. **We map your voice.** A strategy call to learn your audience, your goals, and how you actually talk. *(icon: map)*
2. **We plan the calendar.** Topics, formats, and cadence planned out before we write a single word. *(icon: calendar)*
3. **You approve, we create.** Scripts, carousels, infographics, and video edits, ready for your review. *(icon: check)*
4. **We publish and report.** Posts go live on schedule, and you get a monthly report on what worked. *(icon: send)*

---

## 7. FAQ (`LinkedInFAQ.astro`)

- Eyebrow: **Questions**
- Heading: "Everything you" + highlighted "want to know."
- Accordion items:

**Do I have to record videos?**
Only if you choose a plan with video edits, or want to add the upgrade. Otherwise, we design posts and carousels for you. No camera required.

**How long until I see results?**
Clients often see engagement and inquiries within the first four to eight weeks, because you show up consistently with a strategy, not random posts.

**Do I review posts before they go out?**
Yes. Every post, carousel, and infographic is approved by you before it publishes. Nothing goes live without your sign off.

**Can I change plans or cancel?**
Yes. You can move between plans or cancel with 30 days notice. There are no long term contracts.

**What if I later want to automate this?**
That is exactly what our AI Systems are for. Once your content engine is running, we can build the automation layer on top of it.

---

## 8. Final CTA (`LinkedInFinalCTA.astro`)

- Eyebrow line: "Ready to automate it later?"
- Headline (fully highlighted): "That's what our AI Systems are for."
- Body: "Once your content engine is running, we can build the automation layer on top of it. Same operator, one system that keeps growing with you."
- Buttons:
  - Primary (lime, external, Google Form): **Book a Free Strategy Call**
  - Secondary (ghost, links to `/`): **Explore AI Agents**

---

## Site chrome references (also removed in Phase 1)

- **Navbar** (`Navbar.astro`): had a "LinkedIn Studio" link (`/linkedin-studio`) in both the desktop nav and the mobile drawer, and an `active="linkedin"` prop state used to highlight it.
- **Footer** (`Footer.astro`): had a "LinkedIn Studio" link under the Services column (`/linkedin-studio`).

## Components used only by this page

These component files existed solely to build `/linkedin-studio` and became unused once the page was removed: `LinkedInHero.astro`, `WhatsIncludedFree.astro`, `LinkedInPricing.astro`, `PremiumAddOns.astro`, `EmailListSection.astro`, `LinkedInProcess.astro`, `LinkedInFAQ.astro`, `LinkedInFinalCTA.astro`, `LinkedInMark.astro` (the floating "in" icon animation).
