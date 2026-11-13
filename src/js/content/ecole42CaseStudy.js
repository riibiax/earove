import createGallery from "./createGallery";

// Reorder images here; every local path is validated before publication.
const gallery = createGallery("42 Lausanne", [
  "img/42/pic01.png",
  "img/42/pic02.png",
  "img/42/pic03.png",
  "img/42/pic04.png",
  "img/42/pic05.png"
]);

/** Project copy and credits, kept separate from the shared page layout. */
const ecole42CaseStudy = {
  "path": "/ecole42",
  "title": "42 Lausanne",
  "category": "Interactive installations",
  "introduction": "Making a peer-to-peer learning culture tangible through playful interaction.",
  "highlights": [
    "peer-to-peer learning",
    "augmented reality",
    "Unity’s AR Foundation",
    "design and development"
  ],
  "credits": [
    {
      "label": "Client",
      "value": "42 Lausanne, Renens"
    },
    {
      "label": "Developed at",
      "value": "UDIMU SA"
    },
    {
      "label": "My role",
      "value": "Interaction design & software development"
    }
  ],
  "context": "At UDIMU SA, I worked on interactive installations for 42 Lausanne, the computer science school based on peer-to-peer learning. The space needed to communicate the school’s mission and learning culture to students, visitors and staff.",
  "approach": "My role combined design and development, with interactive experiences built in Unity 3D and React. For the inauguration, we also created an augmented reality treasure hunt for iOS and Android using Unity’s AR Foundation framework.",
  "impact": "The installations offered a playful introduction to the school and its learning culture, while the inauguration treasure hunt extended the experience onto visitors’ phones.",
  "contribution": "I worked across interaction design and software development for the school's installations, using Unity and React to turn the ideas into interactive experiences. I also contributed to the mobile augmented reality treasure hunt for the inauguration, built with Unity's AR Foundation.",
  "technologies": [
    "C#",
    "Shaders",
    "Unity 3D",
    "AR Foundation",
    "React",
    "Blender"
  ],
  "hero": {
    "src": "img/42/pic01.png",
    "alt": "42 Lausanne, project overview",
    "width": 1920,
    "height": 1080,
    "caption": "42 Lausanne · Interactive installations and an AR treasure hunt"
  },
  gallery,
};

export default ecole42CaseStudy;
