import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const Commercial = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("nav-office-space");

  useEffect(() => {
    // Set active tab based on URL hash or navigation state
    const hash = window.location.hash;
    if (hash) {
      const tabId = hash.replace("#", "");
      setActiveTab(tabId);
    } else if (location.state?.activeTab) {
      setActiveTab(location.state.activeTab);
    }
  }, [location]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    window.history.replaceState({}, "", `#${tabId}`);
  };

  const isTabActive = (tabId) => {
    return activeTab === tabId ? "show active" : "";
  };

  return (
    <>
      <nav aria-label="breadcrumb mt-5 mb-5">
        <ol className="breadcrumb">
          {/* Breadcrumb items can be added here if needed */}
        </ol>
      </nav>
      <nav>
        <div className="nav nav-tabs mt-5" id="nav-tab" role="tablist">
          <button
            className={`nav-link ${activeTab === "nav-office-space" ? "active" : ""}`}
            id="nav-office-space-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-office-space"
            type="button"
            role="tab"
            aria-controls="nav-office-space"
            aria-selected={activeTab === "nav-office-space"}
            onClick={() => handleTabClick("nav-office-space")}
          >
            Office Space
          </button>
          <button
            className={`nav-link ${activeTab === "nav-mall" ? "active" : ""}`}
            id="nav-mall-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-mall"
            type="button"
            role="tab"
            aria-controls="nav-mall"
            aria-selected={activeTab === "nav-mall"}
            onClick={() => handleTabClick("nav-mall")}
          >
            Shopping Malls
          </button>
          <button
            className={`nav-link ${activeTab === "nav-hotel" ? "active" : ""}`}
            id="nav-hotel-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-hotel"
            type="button"
            role="tab"
            aria-controls="nav-hotel"
            aria-selected={activeTab === "nav-hotel"}
            onClick={() => handleTabClick("nav-hotel")}
          >
            Hotels
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        {/* Office Space Tab */}
        <div
          className={`tab-pane fade ${isTabActive("nav-office-space")}`}
          id="nav-office-space"
          role="tabpanel"
          aria-labelledby="nav-office-space-tab"
          tabIndex="0"
        >
          <div className="section section-padding">
            <div className="container">
              <div className="project-details-wrap">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="project-details-content mb-4 mb-md-9">
                      <span className="category">Interior</span>
                      <h2 className="title">
                        Office Space <span className="Decosmith">Gallery</span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-3 row-cols-1 mb-n6">
                  {[1, 2, 3].map((num) => (
                    <div className="col mb-6" key={`office-${num}`}>
                      <div className="project-details-img">
                        <img
                          src={`assets/images/project/office-mall${num}.jpg`}
                          alt={`Office Space ${num}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shopping Malls Tab */}
        <div
          className={`tab-pane fade ${isTabActive("nav-mall")}`}
          id="nav-mall"
          role="tabpanel"
          aria-labelledby="nav-mall-tab"
          tabIndex="0"
        >
          <div className="section section-padding">
            <div className="container">
              <div className="project-details-wrap">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="project-details-content mb-4 mb-md-9">
                      <span className="category">Interior</span>
                      <h2 className="title">
                        Shopping Malls <span className="Decosmith">Gallery</span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-3 row-cols-1 mb-n6">
                  {[1, 2, 3].map((num) => (
                    <div className="col mb-6" key={`mall-${num}`}>
                      <div className="project-details-img">
                        <img
                          src={`assets/images/project/MallsGallery${num}.jpg`}
                          alt={`Shopping Mall ${num}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="section section-padding pt-0">
            <div className="container">
              <div className="section-title text-center mb-lg-9 mb-md-7 mb-5">
                <h2 className="title">
                   Shopping Malls Design <span>renovation</span>
                </h2>
              </div>
              <div className="complir_sec">
                <ReactCompareSlider
                  changePositionOnHover={false}
                  itemOne={
                    <ReactCompareSliderImage
                      src="assets/images/project/MallsGallery3.jpg"
                      srcSet="assets/images/project/MallsGallery3.jpg"
                      alt="Before renovation"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="assets/images/project/MallsGallery2.jpg"
                      srcSet="assets/images/project/MallsGallery2.jpg"
                      alt="After renovation"
                    />
                  }
                />
              </div>
            </div>
          </div>
        </div>

        {/* Hotels Tab */}
        <div
          className={`tab-pane fade ${isTabActive("nav-hotel")}`}
          id="nav-hotel"
          role="tabpanel"
          aria-labelledby="nav-hotel-tab"
          tabIndex="0"
        >
          <div className="section section-padding">
            <div className="container">
              <div className="project-details-wrap">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="project-details-content mb-4 mb-md-9">
                      <span className="category">Interior</span>
                      <h2 className="title">
                        Hotels <span className="Decosmith">Gallery</span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-3 row-cols-1 mb-n6">
                  {[1, 2, 3].map((num) => (
                    <div className="col mb-6" key={`hotel-${num}`}>
                      <div className="project-details-img">
                        <img
                          src={`assets/images/project/hotel-gallery${num}.jpg`}
                          alt={`Hotel ${num}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="section section-padding pt-0">
            <div className="container">
              <div className="section-title text-center mb-lg-9 mb-md-7 mb-5">
                <h2 className="title">
                  Hotels Design <span>renovation</span>
                </h2>
              </div>
              <div className="complir_sec">
                <ReactCompareSlider
                  changePositionOnHover={false}
                  itemOne={
                    <ReactCompareSliderImage
                      src="assets/images/project/hotel-gallery3.jpg"
                      srcSet="assets/images/project/hotel-gallery3.jpg"
                      alt="Before renovation"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="assets/images/project/hotel-gallery4.jpg"
                      srcSet="assets/images/project/hotel-gallery4.jpg"
                      alt="After renovation"
                    />
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Commercial;