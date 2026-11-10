import React from "react";
import { aboutContent } from "./homeContent";
import { assetUrl } from "../../sitePaths";

/** One vertical reading flow: profile, education, research and CV downloads. */
export default function HomeAbout() {
  const { research } = aboutContent;

  return (
    <section id="about" className="home-about" aria-labelledby="home-about-heading">
      <div className="home-about-profile">
        <h2 id="home-about-heading" className="home-editorial-heading">About</h2>
        <div className="home-about-copy">
          {aboutContent.paragraphs.map((fragments, index) => (
            <p key={index}>{fragments.map(({ text, emphasis }, fragmentIndex) => emphasis
              ? <span className="home-highlight" key={fragmentIndex}>{text}</span>
              : <React.Fragment key={fragmentIndex}>{text}</React.Fragment>)}</p>
          ))}
        </div>
      </div>
      <div className="home-about-section" aria-labelledby="home-education-heading">
        <h3 id="home-education-heading" className="home-editorial-heading">Education</h3>
        <ol className="home-education-list">
          {aboutContent.education.map(({ years, degree, school }) => (
            <li key={years}>
              <span className="home-education-years">{years}</span>
              <h4>{degree}</h4><p>{school}</p>
            </li>
          ))}
        </ol>
      </div>
      <div className="home-about-section home-research">
        <h3 className="home-editorial-heading">Research</h3>
        <div className="home-research-entry">
          <a href={assetUrl(research.href)} target="_blank" rel="noopener noreferrer">
            {research.title}<span aria-hidden="true">↗</span>
          </a>
          <p>
            {research.type} · <span className="home-research-institution">{research.institution}</span>
            <span className="home-research-institution-short">{research.institutionShort}</span> · {research.year}
          </p>
        </div>
      </div>
      <div className="home-about-section" aria-labelledby="home-cv-heading">
        <h3 id="home-cv-heading" className="home-editorial-heading">CV</h3>
        <div className="home-cv-links">
          {aboutContent.cvFiles.map(({ language, lang, href }) => (
            <a key={lang} href={assetUrl(href)} hrefLang={lang} target="_blank" rel="noopener noreferrer" aria-label={`CV, ${language}, PDF`}>{language}<span aria-hidden="true">↗</span></a>
          ))}
        </div>
      </div>
    </section>
  );
}
