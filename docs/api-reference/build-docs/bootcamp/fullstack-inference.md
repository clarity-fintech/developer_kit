# Bootcamp — Full-stack inference

Integrate HELIX + CortexPay + NeuroTemplates via API.

```bash
cargo run -p clrty-api &
curl http://127.0.0.1:8545/v1/helix/status
curl -X POST http://127.0.0.1:8545/v1/cortexpay/predict \
  -H 'Content-Type: application/json' \
  -d '{"session_id":"s1","merchant_id":"m1"}'
cargo run -p neuro_templates_engine --bin ntd -- --seed hft-app --dry-run
```

Daemons: `helixd`, `cortexpayd`, `ntd`
