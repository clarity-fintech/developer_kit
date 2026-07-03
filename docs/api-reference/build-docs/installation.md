# Install the CLRTY CLI & Quantum Skills Suite

**Last verified:** 2026-06-18 · **Canonical path:** install → verify → first skill

## Single-command install

```bash
curl --proto '=https' --tlsv1.2 -sSf https://clrty.substrate.dev/install.sh | bash
```

**v1 fallback (in-repo):**

```bash
curl --proto '=https' --tlsv1.2 -sSf \
  https://raw.githubusercontent.com/theangelofwill/-CLRTY/main/scripts/install/clrty_install.sh | bash
```

## Verify

```bash
clarity verify-install   # planned alias — use cargo build check below for v1
clrty node status
clrty helix status
```

| Component | Version | Status |
|-----------|---------|--------|
| clarity-cli | workspace 0.1.0 | build from source |
| helix_engine | HELIX-01..10 | manifest verified |
| cortexpay_engine | CORTEX-01..08 | manifest verified |
| neuro_templates_engine | NT-01..08 | manifest verified |
| nano_skills | N01–N20 | manifest verified |

## Quick start {#quick-start}

```bash
git clone https://github.com/theangelofwill/-CLRTY.git
cd -CLRTY
cargo build --release -p clarity-cli
export PATH="$PWD/target/release:$PATH"
clrty id calibrate --wallet=demo
clrty nano run N05 --dry-run
clrty helix run --ticks=3 --dry-run
```

## Diagnostic loop

1. `clrty sys health`
2. `scripts/audit/verify_helix_engine.sh`
3. `cargo test -p helix_engine -p cortexpay_engine -p neuro_templates_engine`

See [RPC hub](rpc.md) · [Cookbook](cookbook/index.md) · [Bootcamp](bootcamp/index.md)

> Legacy [Install and setup](install-and-setup.md) redirects here.
