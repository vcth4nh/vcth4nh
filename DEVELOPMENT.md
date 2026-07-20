# Site development

The site is a static Astro project using strict TypeScript, Tailwind CSS, and typed Markdown content collections.

## Local commands

```sh
npm install
npm run dev
npm run check
npm run build
npm run preview
```

The production output is written to `dist/`.

## Content map

- `src/data/profile.ts` — shared biography, career, education, capabilities, awards, and homelab data.
- `src/content/research/` — concise, sourced research cases.
- `src/content/projects/` — open-source project records.
- `src/pages/resume/index.astro` — print-optimized public résumé.
- `profile-kit/` — copy for LinkedIn, X, speaker forms, and résumé maintenance.

## Replace the portrait placeholder

1. Export a portrait as a web-optimized `public/portrait.webp` (roughly 1200 × 1500, 4:5).
2. In `src/components/PortraitPlaceholder.astro`, replace the placeholder `<div>` with an `<img>` using `src="/portrait.webp"`, `width="1200"`, `height="1500"`, and descriptive alt text.
3. Keep the 4:5 wrapper so the hero layout does not shift.

## Refresh the PDF résumé

1. Run the site locally.
2. Open `/resume/` in a Chromium-based browser.
3. Select **Print / save PDF**, enable background graphics, and use the default A4 margins supplied by the print stylesheet.
4. Save the result as `public/resume.pdf`.

The PDF is intentionally a checked-in snapshot. It is not generated during deployment, so a browser change cannot unexpectedly alter a recruiter-facing document.
