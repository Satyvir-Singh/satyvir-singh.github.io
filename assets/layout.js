// Shared site chrome — injects nav and footer so every page stays in sync.
// Pages opt-in by adding <body data-page="about"> (or research/news/...).
(function () {
  const NAV = [
    { id: "home", label: "Home", href: "index.html" },
    { id: "about", label: "About", href: "about.html" },
    { id: "research", label: "Research", href: "research.html" },
    { id: "news", label: "News", href: "news.html" },
    { id: "experience", label: "Experience", href: "experience.html" },
    { id: "publications", label: "Publications", href: "publications.html" },
    { id: "teaching", label: "Teaching", href: "teaching.html" },
    { id: "skills", label: "Skills", href: "skills.html" },
    { id: "contact", label: "Contact", href: "contact.html" },
  ];

  function buildNav(activeId) {
    const links = NAV.map(
      (n) =>
        `<a href="${n.href}"${n.id === activeId ? ' class="active"' : ""}>${n.label}</a>`
    ).join("");
    return `
      <nav class="nav">
        <div class="nav-inner">
          <a href="index.html" class="brand">Satyvir Singh<span class="dot">.</span></a>
          <div class="nav-links" id="nav-links">
            ${links}
            <button class="theme-btn" id="theme-btn" aria-label="Toggle theme"></button>
          </div>
          <button class="menu-btn" id="menu-btn" aria-label="Menu">☰</button>
        </div>
      </nav>`;
  }

  function buildFooter() {
    const y = new Date().getFullYear();
    return `
      <footer>
        <div class="container">
          © <span>${y}</span> Dr. Satyvir Singh ·
          <a href="https://github.com/Satyvir-Singh/satyvir-singh.github.io">Source</a> ·
          <a href="https://scholar.google.com/citations?user=sQT89LYAAAAJ&hl=en" target="_blank" rel="noopener">Scholar</a> ·
          <a href="https://orcid.org/0000-0001-6669-5296" target="_blank" rel="noopener">ORCID</a>
        </div>
      </footer>`;
  }

  function mount() {
    const activeId = document.body.dataset.page || "";
    const navMount = document.getElementById("site-nav");
    const footerMount = document.getElementById("site-footer");
    if (navMount) navMount.outerHTML = buildNav(activeId);
    if (footerMount) footerMount.outerHTML = buildFooter();
  }

  // Run immediately if body already exists (script loaded at end of body),
  // otherwise wait for DOM. Either way, must run BEFORE main.js wires events.
  if (document.body) mount();
  else document.addEventListener("DOMContentLoaded", mount);
})();
