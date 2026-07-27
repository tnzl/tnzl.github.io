---
title: "Attention variants and KV-cache layout"
description: "Why GQA, MQA, and cache layout show up so often in token-generation latency — demo article."
pubDate: 2026-05-03
draft: false
---

> Demo content — replace later.

Token generation is memory-bound more often than people expect. Attention variants and KV-cache layout are two levers that show up repeatedly when bringing LLMs to production hardware.

## Variants in one sentence

- **MHA** — every head has its own K/V.
- **GQA** — groups of query heads share K/V.
- **MQA** — all query heads share one K/V.

Sharing K/V reduces cache footprint and can improve bandwidth behavior, but only if your kernels and layouts actually exploit that sharing.

## Layout matters

A cache that looks fine in a reference PyTorch implementation can still thrash once lowered. Redesigning KV layout for the target memory hierarchy — and fusing the attention path accordingly — is often where the measurable win appears.

Replace this demo with your own notes from enablement work when ready.
