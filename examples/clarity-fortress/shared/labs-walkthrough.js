/**
 * Twelve-step Clarity Fortress walkthrough shell (dev.clrty.io/labs).
 */
(function (global) {
  const api = global.ClarityLabsApi;

  function el(tag, cls, html) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }

  async function loadSteps() {
    try {
      if (api) return await api.getWalkthrough();
    } catch (_) {}
    const res = await fetch('../labs/walkthrough/steps.json');
    return res.json();
  }

  function renderStep(container, step, index, total) {
    const card = el('article', 'labs-step-card');
    card.innerHTML =
      '<header class="labs-step-header">' +
      '<span class="labs-step-num">Step ' +
      (index + 1) +
      ' / ' +
      total +
      '</span>' +
      '<h2>' +
      (step.label || step.id) +
      '</h2>' +
      '</header>' +
      '<p class="labs-step-desc">' +
      (step.description || '') +
      '</p>' +
      '<p class="labs-step-section"><strong>Section:</strong> ' +
      (step.section || '') +
      '</p>' +
      (step.action
        ? '<button type="button" class="labs-step-action" data-action="' +
          step.action +
          '">' +
          (step.actionLabel || 'Run') +
          '</button>'
        : '') +
      (step.doc ? '<a class="labs-step-doc" href="' + step.doc + '">Documentation</a>' : '');
    container.appendChild(card);
    return card;
  }

  async function runAction(action, step) {
    if (!api) return;
    switch (action) {
      case 'status':
        alert(JSON.stringify(await api.getStatus(), null, 2));
        break;
      case 'simulate':
        alert(JSON.stringify(await api.simulateTransaction({}), null, 2));
        break;
      case 'airdrop': {
        const addr = prompt('Wallet address for airdrop');
        if (addr) alert(JSON.stringify(await api.requestAirdrop(addr), null, 2));
        break;
      }
      case 'slot':
        alert(JSON.stringify(await api.getSlot(), null, 2));
        break;
      case 'helix':
        alert(JSON.stringify(await api.helixStatus(), null, 2));
        break;
      case 'nodeRegister': {
        const nodeId = prompt('Node ID (e.g. partner-node-1)', 'dev-node-' + Date.now());
        if (!nodeId) break;
        alert(JSON.stringify(await api.registerNode(nodeId, 'node_free'), null, 2));
        break;
      }
      default:
        console.log('labs action', action, step);
    }
  }

  async function initLabsWalkthrough(rootId) {
    const root = document.getElementById(rootId || 'labs-walkthrough');
    if (!root) return;
    root.innerHTML = '<p class="labs-loading">Loading walkthrough…</p>';
    const data = await loadSteps();
    const steps = data.steps || data;
    root.innerHTML = '';
    const progress = el('div', 'labs-progress');
    progress.textContent = 'CLRTY-1 · chain ' + (api ? api.chainId : 'clrty-1');
    root.appendChild(progress);
    steps.forEach((step, i) => {
      const card = renderStep(root, step, i, steps.length);
      const btn = card.querySelector('.labs-step-action');
      if (btn) btn.addEventListener('click', () => runAction(btn.dataset.action, step));
    });
  }

  global.initLabsWalkthrough = initLabsWalkthrough;
})(typeof window !== 'undefined' ? window : globalThis);
