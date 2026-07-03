# Send payments

```bash
clrty settlement preview 10000
clrty settlement sign-attestation 0xWallet 2
clrty settlement poll
clrty helix intents submit --kind=capital --amount=1000000000 --asset=uclrty
```

API: `POST /v1/compliance/deposit/confirm`
