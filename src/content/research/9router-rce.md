---
title: "Unauthenticated RCE in 9Router"
dek: "Missing authentication exposed privileged functionality; operating-system command injection turned that access into remote code execution."
year: 2026
role: co-research
roleLabel: "Co-research · with Ductinn"
cves: []
tags:
  - "Authentication"
  - "Command injection"
  - "Open source"
featured: true
order: 4
links:
  - label: "GitHub security advisory"
    url: "https://github.com/decolua/9router/security/advisories/GHSA-g6g7-pvmx-m74p"
  - label: "Disclosure record"
    url: "https://dbugs.ptsecurity.com/researchers/Vcth4Nh"
---

## The finding

9Router exposed sensitive application functions without an effective authentication boundary. One reachable path also passed attacker-controlled input into an operating-system command, creating a critical unauthenticated remote-code-execution chain.

## The outcome

The maintainers published **GHSA-g6g7-pvmx-m74p** and credit vcth4nh and Ductinn as co-reporters. The advisory documents affected and patched versions for users operating the project.

This entry follows the primary GitHub advisory identifier because the advisory did not list a CVE at the time this profile was prepared.
