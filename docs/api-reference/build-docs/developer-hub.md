# Developer hub

Build applications on CLRTY L1 — API-first, deterministic, L1-only at launch.

## Core resources

| Resource | Link |
|----------|------|
| Integration guide | [integration_guide.md](../../docs/integration_guide.md) |
| API reference | [developer_api.md](../../docs/developer_api.md) |
| Token standard | [tokenomics/TOKENOMICS_LOCKED.md](../../docs/tokenomics/TOKENOMICS_LOCKED.md) |
| Third-party onboarding | [third_party_onboarding.md](../../docs/integration/third_party_onboarding.md) |
| Secure model hook | [secure_model_hook.md](../../docs/integration/secure_model_hook.md) |

## Key routes

```
GET  /v1/status
GET  /v1/sets/{address}
GET  /v1/indexer/clrty-l1
POST /v1/governance/vote
GET  /v1/pretest/status
GET  /v1/compliance/treasury
```

## SDK / tools

- **Rust:** workspace crates under `CLRTY_SUBSTRATE/`, `clrty-cli-core/`
- **CLI:** `clarity-cli` → `clrty` binary
- **Simulation:** `atu_runner`, `scripts/predeploy/l1_launch_simulation.sh`

## Enterprise API roadmap

[b2b2b_api_roadmap.md](../../docs/enterprise/b2b2b_api_roadmap.md)
