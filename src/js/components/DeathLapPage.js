import React, { Component } from "react";
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AwardGrid from "./project/AwardGrid";
import ProjectCarousel from "./project/ProjectCarousel";
import ProjectIntro from "./project/ProjectIntro";
import ProjectLayout from "./project/ProjectLayout";
import ProjectVideo from "./project/ProjectVideo";

const images = [
  "img/deathlap/pic01.png",
  "img/deathlap/pic02.png",
  "img/deathlap/pic03.png",
  "img/deathlap/pic04.png",
  "img/deathlap/pic05.png",
  "img/deathlap/pic06.png",
];

const DeathLapPage = () => (
  <ProjectLayout>
    <ProjectIntro
      title="Death Lap"
      left={
        <>
          <p>At the end of 2018, OZWE Games began collaborating with Oculus Studios on Death Lap, a VR combat racing game. I was responsible for the main Unity 3D shaders, especially PBR metallic materials and visual effects, while keeping the rendering performance suitable for VR.</p>
          <p>I also contributed across the production: coding, network infrastructure, artificial intelligence, level design, SFX, UI, localization, VFX, optimization, debugging, and management.</p>
        </>
      }
      right={
        <>
          <p>Death Lap is a VR combat racing game that challenges you to drive to survive. Just point and shoot to destroy everything in your path. Hit the road, perform drifts and stunts, navigate traps, unleash your weapons and special abilities, and enjoy the chaos of its battlefields.</p>
          <p>Captured by Nitro Saint Payne, a maniacal and tragic showman, players are thrown into a deadly TV show where they must race and battle other drivers to win their freedom.</p>
          <p>Technologies: C#, Shaders, Unity3D, Blender.</p>
        </>
      }
    />
    <AwardGrid rows={[[{ src: "img/deathlap/award-dl-halo-2019@2x.png", alt: "Death Lap Halo Award" }]]} className="" />
    <ProjectVideo
      className="py-3"
      src="https://www.youtube-nocookie.com/embed/L1yMEQ7IrQc?rel=0&amp;showinfo=0&amp;loop=1&amp;vq=hd1080"
      iframeProps={{ referrerPolicy: "strict-origin-when-cross-origin", title: "Death Lap trailer" }}
    />
    <ProjectCarousel images={images} className="pt-3" />
  </ProjectLayout>
);

export default DeathLapPage;
