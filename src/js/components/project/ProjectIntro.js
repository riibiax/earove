import React from "react";

const ProjectIntro = ({ title, left, right }) => (
  <div className="colsContainer container-fluid remove-paddings-margins">
    <div className="row justify-content-center remove-paddings-margins">
      <div className="col-md-12">
        <div className="row remove-paddings-margins projectDescriptionRow">
          <div className="col-md-6 projectDescriptionColumn">
            <p className="titleContainer">{title}</p>
            {left}
          </div>
          <div className="col-md-6 projectDescriptionColumn">
            <p className="titleContainer projectDescriptionTitleSpacer" aria-hidden="true">{title}</p>
            {right}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectIntro;
