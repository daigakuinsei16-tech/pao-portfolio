# Paola Limin Portfolio — Complete Codebase

This is the complete source export of the latest published portfolio, including the About portrait and all approved changes through 18 October 2026.

## Run locally

No dependency installation or build step is required. The website uses plain HTML, CSS and JavaScript.

1. Extract this ZIP.
2. Open a terminal in the extracted `paola-limin-portfolio` folder.
3. Start a local static server:

```bash
python3 -m http.server 8000 --directory dist
```

On Windows, use `py -m http.server 8000 --directory dist` if needed.

4. Open http://localhost:8000 in your browser.

You can also use an editor's static-server extension with `dist` as the web root.

## Files

- `dist/index.html` — page layout, About section, credentials, brand logos and contact information.
- `dist/style.css` — all styling, responsive layouts, portrait framing, custom fonts and reduced-motion support.
- `dist/app.js` — creative project data, tabs, filters, project dialogs, author archive links, email copying and testimonial carousel.
- `dist/assets/` — all five original book/anthology images, your portrait, original CV PDF, four font files, favicon and ten brand logos.
- `logo-sources.json` — provenance of the brand logo files.
- `licenses/` — font copyright and licence information.
- `DEVELOPMENT_NOTES.md` — source project notes.
- `EXPORT_MANIFEST.json` — file sizes and SHA-256 checksums, with the source commit used for the export.
- `.openai/hosting.json` — existing Sites hosting metadata for the original project.

The assets are included locally. The page does not rely on a CSS framework, third-party JavaScript library, remote font service or backend. Dreame, the article archive, the EF SET certificate and email actions open external destinations.

## Editing

- Change page copy, credentials and company logos in `dist/index.html`.
- Edit creative project details and testimonials in `dist/app.js`.
- Change typography, colours, image framing and responsive rules in `dist/style.css`.
- Put new image files in `dist/assets/` and reference them with relative paths.
- Replace the two text credits for Nody Media and Creative Network Advertising once their official logos are available.

The anonymous memoir is represented with a CSS cover treatment; its actual title, author identity and manuscript are not included. ARIES and The Art of Braveity are displayed using SVG viewports of the supplied original images.

## Deploy elsewhere

Upload the contents of `dist/` to any static website host. The public web root must contain `index.html`, `style.css`, `app.js` and the `assets/` directory together.

The `.openai/hosting.json` file identifies the existing Sites project. Other static hosts only need the contents of `dist/`. Git credentials, authentication tokens, runtime state and Git history are not part of this export.

## Resource credits

Book artwork, photographs, CV content and brand marks retain their respective ownership. The existing font package copyright and licence notices are included under `licenses/`; font display names used by the site are documented there.
# pao-portfolio
