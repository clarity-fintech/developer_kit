# Token docs

Native token standard for CLRTY L1.

## Identity

| Field | Value |
|-------|-------|
| Symbol | CLRTY |
| Denom | `uclrty` |
| Chain | `clrty-1` |
| Decimals | 9 |
| Supply cap | 16,000,000 |

## Invariants

- `mint_authority: null` — no inflation
- `freeze_authority: null`
- Supply checksum: `CLRTY_SUBSTRATE/economic_engine/tokenomics/supply_checksum.rs`
- CCR Sets 99→1 resolved each transfer

## Config files

| File | Purpose |
|------|---------|
| `boot/genesis_entropy.json` | Genesis mint + allocations |
| `boot/tokenomics_manifest.json` | Vesting + phase schedule |
| `boot/mainnet_listing_config.json` | Listing categories |

## Verification

```bash
clrty node genesis-verify --plain
cargo test -p clrty-substrate supply_checksum
```

Deep dive: [TOKENOMICS_LOCKED.md](../../docs/tokenomics/TOKENOMICS_LOCKED.md) · [structural_layout.md](../../docs/token/structural_layout.md)
