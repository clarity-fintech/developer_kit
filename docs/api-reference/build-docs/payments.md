# Payments

Accept and settle CLRTY payments on L1 with deterministic finality.

## L1 payment flow

1. Payer signs transfer of `uclrty`
2. Block commits sub-ms (PoC target)
3. Set tier re-resolves for both parties
4. Indexer records event via `/v1/indexer/clrty-l1`

## Institutional payments

For OTC blocks and treasury movements:

- Settlement gatekeeper API
- Gnosis Safe multisig monitor (dry-run)
- Capital flight guard (Layer 55)

See [Institutional payments](view.html?p=business/institutional-payments)

## Commerce tooling

B2B payment surfaces: [Commerce tooling](view.html?p=business/commerce-tooling)

## Deferred

Cross-chain payment rails (LayerZero, Wormhole): Phase 10 — [DEFERRED_BRIDGE.md](../../docs/l1_launch/DEFERRED_BRIDGE.md)
