import React, { Component } from "react";
import "../../css/main.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ProjectCarousel from "./project/ProjectCarousel";
import ProjectIntro from "./project/ProjectIntro";
import ProjectLayout from "./project/ProjectLayout";

const images = [
  "img/kf/pic01.png",
  "img/kf/pic02.png",
  "img/kf/pic03.png",
  "img/kf/pic04.png",
  "img/kf/pic05.png",
  "img/kf/pic06.png",
  "img/kf/pic07.png",
  "img/kf/pic09.png",
];

const KfPage = () => (
  <ProjectLayout>
    <ProjectIntro
      title="KF Watches"
      body={
        <>
          <p>At UDIMU SA, I worked on an interactive configurator for KF Watches, designed to help clients explore the brand's models in a clear and tactile way.</p>
          <p>The configurator lets visitors customize individual watch components, including colors and materials, through a touch screen interface.</p>
          <p>The main challenge was to render each watch with enough precision to communicate the quality of the materials and the complexity of the design.</p>
          <p>Using Unity 3D and the HDRP render pipeline, I developed the real-time presentation, optimized the 3D models, lighting, and shaders, and paid particular attention to diamonds and metal parts. I also designed and implemented the interface and animations used to present the different watch models.</p>
          <p>Technologies: C#, Shaders, Unity3D, Blender.</p>
        </>
      }
    />
    <ProjectCarousel images={images} />
  </ProjectLayout>
);

export default KfPage;
