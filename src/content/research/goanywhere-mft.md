---
title: "Breaking the first-run boundary"
dek: "Two independently discovered flaws in GoAnywhere MFT turned an initialization route into unauthenticated administrative access."
year: 2024
role: independent
roleLabel: "Independent research"
organization: "Viettel Cyber Security"
cves:
  - "CVE-2024-0204"
  - "CVE-2024-25156"
tags:
  - "Authentication bypass"
  - "Path traversal"
  - "Enterprise software"
featured: true
order: 1
links:
  - label: "Read the research"
    url: "https://blog.viettelcybersecurity.com/authentication-bypass-in-goanywhere-admin-portal/"
  - label: "Fortra · CVE-2024-0204"
    url: "https://www.fortra.com/security/advisories/product-security/fi-2024-001"
  - label: "Fortra · CVE-2024-25156"
    url: "https://www.fortra.com/security/advisories/product-security/fi-2024-004"
---

## The boundary

GoAnywhere MFT exposes a first-run setup flow that should become unreachable after an administrator account exists. I examined how the application decided whether a request belonged inside that trusted setup path—and whether different layers agreed on the same path.

## The finding

A crafted path could pass the authorization check and still resolve to the initial-account workflow. That mismatch made it possible to reach administrative setup without an authenticated session. The work also uncovered a related path-traversal weakness affecting access-control decisions.

## The outcome

I reported both issues to Fortra in 2023. The pre-authentication administrative access was later tracked as **CVE-2024-0204**; the related path-traversal issue was tracked as **CVE-2024-25156**, for which Fortra's advisory credits vcth4nh.

This page describes independent discovery—not exclusive discovery. The vendor's CVE-2024-0204 advisory credits the researchers named in that advisory.
