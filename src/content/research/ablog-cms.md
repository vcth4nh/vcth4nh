---
title: "Chaining SSRF into session compromise"
dek: "An unauthenticated SSRF and improper log neutralization in a-blog cms could be combined to hijack an administrative session."
year: 2025
role: independent
roleLabel: "Independent research"
organization: "Viettel Cyber Security"
cves:
  - "CVE-2025-36560"
  - "CVE-2025-41429"
tags:
  - "SSRF"
  - "Log injection"
  - "Session security"
featured: true
order: 3
links:
  - label: "JPCERT/CC advisory"
    url: "https://jvn.jp/en/vu/JVNVU90760614/index.html"
---

## The chain

The first issue allowed an unauthenticated attacker to make server-side requests through a-blog cms. A second weakness failed to neutralize attacker-controlled data written into logs. In combination, the two behaviors could cross another trust boundary and expose an administrator's session.

## The outcome

JPCERT/CC published the coordinated advisory and credits **Vu Chi Thanh (vcth4nh)** as the reporter. The issues were assigned **CVE-2025-36560** and **CVE-2025-41429**.

The case is a useful reminder that individually scoped bugs can become materially more serious when they share data and trust assumptions.
