# CLRTY Developer & Integration Docs (Task 59) — L1-First

**Launch scope:** CLRTY L1 only (`clrty-1` / `uclrty`). See [l1_launch/checklist.md](l1_launch/checklist.md).

## Native token standard (Task 41)

| Item | Value |
|------|-------|
| Chain ID | `clrty-1` |
| Denom | `uclrty` |
| Decimals | 9 |
| Hard cap | 16,000,000 CLRTY |
| CCR Sets | 99→1 per transfer |

Config: `CLRTY_SUBSTRATE/boot/genesis_entropy.json`  
Tokenomics lock: [tokenomics/TOKENOMICS_LOCKED.md](tokenomics/TOKENOMICS_LOCKED.md)

## L1 environment (Task 42)

| Env var | Purpose |
|---------|---------|
| `CLRTY_L1_RPC` | L1 node RPC (default `http://127.0.0.1:8545`) |

Node: `cargo run -p clrty-substrate --bin clarityd -- status`

## Token invariants (Tasks 43–45)

- Hard cap enforced in genesis + `token_core/constants.rs`
- `mint_authority` and `freeze_authority` are null
- Tokenomics checksum verified on `chain genesis-verify`

## Security audit (Task 47)

```bash
bash scripts/audit/l1_substrate_audit.sh
```

External firm required: [audit/EXTERNAL_AUDIT_REQUIRED.md](audit/EXTERNAL_AUDIT_REQUIRED.md)

## Governance & timelock (Tasks 48–51)

- Validator set: `boot/baseline_metrics/validator_singularity_set.json`
- 48h timelock: `governance_substrate/upgrade_timelock_controller.rs`
- Snapshot votes: `POST /v1/governance/vote`

## API (Task 53)

See [developer_api.md](./developer_api.md). Base URL: `http://127.0.0.1:8545`.

Key L1 routes: `/v1/status`, `/v1/indexer/clrty-l1`, `/v1/governance/vote`

## Integration dry-run (Task 58)

```bash
bash scripts/integration/sandbox_dry_run.sh
```

## Pre-deployment simulation (Task 60)

```bash
bash scripts/predeploy/l1_launch_simulation.sh
```

## Consumer wallets

See [consumer_wallet_guide.md](./consumer_wallet_guide.md).

## Deferred — Phase 10 bridge

Omnichain bridge (LayerZero, Wormhole NTT, EVM, Solana) is not in L1 launch scope. See [l1_launch/DEFERRED_BRIDGE.md](l1_launch/DEFERRED_BRIDGE.md).
