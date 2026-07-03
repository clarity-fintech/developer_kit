# JSON structures

Shared response envelopes used across `/v1/*` routes.

## CliReport (CLI parity)

```json
{
  "command": "helix.status",
  "ok": true,
  "message": "tick=3 kernel_running=false",
  "data": {}
}
```

## Feature Evidence (nano-skills)

```json
{
  "catalog_id": "N05",
  "skill_id": "quantum-spread-scanner",
  "model_hash": "sha256:nano-N05-v1",
  "input_features": { "spread_bps": 12, "entropy": 0.41 },
  "inference_output": { "edge_score": 0.87, "lane": "helix-02" },
  "macro_skill_downstream": "metric-collapse-arbitrage",
  "timestamp": 1710000000
}
```

## Helix ResolvedIntent

```json
{
  "intent_id": "cli-123",
  "accepted": true,
  "route": "helix-02-capital"
}
```
