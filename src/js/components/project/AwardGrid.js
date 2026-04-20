import React from "react";

/**
 * Converts a row length into an equal Bootstrap column width.
 */
const getColumnClass = (columns) => `col-md-${12 / columns} d-flex justify-content-center`;

/**
 * Displays project award badges in centered Bootstrap rows.
 */
const AwardGrid = ({ rows, className = "py-4" }) => (
  <div className={`container ${className}`.trim()}>
    {rows.map((row, rowIndex) => (
      <div className="row justify-content-center awards" key={rowIndex}>
        {row.map((award) => (
          <div className={getColumnClass(row.length)} key={award.src}>
            <img src={award.src} alt={award.alt || ""} className="img-fluid" />
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default AwardGrid;
