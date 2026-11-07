import React, { useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import HomeAbout from "./home/HomeAbout";
import HomeNavigation from "./home/HomeNavigation";
import HomeHero from "./home/HomeHero";
import SelectedWork from "./home/SelectedWork";
import HomeFooter from "./home/HomeFooter";
import "../../css/homepage.css";

/** Homepage theme; project pages share its typefaces and use caseStudy.css. */
export default function HomePage() {
  const location = useLocation();

  useLayoutEffect(() => {
    document.body.classList.add("editorial-home-active");
    return () => document.body.classList.remove("editorial-home-active");
  }, []);

  // Preserve section links coming from the existing project-page navigation.
  useEffect(() => {
    const target = location.hash && document.getElementById(location.hash.slice(1));
    if (target) target.scrollIntoView({ behavior: "instant", block: "start" });
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.hash]);

  return (
    <div className="editorial-home" id="home-top">
      <a className="home-skip-link" href="#/#projects" onClick={(event) => {
        event.preventDefault();
        const target = document.getElementById("projects");
        target.focus({ preventScroll: true });
        target.scrollIntoView({ behavior: "instant" });
      }}>Skip to selected work</a>
      <HomeNavigation />
      <main className="home-shell">
        <HomeHero />
        <SelectedWork />
        <HomeAbout />
      </main>
      <HomeFooter />
    </div>
  );
}
