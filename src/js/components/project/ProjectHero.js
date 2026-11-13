import React, { useEffect, useRef, useState } from "react";
import { assetUrl, imageSrcSet } from "../../sitePaths";
import { responsiveImage } from "../../responsiveImage";

/** Reveal after loading, including a cached image loaded before hydration.
 * The server-rendered image stays visible when JavaScript is unavailable. */
export default function ProjectHero({ image }) {
  const media = responsiveImage(image);
  const imageRef = useRef(null);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    if (imageRef.current?.complete) setReady(true);
  }, [image.src]);
  return (
    <figure className="case-hero">
      <img ref={imageRef} className={ready ? "case-hero-image is-ready" : "case-hero-image"}
        src={assetUrl(media.src)} srcSet={imageSrcSet(media.sources)}
        sizes={media.sources ? "(max-width: 640px) calc(100vw - 48px), 92vw" : undefined}
        alt={image.alt} width={media.width || 1920} height={media.height || 1057}
        fetchPriority="high" decoding="async" onLoad={() => setReady(true)} onError={() => setReady(true)} />
      <figcaption className="case-caption">{image.caption}</figcaption>
    </figure>
  );
}
