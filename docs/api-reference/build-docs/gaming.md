# Gaming

Game integrations on CLRTY — high-throughput L1 commits and Set-tier coordination.

## Why CLRTY for games

- Sub-millisecond sim-block commit targets (Zone I pretest)
- Deterministic state root chain (`state_manifold/`)
- Set tiers as in-game coordination weight (not pay-to-win labels)

## Integration pattern

1. Game server holds hot wallet / session keys
2. Poll `GET /v1/status` for λ pressure (difficulty / fee tuning)
3. Batch player settlements via native transfers
4. Index events from `/v1/indexer/clrty-l1`

## Blueprint reference

[master_blueprint.md](../../docs/master_blueprint.md) — compute commodity + lane enforcer modules

## Status

Gaming SDK templates are roadmap items. Start with [Quickstart](view.html?p=build/quickstart) and [RPC docs](view.html?p=build/rpc-docs).
