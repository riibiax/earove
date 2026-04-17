import React, { useState } from "react";
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

const ProjectCarousel = ({ images, className = "" }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevious = () => {
    setActiveIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  };

  const goToNext = () => {
    setActiveIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  };

  return (
    <div className={`projectCarousel container-fluid remove-paddings-margins ${className}`.trim()}>
      <div className="row justify-content-center remove-paddings-margins">
        <div className="col-md-8 remove-paddings-margins">
          <Carousel
            activeIndex={activeIndex}
            controls={false}
            fade
            indicators={false}
            interval={3000}
            onSelect={setActiveIndex}
          >
            {images.map((src, index) => (
              <Carousel.Item key={src}>
                <img className="d-block w-100" src={src} alt={getSlideAlt(index)} />
              </Carousel.Item>
            ))}
          </Carousel>
          <div className="projectCarouselNav">
            <button className="projectCarouselArrow" type="button" onClick={goToPrevious} aria-label="Previous slide">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
            </button>
            <div className="carousel-indicators">
              {images.map((src, index) => (
                <button
                  aria-current={activeIndex === index ? "true" : undefined}
                  aria-label={`Go to ${getSlideAlt(index)}`}
                  className={activeIndex === index ? "active" : ""}
                  key={src}
                  onClick={() => setActiveIndex(index)}
                  type="button"
                />
              ))}
            </div>
            <button className="projectCarouselArrow" type="button" onClick={goToNext} aria-label="Next slide">
              <span className="carousel-control-next-icon" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
