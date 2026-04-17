import React from "react";

const getColumnClass = (columns) => `col-md-${12 / columns} d-flex justify-content-center`;

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
