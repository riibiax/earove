const exhibitionPhotoCredit = "© EPFL+ECAL Lab / Daniela & Tonatiuh";
const portraitSizes = "(max-width: 640px) 40vw, (max-width: 1600px) 38vw, 800px";

const antCaseStudy = {
  path: "/ant",
  title: "Advancing Neurofeedback in Tinnitus",
  section: "PROJECT ARCHIVE",
  category: "Design research",
  introduction: "Making brain activity visible in real time.",
  highlights: ["brain activity visible", "real-time visual feedback", "created the feedback visuals", "Python library"],
  credits: [
    { label: "Format", value: "Research project" },
    { label: "Institution", value: "EPFL+ECAL Lab" },
    { label: "My role", value: "Lead developer & visual creation" },
  ],
  hero: {
    src: "img/ant/hero-lab.jpg",
    alt: "ANT's neurofeedback visualisation presented at EPFL+ECAL Lab.",
    width: 1536,
    height: 1152,
    caption: "ANT. Photography © EPFL+ECAL Lab / Marvin Merkel.",
  },
  context: "Tinnitus is the perception of sound without an external source. ANT brought together design, neuroscience and psychology to study how neurofeedback training could be adapted for people with tinnitus.",
  approach: "During training, real-time visual feedback reflects changes in measured brain activity. For example, changes in alpha activity can make a pattern expand or alter its speed. The team explored how these visual cues affect understanding and engagement.",
  impact: "The research informed a neurofeedback protocol that entered clinical testing at University Hospital Zurich in January 2026.",
  contribution: "I led software development, created the feedback visuals and was the primary developer of the Python library behind them. It uses py5 to render animations from live EEG and can replay recorded signals to test the same visual presets.",
  technologies: ["Python", "py5", "Real-time visualisation"],
  videos: [
    {
      type: "file",
      src: "img/ant/rts-excerpt.mp4",
      poster: "img/ant/rts-poster.jpg",
      title: "Advancing Neurofeedback in Tinnitus on RTS 36.9°",
      caption: "ANT on RTS 36.9° · Broadcast excerpt 21:52–25:29 · In French",
    },
  ],
  gallery: [
    {
      src: "img/ant/pic03.jpg",
      width: 1800,
      height: 2400,
      thumbnail: "img/ant/responsive/pic03-800.jpg",
      sizes: portraitSizes,
      sources: [
        { src: "img/ant/responsive/pic03-800.jpg", width: 600 },
        { src: "img/ant/responsive/pic03-1600.jpg", width: 1200 },
        { src: "img/ant/pic03.jpg", width: 1800 },
      ],
      alt: "A purple feedback pattern on the ANT display beside the EEG cap and project panel.",
      caption: `The feedback display and EEG cap. ${exhibitionPhotoCredit}`,
    },
    {
      src: "img/ant/exhibition-visitors.jpg",
      width: 1800,
      height: 2400,
      thumbnail: "img/ant/responsive/exhibition-visitors-800.jpg",
      sizes: portraitSizes,
      sources: [
        { src: "img/ant/responsive/exhibition-visitors-800.jpg", width: 600 },
        { src: "img/ant/responsive/exhibition-visitors-1600.jpg", width: 1200 },
        { src: "img/ant/exhibition-visitors.jpg", width: 1800 },
      ],
      alt: "Two visitors explore the ANT display and EEG cap beneath purple exhibition banners.",
      caption: `Visitors explore the ANT installation. ${exhibitionPhotoCredit}`,
    },
    {
      src: "img/ant/ant.jpg", width: 2400, height: 1350,
      alt: "A wide view of the ANT installation with warm bands of light reflected across the wall and floor.",
      caption: "The ANT project on display.",
    },
    {
      src: "img/ant/pic01.jpg", width: 1800, height: 2400,
      alt: "Side view of the ANT display with its screen and research panel.",
      thumbnail: "img/ant/responsive/pic01-800.jpg",
      sizes: portraitSizes,
      sources: [
        { src: "img/ant/responsive/pic01-800.jpg", width: 600 },
        { src: "img/ant/responsive/pic01-1600.jpg", width: 1200 },
        { src: "img/ant/pic01.jpg", width: 1800 },
      ],
    },
    {
      src: "img/ant/pic02-aligned.jpg", width: 2400, height: 1636,
      alt: "The full exhibition setup with a tablet, an upright feedback screen and a red EEG cap.",
    },
  ],
};

export default antCaseStudy;
