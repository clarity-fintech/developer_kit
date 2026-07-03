# HTTP RPC methods

All routes served by `clrty-api` on port **8545**.

## Core

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/status` | Node status |
| GET | `/v1/sim/events` | Simulation events |
| GET | `/v1/sim/merkle` | Merkle root |
| GET | `/v1/sim/ticks` | Tick feed |

## HELIX

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/helix/status` | Shadow state |
| POST | `/v1/helix/intents` | Submit ExecutionIntent |
| GET | `/v1/helix/net/preview` | Net settlement preview |

## CortexPay

| Method | Path | Description |
|--------|------|-------------|
| POST | `/v1/cortexpay/predict` | Intent probability |
| POST | `/v1/cortexpay/checkout-plan` | Checkout mutation plan |
| POST | `/v1/cortexpay/route` | Payment rail selection |
| GET | `/v1/cortexpay/wallet/{wallet}/profile` | Cognitive wallet summary |

## Onboarding

| Method | Path | Description |
|--------|------|-------------|
| POST | `/v1/onboarding/calibrate` | Moniverse calibration |
| POST | `/v1/onboarding/capability` | Proof-of-capability |
| GET | `/v1/onboarding/state-path/{wallet}` | State probability |
| POST | `/v1/onboarding/activate-strategy` | Bind MCA/AVR/EHL preset |

## Nano-Skills

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/nano/catalog` | N01–N20 manifest |
| POST | `/v1/nano/run/{catalog_id}` | Execute nano-skill |
| GET | `/v1/nano/evidence` | Feature Evidence feed |

## NeuroTemplates

| Method | Path | Description |
|--------|------|-------------|
| GET | `/v1/neuro-templates/seeds` | Template seeds |
| POST | `/v1/neuro-templates/init` | Bind seed + deployment |
| GET | `/v1/neuro-templates/{id}/adaptation` | Adaptation report |
