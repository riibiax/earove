import React from "react";
import { homeContent } from "./homeContent";

const sections = [{ id: "projects", label: "Work" }, { id: "about", label: "About" }, { id: "contact", label: "Contact" }];

export default function HomeNavigation() {
  const scrollTo = (id) => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(id)?.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth" });
  };
  return (
    <header className="home-header home-shell">
      <a className="home-wordmark" href="#home-top" onClick={(event) => {
        event.preventDefault();
        scrollTo("home-top");
      }}>{homeContent.name}</a>
      <nav className="home-navigation" aria-label="Main navigation">
        {sections.map(({ id, label }) => (
          <a key={id} href={`#${id}`} onClick={(event) => {
            event.preventDefault();
            scrollTo(id);
          }}>{label}</a>
        ))}
      </nav>
    </header>
  );
}
