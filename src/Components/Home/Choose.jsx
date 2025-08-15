import React from "react";

const Choose = () => {
  return (
    <>
      <div className="why">
        <div className="container">
          <h1 className="why-head text-center text-uppercase">
            Why Choose <span className="why-span"> Decosmith</span>
          </h1>
          <div className="service-details-list-wrap">
            <div className="row">
              <div className="col-lg-7">
                <div className="service-details-list-content-wrap">
                  <div className="service-details-list">
                    <div className="single-service-details-list">
                      <div className="service-details-list-content">
                        <p className="ypara">
                          <span className="yspan">Immersive Metaverse Experience</span>
                          <br />Step into your future space before it’s built. Through cutting-edge metaverse technology, we let you virtually explore and interact with your interior design, making decisions with confidence and clarity.
                        </p>
                      </div>
                    </div>
                    <div className="single-service-details-list">
                      <div className="service-details-list-content">
                        <p className="ypara">
                          <span className="yspan">Creativity Unleashed</span>
                          <br /> Our designers bring fresh, innovative
                          perspectives to every project,
                          ensuring a unique and inspired outcome.
                        </p>
                      </div>
                    </div>
                    <div className="single-service-details-list">
                      <div className="service-details-list-content">
                        <p className="ypara">
                          <span className="yspan">Attention to Detail</span>
                          <br />
                          Meticulous attention to every detail
                          ensures a seamless and well-executed design that
                          stands the test of time.
                        </p>
                      </div>
                    </div>
                    <div className="single-service-details-list">
                      <div className="service-details-list-content">
                        <p className="ypara">
                          <span className="yspan">
                            Sustainability at Heart
                          </span>
                          <br />
                          We are dedicated to sustainable practices, integrating
                          eco-friendly materials
                          and methods to create beautiful spaces with a
                          conscience.
                        </p>
                      </div>
                    </div>
                    <div className="single-service-details-list">
                      <div className="service-details-list-content">
                        <p className="ypara">
                          <span className="yspan">
                            Client-Centric Approach
                          </span>
                          <br />
                          Your vision is our priority. We value collaboration
                          and communication,
                          ensuring your dreams are realized in
                          every design element.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="col-lg-5">
                <div className="service-details-list-img">
                  <img
                    src="assets/images/project/room.jpg"
                    className="service-imgg"
                    alt=""
                  />
                </div>
              </div> */}
              <div className="col-lg-5 col-md-5 col-sm-12 ">
                <div className="about-banner w-100">
                  <img
                    src="assets/images/banner/ban.png"
                    className="blog6"
                    alt="banner"
                  />
                  <img
                    src="assets/images/banner/form.jpg"
                    className="blog6 mt-170"
                    alt="banner"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <section className="our_clients pb-5">
          <div className="container">
           <div className="row">
              <div className="col-md-12">
                <div className="title white text-center">
                  <h2><span>Our Clients</span></h2>
                  <p>Our clients are at the heart of everything we do. From young families starting their <br></br>first home to busy professionals redesigning their workspace</p>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-3">
                 <img
                  src="assets/images/greenlam-dt-1696587008-eWjSq.jpg"
                  alt="banner"
                />
              </div>
              <div className="col-md-3">
                 <img
                  src="assets/images/hettich-desktop-1646230644-FU79B.jpg"
                  alt="banner"
                />
              </div>
              <div className="col-md-3">
                 <img
                  src="assets/images/century-ply-desktop-1646230641-wVXUm.avif"
                  alt="banner"
                />
              </div>
              <div className="col-md-3">
                 <img
                  src="assets/images/saint-gobain-desktop-1646230646-T0Aos.avif"
                  alt="banner"
                />
              </div>
            </div>
            </div>
        </section>
    </>
  );
};

export default Choose;
