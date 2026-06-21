---
title: "The Future of AI: A Map of Disagreement"
description: "Where the serious people actually diverge — and why it matters."
date: 2026-06-15
draft: false
tags: ['ai', 'future', 'research', 'strategy']
---

The smartest people in AI agree on one thing: this matters enormously. After that, the map breaks apart.

Some expect a fast intelligence explosion. Some expect a sharp but continuous acceleration. Some think the current path is overhyped, bottlenecked by the physical world, or missing the architecture required for real general intelligence. The honest landscape is not a single forecast. It is a map of disagreements between people who have thought about the problem seriously.

This is the shape of the debate as I understand it from the research.

## The deepest crux: takeoff dynamics

Most other arguments trace back to one question:

> Once AI starts improving AI, does progress become sudden, local, and explosive, or fast but distributed across the economy?

The aggressive view says automated AI researchers could compress years of research into months. The continuous view says there will be many intermediate systems before any system is great at self-improvement. The skeptical view says the loop runs into bottlenecks that do not compress just because cognition got cheaper: chip fabrication, data-center construction, grid interconnection, robotics, institutions, and genuine scientific novelty.

That last point matters. A model can design a better chip quickly. It cannot make a new fab appear quickly. It can write a thousand plans. It cannot instantly make physical operations reliable.

## Scaling is not dead. It changed axes.

The old scaling story was simple: more data plus more compute makes models better. The newer story is messier.

Pretraining returns appear to be maturing. The public internet is not infinite. Synthetic data helps, but only if it mixes with real data rather than replacing it. Meanwhile, test-time compute opened another axis: instead of only training larger models, let models spend more inference compute on reasoning.

That is why the live frontier is not just bigger pretraining runs. It is reasoning, tool use, memory, planning, and the reliability of long workflows.

The important question is not "is scaling over?" It is "which scaling still pays?"

## Intelligence is jagged

The most useful product frame is jagged intelligence.

AI can be far above a human expert on one subtask and strangely below a competent intern on the next. It can write strong code inside a known framework, then miss a subtle requirement. It can summarize a huge file, then forget a critical constraint. It can reason impressively in a benchmark and still fail because the product needed persistent memory, visual grounding, or one boring integration step.

That means a workflow is only as strong as its weakest necessary step. For builders, average benchmark capability is less useful than a task-by-task map:

- Where is the model superhuman?
- Where is it merely useful?
- Where is it unreliable enough to need human review?
- Which failure modes carry real downstream cost?

## The economy: commodity intelligence and centralized power can both be true

Two economic stories look contradictory, but they can both be true.

First, intelligence-per-dollar is collapsing. Open-weight and frontier-minus-one models keep getting cheaper. Most practical work does not need the absolute frontier. Summarizing, extracting, routing, drafting, classifying, and transforming data often work fine with cheaper models.

Second, the frontier is getting more capital intensive. The most capable labs are fused to hyperscalers because training and serving frontier models requires enormous compute, power, and distribution.

The reconciliation is demand elasticity. If intelligence gets cheaper, people use far more of it. Falling token costs do not necessarily shrink the AI infrastructure race. They can expand the number of viable use cases until power and compute become even more valuable.

The likely equilibrium: commodity intelligence underneath, frontier edge rented for the few tasks where being six months ahead is worth a fortune.

## The state and the grid enter the chat

If AI becomes a national-security asset, governments will not remain passive. Full nationalization is probably too simple a frame. A more realistic version is soft nationalization: security requirements, compute oversight, export controls, procurement, contracts, and public-private consortia.

At the same time, the physical bottleneck is becoming visible. Grid interconnection can take longer than data-center construction. Nuclear deals, onsite gas, and off-grid energy islands are all symptoms of the same constraint: tokens require watts, and watts require infrastructure.

Tokens-per-watt may become as important as tokens-per-dollar.

## The upside is real, but uneven

The strongest optimistic case is not generic office automation. It is scientific acceleration.

Software is already being accelerated. Biology after AlphaFold looks like the next serious frontier: AI systems that design experiments, search protein space, propose mechanisms, and help scientists direct lab work. But even here the physical world pushes back. Wet labs, regulation, data collection, and clinical validation do not move at GPU speed.

AI may compress parts of discovery while leaving other parts stubbornly slow. Again: jaggedness.

## The risk debate is genuinely bimodal

The range of serious p(doom) estimates is almost absurd, from under 1 percent to near certainty. But the split is not random. It tracks whether someone sees advanced AI mostly as a controllable tool or as an increasingly autonomous agent.

The worriers are not all unserious. The skeptics are not all naive. Both sides include people with deep credentials and different priors about agency, control, architecture, incentives, and timelines.

The honest position is not to pretend there is consensus. There is not.

## What follows if you are building in applied AI

1. Build at the commodity layer and capture value in orchestration. Route to the cheapest capable model per task. Escalate to the frontier only when the task genuinely needs it.

2. Design around jaggedness. Break workflows into subskills. Put human review where errors have real cost. Run agents in shadow mode before giving them autonomy.

3. Model true cost, not demo cost. Vendor benchmarks, low-utilization experiments, and headline throughput numbers are not the same as production unit economics.

4. Hedge timeline uncertainty. Build systems that improve as models improve, but do not pre-build for capabilities that do not exist.

5. Watch the real leading indicators: test-time scaling returns, power and grid constraints, regulation of compute and open weights, and whether new architectures produce durable gains over transformer-based systems.

## Caveats

This is a June 2026 synthesis, not a prophecy. The numbers around model prices, valuations, capex, and timelines will age quickly. Source incentives cut in every direction: labs, skeptics, safety groups, investors, and economists all have reasons to emphasize different parts of the picture.

The useful thing is not confidence. It is knowing which cruxes would change your mind.

## Sources and further reading

- Leopold Aschenbrenner, "Situational Awareness"
- Dario Amodei, "Machines of Loving Grace"
- Paul Christiano and Eliezer Yudkowsky on takeoff speed
- Ilya Sutskever interviews and talks on the end of the pure scaling era
- Epoch AI on data, compute, and energy constraints
- Yann LeCun on JEPA and world models
- Ethan Mollick on jagged intelligence
- Dell'Acqua et al., "Navigating the Jagged Technological Frontier"
- Daron Acemoglu and Goldman Sachs on AI productivity estimates
- METR studies on AI and developer productivity
- Work on soft nationalization, AI risk, and national-security governance
