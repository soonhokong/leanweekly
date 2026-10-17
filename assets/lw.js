/* Lean Weekly client script: continuous scrolling, copy-link buttons, and
   search. No dependencies. The only markup it inserts is cards the site build
   rendered and escaped (from the next stream page or cards.json); text from
   the search index goes in as text nodes. */
"use strict";
(() => {
  const ROOT = new URL(document.documentElement.dataset.root || "./", location.href);
  const at = (path) => new URL(path, ROOT).href;
  const DAY = new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", timeZone: "UTC" });
  const dayOf = (iso) => DAY.format(new Date(iso + "T12:00:00Z"));
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };

  /* ---- Day and night: day by default; the toggle switches and remembers it (theme.js reapplies it). */
  function setupTheme() {
    const btn = document.querySelector("button.theme");
    if (!btn) return;
    const root = document.documentElement;
    const dark = () => root.dataset.theme === "dark";
    const label = () => btn.setAttribute("aria-label", dark() ? "Switch to day mode" : "Switch to night mode");
    btn.hidden = false;
    label();
    btn.addEventListener("click", () => {
      root.dataset.theme = dark() ? "light" : "dark";
      try { localStorage.setItem("lw-theme", root.dataset.theme); } catch (err) { /* not remembered */ }
      label();
    });
  }

  /* ---- Copy-link buttons: shown only when the clipboard is available. */
  const status = document.getElementById("status");
  const reveal = (root) => {
    if (navigator.clipboard) for (const b of root.querySelectorAll("button.copy[hidden]")) b.hidden = false;
  };
  function setupCopy() {
    reveal(document);
    document.addEventListener("click", async (e) => {
      const b = e.target.closest && e.target.closest("button.copy");
      const link = b && b.closest("article") && b.closest("article").querySelector("a.when");
      if (!link) return;
      try {
        await navigator.clipboard.writeText(link.href);
        b.classList.add("done");
        if (status) status.textContent = "Link copied";
        setTimeout(() => { b.classList.remove("done"); if (status) status.textContent = ""; }, 1600);
      } catch (err) { /* clipboard refused: the date is still a plain link */ }
    });
  }

  /* ---- Continuous stream: fetch the next page when "More news" nears the viewport. */
  function setupStream() {
    const list = document.querySelector(".stream");
    const more = document.querySelector("a[data-more]");
    if (!list || !more || !("IntersectionObserver" in window)) return;
    let busy = false;
    const near = () => more.isConnected && more.getBoundingClientRect().top < innerHeight + 900;
    async function load() {
      if (busy || !more.isConnected) return;
      busy = true;
      more.textContent = "Loading";
      try {
        const res = await fetch(more.href, { credentials: "same-origin" });
        if (!res.ok) throw new Error(String(res.status));
        const doc = new DOMParser().parseFromString(await res.text(), "text/html");
        for (const node of doc.querySelectorAll(".stream > article.card")) {
          // Links in the fetched page are relative to that page; make them absolute.
          for (const a of node.querySelectorAll("a[href]")) a.href = new URL(a.getAttribute("href"), res.url).href;
          node.classList.add("fresh");
          for (const img of node.querySelectorAll("img[srcset]")) {   // srcset paths are relative too
            img.srcset = img.getAttribute("srcset").split(",").map((part) => {
              const [u, w] = part.trim().split(/\s+/);
              return new URL(u, res.url).href + (w ? " " + w : "");
            }).join(", ");
            img.src = new URL(img.getAttribute("src"), res.url).href;
          }
          const card = document.importNode(node, true);
          reveal(card);
          list.appendChild(card);
        }
        const next = doc.querySelector("a[data-more]");
        if (next) {
          more.href = new URL(next.getAttribute("href"), res.url).href;
          more.textContent = "More news";
        } else {
          more.remove();
        }
      } catch (err) {
        more.textContent = "More news";   // the link still works as a normal page link
        io.disconnect();
      }
      busy = false;
      if (near()) load();
    }
    const io = new IntersectionObserver((es) => { if (es.some((e) => e.isIntersecting)) load(); },
                                        { rootMargin: "900px 0px" });
    io.observe(more);
  }

  /* ---- Search index and matching. */
  let rows = null, pending = null;
  const fold = (s) => s.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  function index() {
    if (rows) return Promise.resolve(rows);
    pending = pending || fetch(at("search.json"), { credentials: "same-origin" })
      .then((r) => r.json())
      .then((data) => (rows = data.map((r, i) => ({ ...r, rank: i, H: fold(r.h),
        B: fold([r.b, r.k, r.src, r.t].join(" ")) }))));
    return pending;
  }
  const terms = (q) => fold(q).split(/[^a-z0-9.+#_-]+/).map((t) => t.replace(/^[.\-]+|[.\-]+$/g, "")).filter(Boolean);
  const res = new Map();
  const startRe = (t) => {
    if (!res.has(t)) res.set(t, new RegExp("(^|[^a-z0-9])" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
    return res.get(t);
  };
  function find(all, q) {
    const ts = terms(q);
    if (!ts.length) return [];
    const out = [];
    for (const r of all) {
      let score = 0, ok = true;
      for (const t of ts) {
        const inH = startRe(t).test(r.H), inB = startRe(t).test(r.B);
        if (!inH && !inB) { ok = false; break; }
        score += (inH ? 3 : 0) + (inB ? 1 : 0);
      }
      if (ok) out.push({ r, score: score + (1 - r.rank / all.length) });
    }
    return out.sort((a, b) => b.score - a.score).map((x) => x.r);
  }
  /* Highlight word-start matches in `text`, mapping folded positions back to the original. */
  function marked(text, ts) {
    const map = [];
    let folded = "";
    for (let i = 0; i < text.length; i++) {
      const f = fold(text[i]);
      for (let k = 0; k < f.length; k++) map.push(i);
      folded += f;
    }
    const spans = [];
    for (const t of ts) {
      const re = new RegExp("(^|[^a-z0-9])(" + t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")", "g");
      let m;
      while ((m = re.exec(folded))) {
        const s = m.index + m[1].length, e = s + m[2].length;
        spans.push([map[s], (map[e - 1] ?? text.length - 1) + 1]);
        if (re.lastIndex === m.index) re.lastIndex++;
      }
    }
    spans.sort((a, b) => a[0] - b[0]);
    const frag = document.createDocumentFragment();
    let pos = 0;
    for (const [s, e] of spans) {
      if (s < pos) continue;
      frag.append(text.slice(pos, s), el("mark", null, text.slice(s, e)));
      pos = e;
    }
    frag.append(text.slice(pos));
    return frag;
  }

  /* ---- Search box: results under the box as you type; Enter opens the full results page. */
  function setupBox() {
    const form = document.querySelector("form.search");
    const input = form && form.querySelector("input");
    const box = form && form.querySelector(".search-results");
    if (!input || !box) return;
    let shown = [], sel = -1, timer = 0;
    const hide = () => { box.hidden = true; input.setAttribute("aria-expanded", "false"); sel = -1; };
    const select = (i) => {
      const opts = box.querySelectorAll("a[role=option]");
      opts.forEach((o, k) => o.setAttribute("aria-selected", String(k === i)));
      sel = i;
    };
    async function update() {
      const q = input.value.trim();
      if (!q) { hide(); return; }
      const all = await index();
      const hits = find(all, q);
      const ts = terms(q);
      box.replaceChildren();
      shown = hits.slice(0, 7);
      for (const r of shown) {
        const a = el("a");
        a.href = at(r.u);
        a.setAttribute("role", "option");
        a.append(el("span", "sr-kicker", `${r.k} · ${dayOf(r.d)}`));
        const h = el("span", "sr-head");
        h.append(marked(r.h, ts));
        a.append(h);
        box.append(a);
      }
      if (hits.length) {
        const all_ = el("a", "sr-all", hits.length > shown.length ? `See all ${hits.length} results` : "Open results page");
        all_.href = at("search/") + "?q=" + encodeURIComponent(q);
        box.append(all_);
      } else {
        box.append(el("p", "sr-none", `No items match "${q}". Try fewer or shorter words.`));
      }
      box.hidden = false;
      input.setAttribute("aria-expanded", "true");
      sel = -1;
    }
    input.addEventListener("input", () => { clearTimeout(timer); timer = setTimeout(update, 110); });
    input.addEventListener("focus", () => { index(); if (input.value.trim()) update(); });
    input.addEventListener("keydown", (e) => {
      const n = shown.length;
      if (e.key === "ArrowDown" && n) { e.preventDefault(); select((sel + 1) % n); }
      else if (e.key === "ArrowUp" && n) { e.preventDefault(); select((sel - 1 + n) % n); }
      else if (e.key === "Enter" && sel >= 0) { e.preventDefault(); location.href = at(shown[sel].u); }
      else if (e.key === "Escape") { hide(); input.blur(); }
    });
    document.addEventListener("click", (e) => { if (!form.contains(e.target)) hide(); });
    document.addEventListener("keydown", (e) => {
      const tag = (document.activeElement && document.activeElement.tagName) || "";
      if (e.key === "/" && !/^(INPUT|TEXTAREA|SELECT)$/.test(tag) && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        input.focus();
        input.select();
      }
    });
  }

  /* Mark word-start matches inside a card's headline and text, text node by text node. */
  function highlight(root, ts) {
    for (const part of root.querySelectorAll(".card-title, .card-text")) {
      const walker = document.createTreeWalker(part, NodeFilter.SHOW_TEXT);
      const nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      for (const t of nodes) {
        const frag = marked(t.nodeValue, ts);
        if (frag.querySelector("mark")) t.replaceWith(frag);
      }
    }
  }

  /* ---- Full results page (/search/?q=...): the matching cards, best first. */
  async function setupPage() {
    const out = document.getElementById("search-page");
    if (!out) return;
    const q = new URLSearchParams(location.search).get("q") || "";
    const input = document.querySelector("form.search input");
    if (input) input.value = q;
    const summary = document.getElementById("search-summary");
    if (!q.trim()) return;
    const [all, cards] = await Promise.all([
      index(), fetch(at("cards.json"), { credentials: "same-origin" }).then((r) => r.json())]);
    const hits = find(all, q).filter((r) => cards[r.i]);
    const ts = terms(q);
    summary.textContent = hits.length
      ? `${hits.length} item${hits.length === 1 ? "" : "s"} match "${q}", best matches first.`
      : `No items match "${q}". Try fewer or shorter words.`;
    out.replaceChildren();
    for (const r of hits) {
      const parsed = new DOMParser().parseFromString(cards[r.i], "text/html").body.firstElementChild;
      if (!parsed) continue;
      const card = document.importNode(parsed, true);
      highlight(card, ts);
      reveal(card);
      out.append(card);
    }
  }

  setupTheme();
  setupCopy();
  setupStream();
  setupBox();
  setupPage();
})();
