import React from "react";
import { Link } from "react-router-dom";
import { homeContent } from "./homeContent";

const sections = [{ id: "projects", label: "Work" }, { id: "about", label: "About" }, { id: "contact", label: "Contact" }];

export default function HomeNavigation() {
  const scrollTo = (id) => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(id)?.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth" });
  };
  return (
    <header className="home-header home-shell">
      <Link className="home-wordmark" to="/" onClick={() => scrollTo("home-top")}>{homeContent.name}</Link>
      <nav className="home-navigation" aria-label="Main navigation">
        {sections.map(({ id, label }) => (
          <a key={id} href={`#/#${id}`} onClick={(event) => {
            // Avoid confusing same-page anchors with React Router's route hash.
            event.preventDefault();
            scrollTo(id);
          }}>{label}</a>
        ))}
      </nav>
    </header>
  );
}
