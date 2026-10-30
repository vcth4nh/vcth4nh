---
name: "thanh.vc"
description: "Existing Field Notes and Classic presentations of the research portfolio."
colors:
  retro-ink: "#28192f"
  retro-paper: "#f1e7c8"
  retro-paper-2: "#ddc99a"
  retro-jade: "#0a746a"
  retro-jade-dark: "#07514d"
  retro-citron: "#d8e05b"
  retro-dragonfruit: "#db5d83"
  retro-apricot: "#e9955e"
  retro-indigo: "#9585c2"
  retro-lacquer: "#a92e5a"
  retro-white: "#fff9ea"
  ink: "#0b0c0b"
  ink-soft: "#121412"
  panel: "#171917"
  line: "#31342f"
  paper: "#f0eee6"
  paper-muted: "#d7d4ca"
  muted: "#9d9f98"
  signal: "#59ff8a"
  lime: "#d0ff70"
  accent-2: "#8edcff"
  accent-3: "#ffd166"
  accent-hot: "#ff6376"
typography:
  display:
    fontFamily: '"Pixelify Sans Variable", "Courier New", monospace'
    fontSize: "clamp(4.2rem, 9.2vw, 9rem)"
    fontWeight: 700
    lineHeight: 0.84
    letterSpacing: "-0.025em"
  headline:
    fontFamily: '"Pixelify Sans Variable", "Courier New", monospace'
    fontSize: "clamp(3.3rem, 7.6vw, 7.5rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.02em"
  title:
    fontFamily: '"Pixelify Sans Variable", "Courier New", monospace'
    fontSize: "clamp(2rem, 3.5vw, 3.8rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.015em"
  body:
    fontFamily: '"Atkinson Hyperlegible Next Variable", Arial, sans-serif'
    fontSize: "clamp(1.05rem, 1rem + 0.18vw, 1.16rem)"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: '"JetBrains Mono Variable", monospace'
    fontSize: "clamp(0.76rem, 0.72rem + 0.12vw, 0.84rem)"
    fontWeight: 650
    letterSpacing: "0.06em"
  hand:
    fontFamily: '"Caveat Variable", "Comic Sans MS", cursive'
    fontWeight: 750
  navigation:
    fontFamily: '"Caveat Variable", "Comic Sans MS", cursive'
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1
  classic-body:
    fontFamily: '"Atkinson Hyperlegible Next Variable", "Atkinson Hyperlegible Next", sans-serif'
    fontSize: "clamp(1.04rem, 1rem + 0.15vw, 1.12rem)"
    fontWeight: 400
    lineHeight: 1.6
  classic-display:
    fontFamily: '"JetBrains Mono Variable", "JetBrains Mono", monospace'
    fontWeight: 680
    lineHeight: 0.9
rounded:
  square: "0px"
  circle: "50%"
spacing:
  tag-gap: "0.4rem"
  grid-gap: "1rem"
  classic-gutter: "clamp(1.25rem, 4vw, 4.5rem)"
  field-notes-gutter: "clamp(1.25rem, 6vw, 6rem)"
components:
  field-notes-primary-link:
    backgroundColor: "{colors.retro-jade}"
    textColor: "{colors.retro-ink}"
    rounded: "{rounded.square}"
    padding: "0.8rem 1.25rem"
  field-notes-secondary-link:
    backgroundColor: "transparent"
    textColor: "{colors.retro-ink}"
    typography: "{typography.hand}"
    padding: "0.8rem 1.25rem"
  field-notes-case:
    backgroundColor: "{colors.retro-citron}"
    textColor: "{colors.retro-ink}"
    padding: "clamp(1.6rem, 3vw, 2.7rem)"
  field-notes-navigation:
    textColor: "{colors.retro-ink}"
    typography: "{typography.navigation}"
  field-notes-search:
    backgroundColor: "transparent"
    textColor: "{colors.retro-ink}"
  classic-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    rounded: "{rounded.square}"
    padding: "0.75rem 1.1rem"
  classic-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "{rounded.square}"
    padding: "0.75rem 1.1rem"
  classic-tag:
    padding: "0.38rem 0.62rem"
    rounded: "{rounded.square}"
---

# Design System: thanh.vc

## Overview

This record describes the implemented site. Its sources are `src/styles/retro.css`, `src/styles/global.css`, the Astro components, and computed styles sampled at desktop and mobile widths. It establishes no new aesthetic direction.

Field Notes is the default presentation: ruled paper, irregular cut-paper shapes, pixel headings, handwritten annotations, colored research notes, and hard offset shadows. Classic is a separate presentation with dark surfaces, monospaced headings, rectangular panels, fine borders, and bright accents. The switch changes presentation across routes; preserve its behavior when editing either view.

**Key Characteristics:**

- Field Notes combines Pixelify Sans, Caveat, Atkinson Hyperlegible Next, and JetBrains Mono for distinct roles.
- Classic uses JetBrains Mono for headings and labels, with Atkinson Hyperlegible Next for prose.
- Research cards retain readable attribution, identifiers, and source destinations in both presentations.

The existing names Field Notes and Classic describe the two views. An additional creative metaphor or aesthetic rejection has not been established.

## Colors

The `retro-*` tokens describe Field Notes. Unprefixed colors describe Classic's default phosphor theme. Classic also implements sage, harbor, grove, and signal theme overrides in `global.css`; use the active CSS variables when editing those themes.

### Primary

Field Notes uses jade for major headings, primary controls, and illustrated structures. Dark jade supports smaller labels. Classic uses signal green for primary actions and focus on the research identity.

### Secondary

Field Notes uses citron, dragonfruit, apricot, and indigo for separate research notes and illustrations. Lacquer colors handwritten emphasis. Classic uses cyan, amber, and pink to distinguish accents within the dark presentation.

### Neutral

Field Notes uses cream paper and near-white scraps with plum ink; its inner pages also use dark plum surfaces. Classic pairs near-black backgrounds and dark panels with warm light text, muted supporting text, and restrained borders.

The historical aliases `retro-blue`, `retro-yellow`, `retro-coral`, `retro-mint`, and `retro-purple` resolve to jade, citron, dragonfruit, apricot, and indigo respectively. Their names do not authorize different hues.

## Typography

The frontmatter records desktop type roles and the fluid body sizes. Field Notes uses Pixelify Sans for large headings, Caveat for names and marginal notes, Atkinson Hyperlegible Next for prose, and JetBrains Mono for technical labels and controls. Inner-page headings can use the shared monospaced display role.

Classic uses the monospaced display family throughout its heading hierarchy. Its `font-serif` variable also resolves to JetBrains Mono; the variable name is historical, not evidence of a serif face.

Mobile rules reduce the display sizes and offsets. Preserve those overrides when reworking a heading. Small technical labels already exist below body-copy sizes; this record does not establish them as a minimum for new content.

## Layout

Field Notes caps its outer canvas at 1500px and uses fluid horizontal section padding. Its desktop hero layers text with identity artwork. Research notes use individually positioned, rotated cards; at narrower widths they move into document flow. Its responsive rules occur at 1180px, 1120px, 820px, 620px, and 390px, with each threshold serving different elements.

Classic uses a centered 1380px shell, fluid gutters, and a twelve-column research grid. The first two research cards span seven and five columns, followed by six-column cards. Responsive rules at 960px and 680px simplify columns and switch to the mobile navigation.

The résumé has a separate A4 print treatment with 10mm page margins. Printing removes site navigation, decorative backgrounds, and shadows.

## Elevation & Depth

Field Notes uses hard offset shadows, rotated layers, clipped paper edges, and occasional organic silhouettes. Hover states can change the shadow direction and straighten or lift the target. The navigator dialog uses a translucent plum backdrop with a small blur.

Classic separates most regions through surface tone and borders. Buttons and research cards acquire hard accent-colored offset shadows on hover. Its résumé sheet uses a softer shadow on screen.

Exact shadows and motion values are recorded in `.impeccable/design.json`. Both stylesheets reduce animation and transition durations when reduced motion is requested.

## Shapes

Field Notes uses polygon clipping for paper scraps, controls, and cards. Decorative identity forms and switch thumbs use asymmetric curved outlines. Preserve the component's existing clip path when making a narrow refinement.

Classic uses square panel and button corners, with circles reserved for arrow controls and small markers. Neither presentation defines a general rounded-card scale.

## Components

### Buttons and Links

Field Notes primary links use clipped jade shapes and monospaced uppercase labels. Secondary links use handwritten text with a citron underline. Desktop hover changes rotation and shadow; focus has a dragonfruit outline.

There is an existing cascade discrepancy in the primary anchor: its rule declares near-white text, while the more specific link rule makes its computed text plum. The frontmatter records the observed anchor color. This discrepancy is not an approved contrast requirement for future variants.

Classic primary buttons use signal fill with ink text; quiet buttons use transparent fill with light text. Both use square corners, uppercase mono labels, and a hard offset shadow on hover. Shared keyboard focus uses a lime outline.

### Research Cards and Tags

Field Notes cases use colored clipped paper, tape-like decoration, pixel titles, handwritten attribution, and small monospaced tags. Hover lifts the card and changes its shadow. The tags are text separated by a small ornament.

Classic cases are bordered panels with a light first card and dark subsequent cards. Attribution markers, tags, identifiers, and arrow controls support the title and summary. Classic tags are compact rectangular outlines.

### Navigation

Both presentations use `SiteHeader.astro` on every route, with Research, Projects, and Résumé destinations from `src/data/navigation.ts`. Field Notes keeps handwritten links with numbered mono prefixes and a drawn underline for the active page, hover, and keyboard focus, alongside a jade contact link, the presentation switch, and the quick navigator. At compact widths, its controls and links stack into rows. Classic uses numbered navigation and a details-based mobile menu. The shared header is sticky in both views.

### Navigator Input

Field Notes includes a native dialog on every route with a monospaced search field, an ink underline, and a filtered destination list. The input is transparent; the active destination receives a citron paper shape. Destinations use full site paths so they work from inner pages. Preserve native dialog behavior and the implemented keyboard navigation.

### Presentation Switch

The Classic switch persists the selected presentation in local storage and updates `aria-checked`. Field Notes is the fallback when storage is unavailable. A `presentation` query parameter can select either view; theme previews have their own separate setting.

## Do's and Don'ts

### Do:

- Do use the active presentation's existing CSS variables and font roles.
- Do preserve responsive positioning, focus behavior, and reduced-motion handling when refining a component.
- Do keep attribution and primary-source links visible in research components.
- Do preserve the résumé's separate print treatment.

### Don't:

- Don't merge the two presentations' palettes or type systems during a narrow refinement.
- Don't treat historical variable names as instructions to introduce new colors or fonts.
- Don't promote the documented primary-link cascade discrepancy into a design requirement.
