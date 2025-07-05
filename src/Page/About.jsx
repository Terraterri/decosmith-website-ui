import React from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";

const About = () => {
  return (
    <>
      {/* <div className="breadcrumb-area breadcrumb-padding bg-img serv-bg">
        <div className="container">
          <div className="breadcrumb-content text-center">
            <h2>About Us</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <i className="fa fa-angle-right"></i>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div> */}
      <nav aria-label="breadcrumb mt-5 mb-5">
        <ol class="breadcrumb">
          {/* <li class="breadcrumb-item">
            <a href="/">Home </a>
          </li>
          <li class="breadcrumb-item">
            <a href="/about"> / About</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            / Data
          </li> */}
        </ol>
      </nav>

      <div className="section section-padding mt-5">
        <div className="container">
          <div className="row row-cols-lg-2 row-cols-1 mb-n6">
            <div className="col align-self-center mb-6">
              <div className="about-content">
                <h2 className="title">
                  WELCOME TO <span>DEKORLANE</span>
                </h2>
                <p>
                  Welcome to DekorLane, where we transform spaces into
                  personalized masterpieces that reflect the unique essence of
                  each client. Founded with a passion for exceptional design and
                  a commitment to unparalleled craftsmanship, DekorLane is your
                  partner in creating environments that inspire and resonate.
                </p>

                <h6 className="about-span">Vision </h6>
                <p>
                  Our Vision is to inspire boundless creativity, enhance aesthetics, and shape environments into personalized masterpieces. Fueled by innovation and a steadfast commitment to sustainability, we seek to redefine the art of interior design, establishing new benchmarks for elegance and functionality.
                </p>

                <h6 className="about-span">Mission </h6>
                <p>
                  Our Mission is to passionately craft spaces that reflect the unique personalities and lifestyles of our clients through a blend of innovative design and sustainable practices. Committed to excellence,we create environments that not only meet the functional needs but also exceed clients aesthetic expectations.
                </p>
              </div>
            </div>
            <div className="col mb-6">
              {/* <div className="about-banner">
                <img
                  src="assets/images/banner/ban.png"
                  className="blog6"
                  alt="banner"
                />
              </div> */}
              <div className="about-banner w-100">
                <img
                  // src="assets/images/banner/ban.png"
                  src="assets/images/banner/immmmmm.jpeg"
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
          </div>
        </div>
      </div>

      <div className="section section-padding bg-img overly-style-1 opacity-point-7 about-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
              <div className="funfact-2 text-center">
                <i className="dlicon travel_bag"></i>
                <br />
                <CountUp
                  delay={2}
                  start={0}
                  end={36}
                  duration={5}
                  className="odometer"
                />
                <h4 className="title">Projects Worked</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
              <div className="funfact-2 text-center">
                <i className="dlicon users_man-23"></i>
                <br />
                <CountUp
                  delay={2}
                  start={0}
                  end={45}
                  duration={5}
                  className="odometer"
                />
                <h4 className="title">Projects in pipe line</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
              <div className="funfact-2 text-center">
                <i className="dlicon emoticons_smile"></i>
                <br />
                <CountUp
                  delay={2}
                  start={0}
                  end={75}
                  duration={5}
                  className="odometer"
                />
                <h4 className="title">Happy Clients</h4>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
              <div className="funfact-2 text-center">
                <i className="dlicon tech-2_firewall"></i>
                <br />
                <CountUp
                  delay={2}
                  start={0}
                  end={52}
                  duration={5}
                  className="odometer"
                />
                <h4 className="title">Upcoming Projects</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="section section-padding">
        <div className="container">
          <div className="section-title text-center mb-lg-9 mb-md-7 mb-5">
            <h2 className="title">
              Our <span>Team</span>
            </h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </div>
          <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 mb-n8">
            <div className="col mb-6">
              <div className="team-wrap">
                <div className="team-top mb-4">
                  <img src="assets/images/team/team-img-1.jpg" alt="team" />
                  <div className="team-top-content">
                    <h4 className="name">Simone Rhoades</h4>
                    <span className="profession">Head of Content</span>
                  </div>
                </div>
                <div className="team-bottom">
                  <div className="team-bottom-content">
                    <h4 className="name">Simone Rhoades</h4>
                    <span className="profession">Head of Content</span>
                  </div>
                  <div className="team-social">
                    <a className="facebook" href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a className="twitter" href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a className="google-plus" href="#">
                      <i className="fa-brands fa-google-plus-g"></i>
                    </a>
                    <a className="behance" href="#">
                      <i className="fa-brands fa-square-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-6">
              <div className="team-wrap">
                <div className="team-top mb-4">
                  <img src="assets/images/team/team-img-2.jpg" alt="team" />
                  <div className="team-top-content">
                    <h4 className="name">Rosanne Theriau</h4>
                    <span className="profession">
                      Visual Content Specialist
                    </span>
                  </div>
                </div>
                <div className="team-bottom">
                  <div className="team-bottom-content">
                    <h4 className="name">Rosanne Theriau</h4>
                    <span className="profession">Home Remodeling Editor</span>
                  </div>
                  <div className="team-social">
                    <a className="facebook" href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a className="twitter" href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a className="google-plus" href="#">
                      <i className="fa-brands fa-google-plus-g"></i>
                    </a>
                    <a className="behance" href="#">
                      <i className="fa-brands fa-square-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-6">
              <div className="team-wrap">
                <div className="team-top mb-4">
                  <img src="assets/images/team/team-img-3.jpg" alt="team" />
                  <div className="team-top-content">
                    <h4 className="name">Marline Patino</h4>
                    <span className="profession">Remodeling Specialist</span>
                  </div>
                </div>
                <div className="team-bottom">
                  <div className="team-bottom-content">
                    <h4 className="name">Marline Patino</h4>
                    <span className="profession">Remodeling Specialist</span>
                  </div>
                  <div className="team-social">
                    <a className="facebook" href="#">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                    <a className="twitter" href="#">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a className="google-plus" href="#">
                      <i className="fa-brands fa-google-plus-g"></i>
                    </a>
                    <a className="behance" href="#">
                      <i className="fa-brands fa-square-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="section section-padding bg-img overly-style-1 opacity-point-7 about-bg mt-5">
        <div className="container">
          <div className="section-title text-center mb-lg-9 mb-md-7 mb-5 pb-5">
            <h2 className="title white">
              WHAT <span> CLIENTS</span> SAY?
            </h2>
            <p className="white">
              At our interior design firm, we always say that our best reward is
              happy clients. And it truly is! Nothing fills our design team with
              more pride and happiness than witnessing how our hard work,
              passion, and creativity help bring our clients’ dreams to life.
            </p>
          </div>
          <div className="about-card">
            <div className="row">
              <div className="cardd2 col-md-4 col-lg-4 col-sm-12 col-xs-12">
                <div class="testimonial-img-title">
                  <div class="testimonial-img">
                    <img src="assets/images/testimonial/client-1.png" alt="" />
                  </div>
                  <div class="testimonial-title">
                    <h4>Aadinath</h4>
                    <span>Ui/UX Designer</span>
                  </div>
                </div>
                <p>
                  With DekorLane's expertise and experience, my dream and vision transformed into a beautifully designed space.
                </p>
                <div class="quote">
                  <i class="fa fa-quote-left"></i>
                </div>
              </div>
              <div className="cardd2 col-md-4 col-lg-4 col-sm-12 col-xs-12">
                <div class="testimonial-img-title">
                  <div class="testimonial-img">
                    <img src="assets/images/testimonial/client-2.png" alt="" />
                  </div>
                  <div class="testimonial-title">
                    <h4>Lokini</h4>
                    <span>Web Developer</span>
                  </div>
                </div>
                <p>
                  We have worked with them on multiple projects and each time
                  both the design quality and attention to detail has exceeded
                  our expectations.
                </p>
                <div class="quote">
                  <i class="fa fa-quote-left"></i>
                </div>
              </div>
              <div className="cardd2 col-md-4 col-lg-4 col-sm-12 col-xs-12">
                <div class="testimonial-img-title">
                  <div class="testimonial-img">
                    <img src="assets/images/testimonial/client-3.png" alt="" />
                  </div>
                  <div class="testimonial-title">
                    <h4> Eashan</h4>
                    <span>CEO & Founder </span>
                  </div>
                </div>
                <p>
                  Our ideas, needs and questions were plenty. Their creativity was inspiring and their impeccably detailed knowledge was invaluable.
                </p>
                <div class="quote">
                  <i class="fa fa-quote-left"></i>
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
