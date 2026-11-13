import projects from "../../projectData";

/** Edit this ordered selection to curate the homepage. Shared routes and
 * thumbnails stay in projectData, so project pages and navigation keep working. */
const selection = [
  { path: "/evoka", category: "Interactive installations", description: "An installation that connects visitors' memories with Fribourg's archives" },
  { path: "/spinny", title: "Spinny’s Journey", category: "Game development", description: "An independent game for Nintendo Switch and PC" },
  { path: "/ansharonline", title: "Anshar Online", category: "Virtual reality", description: "A multiplayer journey through space" },
  { path: "/tabakFabrik", title: "Tabak Fabrik", category: "Generative art", description: "Memories translated into a generative visual narrative" },
  { path: "/spymuseum", title: "Spy Museum", category: "Interactive installations", description: "Interactive experiences for the Spy Museum in Berlin" },
  { path: "/metec", title: "METEC", category: "Data visualisation", description: "Interactive 4K walls for Primetals Technologies" },
];

export const featuredProjects = selection.map((entry) => ({
  ...projects.find((project) => project.path === entry.path),
  ...entry,
}));
const featuredPaths = new Set(selection.map(({ path }) => path));
// Evoka leads the expanded list as well as the featured cards.
export const archiveProjects = projects.filter(({ path }) => path === "/evoka" || !featuredPaths.has(path));

// Follow the expanded list first; include the other featured projects once at the end.
const archivePaths = new Set(archiveProjects.map(({ path }) => path));
export const projectOrder = [...archiveProjects, ...featuredProjects.filter(({ path }) => !archivePaths.has(path))];

// Introductory and contact text is kept together for the next content pass.
export const homeContent = {
  name: "Andrea Rovescalli",
  introduction: "Senior software engineer. Interactive experiences across AI, real-time 3D and XR.",
  location: "Based in Lausanne, Switzerland.",
  email: "andrearovescalli@gmail.com",
  socialLinks: [
    { label: "GitHub", href: "https://github.com/riibiax/" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/andrea-rovescalli/" },
  ],
};

const headGeneva = "Haute école d’art et de design – Genève (HEAD)";

/** Profile wording follows the approved English skills CV. Text fragments allow
 * emphasis without storing HTML or mixing presentation into the copy. */
export const aboutContent = {
  paragraphs: [
    [
      { text: "Senior software engineer with " },
      { text: "15+ years of experience", emphasis: true },
      { text: " at the intersection of software engineering and creative technologies." },
    ],
    [
      { text: "Specialised in designing and developing " },
      { text: "interactive experiences", emphasis: true },
      { text: ", " }, { text: "real-time 3D applications", emphasis: true },
      { text: " and " }, { text: "XR solutions", emphasis: true },
      { text: ", combining user interfaces, audiovisual systems, hardware and " },
      { text: "artificial intelligence", emphasis: true }, { text: "." },
    ],
    [
      { text: "My experience also includes " },
      { text: "technical leadership", emphasis: true },
      { text: ", team coordination and collaboration with external partners." },
    ],
  ],
  education: [
    { years: "2012–2014", degree: "Master’s in Media and Interaction Design", school: headGeneva },
    { years: "2008–2009", degree: "Erasmus programme", school: "École polytechnique fédérale de Lausanne (EPFL)" },
    { years: "2007-2008", degree: "Master's in Computer Engineering", school: "Università degli Studi di Siena" },
    { years: "2002–2007", degree: "Bachelor’s in Computer Engineering", school: "Politecnico di Milano" },
  ],
  research: {
    title: "The Domestication of Kinetic Art",
    type: "Master’s thesis",
    institution: headGeneva,
    institutionShort: "HEAD – Genève",
    year: "2014",
    href: "docs/the_domestication_of_kinetic_art.pdf",
  },
  // The public CV downloads use the skills-based edition in each language.
  cvFiles: [
      { language: "English", lang: "en", href: "docs/andrea-rovescalli-skills-en.pdf" },
      { language: "Français", lang: "fr", href: "docs/andrea-rovescalli-skills-fr.pdf" },
      { language: "Italiano", lang: "it", href: "docs/andrea-rovescalli-skills-it.pdf" },
  ],
};
