import createGallery from "./createGallery";

// Reorder images here; every local path is validated before publication.
const gallery = createGallery("Tabak Fabrik", [
  "img/tabakfabrik/pic01.png",
  "img/tabakfabrik/pic02.png",
  "img/tabakfabrik/pic03.png",
  "img/tabakfabrik/pic04.png",
  "img/tabakfabrik/pic05.png",
  "img/tabakfabrik/pic06.png",
  "img/tabakfabrik/pic07.png"
]);

/** Project copy and credits, kept separate from the shared page layout. */
const tabakFabrikCaseStudy = {
  "path": "/tabakFabrik",
  "title": "Tabak Fabrik",
  "category": "Generative art",
  "introduction": "Personal memories translated into a generative visual narrative.",
  "highlights": [
    "generative visual narrative",
    "photogrammetry",
    "3D models",
    "binary code",
    "animation framework"
  ],
  "credits": [
    {
      "label": "Project",
      "value": "Personal generative artwork"
    },
    {
      "label": "Place",
      "value": "Tabak Fabrik, Linz, Austria"
    },
    {
      "label": "My role",
      "value": "Concept, 3D reconstruction & development"
    }
  ],
  "context": "Tabak Fabrik is a 12-minute visual piece created from memories of my two years working at Ars Electronica Solutions. The former tobacco factory in Linz became a creative hub and a setting for the places, people and events explored in the work.",
  "approach": "Using photogrammetry, I recreated buildings, spaces, statues and objects as 3D models. I then developed an animation framework driven by data from meaningful moments: emails, web traffic, images and sounds converted into binary code.",
  "impact": "The result is an abstract narrative about experiences that remain, turning traces of everyday life into moving visual forms. For privacy reasons, the underlying data is not shown; the gallery presents stills from the visual work.",
  "contribution": "Artistic concept, photogrammetry, 3D reconstruction, data processing, shader work and development of the animation framework.",
  "technologies": [
    "Three.js",
    "Wireshark",
    "GLSL",
    "Agisoft PhotoScan"
  ],
  "hero": {
    "src": "img/tabakfabrik/pic01.png",
    "alt": "Tabak Fabrik, project overview",
    "width": 1920,
    "height": 1280,
    "caption": "Tabak Fabrik · Stills from a 12-minute generative visual piece"
  },
  gallery,
};

export default tabakFabrikCaseStudy;
