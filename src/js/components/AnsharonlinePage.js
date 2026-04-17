import React, { Component } from "react";
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AwardGrid from "./project/AwardGrid";
import ProjectCarousel from "./project/ProjectCarousel";
import ProjectIntro from "./project/ProjectIntro";
import ProjectLayout from "./project/ProjectLayout";
import ProjectVideo from "./project/ProjectVideo";

const awards = [
  [
    { src: "img/ao/award-ao-casualconnect-2018-v3@2x.png", alt: '"Best VR Game" Nominated at the Indie Prize London - Casual Connect Europe 2018' },
    { src: "img/ao/award-ao-halo-award-2018-v3@2x.png", alt: '"Best VR Game" Winner Bronze at the Halo Awards - VRDays Europe 2018' },
    { src: "img/ao/award-ao-imga-2019-v3@2x.png", alt: '"Best VR Game" Nominated at the 15th IMGA San Francisco 2019' },
  ],
  [
    { src: "img/ao/award-ao-indigo-award-2019-v3@2x.png", alt: '"Best Mobile Game" Winner Gold category at the Indigo Award 2019' },
    { src: "img/ao/award-ao-ludicious-2019-v3@2x.png", alt: '"Best Swiss Game" Nominated at the Ludicious & SGDA Game Awards 2019' },
  ],
];

const images = Array.from({ length: 14 }, (_, index) => `img/ao/pic${String(index + 1).padStart(2, "0")}.jpg`);

const AnsharonlinePage = () => (
  <ProjectLayout>
    <ProjectIntro
      title="Anshar Online"
      body={
        <>
          <p>In 2017, I returned to Switzerland and joined OZWE Games to develop VR games. I first designed and implemented cinematics for Anshar Online, then continued as a graphics programmer focused on shaders and performance. I also worked as a game designer and developer, building levels and creating the game trailer.</p>
          <p>Anshar Online is a multiplayer space shooter where players fight cooperative battles across more than 50 missions, contracts, and assaults.</p>
          <p>Players can race against each other, compete in 8-player deathmatches, and improve their ships through loot drops, resources, upgrades, and class changes.</p>
          <p>The project gave me the chance to work across cinematic direction, real-time graphics, level design, optimization, and production assets for a commercial VR title.</p>
          <p>Technologies: C#, Shaders, Unity3D, Blender.</p>
        </>
      }
    />
    <AwardGrid rows={awards} />
    <ProjectVideo
      src="https://www.youtube.com/embed/fP8N_tY6SfE?si=2wihavxPurvlTLAJ&rel=0&amp;showinfo=0&amp;loop=1&amp;vq=hd1080"
      iframeProps={{ referrerPolicy: "strict-origin-when-cross-origin", title: "Anshar Online trailer" }}
    />
    <ProjectCarousel images={images} className="py-4" />
    <ProjectVideo
      className="pt-3"
      src="https://player.vimeo.com/video/379442315"
      iframeProps={{ vimeo: true, title: "Anshar Online gameplay video" }}
    />
  </ProjectLayout>
);

export default AnsharonlinePage;
