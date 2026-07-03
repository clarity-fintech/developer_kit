# Execution recipes

```bash
clrty settlement preview 10000
clrty helix intents submit --kind=capital --amount=1000
clrty helix net preview --from=helix --to=mirra --amount=100
clrty producer start --ticks=3
```

## Skills pipeline

```bash
clrty skill run metric-collapse-arbitrage --account=0xINST --capital=1000000
clrty strategy run --steps="attestation-verify,helix-intent-resolve,metric-collapse-arbitrage"
```
