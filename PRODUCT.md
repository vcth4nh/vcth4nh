# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Research collaborators, hiring teams, and consulting clients have equal priority. Visitors need to evaluate Vũ Chí Thành's expertise through disclosed research, practical tools, and career information, then contact him about relevant work.

## Product Purpose

`thanh.vc` is the canonical public portfolio for Vũ Chí Thành (`vcth4nh`). It brings research evidence, open-source projects, and a public résumé together so visitors can assess his work and start a conversation.

Success includes research collaboration, hiring conversations, and consulting inquiries. No one outcome takes priority over the others.

## Positioning

Vulnerability researcher building exploits and AI-assisted security tooling.

The portfolio supports this position with attributed disclosure records and tools used in research. Its research content focuses on authentication, trust boundaries, and complex application behavior across web, mobile, and IoT systems.

## Operating Context

- Visitors can browse research at `/research/`, read individual cases, and follow links to primary advisories or published research.
- `/projects/` introduces open-source tools and links to their repositories.
- `/resume/` provides a public web résumé, printing, and a downloadable PDF.
- Contact uses the public `hello@thanh.vc` alias and linked professional profiles.
- The repository README is the technical profile index. `profile-kit/` contains related professional copy; `thanh.vc` remains the canonical profile.

## Capabilities and Constraints

- The existing implementation is a static Astro site with typed Markdown content collections. Shared profile data lives in `src/data/profile.ts`; research and project entries live under `src/content/`.
- Research records distinguish independent work, co-research, and team outcomes. Preserve those distinctions, exact identifiers, and source links. Independent discovery does not imply exclusive discovery or vendor credit beyond what the source states.
- Record Pwn2Own Ireland results as team placements: Viettel Cyber Security, 1st in 2024; ANHTUD, 2nd in 2025; VinSOC, 5th in 2026. Feature the 2026 Philips Hue Bridge Pro entry and its US$40,000 award as the latest activity, with credit to Vũ Chí Thành and Huỳnh Đức Tin and a link to ZDI’s results. Disclosed research and current tooling remain the basis for evaluating expertise.
- Use the user-selected quote “Absence of evidence is not evidence of absence.” on the homepage in both presentations.
- Preserve the public résumé and protected contact alias. Keep the private forwarding address out of public content.
- `public/resume.pdf` is a checked-in snapshot, refreshed from the web résumé when its content changes. It is not generated during deployment.
- Cloudflare Pages is the documented deployment target in `DEPLOYMENT.md`.

### Open Facts

- Radboud status conflicts across existing content: `README.md` says incoming student, while `src/data/profile.ts` and the site say current student. Confirm the status and programme wording before reconciling those sources.
- Deployment status and delivery to the public email alias have not been verified during initialization.
- No additional product-specific accessibility standard or language requirement has been established.

## Brand Commitments

Preserve the name Vũ Chí Thành, handle `vcth4nh`, canonical domain `thanh.vc`, and the confirmed vulnerability-research positioning. Public claims must retain their evidence and attribution across the site, résumé, repository profile, and profile kit.

## Evidence on Hand

These paths identify existing material; initialization does not independently verify the external claims in it.

- `src/content/research/` contains cases for GoAnywhere MFT, authentik, a-blog cms, and 9Router, with attribution and links to primary sources.
- `src/content/projects/` contains IdeSense and decaf records with repository links.
- `src/data/profile.ts` contains biography, experience, education, capabilities, and recognition. Resolve the status conflict above before using it to update other profiles.
- `src/pages/resume/index.astro` and `public/resume.pdf` provide the web résumé and PDF snapshot.
- `profile-kit/` contains speaker bios, LinkedIn and X copy, and résumé corrections.
- `public/` contains social-preview and icon assets. `src/components/PortraitPlaceholder.astro` contains placeholder identity artwork; the portrait file described in `DEVELOPMENT.md` is absent.

New testimonials, client endorsements, performance figures, or credentials require supplied evidence.

## Product Principles

1. Serve research collaboration, hiring, and consulting equally.
2. Make technical claims traceable to evidence and preserve the limits of that evidence.
3. Credit individual, shared, and team contributions precisely.
4. Keep research, tools, and résumé information consistent across public profiles.
5. Make professional contact possible through the public alias while protecting the private inbox.
