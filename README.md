# Portfolio — Next.js App Router

Personal portfolio for a senior backend engineer. Statically exported, deployable to Netlify.

## Stack

- **Next.js 14** (App Router, SSG via `output: 'export'`)
- **TypeScript**
- **Tailwind CSS**
- **shadcn/ui** utilities (`cn`, `clsx`, `tailwind-merge`)

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout — SEO metadata (Server Component)
│   ├── page.tsx            # Page — composes all sections (Server Component)
│   └── globals.css         # CSS variables, Tailwind base, animations
├── components/
│   ├── ui/
│   │   ├── nav.tsx         # Sticky nav + theme toggle (Client Component)
│   │   ├── tag.tsx         # Tag pill (Server Component)
│   │   ├── section-label.tsx
│   │   ├── accordion-card.tsx  # Exp card with expand/collapse (Client)
│   │   ├── project-card.tsx    # Project card with accordion (Client)
│   │   └── lightbox.tsx        # Screenshot lightbox modal (Client)
│   └── sections/
│       ├── hero.tsx        # Server Component
│       ├── about.tsx       # Server Component
│       ├── experience.tsx  # Server Component (uses AccordionCard client)
│       ├── projects.tsx    # Client Component (manages lightbox state)
│       ├── skills.tsx      # Server Component
│       ├── writing.tsx     # Server Component
│       ├── contact.tsx     # Server Component (Netlify form)
│       └── footer.tsx      # Server Component
└── lib/
    ├── data.ts             # All portfolio content as typed data
    └── utils.ts            # cn() utility
```

## Getting Started

```bash
npm install
npm run dev
```

## Customise Content

All content lives in `src/lib/data.ts`. Edit:

- `siteConfig` — name, email, GitHub, LinkedIn, resume URL
- `experience` — companies, roles, bullets, tags
- `projects` — titles, descriptions, GitHub links, screenshot URLs
- `skills` — grouped tech stack tags
- `writingTopics` — topic tags for the writing placeholder

## Deploy to Netlify

```bash
npm run build   # generates /out directory
```

In Netlify: set **Publish directory** to `out`. The Netlify contact form works automatically via `data-netlify="true"`.

## Theme

Dark by default. Toggle via the `◑` button in the nav. Theme persists to `localStorage`.

To change the colour scheme, edit the CSS variables in `globals.css`:

```css
:root {
  --bg: #0a0a0a;
  --text: #e5e5e5;
  /* ... */
}
```
