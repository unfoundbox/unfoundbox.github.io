# Newsletter setup — TODO (do later)

The site already ships the **front end** of a newsletter:

- Subscribe form in [`layouts/partials/sections/subscribe.html`](layouts/partials/sections/subscribe.html) (and reused in post footers) posts to **Buttondown**, handle `unfoundbox`.
- RSS feed published at `/index.xml` (set to `summary` in [`hugo.toml`](hugo.toml)).

What's left is standing up the **back end** (the email service) and deliverability. Pick a provider, then work the checklist.

---

## Option A — Buttondown (matches what's already wired) ✅ recommended

The form's `action` already points here, so this is the least work.

- [ ] Create / claim the account at <https://buttondown.com> with username **`unfoundbox`** (free tier ≈ first 100 subscribers). If it's not claimed, the form currently posts into a void.
- [ ] **Verify the sending domain** `unfoundbox.com` — add Buttondown's **SPF + DKIM** DNS records (biggest factor in avoiding spam).
- [ ] Enable **double opt-in** (confirmation email) — better deliverability + GDPR-friendly; matches the site's "No spam — unsubscribe anytime" copy.
- [ ] Set up **RSS-to-email automation**: point Buttondown at `https://unfoundbox.com/index.xml` so publishing a post auto-drafts/sends the email.
- [ ] (Optional) Flip RSS to full content so emails carry the whole article: set `rssFeedDescription = "full"` in [`hugo.toml`](hugo.toml).
- [ ] Send a **test broadcast** to confirm the end-to-end flow.
- [ ] Confirm the success/redirect UX after submit (currently opens `buttondown.email/unfoundbox` in a popup — consider a nicer inline success state later).

## Option B — switch provider

All work the same way: swap the form `action` (and maybe add an embed script). Candidates:

- [ ] **Kit (ConvertKit)** — best free RSS-to-email automation, creator-focused.
- [ ] **MailerLite / Beehiiv** — generous free tiers, nice templates (Beehiiv leans growth/monetization).
- [ ] **Substack** — zero setup, but gives up design control + owns the subscriber relationship.
- [ ] **Ghost** — only if paid membership is wanted later (heavier, needs hosting).

> For a Hugo blog where you keep your own design and just collect emails, **Buttondown or Kit** are the sweet spot.

---

## Deliverability checklist (any provider)

- [ ] SPF + DKIM (and ideally DMARC) DNS records for `unfoundbox.com`.
- [ ] Only email people who **opted in** (CAN-SPAM / GDPR).
- [ ] **Warm up** slowly — avoid a sudden large first send from a new domain.
- [ ] Ensure every email has an **unsubscribe link + physical address** (ESPs add these automatically).

## Code touchpoints (if changing provider/behavior)

- Form markup + action: [`layouts/partials/sections/subscribe.html`](layouts/partials/sections/subscribe.html)
- Inline subscribe CTA on posts: [`layouts/_default/single.html`](layouts/_default/single.html)
- RSS feed depth: `rssFeedDescription` in [`hugo.toml`](hugo.toml)

## Done when

- [ ] A real signup lands in the provider's subscriber list.
- [ ] A published post results in an email going out (manual or automated).
- [ ] Test send passes a spam check (e.g. mail-tester.com score ≥ 8/10).
