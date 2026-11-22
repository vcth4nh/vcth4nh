---
name: "thanh.vc"
description: "A lavender research journal with a persistent Classic presentation."
colors:
  journal-bg: "#eeecf6"
  journal-ink: "#221f29"
  journal-violet: "#6542a6"
  journal-deep: "#4c3388"
  journal-muted: "#635e6c"
  journal-line: "#c9c3d3"
  activity-bg: "#30263e"
  activity-ink: "#f4effc"
  workbench-bg: "#e2dceb"
  button-text: "#faf8ff"
  search-bg: "#f8f6fb"
  ink: "#0b0c0b"
  paper: "#f0eee6"
  line: "#31342f"
  signal: "#59ff8a"
  lime: "#d0ff70"
  accent-hot: "#ff6376"
typography:
  display:
    fontFamily: '"Barlow Condensed", "Arial Narrow", sans-serif'
    fontSize: "clamp(5.7rem, 8.8vw, 8.2rem)"
    fontWeight: 700
    lineHeight: 0.86
    letterSpacing: "-0.032em"
  headline:
    fontFamily: '"Barlow Condensed", "Arial Narrow", sans-serif'
    fontSize: "clamp(2.85rem, 4.3vw, 4.25rem)"
    fontWeight: 600
    lineHeight: 0.97
    letterSpacing: "-0.02em"
  title:
    fontFamily: '"Barlow Condensed", "Arial Narrow", sans-serif'
    fontSize: "clamp(1.65rem, 2.4vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.012em"
  body:
    fontFamily: '"Atkinson Hyperlegible Next Variable", "Atkinson Hyperlegible Next", sans-serif'
    fontSize: "clamp(1.04rem, 1rem + 0.15vw, 1.12rem)"
    fontWeight: 400
    lineHeight: 1.6
  metadata:
    fontFamily: '"JetBrains Mono Variable", monospace'
    fontSize: "0.76rem"
    fontWeight: 400
  navigation:
    fontFamily: '"Atkinson Hyperlegible Next Variable", "Atkinson Hyperlegible Next", sans-serif'
    fontSize: "0.98rem"
    fontWeight: 550
  classic-display:
    fontFamily: '"JetBrains Mono Variable", "JetBrains Mono", monospace'
    fontWeight: 680
    lineHeight: 0.9
rounded:
  square: "0px"
  button: "4px"
  circle: "50%"
spacing:
  journal-gutter: "clamp(1.25rem, 5vw, 5rem)"
  journal-section: "clamp(3.3rem, 5.4vw, 5.1rem)"
  classic-gutter: "clamp(1.25rem, 4vw, 4.5rem)"
components:
  journal-primary:
    backgroundColor: "{colors.journal-ink}"
    textColor: "{colors.button-text}"
    rounded: "{rounded.button}"
    padding: "0.62rem 1.1rem"
  journal-secondary:
    textColor: "{colors.journal-ink}"
    padding: "0.35rem 0"
  journal-navigation:
    textColor: "{colors.journal-ink}"
    typography: "{typography.navigation}"
  journal-record:
    textColor: "{colors.journal-ink}"
    typography: "{typography.title}"
    padding: "1.48rem 0"
  journal-search:
    backgroundColor: "{colors.search-bg}"
    textColor: "{colors.journal-ink}"
    padding: "0.65rem 0.75rem"
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

The default presentation lays out Vũ Chí Thành’s work as a research journal. A graphite CRT with a lilac wireframe landscape sits opposite the introduction. Small registration marks frame the image and a quotation sits beneath it.

- The deep-plum activity band gives the latest result, its date, credits, and source a single place on the page.
- Research entries sit on flat ruled rows with visible years, identifiers, and attribution.
- Classic uses dark surfaces, monospaced headings, bright accents, and its own research-card grid.

## Colors

Lavender paper runs behind the header, introduction, and archive. Graphite carries headings and primary buttons. Violet marks emphasis, links, and the wordmark symbol. The open-source section has a slightly darker lavender ground. Classic’s phosphor theme uses the unprefixed colors above. Its sage, harbor, grove, and signal themes override the shared variables in `src/styles/global.css`.

## Typography

Barlow Condensed sets journal headings. The homepage title pairs bold upright and bold italic on two lines. Atkinson Hyperlegible Next carries prose, navigation, and actions in both presentations. JetBrains Mono sets years, advisory identifiers, stack names, and the handle. Classic extends that face to display headings and controls.

## Layout

Journal content shares a 1280px shell. The introduction pairs copy and artwork in equal columns. The latest activity fills the viewport width with its content aligned to the same shell. The homepage research rows align the year, finding, credit, and link arrow. At 680px and below, the artwork follows the introduction and attribution moves beneath the finding. The journal header switches to a compact menu at 800px.

Classic has a 1380px shell and a twelve-column research grid. The résumé has a separate A4 print layout with 10mm margins.

## Elevation & Depth

Rules and changes in paper tone separate journal sections. The CRT image supplies depth through its casing, halftone texture, and contact shadow. Its short contrast and position transition respects reduced motion. Classic buttons use a solid offset shadow on hover.

## Shapes

The CRT plate has four small crosshairs. One-pixel dividers run across the archive. Homepage buttons have a slight corner radius, and each finding ends in a circular arrow control. The journal header uses a stepped violet symbol beside the handle.

## Components

The homepage pairs a dark primary research link with an underlined résumé link. Inside the plum band, the source link uses a light outline. The archive keeps the whole research row clickable and changes the heading and arrow color on hover.

The sticky journal header includes primary routes, search, and contact. The magnifier or slash key opens the native quick navigator. Search filters its destinations, the arrow keys select a match, Enter follows it, and Escape dismisses it.

The journal footer holds the Classic switch. In Classic, the switch sits in the header or mobile menu. The choice persists across routes in local storage. Existing `presentation=field-notes` URLs select the journal.

## Do's and Don'ts

- Do keep attribution, identifiers, and source links legible when rows reflow.
- Do use the active presentation’s palette and preserve its keyboard focus and reduced-motion behavior.
- Do keep screen-only navigation and controls outside the printed résumé.
