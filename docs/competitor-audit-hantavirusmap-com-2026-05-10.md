# Competitor Audit — hantavirusmap.com — 2026-05-10

Competitor reviewed: `https://hantavirusmap.com/`

This audit looks for product/SEO/data ideas we can learn from without copying risky YMYL positioning.

## High-level positioning

Competitor positions itself as:

- `HantavirusMap — Live Global Hantavirus Outbreak Tracker`
- `Live hantavirus outbreak map: track current cases, symptoms, endemic regions and global risk updates in real time on one interactive map.`

They also use schema describing a `WebApplication` with `Real-time hantavirus outbreak monitoring map combining signals from official public health surveillance sources.`

Our recommendation: **do not copy this live/real-time framing**. It is aggressive for health/YMYL and can imply confirmed current case tracking even when the product is signal-based.

Our safer stance remains:

- reviewed source-linked map/tracker
- official/reviewed source summaries
- no live local surveillance
- no exact county/local/patient risk
- no diagnosis or emergency guidance

## Routes and content structure observed

Useful competitor routes:

- `/` map-first homepage
- `/hantavirus` broad disease overview
- `/symptoms` symptom timeline page
- `/outbreaks` outbreak signals page
- `/outbreaks/mv-hondius-2026` event page
- `/about` methodology/about page
- `/faq` FAQ page
- `/contact`
- `/pulse-pro` paid email/intelligence product
- `/feed.json` JSON feed
- `/feed.xml` RSS feed
- language routes: `/es`, `/pt`, `/zh`, `/fr`, `/de`

Competitor sitemap uses hreflang alternates for multilingual pages and higher change frequencies (`hourly`, `daily`) for live/signal pages.

## Product ideas worth borrowing/adapting

### 1) Event pages for official outbreak clusters

Competitor has `/outbreaks/mv-hondius-2026`.

We can adapt this safely as a reviewed official event explainer, e.g.:

- `/outbreaks/mv-hondius-2026/`
- title direction: `MV Hondius Hantavirus Cluster: Official Timeline and Source Notes`
- use only WHO/ECDC/PAHO official links and clearly label it as an event explainer.
- do not call it a live timeline unless it is genuinely maintained and reviewed.

Value:

- Captures long-tail outbreak search demand.
- Lets us explain uncertainty and official-source differences.
- Strong internal link target from outbreak map / tracker page.

### 2) RSS / JSON feed for reviewed updates

Competitor exposes:

- `/feed.json`
- `/feed.xml`

Their feed appears to include Google News / curated news signals, which is risky for our public map if treated as confirmed data.

Safer adaptation:

- create `/feed.xml` and `/feed.json` for **reviewed site updates only**:
  - new official alert added
  - source registry updated
  - data snapshot reviewed
  - methodology changed
- do not include unreviewed news as confirmed cases.

Value:

- SEO/discoverability
- transparency
- downstream monitoring by users/search engines

### 3) Better taxonomy for signal types

Competitor map legend distinguishes:

- Local — case/death/outbreak in country
- Imported — infected person present (returnee/repatriation/treatment)
- Response — travel advisory/screening/quarantine policy
- weak/single-source vs stronger multi-source signals
- pin number = mentions, not confirmed cases

We already avoid signal aggregation publicly, but the taxonomy is useful.

Safer adaptation:

- Add a methodology section or internal data model fields:
  - `event_scope`: `local_transmission`, `imported_case`, `response_only`, `reservoir_ecology`, `prevention_notice`
  - `evidence_level`: `official_single_source`, `official_multi_source`, `reviewed_secondary`, `unreviewed_signal`
  - `public_display`: false unless reviewed
- Public labels should say `official alert type`, not `signal` unless explaining methodology.

### 4) More structured disease overview page

Competitor `/hantavirus` has good topical sections:

- What is hantavirus?
- HPS vs HFRS
- transmission
- where it circulates
- who is at risk
- prevention
- diagnosis/treatment
- vaccine status
- FAQ

We have several pieces already, but could add or strengthen a broad `/hantavirus/` educational route.

Safer adaptation:

- create `/hantavirus/` as a source-linked disease overview
- cite CDC/WHO/ECDC
- avoid treatment advice beyond “seek healthcare/public health sources”
- link to map/tracker/symptoms/prevention pages

### 5) Symptom timeline structure

Competitor `/symptoms` uses:

- incubation period
- HPS phase
- HFRS phase
- when to see a doctor
- how diagnosed
- FAQ

We already have `/symptoms/`, but can improve structure and headings to better cover long-tail search intent.

Keep conservative wording and do not diagnose.

### 6) About/methodology narrative

Competitor `/about` clearly explains:

- We aggregate
- We curate
- You stay informed
- What you see on the map
- Sources
- What it is not
- Limitations
- Who built this

We already have `/sources-methodology/` and `/about/`, but the narrative could be made clearer and more product-like.

Potential copy improvement:

- `What the map shows`
- `What the tracker follows`
- `What we exclude`
- `How review status works`
- `How to report corrections`

### 7) Structured data

Competitor uses JSON-LD:

- `WebApplication`
- `Organization`
- `Person`
- `MedicalCondition` on disease overview
- `FAQPage` on FAQ-style pages

We already use FAQPage for FAQ/homepage FAQ. Useful additions:

- `WebApplication` or `Dataset` for the map/tracker product, carefully described as reviewed/static/source-linked, not real-time.
- `Organization` for Hantavirus Maps.
- `MedicalWebPage` may be tempting, but use caution unless content governance is stronger.
- `Dataset` schema for reviewed JSON snapshots may be appropriate later.

### 8) Multilingual pages

Competitor has:

- Spanish
- Portuguese
- Chinese
- French
- German

This is useful because hantavirus interest spans the Americas and Europe.

Safer adaptation:

- Start with 1–2 high-value localized pages only after English source pages stabilize:
  - Spanish: South America / Andes virus / prevention pages
  - Portuguese: Brazil/South America context
- Use `hreflang` only when translations are real and maintained.
- Avoid machine-translated medical advice without review.

### 9) Email/product loop

Competitor has:

- free signals email
- Pulse Pro paid weekly intelligence
- account/pro route

This is not needed now, but the product idea is useful later.

Safer adaptation:

- reviewed source update email, not fear-based outbreak alerts
- professional report/API later if data governance is mature

## Things not to copy

- `Live Global Hantavirus Outbreak Tracker` title.
- `real time` claims.
- `track current cases` claims.
- News/Google News/ProMED items shown in a way users may confuse with verified public health data.
- Hourly sitemap change frequency unless updates are genuinely frequent and reviewed.
- Paid outbreak-intelligence framing before trust/governance is mature.

## Our current advantages

Compared with competitor, our site is stronger on:

- conservative public-health boundaries
- explicit reviewed snapshot language
- avoiding local/patient precision claims
- separating cases, official alerts, and reservoir ecology
- transparent source registry and limitations
- legal/privacy/terms pages already in place

## Our gaps / recommended next improvements

### Priority 1 — Add official event explainer page

Create `/outbreaks/mv-hondius-2026/` as an official-source event explainer.

Use sources already in registry:

- WHO DON600
- ECDC cruise assessment
- PAHO cruise response

Content structure:

- event summary
- official timeline
- what is known
- what is not known
- why Andes virus differs
- travel/public risk caveat
- source list

### Priority 2 — Add `/hantavirus/` disease overview

Create a broad educational page covering:

- what hantaviruses are
- HPS vs HFRS
- transmission
- reservoir ecology
- symptoms / when to seek care
- prevention
- how this site maps sources

### Priority 3 — Add reviewed update feed

Create static `/feed.xml` and `/feed.json` for reviewed site/source updates.

Do not syndicate unreviewed news as confirmed data.

### Priority 4 — Improve methodology taxonomy

Add internal/public explanation for:

- official case summary
- official alert
- imported/travel-associated event
- response-only advisory
- reservoir ecology
- unreviewed signal excluded from public map

### Priority 5 — Structured data expansion

Add careful JSON-LD:

- WebApplication for Hantavirus Maps with `reviewed source-linked map` wording.
- Organization for site/contact.
- Dataset only after snapshot metadata is clean.

## Suggested implementation order

1. `/outbreaks/mv-hondius-2026/`
2. `/hantavirus/`
3. `WebApplication` + `Organization` JSON-LD with safe wording
4. reviewed `/feed.xml` + `/feed.json`
5. methodology taxonomy update
6. multilingual Spanish/South America page later

