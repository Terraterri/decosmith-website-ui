import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <div className="section section-padding blogSec-bg">
        <div className="container">
          <div className="section-title text-center mb-lg-9 mb-md-7 mb-5">
            <h2 className="title">
              Our <span> Blogs</span>
            </h2>
            {/* <p>
              Don’t let another year pass by without getting on top of your
              content creation for your interior design business.
            </p> */}
          </div>
          <div className="blog-card">
            <div className="row">
              <div className="card1 col-md-4 col-lg-4 col-sm-12 col-xs-12">
                <div className="blog-img mb-2">
                  <Link to="/blogSingle">
                    <img src="assets/images/blog/blog-1.jpg" alt="" />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <ul className="uiBlog">
                      <li>January 2024 /</li>
                      <li>
                        <Link to="#">Interior</Link>
                      </li>
                    </ul>
                  </div>
                  <h3>
                    <Link to="/blogSingle">
                      <span className="blogSpan">interior design tips.</span>
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="card1 col-md-4 col-lg-4 col-sm-12 col-xs-12">
                <div className="blog-img mb-2">
                  <Link to="/blogSingle">
                    <img src="assets/images/blog/blog-9.jpg" alt="" />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <ul className="uiBlog">
                      <li>January 2024 /</li>
                      <li>
                        <Link to="#">Building </Link>
                      </li>
                    </ul>
                  </div>
                  <h3>
                    <Link to="/blogSingle">
                      <span className="blogSpan"> designing new homes.</span>
                    </Link>
                  </h3>
                </div>
              </div>
              <div className="card1 col-md-4 col-lg-4 col-sm-12 col-xs-12">
                <div className="blog-img mb-2">
                  <Link to="/blogSingle">
                    <img src="assets/images/blog/blog-3.jpg" alt="" />
                  </Link>
                </div>
                <div className="blog-content">
                  <div className="blog-meta">
                    <ul className="uiBlog">
                      <li>January 2024 /</li>
                      <li>
                        <Link to="#">Architecture</Link>
                      </li>
                    </ul>
                  </div>
                  <h3>
                    <Link to="/blogSingle">
                      <span className="blogSpan">Decoration work place.</span>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
