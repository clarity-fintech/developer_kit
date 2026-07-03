/**
 * Clarity Fortress API client — CLRTY-1 mainnet only (§0b).
 * Production: api.clarity-fintech.com / rpc.clarity-fintech.com
 * Local: clrty-api :8545
 */
(function (global) {
  const LOCAL = typeof location !== 'undefined' && /localhost|127\.0\.0\.1/.test(location.hostname);
  const REST_BASE = LOCAL ? 'http://127.0.0.1:8545' : 'https://api.clarity-fintech.com';
  const RPC_BASE = LOCAL ? 'http://127.0.0.1:8545/rpc' : 'https://rpc.clarity-fintech.com';
  const CHAIN_ID = 'clrty-1';
  const NUMERIC_CHAIN_ID = 1202;

  async function rest(path, opts) {
    const res = await fetch(REST_BASE + path, opts || {});
    if (!res.ok) throw new Error('Labs API ' + path + ': ' + res.status);
    return res.json();
  }

  async function rpc(method, params) {
    const res = await fetch(RPC_BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jsonrpc: '2.0', id: 1, method, params: params || [] }),
    });
    const data = await res.json();
    if (data.error) throw new Error(data.error.message || 'RPC error');
    return data.result;
  }

  const LabsApi = {
    chainId: CHAIN_ID,
    numericChainId: NUMERIC_CHAIN_ID,
    restBase: REST_BASE,
    rpcBase: RPC_BASE,
    getStatus: () => rest('/v1/status'),
    getWalkthrough: () => rest('/v1/labs/walkthrough'),
    getSections: () => rest('/v1/labs/sections'),
    getSet: (address) => rest('/v1/sets/' + encodeURIComponent(address)),
    simulateTransaction: (tx) => rpc('simulateTransaction', [tx || {}]),
    requestAirdrop: (address, amount) => rpc('requestAirdrop', [address, amount || 1000000000]),
    getSlot: () => rpc('getSlot', []),
    getHealth: () => rpc('getHealth', []),
    getSecurityStatus: () => rest('/v1/security/status'),
    mdaPreview: (body) =>
      fetch(REST_BASE + '/v1/security/mda/preview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body || {}),
      }).then((r) => {
        if (!r.ok) throw new Error('MDA preview: ' + r.status);
        return r.json();
      }),
    helixStatus: () => rest('/v1/helix/status'),
    registerNode: (nodeId, tier, customerId) =>
      fetch(REST_BASE + '/v1/monetization/node/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          node_id: nodeId,
          tier: tier || 'node_free',
          customer_id: customerId || undefined,
        }),
      }).then((r) => {
        if (!r.ok) throw new Error('Node register: ' + r.status);
        return r.json();
      }),
    nodeHeartbeat: (nodeId, version, uptimeSecs) =>
      fetch(REST_BASE + '/v1/monetization/node/heartbeat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          node_id: nodeId,
          version: version || '1.0.0',
          uptime_secs: uptimeSecs || 0,
        }),
      }).then((r) => {
        if (!r.ok) throw new Error('Node heartbeat: ' + r.status);
        return r.json();
      }),
    faucetRequest: (address) =>
      fetch(LOCAL ? REST_BASE + '/rpc' : 'https://faucet.clarity-fintech.com/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address }),
      }).then((r) => r.json()),
  };

  if (typeof module !== 'undefined' && module.exports) module.exports = LabsApi;
  global.ClarityLabsApi = LabsApi;
})(typeof window !== 'undefined' ? window : globalThis);
