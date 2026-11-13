import React from "react";
import { assetUrl } from "../../sitePaths";
import YouTubeFilm from "./YouTubeFilm";

/** Standalone video, never mixed into the image gallery.
 * Embed: { type: "embed", src: "https://www.youtube-nocookie.com/embed/ID", title, caption }
 * Local: { type: "file", src: "img/project/film.mp4", poster, title, caption }
 * Use provider embed URLs without autoplay parameters. */
export default function ProjectFilm({ video }) {
  const isYouTube = /^https:\/\/(www\.)?youtube(-nocookie)?\.com\/embed\//.test(video.src);
  return (
    <figure className="case-film">
      {isYouTube ? <YouTubeFilm video={video} /> : (
        <div className="case-film-player">
          {video.type === "file" ? (
            <video controls playsInline preload="none" poster={assetUrl(video.poster)} aria-label={video.title}>
              <source src={assetUrl(video.src)} />
            </video>
          ) : (
            <iframe src={video.src} title={video.title} loading="lazy"
              allow="encrypted-media; picture-in-picture; fullscreen"
              referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          )}
        </div>
      )}
      {video.caption && <figcaption className="case-caption">{video.caption}</figcaption>}
    </figure>
  );
}
