# RPC docs

HTTP JSON-RPC surface for CLRTY L1 via **clrty-api** (default port **8545**).

## Base URL

```
http://127.0.0.1:8545
```

Set `CLRTY_L1_RPC` in clients.

## Core routes

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/status` | λ, H, E, R, supply, block height |
| GET | `/v1/sets/{address}` | CCR Set tier for address |
| GET | `/v1/indexer/clrty-l1` | Indexer snapshot |
| POST | `/v1/governance/vote` | Snapshot vote (balance-weighted) |
| GET | `/v1/pretest/status` | Pretest campaign rollup |
| GET | `/v1/compliance/treasury` | Treasury compliance view |

Full reference: [developer_api.md](../../docs/developer_api.md)

## Example

```bash
curl http://127.0.0.1:8545/v1/status
curl http://127.0.0.1:8545/v1/sets/clrty1genesis00000000000000000000000001
```

## Node binary

```bash
cargo run -p clrty-substrate --bin clarityd
clrty sys health --plain
```
