import React from "react";
import { homeContent } from "./homeContent";
import { assetUrl } from "../../sitePaths";

// Reuse the original portfolio assets as masks so their color follows the theme.
const contactIcons = { GitHub: "img/github.png", LinkedIn: "img/linkedin.png", Email: "img/email.png" };

function ContactIcon({ label }) {
  return (
    <span
      className="home-contact-icon"
      style={{ "--contact-icon": `url(${assetUrl(contactIcons[label])})` }}
      aria-hidden="true"
    />
  );
}

/** All contact channels share the same visual hierarchy. An Email label keeps
 * the address out of display copy; mailto links are still publicly discoverable. */
export default function HomeFooter() {
  const scrollToTop = (event) => {
    event.preventDefault();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "instant" : "smooth" });
  };

  return (
    <footer id="contact" className="home-footer home-shell" aria-labelledby="home-contact-heading">
      <div className="home-footer-top">
        <h2 id="home-contact-heading">Get in touch.</h2>
        <div className="home-contact-links">
          {homeContent.socialLinks.map(({ label, href }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
              <ContactIcon label={label} />
            </a>
          ))}
          <a href={`mailto:${homeContent.email}`} aria-label="Email" title="Email">
            <ContactIcon label="Email" />
          </a>
        </div>
      </div>
      <div className="home-footer-bottom">
        <span>{homeContent.name} · Lausanne, Switzerland</span>
        <a href="#top" onClick={scrollToTop}>Back to top ↑</a>
      </div>
    </footer>
  );
}
