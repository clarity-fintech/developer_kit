# State commitment levels

CLRTY uses three commitment tiers for off-chain → on-chain promotion:

| Level | Description | Storage |
|-------|-------------|---------|
| **shadow** | HELIX kernel tick state, net flows | `var/helix/` |
| **attested** | Settlement attestation blobs | `settlement/attestation_blob` |
| **canonical** | L1 state_manifold commits | `state_manifold/` |

```bash
clrty helix status          # shadow
clrty settlement status     # attested
clrty node genesis-verify   # canonical gate
```
