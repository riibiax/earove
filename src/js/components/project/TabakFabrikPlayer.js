import React, { useEffect, useRef, useState } from "react";
import { assetUrl } from "../../sitePaths";
import "../../../css/tabakFabrikPlayer.css";

const stateLabels = {
  loading: "Loading visualization…",
  playing: "Playing",
  paused: "Paused",
  error: "The visualization couldn’t load. Try Play again or explore the gallery below.",
};

const playerPath = assetUrl("visualizations/tabak-fabrik/TabakFabrikWebsite.html");

export default function TabakFabrikPlayer() {
  const [status, setStatus] = useState("stopped");
  const frame = useRef(null);

  useEffect(() => {
    function onPlayerMessage(event) {
      if (event.origin !== window.location.origin || event.source !== frame.current?.contentWindow) return;
      if (event.data === "tabak-fabrik:ready") {
        setStatus(current => current === "loading" ? "playing" : current);
      }
      if (event.data === "tabak-fabrik:error") setStatus("error");
    }

    window.addEventListener("message", onPlayerMessage);
    return () => window.removeEventListener("message", onPlayerMessage);
  }, []);

  function play() {
    if (status === "paused") {
      frame.current.contentWindow.postMessage("tabak-fabrik:play", window.location.origin);
      setStatus("playing");
    } else {
      setStatus("loading");
    }
  }

  function pause() {
    frame.current.contentWindow.postMessage("tabak-fabrik:pause", window.location.origin);
    setStatus("paused");
  }

  const showScene = status === "playing" || status === "paused";
  const showLauncher = status === "stopped" || status === "error";

  return (
    <section className="tabak-player" aria-labelledby="tabak-player-title">
      <div className="case-gallery-heading">
        <h2 id="tabak-player-title">Interactive visualization</h2>
        <p className="case-label">ORIGINAL THREE.JS ANIMATION</p>
      </div>
      <figure>
        <div className="tabak-player-stage">
          {!showLauncher && <iframe className="tabak-player-frame" ref={frame} src={playerPath} title="Tabak Fabrik animation" />}
          {showLauncher && (
            <button type="button" className="tabak-player-launch" onClick={play} aria-label="Play animation">
              <img src={assetUrl("img/controls/play.png")} width="132" height="108" alt="" />
            </button>
          )}
        </div>
        {status !== "stopped" && (
          <div className="tabak-player-toolbar" role="group" aria-label="Animation controls">
            {showScene && (
              <>
                <button type="button" onClick={play} disabled={status === "playing"}>Play</button>
                <button type="button" onClick={pause} disabled={status === "paused"}>Pause</button>
              </>
            )}
            {status !== "error" && <button type="button" onClick={() => setStatus("stopped")}>Stop</button>}
            <span className="tabak-player-status" role="status">{stateLabels[status]}</span>
          </div>
        )}
      </figure>
    </section>
  );
}
