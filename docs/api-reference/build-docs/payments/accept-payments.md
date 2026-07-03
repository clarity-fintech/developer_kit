# Accept payments (merchant)

CortexPay v1 scaffolds — no live merchant UI in public web3-ui.

```bash
clrty cortexpay predict --session=s1 --merchant=m1
clrty cortexpay checkout-plan --session=s1
clrty cortexpay route-pay --wallet=buyer --amount=5000000000
```

API: `POST /v1/cortexpay/checkout-plan`
