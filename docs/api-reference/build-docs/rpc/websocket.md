# WebSocket subscriptions

## Endpoints

| Path | Description |
|------|-------------|
| `ws://127.0.0.1:8545/v1/stream` | Event stream |
| `ws://127.0.0.1:8545/orderbook` | Order book updates |

## Example

```bash
# Use wscat or browser WebSocket client
wscat -c ws://127.0.0.1:8545/v1/stream
```

State commitment levels apply to streamed events — see [state commitment](state-commitment.md).
