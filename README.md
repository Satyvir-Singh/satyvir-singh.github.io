# Dr. Satyvir Singh — Academic Website

Personal academic homepage for **Dr. Satyvir Singh**, Scientific Staff at the
Institute for Applied and Computational Mathematics, RWTH Aachen University.

🌐 Live site: https://satyvir-singh.github.io

## Sections
- About & research interests
- Research themes (CFD, kinetic theory, ML for PDEs)
- Recent news
- Experience & education timeline
- Full publications list (filterable & searchable) — see `publications.html`
- Teaching & student supervision
- Editorial roles & service
- Contact

## Tech
Pure HTML / CSS / vanilla JS — no build step. Hosted via GitHub Pages from the
`main` (or `master`) branch root. The publications list is rendered from the
JavaScript data file `assets/publications.js` so adding a new paper is a
one-line change.

## Local preview
```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Updating publications
Edit `assets/publications.js` — each entry has the form:
```js
{ year: 2026, type: "journal", authors: "...", title: "...", venue: "..." }
```
Allowed `type` values: `journal`, `conference`, `book`, `chapter`, `preprint`.

## License
Content © Dr. Satyvir Singh. Site code is free to reuse with attribution.
