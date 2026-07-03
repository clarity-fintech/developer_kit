# CLARITY WALLET (CUSTOM)

Product folder for the Clarity Wallet developer portal, SDK kernel, and React UI.

## Structure

- `src/` — TypeScript SDK (`CLRTY.Execute`, `Predict`, `Identity`)
- `app/` — Vite React app (Obsidian `#0a0e14` / Neon-Cyan `#00e5ff`)
- `manifests/` — RPC, developer resources, git ecosystem
- `content-database/` — SEC-01..12 build verification matrix
- `learn/chapters/` — Chapters 0, 2, 3, 4, 10
- `downloads/` — Access pack catalog (AP-*)

## Build

```bash
make clarity-wallet-build
make content-database-verify
npm run build:app --prefix clarity-wallet
```

## API

Served via `clrty-api` at `/v1/dev/*`, `/v1/rpc/*`, `/v1/token/extensions/*`, `/v1/wallet/*`.
