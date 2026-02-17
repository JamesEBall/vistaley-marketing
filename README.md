<div align="center">

# Vistaley

### The Platform for Venture Capital Ecosystems

Marketing website for Vistaley — connecting fund managers and portfolio companies across emerging markets.

[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38BDF8)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-black)](https://vercel.com)

[**Visit Site →**](https://vistaley.com)

</div>

---

## About

Vistaley is the two-sided platform connecting venture capital fund managers with their portfolio companies in emerging markets. This repository contains the **marketing website** — the public-facing site that introduces the Vistaley ecosystem.

The ecosystem consists of two products:

- **[VentureLens](https://github.com/JamesEBall/venturelens)** — Fund management platform for GPs (General Partners). Deal pipeline, portfolio tracking, LP reporting, fund accounting, and multi-currency support across frontier markets.
- **[Harbour](https://github.com/JamesEBall/harbour)** — Free FP&A tools for portfolio companies. Revenue tracking, burn analytics, budgeting, scenario modeling, and structured investor updates.

The marketing site serves as the unified entry point, directing fund managers to VentureLens and founders to Harbour.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — ecosystem overview, product previews, social proof |
| `/for-gps` | VentureLens landing page for fund managers |
| `/for-founders` | Harbour landing page for startup founders |
| `/pricing` | Transparent pricing for both products |
| `/about` | Company mission, values, and team |
| `/contact` | Contact form and inquiries |
| `/privacy` | Privacy policy |

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 16 (App Router) |
| **Runtime** | React 19, TypeScript 5 |
| **Styling** | Tailwind CSS v4 |
| **Icons** | Lucide React |
| **Analytics** | Vercel Analytics |
| **Fonts** | Geist (via `next/font`) |
| **Hosting** | Vercel |

## Getting Started

### Prerequisites

- Node.js ≥ 20
- npm ≥ 10

### Installation

```bash
git clone git@github.com:JamesEBall/vistaley-marketing.git
cd vistaley-marketing
npm install
```

### Development

```bash
npm run dev        # Start dev server (http://localhost:3000)
npm run build      # Production build
npm run start      # Start production server
npm run lint       # ESLint
```

### Environment Variables

No environment variables are required for the marketing site. It is a fully static site with no backend dependencies.

Optional:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_VERCEL_ANALYTICS_ID` | Vercel Analytics (auto-configured on Vercel) |

## Project Structure

```
vistaley-marketing/
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage
│   │   ├── layout.tsx            # Root layout (navbar, footer)
│   │   ├── globals.css           # Global styles
│   │   ├── for-gps/page.tsx      # VentureLens landing
│   │   ├── for-founders/page.tsx # Harbour landing
│   │   ├── pricing/page.tsx      # Pricing comparison
│   │   ├── about/page.tsx        # About Vistaley
│   │   ├── contact/page.tsx      # Contact page
│   │   ├── privacy/page.tsx      # Privacy policy
│   │   ├── sitemap.ts            # Dynamic sitemap generation
│   │   └── robots.ts             # Robots.txt generation
│   ├── components/
│   │   ├── navbar.tsx            # Site navigation
│   │   ├── footer.tsx            # Site footer
│   │   ├── vistaley-logo.tsx     # Logo component
│   │   └── platform-select-modal.tsx  # Product selection modal
│   └── lib/
│       └── utils.ts              # Utility functions
├── public/                       # Static assets
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── eslint.config.mjs
```

## Deployment

### Vercel (Production)

The site is deployed automatically on push to `main` via Vercel:

```bash
# Manual deploy via CLI
npm i -g vercel
vercel --prod
```

### Static Export

The site supports static export for hosting on any CDN:

```bash
npm run build
# Output in /out directory
```

## SEO

- Dynamic sitemap generation (`/sitemap.xml`)
- Robots.txt configuration (`/robots.txt`)
- OpenGraph metadata on all pages
- Semantic HTML structure

## Vistaley Ecosystem

| Product | Repository | Audience |
|---------|-----------|----------|
| **Vistaley Marketing** (this repo) | [vistaley-marketing](https://github.com/JamesEBall/vistaley-marketing) | Public visitors |
| **VentureLens** | [venturelens](https://github.com/JamesEBall/venturelens) | Fund managers (GPs) |
| **Harbour** | [harbour](https://github.com/JamesEBall/harbour) | Portfolio companies |

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'feat: add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

## License

Private. All rights reserved. © 2025–2026 Vistaley.
