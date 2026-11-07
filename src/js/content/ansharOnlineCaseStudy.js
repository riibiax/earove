import createGallery from "./createGallery";

// Reorder images here; every local path is validated before publication.
const gallery = createGallery("Anshar Online", [
  "img/ao/pic01.jpg",
  "img/ao/pic02.jpg",
  "img/ao/pic03.jpg",
  "img/ao/pic04.jpg",
  "img/ao/pic05.jpg",
  "img/ao/pic06.jpg",
  "img/ao/pic07.jpg",
  "img/ao/pic08.jpg",
  "img/ao/pic09.jpg",
  "img/ao/pic10.jpg",
  "img/ao/pic11.jpg",
  "img/ao/pic12.jpg",
  "img/ao/pic13.jpg",
  "img/ao/pic14.jpg"
]);

/** Project copy and credits, kept separate from the shared page layout. */
const ansharOnlineCaseStudy = {
  "path": "/ansharonline",
  "title": "Anshar Online",
  "category": "Virtual reality",
  "introduction": "A multiplayer space adventure built for virtual reality.",
  "highlights": [
    "virtual reality",
    "cinematics",
    "shaders and performance",
    "level design",
    "game trailer"
  ],
  "credits": [
    {
      "label": "Studio",
      "value": "OZWE Games"
    },
    {
      "label": "Format",
      "value": "Multiplayer VR space shooter"
    },
    {
      "label": "My role",
      "value": "Graphics programming, cinematics & game development"
    }
  ],
  "context": "In 2017, I returned to Switzerland and joined OZWE Games to develop VR games. Anshar Online is a multiplayer space shooter with more than 50 missions, contracts and assaults, combining cooperative battles with races and eight-player deathmatches.",
  "approach": "I first designed and implemented cinematics, then continued as a graphics programmer focused on shaders and performance. I also worked on game and level design and created the game trailer. Players progress through loot drops, resources, ship upgrades and class changes.",
  "impact": "The project connected cinematic direction, real-time graphics and gameplay within a commercial VR title. Its recognition included a bronze Best VR Game award at VRDays Europe 2018 and a gold Best Mobile Game award at the Indigo Award 2019, alongside the nominations shown below.",
  "contribution": "Cinematic design and implementation, graphics programming, shader development, performance optimisation, game development, level design and production of the game trailer.",
  "technologies": [
    "C#",
    "Shaders",
    "Unity 3D",
    "Blender"
  ],
  "videos": [
    {
      "type": "embed",
      "src": "https://www.youtube-nocookie.com/embed/fP8N_tY6SfE",
      "title": "Anshar Online — trailer",
      "caption": "Anshar Online trailer."
    },
    {
      "type": "embed",
      "src": "https://player.vimeo.com/video/379442315",
      "title": "Meet the team — Andrea Rovescalli at OZWE Games",
      "caption": "Meet the team: Andrea Rovescalli at OZWE Games."
    }
  ],
  "hero": {
    "src": "img/ao/pic01.jpg",
    "alt": "Anshar Online, project overview",
    "width": 2560,
    "height": 1440,
    "caption": "Anshar Online · Multiplayer space combat in VR"
  },
  "recognition": [
    {
      "src": "img/ao/award-ao-casualconnect-2018-v3@2x.png",
      "alt": "\"Best VR Game\" Nominated at the Indie Prize London - Casual Connect Europe 2018"
    },
    {
      "src": "img/ao/award-ao-halo-award-2018-v3@2x.png",
      "alt": "\"Best VR Game\" Winner Bronze at the Halo Awards - VRDays Europe 2018"
    },
    {
      "src": "img/ao/award-ao-imga-2019-v3@2x.png",
      "alt": "\"Best VR Game\" Nominated at the 15th IMGA San Francisco 2019"
    },
    {
      "src": "img/ao/award-ao-indigo-award-2019-v3@2x.png",
      "alt": "\"Best Mobile Game\" Winner Gold category at the Indigo Award 2019"
    },
    {
      "src": "img/ao/award-ao-ludicious-2019-v3@2x.png",
      "alt": "\"Best Swiss Game\" Nominated at the Ludicious & SGDA Game Awards 2019"
    }
  ],
  gallery,
};

export default ansharOnlineCaseStudy;
