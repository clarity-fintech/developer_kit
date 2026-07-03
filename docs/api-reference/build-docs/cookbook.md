# Cookbook

Recipes for common CLRTY integration tasks.

## Query network status

```bash
curl http://127.0.0.1:8545/v1/status | jq
```

## Verify genesis

```bash
clrty node genesis-verify --plain
cargo run -p clarity-cli -- chain genesis-verify
```

## Run launch readiness battery

```bash
bash scripts/launch/launch_readiness.sh --continue --skip-foundry
bash scripts/investor/build_treasury_data.sh
```

## Sandbox integration dry-run

```bash
bash scripts/integration/sandbox_dry_run.sh
```

## ATU determinism gate

```bash
cargo run -p atu_runner -- 10001
```

## Security layers verify

```bash
bash scripts/audit/verify_security_layers.sh
```

## Indexer worker (production pattern)

See [indexer_production.md](../../docs/omnichain/indexer_production.md)

More recipes: [Cookbook templates](view.html?p=build/templates)
