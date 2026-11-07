import createGallery from "./createGallery";

// Reorder images here; every local path is validated before publication.
const gallery = createGallery("Spinny’s Journey", [
  "img/spinny/pic01.png",
  "img/spinny/pic02.png",
  "img/spinny/pic03.png",
  "img/spinny/pic04.png",
  "img/spinny/pic05.png",
  "img/spinny/pic06.jpg",
  "img/spinny/pic07.png",
  "img/spinny/pic08.png",
  "img/spinny/pic09.png",
  "img/spinny/pic10.png"
]);

/** Project copy and credits, kept separate from the shared page layout. */
const spinnyCaseStudy = {
  "path": "/spinny",
  "title": "Spinny’s Journey",
  "category": "Game development",
  "introduction": "A small alien, a spinning spaceship and a 2D action-puzzle adventure.",
  "highlights": [
    "2D action-puzzle",
    "Nintendo Switch",
    "game production",
    "shader development",
    "VFX"
  ],
  "credits": [
    {
      "label": "Studio",
      "value": "Thunder Sparrow"
    },
    {
      "label": "Platforms",
      "value": "Nintendo Switch & PC"
    },
    {
      "label": "My role",
      "value": "Game development & production"
    }
  ],
  "context": "During the Covid lockdown, I developed a game with friends to explore the Nintendo Switch market and the process of creating a company in Switzerland: Thunder Sparrow. Spinny’s Journey follows a tiny alien whose spaceship is destroyed by a terrifying sparrow.",
  "approach": "Inspired by Kuru Kuru Kururin on Game Boy Advance, the gameplay centres on rotation, timing and narrow paths. Players guide Spinny through mazes, avoid traps and repair his spaceship. I worked across game production, from team and supplier coordination to user testing, communication and marketing.",
  "impact": "The project brought together an independent game for Nintendo Switch and PC and hands-on experience of building a studio in Switzerland, connecting creative decisions with the technical and organisational demands of production.",
  "contribution": "Project and team management, supplier coordination, communication and marketing strategy, user testing, game development, Nintendo Switch shader development, code optimisation, Nintendo framework integration and VFX creation.",
  "technologies": [
    "C#",
    "Shaders",
    "Unity 2D",
    "Photoshop",
    "Python"
  ],
  "videos": [
    {
      "type": "embed",
      "src": "https://www.youtube-nocookie.com/embed/okEwT4zTtl0",
      "title": "Spinny’s Journey — Nintendo Switch trailer",
      "caption": "Nintendo Switch trailer."
    }
  ],
  "links": [
    {
      "label": "Thunder Sparrow",
      "href": "https://www.linkedin.com/company/71466273/"
    }
  ],
  "hero": {
    "src": "img/spinny/pic01.png",
    "alt": "Spinny’s Journey, project overview",
    "width": 1280,
    "height": 720,
    "caption": "Spinny’s Journey · Independent game development"
  },
  gallery,
};

export default spinnyCaseStudy;
