import React, { useEffect, useRef, useState } from "react";

let apiPromise;
function loadYouTubeApi() {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (!apiPromise) {
    apiPromise = new Promise((resolve, reject) => {
      const previousReady = window.onYouTubeIframeAPIReady;
      const timeout = window.setTimeout(() => reject(new Error("YouTube did not respond.")), 15000);
      window.onYouTubeIframeAPIReady = () => {
        window.clearTimeout(timeout);
        previousReady?.();
        resolve(window.YT);
      };
      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      script.onerror = () => {
        window.clearTimeout(timeout);
        reject(new Error("YouTube could not load."));
      };
      document.head.appendChild(script);
    });
  }
  return apiPromise;
}

/** Official player API keeps the footer in sync with native player actions.
 * Native controls remain available for captions, volume and fullscreen. */
export default function YouTubeFilm({ video }) {
  const frameRef = useRef(null);
  const playerRef = useRef(null);
  const [ready, setReady] = useState(false);
  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);
  const videoUrl = new URL(video.src);
  videoUrl.searchParams.set("enablejsapi", "1");
  videoUrl.searchParams.set("playsinline", "1");
  videoUrl.searchParams.set("controls", "1");
  if (typeof window !== "undefined") videoUrl.searchParams.set("origin", window.location.origin);
  const videoId = videoUrl.pathname.split("/").pop();
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`;

  useEffect(() => {
    if (!started) return undefined;
    let disposed = false;
    let readyTimeout;
    loadYouTubeApi().then((YT) => {
      if (disposed) return;
      readyTimeout = window.setTimeout(() => { if (!disposed) setError(true); }, 15000);
      playerRef.current = new YT.Player(frameRef.current, {
        events: {
          onReady: () => {
            window.clearTimeout(readyTimeout);
            if (!disposed) {
              setReady(true);
              setError(false);
              playerRef.current.playVideo();
            }
          },
          onStateChange: ({ data }) => { if (!disposed) setPlaying(data === YT.PlayerState.PLAYING); },
          onError: () => {
            window.clearTimeout(readyTimeout);
            if (!disposed) { setError(true); setReady(false); setPlaying(false); }
          },
        },
      });
    }).catch(() => { if (!disposed) setError(true); });
    return () => {
      disposed = true;
      window.clearTimeout(readyTimeout);
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [video.src, started]);

  return (
    <>
      <div className="case-film-player">
        {started ? <iframe ref={frameRef} src={videoUrl.href} title={video.title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          : <img className="case-film-poster" src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
              alt={`Video preview: ${video.title}`} width="480" height="360" loading="lazy" decoding="async" />}
      </div>
      <div className="case-film-toolbar" role="group" aria-label={`${video.title} playback controls`}>
        <button type="button" disabled={started && (!ready || error)} aria-label={`${playing ? "Pause" : "Play"} ${video.title}`}
          onClick={() => !started ? setStarted(true) : playing ? playerRef.current?.pauseVideo() : playerRef.current?.playVideo()}>
          <span aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span> {started && !ready && !error ? "Loading…" : playing ? "Pause" : "Play"}
        </button>
        {error && <span className="case-film-status" role="status">Use the player or watch on YouTube.</span>}
        <a href={watchUrl} target="_blank" rel="noopener noreferrer">Watch on YouTube ↗</a>
      </div>
    </>
  );
}
