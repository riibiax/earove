import React from "react";

const ProjectVideo = ({ src, className = "", iframeProps = {} }) => (
  <div className={`container-fluid remove-paddings-margins ${className}`.trim()}>
    <div className="row justify-content-center remove-paddings-margins">
      <div className="col-md-8 d-flex justify-content-center">
        <div className={`embed-responsive embed-responsive-16by9 movie ${iframeProps.vimeo ? "movieVimeo" : ""}`.trim()}>
          <iframe
            className="embed-responsive-item"
            src={src}
            referrerPolicy={iframeProps.referrerPolicy}
            allowFullScreen
            title={iframeProps.title || "Project video"}
          />
        </div>
      </div>
    </div>
  </div>
);

export default ProjectVideo;
