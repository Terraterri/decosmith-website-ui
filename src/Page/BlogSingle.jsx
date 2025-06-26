import React from "react";
import { Link } from "react-router-dom";

const BlogSingle = () => {
  return (
    <>
      <nav aria-label="breadcrumb mt-5 mb-5">
        <ol className="breadcrumb">
          {/* <li className="breadcrumb-item">
            <a to="/">Home </a>
          </li>
          <li className="breadcrumb-item">
            <a to="/blogSingle"> / blogSingle</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            / Data
          </li> */}
        </ol>
      </nav>
      <div className="section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="blog-details-wrap">
                    <div className="mb-4 mb-md-6">
                      <h1 className="archHead">Architecture Design</h1>
                      <img src="assets/images/blog/blog-details-1.jpg" alt="" />
                    </div>
                    <h1 className="title">interior design tips.</h1>
                    <p>
                      Welcome to our Architecture Design Blog, where innovation
                      meets aesthetics. Step into the future with our futuristic
                      architectural designs. Cutting-edge technology, smart home
                      integration, and innovative structures redefine the
                      possibilities of modern living.
                    </p>
                    <blockquote className="blockquote-wrap">
                      <p>
                        Unique patterns, and ethnic motifs, blend seamlessly to
                        create spaces that celebrate the richness of cultural
                        heritage.
                      </p>
                      <h4 className="name">- Jont utdo</h4>
                    </blockquote>
                    <p>
                      Immerse yourself in the versatility of our flexible living
                      spaces. Modular designs, convertible furnishings, and
                      adaptive layouts cater to the evolving needs of modern
                      lifestyles.
                    </p>
                    <div className="blog-details-middle-img-wrap">
                      <div className="row row-cols-lg-2">
                        <div className="col">
                          <div className="blog-details-middle-img">
                            <img
                              src="assets/images/blog/blog-details-2.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="blog-details-middle-img">
                            <img
                              src="assets/images/blog/blog-details-3.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p>
                      Discover our architectural designs that double as art
                      forms. Creative structures, geometries, and unconventional
                      spaces.
                    </p>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="blog-details-wrap">
                    <div className="mb-4 mb-md-6">
                      <h1 className="archHead">Home Interior Design</h1>

                      <img src="assets/images/blog/blog-details-1.jpg" alt="" />
                    </div>
                    <h1 className="title">Home Interior design tips.</h1>
                    <p>
                      Welcome to our Home Interior Design Blog, where
                      inspiration meets practicality Dive into the latest color
                      trends shaping home interiors. Discover how palettes
                      evolve and influence the overall mood of your living
                      spaces.
                    </p>
                    <blockquote className="blockquote-wrap">
                      <p>
                        Explore clever design solutions to make the most of
                        limited space. From multi-functional furniture to
                        strategic storage, discover tips for maximizing every
                        square inch. Transform a corner of your home into a cozy
                        reading haven.
                      </p>
                      <h4 className="name">- Jont utdo</h4>
                    </blockquote>
                    <p>
                      Explore design tips, lighting suggestions, and furniture
                      choices to create a comfortable space for literary
                      escapes.
                    </p>
                    <div className="blog-details-middle-img-wrap">
                      <div className="row row-cols-lg-2">
                        <div className="col">
                          <div className="blog-details-middle-img">
                            <img
                              src="assets/images/blog/blog-details-2.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="blog-details-middle-img">
                            <img
                              src="assets/images/blog/blog-details-3.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p>
                      Visit our blog regularly for insights, inspiration, and
                      expert advice on transforming your home into a space that
                      reflects your lifestyle and design preferences. Whether
                      you're embarking on a major renovation or seeking simple
                      decor updates, our blog is your go-to resource for all
                      things home interior design.
                    </p>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div className="blog-details-wrap">
                    <div className="mb-4 mb-md-6">
                      <h1 className="archHead"> Office Interior Design</h1>

                      <img src="assets/images/blog/blog-details-1.jpg" alt="" />
                    </div>
                    <h1 className="title">Office Interior design tips.</h1>
                    <p>
                      Welcome to our Office Interior Design Blog, where
                      productivity meets style. Discover innovative office
                      layouts that foster collaboration and teamwork. Learn
                      about open-plan designs, breakout areas, and collaborative
                      spaces that enhance communication among team members.
                    </p>
                    <blockquote className="blockquote-wrap">
                      <p>
                        Find the perfect balance between aesthetics and
                        functionality in your office decor. Learn how to choose
                        stylish furniture and accessories without compromising
                        on the efficiency of your workspace.
                      </p>
                      <h4 className="name">- Jont utdo</h4>
                    </blockquote>
                    <p>
                      Uncover the psychological effects of color in the
                      workplace. Explore how different hues can influence mood,
                      creativity, and productivity, and gain insights into
                      selecting the right colors for your office.
                    </p>
                    <div className="blog-details-middle-img-wrap">
                      <div className="row row-cols-lg-2">
                        <div className="col">
                          <div className="blog-details-middle-img">
                            <img
                              src="assets/images/blog/blog-details-2.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col">
                          <div className="blog-details-middle-img">
                            <img
                              src="assets/images/blog/blog-details-3.jpg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p>
                      Stay ahead of the curve with insights into flexible office
                      designs. Learn about adaptable furniture, movable
                      partitions, and versatile layouts that cater to the
                      evolving needs of modern workspaces.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="sidebar-wrap sidebar-margin-left blog-singlep">
                <div className="sidebar-widget mb-10">
                  <h3 className="sidebar-widget-title">Recent Post </h3>
                  <ul className="nav nav-tabs d-block" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        <div className="single-sidebar-blog">
                          <div className="sidebar-blog-img">
                            <Link to="/blogSingle">
                              <img
                                src="assets/images/blog/sidebar-2.jpg"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="sidebar-blog-content">
                            <span className="category">
                              <Link to="#">Architecture</Link>
                            </span>
                            <h4 className="title">
                              <Link to="/blogSingle">Architecture Design</Link>
                            </h4>
                          </div>
                        </div>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        <div className="single-sidebar-blog">
                          <div className="sidebar-blog-img">
                            <Link to="/blogSingle">
                              <img
                                src="assets/images/blog/sidebar-1.jpg"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="sidebar-blog-content">
                            <span className="category">
                              <Link to="#">Interior</Link>
                            </span>
                            <h4 className="title">
                              <Link to="/blogSingle">Home Interior Design</Link>
                            </h4>
                          </div>
                        </div>
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#contact"
                        type="button"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        <div className="single-sidebar-blog">
                          <div className="sidebar-blog-img">
                            <Link to="/blogSingle">
                              <img
                                src="assets/images/blog/sidebar-3.jpg"
                                alt=""
                              />
                            </Link>
                          </div>
                          <div className="sidebar-blog-content">
                            <span className="category">
                              <Link to="#">Branding</Link>
                            </span>
                            <h4 className="title">
                              <Link to="/blogSingle">
                                Office Interior Design
                              </Link>
                            </h4>
                          </div>
                        </div>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSingle;
