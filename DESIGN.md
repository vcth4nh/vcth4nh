---
name: "thanh.vc"
description: "Paper Theatre, a cut-paper stage and printed programme for Vũ Chí Thành’s vulnerability research."
colors:
  theatre-paper: "#f6e5c4"
  theatre-white: "#fff3d9"
  theatre-ink: "#142c69"
  theatre-shadow: "#10214c"
  theatre-coral: "#c44334"
  theatre-link: "#963326"
  theatre-muted: "#645640"
  theatre-rule: "#bcaa8b"
  search-bg: "#fff5df"
  ink: "#0b0c0b"
  paper: "#f0eee6"
  line: "#31342f"
  signal: "#59ff8a"
  lime: "#d0ff70"
  accent-hot: "#ff6376"
typography:
  masthead:
    fontFamily: '"Fraunces Variable", Georgia, serif'
    fontSize: "clamp(1.45rem, 2.05vw, 2rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.035em"
  headline:
    fontFamily: '"Fraunces Variable", Georgia, serif'
    fontSize: "clamp(3rem, 6.35vw, 6.3rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  title:
    fontFamily: '"Fraunces Variable", Georgia, serif'
    fontSize: "clamp(1.48rem, 2.5vw, 2.55rem)"
    fontWeight: 650
    letterSpacing: "-0.015em"
  body:
    fontFamily: '"Atkinson Hyperlegible Next Variable", "Atkinson Hyperlegible Next", sans-serif'
    fontSize: "clamp(1.04rem, 1rem + 0.15vw, 1.12rem)"
    fontWeight: 400
    lineHeight: 1.6
  metadata:
    fontFamily: '"JetBrains Mono Variable", monospace'
    fontSize: "clamp(0.75rem, 0.72rem + 0.1vw, 0.8rem)"
  navigation:
    fontFamily: '"Fraunces Variable", Georgia, serif'
    fontSize: "clamp(1rem, 1.24vw, 1.15rem)"
    fontWeight: 625
    lineHeight: 1.2
  classic-display:
    fontFamily: '"JetBrains Mono Variable", "JetBrains Mono", monospace'
    fontWeight: 680
    lineHeight: 0.9
rounded:
  square: "0px"
  circle: "50%"
spacing:
  masthead-gutter: "clamp(1rem, 2.7vw, 3rem)"
  archive-gutter: "clamp(1.25rem, 4.4vw, 5rem)"
  programme-section: "clamp(3.2rem, 6.4vw, 6.3rem)"
  classic-gutter: "clamp(1.25rem, 4vw, 4.5rem)"
components:
  programme-signature:
    textColor: "{colors.theatre-shadow}"
    typography: "{typography.masthead}"
  programme-navigation:
    backgroundColor: "{colors.theatre-paper}"
    textColor: "{colors.theatre-shadow}"
    typography: "{typography.navigation}"
  programme-record-tag:
    textColor: "{colors.theatre-link}"
    padding: "0.15rem 0.45rem"
  programme-search:
    backgroundColor: "{colors.search-bg}"
    textColor: "{colors.theatre-ink}"
    padding: "0.65rem 0.75rem"
  project-notes:
    backgroundColor: "{colors.theatre-paper}"
    textColor: "{colors.theatre-ink}"
    padding: "clamp(1rem, 2.3vw, 1.55rem)"
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

Paper Theatre turns the homepage into a toy theatre. Red curtains and layered cobalt arches frame a different cut-paper scene for each research case. Separate paper props move within each set. The title on the apron opens the case, and the pull tab changes scenes.

- Vũ Chí Thành’s name anchors a narrow cream masthead above the stage.
- The programme lists the cases in performance order, with a product, year, title and credit for each.
- The results section prints the latest award and researcher credits beside the annual team placements.

## Colors

Cobalt carries the lettering and the open-source tools section. Coral appears in the curtains and paper edges. A deeper brick ink gives small links on cream enough contrast. Tan rules separate programme entries and table rows.

Classic’s phosphor palette pairs bright green with near-black. Its sage, harbor, grove and signal variants use the theme variables in `src/styles/global.css`.

## Typography

Fraunces sets the nameplate, navigation and programme headings. The bold italic cut gives the short quotation space between the tools and contact sections. Atkinson Hyperlegible Next carries biographies, project descriptions and case prose. The archive uses JetBrains Mono for advisories, years and attribution. Classic uses the same mono family for display text.

## Layout

The illustrated stage runs from edge to edge below the masthead. The apron identifies the current scene and gives readers a direct link to its case. A row of scene links permits direct selection. The printed programme brings all the case links together in one place.

The results, tools and afterword sit in a 1250px reading area. Two-column sections collapse below 760px. Inner pages give research titles more space beside their credit and identifiers. The masthead changes to a compact menu at 800px. The résumé has its own A4 print layout with 10mm page margins.

## Elevation & Depth

Visible folds, overlapping layers and directional shadows give the stage its depth. Two paper curtain wings cover the opening during a scene change. The key, mirror, letter and plug move independently of their printed backdrops. Pause motion holds the props still and skips the curtain travel. The stage remembers a pause for the current browser session and rests when it is offscreen. A reduced-motion preference starts it still. A small sample of paper fibre carries the texture into the masthead and programme. Fine rules and changes of ink organize the longer text.

## Shapes

The cut-paper arch and curtain folds frame the scenery. The pull tab protrudes below the stage apron. The paper inserts in the tools section use a narrow crease and folded corner. Small circular arrows mark links in the archive.

## Components

A visitor can turn the key, flip the mirror, send the letter or patch the plug in its own scene. Activating the pull tab advances the scene. Dragging the tab draws the wings together. Releasing it advances the scene, and a click or keyboard activation performs the same change. The selected scene has a shareable URL fragment that also restores the selection on browser navigation. Scene links let visitors go directly to another set.

Each open-source tool keeps its repository link and description visible. Its Project notes disclosure unfolds an ivory insert with the published notes and technologies. The disclosure works with a keyboard, touch or mouse, including when JavaScript is disabled. Reduced motion preserves the disclosure without its folding transition.

The masthead carries Research, Tools, Résumé and Contact. The magnifier and slash key open the quick navigator. Typing filters its destinations, arrow keys highlight a result, Enter follows it and Escape closes the dialog. The footer holds the Classic view switch. In Classic, the switch sits in its header or mobile menu. Existing `presentation=field-notes` links select Paper Theatre.

## Do's and Don'ts

- Keep the links to the full cases accessible in both the stage captions and the programme.
- Preserve researcher credits, team placements and source links as layouts reflow.
- Use the deep brick ink for small colored text on cream.
- Keep screen navigation and controls outside the printed résumé.
