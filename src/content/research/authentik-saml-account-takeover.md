---
title: "SAML identity mismatch in authentik"
dek: "An XML-comment interpretation conflict could bind an attacker's signed external identity to an existing authentik account."
year: 2026
role: independent
roleLabel: "Independent research"
organization: "authentik"
cves:
  - "CVE-2026-57580"
tags:
  - "SAML"
  - "Account takeover"
  - "Identity"
featured: true
order: 2
links:
  - label: "GitHub security advisory"
    url: "https://github.com/goauthentik/authentik/security/advisories/GHSA-35v6-hv2g-6992"
---

## The boundary

authentik can link an inbound SAML identity to a local user by username or email. In the affected configuration, different layers interpreted XML comments inside a signed NameID differently: the assertion remained valid while the value used for account matching was truncated.

## The impact

An attacker with an account at the source identity provider—and control over their own NameID—could make the truncated value match a victim's username or email. That linked the attacker's external identity to the existing account and enabled persistent account takeover without the victim's password or the identity provider's private key.

## The outcome

The maintainers fixed the issue in authentik **2026.5.5** and **2026.2.6**. The advisory assigns **CVE-2026-57580** with a high-severity CVSS score of 8.7. This was an independent submission; other researchers separately reported the same issue.
