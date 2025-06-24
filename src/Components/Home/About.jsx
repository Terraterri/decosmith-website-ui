import React from "react";
import CountUp from "react-countup";

const About = () => {
  return (
    <>
      <div className="section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <div className="about-banner w-100">
                <img
                  src="assets/images/banner/ban.png"
                  className="blog6"
                  alt="banner"
                />
                <img
                  src="assets/images/banner/form.jpg"
                  className="blog6 mt-5"
                  alt="banner"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 align-self-center ps-10">
              <div className="about-content ps-10">
                <h2 className="title">
                Welcome to Decosmith
                </h2>
                <p>
                  Welcome to Decosmith, where we transform spaces into
                  personalized masterpieces that reflect the unique essence of
                  each client. Founded with a passion for exceptional design and
                  a commitment to unparalleled craftsmanship, Decosmith is your
                  partner in creating environments that inspire and resonate.
                </p>
                <h3 className="sub-title">Completed Projects</h3>
              </div>
              <div className="row ps-10">
                <div className="col-md-6">
                  <div className="funfact">
                    <CountUp
                      delay={2}
                      start={0}
                      end={36}
                      duration={7}
                      className="counter"
                    />
                    {/* <h4 className="title">Projects Worked</h4> */}
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

export default About;
