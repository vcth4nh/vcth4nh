# Cloudflare Pages deployment

## Site

1. In Cloudflare, create a Pages project connected to `vcth4nh/vcth4nh`.
2. Select the Astro framework preset.
3. Use `npm run build` as the build command and `dist` as the output directory.
4. Deploy the `main` branch.
5. In **Custom domains**, attach `thanh.vc` and optionally redirect `www.thanh.vc` to the apex domain.

The repository includes `public/_headers` with baseline security headers and long-lived caching for fingerprinted assets.

## Protected public email

1. Enable Cloudflare Email Routing for `thanh.vc`.
2. Create `hello@thanh.vc` and forward it to the private inbox.
3. Keep the private address out of the site repository and public résumé.

The site renders the alias in an obfuscated form until JavaScript restores the mail link. This reduces basic harvesting; the alias and Cloudflare forwarding are the actual privacy boundary.

## Coexist with home-hosted subdomains

The Pages project must own the apex record. Do not let a router or DDNS client update `thanh.vc` after the custom domain is attached.

Use this DNS split instead:

| Type | Name | Target | Proxy status |
| --- | --- | --- | --- |
| Pages-managed | `@` | `vcth4nh.pages.dev` | Proxied |
| Pages-managed | `www` | Pages or an apex redirect | Proxied |
| `A` | `home` | Current residential IPv4 | DNS only initially |
| `CNAME` | `*` | `home.thanh.vc` | DNS only initially |

Configure the router's DDNS job to update only the exact `home.thanh.vc` A record. Scope its Cloudflare API token to **Zone / DNS / Edit** for `thanh.vc`; never use or store the Global API Key.

The wildcard will serve undefined subdomains such as `vault.thanh.vc`, while the exact apex and `www` records continue to win. Keep DNS-only for non-HTTP protocols. For HTTP/HTTPS services behind a reverse proxy, Cloudflare proxying can be enabled later after origin TLS and supported ports are confirmed.

For private dashboards and administrative services, prefer WireGuard or named Cloudflare Tunnel routes instead of exposing the home origin through a wildcard.

## Pre-launch checklist

- Replace the portrait placeholder.
- Confirm `hello@thanh.vc` receives mail.
- Review the exact Radboud programme wording after enrolment paperwork is final.
- Refresh `public/resume.pdf` after any résumé edit.
- Check all primary-source links and the three social profiles.
- Add Cloudflare Web Analytics only if the privacy tradeoff is worthwhile.
