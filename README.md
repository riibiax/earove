# Andrea Rovescalli — Portfolio

Source code for Andrea Rovescalli’s personal portfolio: software engineering, creative technologies, interactive installations, real-time 3D, XR and games.

**Website:** [riibiax.github.io/earove](https://riibiax.github.io/earove/)

The site is a static React application with an editorial homepage, selected project gallery, expandable project archive, individual project pages, an About section and contact links. Content is maintained in the source files; there is no CMS or backend in this repository.

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
| `npm run check:release` | Check the built site for missing assets, filename casing, Pages paths, size and LFS pointers. |
| `npm run check:lfs` | Verify staged source asset pointers, matching working files, local LFS objects and the pre-push hook. |
| `npm run deploy` | Build the site through the `predeploy` script, then publish `dist/` using `gh-pages`. |

There are currently no unit-test or lint scripts. Use the release checks, production build and browser checks below when reviewing changes.

## Technology

- React 19 and React DOM
- React Router 7 with clean page URLs and build-time rendered HTML
- Bootstrap 5 for shared browser resets and base styles
- Three.js for interactive work and a subtle particle field confined to the homepage hero; motion pauses off screen and respects reduced-motion preferences
- Webpack 5, Babel and MiniCssExtractPlugin for bundling
- GitHub Pages and the `gh-pages` package for publishing

Exact dependency versions are recorded in [package-lock.json](package-lock.json).

## Project structure

```text
earove/
├── config/                     Git attribute override for the published branch
├── docs/                       Current skills CVs and research PDF
├── img/                        Project images and shared media
├── src/
│   ├── css/                    Shared and component styles
│   ├── fonts/                  Bundled DM Sans / DM Mono fonts and licenses
│   └── js/
│       ├── App.js              Browser entry point
│       ├── pageRoutes.js       Homepage and case-study routes
│       ├── projectData.js      Ordered project list for the homepage and navigation
│       ├── content/            Project case-study text, credits and media lists
│       ├── components/         Homepage, navigation, contact and project pages
│       │   ├── home/           Editorial homepage components and content
│       │   ├── project/        Reusable project-page components
│       │   └── threejs/        Decorative homepage hero particle scene
├── scripts/                    Static page rendering, release and Git LFS validation
├── package.json                Scripts and dependencies
├── package-lock.json           Locked dependency tree
├── webpack.config.js           Development and production configuration
└── dist/                       Generated build output; ignored by Git
```

### Routing and navigation

[App.js](src/js/App.js) loads the interactive React components for the requested page. Each URL has its own HTML document, for example:

```text
https://riibiax.github.io/earove/ant/
```

GitHub Pages serves each project from its own directory. Legacy links such as `/#/ant` redirect in the browser to the corresponding clean URL.

The homepage curates its featured selection through `home/homeContent.js`, reusing the routes and thumbnails in [projectData.js](src/js/projectData.js). Every project has Previous, Next and All projects links. Navigation follows the featured projects and then the archive, with explicit overrides for related projects.

### Page components

[HomePage.js](src/js/components/HomePage.js) composes the editorial homepage and manages its body theme and incoming section links. Its components live in [components/home](src/js/components/home):

- `HomeNavigation`: same-page Work, About and Contact links.
- `HomeHero`: introductory headline and short profile.
- `SelectedWork` / `ProjectCard`: six selected projects in staggered pairs, followed by an expandable archive.
- `HomeAbout`: profile, education, research and CV downloads in one vertical flow.
- `HomeFooter`: equally prominent GitHub, LinkedIn and Email links.
- `homeContent.js`: ordered project selection, captions, profile, education, CV files and homepage contact destinations.

To change the featured projects or their order, edit the `selection` list in [homeContent.js](src/js/components/home/homeContent.js). Remaining projects automatically appear in the archive. Project-page routes and shared thumbnails stay in `projectData.js`.

The homepage and project pages use locally bundled DM Sans and DM Mono fonts from the supplied design kit. Font licenses are in `src/fonts/` and copied into `dist/fonts/`. Colors, page gutters, spacing, image ratios and stagger are documented in `homepage.css`. Homepage styles are scoped to `.editorial-home`; its body theme is added on mount and removed on navigation.

The same homepage adapts to every screen; no separate mobile pages are needed. In `homepage.css`, the tablet breakpoint (1000px) stacks the hero and reduces gallery spacing, 800px lets education entries stack, and the phone breakpoint (640px) uses a single project column. Shared type and section-spacing variables are declared at the top; phone overrides adjust those variables together. Contact icons keep 56px click targets on every screen.

Reusable project components live in [src/js/components/project](src/js/components/project):

| Component | Purpose |
| --- | --- |
| `ProjectCaseStudy` | Shared title, credits, hero, story, contribution, project navigation and contact footer. |
| `ProjectGallery` | Automatic image slideshow, thumbnails, manual controls and enlarged dialog. |
| `ProjectFilm` | Responsive standalone embedded or local video. |
| `ProjectRecognition` | Award badges on a dark field, with readable award captions. |
| `CaseStudyText` | Orange emphasis for exact phrases, without HTML in content. |

All **21 projects** use the same editorial layout. Each page component is a small wrapper around `ProjectCaseStudy`; its project-specific text, credits and media live in a separate module under [src/js/content](src/js/content). For example, [SpinnyPage.js](src/js/components/SpinnyPage.js) imports [spinnyCaseStudy.js](src/js/content/spinnyCaseStudy.js). No layout markup needs to be copied when editing a project.

Project content and optional sections work as follows:

- `ProjectCaseStudy`: title/credits, Context, Approach, Impact, contribution, technologies and project navigation. Previous/next links follow the homepage selection, then its archive, wrapping at each end.
- `ProjectGallery`: a five-second slideshow with pause/play, thumbnails, image counts, arrow keys, touch swipes and an enlarged native dialog. Rotation pauses when the image is hovered, off screen, in a hidden tab or enlarged. Manual navigation stops rotation until Play is pressed. Reduced-motion preferences disable automatic starting. Change `AUTO_ADVANCE_MS` in the component to adjust the interval. Closing the dialog restores focus; Escape closes it too. Selected images have loading feedback and a retry action on failure.
- `ProjectFilm`: a separate embedded or local video player. To add films, set `videos` on the content object with `{ type, src, title, caption }` and an optional local-video `poster`. Use provider embed URLs without autoplay; local video files can live under the copied `img/` tree. KF Watches currently has no video entry.
- `ProjectRecognition`: supply `recognition: [{ src, alt }]` for award artwork and its caption. Anshar Online and Death Lap retain their original award badges.
- Optional `notes: [{ label, text }]` preserve collaborators and production credits; `links: [{ label, href }]` add external project links below the contribution. Technologies are hidden when no list is documented.

`createGallery(title, paths)` builds gallery entries from an explicit image list. Reorder those paths in the project content module to change the slideshow order. The hero is independently editable; its `width` and `height` reserve the correct space before loading. Images keep their proportions, and gallery frames use contain fitting. The current galleries contain 160 unique images across the 21 pages; one repeated Skater slide was removed. All six existing video embeds remain.

`caseStudy.css` scopes the shared page styles; the body theme is removed on navigation. It stacks the title and credits below 900px and the story sections below 640px. `fonts.css` is shared with the homepage. Native dialog behavior requires a current browser. The retired layout components and styles were backed up outside the repository at `../output/project-layout-migration-20261106/` and removed from the active source tree.

Set a case study’s `highlights` array to choose exact phrases shown in orange. `CaseStudyText` handles the emphasis without embedding HTML in the content or changing the text size.

### Styling

Custom CSS lives in [src/css](src/css); shared Bootstrap styles are imported once by `App.js`.

| File | Main responsibility |
| --- | --- |
| `homepage.css` | Editorial homepage tokens, typography, grid, archive and responsive layout. |
| `caseStudy.css` / `fonts.css` | Editorial case-study layout, image gallery/dialog and shared local fonts. |
| `ParticlesScene.css` | Retained particle scene styles. |

## Updating content

### Biography, education, CVs and contact links

- Edit the homepage biography, education, research and CV links in `aboutContent` in [homeContent.js](src/js/components/home/homeContent.js). The profile follows the approved English skills CV; `HomeAbout.js` controls its layout.
- Edit email and social links in `home/homeContent.js`; the homepage and every project use the same `HomeFooter` contact links.
- Place downloadable PDFs in `docs/` and update `aboutContent.cvFiles` if filenames change. The homepage presents the skills-based edition simply as “CV”, linking to `andrea-rovescalli-skills-{en,fr,it}.pdf`.

The Email link uses `mailto:`. Its address remains visible to scrapers in the page source, even though the displayed label is simply “Email”. Downloadable CVs also contain contact details; use a dedicated public contact address if reducing exposure is a priority.

CVs generated elsewhere in the parent workspace are not automatically added to this website. Copy the approved PDFs into `docs/` before building.

### Adding or editing a project

1. Add images under `img/<project>/` and create or edit its content module in `src/js/content/`.
2. Follow an existing case-study object: `path`, `title`, `category`, `introduction`, `credits`, `hero`, `context`, `approach`, `impact`, `contribution`, `technologies` and `gallery`. The page component only imports the object and renders `<ProjectCaseStudy project={content} />`.
3. Add or update the entry in `src/js/projectData.js`. Entries contain `path`, `title`, `thumbnail` and optional `showTitleOnHome`; their order controls the homepage archive. Featured order is set separately in `home/homeContent.js`. `showTitleOnHome: false` hides only the title overlay on the homepage.
4. Register the page's lazy import and route in `src/js/pageRoutes.js`. Add a search and social description in `config/project-descriptions.json` when the case-study introduction needs more context.
5. Check the thumbnail, project text, carousel, video and navigation in the browser.

Keep public asset paths relative in content, such as `img/kf/kf.png` or `docs/rovescalli_cv.pdf`. In components, pass local paths to `assetUrl()` so they resolve from the site root on nested pages.

### Site metadata and static files

The build uses `scripts/render-pages.cjs` to render the existing React pages and `scripts/page-template.cjs` to add titles, descriptions, canonical URLs, Open Graph and X cards, structured data and the favicon. Webpack generates `dist/sitemap.xml` from the same routes and canonical document links. Restart the development server after editing page metadata to regenerate the HTML.

The build copies the retained `img/` and `docs/` directories, font licenses, favicon, `.nojekyll` and a deployment-specific `.gitattributes`. Files placed in the copied media directories become public when deployed. Keep private originals, old CVs, reports and temporary files outside those folders.

Older CV URLs (`rovescalli_cv.pdf`, `rovescalli_cv_fr.pdf`, `rovescalli_cv_ita.pdf`) are generated as aliases of the current skills CVs. This preserves existing external links without retaining obsolete CV content.

The Tabak Fabrik case study loads the [original web edition](https://github.com/riibiax/TabakFabrik) on demand. Its scene, shaders, models, and textures are copied from `src/visualizations/tabak-fabrik/` into the static build. The iframe loads pinned legacy Three.js and Tween.js dependencies separately from the portfolio. Stop unloads the iframe so the next Play starts a new run.

### Git LFS and GitHub Pages

Images, PDFs and fonts are tracked with LFS in the **source** repository. After changing LFS rules, stage the assets and use `git add --renormalize -- img docs src/fonts d8210a18b13b602bc230.ico` to update existing index entries, then run `npm run check:lfs`. This checks the staged snapshot and does not rewrite old commits.

GitHub Pages must receive real files, not LFS pointers. Build from a checkout where `git lfs pull` has materialized the source assets. The generated `dist/.gitattributes` disables LFS filtering for the **published** `gh-pages` branch. The deployment command includes dotfiles and `.nojekyll`; `check:release` refuses to publish a build containing pointer files. Source LFS storage and published website files therefore remain separate.

The cleanup backup and its SHA-256 manifest are outside this repository at `../output/portfolio-cleanup-20261106/`. They are not published. Historical commits were not rewritten.

## Build and publishing

```sh
npm run build
```

Webpack cleans and recreates `dist/`. Production builds use `/earove/` as the asset base path, hashed JavaScript and CSS filenames, deterministic module/chunk IDs and no source maps. Development builds use `/` and enable source maps.

To publish, from a checkout with push access to the intended GitHub repository:

```sh
npm run deploy
```

The `predeploy` hook runs the production build and `check:release` automatically. The `gh-pages -d dist --dotfiles --nojekyll` command then publishes the generated files to the `gh-pages` branch. This is a publishing action, rather than a local preview command. Pushing source commits to `master` alone does not run this deployment command.

The repository contains no GitHub Actions workflow for deployment. Confirm the repository’s **Settings → Pages** configuration uses the intended publishing source; that remote setting is not defined by the local build files.

If the hosting path changes, update `homepage` in `package.json`. The production asset path, canonical URLs and sitemap use that value.

## Checks before publishing

- Run `npm run build` and review any errors or warnings.
- Check the selected gallery, project archive and section links on desktop and mobile.
- Open and refresh a clean project URL, then check project navigation and a legacy `/#/project` link.
- Check carousel arrows, indicators, videos and external links.
- Run `npm run check:lfs` after staging the intended source assets, and `npm run check:release` after building.
- Open every CV download and the research PDF, including the older CV URL aliases.
- Check browser console errors and failed asset requests, including paths under `/earove/`.
