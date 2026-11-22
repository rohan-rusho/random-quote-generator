/* ==========================================================================
   RANDOM QUOTE GENERATOR — app logic
   New quote button, copy, category filter, X/Twitter share link.
   Quote bank lives in js/data.js as window.QUOTE_DATA.
   ========================================================================== */
(function () {
  "use strict";

  var quotes = window.QUOTE_DATA || [];
  var CATEGORY_LABELS = {
    all: "All quotes",
    motivation: "Motivation",
    wisdom: "Wisdom",
    success: "Success",
    life: "Life",
    humor: "Humor",
    love: "Love"
  };

  var quoteTextEl = document.getElementById("quote-text");
  var quoteAuthorEl = document.getElementById("quote-author");
  var quoteMetaEl = document.getElementById("quote-meta");
  var quoteOutput = document.getElementById("quote-output");
  var newQuoteBtn = document.getElementById("new-quote-btn");
  var copyBtn = document.getElementById("copy-btn");
  var shareBtn = document.getElementById("share-btn");
  var toastEl = document.getElementById("toast");
  var header = document.getElementById("site-header");
  var navToggle = document.getElementById("nav-toggle");
  var mobileMenu = document.getElementById("mobile-menu");

  var currentCategory = "all";
  var currentQuote = null;
  var lastIndex = -1;
  var toastTimer = null;

  /* ---------- Quote picking ---------- */

  function poolFor(category) {
    if (category === "all") return quotes;
    return quotes.filter(function (q) { return q.category === category; });
  }

  function pickQuote(category) {
    var pool = poolFor(category);
    if (pool.length === 0) return null;
    var idx;
    do {
      idx = Math.floor(Math.random() * pool.length);
    } while (pool.length > 1 && idx === lastIndex);
    lastIndex = idx;
    return pool[idx];
  }

  function formatQuote(q) {
    return '"' + q.text + '" — ' + q.author;
  }

  function shareUrl(q) {
    return "https://twitter.com/intent/tweet?text=" + encodeURIComponent(formatQuote(q));
  }

  function showQuote(animate) {
    var q = pickQuote(currentCategory);
    if (!q) {
      quoteTextEl.textContent = "No quotes in this category yet.";
      quoteAuthorEl.textContent = "";
      quoteMetaEl.innerHTML = "";
      shareBtn.href = "#";
      currentQuote = null;
      return;
    }
    currentQuote = q;
    quoteTextEl.textContent = q.text;
    quoteAuthorEl.textContent = q.author;
    quoteMetaEl.innerHTML = "";
    var tag = document.createElement("span");
    tag.className = "tag";
    tag.textContent = CATEGORY_LABELS[q.category] || q.category;
    quoteMetaEl.appendChild(tag);
    var countTag = document.createElement("span");
    countTag.className = "tag";
    countTag.textContent = quotes.length + " quotes in the bank";
    quoteMetaEl.appendChild(countTag);
    shareBtn.href = shareUrl(q);

    if (animate) {
      quoteOutput.classList.remove("pop");
      void quoteOutput.offsetWidth; // restart animation
      quoteOutput.classList.add("pop");
    }
  }

  /* ---------- Clipboard & toast ---------- */

  function copyText(text, message) {
    function done() { showToast(message); }
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
    } else {
      fallbackCopy(text);
      done();
    }
  }

  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (e) { /* clipboard unavailable */ }
    document.body.removeChild(ta);
  }

  function showToast(message) {
    toastEl.textContent = message;
    toastEl.classList.add("show");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove("show"); }, 2200);
  }

  /* ---------- Wire up ---------- */

  newQuoteBtn.addEventListener("click", function () { showQuote(true); });

  copyBtn.addEventListener("click", function () {
    if (!currentQuote) return;
    copyText(formatQuote(currentQuote), "Quote copied to clipboard");
  });

  document.getElementById("category-chips").addEventListener("click", function (e) {
    var chip = e.target.closest("[data-category]");
    if (!chip) return;
    currentCategory = chip.getAttribute("data-category");
    document.querySelectorAll(".category-chip").forEach(function (c) {
      var active = c === chip;
      c.classList.toggle("active", active);
      c.setAttribute("aria-pressed", active ? "true" : "false");
    });
    showQuote(true);
  });

  document.addEventListener("keydown", function (e) {
    var tag = (e.target && e.target.tagName) || "";
    if (e.code === "Space" && tag !== "INPUT" && tag !== "TEXTAREA" && tag !== "BUTTON" && tag !== "SELECT" && tag !== "A") {
      e.preventDefault();
      showQuote(true);
    }
  });

  window.addEventListener("scroll", function () {
    header.classList.toggle("scrolled", window.scrollY > 8);
  }, { passive: true });

  navToggle.addEventListener("click", function () {
    var open = mobileMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  mobileMenu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      mobileMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  document.getElementById("year").textContent = new Date().getFullYear();

  showQuote(false);
})();
