import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  // const [residential, setResidential] = useState(true);
  // const [commeritial, setCommercial] = useState(false);

  // function handleResidential() {
  //   setResidential(true);
  //   setCommercial(false);
  // }
  // function handleCommerial() {
  //   setCommercial(true);
  //   setResidential(false);
  // }
  // useEffect(() => {
  //   handleTabs();
  // }, []);

  return (
    <>
      <div className="section section-padding" id="design-gallery">
        <div className="container">
          <div className="section-title text-center mb-lg-8 mb-md-6 mb-4">
            <h2 className="title">
              Design <span> Gallery</span>
            </h2>
          </div>

          <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                className="nav-link active"
                id="nav-home-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-home"
                type="button"
                role="tab"
                aria-controls="nav-home"
                aria-selected="true"
              >
                Residential
              </button>
              <button
                className="nav-link"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                Commercial
              </button>
            </div>
          </nav>
          <div className="tab-content" id="nav-tabcontent">
            <div
              className="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
              tabindex="0"
            >
              <div className="residential">
                <div>
                  <div className="row pt-3 justify-content-center">
                    <div className="card1 col-lg-4 col-md-6 col-sm-12">
                    <Link to="product">
                      <img
                        src="assets/images/project/living.jpg"
                        alt="Blog Image"
                      />
                      <div className="contentt">
                        <h3 className="livin">
                          <Link to="product">Living Room Interior Design</Link>
                        </h3>
                        </div>
                        </Link>
                    </div>
                    <div className="card1 col-lg-4 col-md-6 col-sm-12">
                      <Link to="product">
                      <img
                        src="assets/images/project/kitchen.jpg"
                        alt="Blog Image"
                      />
                      <div className="contentt">
                        <h3 className="livin">
                          <Link to="product">Modular Kitchen</Link>
                        </h3>
                        </div>
                        </Link>
                    </div>
                    <div className="card1 col-lg-4 col-md-6 col-sm-12">
                    <Link to="product">
                      <img
                        src="assets/images/project/wordrobe.jpg"
                        alt="Blog Image"
                      />
                      <div className="contentt">
                        <h3 className="livin">
                          <Link to="product">Wardrobe</Link>
                        </h3>
                        </div>
                        </Link>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row pt-5 justify-content-center">
                    <div className="card1 col-lg-4 col-md-6 col-sm-12">
                    <Link to="product">
                      <img
                        src="assets/images/project/bedroom.jpg"
                        alt="Blog Image"
                      />
                      <div className="contentt">
                        <h3 className="livin">
                          <Link to="product">Bedroom</Link>
                        </h3>
                        </div>
                        </Link>
                    </div>
                    <div className="card1 col-lg-4 col-md-6 col-sm-12">
                    <Link to="product">
                      <img
                        src="assets/images/project/office.jpg"
                        alt="Blog Image"
                      />
                      <div className="contentt">
                        <h3 className="livin">
                          <Link to="product">Home Office</Link>
                        </h3>
                        </div>
                        </Link>
                    </div>
                    <div className="card1 col-lg-4 col-md-6 col-sm-12">
                    <Link to="product">
                      <img
                        src="assets/images/project/bathroom.jpg"
                        alt="Blog Image"
                      />
                      <div className="contentt">
                        <h3 className="livin">
                          <Link to="product">Bathroom</Link>
                        </h3>
                        </div>
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
              tabindex="0"
            >
              <div className="Commercial">
                <div>
                  <div className="row pt-5 justify-content-center">
                    <div className="card1 col-lg-4 col-md-6 col-sm-12">
                    <Link to="commercial">
                      <img
                        src="assets/images/project/officehall.jpg"
                        alt="Blog Image"
                      />
                      <div className="contentt">
                        <h3 className="livin">
                          <Link to="commercial">Office Space</Link>
                        </h3>
                        </div>
                        </Link>
                    </div>
                    <div className="card1 col-lg-4 col-md-6 col-sm-12">
                    <Link to="commercial">
                      <img
                        src="assets/images/project/mall.jpg"
                        alt="Blog Image"
                      />
                      <div className="contentt">
                        <h3 className="livin">
                          <Link to="commercial">Shopping Malls</Link>
                        </h3>
                        </div>
                        </Link>
                    </div>
                    <div className="card1 col-lg-4 col-md-6 col-sm-12">
                    <Link to="commercial">
                      <img
                        src="assets/images/project/hotel.jpg"
                        alt="Blog Image"
                      />
                      <div className="contentt">
                        <h3 className="livin">
                          <Link to="commercial">Hotels</Link>
                        </h3>
                        </div>
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
