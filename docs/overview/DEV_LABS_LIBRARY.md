# Clarity Fortress Developer Library

Full monorepo library index — every nano detail for external developers, operators, and institutional partners.

**Live portal:** [dev.clrty.io/labs](https://dev.clrty.io/labs) · **API:** `https://api.clarity-fintech.com`

---

## Track index (collision warning)

Task numbers **collide across tracks**. Always use prefixed IDs in Notion and scripts.

| Prefix | Track | Source |
|--------|-------|--------|
| `N-01` … `N-100` | Nano Organization | [`launch/NANO_ORGANIZATION_100.md`](launch/NANO_ORGANIZATION_100.md) |
| `E-01` … `E-100` | Engineering build ledger | [`100_task_ledger.md`](100_task_ledger.md) |
| `M-L1-41` … `M-L1-60` | L1 mainnet checklist | [`l1_launch/checklist.md`](l1_launch/checklist.md) |
| `M-PT-001` … | Full pretest battery | [`test/full_pretest_100.md`](test/full_pretest_100.md) |
| `PLATFORM-*` | Platform completions | [`CLRTY_SUBSTRATE/boot/launch_tasks_manifest.json`](../CLRTY_SUBSTRATE/boot/launch_tasks_manifest.json) |

Example: **Task 41** = LayerZero OFT (Engineering), HELIX init (Nano), native `uclrty` (L1).

---

## API surface

### Clarity Fortress

| Method | Path | Handler |
|--------|------|---------|
| GET | `/v1/labs/walkthrough` | 13-step builder funnel |
| GET | `/v1/labs/sections` | Ecosystem section grid |
| GET | `/v1/labs/status` | Fortress health |

### Dev portal

| Method | Path | Purpose |
|--------|------|---------|
| GET | `/v1/dev/resources` | Developer resources manifest |
| GET | `/v1/dev/checklist` | Setup checklist |
| POST | `/v1/dev/verify-setup` | Environment verify |
| GET | `/v1/dev/downloads` | CLI / SDK downloads |

### Monetization / nodes (L06)

| Method | Path | Purpose |
|--------|------|---------|
| POST | `/v1/monetization/node/register` | Register dev node (persists) |
| POST | `/v1/monetization/node/heartbeat` | Liveness ping |
| GET | `/v1/monetization/node/registry` | List nodes |
| GET | `/v1/monetization/portal` | Stripe checkout manifest |
| GET | `/v1/monetization/income` | Private income ledger |

Docs: [`dev-portal/CUSTOM_NODE_ONBOARDING.md`](dev-portal/CUSTOM_NODE_ONBOARDING.md) · [`monetization/MONETIZATION_LAYERS.md`](monetization/MONETIZATION_LAYERS.md)

---

## Manifests

| File | Purpose |
|------|---------|
| [`CLRTY_SUBSTRATE/boot/launch_tasks_manifest.json`](../CLRTY_SUBSTRATE/boot/launch_tasks_manifest.json) | Launch tracker seed + Calendly meeting IDs |
| [`CLRTY_SUBSTRATE/boot/data_center_manifest.json`](../CLRTY_SUBSTRATE/boot/data_center_manifest.json) | 26 Notion ROI metrics |
| [`CLRTY_SUBSTRATE/boot/monetization_layers_manifest.json`](../CLRTY_SUBSTRATE/boot/monetization_layers_manifest.json) | L01–L09 layers |
| [`monetization-layers/products/private_streams.json`](../monetization-layers/products/private_streams.json) | Private monetization streams |
| [`var/launch/launch_tasks_snapshot.json`](../var/launch/launch_tasks_snapshot.json) | Generated task rollup (build step) |
| [`var/launch/readiness.json`](../var/launch/readiness.json) | Nano stage readiness |

---

## Verification commands

```bash
# Data Center → Notion (26 metrics)
make data-center-sync

# Launch tasks → Notion (all tracks + completed work)
make launch-sync-all

# Dev node registration smoke
bash scripts/labs/verify_node_onboarding.sh

# Clarity Fortress artifacts
make labs-smoke

# Full pretest
bash scripts/test/full_pretest.sh --continue --skip-foundry

# Mainnet gates
bash scripts/launch/verify_mainnet_contract_gates.sh
bash scripts/launch/launch_readiness.sh --continue --skip-foundry
```

---

## Prior completed platform work

| Item | Evidence |
|------|----------|
| Private monetization live | `clrty-api/src/income_ledger.rs`, Section V metrics |
| Stripe catalog (−80%) | `monetization-layers/products/catalog.json` |
| Notion Data Center 26 metrics | `scripts/metrics/sync_notion_data_center.py` |
| Mainnet contract gates 5/5 | `var/launch/mainnet_contract_gates.json` |
| Launch readiness pass | `var/launch/launch_readiness_report.json` |
| Full pretest (when run) | `var/pretest/full_pretest_report.json` |

Synced to Notion **Completed Work** DB via `make launch-tasks-notion`.

---

## External blockers + scheduling

- [`l1_launch/EXTERNAL_BLOCKERS.md`](l1_launch/EXTERNAL_BLOCKERS.md)
- [`compliance/phase2_tasks_21_40.md`](compliance/phase2_tasks_21_40.md) — GO Gate 4
- Calendly B2B embed: `monetization-layers/checkout/index.html`, `CALENDLY_EMBED_URL`
- Notion setup: [`monetization/NOTION_LAUNCH_TRACKER_SETUP.md`](monetization/NOTION_LAUNCH_TRACKER_SETUP.md)

---

## Documentation tree

| Area | Index |
|------|-------|
| Master index | [`DOCUMENTATION_INDEX.md`](DOCUMENTATION_INDEX.md) |
| Dev portal IA | [`dev-portal/IA.md`](dev-portal/IA.md) |
| CLI | [`cli/install.md`](cli/install.md), [`cli/execution_funnel.md`](cli/execution_funnel.md) |
| Integration | [`integration/third_party_onboarding.md`](integration/third_party_onboarding.md) |
| Clarity Fortress hosting | [`labs/hosting.md`](labs/hosting.md) |
| Investor data room | [`investor/INVESTOR_DATA_ROOM_INDEX.md`](investor/INVESTOR_DATA_ROOM_INDEX.md) |

---

## Frontend paths

```
frontend/labs/           — walkthrough, faucet, explorer, checkout
frontend/shared/         — labs-api.js, labs-walkthrough.js
monetization-layers/checkout/ — Stripe + Calendly B2B section
```

Build: `make labs-pages`
