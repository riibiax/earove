import createGallery from "./createGallery";

// Reorder images here; every local path is validated before publication.
const gallery = createGallery("Machine Enchantée", [
  "img/machine/pic01.jpg",
  "img/machine/pic02.jpg",
  "img/machine/pic03.jpg",
  "img/machine/pic04.jpg",
  "img/machine/pic05.jpg",
  "img/machine/pic06.jpg",
  "img/machine/pic07.jpg",
  "img/machine/pic08.jpg",
  "img/machine/pic09.jpg"
]);

/** Project copy and credits, kept separate from the shared page layout. */
const machineCaseStudy = {
  "path": "/machine",
  "title": "Machine Enchantée",
  "category": "Interaction design",
  "introduction": "A library that becomes a landscape of discovery for children.",
  "highlights": [
    "landscape of discovery",
    "serendipity",
    "touch-screen table",
    "LED paths"
  ],
  "credits": [
    {
      "label": "Event",
      "value": "UMIX Information Architecture Hackathon"
    },
    {
      "label": "Place / year",
      "value": "Lyon · 2014"
    },
    {
      "label": "My role",
      "value": "Team interaction concept"
    }
  ],
  "context": "At the UMIX Information Architecture Hackathon 2014 in Lyon, teams had 48 hours to rethink physical and digital libraries. Our concept used serendipity to help children aged three to seven discover books and games through play.",
  "approach": "A friendly classification system, developed together with children, uses their interests, topics and favourite books. Children select symbols on a touch-screen table, then follow branching LED paths through the library towards special boxes that light up with book and game selections. Up to four users can follow different routes at once.",
  "impact": "Machine Enchantée won the hackathon. The concept turns choosing a book into a physical journey, connecting a digital selection with discovery throughout the library.",
  "contribution": "Team development of the interaction concept for a playful, child-centred library experience.",
  "technologies": [],
  "notes": [
    {
      "label": "Team",
      "text": "Andrea Rovescalli, Yannis Adelbost, Mathilde Bulete-Herbaut, Valeria Borsotti, Tommaso Elli, Fabian Ramirez and Inma Salcedo."
    }
  ],
  "hero": {
    "src": "img/machine/pic01.jpg",
    "alt": "Machine Enchantée, project overview",
    "width": 1920,
    "height": 967,
    "caption": "Machine Enchantée · Exploring libraries through play"
  },
  gallery,
};

export default machineCaseStudy;
