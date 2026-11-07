import createGallery from "./createGallery";

// Reorder images here; every local path is validated before publication.
const gallery = createGallery("Berchtesgaden Salt Mine", [
  "img/saltmine/pic01.jpg",
  "img/saltmine/pic02.jpg",
  "img/saltmine/pic03.jpg",
  "img/saltmine/pic04.jpg",
  "img/saltmine/pic05.jpg",
  "img/saltmine/pic06.jpg",
  "img/saltmine/pic07.jpg",
  "img/saltmine/pic08.jpg"
]);

/** Project copy and credits, kept separate from the shared page layout. */
const saltMineCaseStudy = {
  "path": "/saltmine",
  "title": "Berchtesgaden Salt Mine",
  "category": "Immersive environments",
  "introduction": "Light, image and sound inside a chamber carved from rock.",
  "highlights": [
    "Light, image and sound",
    "four projection screens",
    "immersive environment",
    "concept design"
  ],
  "credits": [
    {
      "label": "Venue",
      "value": "Berchtesgaden Salt Mine"
    },
    {
      "label": "Created at",
      "value": "Ars Electronica Solutions"
    },
    {
      "label": "My role",
      "value": "Concept design"
    }
  ],
  "context": "The Treasure Chamber is one of the main attractions of the Berchtesgaden Salt Mine’s SaltTimeJourney guided tour. Ars Electronica Solutions redesigned this large underground space carved into the rock.",
  "approach": "Across four projection screens, abstract crystalline animations tell the story of salt through nature, humankind, history and technology. A dedicated soundtrack supports the imagery, while a pulsating salt lamp created by one of the mine’s associates provides another focal point.",
  "impact": "Light, image, sound and the underground setting combine into an immersive environment that forms part of the SaltTimeJourney visitor experience.",
  "contribution": "Concept design as part of the Ars Electronica Solutions team.",
  "technologies": [],
  "hero": {
    "src": "img/saltmine/pic01.jpg",
    "alt": "Berchtesgaden Salt Mine, project overview",
    "width": 1772,
    "height": 1064,
    "caption": "The Treasure Chamber · SaltTimeJourney"
  },
  gallery,
};

export default saltMineCaseStudy;
