import createGallery from "./createGallery";

// Reorder images here; every local path is validated before publication.
const gallery = createGallery("METEC", [
  "img/metec/pic01.jpg",
  "img/metec/pic02.jpg",
  "img/metec/pic03.jpg",
  "img/metec/pic04.jpg",
  "img/metec/pic05.jpg",
  "img/metec/pic06.jpg",
  "img/metec/pic07.jpg"
]);

/** Project copy and credits, kept separate from the shared page layout. */
const metecCaseStudy = {
  "path": "/metec",
  "title": "METEC",
  "category": "Data visualisation",
  "introduction": "Factory data brought into focus through interactive 4K walls.",
  "highlights": [
    "interactive 4K walls",
    "factory data",
    "data visualisation",
    "interactive 4K screen walls"
  ],
  "credits": [
    {
      "label": "Client",
      "value": "Primetals Technologies"
    },
    {
      "label": "Developed at",
      "value": "Ars Electronica Solutions"
    },
    {
      "label": "My role",
      "value": "Interactive 4K wall development"
    }
  ],
  "context": "For METEC in June 2015, Ars Electronica Solutions created an immersive environment for Primetals Technologies. The exhibition supported the launch of the company’s new name and corporate design at a leading event for metallurgical technology.",
  "approach": "An open exhibition space combined interactive walls, terminals and tables with a central installation of 24 screens, 12 of which could rotate. Inspired by metallurgical processes, the exhibits presented complex information in an intuitive, playful way. I developed the interactive 4K screen walls used to visualise factory data.",
  "impact": "The environment brought technical content and the new corporate identity into one exhibition experience, using data visualisation and interaction to make factory information accessible to visitors.",
  "contribution": "I developed the interactive 4K screen walls used to visualise factory data from Primetals Technologies. My work formed part of the wider exhibition environment created by Ars Electronica Solutions for METEC.",
  "technologies": [
    "C++",
    "JUCE",
    "OpenGL",
    "TUIO",
    "PostgreSQL"
  ],
  "videos": [
    {
      "type": "embed",
      "src": "https://www.youtube-nocookie.com/embed/xnx9Yghxd9g",
      "title": "Primetals Technologies at METEC — exhibition film",
      "caption": "An overview of the METEC exhibition environment."
    }
  ],
  "hero": {
    "src": "img/metec/pic01.jpg",
    "alt": "METEC, project overview",
    "width": 1400,
    "height": 1049,
    "caption": "Primetals Technologies · METEC 2015"
  },
  gallery,
};

export default metecCaseStudy;
