/* Lean Weekly: apply the reader's saved day or night choice before the page
   draws, so it never flashes the other theme. Loaded in <head>, not deferred.
   Without a saved choice the site is in day mode. */
try {
  var t = localStorage.getItem("lw-theme");
  if (t === "dark" || t === "light") document.documentElement.dataset.theme = t;
} catch (e) { /* storage blocked: day mode */ }
