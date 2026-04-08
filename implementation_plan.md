# Novo AI Premium Landing Page Implementation Plan

## 1. Architecture overview

- Framework: Next.js App Router with TypeScript and Tailwind CSS.
- Runtime split:
  - server components for layout shell and page composition
  - client components for motion, Lenis, and the hero sequence canvas
- Rendering stack:
  - DOM for layout, typography, glass surfaces, and section storytelling
  - Canvas for the hero image-sequence scrub
  - No video dependency in the current build because the workspace only contains the hand rotation frames
- Design thesis:
  - one dominant visual idea in the hero
  - supporting sections are typography-led, restrained, and trust-oriented
  - red accenting is tightly controlled outside the hero

## 2. Verified asset reality

- Confirmed frame path: `/public/sequence-hand/`
- Confirmed frame naming: `ezgif-frame-001.jpg` through `ezgif-frame-193.jpg`
- Confirmed frame count: `193`
- Confirmed source resolution: `3840x2160`
- Confirmed missing assets:
  - no `hand-loop.mp4`
  - no `hand-poster.jpg`
- Build implication:
  - the site runs in sequence-only mode
  - static fallback uses the first frame from the existing sequence

## 3. Section-by-section experience plan

### Header / Navigation

- Transparent on load with soft blur only after scroll.
- Thin border reveal after the hero threshold to feel more architectural than app-like.
- Minimal nav:
  - logo wordmark `Novo AI`
  - anchors for capabilities, workflow, enterprise, contact
  - one primary CTA

### Hero sequence scrollytelling

- Height target: `300vh` mobile, `360vh` tablet, `400vh` desktop.
- Sticky viewport with pinned canvas and editorial copy overlay.
- Canvas is the only expressive image surface on the page.
- Motion mapping:
  - scroll progress drives frame selection from `0` to `192`
  - copy drifts upward subtly and fades very gently
  - glow layers reinforce the spark as the visual nucleus
- Reduced motion:
  - hero falls back to a static first frame
  - copy remains fully readable and meaningful

### Trust bar

- Typography-driven credibility rail instead of invented partner logos.
- Frames the product around real insurance workflow surfaces:
  - claims intake
  - SIU review
  - coverage analysis
  - customer correspondence

### Capability grid

- Glassmorphism is used here, but with restraint.
- Layout stays editorial and slightly asymmetric instead of default SaaS cards.
- Copy keeps an executive, operational tone.

### Workflow story

- Single visual narrative panel with a quiet illuminated spine.
- Explains the product as a flow from ingestion to surfaced action.
- Each step does one job and avoids redundant product language.

### Outcomes

- Large stat-style blocks communicate operating impact.
- Uses directional value language rather than unsourced hard claims.

### Case studies

- Sparse scenario cards instead of a generic testimonial carousel.
- Cards communicate deployment fit and operating change.

### Enterprise readiness

- Formal, quieter section designed to de-risk the buy.
- Focuses on explainability, governance, integration, and deployment posture.

### Final CTA

- Hero echo, but controlled:
  - ambient frame from the existing sequence
  - central radial glow
  - clear conversion action

### Footer

- Minimal split layout with product and company link groupings.
- Keeps the close grounded in trust and clarity.

## 4. Component responsibilities

- `components/layout/SiteHeader.tsx`
  - scroll-reactive nav chrome
  - anchor navigation
  - primary CTA
- `components/hero/HeroSequence.tsx`
  - scroll progress calculation
  - sticky orchestration
  - fallback decision tree
  - hero visual layering
- `components/hero/HeroCanvas.tsx`
  - retina-safe canvas sizing
  - aspect-ratio preserving center-crop drawing
  - redraw on resize
- `components/hero/HeroCopy.tsx`
  - hero typography
  - CTA treatment
  - progress-linked text drift
- `components/sections/TrustBar.tsx`
  - credibility framing without invented logos
- `components/sections/CapabilityGrid.tsx`
  - premium capability storytelling cards
- `components/sections/WorkflowStory.tsx`
  - platform narrative sequence
- `components/sections/Outcomes.tsx`
  - stat-style operating impact section
- `components/sections/CaseStudies.tsx`
  - scenario-led proof section
- `components/sections/EnterpriseReady.tsx`
  - enterprise reassurance block
- `components/sections/FinalCTA.tsx`
  - closing conversion section
- `components/layout/SiteFooter.tsx`
  - final navigation and brand close

## 5. Hook and utility responsibilities

- `hooks/useLenis.ts`
  - initialize Lenis once
  - own the RAF loop
  - disable itself for reduced motion
- `hooks/useImageSequence.ts`
  - resolve the manifest if present
  - prime the first frames quickly
  - progressively cache the remainder
  - expose nearest-loaded frame lookup
- `hooks/usePrefersReducedMotion.ts`
  - browser-safe reduced-motion detection
- `lib/loadImageSequence.ts`
  - sequence manifest loading
  - frame URL construction
  - individual frame loading helper
- `lib/cn.ts`
  - Tailwind-friendly class merging
- `lib/motion.ts`
  - reusable premium motion curves and reveal variants

## 6. Hero technical implementation plan

### Loading strategy

- Source of truth:
  - `public/sequence-hand/sequence.config.json`
- Initial preload:
  - first `14` frames sequentially
  - enough for fast first paint and early scrub stability
- Background loading:
  - remaining frames loaded with low concurrency (`2`)
  - avoids trying to decode all 193 frames at once

### Scroll-to-frame mapping

- Progress formula:
  - `progress = clamp(-sectionTop / (sectionHeight - viewportHeight), 0, 1)`
- Frame index formula:
  - `Math.round(progress * (frameCount - 1))`

### Rendering strategy

- `HeroSequence` owns scroll calculation and orchestration.
- `HeroCanvas` exposes an imperative `drawFrame()` method.
- Scroll and resize updates are throttled with `requestAnimationFrame`.
- Canvas redraws only when the frame index changes.

### Safe fallback behavior

- If reduced motion is enabled:
  - show the first frame as a static poster
- If the sequence fails:
  - use the first frame again
- Because no video exists in the workspace, there is no video branch in the current implementation

## 7. Motion plan

- Motion tone:
  - deliberate
  - calm
  - premium
  - slightly slower than generic SaaS motion
- Hero:
  - frame scrub by scroll
  - text drift and opacity shaping
  - glow fade layers
- Sections:
  - upward blur reveal on entry
  - restrained stagger on cards and panels
- Header:
  - background and border transition on scroll

## 8. Performance strategy

- Do not block the page on all 193 frames.
- Prime only the first set of frames before revealing the sequence.
- Use refs for frame storage to avoid scroll-driven React re-renders.
- Draw on canvas only when the requested frame changes.
- Cap canvas DPR at `2` to avoid excessive GPU cost on very dense screens.
- Below-the-fold content remains lightweight and typography-led, keeping bundle pressure lower than image-heavy layouts.
- Future pass:
  - generate smaller mobile frame variants or convert to WebP if mobile decode cost becomes noticeable

## 9. Responsive behavior

- Desktop:
  - full canvas hero with long scrub distance and left-anchored copy
- Tablet:
  - slightly shorter scrub distance and slightly tighter copy width
- Mobile:
  - shorter hero scroll distance
  - preserved typography hierarchy
  - sequence still works, but the design remains readable if motion is disabled

## 10. Accessibility plan

- Honor `prefers-reduced-motion`.
- Keep all hero messaging understandable without motion.
- Maintain strong contrast against the dark visual field.
- Use semantic `section`, `header`, `footer`, and heading structure.
- Preserve visible focus styles for links and buttons.
- Avoid encoding essential meaning in the animation alone.

## 11. Content plan

- Voice:
  - concise
  - executive-grade
  - modern
  - high-trust
- Hero message:
  - evidence-first intelligence for insurance operations
- Supporting sections:
  - claims document understanding
  - fraud and leakage screening
  - structured reasoning
  - operational visibility
- CTA language:
  - calm and direct
  - no hype cliches

## 12. File tree

```text
novo web/
|-- app/
|   |-- globals.css
|   |-- layout.tsx
|   `-- page.tsx
|-- components/
|   |-- hero/
|   |   |-- HeroCanvas.tsx
|   |   |-- HeroCopy.tsx
|   |   `-- HeroSequence.tsx
|   |-- layout/
|   |   |-- SiteFooter.tsx
|   |   `-- SiteHeader.tsx
|   |-- providers/
|   |   `-- SmoothScrollProvider.tsx
|   `-- sections/
|       |-- CapabilityGrid.tsx
|       |-- CaseStudies.tsx
|       |-- EnterpriseReady.tsx
|       |-- FinalCTA.tsx
|       |-- Outcomes.tsx
|       |-- TrustBar.tsx
|       `-- WorkflowStory.tsx
|-- hooks/
|   |-- useImageSequence.ts
|   |-- useLenis.ts
|   `-- usePrefersReducedMotion.ts
|-- lib/
|   |-- cn.ts
|   |-- loadImageSequence.ts
|   `-- motion.ts
|-- public/
|   `-- sequence-hand/
|       |-- ezgif-frame-001.jpg
|       |-- ...
|       |-- ezgif-frame-193.jpg
|       `-- sequence.config.json
|-- .gitignore
|-- implementation_plan.md
|-- next.config.mjs
|-- next-env.d.ts
|-- package.json
|-- postcss.config.js
|-- tailwind.config.ts
`-- tsconfig.json
```

## 13. Coding execution order

1. Global shell
   - create Next app structure
   - wire fonts, globals, theme tokens, Tailwind, metadata
2. Header and footer
   - build navigation chrome and page close
3. Hero sequence
   - create manifest-aware loader
   - build the progressive sequence hook
   - implement retina-safe canvas
   - wire sticky scrub orchestration
4. Supporting sections
   - trust bar
   - capability grid
   - workflow story
   - outcomes
   - case studies
   - enterprise readiness
   - final CTA
5. Motion polish
   - tighten reveal timing
   - tune hero copy drift
   - refine glow intensity
6. Performance pass
   - review initial frame count
   - test resize behavior
   - consider smaller mobile assets later
7. Accessibility pass
   - reduced motion
   - focus states
   - semantic landmarks
   - contrast review

## 14. Immediate refinement backlog

- Add `npm install` and run the local build once dependency installation is available.
- Consider a generated low-res mobile frame set for small screens.
- Replace placeholder contact routing with the real Novo AI destination.
- Add real insurer or partner proof only when approved source material exists.
