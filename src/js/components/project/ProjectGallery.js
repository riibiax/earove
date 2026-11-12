import React, { useEffect, useId, useRef, useState } from "react";
import { assetUrl } from "../../sitePaths";

/** Each selection gets its own loading state, including cached images and retry.
 * A failed request shows an explanation instead of an empty black frame. */
function GalleryImage({ image, onReady, onFailure, announce = true }) {
  const [status, setStatus] = useState("loading");
  const [attempt, setAttempt] = useState(0);
  const retry = () => {
    setStatus("loading");
    setAttempt((current) => current + 1);
  };

  return (
    <>
      <img key={attempt} src={assetUrl(image.src)} alt={image.alt} width={image.width || 1920} height={image.height || 1057}
        decoding="async" hidden={status === "error"}
        onLoad={() => { setStatus("ready"); onReady?.(); }}
        onError={() => { setStatus("error"); onFailure?.(); }} />
      {status !== "ready" && (
        <div className="case-image-status" role={announce ? "status" : undefined}>
          {status === "error" ? (
            <div><p>This image couldn’t load.</p><button type="button" onClick={retry}>Try again</button></div>
          ) : <p>Loading image…</p>}
        </div>
      )}
    </>
  );
}

const AUTO_ADVANCE_MS = 5000;

/** Five-second slideshow with manual controls. Rotation pauses off screen,
 * in hidden tabs, on image hover, and while the enlarged dialog is open.
 * Manual navigation stops rotation until the visitor presses Play. */
export default function ProjectGallery({ images, title }) {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [playing, setPlaying] = useState(() => typeof window !== "undefined" && !window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const [hovered, setHovered] = useState(false);
  const [inView, setInView] = useState(false);
  const [pageVisible, setPageVisible] = useState(() => typeof document !== "undefined" && !document.hidden);
  const [loadedSource, setLoadedSource] = useState(null);
  const stageRef = useRef(null);
  const dialogRef = useRef(null);
  const touchStart = useRef(null);
  const headingId = useId();
  const image = images[index];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting && entry.intersectionRatio >= 0.25), { threshold: [0, 0.25] });
    observer.observe(stageRef.current);
    const updateVisibility = () => setPageVisible(!document.hidden);
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const respectReducedMotion = () => { if (motionPreference.matches) setPlaying(false); };
    document.addEventListener("visibilitychange", updateVisibility);
    motionPreference.addEventListener("change", respectReducedMotion);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", updateVisibility);
      motionPreference.removeEventListener("change", respectReducedMotion);
    };
  }, []);

  useEffect(() => {
    if (!playing || hovered || !inView || !pageVisible || expanded || loadedSource !== image.src || images.length < 2) return undefined;
    // Start a fresh five seconds after the selected image has actually loaded.
    const timer = window.setTimeout(() => setIndex((current) => (current + 1) % images.length), AUTO_ADVANCE_MS);
    return () => window.clearTimeout(timer);
  }, [index, image.src, images.length, playing, hovered, inView, pageVisible, expanded, loadedSource]);

  useEffect(() => {
    if (!expanded) return undefined;
    dialogRef.current.showModal();
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = originalOverflow; };
  }, [expanded]);

  const move = (direction) => {
    setPlaying(false);
    setIndex((current) => (current + direction + images.length) % images.length);
  };
  const close = () => dialogRef.current.close();
  const handleKeyDown = (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey || images.length < 2) return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      move(event.key === "ArrowLeft" ? -1 : 1);
    }
  };

  // Ignore vertical gestures so reading/scrolling never changes a slide.
  const startSwipe = (event) => {
    setPlaying(false);
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };
  const finishSwipe = (event) => {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start || images.length < 2) return;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - start.x;
    const dy = touch.clientY - start.y;
    if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.3) move(dx < 0 ? 1 : -1);
  };
  const cancelSwipe = () => { touchStart.current = null; };

  const controls = (inDialog = false) => (
    <div className="case-gallery-toolbar">
      <div className="case-gallery-arrows">
        <button type="button" aria-label="Previous image" onClick={() => move(-1)} disabled={images.length < 2}>←</button>
        <span className="case-gallery-count" aria-live={playing && !expanded ? "off" : "polite"} aria-atomic="true">{index + 1} / {images.length}</span>
        <button type="button" aria-label="Next image" onClick={() => move(1)} disabled={images.length < 2}>→</button>
      </div>
      {inDialog ? (
        <button type="button" onClick={close}>Close <span aria-hidden="true">×</span></button>
      ) : (
        <div className="case-gallery-actions">
          {images.length > 1 && (
            <button type="button" aria-label={playing ? "Pause slideshow" : "Play slideshow"}
              title={playing ? "Pause slideshow" : "Play slideshow"} aria-pressed={playing}
              onClick={() => setPlaying((current) => !current)}>
              <span aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span>
            </button>
          )}
          <button type="button" onClick={() => { setPlaying(false); setExpanded(true); }}>Enlarge <span aria-hidden="true">↗</span></button>
        </div>
      )}
    </div>
  );

  return (
    <section className="case-gallery" aria-labelledby={headingId} onKeyDown={handleKeyDown}
      onFocusCapture={(event) => {
        // Keyboard visitors can read and navigate without moving content.
        if (!event.currentTarget.contains(event.relatedTarget) && event.target.matches(":focus-visible")) setPlaying(false);
      }}>
      <div className="case-gallery-heading">
        <h2 id={headingId}>The experience in detail.</h2>
        <p className="case-label">IMAGE GALLERY</p>
      </div>
      <figure>
        <div ref={stageRef} className="case-gallery-stage"
          onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
          onTouchStart={startSwipe} onTouchEnd={finishSwipe} onTouchCancel={cancelSwipe}>
          <GalleryImage key={image.src} image={image} announce={!playing}
            onReady={() => setLoadedSource(image.src)} onFailure={() => setLoadedSource(null)} />
        </div>
        {controls()}
        <figcaption className="case-caption">{image.caption || image.alt}</figcaption>
      </figure>
      <div className="case-gallery-thumbnails" aria-label="Choose a gallery image">
        {images.map((entry, imageIndex) => (
          <button type="button" key={entry.src} aria-label={`Show image ${imageIndex + 1} of ${images.length}`}
            aria-pressed={imageIndex === index} onClick={() => { setPlaying(false); setIndex(imageIndex); }}>
            <img src={assetUrl(entry.src)} alt="" loading="lazy" width={entry.width || 1920} height={entry.height || 1057} />
          </button>
        ))}
      </div>
      <dialog ref={dialogRef} className="case-gallery-dialog" aria-label={`${title} enlarged image gallery`} onClose={() => setExpanded(false)}>
        {expanded && (
          <div className="case-gallery-modal-content">
            {controls(true)}
            <div className="case-gallery-expanded-stage" onTouchStart={startSwipe} onTouchEnd={finishSwipe} onTouchCancel={cancelSwipe}>
              <GalleryImage key={image.src} image={image} />
            </div>
            <p className="case-caption">{image.caption || image.alt}</p>
          </div>
        )}
      </dialog>
    </section>
  );
}
