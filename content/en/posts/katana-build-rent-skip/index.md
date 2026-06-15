---
title: "Build, Rent, or Skip: A Strategy Matrix for AI Video Tools"
date: 2026-06-10
draft: false
tags: ['startup', 'ai', 'video', 'strategy', 'katana']
---

# Build, Rent, or Skip: A Strategy Matrix for AI Video Tools

The core strategy question for an AI video tool is not "can we build this?" It is "which parts create compounding advantage, which parts are commodity APIs, and which parts are another company's debt?"

This note maps that question using Katana as the product lens and Cardboard as the comparison point.

Assumptions in the research draft:

- 500 episodes per month
- 60-minute average episode
- 2-3 speakers
- 1.5-2.5 GB Zoom gallery source
- 10 clip candidates -> 3 published clips per episode
- About 30 percent of episodes use Pro cloud render
- Mid-2026 list-price ballparks, to be verified before budgeting

The organizing principle:

> Own the media intelligence, rent bounded model calls, and refuse browser-editor debt.

## Build: the moat

These are the capabilities Katana should own and keep improving.

| Capability | Why build it |
| --- | --- |
| Speaker reframing and camera switching | Katana's edge is Zoom priors: known gallery geometry, fixed speaker count, and a focused media job. Benchmark this head-to-head on real Zoom files. |
| Diarization and speaker ID | Required by camera switching anyway, and can run in the same GPU pass as reframing. |
| Filler, silence, and auto-edit detection | Deterministic logic over word-level timestamps and VAD can do much of the work without another model. |
| Captions, layouts, and brand rendering | This should be deterministic product infrastructure, not a fragile prompt-driven surface. |
| Local plus Pro render pipeline | Local render is the free/privacy tier. Cloud render is the paid convenience tier. |
| Brand kits and show memory | Saved layouts, captions, intros, outros, guest names, and episode numbering are pure product leverage. |
| Edit-request harness | Use JSON pipeline state, a small tool vocabulary, previewable changes, and revertible checkpoints. Rent the LLM brain, own the harness. |

The most important item may be the least glamorous one: brand kits. Repeat creators do not want to redesign every episode. They want their show to remember itself.

## Rent: commodity brains

These are useful, but they do not need to be proprietary.

| Capability | Suggested shape |
| --- | --- |
| Transcription | Self-host faster-whisper for steady volume or rent a burst ASR provider when needed. |
| Edit-request brain | Use one fast model with prompt caching. Do not expose a model picker to producers. |
| Transcript cleanup | Offer Light, Balanced, and Tight cleanup strength. Let the model propose deletions, then apply them deterministically against timestamps. |
| Clip rationale and scoring | Keep Katana's detection, then use a small multimodal pass to explain why a clip works. |
| Chapters, titles, descriptions, show notes | One transcript pass. Pro-gated with a visible preview. |
| Thumbnails | Default to deterministic frame-grab plus brand template. Use generated backgrounds only as an optional Pro accent. |
| Storage and delivery | Prefer R2-style economics where video egress would otherwise punish scale. |
| Observability and app infra | Sentry, PostHog, hosting, and queueing are not the moat. |

The key is bounded calls. Cardboard appears to spend model budget on broad footage analysis. Katana should spend model budget only where it changes the user decision.

## Skip: their debt

Some features look powerful because a competitor built them. That does not mean they belong on the roadmap.

| Capability | Why skip or defer |
| --- | --- |
| Browser NLE/manual timeline | This is a permanent engine tax: WebCodecs, WebGL, media drift, export failures, memory pressure, and timeline UX. It is not the podcast job-to-be-done. |
| Voice cloning/TTS voiceovers | Easy to integrate, low moat, and not central for podcasters who already have voices. |
| Beat sync and music library | A licensed intro/outro bed inside brand kits probably solves more actual demand. |
| Background removal and depth effects | Demo-friendly, but low pull for podcast editing. |
| Open-ended visual search | Expensive per-shot VLM analysis over large files. Transcript search covers most real needs. |
| Premiere/DaVinci XML export | Do not skip forever. Defer it as a trust-building agency feature after brand kits. |

The hard discipline is avoiding features that make the product look more like an editor but less like a weekly production machine.

## COGS shape at 500 episodes

| Cost bucket | Monthly estimate |
| --- | --- |
| GPU media intelligence | $120-250 |
| Cloud rendering | $50-80 |
| ASR | $25-60 |
| LLM passes | $45-130 |
| Thumbnails | $10-30 |
| Storage, delivery, infra | $35-80 |
| Total | $285-630/month |

That lands around $0.55-1.25 per episode under the research assumptions.

The important strategic difference is cost shape:

- Katana's cost shape is GPU-minutes. Own models, batch work, and let free-tier local renders carry a privacy story.
- Cardboard's cost shape appears token-heavy. Full-footage analysis, agent turns, cloud proxies, and rented voice scale with uploaded gigabytes and open-ended model usage.

## Sequencing

Weeks 1-4:

- Cleanup strength picker
- Clip rationale pass
- Thumbnail template preview
- R2 migration if needed

Months 1-2:

- Brand kits and show memory
- Edit-request harness with revertible checkpoints
- Chapters and description bundle behind Pro preview

Month 3+:

- Premiere XML export for agency trust
- Zoom Marketplace ingestion
- Publish integrations for YouTube metadata

Before all of it, run the cheap test: take the same three real Zoom episodes through Katana and Cardboard in front of five users. The question is not which tool has more features. It is whether users prefer approving a good cut or prompting an agent until it becomes good.

## Caveat

All COGS figures are mid-2026 ballparks from public pricing and throughput assumptions. Verify GPU rates, ASR pricing, model pricing, and storage/egress before using this as a budget. Competitor inferences are based on public changelog and launch material, not private implementation knowledge.
