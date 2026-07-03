# Development recipes

```bash
# Build workspace
cargo build --workspace

# Start API
cargo run -p clrty-api

# Health check
clrty sys health
clrty net peers
```

## Subscribe to events

```bash
curl http://127.0.0.1:8545/v1/sim/events
```
