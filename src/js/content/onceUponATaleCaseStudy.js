import createGallery from "./createGallery";

// Reorder images here; every local path is validated before publication.
const gallery = createGallery("Once Upon a Tale", [
  "img/onceuponatale/pic01.png",
  "img/onceuponatale/pic02.png",
  "img/onceuponatale/pic03.png",
  "img/onceuponatale/pic04.png",
  "img/onceuponatale/pic05.png",
  "img/onceuponatale/pic06.png",
  "img/onceuponatale/pic07.png",
  "img/onceuponatale/pic08.png"
]);

/** Project copy and credits, kept separate from the shared page layout. */
const onceUponATaleCaseStudy = {
  "path": "/onceUponATale",
  "title": "Once Upon a Tale",
  "category": "Interactive storytelling",
  "introduction": "Familiar stories become a playground for new narrative combinations.",
  "highlights": [
    "narrative combinations",
    "tactile book",
    "touch interface",
    "characters and settings"
  ],
  "credits": [
    {
      "label": "Format",
      "value": "Tactile book & interactive application"
    },
    {
      "label": "Development",
      "value": "Andrea Rovescalli & Praiya Chinagarn"
    },
    {
      "label": "Illustrations",
      "value": "Benjamin Ben Kemoun"
    }
  ],
  "context": "Once Upon a Tale is a tactile book and interactive storytelling application based on well-known children’s stories. It invites readers to reinvent familiar tales and build their own combinations.",
  "approach": "Through a card game or touch interface, players select characters and settings from different stories to generate combinations of text and illustration. Stories can be changed at any moment: Cinderella might become the big bad wolf in Bluebeard’s castle.",
  "impact": "The project makes storytelling an activity to shape and remix, connecting physical play with a digital application and illustrations that respond to the chosen narrative.",
  "contribution": "I developed the application with Praiya Chinagarn, bringing the storytelling interactions into a digital experience. We worked with illustrations by Benjamin Ben Kemoun so that readers could combine characters and settings and see their stories take shape on screen.",
  "technologies": [],
  "notes": [
    {
      "label": "Workshop",
      "text": "Led by Etienne Mineur and Nicolas Nova."
    }
  ],
  "videos": [
    {
      "type": "embed",
      "src": "https://player.vimeo.com/video/67625861",
      "title": "Once Upon a Tale — project film",
      "caption": "The tactile book and interactive storytelling application in use."
    }
  ],
  "hero": {
    "src": "img/onceuponatale/pic01.png",
    "alt": "Once Upon a Tale, project overview",
    "width": 841,
    "height": 612,
    "caption": "Once Upon a Tale · Physical cards and interactive storytelling"
  },
  gallery,
  exhibitions: [
    "Once Upon a Tale, Mudac 2016",
    "Swiss Gaming Corner 2014",
    "Lift China 2014",
    "The Book Lab EPFL 2014",
    "Grafik14 Zurich",
    "Milan Salone del Mobile 2014",
    "Swissnex Boston 2014",
    "Mobilisable Paris 2013",
  ],
};

export default onceUponATaleCaseStudy;
