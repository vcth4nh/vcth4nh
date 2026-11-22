---
name: "thanh.vc"
description: "Boundary studies, an interactive exhibition of Vũ Chí Thành’s research, and its alternate Classic presentation."
colors:
  gallery-dark: "#161614"
  gallery-white: "#f5f1e7"
  gallery-paper: "#eeeae0"
  gallery-ink: "#1a1a17"
  gallery-accent: "#ff592f"
  gallery-link: "#aa340e"
  gallery-muted: "#625e54"
  gallery-rule: "#c2bcb0"
  search-bg: "#fbf9f3"
  ink: "#0b0c0b"
  paper: "#f0eee6"
  line: "#31342f"
  signal: "#59ff8a"
  lime: "#d0ff70"
  accent-hot: "#ff6376"
typography:
  display:
    fontFamily: '"Barlow Condensed", "Arial Narrow", sans-serif'
    fontSize: "clamp(7rem, 14.2vw, 15.4rem)"
    fontWeight: 700
    lineHeight: 0.9
    letterSpacing: "-0.037em"
  display-italic:
    fontFamily: '"Instrument Serif", Georgia, serif'
    fontSize: "clamp(8.5rem, 15.5vw, 17rem)"
    fontWeight: 400
    lineHeight: 0.94
    letterSpacing: "-0.04em"
  headline:
    fontFamily: '"Barlow Condensed", "Arial Narrow", sans-serif'
    fontSize: "clamp(3.6rem, 7.2vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.025em"
  title:
    fontFamily: '"Barlow Condensed", "Arial Narrow", sans-serif'
    fontSize: "clamp(1.85rem, 3.1vw, 3rem)"
    fontWeight: 650
    letterSpacing: "-0.015em"
  body:
    fontFamily: '"Atkinson Hyperlegible Next Variable", "Atkinson Hyperlegible Next", sans-serif'
    fontSize: "clamp(1.04rem, 1rem + 0.15vw, 1.12rem)"
    fontWeight: 400
    lineHeight: 1.6
  metadata:
    fontFamily: '"JetBrains Mono Variable", monospace'
    fontSize: "0.8rem"
    fontWeight: 500
    lineHeight: 1.5
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
  circle: "50%"
spacing:
  gallery-gutter: "clamp(1.25rem, 4.4vw, 5rem)"
  gallery-record: "2rem 0.5rem"
  classic-gutter: "clamp(1.25rem, 4vw, 4.5rem)"
components:
  gallery-contact:
    backgroundColor: "{colors.gallery-accent}"
    textColor: "{colors.gallery-dark}"
    rounded: "{rounded.square}"
    padding: "0.45rem 0.95rem"
  gallery-navigation:
    backgroundColor: "{colors.gallery-dark}"
    textColor: "{colors.gallery-white}"
    typography: "{typography.navigation}"
  gallery-record-tag:
    textColor: "{colors.gallery-link}"
    padding: "0.15rem 0.45rem"
  selected-study:
    backgroundColor: "{colors.gallery-accent}"
    textColor: "{colors.gallery-dark}"
    rounded: "{rounded.square}"
    padding: "0.5rem clamp(0.68rem, 1.6vw, 1.7rem)"
  gallery-search:
    backgroundColor: "{colors.search-bg}"
    textColor: "{colors.gallery-ink}"
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

Boundary studies presents each vulnerability disclosure as a study in an exhibition. Selecting a product changes the sculpture and the adjacent case description. The case links lead to the full finding, attribution and primary sources.

- A dark stage holds the title and sculpture above a paper strip of selectable studies.
- Warm paper carries long-form work. Ruled rows align years, titles and advisory identifiers across the research archive.
- The latest contest result includes the award, both researchers’ credit and the team placements.

## Colors

Vermilion marks actions on charcoal. The navigation uses warm white lettering and the contact button uses dark lettering on vermilion. Links, emphasis and keyboard focus on paper use burnt orange. Muted ink carries years, credits and secondary descriptions.

Classic’s default phosphor palette pairs bright green with near-black. The sage, harbor, grove and signal variants take their values from `src/styles/global.css`.

## Typography

The first word of the exhibition title uses uppercase Barlow Condensed. The second uses lowercase Instrument Serif italic. Barlow Condensed also sets case headings and the large award figure. The afterword uses its bold italic cut. Atkinson Hyperlegible Next carries prose, navigation and action labels. JetBrains Mono identifies years, case numbers, advisories and technology names. Classic uses it for display text as well.

## Layout

The exhibition and its archives share a 1440px maximum content width. On wide screens the sculpture sits between the two words of the title. The author’s introduction and selected case occupy opposite corners. The horizontal study index runs beneath them. At 760px and below, the introduction, index and selected case follow the title and sculpture in reading order. The activity section places the individual contest entry alongside the team's annual placements. Project descriptions and technologies occupy the ruled rows below it.

Inner routes use a two-column introduction with the title on the left. Archive rows put attribution in the first column and reserve the right edge for the identifier and link arrow. At 800px the header converts to a menu and the archive rows stack. The résumé retains an A4 print treatment with 10mm margins.

## Elevation & Depth

Dragging or tapping rotates the projected rings. The arrow keys rotate the sculpture in steps, and Home restores its initial pose. Changing studies briefly fades in the new form. Reduced-motion preferences show it immediately. The surrounding panels meet at flat rules. Classic buttons use a solid offset shadow on hover.

## Shapes

Three stacked cuts form the vermilion brand mark. The header contact button, study rows and project entries have square edges. Circular arrow controls mark links in the archive.

## Components

The study index works as linked product names before enhancement. In the interactive version, Left and Right select adjacent studies, and Home and End select the first and last. The selected study retains its direct case link. The URL records the selection so a visitor can share the study or revisit it with the browser’s Back button.

The magnifier or slash key opens the quick navigator. Typing filters its destinations, arrow keys highlight a result, Enter follows it and Escape closes the dialog. The footer contains social links and the Classic view switch. In Classic, the switch sits in the header or its mobile menu. `presentation=field-notes` selects the exhibition and the saved choice carries across routes.

## Do's and Don'ts

- Keep attribution, identifiers and source links legible when research rows reflow.
- Pair vermilion with dark ink. Use burnt orange for small colored text on paper.
- Keep screen navigation and controls outside the printed résumé.
