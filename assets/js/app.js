/* app.js — progressive enhancement for the unfoundbox shell.
 *
 *   (1) Scroll-reveal: elements tagged [data-reveal] gain `.is-visible` when
 *       they enter the viewport. The page-layer CSS gates the hidden state
 *       behind `html.js [data-reveal]`, so with NO JS everything is visible.
 *   (2) Header: toggles `.is-scrolled` on the sticky header past ~24px so it
 *       goes from transparent (over hero) to solid (bg + bottom border).
 *   (3) Mobile nav: a button toggles the collapsed menu, keeping
 *       aria-expanded in sync; closes on link click / Escape / outside click.
 *   (4) Reduced motion: reveal everything immediately, skip the observer.
 *
 * No dependencies. The `js` class is set by an inline head script before this
 * file runs (deferred), so the hidden initial state never flashes un-gated.
 */
(function () {
  "use strict";

  var prefersReduced =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- (1) Scroll reveal --------------------------------------------- */
  function revealAll(nodes) {
    for (var i = 0; i < nodes.length; i++) nodes[i].classList.add("is-visible");
  }

  function initReveal() {
    var nodes = document.querySelectorAll("[data-reveal]");
    if (!nodes.length) return;

    if (prefersReduced || !("IntersectionObserver" in window)) {
      revealAll(nodes);
      return;
    }

    var observer = new IntersectionObserver(
      function (entries, obs) {
        for (var i = 0; i < entries.length; i++) {
          if (entries[i].isIntersecting) {
            entries[i].target.classList.add("is-visible");
            obs.unobserve(entries[i].target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );

    for (var i = 0; i < nodes.length; i++) observer.observe(nodes[i]);
  }

  /* ---- (2) Header solid-on-scroll ------------------------------------ */
  function initHeader() {
    var header = document.querySelector("[data-header]");
    if (!header) return;
    var ticking = false;

    function update() {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---- (3) Mobile nav toggle ----------------------------------------- */
  function initNav() {
    var toggle = document.querySelector("[data-nav-toggle]");
    var menu = document.querySelector("[data-nav-menu]");
    if (!toggle || !menu) return;

    function setOpen(open) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      menu.classList.toggle("is-open", open);
    }

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    // Close when a menu link is followed.
    menu.addEventListener("click", function (e) {
      if (e.target.closest("a")) setOpen(false);
    });

    // Close on Escape.
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setOpen(false);
    });

    // Close on outside click.
    document.addEventListener("click", function (e) {
      if (
        toggle.getAttribute("aria-expanded") === "true" &&
        !menu.contains(e.target) &&
        !toggle.contains(e.target)
      ) {
        setOpen(false);
      }
    });
  }

  function init() {
    initReveal();
    initHeader();
    initNav();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
