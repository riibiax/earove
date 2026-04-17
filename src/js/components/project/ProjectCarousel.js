import React from "react";
import Carousel from "react-bootstrap/Carousel";

const slideLabels = [
  "First",
  "Second",
  "Third",
  "Fourth",
  "Fifth",
  "Sixth",
  "Seventh",
  "Eighth",
  "Ninth",
  "Tenth",
];

const getSlideAlt = (index) => `${slideLabels[index] || `${index + 1}th`} slide`;

const ProjectCarousel = ({ images, className = "" }) => (
  <div className={`projectCarousel container-fluid remove-paddings-margins ${className}`.trim()}>
    <div className="row justify-content-center remove-paddings-margins">
      <div className="col-md-8 remove-paddings-margins">
        <Carousel fade interval={3000}>
          {images.map((src, index) => (
            <Carousel.Item key={src}>
              <img className="d-block w-100" src={src} alt={getSlideAlt(index)} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  </div>
);

export default ProjectCarousel;
