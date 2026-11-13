import createGallery from "./createGallery";

// Reorder images here; every local path is validated before publication.
const gallery = createGallery("Lightscape", [
  "img/lightscape/pic01.jpg",
  "img/lightscape/pic02.jpg",
  "img/lightscape/pic03.jpg",
  "img/lightscape/pic04.jpg",
  "img/lightscape/pic05.jpg",
  "img/lightscape/pic06.jpg"
]);

/** Project copy and credits, kept separate from the shared page layout. */
const lightscapeCaseStudy = {
  "path": "/lightscape",
  "title": "Lightscape",
  "category": "Kinetic installations",
  "introduction": "A changing landscape shaped by location, weather and movement.",
  "highlights": [
    "location, weather and movement",
    "GPS location",
    "live weather data",
    "mechanical silhouette"
  ],
  "credits": [
    {
      "label": "Format",
      "value": "Interactive & performative installation"
    },
    {
      "label": "Material",
      "value": "Landscape imagery & weather data"
    },
    {
      "label": "Project",
      "value": "Lightscape"
    }
  ],
  "context": "Lightscape is an interactive and performative installation depicting the landscape seen by a migrant during a journey. It explores how the qualities of a place can be translated into a physical, changing composition.",
  "approach": "Using GPS location, the artwork combines landscape images from Flickr with live weather data to recreate local colours and light. The upper part represents the sky, the lower part visualises the soil and a mechanical silhouette suggests someone moving through the landscape.",
  "impact": "Weather forecasts continuously animate the composition, bringing images, environmental information and mechanical movement together in a landscape that changes over time.",
  "contribution": "I worked on the interactive and performative installation, bringing together location-based imagery, weather information and physical movement. My contribution explored how these different materials could form a changing representation of a journey.",
  "technologies": [
    "openFrameworks",
    "Arduino",
    "Python"
  ],
  "hero": {
    "src": "img/lightscape/pic01.jpg",
    "alt": "Lightscape, project overview",
    "width": 1920,
    "height": 1280,
    "caption": "Lightscape · Landscape, data and mechanical movement"
  },
  gallery,
};

export default lightscapeCaseStudy;
