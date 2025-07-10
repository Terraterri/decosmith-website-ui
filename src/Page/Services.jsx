import React from "react";
import { Link } from "react-router-dom";
import { AiFillProject } from "react-icons/ai";
import { GiSofa } from "react-icons/gi";
import { GiCeilingLight } from "react-icons/gi";
import { FaPaintRoller } from "react-icons/fa6";
import { MdDesignServices } from "react-icons/md";
import { SiBlueprint } from "react-icons/si";

const Services = () => {
  return (
    <>
      {/* <div className="breadcrumb-area breadcrumb-padding bg-img serv-bg">
        <div className="container">
          <div className="breadcrumb-content text-center">
            <h2>Our Services</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <i className="fa fa-angle-right"></i>
              </li>
              <li>Services</li>
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
            <a href="/services"> / Services</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            / Data
          </li> */}
        </ol>
      </nav>

      <div className="section section-paddingg">
        <div className="container">
          <div className="service-head pt-5 mt-5">
            <h2 className="title text-center allTitle text-uppercase">
              Our Services
            </h2>
            <p className="white text-center pb-2">
              Decosmith offer a range of services to help clients enhance the
              aesthetic appeal, functionality, and overall ambiance of their
              spaces.
            </p>
          </div>
          <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">
            <div className="service text-center col-md-6">
              <div className="service-content">
                <div className="maincontainer">
                  <div className="back">
                    <h3 className="titless">
                      <Link to="#">Concept Development:</Link>
                    </h3>
                    <div className="service-icon">
                      <SiBlueprint className="dlicon design_compass" />
                    </div>
                    <p>
                      Creating a design concept that aligns with the client's
                      vision, including color schemes, themes, and overall
                      aesthetic direction.
                    </p>
                  </div>
                  <div className="front">
                    <div className="image">
                      <img
                        src="assets/images/service/service-1.jpg"
                        alt="banner"
                      />
                      <h2>Concept Development</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="service text-center col-md-6">
              <div className="service-content">
                <div className="maincontainer">
                  <div className="back">
                    <h3 className="titless">
                      <Link to="#">Project Management:</Link>
                    </h3>
                    <div className="service-icon">
                      <AiFillProject className="dlicon design_compass" />{" "}
                    </div>
                    <p>
                      Overseeing and coordinating all aspects of the design
                      process, from concept development to implementation,
                      ensuring timelines and budgets are met.
                    </p>
                  </div>
                  <div className="front">
                    <div className="image">
                      <img
                        src="assets/images/service/service-2.jpg"
                        alt="banner"
                      />
                      <h2>Project Management</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="service text-center col-md-6">
              <div className="service-content">
                <div className="maincontainer">
                  <div className="back">
                    <h3 className="titless">
                      <Link to="#">Furniture and Fixture Selection:</Link>
                    </h3>
                    <div className="service-icon">
                      <GiSofa className="dlicon design_compass" />{" "}
                    </div>
                    <p>
                      Assisting clients in choosing appropriate furniture,
                      fixtures, and accessories that complement the overall
                      design. Designing and creating bespoke furniture pieces
                      tailored to the client's specific needs and style
                      preferences
                    </p>
                  </div>
                  <div className="front">
                    <div className="image">
                      <img
                        src="assets/images/service/service-3.jpg"
                        alt="banner"
                      />
                      <h2>Furniture and Fixture Selection</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="service text-center col-md-6">
              <div className="service-content">
                <div className="maincontainer">
                  <div className="back">
                    <h3 className="titless">
                      <Link to="#">Lighting Design:</Link>
                    </h3>
                    <div className="service-icon">
                      <GiCeilingLight className="dlicon design_compass" />
                    </div>
                    <p>
                      Planning and selecting lighting solutions to enhance the
                      functionality and atmosphere of a space.
                    </p>
                  </div>
                  <div className="front">
                    <div className="image">
                      <img
                        src="assets/images/service/service-4.jpg"
                        alt="banner"
                      />
                      <h2>Lighting Design</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="service text-center col-md-6">
              <div className="service-content">
                <div className="maincontainer">
                  <div className="back">
                    <h3 className="titless">
                      <Link to="#">Renovation and Remodelling:</Link>
                    </h3>
                    <div className="service-icon">
                      <FaPaintRoller className="dlicon design_compass" />{" "}
                    </div>
                    <p>
                      Managing renovations and remodels, including structural
                      changes, to transform spaces according to the design plan.
                    </p>
                  </div>
                  <div className="front">
                    <div className="image">
                      <img
                        src="assets/images/service/service-5.jpg"
                        alt="banner"
                      />
                      <h2>Renovation and Remodelling</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="service text-center col-md-6">
              <div className="service-content">
                <div className="maincontainer">
                  <div className="back">
                    <h3 className="titless">
                      <Link to="#">Art and Accessories Procurement:</Link>
                    </h3>
                    <div className="service-icon">
                      <i className="dlicon design_compass"></i>
                    </div>
                    <p>
                      Assisting in selecting and procuring artwork, decorative
                      items, and accessories to enhance the overall design.
                    </p>
                  </div>
                  <div className="front">
                    <div className="image">
                      <img
                        src="assets/images/service/service-6.jpg"
                        alt="banner"
                      />
                      <h2>Art and Accessories Procurement</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="service text-center col-md-6">
              <div className="service-content">
                <div className="maincontainer">
                  <div className="back">
                    <h3 className="titless">
                      <Link to="#">Virtual Design Services:</Link>
                    </h3>
                    <div className="service-icon">
                      <MdDesignServices className="dlicon design_compass" />
                    </div>
                    <p>
                      Providing online design consultations, virtual room
                      planning, and digital design concepts for clients who
                      prefer remote collaboration.
                    </p>
                  </div>
                  <div className="front">
                    <div className="image">
                      <img
                        src="assets/images/service/service-1.jpg"
                        alt="banner"
                      />
                      <h2>Virtual Design Services</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="pagination-style mt-6 mt-md-8 mt-lg-10">
            <ul>
              <li>
                <a className="active" href="#">
                  1
                </a>
              </li>
              <li>
                <Link to="#">2</Link>
              </li>
              <li>
                <Link to="#">3</Link>
              </li>
              <li>
                <a className="next" href="#">
                  <i className="fa fa-angle-right "></i>
                </a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Services;
