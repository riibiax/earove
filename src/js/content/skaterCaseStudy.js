import createGallery from "./createGallery";

// Reorder images here; every local path is validated before publication.
const gallery = createGallery("The Skater", [
  "img/skater/pic01.png",
  "img/skater/pic02.png",
  "img/skater/pic03.png",
  "img/skater/pic04.png",
  "img/skater/pic05.png",
  "img/skater/pic06.png",
  "img/skater/pic07.png",
  "img/skater/pic09.png",
  "img/skater/pic10.png"
]);

/** Project copy and credits, kept separate from the shared page layout. */
const skaterCaseStudy = {
  "path": "/skater",
  "title": "The Skater",
  "category": "Augmented reality",
  "introduction": "A paper city, an iPhone and an augmented reality skate adventure.",
  "highlights": [
    "augmented reality",
    "printed cards",
    "origami",
    "zine culture"
  ],
  "credits": [
    {
      "label": "Format",
      "value": "Mobile augmented reality game"
    },
    {
      "label": "Design & development",
      "value": "Andrea Rovescalli, Praiya Chinagarn & Solkin Keizer"
    },
    {
      "label": "Setting",
      "value": "Berlin in the 1980s"
    }
  ],
  "context": "Imagine your iPhone as a skater moving through circuits and avoiding obstacles. Set in 1980s Berlin, The Skater follows a young character trying to spread American skate culture while staying ahead of the police.",
  "approach": "In a visual world inspired by zine culture, printed cards build each level and physical origami pieces help solve virtual obstacles. The player moves between a handmade paper city and its augmented reality counterpart.",
  "impact": "The game connects a mobile virtual world with physical cards and origami, making the objects around the screen part of the play experience.",
  "contribution": "Game design and development with Praiya Chinagarn and Solkin Keizer.",
  "technologies": [
    "C++",
    "Shaders",
    "openFrameworks",
    "Cinema 4D"
  ],
  "hero": {
    "src": "img/skater/pic01.png",
    "alt": "The Skater, project overview",
    "width": 1400,
    "height": 934,
    "caption": "The Skater · A physical paper world meets augmented reality"
  },
  gallery,
};

export default skaterCaseStudy;
