import React, { useState } from "react";
import { Link } from "react-router-dom";
import { projectPath } from "../../sitePaths";
import ProjectCard from "./ProjectCard";
import { archiveProjects, featuredProjects } from "./homeContent";

export default function SelectedWork() {
  const [archiveOpen, setArchiveOpen] = useState(false);
  const pairs = [];
  for (let index = 0; index < featuredProjects.length; index += 2) pairs.push(featuredProjects.slice(index, index + 2));

  return (
    <section className="home-work" id="projects" tabIndex={-1} aria-labelledby="home-work-heading">
      <div className="home-section-heading">
        <h2 id="home-work-heading" className="home-editorial-heading">Selected work</h2>
        <p>Engineering · Design · Research</p>
      </div>
      <div className="home-project-pairs">
        {pairs.map((pair, pairIndex) => <div className="home-project-pair" key={pair[0].path}>
          {pair.map((project, index) => <ProjectCard key={project.path} project={project} priority={pairIndex === 0 && index === 0} />)}
        </div>)}
      </div>
      <div className="home-work-end">
        <button type="button" className="home-archive-toggle" aria-expanded={archiveOpen} aria-controls="home-project-archive" onClick={() => setArchiveOpen((open) => !open)}>
          {archiveOpen ? "Close project archive" : "Explore all projects"}<span aria-hidden="true">{archiveOpen ? "−" : "+"}</span>
        </button>
        <p>Software, space & play.</p>
      </div>
      <div className="home-archive" id="home-project-archive" hidden={!archiveOpen}>
        <h3>More projects</h3>
        <ul className="home-archive-list">{archiveProjects.map(({ path, title }) => <li key={path}><Link to={projectPath(path)} reloadDocument>{title}<span aria-hidden="true">↗</span></Link></li>)}</ul>
      </div>
    </section>
  );
}
