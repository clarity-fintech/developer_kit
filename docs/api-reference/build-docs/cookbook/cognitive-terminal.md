# Cognitive terminal recipes

Moniverse Calibration onboarding via CLI and gated investor portal.

```bash
clrty id create demo-wallet
clrty id calibrate demo-wallet
clrty id capability demo-wallet
clrty id state-path demo-wallet
clrty id activate-strategy --preset=conservative
```

API:

```bash
curl -X POST http://127.0.0.1:8545/v1/onboarding/calibrate \
  -H 'Content-Type: application/json' \
  -d '{"wallet":"demo"}'
```

Portal: `frontend/investor/cognitive-terminal.html` (gated)
