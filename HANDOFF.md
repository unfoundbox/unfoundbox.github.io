# Handoff Spec: unfoundbox.com Blog Redesign

**Reference design:** https://my-site-8f3cc23a.ploy.build/ (Astro + Tailwind v4 prototype)
**Target stack:** Hugo + `hugo-blog-awesome` theme (current `unfoundbox.com`). Tokens below are framework-agnostic; Hugo-specific wiring notes are called out per section.
**Theme:** Dark, single-page editorial landing. Cream text on near-black, with a purple primary accent and a lime secondary accent. Monospace eyebrows/badges.

---

## Overview

A single long-scroll homepage that establishes the author, surfaces recent writing, shows side projects, tells the about story, and captures email — replacing the current multi-page theme layout. Five stacked, full-width sections with anchor navigation (`#writing`, `#building`, `#about`, `#subscribe`). The About section inverts to a light background as a deliberate rhythm break; everything else is dark.

User context: returning readers and first-time visitors arriving from social. Primary goal is "read the writing"; secondary goal is "subscribe."

---

## Layout

- **Page model:** one-column, vertically stacked sections. No sidebar.
- **Section padding:** `py-24` mobile → `md:py-32` desktop (6rem → 8rem vertical).
- **Content max-width by section:**
  | Section | Container | Notes |
  |---------|-----------|-------|
  | Hero | `max-w-3xl` (48rem) | centered, `text-center`, `min-h-[100svh]`, `pt-40` top offset |
  | Writing | `max-w-3xl` | full-bleed list rows |
  | Building | `max-w-5xl` | 2-col card grid |
  | About | `max-w-5xl` | 2-col (bio + track record) |
  | Subscribe | `max-w-xl` / form `max-w-md` | centered |
- **Horizontal gutter:** `px-6` (1.5rem) on all section inner containers.
- **Sticky header:** fixed top nav, transparent over hero, ~`h-16`/`h-20` (`scroll-mt-20` anchor offset confirms ~5rem scroll margin).
- **Breakpoints:** Tailwind defaults — `sm` 640px, `md` 768px, `lg` 1024px. Layout changes happen at `md`.

---

## Design Tokens Used

### Color (resolved dark theme)
| Token | Value | Usage |
|-------|-------|-------|
| `--ploy-background-primary` | `#111217` (near-black) | Page + dark sections |
| `--ploy-background-secondary` | one step lighter neutral | Cards, muted surfaces |
| `--ploy-neutral-inverse` | white/light | About section background |
| `--ploy-text-primary` | `#f2f0ea` (cream) | Headings, body on dark |
| `--ploy-text-secondary` | `#b7b4b0` (warm gray) | Subtext, metadata |
| `--ploy-text-inverse` | `#101217` | Text on light About section |
| `--ploy-text-inverse-secondary` | `#101217` @ 60% | Subtext on About section |
| `--ploy-accent-primary` | `#a892ff` (purple) | Eyebrows, primary buttons, focus ring, links |
| `--ploy-text-on-accent-primary` | `#111217` | Text on purple buttons |
| `--ploy-accent-secondary` | `#b9d86a` (lime) | Secondary accent / highlights |
| `--ploy-border-primary` | `#3a3d45` | Hairline dividers, card borders, inputs |
| `--ploy-button-secondary-border` | `#8a8d96` | Outline button border |
| `--ploy-input-border` | `#3a3d45` | Email input border |
| `--destructive` | `#c95050` | Form errors |

> Implementation note: colors are authored in `oklch` with hex fallbacks. Keep both. In Hugo (`hugo-blog-awesome`), map these onto the theme's existing CSS custom properties in `assets/` SCSS (the theme already supports a dark default via `defaultColor = "dark"` in `hugo.toml`).

### Typography
| Token | Value | Usage |
|-------|-------|-------|
| `--font-heading` | `"Inter Tight", system-ui, sans-serif` | All headings (`h1`–`h3`) |
| `--font-body` | `"Inter", system-ui, sans-serif` | Body, buttons |
| `--font-mono` / `--font-eyebrow` | `"IBM Plex Mono", ui-monospace, monospace` | Eyebrows, tech badges, dates |
| Heading weight | `500` (regular), `600` (bold) | — |
| Heading letter-spacing | `-0.015em` | Tight display |
| Heading line-height | `1.08` | — |
| Body weight | `400` / bold `600` | — |
| Body line-height | `1.55` (`leading-relaxed` 1.625 for hero sub) | — |
| Eyebrow | weight `600`, letter-spacing `0.24em`, UPPERCASE, line-height `1.2` | Section labels |
| Button | weight `600`, letter-spacing `0.04em`, line-height `1` | CTAs |

Font sizes (rem scale): `xs .75` · `sm .875` · `base 1` · `lg 1.125` · `xl 1.25` · `2xl 1.5` · `3xl 1.875` · `4xl 2.25` · `5xl 3` · `6xl 3.75`.

- **H1 (hero):** `text-4xl` → `sm:text-5xl` → `md:text-6xl` (2.25 → 3 → 3.75rem), `text-balance`.
- **Section H2:** ~`text-3xl`/`4xl`.
- **Eyebrow:** `text-xs` uppercase, `font-eyebrow`, color `accent-primary`.
- **Body lead:** `text-lg`.

### Radius & spacing scale
| Token | Value |
|-------|-------|
| `--radius` | `0.625rem` (10px) base |
| `--radius-button` | `0.375rem` |
| `--radius-card` | `0.75rem` |
| `--radius-input` | `0.375rem` |
| Border | `1px solid var(--ploy-border-primary)` |
| Section gap | `py-24`/`py-32` |
| Grid gaps | cards `gap-14`/`md:gap-20`; list rows `py-6` |

---

## Components

| Component | Variant | Props / Anatomy | Notes |
|-----------|---------|-----------------|-------|
| **Header / Nav** | Sticky, transparent-over-hero | Wordmark `unfoundbox` (left) + links: Writing, Building, About, Subscribe | Anchor links to in-page sections. Mobile: same items (no hamburger in proto — see Responsive). |
| **Hero** | — | Eyebrow, H1, lead paragraph, 2 CTAs, full-bleed background image bottom-anchored with top+bottom gradient fade to bg | Image: `object-cover`, `opacity-90`, `pointer-events-none`, `aria-hidden`. Gradient `from-bg via-transparent to-bg`. |
| **CTA Button — primary** | Solid | `bg-accent-primary`, `text-on-accent-primary`, `h-12 px-6 text-base`, `rounded-button`, `gap-2` | "Read the writing" → `#writing`. |
| **CTA Button — secondary** | Outline | `border-button-secondary-border`, `text-text-primary`, same sizing | "Get new posts" → `#subscribe`. |
| **Writing list row** | Link row | `flex items-baseline gap-6`, `border-b border-primary`, `py-6`; title + date (mono) | Hover background shift. 5 rows + "See all posts" link. |
| **Project card** | Bordered grid cell | Title, description, mono tech badges (`text-[11px] uppercase tracking-wide`) | Grid: `gap-px` over a border-colored bg → hairline separators between 2 cells (`md:grid-cols-2`). "More on GitHub" link below. |
| **Tech badge** | Inline tag | `font-mono text-[11px] uppercase tracking-wide text-secondary` | On About (light) section use `text-inverse/55`. |
| **About block** | Inverted section | Bio prose + interest tags + "Track record" list (company · role) | Light background, dark text. |
| **Subscribe form** | Inline email capture | `<input type=email required>` (`h-12`, `rounded-input`) + primary submit button; stacks on mobile (`flex-col sm:flex-row`) | Placeholder `you@email.com`. |
| **Footer** | — | Wordmark, tagline, nav repeat, copyright `© 2026 Saurabh Nandwana · unfoundbox` | — |

---

## Content (verbatim from prototype)

- **Hero eyebrow:** "Building in the open"
- **H1:** "Notes from the edge of AI and the web."
- **Lead:** "I'm Saurabh — an engineer (ex-Hopin, ex-StreamYard) writing about local AI, web standards, and what it actually takes to ship. New posts most weeks."
- **Writing eyebrow/heading:** "Writing" / "Recent posts" — 5 posts with `MMM YYYY` dates, then "See all posts".
- **Building:** "Building" / "Things I'm making" — intro line + 2 cards (`webgpu-video-processor` [WebGPU, TypeScript], `expensomate` [React, Integrations]) + "More on GitHub".
- **About:** "An engineer who likes to figure things out in public." + bio + tags (Local AI, WebGPU, Web standards, Startups, Infra) + Track record (StreamYard, Hopin, Signzy, Reforge).
- **Subscribe:** "Get new posts in your inbox." / "Occasional, hands-on writing on local AI and the web. No spam — unsubscribe anytime."

> Hugo mapping: posts come from `content/en/posts/` (`mainSections = ['posts']`). Wire the Writing list to `.Site.RegularPages` limited to 5; "See all posts" → `/posts/`. About content lives in `content/en/pages/about.md`.

---

## States and Interactions

| Element | State | Behavior |
|---------|-------|----------|
| Primary button | Hover | `bg-accent-primary/90` (10% darken) |
| Primary button | Focus | `ring-2 ring-accent-primary/60`, no outline |
| Primary button | Disabled | `opacity-50`, `pointer-events-none` |
| Secondary button | Hover | `border` → `text-primary` color, subtle bg |
| Writing row | Hover | Background → `neutral-primary-s3` (slight lift); `transition-colors` |
| Nav link | Hover | Color shift to `text-primary` / accent |
| Email input | Focus | Border → `accent-primary`, `outline:none` |
| Email input | Invalid (on submit) | Native `required` validation; error styling uses `--destructive` `#c95050` |
| Links (in prose) | Default/Hover | `accent-primary`, underline on hover |

**Transitions:** default `0.15s cubic-bezier(0.4,0,0.2,1)` (`transition-colors` on interactive elements).

---

## Responsive Behavior

| Breakpoint | Changes |
|------------|---------|
| Desktop (≥1024px) | Full layout; section padding `py-32`; project grid 2-col `gap-20`; About 2-col `gap-20`. |
| Tablet (768–1024px) | `md:` styles active: 2-col grids on Building/About; hero H1 at `5xl`/`6xl`. |
| Mobile (<768px) | Single column everywhere; grids collapse to 1-col; subscribe form stacks (`flex-col`); section padding `py-24`; hero H1 `text-4xl`. **Decide mobile nav:** prototype shows inline links — implement a collapsed menu (hamburger → anchor list) for small screens since 4 links + wordmark will crowd <380px. |

---

## Edge Cases

- **No recent posts:** Hide the Writing list; show a one-line "Writing soon." Don't render an empty bordered container.
- **Fewer than 5 posts:** Render available rows; still show "See all posts" only if total > shown.
- **Long post titles:** Allow wrap; keep date column fixed via `items-baseline gap-6` (don't truncate — full title matters for SEO/scan). Cap at 2 lines if needed with line-clamp.
- **Missing cover/hero image:** Hero background is decorative (`aria-hidden`) — section must remain legible with the bg color alone if the image 404s. Gradient fade already guarantees text contrast.
- **Long tech-badge lists:** Wrap badges; `gap-2`. No horizontal scroll.
- **International / long strings:** Inter Tight tight tracking can crowd CJK — fall back to `system-ui`. Test German-length nav labels for header overflow.
- **Slow connection:** Hero entrance animations must not block content (see Motion); image is lazy-eligible and decorative.

---

## Animation / Motion

Entrance animations on first paint (prototype uses inline `opacity:0; transform:translateY()` cleared by JS on load):

| Element | Trigger | Animation | Duration | Easing |
|---------|---------|-----------|----------|--------|
| Hero eyebrow | Page load | Fade + rise `translateY(12px)→0` | ~500ms | ease-out |
| Hero H1 | Page load | Fade + de-blur (`blur(8px)→0`) + `translateY(18px)→0` | ~600ms | ease-out |
| Hero lead + CTAs | Page load (staggered) | Fade + `translateY(18px)→0` | ~500ms | ease-out, ~80ms stagger |
| Writing rows | Scroll into view | Fade + `translateY(16px)→0` | ~400ms | ease-out, staggered |
| Buttons / rows / inputs | Hover/focus | `transition-colors` | 150ms | `cubic-bezier(.4,0,.2,1)` |

**Accessibility:** wrap all entrance motion in `@media (prefers-reduced-motion: reduce)` → no transform/blur, content visible immediately. Initial `opacity:0` must have a no-JS fallback (content visible if JS fails — use a `.no-js`/`html.js` guard, important for Hugo static output).

---

## Accessibility Notes

- **Focus order:** Skip-link → nav (wordmark → Writing → Building → About → Subscribe) → hero CTAs → writing rows → project cards → about links → subscribe input → submit → footer.
- **Focus visible:** all interactive elements show `ring-2 ring-accent-primary/60`. Verify ≥3:1 contrast of ring against both dark and light (About) backgrounds.
- **Contrast:** cream `#f2f0ea` on `#111217` ≈ 15:1 (pass). Secondary `#b7b4b0` on dark ≈ 7:1 (pass). Verify badge `text-secondary` at 11px meets 4.5:1 (it does). Lime `#b9d86a` and purple `#a892ff` must NOT carry body text on dark without checking — use for accents only.
- **Landmarks:** `<header>`, `<nav aria-label="Primary">`, `<main>` wrapping sections, each `<section aria-labelledby>` pointing to its heading, `<footer>`.
- **Decorative image:** hero bg `aria-hidden="true"` + empty `alt` — correct, keep it.
- **Anchor nav:** in-page links need `scroll-mt-20` so sticky header doesn't cover targets; ensure focus moves to the section, not just scroll.
- **Form:** `<label>` for the email input (visually-hidden is fine), `aria-describedby` for the "no spam" helper, announce success/error via `aria-live="polite"`.
- **Keyboard:** all CTAs and rows are real `<a>`/`<button>` — no div-clicks. Confirmed in prototype.

---

## Implementation Notes (Hugo / hugo-blog-awesome)

1. **Where it goes:** Build the homepage in `layouts/index.html` (override the theme). The five sections are partials under `layouts/_partials/` (`hero.html`, `writing.html`, `building.html`, `about.html`, `subscribe.html`).
2. **Tokens:** Add a `:root` token block in `assets/` SCSS mirroring the table above; the theme already ships a dark mode (`defaultColor = "dark"`). Override its variables rather than fighting them.
3. **Fonts:** Self-host Inter Tight, Inter, IBM Plex Mono (variable woff2) in `static/fonts/` with `font-display: swap`; don't rely on a CDN.
4. **Writing list:** `range first 5 (where .Site.RegularPages "Section" "posts")`; date via `.Date.Format "Jan 2006"`.
5. **Building cards + About:** content-drive from front-matter or a data file (`data/projects.yaml`, `data/track_record.yaml`) so they're editable without template changes.
6. **Motion JS:** add to `assets/js/custom.js` (already wired via `additionalScripts` in `hugo.toml`); gate on `prefers-reduced-motion` and set `html.js` class to keep no-JS output visible.
7. **Subscribe:** prototype form is non-functional — wire to the real provider (Buttondown/ConvertKit/etc.) and handle the loading/success/error states listed above.
8. **Nav config:** menu currently has Home/Posts/Research HTML in `hugo.toml`. Redesign nav is Writing/Building/About/Subscribe (anchors). Reconcile: keep `/posts/` and `/research/` reachable, but the homepage nav points at in-page anchors.
