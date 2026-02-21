# OverClockingHeroes — Landing Page & Donation Site

Landing page for **OverClockingHeroes**, a university CS group that produces YouTube videos on GPU and CPU overclocking, benchmarking, and gaming performance. Includes a Ko-fi donation integration.

**Live site:** _[add URL after deployment]_
**YouTube:** _[add channel URL]_
**Ko-fi:** https://ko-fi.com/overclockingheroes

---

## Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS v3 |
| Components | shadcn/ui + Radix UI |
| Icons | lucide-react |
| Package manager | pnpm (monorepo workspace) |
| Hosting | Cloudflare Pages |
| Donations | Ko-fi |

---

## Project Structure

```
OverClockHeroes/              ← repo root / pnpm workspace root
├── logo.jpg                  ← brand logo
├── package.json              ← workspace root (pnpm overrides live here)
├── pnpm-workspace.yaml       ← workspace config
├── pnpm-lock.yaml
└── Site/                     ← the web app
    ├── index.html            ← entry point + OG/SEO meta tags
    ├── public/
    │   ├── _headers          ← Cloudflare/Netlify security headers (CSP, HSTS, etc.)
    │   ├── logo.jpg          ← OG image for social link previews
    │   ├── favicon.ico
    │   └── robots.txt
    ├── src/
    │   ├── main.tsx          ← app entry, dark mode initialisation
    │   ├── App.tsx           ← router setup
    │   ├── index.css         ← Tailwind + CSS variables + custom utilities
    │   └── components/
    │       ├── Header.tsx    ← fixed nav with Ko-fi donate button
    │       ├── HeroSection.tsx
    │       ├── VideoEmbed.tsx
    │       ├── DonationCTA.tsx
    │       ├── Footer.tsx
    │       ├── ThemeToggle.tsx
    │       └── ui/           ← shadcn/ui generated components
    └── pages/
        ├── Index.tsx
        └── NotFound.tsx
```

---

## Getting Started

Requires [pnpm](https://pnpm.io). Install once globally:

```bash
npm install -g pnpm
```

Clone and install from the **repo root** (not inside `Site/`):

```bash
git clone https://github.com/CYPKNFT/overclockingheroes
cd overclockingheroes
pnpm install
```

### Dev server

```bash
pnpm dev
```

Runs at `http://localhost:8080`

### Production build

```bash
pnpm build
```

Output goes to `Site/dist/`

### Preview production build locally

```bash
pnpm preview
```

---

## Configuration — Things to Update

| File | What to change |
|---|---|
| `src/components/VideoEmbed.tsx` | Replace YouTube video ID with a real video |
| `src/components/Footer.tsx` | Replace `href="#"` with real YouTube, Twitter, Discord URLs |
| `index.html` | Add `og:url` once domain is set |

---

## Security

Security headers are served via `public/_headers` (Cloudflare Pages / Netlify format).

Headers in place:
- `Strict-Transport-Security` — HSTS with 2-year max-age + preload
- `Content-Security-Policy` — restricts scripts, styles, frames, fonts, images to known safe origins
- `X-Frame-Options: DENY` — prevents clickjacking
- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy` — disables camera, mic, geolocation, payment, USB

Verify after deployment:
- https://securityheaders.com
- https://observatory.mozilla.org

Dependency vulnerabilities: **0** (enforced via pnpm overrides in root `package.json`)

---

## Deployment — Cloudflare Pages

1. Go to [Cloudflare Pages](https://pages.cloudflare.com) → Create a project → Connect GitHub
2. Select the `CYPKNFT/overclockingheroes` repo
3. Set build configuration:
   - **Build command:** `pnpm build`
   - **Build output directory:** `Site/dist`
   - **Root directory:** `/` (repo root, not `Site/`)
4. Deploy — every push to `main` auto-deploys

---

## Donation Integration

Ko-fi is integrated via direct links. No third-party scripts are loaded — donation buttons are plain anchor tags pointing to `https://ko-fi.com/overclockingheroes`. This keeps the CSP clean and page load fast.

Payment processor connected: **Stripe** (via Ko-fi dashboard)

---

## License

All rights reserved. © OverClockingHeroes
