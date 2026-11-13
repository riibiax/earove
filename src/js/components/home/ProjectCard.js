import React from "react";
import { Link } from "react-router-dom";
import { assetUrl, imageSrcSet, projectPath } from "../../sitePaths";
import { responsiveImage } from "../../responsiveImage";

/** Image and caption share one accessible link, avoiding duplicate tab stops. */
export default function ProjectCard({ project, priority = false }) {
  const image = responsiveImage({ src: project.thumbnail });
  return (
    <article className="home-project">
      <Link className="home-project-link" to={projectPath(project.path)} reloadDocument>
        <div className="home-project-media">
          <img src={assetUrl(image.src)} srcSet={imageSrcSet(image.sources)} sizes="(max-width: 640px) calc(100vw - 48px), 45vw" width={image.width} height={image.height} alt="" loading={priority ? "eager" : "lazy"} fetchPriority={priority ? "high" : "auto"} decoding="async"
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
