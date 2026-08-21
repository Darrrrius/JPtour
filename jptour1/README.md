# JPTour

First version of a trilingual Japan day-tour website. It is a static Next.js site, ready for Cloudflare Pages.

## Run locally

```powershell
pnpm install
pnpm dev
```

Open `http://localhost:3000`. The Chinese home page is at `/`; the dedicated language routes are `/zh/`, `/en/`, and `/ja/`.

## Build for Cloudflare Pages

```powershell
pnpm build
```

Upload the generated `out` folder to Cloudflare Pages (Direct Upload), or connect the repository and use:

- Build command: `pnpm build`
- Build output directory: `out`

## Before publishing

1. Replace placeholder booking URLs with verified Klook, KKday, or Trip.com product/affiliate links.
2. Replace the three review cards with permissioned reviews, source, and date.
3. Update the placeholder email and LINE/WhatsApp URLs.
4. Add a privacy policy, terms, business identity, and affiliate disclosure appropriate for where the business operates.
