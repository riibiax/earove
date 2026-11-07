import React from "react";

/** Existing award artwork uses white lettering, so retain a dark display field.
 * The accompanying captions make nominations and wins readable as text too. */
export default function ProjectRecognition({ awards }) {
  return (
    <section className="case-recognition" aria-labelledby="case-recognition-heading">
      <h2 id="case-recognition-heading">Recognition</h2>
      <ul className="case-awards">
        {awards.map(({ src, alt }) => (
          <li key={src}>
            <div className="case-award-image"><img src={src} alt="" loading="lazy" width="400" height="266" /></div>
            <p>{alt}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
