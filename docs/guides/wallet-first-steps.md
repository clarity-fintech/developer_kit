# Wallet First Steps on CLRTY-1

## Step 1 — Create a CLRTY Wallet

Use the official wallet flow to create a wallet, generate a keypair, save your recovery phrase securely, and confirm setup. You receive a wallet address, devnet connection, and CLRTY balance initially set to 0.

Important: wallet state is stored locally. Clearing the browser may remove access. Use devnet for testing only.

## Step 2 — Get CLRTY (Airdrop)

CLRTY is required for accounts, execution fees, simulations, and program deployment.

```bash
clrty airdrop 10
```

Web faucet: `https://faucet.clrty.dev`.

Airdrops are entropy-aware, execution-weighted, and state-integrated.

## Step 3 — Understand CLRTY Accounts

Accounts store tokens, data, and program state. CLRTY accounts are Moniversion State Containers: one convergent state, deterministic updates, compressible history.

```ts
const account = await clrty.accounts.create({
  owner: wallet.publicKey,
  space: 1024,
});
```

## Step 4 — Send a Transaction

CLRTY flow: submit, simulate, optimize, execute, converge.

```ts
await clrty.tx.send({
  to: recipient,
  amount: 5,
  simulate: true,
});
```

## Step 5 — Build Your First Program

```bash
clrty program init hello_convergence
```

```rust
pub fn execute(ctx: Context<Execute>, input: u64) -> Result<()> {
    let state = &mut ctx.accounts.state;
    state.value = converge(state.value, input);
    Ok(())
}
```

All programs must produce deterministic outputs, converge state, and avoid divergence.

## Step 6 — Deploy Program

```bash
clrty program deploy ./target/hello_convergence.so
```

Deployment includes simulation validation, entropy scoring, and convergence enforcement.

## Step 7 — Convergence-Derived Addresses (CDA)

```ts
const [cda] = await clrty.address.derive({
  seeds: ['user', wallet.publicKey],
  programId,
});
```

## Step 8 — Cross-Execution Calls (CEC)

```rust
invoke_convergent(target_program, accounts, instruction_data);
```

## Step 9 — Simulation Engine

```ts
const sim = await clrty.simulate(tx);
console.log(sim.result);
console.log(sim.entropyScore);
```

## Step 10 — Entropy Scoring

Entropy measures execution inefficiency. CLRTY uses it to optimize transactions, price fees, and reject inefficient logic.

## Step 11 — Full Execution Lifecycle

Submit → Simulate → Score entropy → Optimize → Validate (PoC) → Execute → Converge.

## Step 12 — Devnet vs Mainnet

| Feature | Devnet | Mainnet |
|---|---|---|
| Airdrops | Yes | No |
| Simulation | Full | Full |
| Token value | None | Real |
| Use case | Testing | Production |

## CLI Overview

```bash
clrty airdrop <amount>
clrty accounts create
clrty tx send
clrty program init
clrty program deploy
clrty simulate
```

CLRTY-1 is where execution becomes the protocol. Every transaction is simulated, optimized, and guaranteed.
