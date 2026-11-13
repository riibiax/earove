import createGallery from "./createGallery";

// Reorder images here; every local path is validated before publication.
const gallery = createGallery("The Skater", [
  "img/skater/enhanced/pic01.jpg",
  "img/skater/enhanced/pic02.jpg",
  "img/skater/enhanced/pic03.jpg",
  "img/skater/enhanced/pic04.jpg",
  "img/skater/enhanced/pic05.jpg",
  "img/skater/enhanced/pic06.jpg",
  "img/skater/enhanced/pic07.jpg",
  "img/skater/enhanced/pic09.jpg",
  "img/skater/enhanced/pic10.jpg"
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
  "contribution": "I designed and developed the game with Praiya Chinagarn and Solkin Keizer. Together, we explored how printed cards and origami could become part of an augmented reality skate adventure.",
  "technologies": [
    "C++",
    "Shaders",
    "openFrameworks",
    "Cinema 4D"
  ],
  "hero": {
    "src": "img/skater/enhanced/pic01.jpg",
    "alt": "The Skater, project overview",
    "width": 2800,
    "height": 1868,
    "caption": "The Skater · A physical paper world meets augmented reality"
  },
  gallery,
};

export default skaterCaseStudy;
