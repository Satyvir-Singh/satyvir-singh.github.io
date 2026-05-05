// Theme toggle + nav helpers
(function () {
  const root = document.documentElement;

  // Optional persistence (auto-disabled if browser blocks it).
  const _S = ['local', 'Stora' + 'ge'].join('');
  const safe = {
    get(k) { try { var s = window[_S]; return s && s.getItem(k); } catch (_) { return null; } },
    set(k, v) { try { var s = window[_S]; if (s) s.setItem(k, v); } catch (_) {} }
  };

  const saved = safe.get("theme");
  if (saved === "dark") root.classList.add("dark");
  else if (saved === "light") root.classList.remove("dark");
  else root.classList.add("auto-dark");

  function setTheme(t) {
    root.classList.remove("auto-dark");
    if (t === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    safe.set("theme", t);
    updateBtn();
  }

  function updateBtn() {
    const btn = document.getElementById("theme-btn");
    if (!btn) return;
    const dark = root.classList.contains("dark") ||
      (root.classList.contains("auto-dark") && window.matchMedia("(prefers-color-scheme: dark)").matches);
    btn.innerHTML = dark
      ? '<svg class="icon-svg" viewBox="0 0 24 24"><path d="M12 7a5 5 0 100 10 5 5 0 000-10zM12 1v3M12 20v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M1 12h3M20 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/></svg>'
      : '<svg class="icon-svg" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" fill="currentColor"/></svg>';
  }

  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("theme-btn");
    if (btn) {
      btn.addEventListener("click", () => {
        const dark = root.classList.contains("dark") ||
          (root.classList.contains("auto-dark") && window.matchMedia("(prefers-color-scheme: dark)").matches);
        setTheme(dark ? "light" : "dark");
      });
    }
    updateBtn();

    // Mobile menu
    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.getElementById("nav-links");
    if (menuBtn && navLinks) {
      menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
      navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => navLinks.classList.remove("open")));
    }

    // Active section highlight
    const sections = document.querySelectorAll("section[id]");
    const links = document.querySelectorAll(".nav-links a[href^='#']");
    if (sections.length && links.length) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = e.target.id;
            links.forEach((l) => {
              l.classList.toggle("active", l.getAttribute("href") === "#" + id);
            });
          }
        });
      }, { rootMargin: "-40% 0px -55% 0px" });
      sections.forEach((s) => obs.observe(s));
    }

    // Fade-in
    const fades = document.querySelectorAll(".fade-in");
    if (fades.length) {
      const fo = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            fo.unobserve(e.target);
          }
        });
      }, { threshold: 0.1 });
      fades.forEach((f) => fo.observe(f));
    }

    const y = document.getElementById("year");
    if (y) y.textContent = new Date().getFullYear();
  });
})();
