# Novo AI

A polished Next.js marketing site for Novo AI, focused on health-insurance claims intelligence, document understanding, reviewer workflows, and provider-risk signals.

## Overview

The site is a concise product-marketing experience, not a generic SaaS template. It centers on a balanced product hero, real workflow screenshots, partner credibility, proof points, practical FAQ content, and clear next steps for insurers evaluating Novo.

## Active Routes

- `/` - homepage narrative and conversion flow
- `/platform` - platform overview and workflow coverage
- `/about` - company context, market reach, and operating principles
- `/resources` - media references, market notes, and external proof points

## Tech Stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Framer Motion

## v0.dev Migration Note

This project is already a strong fit for v0 because it is a frontend-only
Next.js codebase. Unlike Lovable, v0 supports importing an existing GitHub repo
directly and iterating on it in place.

Recommended v0 workflow:

1. Push the latest code to GitHub
2. In v0, choose `Import from GitHub`
3. Select this repository
4. Let v0 create a working branch for changes
5. Review and merge the resulting PR back into `main`

The main Next-specific pieces v0 will understand well are:

- `app/` routes
- Tailwind styling in `app/globals.css`
- modular UI in `components/`
- local content/config in `lib/`

## Local Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

Then open `http://localhost:3000`.

## Production Build

Run a local production build with:

```bash
npm run build
```

Run a strict type check with:

```bash
npm run typecheck
```

To test the built app locally:

```bash
npm run start
```

## Project Structure

```text
app/
  layout.tsx
  page.tsx
  about/
  platform/
components/
  hero/
  layout/
  sections/
hooks/
lib/
public/
  brand/
  demos/
  partners/
  resources/
```

## Content And Assets

- Product copy and reusable data live in `lib/*Content.ts`
- Demo screenshots live in `public/demos`
- Brand and partner assets live in `public/brand` and `public/partners`
- The active hero uses the product screenshot composition in `components/hero`

## Deployment

The project is linked to Vercel as `novoai`.

Useful commands:

```bash
vercel pull --yes
vercel build
vercel deploy --prebuilt
```

## Files v0 Should Focus On

When importing into v0, the highest-value editable folders are:

- `app/`
- `components/`
- `lib/`
- `public/`

The files that matter most for UI iteration are:

- [`app/page.tsx`](C:\Users\Aikagra\Downloads\novo web\app\page.tsx)
- [`app/platform/page.tsx`](C:\Users\Aikagra\Downloads\novo web\app\platform\page.tsx)
- [`app/about/page.tsx`](C:\Users\Aikagra\Downloads\novo web\app\about\page.tsx)
- [`app/resources/page.tsx`](C:\Users\Aikagra\Downloads\novo web\app\resources\page.tsx)
- [`app/globals.css`](C:\Users\Aikagra\Downloads\novo web\app\globals.css)
- [`components/hero/HeroCopy.tsx`](C:\Users\Aikagra\Downloads\novo web\components\hero\HeroCopy.tsx)
- [`components/sections/WorkflowStory.tsx`](C:\Users\Aikagra\Downloads\novo web\components\sections\WorkflowStory.tsx)
- [`lib/homepageContent.ts`](C:\Users\Aikagra\Downloads\novo web\lib\homepageContent.ts)
