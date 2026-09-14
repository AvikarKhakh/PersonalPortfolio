# Avikar Khakh — Personal Portfolio

A single-page portfolio for a Wake Forest graduate, Associate Software Engineer at Guardian Life Insurance, and Technical Cofounder of Steward. The redesign pairs a warm editorial palette with an animated engineering orbit, a scrolling career timeline, and project details.

## Stack

- Next.js 15 App Router, React 19, and TypeScript
- Custom CSS in `components/portfolio/styles`, imported by `app/globals.css`
- Framer Motion for reveals, the career timeline, and interactive motion
- Playwright for desktop and mobile browser tests

The page respects system reduced-motion settings and includes a motion toggle, keyboard navigation, a skip link, and responsive layouts. Former about, projects, blog, and tags routes redirect to sections on the homepage.

## Run locally

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Other commands:

```sh
npm run typecheck       # TypeScript validation
npm run build           # Production build
npm start               # Serve the production build
npx playwright install chromium
npm test                # Desktop and mobile browser tests
npm run test:ui          # Interactive Playwright runner
```

Playwright starts a development server on port 3100 automatically.

## Edit content

- `app/page.tsx`: page composition and motion preference state
- `components/portfolio/hero.tsx`: introduction and current roles
- `components/portfolio/work.tsx`: Steward and Guardian descriptions
- `components/portfolio/journey.tsx`: career milestones and dates
- `components/portfolio/projects.tsx`: selected projects and details
- `components/portfolio/about.tsx`: biography, portrait, and toolkit
- `components/portfolio/contact.tsx`: contact information and links
- `components/portfolio/styles/`: colors, typography, spacing, and responsive styling
- `app/layout.tsx`: page metadata
- `public/static/images/`: local image assets

Role descriptions use Avikar’s supplied background and avoid private employer details.

## Assets

Guardian’s logo is sourced from the official [Guardian website](https://www.guardianlife.com/) and stored at `public/static/images/guardian-logo.png`.

## Dates and publication

The timeline uses March 2026 for Steward (explicitly confirmed by Avikar), May 2026 for graduation, and July 2026 for Guardian. Steward’s technical ownership, team size, and platform details come from Avikar’s supplied background. Update both `work.tsx` and `journey.tsx` when changing role dates.

The existing website is hosted on Vercel. This redesign has not yet been deployed; local changes and successful checks do not update the live site.

Typography is bundled under `app/fonts` using `next/font/local`, so builds do not fetch Google Fonts. Font files are the Latin subsets from Google Fonts; the corresponding SIL Open Font Licenses are included alongside them.
