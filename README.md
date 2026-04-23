# earove

Personal portfolio website for Andrea Rovescalli, built with React, React Router, Bootstrap, Three.js, and Webpack.

The site has two main parts:

- a homepage with the project grid, animated particle background, About section, and Contact section
- a set of individual project pages, each with its own content and media carousel

The production site is published on GitHub Pages at [https://riibiax.github.io/earove/](https://riibiax.github.io/earove/).

## Tech Stack

- React 19
- React Router (`HashRouter`)
- Bootstrap / React Bootstrap
- Three.js
- Webpack 5
- Babel

## Local Development

This project expects Node `25.9.0` or newer.

Recommended setup:

```powershell
nvm use 25.9.0
npm install
npm start
```

Local dev server:

```text
http://localhost:8080
```

Production build:

```powershell
npm run build
```

This writes the compiled site to `dist/`.

## Scripts

Defined in [package.json](C:\Projects\sites\earove\package.json):

- `npm start`: runs `webpack serve --mode development`
- `npm run build`: creates the production build in `dist/`
- `npm run deploy`: publishes `dist/` with the `gh-pages` package

Note: this repository is also maintained with a dedicated `gh-pages` branch containing the deployed build output.

## How The App Is Structured

### Entry Point

The React app starts in [src/js/App.js](C:\Projects\sites\earove\src\js\App.js).

Responsibilities:

- mounts the app with `createRoot`
- configures a `HashRouter`
- lazy-loads the homepage and all project pages
- initializes the custom scroll behavior from [src/js/utils/scroll.js](C:\Projects\sites\earove\src\js\utils\scroll.js)

The app uses `HashRouter` instead of browser history so the site works cleanly on GitHub Pages.

### Routing

Routes are defined directly in [src/js/App.js](C:\Projects\sites\earove\src\js\App.js).

- `/` and `/index.html` render the homepage
- each project has its own route such as `/kf`, `/aef`, `/ansharonline`, `/vaudoise`, etc.

Because this is a hash-based site, deployed URLs look like:

```text
https://riibiax.github.io/earove/#/kf
```

### Shared Project Metadata

[src/js/projectData.js](C:\Projects\sites\earove\src\js\projectData.js) contains the shared project list used by:

- the homepage project grid
- the Projects dropdown in the navigation

Each entry includes:

- `path`
- `title`
- `thumbnail`
- optional `showTitleOnHome`

If you change a project title or thumbnail there, it updates in both the homepage and the nav dropdown.

### Main UI Areas

#### Homepage

[src/js/components/HomePage.js](C:\Projects\sites\earove\src\js\components\HomePage.js) assembles:

- [src/js/components/Nav.js](C:\Projects\sites\earove\src\js\components\Nav.js)
- [src/js/components/threejs/ParticlesScene.js](C:\Projects\sites\earove\src\js\components\threejs\ParticlesScene.js)
- the project grid
- [src/js/components/About.js](C:\Projects\sites\earove\src\js\components\About.js)
- [src/js/components/Contact.js](C:\Projects\sites\earove\src\js\components\Contact.js)

#### Navigation

[src/js/components/Nav.js](C:\Projects\sites\earove\src\js\components\Nav.js) handles:

- desktop and mobile navigation
- the mobile `Rove` menu toggle
- homepage anchor navigation (`#projects`, `#about`, `#contact`)
- the project dropdown on project pages
- dropdown scroll hints and project switching

On mobile, clicking `Projects` from a project page sends the user back to the homepage projects section instead of opening the desktop-style dropdown.

#### Particle Background

[src/js/components/threejs/ParticlesScene.js](C:\Projects\sites\earove\src\js\components\threejs\ParticlesScene.js) creates the animated Three.js background used on the homepage.

It adjusts particle density for mobile versus desktop.

### Project Pages

Project pages currently exist in two styles:

#### 1. Older page components

Many page files such as [src/js/components/AefPage.js](C:\Projects\sites\earove\src\js\components\AefPage.js) still define their layout inline:

- import CSS directly
- render `Nav`
- render the description markup
- render `ProjectCarousel`
- render `Contact`

#### 2. Shared project building blocks

The folder [src/js/components/project](C:\Projects\sites\earove\src\js\components\project) contains reusable pieces for newer or refactored project pages:

- [ProjectLayout.js](C:\Projects\sites\earove\src\js\components\project\ProjectLayout.js): shared page frame with `Nav` and `Contact`
- [ProjectIntro.js](C:\Projects\sites\earove\src\js\components\project\ProjectIntro.js): project title and description layout
- [ProjectCarousel.js](C:\Projects\sites\earove\src\js\components\project\ProjectCarousel.js): shared image carousel
- `AwardGrid.js`
- `ProjectVideo.js`

This means the codebase is partly standardized already, but some older pages still use the pre-refactor pattern.

### Styling

CSS lives in [src/css](C:\Projects\sites\earove\src\css).

Main files:

- [main.css](C:\Projects\sites\earove\src\css\main.css): shared layout and project-page styling
- [menu.css](C:\Projects\sites\earove\src\css\menu.css): nav bar, mobile menu, projects dropdown
- [homepage.css](C:\Projects\sites\earove\src\css\homepage.css): homepage grid styling
- [about.css](C:\Projects\sites\earove\src\css\about.css): About section
- [contact.css](C:\Projects\sites\earove\src\css\contact.css): Contact section
- [ParticlesScene.css](C:\Projects\sites\earove\src\css\ParticlesScene.css): homepage background canvas styling

Bootstrap is used alongside custom CSS. The custom styling should live in `src/css`, not inside `node_modules`.

### Assets

The project uses two asset locations:

- [img](C:\Projects\sites\earove\img): main image assets copied into the build
- [docs](C:\Projects\sites\earove\docs): downloadable documents such as PDFs

There is also a smaller [src/img](C:\Projects\sites\earove\src\img) folder used by source-level assets.

## Build And Deployment

Webpack configuration lives in [webpack.config.js](C:\Projects\sites\earove\webpack.config.js).

Important points:

- entry file: `./src/js/App.js`
- output folder: `dist/`
- production `publicPath`: `/earove/`
- CSS is extracted with `MiniCssExtractPlugin`
- images, PDFs, and icons are emitted as asset resources
- `img`, `docs`, `playframe.html`, `sitemap.xml`, and the favicon are copied into the build

Development:

- source maps enabled
- dev server on port `8080`

Production:

- no source maps
- hashed JS and CSS filenames
- cleaned output directory
- deterministic chunk and module ids

GitHub Pages deployment is based on the production build output. In practice:

1. develop on `master`
2. run `npm run build`
3. publish the generated files to `gh-pages`

## Main Folders

```text
earove/
|-- docs/                  Static documents copied into the build
|-- img/                   Main project images copied into the build
|-- src/
|   |-- css/               Custom stylesheets
|   |-- img/               Source-level images
|   `-- js/
|       |-- components/    Homepage, nav, contact, project pages, shared project UI
|       `-- utils/         Utilities such as scroll handling
|-- dist/                  Generated production build
|-- package.json           NPM scripts and dependencies
`-- webpack.config.js      Build configuration
```

## Adding Or Updating A Project Page

At a high level, adding a new project usually means:

1. add the project entry in [src/js/projectData.js](C:\Projects\sites\earove\src\js\projectData.js)
2. create a page component in [src/js/components](C:\Projects\sites\earove\src\js\components)
3. add the route in [src/js/App.js](C:\Projects\sites\earove\src\js\App.js)
4. add the related images under [img](C:\Projects\sites\earove\img)
5. reuse the shared components from [src/js/components/project](C:\Projects\sites\earove\src\js\components\project) when possible

## Notes For Future Cleanup

Based on the current repository, the most obvious structural improvement would be to move more of the older page components onto the shared project-page building blocks. That would reduce duplication across:

- repeated `Nav` / `Contact` wrapping
- repeated intro layout markup
- repeated carousel wiring

The current project works fine as-is, but it already contains the beginnings of a cleaner shared page system.
