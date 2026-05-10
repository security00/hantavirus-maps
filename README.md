# Hantavirus Tracker

Public landing page for `hantavirusmaps.org`, deployed as static assets on Cloudflare Workers.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run lint
npm run build
```

The Next.js app uses static export and writes production assets to `out/`.

## Deploy to Cloudflare Workers

```bash
source /root/.openclaw/workspace-potter-dev/.env
export CLOUDFLARE_API_TOKEN=$CF_API_TOKEN
npm run build
wrangler deploy
```

Worker name: `hantavirus-maps`
Custom domains:
- `hantavirusmaps.org`
- `www.hantavirusmaps.org`
