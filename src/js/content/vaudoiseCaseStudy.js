import createGallery from "./createGallery";

// Reorder images here; every local path is validated before publication.
const gallery = createGallery("The Way", [
  "img/vaudoise/pic01.png",
  "img/vaudoise/pic02.png",
  "img/vaudoise/pic03.png",
  "img/vaudoise/pic04.png",
  "img/vaudoise/pic05.png",
  "img/vaudoise/pic06.png",
  "img/vaudoise/pic07.png",
  "img/vaudoise/pic08.png"
]);

/** Project copy and credits, kept separate from the shared page layout. */
const vaudoiseCaseStudy = {
  "path": "/vaudoise",
  "title": "The Way",
  "category": "Interactive experiences",
  "introduction": "An escape game that makes retirement a topic to explore through play.",
  "highlights": [
    "escape game",
    "mini-games",
    "UI system",
    "localisation tools",
    "Unity"
  ],
  "credits": [
    {
      "label": "Client",
      "value": "Vaudoise Assurances"
    },
    {
      "label": "Developed at",
      "value": "UDIMU SA"
    },
    {
      "label": "My role",
      "value": "Game, interface & tool development"
    }
  ],
  "context": "When I joined UDIMU SA in 2021, my first project was an interactive totem for Vaudoise Assurances. The Way introduces retirement through an imaginative escape game: what if you could fast-forward to age 65 in just 45 minutes?",
  "approach": "I developed the mini-games and UI system, together with localisation tools, an Excel import pipeline for Unity diagrams and an assistance system to guide users through the experience.",
  "impact": "The totem combines play, visual information and guided interaction to give visitors an accessible way to engage with the topic of retirement.",
  "contribution": "I developed the mini-games and interface systems that guide visitors through The Way. To support the content and its presentation, I built localisation tools and a pipeline for importing Excel data into Unity diagrams. I also created the assistance system that helps users progress through the experience.",
  "technologies": [
    "C#",
    "Shaders",
    "Unity 3D"
  ],
  "hero": {
    "src": "img/vaudoise/pic01.png",
    "alt": "The Way, project overview",
    "width": 1920,
    "height": 1080,
    "caption": "The Way · An interactive totem for Vaudoise Assurances"
  },
  gallery,
};

export default vaudoiseCaseStudy;
