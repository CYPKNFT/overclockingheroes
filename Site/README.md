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

## Next Steps — Road to Production

### 1. Finish the placeholders (do this first)

| Priority | File | Action |
|---|---|---|
| High | `Site/src/components/VideoEmbed.tsx` | Replace `dQw4w9WgXcQ` with your real YouTube video ID |
| High | `Site/src/components/Footer.tsx` | Replace `href="#"` with real YouTube channel, Twitter/X, and Discord URLs |
| Medium | `Site/index.html` | Add `og:url` content once domain is live (line with `<!-- TODO: add og:url -->`) |

---

### 2. Deploy to Cloudflare Pages (recommended)

Cloudflare Pages is **free for unlimited sites**, has a global CDN, and serves the `_headers` security file natively.

#### Step-by-step

1. Push all changes to `main` on GitHub
2. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. Authorize GitHub and select `CYPKNFT/overclockingheroes`
4. Set these build settings exactly:

| Setting | Value |
|---|---|
| Build command | `pnpm build` |
| Build output directory | `Site/dist` |
| Root directory | `/` (leave blank / repo root) |
| Node version (env var) | `20` |

5. Click **Save and Deploy** — first deploy takes ~2 min
6. Every future push to `main` auto-deploys

#### Add a custom domain (optional but recommended)

1. In Cloudflare Pages project → **Custom domains** → **Set up a custom domain**
2. Enter your domain (e.g. `overclockingheroes.com`)
3. If domain is already on Cloudflare DNS: one click, instant. If not: add a CNAME record at your registrar pointing to `<project>.pages.dev`
4. Cloudflare issues the TLS cert automatically (Let's Encrypt)

---

### 3. Alternative hosting options

| Platform | Free tier | Notes |
|---|---|---|
| **Cloudflare Pages** | Unlimited | Best CDN, native `_headers` support, zero config |
| **Netlify** | 100 GB/mo bandwidth | Also supports `_headers` file, easy drag-and-drop deploys |
| **Vercel** | 100 GB/mo bandwidth | Excellent DX, but CSP headers need `vercel.json` config instead of `_headers` |
| **GitHub Pages** | Unlimited | Free but no custom headers — CSP won't apply, security score lower |

> **Recommendation:** Stick with Cloudflare Pages. It's the only free tier with zero bandwidth limits and native `_headers` support.

---

### 4. Post-deployment security audit

Run these immediately after your first live deploy:

- [securityheaders.com](https://securityheaders.com) — should score **A** or better
- [observatory.mozilla.org](https://observatory.mozilla.org) — should score **A** or better
- [pagespeed.web.dev](https://pagespeed.web.dev) — target 95+ performance on mobile

If scores are lower than expected, check that Cloudflare isn't stripping your `_headers` file (it shouldn't — it's native to Pages).

---

### 5. Analytics (privacy-friendly)

Avoid Google Analytics — it breaks your clean CSP and sends user data to Google.

| Option | Cost | Notes |
|---|---|---|
| **Cloudflare Web Analytics** | Free | Zero JS, no cookies, GDPR-compliant, built into your Cloudflare dashboard |
| **Plausible** | $9/mo | Beautiful dashboard, open source, EU-hosted |
| **Umami** | Free (self-host) | Self-host on Railway or Fly.io for full control |

To enable Cloudflare Web Analytics: Cloudflare dashboard → **Web Analytics** → **Add a site** → paste the one-line script tag into `Site/index.html`. You'll also need to add `https://static.cloudflareinsights.com` to the `script-src` in `_headers`.

---

### 6. Custom domain email (looks professional)

Once you have a domain, set up a free forwarding email (e.g. `contact@overclockingheroes.com`):

- **Cloudflare Email Routing** — free, built into Cloudflare DNS, forwards to your Gmail/Outlook
- Setup: Cloudflare dashboard → **Email** → **Email Routing** → add a catch-all forwarding rule

---

### 7. Future site features (growth roadmap)

| Feature | Difficulty | Value |
|---|---|---|
| Discord invite widget / link | Easy | High — community building |
| YouTube latest videos feed | Medium | High — keeps site fresh automatically |
| Hardware benchmark database | Hard | High — unique content, SEO value |
| Members / supporters page | Medium | Medium — recognition for donors |
| Blog / articles section | Medium | High — SEO traffic from search |
| Hardware tier list / guide pages | Medium | High — shareable, linkable content |
| Merch store (Printful + Stripe) | Medium | Medium — passive revenue |

---

### 8. SEO quick wins

- Add real social links to Footer (YouTube, Discord) — search engines follow these
- Update `index.html` `og:url` with live domain
- Submit sitemap to Google Search Console: `https://yourdomain.com/sitemap.xml`
- Vite doesn't auto-generate a sitemap — add [vite-plugin-sitemap](https://github.com/jbaubree/vite-plugin-sitemap) when ready
- Create a `Site/public/robots.txt` entry pointing to the sitemap URL once live

---

## License

All rights reserved. © OverClockingHeroes
