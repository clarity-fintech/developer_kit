# CLRTY RPC Reference

**Base URL (local):** `http://127.0.0.1:8545` · **Last verified:** 2026-06-18

## Hubs

| Page | Description |
|------|-------------|
| [HTTP methods](rpc/http.md) | All `/v1/*` REST routes |
| [WebSocket](rpc/websocket.md) | `/v1/stream`, orderbook |
| [JSON structures](rpc/json-structures.md) | Shared schemas |
| [State commitment](rpc/state-commitment.md) | shadow · attested · canonical |

## Quick reference

```
GET  /v1/status
GET  /v1/helix/status
POST /v1/helix/intents
GET  /v1/helix/net/preview
POST /v1/cortexpay/predict
POST /v1/cortexpay/checkout-plan
POST /v1/cortexpay/route
GET  /v1/cortexpay/wallet/{wallet}/profile
POST /v1/onboarding/calibrate
GET  /v1/nano/catalog
POST /v1/nano/run/{catalog_id}
GET  /v1/neuro-templates/seeds
```

Generate index: `scripts/docs/generate_rpc_index.sh`

> Legacy [RPC docs](rpc-docs.md) redirects here.
