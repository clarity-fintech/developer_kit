# Downloads — Clarity Fortress / CLRTY-1 Developer Kit

Everything in this repository is packaged for direct use by external builders.

## Primary Download

| Kit | File | Contents |
|-----|------|----------|
| MIS Kernel (`misc`) | [`dist/mis-kernel-misc.zip`](dist/mis-kernel-misc.zip) | Sole active MIS compiler kernel + darwin-arm64 binary + source |
| Full Developer Kit | [`dist/developer-kit-full.zip`](dist/developer-kit-full.zip) | SDKs, wallet builder files, examples, manifests, API references, quickstarts, and Clarity Fortress frontend helpers |
| Live SDK Downloads | [`dist/live-sdk-downloads.zip`](dist/live-sdk-downloads.zip) | TypeScript, Rust, Go, wallet, API, example, and manifest SDK surfaces for builders |
| PRISM CLI Account Access Pack | [`dist/prism-cli-account-access-pack.zip`](dist/prism-cli-account-access-pack.zip) | Account creation, terminal gate, personal access code, and `clrt pack` docs/source needed for CLI onboarding |
| Mastermind First Access Pack | [`dist/mastermind-first-access-pack.zip`](dist/mastermind-first-access-pack.zip) | First Access docs, terminal vector demos, local inference configs, proof-of-fidelity samples, and hosted manifest |

Checksums: [`dist/SHA256SUMS.txt`](dist/SHA256SUMS.txt)

## MIS Kernel Download

```bash
curl -L -o mis-kernel-misc.zip https://github.com/clarity-fintech/developer_kit/raw/main/dist/mis-kernel-misc.zip
unzip mis-kernel-misc.zip
cd CLRTY-MIS-Kernel && bash scripts/download_misc_kernel.sh
./bin/misc --help
```

Or clone: `git clone https://github.com/clarity-fintech/CLRTY-MIS-Kernel.git`

## Git Clone

```bash
git clone https://github.com/clarity-fintech/developer_kit.git
cd developer_kit
```

## Included Surfaces

- `sdk/` — TypeScript, Rust, Go, and integration SDK surfaces.
- `wallet/` — programmable wallet source and wallet-first docs.
- `examples/` — Clarity Fortress examples and frontend helper code.
- `docs/` — overview, API references, integration guides, and wallet steps.
- `manifests/` — RPC, wallet environment, and Clarity Fortress manifests.

## CLI Account Creation

Use the PRISM CLI repo for the live command surface:

```bash
git clone https://github.com/clarity-fintech/clarity_prism_cli.git
cd clarity_prism_cli
npm install && npm run build
clrt account create --username alice --entity "Acme" --email ops@acme.com --intent liquidity
clrt gate password
clrt pack download mastermind
clrt pack verify mastermind
```

## Verification

Review [`MANIFEST.md`](MANIFEST.md) for source provenance and [`INDEX.md`](INDEX.md) for the folder map.
