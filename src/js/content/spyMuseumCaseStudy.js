import createGallery from "./createGallery";

// Reorder images here; every local path is validated before publication.
const gallery = createGallery("Spy Museum", [
  "img/spymuseum/pic01.jpg",
  "img/spymuseum/pic02.jpg",
  "img/spymuseum/pic03.jpg",
  "img/spymuseum/pic04.jpg",
  "img/spymuseum/pic05.jpg",
  "img/spymuseum/pic06.jpg",
  "img/spymuseum/pic07.jpg",
  "img/spymuseum/pic08.jpg",
  "img/spymuseum/pic09.jpg",
  "img/spymuseum/pic10.jpg"
]);

/** Project copy and credits, kept separate from the shared page layout. */
const spyMuseumCaseStudy = {
  "path": "/spymuseum",
  "title": "Spy Museum",
  "category": "Interactive installations",
  "introduction": "Exploring the history of espionage through interactive experiences.",
  "highlights": [
    "interactive experiences",
    "multimedia",
    "exploration and discovery",
    "interactive installations"
  ],
  "credits": [
    {
      "label": "Institution",
      "value": "Spy Museum, Berlin"
    },
    {
      "label": "Developed at",
      "value": "Ars Electronica Solutions"
    },
    {
      "label": "My role",
      "value": "Contribution to interactive installations"
    }
  ],
  "context": "In September 2015, I worked with Ars Electronica Solutions on interactive installations for the Spy Museum in Berlin. Across more than 3,000 square metres, the permanent exhibition tells stories of covert operations, espionage cases and legendary spies.",
  "approach": "The exhibition combines historical objects, documents, photographs, films, interviews and expert testimony with multimedia and museum technology. Interactive experiences make exploration and discovery part of the visit.",
  "impact": "Historical material and interactive encounters sit together within the permanent exhibition, giving visitors different ways to explore the people, methods and stories behind espionage.",
  "contribution": "I worked on the interactive installations with the Ars Electronica Solutions team. My contribution formed part of the museum's approach to bringing the history of espionage into experiences visitors could explore for themselves.",
  "technologies": [],
  "hero": {
    "src": "img/spymuseum/pic01.jpg",
    "alt": "Spy Museum, project overview",
    "width": 1920,
    "height": 1280,
    "caption": "Spy Museum · Interactive installations in Berlin"
  },
  gallery,
};

export default spyMuseumCaseStudy;
