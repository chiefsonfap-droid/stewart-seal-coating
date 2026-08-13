# Steward Seal Coating — staging funnel

Next.js App Router staging site for **2608341 Ontario Inc. operating as Steward Seal Coating**.

This branch replaces the earlier province-wide “free drone” marketing build with a Sudbury / Northern Ontario funnel. The repo was not empty; the product on `main` did not match the locked offer, so the funnel was rebuilt from the existing App Router work on `origin/staging` and tightened to the locked rules.

## Locked offer

- Public price: **$129 CAD + HST** for the paid Drone Condition Report. No other public price. No HST number on the site.
- **$350** is a value anchor for the report, not a fake sale.
- If they proceed with qualifying seal coating / crack filling / line striping, the $129 is credited (90 days, not cash).
- Travel is on-site from **Sudbury and Northern Ontario**. Not a national brand.
- Footer legal line: **2608341 Ontario Inc. operating as Steward Seal Coating**.
- No fake street. No invented phone. A person replies — use the form.
- `noindex, nofollow` until production (`app/robots.ts` + layout metadata).
- No Stripe on this app. No auto-send. No Conversation AI chat widget.
- Steward-only. Do not touch NGP, Witrak, or other FGE brands.

## Forms (existing Steward GHL — no new account)

| Use | Form ID |
| --- | --- |
| Paid drone report | `dcAN8IxSHr8526AuKPxF` |
| Quote / contact | `MkiuspbniZT3rw2tNg1E` |
| Older main-branch inspection embed (kept in `content.ts`, not shown) | `cWkRdLH8OOIwvBufX5yt` |

## Metered / third-party calls

- **GoHighLevel** form iframes (`api.leadconnectorhq.com`) and `link.msgsndr.com/js/form_embed.js` — existing Steward location. Form views/submissions count against that GHL account.
- **Google Fonts** via `next/font` (Archivo, Source Sans 3) — typically unmetered.
- No Stripe keys. No maps API. No new paid APIs.

## Still needs Frank

- **Domain** — do not attach the production domain until this is no longer a noindex staging draft.
- **Stripe** — checkout for the $129 CAD + HST report (test mode first). Not wired here.
- **Real public phone** — omitted until one is supplied. Site says a person replies / use the form.
- **GHL calendar** snippet for on-site flight booking, if he wants it.
- Confirm GHL form copy does not say “free drone”.
- Keep Conversation AI off.
- When going to production: remove `noindex,nofollow`.

## Local

```bash
npm install
npm run dev
```

```bash
npm run build
```
