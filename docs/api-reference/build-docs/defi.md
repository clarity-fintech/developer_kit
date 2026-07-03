# DeFi

Decentralized finance primitives on CLRTY L1.

## Live at L1 launch

| Primitive | Module |
|-----------|--------|
| Native transfers | `token_core/` |
| Staking / bonding | `balance_bonding.rs` |
| Governance votes | `POST /v1/governance/vote` |
| Fee burn flywheel | `mvm_execution/gas_deflation_matrix/` |
| MIRRA fragmentation (scaffold) | `economic_core.rs` |

## Liquidity

4M CLRTY liquidity bucket seeds MIRRA + AMM at TGE. Shadow liquidity map: `arbitrage_core/`

## Arbitrage stack

Producer/consumer engine: [arbitrage/producer_engine.md](../../docs/arbitrage/producer_engine.md)

## Simulation

100-event SIM100 batch: [simulation/abm_architecture.md](../../docs/simulation/abm_architecture.md)

## Deferred

EVM FMA vault, omnichain DeFi: Phase 10
