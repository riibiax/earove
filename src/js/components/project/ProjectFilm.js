import React from "react";

/** Standalone video, never mixed into the image gallery.
 * Embed: { type: "embed", src: "https://www.youtube-nocookie.com/embed/ID", title, caption }
 * Local: { type: "file", src: "img/project/film.mp4", poster, title, caption }
 * Use provider embed URLs without autoplay parameters. */
export default function ProjectFilm({ video }) {
  return (
    <figure className="case-film">
      <div className="case-film-player">
        {video.type === "file" ? (
          <video controls playsInline preload="none" poster={video.poster} aria-label={video.title}>
            <source src={video.src} />
          </video>
        ) : (
          <iframe src={video.src} title={video.title} loading="lazy"
            allow="encrypted-media; picture-in-picture; fullscreen"
            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
        )}
      </div>
      {video.caption && <figcaption className="case-caption">{video.caption}</figcaption>}
    </figure>
  );
}
