# Andrea Rovescalli — Portfolio

Source code for Andrea Rovescalli’s personal portfolio: software engineering, creative technologies, interactive installations, real-time 3D, XR and games.

**Website:** [riibiax.github.io/earove](https://riibiax.github.io/earove/)

The site is a static React application with a project grid, an animated Three.js background, individual project pages, an About section and contact links. Content is maintained in the source files; there is no CMS or backend in this repository.

## Getting started

Requirements:

- Node.js **25.9.0**, as pinned in [.nvmrc](.nvmrc). [package.json](package.json) declares Node.js `>=25.9.0`.
- npm, included with Node.js.
- Git LFS for the images, PDFs and other binary assets tracked by [.gitattributes](.gitattributes).

From the repository root:

```sh
# If using nvm, select the version pinned in .nvmrc.
nvm use 25.9.0

# Initialise Git LFS for this clone and retrieve its assets.
git lfs install --local
git lfs pull

# Install the versions recorded in package-lock.json.
npm ci
npm start
```

Open [localhost:8080](http://localhost:8080/). The development server supports hot reloading. Stop it with `Ctrl+C`.

If images or PDFs are missing after cloning, check that `git lfs pull` completed successfully. An LFS pointer file contains a reference to the asset, rather than the image or document itself.

## Commands

| Command | Purpose |
| --- | --- |
| `npm start` | Start the Webpack development server on port 8080. |
| `npm run build` | Generate the production site in `dist/`. |
| `npm run deploy` | Build the site through the `predeploy` script, then publish `dist/` using `gh-pages`. |

There are currently no test or lint scripts in `package.json`. Use the production build and the manual checks below when reviewing changes.

## Technology

- React 19 and React DOM
- React Router 7 with `HashRouter`
- Bootstrap 5 and React Bootstrap 2
- Three.js for the homepage particle scene
- Webpack 5, Babel and MiniCssExtractPlugin for bundling
- jQuery for the legacy smooth-scroll helper
- GitHub Pages and the `gh-pages` package for publishing

Exact dependency versions are recorded in [package-lock.json](package-lock.json).

## Project structure

```text
earove/
├── docs/                       CVs, research PDF and image-audit documents
├── img/                        Project images and shared media
├── src/
│   ├── css/                    Shared and component styles
│   ├── img/                    Source-level image assets
│   └── js/
│       ├── App.js              React entry point and route table
│       ├── projectData.js      Ordered project list for the homepage and navigation
│       ├── components/         Homepage, navigation, About, Contact and project pages
│       │   ├── project/        Reusable project-page components
│       │   └── threejs/        Homepage particle scene
│       └── utils/scroll.js     Legacy anchor-scroll helper
├── playframe.html              Standalone launcher for a legacy interactive experience
├── sitemap.xml                 Static sitemap copied into the build
├── package.json                Scripts and dependencies
├── package-lock.json           Locked dependency tree
├── webpack.config.js           Development and production configuration
└── dist/                       Generated build output; ignored by Git
```

### Routing and navigation

[App.js](src/js/App.js) mounts the application, initialises scroll handling and lazy-loads the homepage and project pages. Routes use the URL hash, for example:

```text
https://riibiax.github.io/earove/#/kf
```

Both `/` and `/index.html` are registered as homepage routes. The hash router lets project pages be opened directly on static hosting without server-side route rewrites.

[Nav.js](src/js/components/Nav.js) handles desktop and mobile navigation, homepage section links, the project dropdown and navigation between projects. The homepage grid and dropdown share their ordered project list from [projectData.js](src/js/projectData.js). The route table is maintained separately in `App.js`.

### Page components

[HomePage.js](src/js/components/HomePage.js) assembles the navigation, particle scene, project grid, About and Contact sections.

Reusable project components live in [src/js/components/project](src/js/components/project):

| Component | Purpose |
| --- | --- |
| `ProjectLayout` | Shared frame with navigation, page content and contact links. |
| `ProjectIntro` | Title and description, using flowing text or two explicit columns. |
| `ProjectCarousel` | Image carousel with custom arrows, indicators and a slide counter. |
| `ProjectVideo` | Responsive iframe video embed. |
| `AwardGrid` | Rows of project award images. |

[KfPage.js](src/js/components/KfPage.js) is an example using the shared layout, introduction and carousel. Older pages, such as [AefPage.js](src/js/components/AefPage.js), still assemble their layout directly. Both patterns currently coexist.

### Styling

Custom CSS lives in [src/css](src/css), alongside the Bootstrap styles imported by page components.

| File | Main responsibility |
| --- | --- |
| `main.css` | Shared layout and project-page styles. |
| `menu.css` | Navigation, mobile menu and project dropdown. |
| `homepage.css` | Homepage project grid. |
| `about.css` / `contact.css` | About and Contact sections. |
| `ParticlesScene.css` | Homepage background canvas. |

## Updating content

### Biography, education, CVs and contact links

- Edit the biography, education, research link and CV links in [About.js](src/js/components/About.js).
- Edit email and social links in [Contact.js](src/js/components/Contact.js).
- Place downloadable PDFs in `docs/` and update their links in `About.js` if filenames change. The current CV filenames are `rovescalli_cv.pdf`, `rovescalli_cv_fr.pdf` and `rovescalli_cv_ita.pdf`.

CVs generated elsewhere in the parent workspace are not automatically added to this website. Copy the approved PDFs into `docs/` before building.

### Adding or editing a project

1. Add images under `img/<project>/` and create or edit its page in `src/js/components/`.
2. Reuse the components in `components/project/` where practical.
3. Add or update the entry in `src/js/projectData.js`. Entries contain `path`, `title`, `thumbnail` and optional `showTitleOnHome`; their order controls the homepage and dropdown order. `showTitleOnHome: false` hides only the title overlay on the homepage.
4. Register the page’s lazy import and route in `src/js/App.js`. Adding metadata alone does not create a route.
5. Check the thumbnail, project text, carousel, video and navigation in the browser.

Keep public asset paths relative, such as `img/kf/kf.png` or `docs/rovescalli_cv.pdf`. Leading-slash paths such as `/img/...` point to the domain root and bypass the production `/earove/` prefix. Imported images and PDFs can also be handled by Webpack’s asset rules.

### Site metadata and static files

The HTML document is generated inside [webpack.config.js](webpack.config.js), including the page title, description, canonical URL, favicon and social-preview metadata. There is no separate source `index.html` template.

The build copies the entire `img/` and `docs/` directories, plus the favicon, `playframe.html` and `sitemap.xml`. Files placed in those copied directories become part of the published site, including the image-audit documents currently in `docs/`.

The [image optimisation audit](docs/image-optimization-audit.md) and its CSV reports provide an existing inventory for future image work. They are reference documents, not an automated optimisation pipeline.

## Build and publishing

```sh
npm run build
```

Webpack cleans and recreates `dist/`. Production builds use `/earove/` as the asset base path, hashed JavaScript and CSS filenames, deterministic module/chunk IDs and no source maps. Development builds use `/` and enable source maps.

To publish, from a checkout with push access to the intended GitHub repository:

```sh
npm run deploy
```

The `predeploy` hook runs the production build automatically. The `gh-pages -d dist` command then publishes the generated files to the `gh-pages` branch. This is a publishing action, rather than a local preview command.

The repository contains no GitHub Actions workflow for deployment. Confirm the repository’s **Settings → Pages** configuration uses the intended publishing source; that remote setting is not defined by the local build files.

If the hosting path changes, update `homepage` in `package.json`, the production `publicPath` and site URLs in `webpack.config.js`, and the URLs in `sitemap.xml` together.

## Checks before publishing

- Run `npm run build` and review any errors or warnings.
- Check the homepage grid, particle background and section links on desktop and mobile.
- Open a project directly through its hash URL, refresh it and check project switching.
- Check carousel arrows, indicators, videos and external links.
- Open every CV download and the research PDF.
- Check browser console errors and failed asset requests, including paths under `/earove/`.
- Check standalone legacy pages such as `playframe.html` separately if they are being used.
