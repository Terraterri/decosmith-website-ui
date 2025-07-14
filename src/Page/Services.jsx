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

      <nav aria-label="breadcrumb mt-5 mb-5">
        <ol className="breadcrumb">
          {/* <li className="breadcrumb-item">
            <a href="/">Home </a>
          </li>
          <li className="breadcrumb-item">
            <a href="/services"> / Services</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
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

      <div class="wrapper">
        <div class="card">
          <div class="poster"><img src="https://i.postimg.cc/jjBSrfnQ/poster1-img.jpg" alt="Location Unknown" /></div>
          <div class="details">
            <h1>Location Unknown</h1>
            <h2>2021 • PG • 1hr 38min</h2>
            <div class="rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
              <span>4.2/5</span>
            </div>
            <div class="tags">
              <span class="tag">Italian</span>
              <span class="tag">Drama</span>
              <span class="tag">Indie</span>
            </div>
            <p class="desc">
              Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning.
            </p>
            <div class="cast">
              <h3>Cast</h3>
              <ul>
                <li><img src="https://i.postimg.cc/jqgkqhSb/cast-11.jpg" alt="Marco Andrews" title="Marco Andrews" /></li>
                <li><img src="https://i.postimg.cc/8P7X7r7r/cast-12.jpg" alt="Rebecca Floyd" title="Rebecca Floyd" /></li>
                <li><img src="https://i.postimg.cc/2SvHwRFk/cast-13.jpg
" alt="Antonio Herrera" title="Antonio Herrera" /></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="poster"><img src="https://i.postimg.cc/GtxLYS7q/poster2-img.jpg" alt="Location Unknown" /></div>
          <div class="details">
            <h1>Air</h1>
            <h2>2020 • PG • 24min</h2>
            <div class="rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
              <span>4/5</span>
            </div>
            <div class="tags">
              <span class="tag">Romance</span>
              <span class="tag">Comedy</span>
              <span class="tag">Short</span>
            </div>
            <p class="desc">
              Two strangers meet together on a plane flying to the alps.
            </p>
            <div class="cast">
              <h3>Cast</h3>
              <ul>
                <li><img src="https://i.postimg.cc/yY2QcYRp/cast-21.jpg" alt="Angelina Whyte" title="Angelina Whyte" /></li>
                <li><img src="https://i.postimg.cc/R0BgpsXc/cast-22.jpg" alt="Ivan Benson" title="Ivan Benson" /></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="poster"><img src="https://i.postimg.cc/yxH6DzPD/poster3-img.jpg" alt="Location Unknown" /></div>
          <div class="details">
            <h1>End Credits</h1>
            <h2>2021 • R • 1hr 41min</h2>
            <div class="rating">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
              <span>4.7/5</span>
            </div>
            <div class="tags">
              <span class="tag yellow">Teen</span>
              <span class="tag">Comedy</span>
              <span class="tag blue">Drama</span>
            </div>
            <p class="desc">
              Alex, together with his best friends, goes on a road trip whilst experiencing friendship, self-discovery, and the bittersweet transition to adulthood.
            </p>
            <div class="cast">
              <h3>Cast</h3>
              <ul>
                <li><img src="https://i.postimg.cc/xd3twv4B/cast-31.jpg" alt="Jessica Enduro" title="Jessica Enduro" /></li>
                <li><img src="https://i.postimg.cc/C1MmSZy5/cast-32.jpg" alt="Charles Garcia" title="Charles Garcia" /></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Services;
