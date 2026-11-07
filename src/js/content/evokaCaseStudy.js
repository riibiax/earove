const evokaCaseStudy = {
  path: "/evoka",
  title: "Èvokâ II",
  category: "Interactive installations",
  introduction: "A personal memory opens a conversation with Fribourg's archives.",
  highlights: ["personal memory", "nearly 70,000 images", "led frontend development", "archive indexing and search"],
  credits: [
    { label: "Format", value: "Permanent installation · 2026" },
    { label: "Location", value: "Cantonal and University Library, Fribourg" },
    { label: "My role", value: "Lead frontend developer & interaction design contributor" },
  ],
  context: "How can a library make its digital collections feel personal? EPFL+ECAL Lab, BCU Fribourg and the Swiss Data Science Center spent four years exploring that question through interaction design, archival research and AI.",
  approach: "Visitors step into a booth, pick up a handset and share a memory. An AI-guided conversation connects that memory to material from the library's collections, which include nearly 70,000 images alongside sound recordings, films and newspapers.",
  impact: "Èvokâ II opened during the 2026 European Heritage Days and is now a permanent installation at BCU Fribourg. Visitors can begin with a story of their own and discover a piece of the canton's history they might never have thought to look for.",
  contribution: "I led frontend development in Unity and worked in Figma with the team to shape the touchscreen interface and visitor interactions. On the backend, I helped integrate a large language model (LLM) for archive indexing and search.",
  technologies: ["Unity", "Figma", "Large language models"],
  hero: {
    src: "img/evoka/evoka.jpg",
    alt: "A visitor sits at the touchscreen inside the wood and green fabric Èvokâ II booth.",
    width: 1920,
    height: 1280,
    caption: "Èvokâ II at BCU Fribourg. Photography © EPFL+ECAL Lab / Daniela & Tonatiuh.",
  },
  videos: [
    {
      type: "embed",
      src: "https://player.vimeo.com/video/1244713574?h=ea16958c5c&dnt=1",
      title: "Èvokâ II project film",
      caption: "The Èvokâ II experience in use.",
    },
  ],
  gallery: [
    { src: "img/evoka/pic04.jpg", alt: "A visitor holds the green handset while viewing archival material on the touchscreen." },
    { src: "img/evoka/pic05.jpg", alt: "A visitor selects an archival image on the touchscreen." },
    { src: "img/evoka/pic06.jpg", alt: "A close-up of the interface showing green dots around a selection of on-screen cards." },
    { src: "img/evoka/pic03.jpg", alt: "A visitor holding the handset, framed by the booth’s wooden sign and green curtain." },
    { src: "img/evoka/pic07.jpg", alt: "A hand holds the green handset in front of the curtain." },
    { src: "img/evoka/pic02.jpg", alt: "The booth and touchscreen in the library, with the green curtain partly drawn." },
  ],
  links: [
    { label: "EPFL+ECAL Lab", href: "https://epfl-ecal-lab.ch/2026/09/evoka-ii-public-opening-during-the-european-heritage-days/" },
    { label: "ECAL project page", href: "https://ecal.ch/en/feed/projects/8835/evoka-ii/" },
    { label: "SWI swissinfo.ch", href: "https://www.swissinfo.ch/fre/une-installation-pour-faire-r%C3%A9sonner-les-souvenirs-et-le-patrimoine/92022578" },
    { label: "Watch on Vimeo", href: "https://vimeo.com/1244713574?share=copy&fl=sv&fe=ci" },
  ],
};

export default evokaCaseStudy;
