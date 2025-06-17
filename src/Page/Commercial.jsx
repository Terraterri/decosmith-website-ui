import React from "react";
import { Link } from "react-router-dom";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

const Commercial = () => {
  return (
    <>
      <nav aria-label="breadcrumb mt-5 mb-5">
        <ol className="breadcrumb">
          {/* <li className="breadcrumb-item">
            <a href="/">Home </a>
          </li>
          <li className="breadcrumb-item">
            <a href="/commercial"> / commertial</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            / Data
          </li> */}
        </ol>
      </nav>
      <nav>
        <div className="nav nav-tabs mt-5" id="nav-tab" role="tablist">
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
            Office Space{" "}
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
            Shopping Malls{" "}
          </button>
          <button
            className="nav-link"
            id="nav-ward-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-ward"
            type="button"
            role="tab"
            aria-controls="nav-ward"
            aria-selected="false"
          >
            Hotels
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
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
                        Office Space <span className="DekorLane">Gallery</span>
                      </h2>
                      {/* <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p> */}
                      {/* <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but majority have suffered alteration in some
                        form, by injected humour, or randomised words which
                        don't going to use a passage of Lorem Ipsum, you need to
                        be sure there isn't anything embarrassing hidden in the
                        middle of text.
                      </p> */}
                    </div>
                  </div>
                </div>
                <div className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-3 row-cols-1 mb-n6">
                  <div className="col mb-6">
                    <div className="project-details-img">
                      <img
                        src="assets/images/project/office-mall1.jpg"
                        alt="Project Image"
                      />
                    </div>
                  </div>
                  <div className="col mb-6">
                    <div className="project-details-img">
                      <img
                        src="assets/images/project/office-mall2.jpg"
                        alt="Project Image"
                      />
                    </div>
                  </div>
                  <div className="col mb-6">
                    <div className="project-details-img">
                      <img
                        src="assets/images/project/office-mall3.jpg"
                        alt="Project Image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade show active"
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
                        Shopping Malls{" "}
                        <span className="DekorLane"> Gallery</span>
                      </h2>
                      {/* <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but majority have suffered alteration in some
                        form, by injected humour, or randomised words which
                        don't going to use a passage of Lorem Ipsum, you need to
                        be sure there isn't anything embarrassing hidden in the
                        middle of text.
                      </p> */}
                    </div>
                  </div>
                </div>
                <div className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-3 row-cols-1 mb-n6">
                  <div className="col mb-6">
                    <div className="project-details-img">
                      <img
                        src="assets/images/project/MallsGallery1.jpg"
                        alt="Project Image"
                      />
                    </div>
                  </div>
                  <div className="col mb-6">
                    <div className="project-details-img">
                      <img
                        src="assets/images/project/MallsGallery2.jpg"
                        alt="Project Image"
                      />
                    </div>
                  </div>
                  <div className="col mb-6">
                    <div className="project-details-img">
                      <img
                        src="assets/images/project/MallsGallery3.jpg"
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
                  Interior Design <span> renovation</span>
                </h2>
                {/* <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.
                </p> */}
              </div>

              <div className="complir_sec">
                <ReactCompareSlider
                  changePositionOnHover={false}
                  itemOne={
                    <ReactCompareSliderImage
                      src="assets/images/project/MallsGallery3.jpg"
                      srcSet="assets/images/project/MallsGallery3.jpg"
                      alt="Image one"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="assets/images/project/MallsGallery2.jpg"
                      srcSet="assets/images/project/MallsGallery2.jpg"
                      alt="Image two"
                    />
                  }
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="tab-pane fade"
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
                        Hotels <span className="DekorLane">Gallery</span>
                      </h2>
                      {/* <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but majority have suffered alteration in some
                        form, by injected humour, or randomised words which
                        don't going to use a passage of Lorem Ipsum, you need to
                        be sure there isn't anything embarrassing hidden in the
                        middle of text.
                      </p> */}
                    </div>
                  </div>
                </div>
                <div className="row row-cols-lg-3 row-cols-md-3 row-cols-sm-3 row-cols-1 mb-n6">
                  <div className="col mb-6">
                    <div className="project-details-img">
                      <img
                        src="assets/images/project/hotel-gallery1.jpg"
                        alt="Project Image"
                      />
                    </div>
                  </div>
                  <div className="col mb-6">
                    <div className="project-details-img">
                      <img
                        src="assets/images/project/hotel-gallery2.jpg"
                        alt="Project Image"
                      />
                    </div>
                  </div>
                  <div className="col mb-6">
                    <div className="project-details-img">
                      <img
                        src="assets/images/project/hotel-gallery3.jpg"
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
                  Interior Design <span> renovation</span>
                </h2>
                {/* <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text.
                </p> */}
              </div>

              <div className="complir_sec">
                <ReactCompareSlider
                  changePositionOnHover={false}
                  itemOne={
                    <ReactCompareSliderImage
                      src="assets/images/project/hotel-gallery3.jpg"
                      srcSet="assets/images/project/hotel-gallery3.jpg"
                      alt="Image one"
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src="assets/images/project/hotel-gallery4.jpg"
                      srcSet="assets/images/project/hotel-gallery4.jpg"
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

export default Commercial;
