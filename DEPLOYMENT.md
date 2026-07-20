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

## Pre-launch checklist

- Replace the portrait placeholder.
- Confirm `hello@thanh.vc` receives mail.
- Review the exact Radboud programme wording after enrolment paperwork is final.
- Refresh `public/resume.pdf` after any résumé edit.
- Check all primary-source links and the three social profiles.
- Add Cloudflare Web Analytics only if the privacy tradeoff is worthwhile.
