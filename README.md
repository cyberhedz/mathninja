# Math Ninja

A React + TypeScript rebuild of [math-ninja.org](https://math-ninja.org/), the
Cyberhedz Media LLC site about U.S. math education. Pulled 1:1 from the live
WordPress/Divi site — copy, images, team photos, colors, and fonts — into a
static Vite app.

## Run it

```bash
npm install
npm run dev
```

`npm run build` produces a static `dist/` ready for Vercel (see
`vercel.json`, which rewrites all paths to `index.html` so client-side
routes don't 404 on refresh).

## Routes

| Route | Page |
| --- | --- |
| `/` | Home — hero, PISA ranking chart, "Try Math Ninja" CTA |
| `/about-math-ninja` | History, Vision, Mission, and the team |
| `/get-involved` | Programs, curriculum tiers, FAQ, testimonials |
| `/contact` | Contact info, hours, admission inquiry form, newsletter |
| `/blog` | Category filter + post list, newsletter |

Slugs match the live site's so existing links/SEO carry over.

## What's carried over vs. what's new

- **Real content**: the PISA stats, "Our History / Vision / Mission," all
  four team bios and photos, and the Amazon book link in the footer are
  reproduced from the live site.
- **Forms** (Admission Inquiry, Newsletter, Schedule a Call) are wired up
  and show an inline confirmation on submit, but nothing sends anywhere —
  there's no backend yet. Same for the FAQ accordions and blog category
  filter, which are fully functional against the current content.
- **Map**: the live site's embedded Google Map is broken (missing API
  key). This rebuild shows a lightweight placeholder with the address
  instead of pulling in Maps JS — wire up a real embed by swapping
  `src/pages/Contact.tsx`'s `.mapPlaceholder` block.

## ⚠️ Placeholder content still on the live site, reproduced as-is

Several sections of math-ninja.org are still unedited Divi/WordPress
starter-theme content, not real Math Ninja copy. I kept it exactly as it
is live rather than inventing replacement copy:

- **Contact page**: the address (1234 Divi St.), phone number, and email
  (`info@dividaycare.com`) are generic daycare-theme demo data, not real
  Math Ninja contact info.
- **Get Involved**: the Reading/Writing and Math/Science descriptions, all
  four program tiers' descriptions and bullet lists, and all 10 FAQ
  questions are Lorem Ipsum.
- **Get Involved testimonials**: "What Our Families Are Saying" is also
  Lorem Ipsum with no real author names on the live site.
- **Contact page**: the "How to Apply" FAQ (5 questions) is Lorem Ipsum.
  Tuition copy is also Lorem Ipsum.
- **Blog**: the only post is WordPress's default "Hello world!" placeholder.

All of this lives in `src/data/content.ts` — send me real copy for any of
it and I'll swap it in.

## Stack

Vite + React 18 + TypeScript, React Router, CSS Modules + a shared
stylesheet for design tokens (`src/styles/tokens.css` — colors pulled from
the live site's computed styles, Fredoka One for display type, Open Sans
for body text, matching the original).
