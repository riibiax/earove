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
    src: "img/ant/ant.jpg",
    alt: "The ANT exhibition display in a hall with bands of coloured light across the wall.",
    width: 1920,
    height: 1200,
    caption: "The ANT project on display.",
  },
  context: "Tinnitus is the perception of sound without an external source. ANT brought together design, neuroscience and psychology to study how neurofeedback training could be adapted for people with tinnitus.",
  approach: "During training, real-time visual feedback reflects changes in measured brain activity. The team explored how different visual cues affect how people understand and engage with the training.",
  impact: "The research informed a neurofeedback protocol that entered clinical testing at University Hospital Zurich in January 2026.",
  contribution: "I led software development, created the feedback visuals and was the primary developer of the Python library behind them.",
  technologies: ["Python", "Real-time visualisation"],
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
    { src: "img/ant/pic03.jpg", alt: "A purple feedback pattern on the ANT display beside the EEG cap and project panel." },
    { src: "img/ant/exhibition-visitors.jpg", alt: "Two visitors explore the ANT display and EEG cap beneath purple exhibition banners." },
    { src: "img/ant/pic01.jpg", alt: "Side view of the ANT display with its screen and research panel." },
    { src: "img/ant/pic02.jpg", alt: "A red EEG cap on a pedestal beside the ANT feedback display." },
  ],
};

export default antCaseStudy;
