# RPC providers

Run your own node or connect to hosted CLRTY L1 endpoints.

## Self-hosted (recommended for production)

```bash
cargo run -p clrty-substrate --bin clarityd
export CLRTY_L1_RPC=http://127.0.0.1:8545
```

## Environment

| Env | Default |
|-----|---------|
| `CLRTY_L1_RPC` | `http://127.0.0.1:8545` |

## Mainnet provisioning

Pre-mainnet checklist: [mainnet_environment_provision.md](../../docs/omnichain/mainnet_environment_provision.md)

## Hosted providers

Public RPC endpoints will be listed post-mainnet launch. Until TGE:

1. Run local `clarityd`
2. Use integration sandbox: `scripts/integration/sandbox_dry_run.sh`

## Rate limits & auth

Operator routes may require `CLRTY_AUTH_TOKEN`. Document per-deployment in your runbook.
