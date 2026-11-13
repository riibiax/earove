import createGallery from "./createGallery";

// Reorder images here; every local path is validated before publication.
const gallery = createGallery("Ars Electronica Festival", [
  "img/aef/pic01.jpg",
  "img/aef/pic02.jpg",
  "img/aef/pic03.jpg",
  "img/aef/pic04.jpg",
  "img/aef/pic05.jpg",
  "img/aef/pic06.jpg",
  "img/aef/pic07.jpg",
  "img/aef/pic08.jpg"
]);

/** Project copy and credits, kept separate from the shared page layout. */
const aefCaseStudy = {
  "path": "/aef",
  "title": "Ars Electronica Festival",
  "category": "Geospatial visualisation",
  "introduction": "An interactive view of Earth, space research and activity on the ground.",
  "highlights": [
    "interactive view of Earth",
    "4K projection wall",
    "GeoStage",
    "geodata"
  ],
  "credits": [
    {
      "label": "Event",
      "value": "Ars Electronica Festival 2016"
    },
    {
      "label": "Developed at",
      "value": "Ars Electronica Solutions"
    },
    {
      "label": "My role",
      "value": "Interactive visualisation development"
    }
  ],
  "context": "For Ars Electronica Festival 2016, I worked on interactive installations presenting content from the European Space Agency and organisations including Reporters, Engineers, Architects and Doctors Without Borders.",
  "approach": "A 4K projection wall controlled by a touch terminal let visitors explore a simulation of Earth, ESA satellite models, high-resolution planetary images and points of interest from space research. A second 4K touch screen focused on geodata and the participating organisations’ field activities.",
  "impact": "The installations brought space research and field activity into an explorable format. GeoStage, Ars Electronica Solutions’ geovisualisation system, processed heat maps, points of interest, media and text for the interactive displays.",
  "contribution": "I developed interactive installations and geospatial visualisations as part of the Ars Electronica Solutions team. My work supported the displays through which visitors explored space research and the participating organisations' activities.",
  "technologies": [
    "C#",
    "Unity 3D",
    "QGIS",
    "Global Mapper"
  ],
  "hero": {
    "src": "img/aef/pic01.jpg",
    "alt": "Ars Electronica Festival, project overview",
    "width": 2362,
    "height": 1564,
    "caption": "Ars Electronica Festival 2016 · Space research and geodata"
  },
  gallery,
};

export default aefCaseStudy;
