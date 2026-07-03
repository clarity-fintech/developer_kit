# Agents and AI

Autonomous agents integrating with CLRTY L1 and the arbitrage producer stack.

## Architecture hooks

| Component | Path |
|-----------|------|
| Producer engine | `arbitrage_core/` |
| Signal bridge | `clrty-signal-bridge/` |
| Secure model hook | [secure_model_hook.md](../../docs/integration/secure_model_hook.md) |
| EntropyBus | λ, H, E, R manifold state |

## Agent patterns

1. **Market maker agent** — consumes `/v1/status`, posts quotes via producer loop
2. **Risk agent** — monitors capital flight guard + toxicity filters
3. **Audit agent** — polls `/v1/pretest/status`, files attestation blobs

## Safety rails

- Dead-man switch (ATU 800)
- Blue Code bounded patches
- Signal normalization — no hype outputs on investor surfaces

## CLI integration

```bash
clrty --tui operator
clrty sys test launch
```

See [producer_engine.md](../../docs/arbitrage/producer_engine.md)
