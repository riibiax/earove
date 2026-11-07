import React from "react";

/** Highlight exact phrases while keeping the content as plain text, not HTML. */
export default function CaseStudyText({ text, highlights = [] }) {
  const phrases = highlights.filter(Boolean);
  if (!phrases.length) return text;

  const parts = [];
  let cursor = 0;
  while (cursor < text.length) {
    const next = phrases
      .map((phrase) => ({ phrase, position: text.indexOf(phrase, cursor) }))
      .filter(({ position }) => position >= 0)
      .sort((a, b) => a.position - b.position || b.phrase.length - a.phrase.length)[0];

    if (!next) {
      parts.push(text.slice(cursor));
      break;
    }
    parts.push(text.slice(cursor, next.position));
    parts.push(<span className="case-accent" key={next.position}>{next.phrase}</span>);
    cursor = next.position + next.phrase.length;
  }
  return <>{parts}</>;
}
