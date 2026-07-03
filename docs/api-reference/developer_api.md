# CLRTY Developer API

Base URL (local): `http://127.0.0.1:8545`

Start server: `cargo run -p clrty-api`

**Related:** [`TOKENOMICS_AND_COMPLIANCE.md`](tokenomics/TOKENOMICS_AND_COMPLIANCE.md) · [`VIS_CLRITY_PROTOCOL_MAP.md`](compliance/VIS_CLRITY_PROTOCOL_MAP.md)

---

## Route index (live)

| Method | Path | Handler |
|--------|------|---------|
| `GET` | `/v1/status` | PoC tuple + supply cap |
| `GET` | `/v1/stream` | WebSocket chain status |
| `GET` | `/v1/sets/:address` | Set tier + vote weight |
| `GET` | `/v1/indexer/:chain` | Per-chain indexer events |
| `GET` | `/v1/alerts` | Liquidity + bridge alerts |
| `GET` | `/v1/orderbook` | Order book snapshot (JSON) |
| `GET` | `/v1/compliance/treasury` | Resolved Safe treasury |
| `GET` | `/v1/compliance/genesis-instructions` | Participation steps |
| `GET` | `/v1/compliance/allocation-preview` | Tier preview (query params) |
| `POST` | `/v1/compliance/wallet/register` | Register wallet |
| `GET` | `/v1/compliance/wallet/:wallet/status` | Wallet lifecycle |
| `POST` | `/v1/compliance/kyc-webhook` | VIS KYC callback |
| `GET` | `/v1/compliance/attestation/:wallet` | Attestation blob |
| `POST` | `/v1/compliance/deposit/confirm` | Confirm treasury deposit |
| `POST` | `/v1/governance/vote` | Snapshot-style vote |
| `GET` | `/v1/sim/events` | SIM100 catalog |
| `GET` | `/v1/sim/merkle` | Deterministic Merkle root |
| `GET` | `/v1/sim/ticks` | Synthetic market ticks |
| `GET` | `/v1/sim/telemetry` | Telemetry export |
| `POST` | `/trade` | Legacy quant trade emit |
| `GET` | `/events` | Legacy quant event log |
| `GET` | `/status` | Legacy alias of `/v1/status` |
| `GET` | `/orderbook` | WebSocket order book snapshot |

---

## Tier overview

| Tier | Routes | Status |
|------|--------|--------|
| L1 + PoC telemetry | `/v1/status`, `/v1/stream`, `/v1/sets/:address` | **Live** |
| Compliance gatekeeper | `/v1/compliance/*` | **Live** |
| Simulation mirror | `/v1/sim/*` | **Live** |
| Governance | `/v1/governance/vote` | **Live** |
| Indexer | `/v1/indexer/:chain` | Partial |
| Legacy quant | `/trade`, `/events`, `/status`, `/orderbook` | **Live** |
| Planned | Tenant OAuth, B2B2B partition API | Phase 2 roadmap |

---

## L1 & PoC

### `GET /v1/status` · `GET /status`

PoC tuple (λ, H, E, R) + NTT supply minted/cap.

```json
{
  "lambda": 0.42,
  "entropy_h": 1.0,
  "efficiency_e": 0.0,
  "risk_r": 0.0,
  "supply_minted": 0,
  "supply_cap": 16000000000000000
}
```

### `GET /v1/sets/:address`

Set tier + vote weight for address.

```json
{
  "address": "0x1234567890123456789012345678901234567890",
  "set": "99",
  "vote_weight": 1
}
```

### `GET /v1/stream` (WebSocket)

Single push on connect:

```json
{ "type": "chain_status", "lambda": 0.42, "H": 1.0, "E": 0.0, "R": 0.0 }
```

### `GET /v1/orderbook`

```json
{
  "venues": [
    { "venue": "clrty-l1-native-amm", "bids": [], "asks": [] }
  ]
}
```

### `GET /orderbook` (WebSocket)

```json
{ "type": "orderbook_snapshot", "venues": [] }
```

---

## Compliance gatekeeper

### `POST /v1/compliance/wallet/register`

Request:

```json
{ "wallet": "0x1234567890123456789012345678901234567890" }
```

Response:

```json
{
  "wallet": "0x1234567890123456789012345678901234567890",
  "status": "registered",
  "portal_url": "https://portal.clrty.example/kyc",
  "registered_at": 1718841600
}
```

### `POST /v1/compliance/kyc-webhook`

Requires header `x-kyc-webhook-secret` matching `KYC_WEBHOOK_SECRET`. Body:

```json
{
  "status": "approved",
  "external_id": "vis-applicant-001",
  "wallet": "0x1234567890123456789012345678901234567890",
  "tier": 2,
  "hardware_score": 0
}
```

Response:

```json
{
  "status": "approved",
  "wallet": "0x1234567890123456789012345678901234567890",
  "blob_hash": "a1b2c3..."
}
```

### `GET /v1/compliance/attestation/:wallet`

```json
{
  "wallet": "0x1234567890123456789012345678901234567890",
  "kyc_tier": 2,
  "expires_at": 1750377600,
  "signature_hex": "deadbeef..."
}
```

### `GET /v1/compliance/wallet/:wallet/status`

```json
{
  "wallet": "0x1234567890123456789012345678901234567890",
  "lifecycle": "attested",
  "registered_at": 1718841600,
  "portal_url": "https://portal.clrty.example/kyc",
  "attested": true,
  "kyc_tier": 2,
  "attestation_expires_at": 1750377600,
  "allocated": false,
  "allocation_tx_hash": null,
  "clrty_nano": null,
  "saft_reference": "SAFT-2026-001",
  "investor_class": "506b_accredited"
}
```

### `POST /v1/compliance/deposit/confirm`

Request:

```json
{
  "wallet": "0x1234567890123456789012345678901234567890",
  "tx_hash": "0xabcdef..."
}
```

Response (`200` committed, `202` Safe indexing pending):

```json
{
  "status": "committed",
  "pending": false,
  "cpu_id": 42,
  "clrty_nano": 1500000000000,
  "tx_hash": "0x..."
}
```

### `GET /v1/compliance/treasury`

Requires `SAFE_TREASURY_ADDRESS` (or non-placeholder in embedded config).

```json
{
  "address": "0xTreasurySafeAddress",
  "network": "ethereum",
  "chain_id": 1,
  "threshold": 3,
  "owners": ["0xOwner1...", "0xOwner2..."],
  "verified_via_safe_api": true
}
```

### `GET /v1/compliance/genesis-instructions`

```json
{
  "protocol_version": "genesis-v1",
  "portal_url": "https://portal.clrty.example/kyc",
  "treasury_name": "CLRTY Genesis Treasury",
  "treasury_address": "0xTreasurySafeAddress",
  "treasury_verified": true,
  "network": "ethereum",
  "chain_id": 1,
  "accepted_assets": ["ETH", "USDC"],
  "total_genesis_supply": 16000000,
  "private_seed_cap_tokens": 2000000,
  "reference_price_usd": "1.00",
  "minimum_investment_usd": "100000.00",
  "steps": [
    { "step": 1, "title": "Register wallet", "actions": ["POST /v1/compliance/wallet/register"] }
  ],
  "allocation_tiers": [
    {
      "name": "Seed Genesis",
      "usd_threshold": "$100,000",
      "weight_multiplier": 1.5,
      "cliff_months": 6,
      "vest_months": 24,
      "benefits": ["1.5x compute-weighted register allocation"]
    }
  ],
  "benefits_summary": ["Deterministic 16M CLRTY cap", "Programmatic vesting escrow"]
}
```

### `GET /v1/compliance/allocation-preview?usd_cents=50000000&hardware_score=0`

```json
{
  "usd_cents": 50000000,
  "usd_display": "$500,000.00",
  "treasury_address": "0xTreasurySafeAddress",
  "phase": "Strategic Round",
  "weight_multiplier": 1.75,
  "clrty_tokens": 875000.0,
  "clrty_nano": 875000000000000,
  "cliff_months": 6,
  "vest_months": 24,
  "benefits": ["1.75x compute-weighted register allocation"]
}
```

---

## Simulation mirror

### `GET /v1/sim/events`

SIM100 event catalog batch (JSON object from `sim/events_100_catalog.json`).

### `GET /v1/sim/merkle`

Deterministic Merkle root — cross-check vs `cargo run -p atu_runner -- 10001`.

```json
{ "merkle_root": "0x...", "event_count": 100, "seed": 42 }
```

### `GET /v1/sim/ticks`

Synthetic market ticks (Proof-of-Yield reference band).

### `GET /v1/sim/telemetry`

NDJSON-style telemetry export.

---

## Governance

### `POST /v1/governance/vote`

```json
{
  "proposal_id": 1,
  "voter_hex": "0x1234567890123456789012345678901234567890123456789012345678901234",
  "balance": 1000000,
  "support": true
}
```

Response:

```json
{
  "passed": false,
  "votes_for": 1000000,
  "votes_against": 0
}
```

Vote weight from Set tier — see [`BINARY_INDEX_CONSENSUS_MAP.md`](governance/BINARY_INDEX_CONSENSUS_MAP.md).

---

## Indexer

### `GET /v1/indexer/:chain`

Chains: `ethereum`, `base`, `arbitrum`, `solana`, `clrty-l1` (aliases: `clrty`, `l1`).

```json
{
  "chain": "clrty-l1",
  "events": [
    {
      "chain_id": "ClrtyL1",
      "block_height": 0,
      "event_type": "Genesis",
      "payload": "{\"chain_id\":\"clrty-1\"}"
    }
  ]
}
```

---

## Alerts

### `GET /v1/alerts`

Liquidity depth + bridge messaging alerts.

```json
{
  "alerts": [
    {
      "severity": "Warning",
      "channel": "LiquidityDepth",
      "message": "clrty-l1-native-amm depth below threshold",
      "ts_ns": 1718841600000000000
    }
  ]
}
```

---

## Legacy quant pipeline

### `POST /trade`

```json
{ "symbol": "CLRTY/USD", "score": 0.85 }
```

Response:

```json
{ "status": "accepted", "symbol": "CLRTY/USD", "event_count": 1 }
```

### `GET /events`

```json
{ "events": [] }
```

---

## Authentication

| Surface | Auth |
|---------|------|
| Read endpoints | None (dev); rate-limited at edge in production |
| `/v1/compliance/kyc-webhook` | Header `x-kyc-webhook-secret` = `KYC_WEBHOOK_SECRET` |
| Write paths | Rate-limited; wallet sig planned for governance |

Never commit `MASTER_COMPLIANCE_PRIVATE_KEY`, `SAFE_API_KEY`, or webhook secrets.

---

## CLI cross-reference

```bash
cargo run -p clarity-cli -- chain genesis-verify
cargo run -p clarity-cli -- settlement register-wallet 0xYourWallet
cargo run -p clarity-cli -- bridge status
bash scripts/sim/run_100_events.sh
```

---

## Static analysis

```bash
bash scripts/audit/run_slither.sh
bash scripts/audit/generate_listing_compliance_pack.sh
bash scripts/audit/verify_bridge_connection_hashes.sh
```

---

## Explorer verification (Task 60)

```bash
bash scripts/export_abis.sh
```

Upload `abi_export/*.abi.json` to block explorers when bridge Phase 10 activates.
