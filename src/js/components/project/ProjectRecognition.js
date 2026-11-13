import React from "react";
import { assetUrl } from "../../sitePaths";

/** Recognition shares the story layout. Award descriptions remain available
 * as image alternatives without repeating the artwork in visible captions. */
export default function ProjectRecognition({ awards }) {
  // Text-only recognition follows the same two-column layout as exhibitions.
  if (awards.every(({ src }) => !src)) {
    return (
      <section className="case-story-row" aria-labelledby="case-recognition-heading">
        <h2 id="case-recognition-heading">Recognition</h2>
        {awards.length === 1 ? <p>{awards[0].alt}</p> : (
          <ul className="case-exhibitions">{awards.map(({ alt }) => <li key={alt}>{alt}</li>)}</ul>
        )}
      </section>
    );
  }
  return (
    <section className="case-story-row" aria-labelledby="case-recognition-heading">
      <h2 id="case-recognition-heading">Recognition</h2>
      <ul className="case-awards">
        {awards.map(({ src, alt }) => (
          <li key={src || alt}>
            {src ? <div className="case-award-image"><img src={assetUrl(src)} alt={alt} loading="lazy" width="400" height="266" /></div> : <p>{alt}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
