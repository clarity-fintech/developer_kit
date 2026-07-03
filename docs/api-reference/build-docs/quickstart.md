# Quickstart

Get a CLRTY L1 node and API running in minutes.

## Prerequisites

- Rust stable (2021 edition)
- Optional: Foundry for contract tests

## 1. Build

```bash
cargo build --workspace --release
cargo install --path clarity-cli
```

## 2. Verify

```bash
clrty sys health --plain
clrty node genesis-verify --plain
```

## 3. Start API

```bash
cargo run -p clrty-substrate --bin clarityd
curl http://127.0.0.1:8545/v1/status
```

## 4. Integration dry-run

```bash
bash scripts/integration/sandbox_dry_run.sh
```

## 5. Launch readiness (optional)

```bash
bash scripts/launch/launch_readiness.sh --continue --skip-foundry
```

Next: [Install and setup](view.html?p=build/install-and-setup) · [Developer hub](view.html?p=build/developer-hub)
