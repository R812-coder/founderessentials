# flbizstart.com

> Plain-language guides for new Florida LLC owners. Published by Sunwrit.

A Next.js 14 (App Router) site with editorial design, Markdown-driven articles, affiliate-link management via environment variables, and full SEO setup. Designed to look like a real publication — not an affiliate funnel — so it passes review at Mercury, Brex, Bench, and other strict programs.

---

## Stack

- **Framework:** Next.js 14.2 (App Router, React Server Components)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + custom editorial CSS
- **Fonts:** Instrument Serif (display, italic accents) + Newsreader (body) + JetBrains Mono (UI), all via `next/font`
- **Markdown:** `gray-matter` (frontmatter) + `react-markdown` + `remark-gfm` + `rehype-raw` + `rehype-slug`
- **Analytics:** Vercel Analytics (privacy-friendly, no cookies)
- **Sitemap:** `next-sitemap` + Next.js dynamic sitemap
- **Forms:** Web3Forms (free, 250/mo) for contact; configurable Beehiiv/ConvertKit endpoint for email signups
- **Hosting:** Vercel (free Hobby tier handles this entire site)

---

## Local development

### 1. Install Node.js 18.17+ and pnpm or npm

```bash
node -v   # should be 18.17 or higher
```

### 2. Clone and install dependencies

```bash
git clone https://github.com/yourusername/flbizstart.git
cd flbizstart
npm install
```

### 3. Set up environment variables

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in:

- `NEXT_PUBLIC_SITE_URL` — for now, `http://localhost:3000`. Update to `https://flbizstart.com` for production.
- `NEXT_PUBLIC_WEB3FORMS_KEY` — get a free access key at [web3forms.com](https://web3forms.com) (no signup required for basic use). Without this, the contact form falls back to logging submissions to Vercel function logs.
- `NEXT_PUBLIC_AFF_*` — your real affiliate URLs. Until you have them, leave the placeholders — they'll resolve to `#` and the buttons will still render.

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project structure

```
flbizstart/
├── content/articles/             # Markdown articles (frontmatter + body)
│   ├── how-to-start-llc-florida.md
│   ├── best-business-bank-florida-llc.md
│   ├── florida-llc-ein.md
│   ├── best-registered-agent-florida.md
│   └── florida-llc-annual-report.md
├── public/
│   └── favicon.svg               # Custom editorial favicon
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout, fonts, metadata
│   │   ├── page.tsx              # Homepage
│   │   ├── globals.css           # Editorial CSS, drop caps, paper grain
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── disclosure/page.tsx
│   │   ├── privacy/page.tsx
│   │   ├── terms/page.tsx
│   │   ├── resources/page.tsx    # Affiliate hub
│   │   ├── florida-llc-checklist/page.tsx
│   │   ├── blog/page.tsx         # Article index
│   │   ├── blog/[slug]/page.tsx  # Dynamic article page
│   │   ├── api/contact/route.ts  # Contact form API stub
│   │   ├── sitemap.ts            # Dynamic sitemap.xml
│   │   └── robots.ts             # Dynamic robots.txt
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ArticleCard.tsx
│   │   ├── EmailSignup.tsx       # 'use client'
│   │   └── ContactForm.tsx       # 'use client'
│   └── lib/
│       └── articles.ts           # Markdown loader + env var substitution
├── .env.example
├── .gitignore
├── next-sitemap.config.js
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## How affiliate links work

Affiliate URLs are stored in environment variables (`NEXT_PUBLIC_AFF_*`) and referenced inside Markdown articles as `{{AFF_KEY}}` placeholders. The `replaceEnvVars` function in `src/lib/articles.ts` substitutes them at build time.

Example, in a Markdown article:

```html
<a href="{{AFF_MERCURY}}" class="aff-btn" rel="sponsored noopener noreferrer" target="_blank">
  Open a Mercury account →
</a>
```

At build time, `{{AFF_MERCURY}}` becomes the value of `NEXT_PUBLIC_AFF_MERCURY` from your environment. If unset, it resolves to `#`.

**To add a new affiliate program:**

1. Add `NEXT_PUBLIC_AFF_NEWPROGRAM=https://yoursite.com/?ref=YOU` to `.env.local` and Vercel
2. Reference it in articles or `src/app/resources/page.tsx`
3. Redeploy

**Important:** Don't push real affiliate URLs to GitHub — store them in Vercel's encrypted env vars instead.

---

## Adding a new article

1. Create `content/articles/your-slug.md`
2. Add frontmatter:

```yaml
---
title: "Your Article Title"
description: "1-2 sentence summary"
metaTitle: "SEO Title (50-60 chars)"
metaDescription: "SEO description (140-160 chars)"
publishedAt: "2026-05-15"
updatedAt: "2026-05-15"
category: "Compliance"
excerpt: "Short excerpt for the article cards"
---
```

3. Write the body in Markdown. Use `<a href="{{AFF_KEY}}" class="aff-btn">` for affiliate buttons.
4. Save. The article auto-generates at `/blog/your-slug` and shows up on the homepage and `/blog`.

No code changes needed.

---

## Deploying to Vercel

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/flbizstart.git
git push -u origin main
```

### 2. Import to Vercel

- Go to [vercel.com/new](https://vercel.com/new)
- Import your GitHub repo
- Framework preset: **Next.js** (auto-detected)
- Build command: `npm run build` (default)
- Output directory: `.next` (default)

### 3. Add environment variables

In Vercel project settings → Environment Variables, add every `NEXT_PUBLIC_*` from `.env.example`. Apply to **Production**, **Preview**, and **Development**.

### 4. Deploy

Vercel will build and deploy. First deploy takes 60–90 seconds. You'll get a `https://flbizstart-xyz.vercel.app` URL to verify.

### 5. Connect your custom domain

If you registered the domain through Cloudflare (recommended; ~$10/year):

- In Vercel: Settings → Domains → Add `flbizstart.com` and `www.flbizstart.com`
- Vercel gives you DNS records (an A record for the apex and a CNAME for `www`)
- In Cloudflare: DNS tab → Add the records Vercel provided
- **Important:** set both records to **DNS-only** (gray cloud, not orange) until SSL provisions, then you can switch back to proxied if you want Cloudflare's CDN

DNS propagation takes 5–60 minutes. Vercel auto-provisions SSL.

---

## Submitting to Google Search Console

Required before applying to affiliate programs.

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add Property → URL Prefix → `https://flbizstart.com`
3. Verify via Cloudflare DNS (fastest method) or HTML tag
4. Once verified: Sitemaps → Add new sitemap → enter `sitemap.xml`
5. Click **Inspect** on the homepage URL → **Request Indexing** to fast-track the homepage
6. Repeat **Request Indexing** for each cornerstone article URL

Indexing typically takes 3–14 days. Don't apply to affiliate programs until at least 3 articles show in Google search results.

---

## Affiliate application order

Once 3+ articles are indexed, apply in this sequence (least → most strict):

### Day 1 — easy approvals (often instant or 24-hour)

- Northwest Registered Agent (their own affiliate program)
- ZenBusiness via Impact.com
- Bizee via their affiliate program
- doola via their affiliate program
- OpenPhone via their affiliate program

### Day 3 — mid-tier (3–7 day review)

- Gusto direct application at gusto.com/affiliates
- Mercury via PartnerStack
- Bench via PartnerStack
- 1-800Accountant
- Pilot direct application

### Day 7 — strictest (7–14 day review)

- Brex via Impact.com (strict; may require revenue floor)
- Bluevine via Impact.com
- Hiscox / NEXT Insurance

Each application takes 5–10 minutes. Submit them all and wait. Most approvals come back within 7–14 days.

When an affiliate URL comes in, add it to Vercel env vars (e.g., `NEXT_PUBLIC_AFF_MERCURY`) and redeploy. The articles and Resources page will update automatically — no code changes needed.

---

## What's intentionally NOT included

- **No CMS** (no Sanity, Contentful, Payload). Articles are Git-versioned Markdown files. Edit in your editor of choice, commit, push.
- **No comments system.** Reduces moderation overhead and removes a major spam vector.
- **No author photos / stock photography.** Typography-led design is more distinctive and looks more like a real publication.
- **No newsletter UI.** Email signups POST to your Beehiiv/ConvertKit endpoint or fall back to logging. Manage the list inside your email tool.
- **No comments / forum / community.** Same reason.

---

## Customizing the design

The aesthetic is intentional: editorial document, sun-tinged paper feel, refined typography. To change it:

- **Colors:** Edit `tailwind.config.ts` and `src/app/globals.css`. The palette uses semantic names (`cream`, `paper`, `ink`, `terracotta`, `forest`).
- **Fonts:** Edit `src/app/layout.tsx`. All three fonts (`Instrument_Serif`, `Newsreader`, `JetBrains_Mono`) come from Google Fonts via `next/font`. Swap any of them for another Google font.
- **Article layout:** `.prose-editorial` in `src/app/globals.css` controls all article body styling — drop caps, headings, lists, tables, blockquotes, affiliate buttons.

---

## Caveats

- **The Florida LLC fees ($125 formation, $138.75 annual report, $400 late penalty) and the federal BOI exemption status are accurate as of May 2026.** Re-verify quarterly at [dos.fl.gov/sunbiz/forms/fees/](https://dos.fl.gov/sunbiz/forms/fees/) and [fincen.gov/boi](https://www.fincen.gov/boi).
- **Privacy Policy and Terms of Service in this repo are baseline templates.** For enforceable legal compliance with GDPR/CCPA, regenerate via [TermsFeed](https://termsfeed.com) (free) or [Termly](https://termly.io) ($10/mo) and have a Florida attorney review.
- **The contact form falls back to logging if Web3Forms isn't configured.** For real submissions, set `NEXT_PUBLIC_WEB3FORMS_KEY` in Vercel.
- **Affiliate program acceptance isn't guaranteed.** Brex, Mercury, and Bench are stricter than Northwest, ZenBusiness, and OpenPhone. Expect 1–3 rejections in the first wave; reapply after another 30–60 days of content.
- **Match recommendations to affiliates.** Don't recommend Northwest in an article while linking to ZenBusiness's affiliate program — most affiliate program ToS prohibit this.

---

## License

All rights reserved. Content is © Sunwrit. Code is provided for personal use; do not republish the article content without permission.
