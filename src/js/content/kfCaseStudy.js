/** Edit the story and reorder gallery entries here, independently of layout.
 * Add a `videos` array for projects with films; ProjectFilm documents its fields. */
const kfCaseStudy = {
  path: "/kf",
  title: "KF Watches",
  category: "Real-time 3D",
  introduction: "Bringing fine watchmaking into real-time 3D.",
  // Exact phrases to accent in the introduction and story; keep the copy above/below unchanged.
  highlights: ["real-time 3D", "touch interface", "Unity HDRP", "3D models, lighting and shaders", "interactive experience", "Real-time rendering", "interface development"],
  credits: [
    { label: "Client", value: "KF Watches" },
    { label: "Developed at", value: "UDIMU SA" },
    { label: "My role", value: "Real-time 3D & interaction development" },
  ],
  hero: {
    src: "img/kf/pic02.png",
    alt: "Real-time render of a KF watch with a rose-gold case and leather strap",
    width: 1920,
    height: 1080,
    caption: "Unity HDRP · Real-time rendering",
  },
  context: "Created at UDIMU SA, the configurator needed to let clients explore KF Watches’ models through a touch interface, while conveying the quality of the materials and the complexity of each design.",
  approach: "I developed the experience in Unity HDRP, optimising 3D models, lighting and shaders alongside the interface and animations. Particular care went into the appearance of diamonds and metal surfaces.",
  gallery: [
    { src: "img/kf/pic01.png", alt: "KF Watches configurator showing component controls alongside a detailed watch render", caption: "A touch interface for exploring watch components, colours and materials." },
    { src: "img/kf/pic02.png", alt: "KF watch with a rose-gold case and leather strap", caption: "Real-time watch rendering in Unity HDRP." },
    { src: "img/kf/pic03.png", alt: "KF Watches configurator, watch configuration view 3" },
    { src: "img/kf/pic04.png", alt: "KF Watches configurator, watch configuration view 4" },
    { src: "img/kf/pic05.png", alt: "KF Watches configurator, watch configuration view 5" },
    { src: "img/kf/pic06.png", alt: "KF Watches configurator, watch configuration view 6" },
    { src: "img/kf/pic07.png", alt: "KF Watches configurator, watch configuration view 7" },
    { src: "img/kf/pic09.png", alt: "KF Watches configurator, watch configuration view 8" },
  ],
  impact: "The resulting configurator brings watch variations into one interactive experience, allowing users to customise individual components and explore colours and materials directly on screen.",
  contribution: "I developed the real-time rendering and touch interface in Unity HDRP, working on 3D model optimisation, lighting and shaders to convey the watches' materials and detail. I also created cinematic animations that present the watches as users select a model or configure its components.",
  technologies: ["C#", "Unity HDRP", "Shaders", "Blender"],
};

export default kfCaseStudy;
