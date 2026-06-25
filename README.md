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

## Local Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production Build

Run a local production build with:

```bash
npm run build
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
