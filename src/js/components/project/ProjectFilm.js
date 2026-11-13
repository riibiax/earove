import React from "react";
import { assetUrl } from "../../sitePaths";
import YouTubeFilm from "./YouTubeFilm";
import { responsiveImage } from "../../responsiveImage";

/** Standalone video, never mixed into the image gallery.
 * Embed: { type: "embed", src: "https://www.youtube-nocookie.com/embed/ID", title, caption }
 * Local: { type: "file", src: "img/project/film.mp4", poster, title, caption }
 * Use provider embed URLs without autoplay parameters. */
export default function ProjectFilm({ video }) {
  const isYouTube = /^https:\/\/(www\.)?youtube(-nocookie)?\.com\/embed\//.test(video.src);
  const poster = video.poster ? responsiveImage({ src: video.poster }) : null;
  // Video posters have no srcset; use a web-sized candidate for the preview.
  const posterSrc = poster?.sources?.find((source) => source.width >= 1280)?.src || poster?.src;
  return (
    <figure className="case-film">
      {isYouTube ? <YouTubeFilm video={video} /> : (
        <div className="case-film-player">
          {video.type === "file" ? (
            <video controls playsInline preload="none" poster={posterSrc ? assetUrl(posterSrc) : undefined} aria-label={video.title}>
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
