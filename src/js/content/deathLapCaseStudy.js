import createGallery from "./createGallery";

// Reorder images here; every local path is validated before publication.
const gallery = createGallery("Death Lap", [
  "img/deathlap/pic01.png",
  "img/deathlap/pic02.png",
  "img/deathlap/pic03.png",
  "img/deathlap/pic04.png",
  "img/deathlap/pic05.png",
  "img/deathlap/pic06.png"
]);

/** Project copy and credits, kept separate from the shared page layout. */
const deathLapCaseStudy = {
  "path": "/deathlap",
  "title": "Death Lap",
  "category": "Virtual reality",
  "introduction": "Combat racing in VR, with real-time graphics built for speed.",
  "highlights": [
    "real-time graphics",
    "PBR metallic materials",
    "visual effects",
    "VR rendering performance",
    "shader development"
  ],
  "credits": [
    {
      "label": "Studio",
      "value": "OZWE Games"
    },
    {
      "label": "Collaboration",
      "value": "Oculus Studios"
    },
    {
      "label": "My role",
      "value": "Graphics programming & game development"
    }
  ],
  "context": "At the end of 2018, OZWE Games began collaborating with Oculus Studios on Death Lap. In this VR combat racing game, players are captured by the showman Nitro Saint Payne and thrown into a deadly TV show, racing and battling other drivers to win their freedom.",
  "approach": "I was responsible for the main Unity 3D shaders, particularly PBR metallic materials and visual effects, while keeping VR rendering performance in focus. My work also extended across gameplay, networking, artificial intelligence, level design and production support.",
  "impact": "The game brings driving, shooting, drifts, stunts, traps and special abilities into one VR experience. Its visual work combines material rendering and effects with the performance demands of fast-moving combat racing. Death Lap received a gold Halo Award in 2019.",
  "contribution": "I developed the game's main shaders and visual effects, with particular attention to metallic materials and rendering performance in VR. Beyond graphics, I worked on gameplay code, network infrastructure, artificial intelligence and level design. I also contributed to sound effects, user interfaces and localisation, and supported the team through optimisation, debugging and production management.",
  "technologies": [
    "C#",
    "Shaders",
    "Unity 3D",
    "Blender"
  ],
  "videos": [
    {
      "type": "embed",
      "src": "https://www.youtube-nocookie.com/embed/L1yMEQ7IrQc",
      "title": "Death Lap — trailer",
      "caption": "Death Lap trailer."
    }
  ],
  "hero": {
    "src": "img/deathlap/pic02.png",
    "alt": "Death Lap, VR combat racing gameplay",
    "width": 2560,
    "height": 1440,
    "caption": "Death Lap · VR combat racing"
  },
  "recognition": [
    {
      "src": "img/deathlap/award-dl-halo-2019@2x.png",
      "alt": "Death Lap Halo Award"
    }
  ],
  gallery,
};

export default deathLapCaseStudy;
