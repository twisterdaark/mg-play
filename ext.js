/* «من غير فلتر»: the private adult mode (owner 2026-09-29). Web site only: tools/build.py --web writes this file,
   with the content encrypted, to web-extra/ext.js; the Android builds refuse any www/ that holds it.
   Unlock: type the code into the shop's search box, then confirm 18+. Off in kids' mode and in rooms with a kid. */
(function () {
  'use strict';
  const MARK = 'MG_X18';
  const BLOB = {"salt": "MwNLOzrUryeW+ExRgyLr4Q==", "iter": 200000, "check": "G84ohOQ+XxdvGfeTBPgY6g==", "data": "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"};
  const KEY = 'qadaya.x18.v1'; // { k: derived key (base64), on: { wq, court } }
  const TE = new TextEncoder(), TD = new TextDecoder();
  const b64d = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
  const b64e = (u) => btoa(String.fromCharCode(...u));
  const load = () => { try { return JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { return {}; } };
  const save = (o) => { try { localStorage.setItem(KEY, JSON.stringify(o)); } catch (e) { /* no storage */ } };
  async function derive(code) {
    const base = await crypto.subtle.importKey('raw', TE.encode(code), 'PBKDF2', false, ['deriveBits']);
    return new Uint8Array(await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt: b64d(BLOB.salt), iterations: BLOB.iter }, base, 256));
  }
  async function prf(key) {
    const k = await crypto.subtle.importKey('raw', key, { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
    return async (label) => new Uint8Array(await crypto.subtle.sign('HMAC', k, TE.encode(label)));
  }
  async function openWith(key) {
    const f = await prf(key);
    if (b64e((await f('check')).slice(0, 16)) !== BLOB.check) return null;
    const data = b64d(BLOB.data), out = new Uint8Array(data.length);
    for (let i = 0; i * 32 < data.length; i++) {
      const ks = await f('ks' + i);
      for (let j = 0; j < 32 && i * 32 + j < data.length; j++) out[i * 32 + j] = data[i * 32 + j] ^ ks[j];
    }
    try { return JSON.parse(TD.decode(out)); } catch (e) { return null; }
  }
  window.MG_EXT && window.MG_EXT((api) => {
    let C = null, C0 = null, pendingKey = null, busy = false;
    const st = () => load();
    const blocked = () => !!api.SET.kids || api.kidRoom();
    const on = (k) => !!C && !blocked() && !!(st().on || {})[k];
    const g = (t, f) => String(t || '').replace(/\{([^{}|]*)\|([^{}|]*)\}/g, (_, m, w) => (f ? w : m));
    const rerender = () => { try { api.render(); } catch (e) { /* ignore */ } };
    // its cases go on their own shelf (one phone only; kidsOK hides «adult» cases in kids' mode)
    const CAT = { id: 'x18', title: 'قضايا من غير فلتر (+18)', note: 'للكبار بس: إيحاءات وكلام صريح. على موبايل واحد.', cases: [] };
    function addCases(c) {
      const list = Array.isArray(c.cases) ? c.cases : [];
      if (!list.length || api.CATEGORIES.some((k) => k.id === CAT.id)) return;
      list.forEach((x) => { if (!api.CASES.some((y) => y.id === x.id)) api.CASES.push(x); });
      CAT.cases = list.map((x) => x.id);
      api.CATEGORIES.push(CAT);
    }
    function dropCases() {
      const i = api.CATEGORIES.findIndex((k) => k.id === CAT.id);
      if (i >= 0) api.CATEGORIES.splice(i, 1);
      for (let k = api.CASES.length - 1; k >= 0; k--) if (CAT.cases.includes(api.CASES[k].id)) api.CASES.splice(k, 1);
    }
    // the saved key opens the content on every start, with no code to type again
    const saved = st().k;
    if (saved) openWith(b64d(saved)).then((c) => { if (c) { C = c; addCases(c); rerender(); } }).catch(() => {});

    api.hooks.shopQ = (text) => {
      const t = String(text || '').trim();
      if (C || busy || t.length < 8 || t.length > 20 || /\s/.test(t)) return;
      busy = true;
      derive(t).then(async (key) => {
        const c = await openWith(key);
        busy = false;
        if (!c) return;
        pendingKey = key; C0 = c;
        api.setModal({
          title: 'محتوى للكبار بس (+18)',
          body: 'المود ده فيه شتايم وإيحاءات وكلام جنسي صريح، ومعمول لصحاب كبار بيلعبوا مع بعض. مبيشتغلش في مود الأطفال ولا في أوضة فيها حد صغير. إنت فوق 18 سنة وموافق؟',
          actions: [{ label: 'أنا فوق 18، افتحه', act: 'x18Yes', cls: 'primary' }, { label: 'لأ', act: 'x18No' }],
        });
        api.render();
      }).catch(() => { busy = false; });
    };
    api.act.x18Yes = () => {
      if (!pendingKey || !C0) return;
      const o = st(); o.k = b64e(pendingKey); o.on = o.on || { wq: 1, court: 1 }; save(o);
      C = C0; C0 = null; pendingKey = null; addCases(C);
      api.setModal(null); api.S.shopQ = '';
      api.toast(C.cases && C.cases.length ? 'اتفتح «من غير فلتر». هتلاقيه في «وقّعهم في بعض» والمحكمة ودرج قضايا جديد.' : 'اتفتح «من غير فلتر». هتلاقيه في «وقّعهم في بعض» والمحكمة.');
      api.render();
    };
    api.act.x18No = () => { pendingKey = null; C0 = null; api.setModal(null); api.render(); };
    api.act.x18Tog = (k) => { const o = st(); o.on = o.on || {}; o.on[k] = o.on[k] ? 0 : 1; save(o); api.render(); };
    api.act.x18Lock = () => { save({}); C = null; dropCases(); api.toast('اتقفل «من غير فلتر» على الموبايل ده.'); api.render(); };

    api.hooks.wq = (type) => {
      if (!on('wq')) return null;
      const x = (C.wq || {})[type];
      return Array.isArray(x) && x.length ? x : null;
    };
    api.hooks.court = (k) => (on('court') && Array.isArray((C.court || {})[k]) ? C.court[k] : null);
    const row = (k, label) => `<div class="setrow"><span>${label}${blocked() ? ' (مقفول: فيه حد صغير أو مود الأطفال)' : ''}</span><button class="toggle ${(st().on || {})[k] && !blocked() ? 'on' : ''}" data-act="x18Tog" data-arg="${k}" aria-pressed="${!!(st().on || {})[k]}" ${blocked() ? 'disabled' : ''}><span></span></button></div>`;
    api.hooks.html = (where) => {
      if (!C) return '';
      if (where === 'wqSetup') return api.S.kidsQ ? '' : `<div data-notr>${row('wq', 'من غير فلتر (+18): شتايم وإيحاءات')}</div>`;
      if (where === 'courtSetup') return `<section class="setgroup" data-notr><h2>من غير فلتر (+18)</h2>${row('court', 'مهمات وأحكام بشتايم وإيحاءات')}<button class="btn ghost sm" data-act="x18Lock">اقفل المود ده على الموبايل ده</button></section>`;
      if (where === 'mpLobby') return api.MP.role === 'host' ? `<div data-notr>${row('court', 'محكمة من غير فلتر (+18)')}</div>` : '';
      return '';
    };
    void MARK; void g;
  });
})();
