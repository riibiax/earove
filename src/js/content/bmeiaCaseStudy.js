import createGallery from "./createGallery";

// Reorder images here; every local path is validated before publication.
const gallery = createGallery("BMEIA Touchwall", [
  "img/bmeia/pic01.jpg",
  "img/bmeia/pic02.jpg",
  "img/bmeia/pic03.jpg",
  "img/bmeia/pic04.jpg"
]);

/** Project copy and credits, kept separate from the shared page layout. */
const bmeiaCaseStudy = {
  "path": "/bmeia",
  "title": "BMEIA Touchwall",
  "category": "Geospatial visualisation",
  "introduction": "Austria’s international activities on a shared interactive media wall.",
  "highlights": [
    "interactive media wall",
    "GeoPulse",
    "gigapixel imagery",
    "three people"
  ],
  "credits": [
    {
      "label": "Client",
      "value": "Austrian Federal Ministry for Europe, Integration and Foreign Affairs"
    },
    {
      "label": "Developed at",
      "value": "Ars Electronica Solutions"
    },
    {
      "label": "My role",
      "value": "Interactive media-wall implementation"
    }
  ],
  "context": "In December 2015, Ars Electronica Solutions created an interactive media wall for the Austrian Federal Ministry for Europe, Integration and Foreign Affairs. It used data visualisation to help visitors explore Austria’s international activities and compare information across countries.",
  "approach": "Three landscape screens formed a wall powered by a customised GeoPulse application, with content managed through a CMS. Features included gigapixel imagery and geospatial visualisation. Active mode supported up to three people at once, while presentation mode used the full display.",
  "impact": "The same installation supported shared exploration and full-screen presentations, bringing Austria’s international activities into a visual, navigable format.",
  "contribution": "Implementation of the media wall and its customised GeoPulse application as part of Ars Electronica Solutions.",
  "technologies": [
    "C++",
    "JUCE",
    "OpenGL",
    "TUIO",
    "PostgreSQL"
  ],
  "hero": {
    "src": "img/bmeia/pic01.jpg",
    "alt": "BMEIA Touchwall, project overview",
    "width": 1920,
    "height": 1080,
    "caption": "BMEIA Touchwall · Geospatial data and gigapixel imagery"
  },
  gallery,
};

export default bmeiaCaseStudy;
