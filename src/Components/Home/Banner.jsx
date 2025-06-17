import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Banner = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Carousel responsive={responsive} infinite={true}>
        <div className="hero-area">
          <div className="hero-slider-active swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="intro-section height-100vh slider-content-center bg-img single-animation-wrap slider-bg-color-1 overly-style-1 opacity-point-4 background-slider1">
                  <div className="container hover_plx">
                    <div className="hero-content-1 slider-animated-1 text-center layer">
                      <h1 className="title animated">
                        Elevate Your Space with DekorLane
                      </h1>
                      <p className="animated">
                        Where Design Meets Individuality
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-area">
          <div className="hero-slider-active swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="intro-section height-100vh slider-content-center bg-img single-animation-wrap slider-bg-color-1 overly-style-1 opacity-point-4 background-slider2">
                  <div className="container hover_plx">
                    <div
                      className="hero-content-1 slider-animated-1 text-center layer"
                      data-depth="-0.7"
                    >
                      <h1 className="title animated">Your Space, Your Story</h1>
                      <p className="animated">
                        Unleash Creativity with DekorLane
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-area">
          <div className="hero-slider-active swiper">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="intro-section height-100vh slider-content-center bg-img single-animation-wrap slider-bg-color-1 overly-style-1 opacity-point-4 background-slider3">
                  <div className="container hover_plx">
                    <div
                      className="hero-content-1 slider-animated-1 text-center layer"
                      data-depth="-0.7"
                    >
                      <h1 className="title animated">
                        Exceptional Design, Unmatched Elegance
                      </h1>
                      <p className="animated">
                        Where Design Meets Individuality
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </>
  );
};

export default Banner;
