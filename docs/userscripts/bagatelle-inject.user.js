// ==UserScript==
// @name         Bagatelle HTML5 Injector
// @namespace    https://local.dev/bagatelle
// @version      0.2.1
// @description  Replace Flash RIP placeholder with the local HTML5 port (Phaser) running on Github pages.
// @match        https://www.neopets.com/halloween/bagatelle.phtml*
// @run-at       document-end
// @grant        GM_xmlhttpRequest
// @connect      neopets.com
// @connect      www.neopets.com
// ==/UserScript==

(function() {
  'use strict';

  const DEFAULT_SRC = 'https://sir-stroman.github.io/bagatelle-html5.github.io/'; // Served by `node web/server.js`
  let SRC = localStorage.getItem('bagatelle_src') || DEFAULT_SRC;
  // Ensure embed mode param for cleaner UI inside iframe
  if (SRC.indexOf('?') === -1) SRC += '?embed=1';
  else {
    if (!/[?&]embed=1/.test(SRC)) SRC += '&embed=1';
  }

  function log(...args) { console.log('[BagatelleInjector]', ...args); }

  function removeFlashRIP() {
    const rip = document.querySelector('.flashRIP__2020');
    if (rip) {
      rip.style.display = 'none';
      log('Hid .flashRIP__2020 placeholder');
      return true;
    }
    return false;
  }

  function findMountParent() {
    // Prefer the parent of flashRIP placeholder; else main content area
    const rip = document.querySelector('.flashRIP__2020');
    if (rip && rip.parentElement) return rip.parentElement;
    // Fallbacks commonly present on Neopets pages
    return document.querySelector('#content')
        || document.querySelector('#main')
        || document.body;
  }

  function injectIframe() {
    const parent = findMountParent();
    if (!parent) { log('ERROR: Could not locate mount parent'); return; }

    // Remove/hide any original flash/object/embed blocks in the parent
    parent.querySelectorAll('object, embed').forEach(el => el.style.display = 'none');

    // Create mount container
    const mount = document.createElement('div');
    mount.id = 'bagatelle-html5-mount';
    mount.style.position = 'relative';
    mount.style.width = '500px';
    mount.style.height = '500px';
    mount.style.margin = '20px auto';
    mount.style.background = '#101010';
    mount.style.border = '1px solid #222';
    mount.style.boxShadow = '0 2px 10px rgba(0,0,0,0.4)';

    // Title bar
    const title = document.createElement('div');
    title.textContent = 'Bagatelle (HTML5)';
    title.style.position = 'absolute';
    title.style.top = '-18px';
    title.style.left = '0';
    title.style.color = '#ccc';
    title.style.font = '12px monospace';
    parent.appendChild(mount);
    mount.appendChild(title);

    // Iframe to local dev server
    const iframe = document.createElement('iframe');
    iframe.src = SRC;
    iframe.title = 'Bagatelle HTML5';
    iframe.width = '500';
    iframe.height = '500';
    iframe.style.width = '500px';
    iframe.style.height = '500px';
    iframe.style.border = '0';
    iframe.style.overflow = 'hidden';
    iframe.style.display = 'block';
    iframe.setAttribute('scrolling', 'no');
    mount.style.overflow = 'hidden';
    iframe.allow = 'autoplay';
    iframe.referrerPolicy = 'no-referrer';

    iframe.addEventListener('load', () => log('Iframe loaded:', SRC));
    iframe.addEventListener('error', () => log('ERROR: Iframe failed to load. Is the local server running?', SRC));

    mount.appendChild(iframe);
    log('Injected iframe at', SRC);

    // Crop toggle button
    const ctrl = document.createElement('div');
    ctrl.style.position = 'absolute';
    ctrl.style.top = '-18px';
    ctrl.style.right = '0';
    ctrl.style.font = '12px monospace';
    ctrl.style.color = '#ccc';
    ctrl.style.cursor = 'pointer';
    ctrl.style.userSelect = 'none';
    mount.appendChild(ctrl);

    const hasParam = (url, name) => new RegExp(`[?&]${name}=`).test(url);
    const setParam = (url, name, value) => {
      const u = new URL(url, window.location.origin);
      if (value === null) { u.searchParams.delete(name); }
      else { u.searchParams.set(name, value); }
      return u.toString();
    };
    const label = () => (hasParam(iframe.src, 'crop') && /(^|\W)(1|true)(\W|$)/.test(new URL(iframe.src).searchParams.get('crop') || '')) ? 'Crop: ON' : 'Crop: OFF';
    const refreshLabel = () => { ctrl.textContent = label(); };
    refreshLabel();
    ctrl.addEventListener('click', () => {
      const url = new URL(iframe.src);
      const cur = url.searchParams.get('crop');
      if (cur === '1' || cur === 'true') {
        url.searchParams.delete('crop');
      } else {
        url.searchParams.set('crop', '1');
      }
      iframe.src = url.toString();
      setTimeout(refreshLabel, 50);
    });
  }

  function main() {
    removeFlashRIP();
    // Hide any page hint that says "click the board to play" outside our iframe
    try {
      const patterns = [/click[^\w]*the[^\w]*board[^\w]*to[^\w]*play/i, /click[^\w]*anywhere[^\w]*to[^\w]*play/i];
      const nodes = Array.from(document.querySelectorAll('body *:not(script):not(style)'));
      let hidden = 0;
      nodes.forEach(el => {
        const t = (el.textContent || '').trim();
        if (t && patterns.some(p => p.test(t))) {
          el.style.display = 'none'; hidden++;
        }
      });
      if (hidden) log('Hid', hidden, 'page hint element(s) mentioning click-to-play');
    } catch (e) { /* ignore */ }
    injectIframe();

    // Bridge: Handle network requests from iframe (cross-origin safe)
    window.addEventListener('message', (e) => {
      try {
        const data = e.data || {};
        if (!data || data.type !== 'bagatelle:request' || !data.id || !data.url) return;
        GM_xmlhttpRequest({
          method: 'GET',
          url: data.url,
          headers: { 'Accept': 'text/plain, */*' },
          onload: (res) => {
            e.source && e.source.postMessage({ type: 'bagatelle:response', id: data.id, ok: true, status: res.status, text: res.responseText }, '*');
          },
          onerror: (err) => {
            e.source && e.source.postMessage({ type: 'bagatelle:response', id: data.id, ok: false, status: 0, error: String(err) }, '*');
          }
        });
      } catch (err) {
        // ignore
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', main);
  } else {
    main();
  }
})();
