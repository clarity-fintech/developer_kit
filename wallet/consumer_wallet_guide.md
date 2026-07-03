# CLRTY Consumer Wallet Guide (Task 56 — L1)

## CLRTY L1 wallet

CLRTY launches on the sovereign L1 chain **`clrty-1`** with native denom **`uclrty`** (9 decimals).

| Field | Value |
|-------|-------|
| Chain ID | `clrty-1` |
| Denom | `uclrty` |
| Max supply | 16,000,000 CLRTY |

## Connect flow

1. Open [Clarity Fortress](https://dev.clrty.io/labs) — 12-step builder funnel (steps 2–6: wallet connect, faucet, simulate, HELIX preview)
2. Open `frontend/web3-ui/index.html` (or hosted app)
3. Enter your CLRTY L1 address (32-byte hex)
4. View Set tier via `GET /v1/sets/{address}`

**Fortress CLI alias:** `clrty wallet labs status` · `clrty wallet labs step <n>`

## API endpoints

```bash
curl http://127.0.0.1:8545/v1/status
curl http://127.0.0.1:8545/v1/sets/clrty1genesis00000000000000000000000001
curl http://127.0.0.1:8545/v1/indexer/clrty-l1
```

## Staking (Task 50)

Validator bonding on L1 uses `balance_bonding.rs` and `validator_singularity_set.json`. EVM `FmaStakingVault` is deferred Phase 10.

## Governance (Task 51)

Cast snapshot votes via `POST /v1/governance/vote` — balance-weighted; tokens stay in your wallet.

## Deferred

MetaMask / Phantom multi-chain bridging is **not** part of L1 launch. See [l1_launch/DEFERRED_BRIDGE.md](l1_launch/DEFERRED_BRIDGE.md).

## Clarity Fortress builder funnel

Interactive walkthrough, faucet, explorer, and simulate-before-sign playground:

- Portal: [dev.clrty.io/labs](https://dev.clrty.io/labs) · static: `frontend/labs/`
- API: `GET /v1/labs/walkthrough`, `GET /v1/labs/sections`, `POST /v1/security/mda/preview`
- Wallet adapter stub: `clarity-wallet/wallet-integration/src/labs-wallet-adapter.ts`
- Sync: `make clarity-wallet-labs-sync` · verify: `make labs-smoke`
