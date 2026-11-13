import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { projectPath } from "../../sitePaths";
import { archiveProjects, featuredProjects, homeContent } from "../home/homeContent";
import HomeFooter from "../home/HomeFooter";
import ProjectGallery from "./ProjectGallery";
import ProjectFilm from "./ProjectFilm";
import CaseStudyText from "./CaseStudyText";
import ProjectRecognition from "./ProjectRecognition";
import ProjectHero from "./ProjectHero";
import "../../../css/homepage.css";
import "../../../css/caseStudy.css";

// Archive entries can follow a related case study without becoming featured.
const projectOrder = [...featuredProjects, ...archiveProjects];
for (const project of archiveProjects) {
  if (!project.navigationAfter) continue;
  const anchor = projectOrder.find(({ path }) => path === project.navigationAfter);
  if (!anchor || anchor === project) continue;
  projectOrder.splice(projectOrder.indexOf(project), 1);
  projectOrder.splice(projectOrder.indexOf(anchor) + 1, 0, project);
}

function StorySection({ title, children, highlights }) {
  return (
    <section className="case-story-row">
      <h2>{title}</h2>
      <p><CaseStudyText text={children} highlights={highlights} /></p>
    </section>
  );
}

/** Shared layout for every project. Content, credits and media stay in their
 * own modules. Project-specific media can be passed as children. */
export default function ProjectCaseStudy({ project, children }) {
  useLayoutEffect(() => {
    document.body.classList.add("case-study-active");
    window.scrollTo({ top: 0, behavior: "instant" });
    return () => document.body.classList.remove("case-study-active");
  }, [project.path]);

  const position = projectOrder.findIndex(({ path }) => path === project.path);
  const previous = projectOrder[(position - 1 + projectOrder.length) % projectOrder.length];
  const next = projectOrder[(position + 1) % projectOrder.length];
  // A cover is shown once, even when an older gallery still lists that file.
  const gallery = project.gallery?.filter((image) => image.src !== project.hero.src);

  return (
    <div className="case-study">
      <header className="case-header case-shell">
        <Link className="case-wordmark" to="/" reloadDocument>{homeContent.name}</Link>
        <Link className="case-all-projects" to="/#projects" reloadDocument>All projects <span aria-hidden="true">↗</span></Link>
      </header>
      <main className="case-shell">
        <section className="case-intro" aria-labelledby="case-title">
          <p className="case-label">{project.section || "SELECTED WORK"} / {project.category.toUpperCase()}</p>
          <div className="case-title-line">
            <h1 id="case-title">{project.title}<span className="case-accent">.</span></h1>
            <p className="case-deck"><CaseStudyText text={project.introduction} highlights={project.highlights} /></p>
          </div>
          <dl className="case-credits">
            {project.credits.map(({ label, value }) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
          </dl>
        </section>
        <ProjectHero key={project.hero.src} image={project.hero} />
        <div className="case-story">
          <StorySection title="Context" highlights={project.highlights}>{project.context}</StorySection>
          <StorySection title="Approach" highlights={project.highlights}>{project.approach}</StorySection>
        </div>
        {project.videos?.map((video) => <ProjectFilm key={video.src} video={video} />)}
        {children}
        {gallery?.length > 0 && <ProjectGallery key={project.path} images={gallery} title={project.title} />}
        <StorySection title="Impact" highlights={project.highlights}>{project.impact}</StorySection>
        {project.recognition?.length > 0 && <ProjectRecognition awards={project.recognition} />}
        {project.exhibitions?.length > 0 && (
          <section className="case-story-row" aria-labelledby="case-exhibitions-heading">
            <h2 id="case-exhibitions-heading">Exhibitions</h2>
            <ul className="case-exhibitions">{project.exhibitions.map((exhibition) => <li key={exhibition}>{exhibition}</li>)}</ul>
          </section>
        )}
        <section className="case-contribution" aria-labelledby="case-contribution-heading">
          <h2 id="case-contribution-heading">My contribution</h2>
          <div>
            <p><CaseStudyText text={project.contribution} highlights={project.highlights} /></p>
            {project.technologies?.length > 0 && <dl className="case-technologies"><dt>Technologies</dt><dd>{project.technologies.join(" · ")}</dd></dl>}
            {project.notes?.length > 0 && <dl className="case-notes">
              {project.notes.map(({ label, text }) => <div key={label}><dt>{label}</dt><dd>{text}</dd></div>)}
            </dl>}
            {project.links?.length > 0 && <ul className="case-links" aria-label="Project links">
              {project.links.map(({ label, href }) => <li key={href}><a href={href} target="_blank" rel="noopener noreferrer">{label} <span aria-hidden="true">↗</span></a></li>)}
            </ul>}
          </div>
        </section>
        <nav className="case-project-navigation" aria-label="Project navigation">
          <Link to={projectPath(previous.path)} rel="prev" reloadDocument><span className="case-label">← PREVIOUS PROJECT</span><span>{previous.title}</span></Link>
          <Link className="case-project-index" to="/#projects" reloadDocument>All projects</Link>
          <Link className="case-project-next" to={projectPath(next.path)} rel="next" reloadDocument><span className="case-label">NEXT PROJECT →</span><span>{next.title}</span></Link>
        </nav>
      </main>
      <div className="editorial-home"><HomeFooter /></div>
    </div>
  );
}
