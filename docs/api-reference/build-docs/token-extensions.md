# Token extensions

Extend CLRTY token behavior within L1 invariants.

## Allowed extensions (L1)

| Extension | Mechanism |
|-----------|-----------|
| Set resolution (CCR) | Per-transfer tier recompute |
| Vesting / escrow | `ecosystem_vesting_escrow.rs` |
| Register binding | VIS attestation + wallet registry |
| Metadata crosscheck | `token_metadata.rs` |

## Hard limits

- No post-genesis mint
- No freeze authority override
- Supply checksum must pass

## Listing extensions

Sub-allocations in [mainnet_listing_config.json](../../docs/infrastructure/mainnet_listing_config.md)

## Deferred

EVM SPL/ERC-20 wrappers, omnichain OFT: [appendices/TECHNICAL_LOGIC_LAYERZERO_OFTV2.md](../../docs/appendices/TECHNICAL_LOGIC_LAYERZERO_OFTV2.md)
