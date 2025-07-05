import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const Product = () => {

  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("nav-home");

  useEffect(() => {
    if (location.state?.activeTab) {
      setActiveTab(location.state.activeTab);
    }
  }, [location.state]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  // Helper function to determine if a tab should be active
  const isTabActive = (tabId) => {
    return activeTab === tabId ? "show active" : "";
  };

  return (
    <>
      <nav aria-label="breadcrumb mt-5 mb-5">
        <ol class="breadcrumb">
          {/* <li class="breadcrumb-item">
            <a href="/">Home </a>
          </li>
          <li class="breadcrumb-item">
            <a href="/product"> / Residential</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            / Data
          </li> */}
        </ol>
      </nav>

      <nav>
        <div className="nav nav-tabs mt-5" id="nav-tab" role="tablist">
          <button
            className={`nav-link ${activeTab === "nav-home" ? "active" : ""}`}
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            type="button"
            role="tab"
            aria-controls="nav-home"
            aria-selected={activeTab === "nav-home"}
            onClick={() => handleTabClick("nav-home")}
          >
            Living room
          </button>
          <button
            className={`nav-link ${activeTab === "nav-profile" ? "active" : ""}`}
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            type="button"
            role="tab"
            aria-controls="nav-profile"
            aria-selected={activeTab === "nav-profile"}
            onClick={() => handleTabClick("nav-profile")}
          >
            Modular kitchen
          </button>
          <button
            className={`nav-link ${activeTab === "nav-ward" ? "active" : ""}`}
            id="nav-ward-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-ward"
            type="button"
            role="tab"
            aria-controls="nav-ward"
            aria-selected={activeTab === "nav-ward"}
            onClick={() => handleTabClick("nav-ward")}
          >
            Wardrobe
          </button>
          <button
            className={`nav-link ${activeTab === "nav-bed" ? "active" : ""}`}
            id="nav-bed-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-bed"
            type="button"
            role="tab"
            aria-controls="nav-bed"
            aria-selected={activeTab === "nav-bed"}
            onClick={() => handleTabClick("nav-bed")}
          >
            Bedroom
          </button>
          <button
            className={`nav-link ${activeTab === "nav-office" ? "active" : ""}`}
            id="nav-office-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-office"
            type="button"
            role="tab"
            aria-controls="nav-office"
            aria-selected={activeTab === "nav-office"}
            onClick={() => handleTabClick("nav-office")}
          >
            Home office
          </button>
          <button
            className={`nav-link ${activeTab === "nav-bath" ? "active" : ""}`}
            id="nav-bath-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-bath"
            type="button"
            role="tab"
            aria-controls="nav-bath"
            aria-selected={activeTab === "nav-bath"}
            onClick={() => handleTabClick("nav-bath")}
          >
            Bathroom
          </button>
        </div>
      </nav>

      <div class="tab-content" id="nav-tabContent">

        <div
          className={`tab-pane fade ${isTabActive("nav-home")}`}
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
          tabindex="0"
        >
          <div className="section section-padding">
            <div className="container">
              <div className="project-details-wrap">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="project-details-content mb-4 mb-md-9">
                      <span className="category">Interior</span>
                      <h2 className="title">
                        Living Room <span className="DekorLane">Gallery</span>
                      </h2>
                      <p>
                        Explore our living room gallery showcasing sleek and
                        modern designs, where clean lines and minimalistic
                        aesthetics create an atmosphere of contemporary
                        elegance. Discover timeless classics in our gallery,
                      </p>
                      <p>
                        where traditional furniture pieces and rich color
                        palettes come together to create a living room that
                        exudes enduring charm and sophistication Unleash your
                        creative side with our gallery of living rooms that
                        celebrate artistic expressions, featuring unique decor,
                        artwork, and eclectic furnishings that make a statement.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-3 row-cols-1 mb-n6">
                  <div className="col mb-6">
                    <div className="project-details-img">
                      <img
                        src="assets/images/project/living1.jpg"
                        alt="Project Image"
                      />
                    </div>
                  </div>
                  <div className="col mb-6">
                    <div className="project-details-img">
                      <img
                        src="assets/images/project/living2.jpg"
                        alt="Project Image"
                      />
                    </div>
                  </div>
                  <div className="col mb-6">
                    <div className="project-details-img">
                      <img
                        src="assets/images/project/living3.jpg"
                        alt="Project Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section section-padding pt-0 ">
            <div className="container">
              <div className="section-title text-center mb-lg-9 mb-md-7 mb-5">
                <h2 className="title">
                  Living Room Design <span> renovation</span>
                </h2>
                <p>
                  Step into the transformative journey of our interior designs
                  with our captivating Before & After showcase. Witness the
                  magic as we turn ordinary spaces into extraordinary living
                  experiences
                </p>
              </div>

              <div className="complir_sec">
                <ReactCompareSlider
                  changePositionOnHover={false}
                  itemOne={
                    <ReactCompareSliderImage
                      src="assets/images/project/living3.jpg"
                      srcSet="assets/images/project/living3.jpg"
                      alt="Image one"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="assets/images/project/living1.jpg"
                      srcSet="assets/images/project/living1.jpg"
                      alt="Image two"
                    />
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`tab-pane fade ${isTabActive("nav-profile")}`}
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
          tabindex="0"
        >
          <div className="section section-padding">
            <div className="container">
              <div className="project-details-wrap">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="project-details-content mb-4 mb-md-9">
                      <span className="category">Interior</span>
                      <h2 className="title">
                        Modular Kitchen
                        <span className="DekorLane"> Gallery</span>
                      </h2>
                      <p>
                        Welcome to our Modular Kitchen Gallery, where innovation
                        meets functionality. Explore our curated collection of
                        kitchen designs that seamlessly blend style with
                        practicality Immerse yourself in the vibrancy of our
                        colorful modular kitchens. Bold hues and creative color
                        schemes add personality and energy to your cooking
                        space.
                      </p>
                      <p>
                        Elevate your kitchen with innovative island designs.
                        Whether for extra prep space, seating, or storage, these
                        islands are both functional and stylish, becoming the
                        focal point of your culinary haven.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-3 row-cols-1 mb-n6">
                  <div className="col mb-6">
                    <div className="project-details-img">
                      <img
                        src="assets/images/project/Kitchen1.jpg"
                        alt="Project Image"
                      />
                    </div>
                  </div>
                  <div className="col mb-6">
                    <div className="project-details-img">
                      <img
                        src="assets/images/project/Kitchen2.jpg"
                        alt="Project Image"
                      />
                    </div>
                  </div>
                  <div className="col mb-6">
                    <div className="project-details-img">
                      <img
                        src="assets/images/project/Kitchen3.jpg"
                        alt="Project Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section section-padding pt-0">
            <div className="container">
              <div className="section-title text-center mb-lg-9 mb-md-7 mb-5">
                <h2 className="title">
                 Modular Kitchen Design <span> renovation</span>
                </h2>
                <p>
                  Welcome to a world where your dream kitchen becomes a reality!
                </p>
              </div>

              <div className="complir_sec">
                <ReactCompareSlider
                  changePositionOnHover={false}
                  itemOne={
                    <ReactCompareSliderImage
                      src="assets/images/project/Kitchen3.jpg"
                      srcSet="assets/images/project/Kitchen3.jpg"
                      alt="Image one"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="assets/images/project/Kitchen1.jpg"
                      srcSet="assets/images/project/Kitchen1.jpg"
                      alt="Image two"
                    />
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`tab-pane fade ${isTabActive("nav-ward")}`}
          id="nav-ward"
          role="tabpanel"
          aria-labelledby="nav-ward-tab"
          tabindex="0"
        >
          <div className="section section-padding">
            <div className="container">
              <div className="project-details-wrap">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="project-details-content mb-4 mb-md-9">
                      <span className="category">Interior</span>
                      <h2 className="title">
                        Wardrobe <span className="DekorLane">Gallery</span>
                      </h2>
                      <p>
                        Wardrobe Gallery, where fashion meets function. Explore
                        our carefully curated collection of wardrobe designs
                        that blend style with efficient storage solutions
                        Explore wardrobes designed for efficiency.
                      </p>
                      <p>
                        From pull-out shelves to hidden compartments, these
                        smart storage solutions maximize every inch of space
                        while maintaining a stylish exterior Each image in our
                        gallery showcases the fusion of aesthetics and
                        functionality in our wardrobe designs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-3 row-cols-1 mb-n6">
                  <div className="col mb-6">
                    <div className="project-details-img">
                      <img
                        src="assets/images/project/Wardrobe1.jpg"
                        alt="Project Image"
                      />
                    </div>
                  </div>
                  <div className="col mb-6">
                    <div className="project-details-img">
                      <img
                        src="assets/images/project/Wardrobe2.jpg"
                        alt="Project Image"
                      />
                    </div>
                  </div>
                  <div className="col mb-6">
                    <div className="project-details-img">
                      <img
                        src="assets/images/project/Wardrobe3.jpg"
                        alt="Project Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section section-padding pt-0">
            <div className="container">
              <div className="section-title text-center mb-lg-9 mb-md-7 mb-5">
                <h2 className="title">
                  Wardrobe Design <span> renovation</span>
                </h2>
                <p>
                  your wardrobe is not just storage but a reflection of your
                  style!
                </p>
              </div>

              <div className="complir_sec">
                <ReactCompareSlider
                  changePositionOnHover={false}
                  itemOne={
                    <ReactCompareSliderImage
                      src="assets/images/project/Wardrobe1.jpg"
                      srcSet="assets/images/project/Wardrobe1.jpg"
                      alt="Image one"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="assets/images/project/Wardrobe3.jpg"
                      srcSet="assets/images/project/Wardrobe3.jpg"
                      alt="Image two"
                    />
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`tab-pane fade ${isTabActive("nav-bed")}`}
          id="nav-bed"
          role="tabpanel"
          aria-labelledby="nav-bed-tab"
          tabindex="0"
        >
          <div className="section section-padding">
            <div className="container">
              <div className="project-details-wrap">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="project-details-content mb-4 mb-md-9">
                      <span className="category">Interior</span>
                      <h2 className="title">
                        Bedroom <span className="DekorLane">Gallery</span>
                      </h2>
                      <p>
                        Bedroom Gallery, where dreams come to life in style and
                        comfort. Explore our curated collection of bedroom
                        designs that blend relaxation with aesthetic appeal
                        Immerse yourself in the tranquility of modern bedroom
                        designs
                      </p>
                      <p>
                        Indulge in the luxury of our bedroom retreats. Plush
                        fabrics, elegant furnishings, and sophisticated details
                        transform your sleeping space into a haven of opulence.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-3 row-cols-1 mb-n6">
                  <div className="col mb-6">
                    <div className="project-details-img">
                      <img
                        src="assets/images/project/bedroom1.jpg"
                        alt="Project Image"
                      />
                    </div>
                  </div>
                  <div className="col mb-6">
                    <div className="project-details-img">
                      <img
                        src="assets/images/project/bedroom2.jpg"
                        alt="Project Image"
                      />
                    </div>
                  </div>
                  <div className="col mb-6">
                    <div className="project-details-img">
                      <img
                        src="assets/images/project/bedroom3.jpg"
                        alt="Project Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section section-padding pt-0">
            <div className="container">
              <div className="section-title text-center mb-lg-9 mb-md-7 mb-5">
                <h2 className="title">
                  Bedroom Design <span> renovation</span>
                </h2>
                <p>
                  Scroll through these captivating before-and-after image to
                  witness the remarkable transformations that our expert design
                  team brings to each bedroom
                </p>
              </div>

              <div className="complir_sec">
                <ReactCompareSlider
                  changePositionOnHover={false}
                  itemOne={
                    <ReactCompareSliderImage
                      src="assets/images/project/bedroom1.jpg"
                      srcSet="assets/images/project/bedroom1.jpg"
                      alt="Image one"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="assets/images/project/bedroom3.jpg"
                      srcSet="assets/images/project/bedroom3.jpg"
                      alt="Image two"
                    />
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`tab-pane fade ${isTabActive("nav-office")}`}
          id="nav-office"
          role="tabpanel"
          aria-labelledby="nav-office-tab"
          tabindex="0"
        >
          <div className="section section-padding">
            <div className="container">
              <div className="project-details-wrap">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="project-details-content mb-4 mb-md-9">
                      <span className="category">Interior</span>
                      <h2 className="title">
                        Home office <span className="DekorLane">Gallery</span>
                      </h2>
                      <p>
                        Gallery, where productivity meets style. Explore our
                        curated collection of home office designs that
                        seamlessly integrate functionality with aesthetic appeal
                        Discover home offices designed for comfort. Plush
                        seating, warm lighting, and personal touches create a
                        cozy atmosphere conducive to productivity and focus.
                      </p>
                      <p>
                        Explore the beauty of minimalist home offices.
                        Uncluttered surfaces, simple furnishings, and strategic
                        organization enhance efficiency and promote a clear
                        mindset. Explore home offices designed for creative
                        minds. Vibrant colors, eclectic decor, and inspirational
                        artwork transform your workspace into a hub of
                        creativity.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-3 row-cols-1 mb-n6">
                  <div className="col mb-6">
                    <div className="project-details-img">
                      <img
                        src="assets/images/project/homeoffice2.jpg"
                        alt="Project Image"
                      />
                    </div>
                  </div>
                  <div className="col mb-6">
                    <div className="project-details-img">
                      <img
                        src="assets/images/project/homeoffice1.jpg"
                        alt="Project Image"
                      />
                    </div>
                  </div>
                  <div className="col mb-6">
                    <div className="project-details-img">
                      <img
                        src="assets/images/project/homeoffice3.jpg"
                        alt="Project Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section section-padding pt-0">
            <div className="container">
              <div className="section-title text-center mb-lg-9 mb-md-7 mb-5">
                <h2 className="title">
                  Home office Design<span> renovation</span>
                </h2>
                <p>
                  Each image in our gallery showcases the versatility and
                  creativity of our home office designs.
                </p>
              </div>

              <div className="complir_sec">
                <ReactCompareSlider
                  changePositionOnHover={false}
                  itemOne={
                    <ReactCompareSliderImage
                      src="assets/images/project/homeoffice3.jpg"
                      srcSet="assets/images/project/homeoffice3.jpg"
                      alt="Image one"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="assets/images/project/homeoffice1.jpg"
                      srcSet="assets/images/project/homeoffice1.jpg"
                      alt="Image two"
                    />
                  }
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`tab-pane fade ${isTabActive("nav-bath")}`}
          id="nav-bath"
          role="tabpanel"
          aria-labelledby="nav-bath-tab"
          tabindex="0"
        >
          <div className="section section-padding">
            <div className="container">
              <div className="project-details-wrap">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="project-details-content mb-4 mb-md-9">
                      <span className="category">Interior</span>
                      <h2 className="title">
                        Bathroom <span className="DekorLane">Gallery</span>
                      </h2>
                      <p>
                        Bathroom Gallery, where luxury meets functionality.
                        Explore our carefully curated collection of bathroom
                        designs that transform everyday routines into moments of
                        indulgence Discover the allure of compact luxury
                        bathrooms. Lavish materials, thoughtful lighting, and
                        clever spatial arrangements redefine opulence in smaller
                        bathroom settings.
                      </p>
                      <p>
                        Explore bathrooms that embrace artistic eclecticism.
                        Unique tiles, vibrant patterns, and unconventional
                        fixtures transform the bathroom into a canvas of
                        creative expression.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-3 row-cols-1 mb-n6">
                  <div className="col mb-6">
                    <div className="project-details-img">
                      <img
                        src="assets/images/project/bathroom1.jpg"
                        alt="Project Image"
                      />
                    </div>
                  </div>
                  <div className="col mb-6">
                    <div className="project-details-img">
                      <img
                        src="assets/images/project/bathroom2.jpg"
                        alt="Project Image"
                      />
                    </div>
                  </div>
                  <div className="col mb-6">
                    <div className="project-details-img">
                      <img
                        src="assets/images/project/bathroom3.jpg"
                        alt="Project Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="section section-padding pt-0">
            <div className="container">
              <div className="section-title text-center mb-lg-9 mb-md-7 mb-5">
                <h2 className="title">
                  Bathroom Design<span> renovation</span>
                </h2>
                <p>
                  Embark on a visual journey of bathroom transformations with
                  our captivating before-and-after image
                </p>
              </div>

              <div className="complir_sec">
                <ReactCompareSlider
                  changePositionOnHover={false}
                  itemOne={
                    <ReactCompareSliderImage
                      src="assets/images/project/bathroom1.jpg"
                      srcSet="assets/images/project/bathroom1.jpg"
                      alt="Image one"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="assets/images/project/bathroom3.jpg"
                      srcSet="assets/images/project/bathroom3.jpg"
                      alt="Image two"
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

export default Product;
