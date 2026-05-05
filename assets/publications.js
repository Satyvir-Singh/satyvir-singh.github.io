// Publications data — extracted from CV
// type: journal | conference | book | chapter | preprint
const PUBLICATIONS = [
  // ============ 2026 ============
  { year: 2026, type: "preprint", authors: "Song, H., <b>Singh, S.</b>, Cayci, S., Torrilhon, M.", title: "Extraction of moment closures for strongly non-equilibrium flows via machine learning", venue: "Physics of Fluids (under review)" },
  { year: 2026, type: "journal", authors: "Ankur, Jiwari, R., <b>Singh, S.</b>", title: "Finite element method for the numerical simulation of modified Poisson-Nernst-Planck/Navier-Stokes model", venue: "Applied Numerical Mathematics, 223:255–278" },
  { year: 2026, type: "journal", authors: "<b>Singh, S.</b>, Karchani, A.", title: "Amplitude impact on single-mode Richtmyer–Meshkov flow in a stratified heavy fluid layer", venue: "Physics of Fluids, 38:022105" },
  { year: 2026, type: "journal", authors: "Habscheid, J., <b>Singh, S.</b>, Theisen, L., Braun, S., Torrilhon, M.", title: "A finite element solver for a thermodynamically consistent electrolyte model", venue: "Computer Physics Communications, 319:109916" },
  { year: 2026, type: "journal", authors: "Msmali, A.H., <b>Singh, S.</b>, Ahmadini, A.A.H.", title: "Numerical Study of Amplitude-Driven Flow Dynamics in Shocked Heavy-Fluid Layers", venue: "Mathematics, 14:82" },
  { year: 2026, type: "conference", authors: "<b>Singh, S.</b>, Torrilhon, M.", title: "Application of Regularized 13-Moment Equations to Continuum–Rarefied Gas Flow Over Aerospike Blunt Body", venue: "Springer Aerospace Technology, 347–355 (RGD33, Göttingen, 2024)" },
  { year: 2026, type: "conference", authors: "Hong, S., <b>Singh, S.</b>, Torrilhon, M.", title: "Numerical Study of Grad-14 and 17 Moment Equations for Rarefied Polyatomic Gases", venue: "Springer Aerospace Technology, 379–387 (RGD33, Göttingen, 2024)" },
  { year: 2026, type: "book", authors: "<b>Singh, S.</b>, Awasthi, M. K.", title: "Complex Engineering Systems — Modeling and Optimization", venue: "De Gruyter (ISBN: 9783111723464)" },
  { year: 2026, type: "book", authors: "<b>Singh, S.</b>, Awasthi, M. K.", title: "Mathematical Solutions for Complex Engineering Systems", venue: "River Publications (ISBN: 9788743806691)" },

  // ============ 2025 ============
  { year: 2025, type: "journal", authors: "<b>Singh, S.</b>, Torrilhon, M.", title: "Shock-accelerated dynamics of heavy rectangular bubbles: Influence of aspect ratio on Richtmyer–Meshkov instability", venue: "Physics of Fluids, 37:122129" },
  { year: 2025, type: "journal", authors: "Alsaeed, S.S., <b>Singh, S.</b>", title: "Shock-driven flow physics of Richtmyer-Meshkov instability in tandem light cylindrical interfaces", venue: "Physics of Fluids, 37:122116" },
  { year: 2025, type: "journal", authors: "Alsaeed, S.S., <b>Singh, S.</b>, Alshammari, N.F.", title: "Shock Mach number effect on instability evolution at a light-heavy fluid layer: A numerical investigation", venue: "Axioms, 14:813" },
  { year: 2025, type: "journal", authors: "Alsaeed, S.S., <b>Singh, S.</b>", title: "A mixed local discontinuous Galerkin scheme for capturing shock-driven instabilities in compressible multicomponent flows", venue: "AIMS Mathematics, 10:26389–26417" },
  { year: 2025, type: "journal", authors: "Alsaeed, S.S., <b>Singh, S.</b>, Alrubea, N.A.", title: "Layer thickness impact on shock-accelerated interfacial instabilities in single-mode stratifications", venue: "Applied Sciences, 15:10687" },
  { year: 2025, type: "journal", authors: "Alsaeed, S.S., <b>Singh, S.</b>, Alrubea, N.A.", title: "Numerical Investigation of Atwood number effects on shock-driven single-mode stratified heavy fluid layers", venue: "Mathematics, 13:3032" },
  { year: 2025, type: "journal", authors: "<b>Singh, S.</b>, Msmali, A. H., Tamsir, M., Ahmadini, A.A.H.", title: "Mechanisms of coupling-induced instabilities in shock-accelerated tandem light square bubbles", venue: "Physics of Fluids, 37:082101" },
  { year: 2025, type: "journal", authors: "Msmali, A. H., Alsaeed, S.S., <b>Singh, S.</b>, Meetei, M. Z.", title: "Single-Mode Richtmyer–Meshkov Instability in Light Fluid Layer: Insights from Numerical Simulations", venue: "Axioms, 14:473" },
  { year: 2025, type: "journal", authors: "Song, H., <b>Singh, S.</b>, Torrilhon, M.", title: "Non-equilibrium flow simulations based on Grad-14 and Grad-17 moment equations for polyatomic gases", venue: "Physics of Fluids, 37:036140" },
  { year: 2025, type: "journal", authors: "Zhang, S. B., <b>Singh, S.</b>, Torrilhon, M., Zhang, H. H., Chen, Z.H., Zheng, C.", title: "Numerical investigation of Richtmyer–Meshkov instability in shock-driven light square bubble via magnetohydrodynamics", venue: "Computers and Fluids, 299:106698" },
  { year: 2025, type: "journal", authors: "Alsaeed, S. S., <b>Singh, S.</b>", title: "Insights into coupling effects of double light square bubbles on shocked hydrodynamic instability", venue: "Physica D: Nonlinear Phenomena, 476:134646" },
  { year: 2025, type: "journal", authors: "Ankush, Sengupta, B., <b>Singh, S.</b>, Lawrence Raj, P. R.", title: "Role of bulk viscosity on the flow physics past a rotating cylinder", venue: "Physics of Fluids, 37:015147" },
  { year: 2025, type: "chapter", authors: "<b>Singh, S.</b>", title: "Dynamics of shock-accelerated V-shaped gas interface", venue: "Flow Dynamics and Heat Transfer (De Gruyter; ISBN 9783111660592)" },

  // ============ 2024 ============
  { year: 2024, type: "journal", authors: "Alsaeed, S. S., <b>Singh, S.</b>", title: "Numerical study of thermal non-equilibrium effects on Richtmyer-Meshkov flow driven by a heavy forward-triangular bubble", venue: "Physical Review E, 100:065103" },
  { year: 2024, type: "journal", authors: "Alsaeed, S. S., <b>Singh, S.</b>", title: "Computational study on flow characteristics of shocked light backward-triangular bubbles in polyatomic gases", venue: "Axioms, 13:843" },
  { year: 2024, type: "journal", authors: "Sreekala, V. A., Sengupta, B., Kammara, K. K., <b>Singh, S.</b>", title: "On the evolution of magnetohydrodynamic flow instability in shock-accelerated light bubble", venue: "Physics of Fluids, 36:106140" },
  { year: 2024, type: "journal", authors: "<b>Singh, S.</b>, Alsaeed, S. S.", title: "High-fidelity simulations of Richtmyer-Meshkov flows triggered by a forward-pentagonal bubble with different Atwood numbers", venue: "European Journal of Mechanics/B Fluids, 108:151–165" },
  { year: 2024, type: "journal", authors: "Alsaeed, S. S., <b>Singh, S.</b>", title: "Computational Study of Shocked V-Shaped N2/SF6 Interface across Varying Mach Numbers", venue: "Axioms, 13:700" },
  { year: 2024, type: "journal", authors: "Bansal, S., Kumar, A., Saini, A., Negi, A. S., <b>Singh, S.</b>", title: "Exploring the Atwood number impact on shock-driven hydrodynamic instability at pentagonal interface using discontinuous Galerkin simulations", venue: "Physica D: Nonlinear Phenomena, 467:134276" },
  { year: 2024, type: "journal", authors: "Alsaeed, S. S., <b>Singh, S.</b>", title: "Modal Discontinuous Galerkin Simulations of Richtmyer–Meshkov Instability at Backward-Triangular Bubbles: Insights and Analysis", venue: "Mathematics, 12:2005" },
  { year: 2024, type: "journal", authors: "<b>Singh, S.</b>, Msmali, A. H., Nelson, M. I.", title: "Unfolding of shocked hydrodynamic instability at SF6 elliptical interface: Physical insights from numerical simulations", venue: "Computers & Fluids, 277:106304" },
  { year: 2024, type: "journal", authors: "Alsaeed, S. S., <b>Singh, S.</b>", title: "Numerical Study of Shock Wave Interaction with V-Shaped Heavy/Light Interface", venue: "Mathematics, 12:3131" },
  { year: 2024, type: "journal", authors: "<b>Singh, S.</b>, Msmali, A. H.", title: "Analyzing Richtmyer-Meshkov phenomena triggered by forward-triangular light gas bubbles: A numerical perspective", venue: "Mathematics, 13(6):365" },
  { year: 2024, type: "journal", authors: "<b>Singh, S.</b>, Song, H., Torrilhon, M.", title: "Modal discontinuous Galerkin simulations for Grad's 13-moment equations: Application to Riemann problem in continuum–rarefied flow regime", venue: "Journal of Computational and Theoretical Transport, 398–422" },
  { year: 2024, type: "journal", authors: "<b>Singh, S.</b>, Sengupta, B., Rana, S.", title: "Analysis of Thermal Mixing and Entropy Generation during Natural Convection Flows in Arbitrary Eccentric Annulus", venue: "Axioms, 13:233" },
  { year: 2024, type: "journal", authors: "<b>Singh, S.</b>, Sengupta, B., Awasthi, M. K., Kumar, V.", title: "Insight on the flow physics of shock-driven elliptical gas inhomogeneity with different Atwood numbers", venue: "International Journal of Mathematical, Engineering and Management Sciences, 9(1):1–22" },
  { year: 2024, type: "journal", authors: "<b>Singh, S.</b>, Jalleli, D. T.", title: "Investigation of coupling effect on the evolution of Richtmyer–Meshkov instability at double heavy square bubbles", venue: "SCIENCE CHINA Physics, Mechanics & Astronomy, 67(1):214711" },
  { year: 2024, type: "book", authors: "Awasthi, M. K., Kumar, A., Dutt, N., <b>Singh, S.</b>", title: "Computational Fluid Flow and Heat Transfer: Advances, Design, Control, and Applications", venue: "CRC Press (ISBN: 9781032603186)" },
  { year: 2024, type: "chapter", authors: "<b>Singh, S.</b>, Sengupta, B.", title: "Shock wave effects on hydrodynamic instability in elliptical bubbles", venue: "Computational Fluid Flow and Heat Transfer (CRC Press; ISBN 9781032603186)" },
  { year: 2024, type: "chapter", authors: "Rana, S., <b>Singh, S.</b>, Sengupta, B.", title: "Natural convection study in cylindrical annulus through OpenFOAM", venue: "Computational Fluid Flow and Heat Transfer (CRC Press; ISBN 9781032603186)" },
  { year: 2024, type: "conference", authors: "Chourushi, T., <b>Singh, S.</b>, Vishnu, A. S., Myong, R. S.", title: "Numerical simulations of rarefied gas flow over an aero-spiked hypersonic blunt body using the second-order Boltzmann-Curtiss constitutive model", venue: "AIP Conference Proceedings, 2996, 140001 (RGD32, Seoul, 2022)" },

  // ============ 2023 ============
  { year: 2023, type: "journal", authors: "<b>Singh, S.</b>, Msmali, A. H.", title: "On the spatiotemporal pattern formation in nonlinear coupled reaction-diffusion systems", venue: "Axioms, 12(11):1004" },
  { year: 2023, type: "journal", authors: "<b>Singh, S.</b>", title: "Investigation of aspect ratio effects on flow characteristics and vorticity generation in shock-induced rectangular bubble", venue: "European Journal of Mechanics/B Fluids, 101:131–148" },
  { year: 2023, type: "journal", authors: "<b>Singh, S.</b>, Battiato, M.", title: "Investigation of shock Mach number effects on the growth of convergent Richtmyer Meshkov instability in a heavy square bubble", venue: "Physica D: Nonlinear Phenomena, 453:133844" },
  { year: 2023, type: "journal", authors: "<b>Singh, S.</b>, Mittal, R. C., Thottoli, S. R., Tamsir, M.", title: "High-fidelity simulations for Turing pattern formation in multi-dimensional Gray-Scott reaction-diffusion system", venue: "Applied Mathematics and Computation, 452:128079" },
  { year: 2023, type: "journal", authors: "<b>Singh, S.</b>, Torrilhon, M.", title: "On the shock-driven hydrodynamic instability in square and rectangular light gas bubbles: a comparative study from numerical simulations", venue: "Physics of Fluids, 35:012117" },
  { year: 2023, type: "journal", authors: "Shukla, A. K., Awasthi, M. K., <b>Singh, S.</b>", title: "Impact of heat and mass transport on Rayleigh-Taylor instability of Walter's B viscoelastic fluid layer", venue: "Microgravity Science and Technology, 35(3):1–11" },
  { year: 2023, type: "chapter", authors: "<b>Singh, S.</b>", title: "Numerical Investigation of Wave Pattern Evolution in Gray-Scott Model Using Discontinuous Galerkin Finite Element Method", venue: "Advances in Mathematical and Computational Modeling of Engineering Systems (CRC Press; ISBN 9781003367420)" },
  { year: 2023, type: "chapter", authors: "<b>Singh, S.</b>, Awasthi, M. K.", title: "Mach number impact on Richtmyer-Meshkov instability in shock-refrigerant-22 bubble interaction", venue: "Advances in Mathematical and Computational Modeling of Engineering Systems (CRC Press; ISBN 9781003367420)" },

  // ============ 2022 ============
  { year: 2022, type: "journal", authors: "<b>Singh, S.</b>, Battiato, M.", title: "Numerical simulations of Richtmyer-Meshkov instability of SF6 square bubble in diatomic and polyatomic gases", venue: "Computers & Fluids, 242:105502" },
  { year: 2022, type: "journal", authors: "<b>Singh, S.</b>, Karchani, A., Chourushi, T., Myong, R. S.", title: "A three-dimensional modal discontinuous Galerkin method for second-order Boltzmann-Curtiss constitutive models of rarefied and microscale gas flows", venue: "Journal of Computational Physics, 457:111052" },
  { year: 2022, type: "journal", authors: "Chourushi, T., Rahimi, A., <b>Singh, S.</b>, Ejethadi, O., Mankodi, T. K., Myong, R. S.", title: "Thermal and flow characteristics of nonequilibrium monatomic, diatomic, and polyatomic gases in a cylindrical Couette flow based on the second-order non-Navier-Fourier constitutive model", venue: "International Journal of Heat and Mass Transfer, 187:122580" },
  { year: 2022, type: "journal", authors: "Chourushi, T., <b>Singh, S.</b>, Vishnu, A. S., Myong, R. S.", title: "Computational study of hypersonic rarefied gas flow over re-entry vehicles using the second-order Boltzmann-Curtiss constitutive model", venue: "International Journal of Computational Fluid Dynamics, 35(8):566–593" },
  { year: 2022, type: "conference", authors: "<b>Singh, S.</b>, Battiato, M.", title: "Explicit modal discontinuous Galerkin approximations for three-dimensional electronic Boltzmann transport equation", venue: "LNCS&E 137, ICOSAHOM 2020+1, Vienna" },
  { year: 2022, type: "conference", authors: "<b>Singh, S.</b>", title: "A mixed-type modal discontinuous Galerkin approach for solving nonlinear reaction-diffusion equations", venue: "AIP Conference Proceedings, 2481, 040037 (ICAES, Dehradun, 2021)" },
  { year: 2022, type: "chapter", authors: "<b>Singh, S.</b>", title: "An Explicit Modal Discontinuous Galerkin Approach for Compressible Multicomponent Flows: Application to Shock-Bubble Interaction", venue: "Computing and Simulation for Engineers (CRC Press; ISBN 9781003222255)" },
  { year: 2022, type: "chapter", authors: "<b>Singh, S.</b>", title: "Computational Modeling of Nonlinear Reaction-Diffusion Fisher-KPP Equation with Mixed Modal Discontinuous Galerkin Scheme", venue: "Mathematical Modeling for Intelligent Systems (CRC Press; ISBN 9781003291916)" },

  // ============ 2021 ============
  { year: 2021, type: "journal", authors: "<b>Singh, S.</b>", title: "Contribution of Mach number to the evolution of Richtmyer-Meshkov instability induced by a shock-accelerated square light bubble", venue: "Physical Review Fluids, 6:104001" },
  { year: 2021, type: "journal", authors: "<b>Singh, S.</b>", title: "Mixed-type discontinuous Galerkin approach for solving the generalized FitzHugh-Nagumo reaction-diffusion model", venue: "International Journal of Applied and Computational Mathematics, 7:207" },
  { year: 2021, type: "journal", authors: "<b>Singh, S.</b>", title: "Numerical investigation of thermal non-equilibrium effects of diatomic and polyatomic gases on the shock-accelerated light square bubble using a mixed-type modal discontinuous Galerkin method", venue: "International Journal of Heat and Mass Transfer, 179:121708" },
  { year: 2021, type: "journal", authors: "<b>Singh, S.</b>, Battiato, M., Myong, R. S.", title: "Impact of bulk viscosity on flow morphology of shock-accelerated cylindrical light bubble in diatomic and polyatomic gases", venue: "Physics of Fluids, 33:066103" },
  { year: 2021, type: "journal", authors: "<b>Singh, S.</b>, Battiato, M.", title: "An explicit modal discontinuous Galerkin method for Boltzmann transport equation under electronic nonequilibrium conditions", venue: "Computers & Fluids, 224:104972" },
  { year: 2021, type: "journal", authors: "<b>Singh, S.</b>, Battiato, M.", title: "Behavior of a shock-accelerated heavy cylindrical bubble under non-equilibrium conditions of diatomic and polyatomic gases", venue: "Physical Review Fluids, 6:044001" },

  // ============ 2020 ============
  { year: 2020, type: "journal", authors: "<b>Singh, S.</b>", title: "Role of Atwood number on flow morphology of a planar shock-accelerated square bubble: A numerical study", venue: "Physics of Fluids, 32:126112" },
  { year: 2020, type: "journal", authors: "<b>Singh, S.</b>, Battiato, M.", title: "Strongly out-of-equilibrium simulations for electron Boltzmann transport equation using explicit modal discontinuous Galerkin method", venue: "International Journal of Applied and Computational Mathematics, 6:133" },
  { year: 2020, type: "journal", authors: "<b>Singh, S.</b>, Battiato, M.", title: "Effect of strong electric fields on material responses: The Bloch oscillation resonance in high field conductivities", venue: "Materials, 13(5):1070" },
  { year: 2020, type: "journal", authors: "<b>Singh, S.</b>, Karchani, A., Sharma, K., Myong, R. S.", title: "Topological representation of the second-order constitutive model based on Boltzmann-Curtiss kinetic equation for diatomic and polyatomic gases", venue: "Physics of Fluids, 32:026104" },
  { year: 2020, type: "journal", authors: "Chourushi, T., Rahimi, A., <b>Singh, S.</b>, Myong, R. S.", title: "Computational simulation of near continuum external gas flows using the Navier-Stokes-Fourier equations with slip/jump conditions based on a modal discontinuous Galerkin method", venue: "Advances in Aerodynamics, 2(8):1–37" },

  // ============ 2018 ============
  { year: 2018, type: "journal", authors: "<b>Singh, S.</b>, Karchani, A., Myong, R. S.", title: "Nonequilibrium effects of diatomic and polyatomic gases on the shock-vortex interaction based on the second-order constitutive model of Boltzmann-Curtiss kinetic equation", venue: "Physics of Fluids, 30:016109" },
  { year: 2018, type: "journal", authors: "Chourushi, T., <b>Singh, S.</b>, Myong, R. S.", title: "Computational Study of Rarefied flow inside a lid-driven cavity using a mixed modal discontinuous Galerkin Method", venue: "Journal of Computational Fluids Engineering, 23(3):62–71" },

  // ============ 2017 ============
  { year: 2017, type: "journal", authors: "Raj, L. P., <b>Singh, S.</b>, Karchani, A., Myong, R. S.", title: "A super-parallel mixed Galerkin method for the second-order Boltzmann based constitutive models of rarefied and microscale gases", venue: "Computers & Fluids, 57:146–163" },
  { year: 2017, type: "journal", authors: "<b>Singh, S.</b>, Myong, R. S.", title: "A computational study of bulk viscosity effects on shock vortex interaction using discontinuous Galerkin method", venue: "Journal of Computational Fluids Engineering, 22(2):86–95" },

  // ============ 2019 ============
  { year: 2019, type: "conference", authors: "<b>Singh, S.</b>, Myong, R. S.", title: "Three-dimensional discontinuous Galerkin method for the second-order Boltzmann-Curtiss constitutive model for continuum-rarefied gas flows", venue: "AIP Conference Proceedings, 2132, 060013 (RGD31, Glasgow, 2018)" },

  // ============ 2014 ============
  { year: 2014, type: "conference", authors: "Xiao, H., Myong, R. S., <b>Singh, S.</b>", title: "A new near-equilibrium breakdown parameter based on the Rayleigh-Onsager dissipation function", venue: "AIP Conference Proceedings, 1628, 527 (RGD29, Xian, 2014)" },
];

// Type label map
const TYPE_LABELS = {
  journal: { label: "Journal", cls: "badge-journal" },
  conference: { label: "Conference", cls: "badge-conference" },
  book: { label: "Book", cls: "badge-book" },
  chapter: { label: "Chapter", cls: "badge-chapter" },
  preprint: { label: "Preprint", cls: "badge-preprint" },
};

function renderPublications(filter = "all", search = "") {
  const container = document.getElementById("pub-container");
  if (!container) return;

  const term = search.trim().toLowerCase();
  const filtered = PUBLICATIONS.filter((p) => {
    const matchType = filter === "all" || p.type === filter;
    if (!matchType) return false;
    if (!term) return true;
    const hay = (p.title + " " + p.authors + " " + p.venue + " " + p.year).toLowerCase();
    return hay.includes(term);
  });

  if (filtered.length === 0) {
    container.innerHTML = '<p style="color:var(--muted);padding:20px 0;">No publications match.</p>';
    return;
  }

  // Group by year, descending
  const byYear = {};
  filtered.forEach((p) => {
    if (!byYear[p.year]) byYear[p.year] = [];
    byYear[p.year].push(p);
  });
  const years = Object.keys(byYear).sort((a, b) => b - a);

  let counter = filtered.length;
  let html = "";
  years.forEach((y) => {
    html += `<div class="pub-year-group"><h3 class="pub-year-label">${y}</h3><ol class="pub-list">`;
    byYear[y].forEach((p) => {
      const t = TYPE_LABELS[p.type];
      html += `
        <li class="pub-item" data-type="${p.type}">
          <div class="pub-num">[${counter--}]</div>
          <div>
            <span class="pub-title">${p.title}<span class="pub-badge ${t.cls}">${t.label}</span></span>
            <div class="pub-authors">${p.authors}</div>
            <div class="pub-venue">${p.venue}</div>
          </div>
        </li>`;
    });
    html += `</ol></div>`;
  });
  container.innerHTML = html;
}

function setupPublications() {
  if (!document.getElementById("pub-container")) return;
  renderPublications();

  const buttons = document.querySelectorAll(".pub-filters button");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const search = document.getElementById("pub-search")?.value || "";
      renderPublications(btn.dataset.filter, search);
    });
  });

  const search = document.getElementById("pub-search");
  if (search) {
    search.addEventListener("input", (e) => {
      const activeBtn = document.querySelector(".pub-filters button.active");
      const filter = activeBtn ? activeBtn.dataset.filter : "all";
      renderPublications(filter, e.target.value);
    });
  }
}

document.addEventListener("DOMContentLoaded", setupPublications);
