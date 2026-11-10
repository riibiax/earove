import React from "react";
import { Link } from "react-router-dom";
import { assetUrl, projectPath } from "../../sitePaths";

/** Image and caption share one accessible link, avoiding duplicate tab stops. */
export default function ProjectCard({ project, priority = false }) {
  return (
    <article className="home-project">
      <Link className="home-project-link" to={projectPath(project.path)} reloadDocument>
        <div className="home-project-media">
          <img src={assetUrl(project.thumbnail)} alt="" loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} decoding="async"
            style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined} />
        </div>
        <div className="home-project-caption">
          <h3>{project.title}</h3>
          <span className="home-project-category">{project.category}<span className="home-project-arrow" aria-hidden="true">↗</span></span>
        </div>
        <p className="home-project-description">{project.description}</p>
      </Link>
    </article>
  );
}
