import React from "react";
import { homeContent } from "./homeContent";
import ParticlesScene from "../threejs/ParticlesScene";

export default function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-heading">
      <ParticlesScene />
      <h1 id="home-heading">Software meets<br />creative <span>technology.</span></h1>
      <div className="home-introduction">
        <p>{homeContent.introduction}</p>
        <p className="home-location">{homeContent.location}</p>
      </div>
    </section>
  );
}
