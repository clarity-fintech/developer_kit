# CLRTY Documentation Hub

Entry point for all repository documentation. The monorepo ships **architecture specs**, **launch runbooks**, **investor data room**, **compliance packs**, and **web portal content** (`frontend/docs/`).

**Start here by role:**

| Role | Start with |
|------|------------|
| **Architect / engineer** | [architecture/README.md](architecture/README.md) → [architecture/REPO_MAP.md](architecture/REPO_MAP.md) |
| **Operator** | [cli/install.md](cli/install.md) → [cli/execution_funnel.md](cli/execution_funnel.md) → [developer_api.md](developer_api.md) |
| **Investor / DD** | [investor/INVESTOR_DATA_ROOM_INDEX.md](investor/INVESTOR_DATA_ROOM_INDEX.md) |
| **Launch / compliance** | [launch/NANO_ORGANIZATION_100.md](launch/NANO_ORGANIZATION_100.md) → [l1_launch/checklist.md](l1_launch/checklist.md) |
| **AI agent** | [`llms.txt`](../llms.txt) at repo root |

**Web portal:** [frontend/docs/index.html](../frontend/docs/index.html) — Start · Products · Build · Business · Validation & Proof

---

## Architecture

| Doc | Description |
|-----|-------------|
| [**architecture/README.md**](architecture/README.md) | **Central architecture synthesis** — stack, Nexus, security, products, Notion cross-links |
| [**diagrams/README.md**](diagrams/README.md) | **Clarity Diagram System** — Cognitive Architecture Blueprints, prompt library, Mermaid |
| [architecture/REPO_MAP.md](architecture/REPO_MAP.md) | Workspace crates, `CLRTY_SUBSTRATE` modules, scripts, `var/` |
| [architecture/NEXUS_REPOSITORY.md](architecture/NEXUS_REPOSITORY.md) | Federated Nexus — monorepo vs submodule federation |
| [master_blueprint.md](master_blueprint.md) | Canonical substrate blueprint |
| [whitepaper.md](whitepaper.md) | Technical whitepaper (draft) |
| [CODE_FREEZE.md](../CODE_FREEZE.md) | L1 code freeze manifest (Task 59) |

---

## Launch & nexus

| Doc | Description |
|-----|-------------|
| [launch/NANO_ORGANIZATION_100.md](launch/NANO_ORGANIZATION_100.md) | 100 steps → repo paths · verify commands |
| [launch/LAUNCH_STAGES.md](launch/LAUNCH_STAGES.md) | Stages 1–5 chronological sequence |
| [launch/DAY_CYCLE_HANDOFF.md](launch/DAY_CYCLE_HANDOFF.md) | Day cycle handoff runbook (multi-sig / genesis / TGE) |
| [arbitrage/capital_execution_stack.md](arbitrage/capital_execution_stack.md) | CE-01..15 capital execution stack |
| [launch/PLANS_INDEX.md](launch/PLANS_INDEX.md) | HELIX + Products integration plans |
| [integration/PLATFORM_RAILS_INDEX.md](integration/PLATFORM_RAILS_INDEX.md) | **100-platform** rails (PLAT-001..100) · `clrty platform` · `make platform-probe` |
| [l1_launch/checklist.md](l1_launch/checklist.md) | L1 launch checklist |
| [l1_launch/DEFERRED_PUBLIC_WEBSITE.md](l1_launch/DEFERRED_PUBLIC_WEBSITE.md) | Product suite not on public nav |
| [l1_launch/DEFERRED_BRIDGE.md](l1_launch/DEFERRED_BRIDGE.md) | Cross-chain Phase 10 deferral |

---

## Notion export (launch strategy)

| Doc | Description |
|-----|-------------|
| [**simulation/README.md**](simulation/README.md) | Simulation folder index + Notion section map |
| [**simulation/CLRTY_Live_Market_Notion.md**](simulation/CLRTY_Live_Market_Notion.md) | **Notion import** — launch strategy, 554-day plan, SIM100, charts, investor DD synthesis |

Authoritative implementation detail lives in linked repo docs (see [Notion cross-links](simulation/CLRTY_Live_Market_Notion.md#notion-topic--repo-doc-cross-links) and [architecture/README.md § VIII](architecture/README.md#viii-notion-derived-launch-strategy)).

---

## Investor data room

| Doc | Description |
|-----|-------------|
| [investor/INVESTOR_DATA_ROOM_INDEX.md](investor/INVESTOR_DATA_ROOM_INDEX.md) | Master index — 20+ investor documents |
| [investor/FULL_PROJECT_MANIFEST.md](investor/FULL_PROJECT_MANIFEST.md) | Comprehensive DD inventory |
| [investor_kit.md](investor_kit.md) | Investor kit hub |

---

## Products & protocol

| Doc | Description |
|-----|-------------|
| [products/CLARITY_PRODUCT_SUITE.md](products/CLARITY_PRODUCT_SUITE.md) | 13 systems · 5 categories |
| [protocol/PLATFORM_SURFACE_MAP.md](protocol/PLATFORM_SURFACE_MAP.md) | Page → module → API map |
| [protocol/clarity-skills.md](protocol/clarity-skills.md) | Quantum Skills protocol |
| [protocol/helix_hidden_exchange_layer.md](protocol/helix_hidden_exchange_layer.md) | HELIX L0.5 spec |

---

## Security & compliance

| Doc | Description |
|-----|-------------|
| [security/MASS_SECURITY_ARCHITECTURE.md](security/MASS_SECURITY_ARCHITECTURE.md) | MSA-100 |
| [security/SOVEREIGN_600_ARCHITECTURE.md](security/SOVEREIGN_600_ARCHITECTURE.md) | SP-001–600 |
| [security/CLRTY1_MDA.md](security/CLRTY1_MDA.md) | Moniversion Defense Architecture (clrty-1) |
| [security/CLRTY1_MSD.md](security/CLRTY1_MSD.md) | Mass Security Defense — MSD-100 nano tasks |
| [tokenomics/TOKENOMICS_LOCKED.md](tokenomics/TOKENOMICS_LOCKED.md) | Frozen parameters |
| [audit/SECURITY_AUDIT_COMPLETION_GATES.md](audit/SECURITY_AUDIT_COMPLETION_GATES.md) | External audit Gates 1–5 |

---

## CLRTY-1 Chain & Clarity Fortress

| Doc | Description |
|-----|-------------|
| [chain/clrty-1.md](chain/clrty-1.md) | **Full L1 technical spec** — PoC, MVM, RPC, genesis |
| [chain/CLRTY1_ONLY_SCOPE.md](chain/CLRTY1_ONLY_SCOPE.md) | L1-only launch scope boundary |
| [chain/clrty-1-fma.md](chain/clrty-1-fma.md) | FMA mesh (deferred Phase 10) |
| [chain/wallet-chainlist.md](chain/wallet-chainlist.md) | Wallet network metadata (chainId 1202) |
| [chain/validators-sentry.md](chain/validators-sentry.md) | Validator + sentry topology |
| [omnichain/l1_rpc_provision.md](omnichain/l1_rpc_provision.md) | L1 RPC provisioning |
| [omnichain/l1_production_operations.md](omnichain/l1_production_operations.md) | Day-2 ops runbook |
| [omnichain/alchemy_cli_orchestration.md](omnichain/alchemy_cli_orchestration.md) | Alchemy CLI bridge monitor |
| [listing/README.md](listing/README.md) | CEX / market data listing hub |

**Clarity Fortress:** [dev.clrty.io/labs](https://dev.clrty.io/labs) · manifest: `scripts/clarity-wallet/generate_labs_manifest.py` · smoke: `bash scripts/labs/verify_labs_smoke.sh`

---

## Full catalog

**Complete categorized index:** [DOCUMENTATION_INDEX.md](DOCUMENTATION_INDEX.md)

**Machine-readable:** [manifests/MANIFEST_INDEX.json](../manifests/MANIFEST_INDEX.json) · [manifests/nexus_modules.json](../manifests/nexus_modules.json)
