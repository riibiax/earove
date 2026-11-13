import React from "react";
import { assetUrl } from "../../sitePaths";

/** Existing award artwork uses white lettering, so retain a dark display field.
 * The accompanying captions make nominations and wins readable as text too. */
export default function ProjectRecognition({ awards }) {
  // Text-only recognition follows the same two-column layout as exhibitions.
  if (awards.every(({ src }) => !src)) {
    return (
      <section className="case-story-row" aria-labelledby="case-recognition-heading">
        <h2 id="case-recognition-heading">Recognition</h2>
        <ul className="case-exhibitions">{awards.map(({ alt }) => <li key={alt}>{alt}</li>)}</ul>
      </section>
    );
  }
  return (
    <section className="case-recognition" aria-labelledby="case-recognition-heading">
      <h2 id="case-recognition-heading">Recognition</h2>
      <ul className="case-awards">
        {awards.map(({ src, alt }) => (
          <li key={src || alt}>
            {src && <div className="case-award-image"><img src={assetUrl(src)} alt="" loading="lazy" width="400" height="266" /></div>}
            <p>{alt}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
