import React from "react";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
const Footer = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  return (
    <>
      <footer className="section bg-black">
        <div className="footer-top section-padding pt-4 pb-4">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                <div className="footer-widget footer-about">
                  {/* <div className="footer-logo">
                  <h2 class="doklogo">Dekor<span class="logoSpan">Lane</span></h2>
                  </div> */}
                  <div className="footer-logo">
                    <Link to="/">
                      <img
                        src="assets/images/work/main-logo1.png"
                        alt="DECOSMITH-Logo"
                      />
                      {/* <img
                        src="assets/images/work/logo-text.png"
                        className="logText"
                        alt="DECOSMITH-Logo"
                      /> */}
                      {/* <span><h2 className="doklogo">Dekor<span className="logoSpan">Lane</span></h2></span> */}
                    </Link>
                  </div>

                  <div className="offices-footer">
                    {/* <div className="widget-title pt-3 d-flex align-items-center">
                      <h5 className="braches">Our Branches :</h5>

                      <select
                        name="select"
                        id=""
                        className="select col-md-6 col-lg-6 col-sm-4 col-xs-4"
                      >
                        <option value="Select">Select City</option>
                        <option value="Kakinada">Kakinada</option>
                        <option value="Rajamuhndry">Rajahmundry</option>
                        <option value="Vizag">Vizag</option>
                        <option value="Hyderabad">Hyderabad</option>
                      </select>
                    </div> */}

                    <li className="footermail mt-4">
                      <span className="title">Email:</span>
                      <span className="desc">
                        <Link to="mailto:info@dekolane.com" target="_blank">
                          info@decosmith.com
                        </Link>
                       
                      </span>
                    </li>
                  </div>
                  <div className="social-icon-style">
                    <Link
                      className="facebook"
                      target="_blank"
                      to="https://www.facebook.com/profile.php?id=61556083902320"
                    >
                      <FaFacebookF />
                    </Link>
                    <Link
                      className="twitter"
                      target="_blank"
                      to="https://twitter.com/DECOSMITH"
                    >
                      <FaXTwitter />
                    </Link>

                    <Link
                      className="behance"
                      target="_blank"
                      to="https://www.instagram.com/dekor_lane/"
                    >
                      <FaInstagram />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 col-xs-6">
                <div className="footer-widget footer-list margin-left">
                  <h3 className="footer-title"> Support</h3>
                  <ul>
                    <li>
                      <Link to="/privacy">Privacy Policy</Link>
                    </li>
                    {/* <li>
                      <Link to="/">Raise an Issue</Link>
                    </li> */}
                    <li>
                      <Link to="/term">Terms of Service </Link>
                    </li>
                    {/* <li>
                      <Link to="/">FAQS</Link>
                    </li> */}
                    <li>
                      <Link to="/contact">Contact Us</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6 col-xs-6">
                <div className="footer-widget footer-list ">
                  <h3 className="footer-title">Our Services</h3>
                  <ul>
                    <li>
                      <HashLink smooth to="/#design-gallery">
                        Design Gallery
                      </HashLink>
                    </li>
                    <li>
                      <Link to="/quote">Get a Free Quote</Link>
                    </li>
                    <li>
                      <Link to="/ReferFrined">Refer & Earn</Link>
                    </li>
                    <li>
                      <Link to="/Partners">Partner With Us</Link>
                    </li>
                    <li>
                      <Link to="/Furnishing">Furnishing</Link>
                    </li>
                    {/* <li>
                      <Link to="/Dekolen">DekoLens</Link>
                    </li>
                    <li>
                      <Link to="/DekoMatch">DekoMatch</Link>
                    </li> */}
                    <li>
                      <Link to="/">Connect in Metaverse</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
                <div className="footer-widget footer-list">
                  <h3 className="footer-title">Our Offerings</h3>
                  <div className="row">
                  <ul className="col-md-6">
                    <li>
                      <Link to="/product">Living Room Interior Design</Link>
                    </li>
                    <li>
                      <Link to="/product">Modular Kitchen</Link>
                    </li>
                    <li>
                      <Link to="/product">Wardrobe</Link>
                    </li>
                    <li>
                      <Link to="/product">Bedroom</Link>
                    </li>
                  </ul>
                  <ul className="col-md-6">
                    <li>
                      <Link to="/product">Home Office</Link>
                    </li>
                    <li>
                      <Link to="/product">Bathroom</Link>
                    </li>
                    <li>
                      <Link to="/commercial">Office Space</Link>
                    </li>
                    <li>
                      <Link to="/commercial">Shopping Malls</Link>
                    </li>
                    <li>
                      <Link to="/commercial">Hotels</Link>
                    </li>
                  </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-2">
                <div className="footer-widget footer-newsletter">
                  <img
                    src="assets/images/brand-logo/chair.png"
                    className="chair"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="copyright text-center">
              {/* <p>
                Copyright ©2024 All rights reserved | Made with{" "}
                <i className="fa fa-heart"></i> by{" "}
                <Link to="https://DECOSMITH.com/"> DECOSMITH </Link>.
              </p> */}
              <p>
                Copyright ©2024 All rights
                <Link to="https://DECOSMITH.com/"> DECOSMITH </Link>.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
