import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { IoCloseSharp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Header = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  useEffect(() => {
    window.addEventListener("scroll", onStickyHeader);
    return () => {
      window.removeEventListener("scroll", onStickyHeader);
    };
  });

  const onStickyHeader = () => {
    const headerNav = document.querySelector(".nav");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? headerNav.classList.add("is-sticky")
      : headerNav.classList.remove("is-sticky");
  };

  const [hamburger, setHamburger] = useState(false);
  const handleHamburger = () => {
    setHamburger(true);
  };
  const closeHamburger = () => {
    setHamburger(false);
  };

  return (
    <>
      <header className="header-area header-transparent-bar nav">
        {/* <div className="leyeroptity"></div> */}
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-4 col-4">
              <div className="logo">
                <Link to="/">
                  <img
                    src="assets/images/work/main-logo1.png"
                    alt="DECOSMITH-Logo"
                  />
                  {/* <img src="assets/images/work/logo-text.png" className="logText" alt="DECOSMITH-Logo" /> */}
                  {/* <span><h2 className="doklogo">Dekor<span className="logoSpan">Lane</span></h2></span> */}
                </Link>
              </div>
            </div>
            <div className="col-lg-8 d-none d-lg-block d-flex">
              <div className="main-menu">
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                      <li >
                        <Link to="/about">About Us</Link>
                      </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/Furnishing">Furnishing</Link>
                    </li>

                    <li>
                      <HashLink smooth to="/#design-gallery">
                        Design Gallery
                      </HashLink>
                      {/* <Link to="/#design-gallery">DESIGN GALLERY</Link> */}
                    </li>
                    <li>
                      <Link to="/quote">Get a Free Quote</Link>
                    </li>
                   
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-lg-1 col-md-6 col-8">
              <div className="header-action-wrap">
                <div className="header-action-style">
                  <button
                    // onClick={handleHamburger}
                    className="hamburger-menu-btn"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                  >
                    <i className="dlicon ui-3_menu-left"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <IoCloseSharp />
          </button>
        </div>
        <div class="offcanvas-body">
          <div className="leyeroptityabout"></div>
          <div className="header-aside-active  in-left">
            <div className="header-aside-wrap">
              <div className="header-aside-content">
                <div className="header-aside-menu">
                  <nav>
                    <ul className="sideUi">
                      <li className="dis-none">
                        <Link to="/">Home</Link>
                      </li>
                      <li className="dis-none">
                        <Link to="/services">Services</Link>
                      </li>
                      <li className="dis-none">
                        <Link to="/Furnishing">Furnishing</Link>
                      </li>

                      <li className="dis-none">
                        <HashLink smooth to="/#design-gallery">
                          Design Gallery
                        </HashLink>
                      </li>
                      <li className="dis-none">
                        <Link to="/quote">Get a Free Quote</Link>
                      </li>

                      {/* <li className="dis-none">
                      <Link to="/Dekolen">DekoLens</Link>
                    </li>
                    <li className="dis-none">
                      <Link to="/DekoMatch">Dekomatch</Link>
                    </li> */}
                      <li className="sideLi">
                        <Link to="/about">About Us</Link>
                      </li>
                      {/* <li className="sideLi">
                      <Link to="/contact">Help Center</Link>
                      </li> */}
                      <li className="sideLi">
                        <Link to="/ReferFrined">Refer And Earn</Link>
                      </li>
                      <li className="sideLi">
                        <Link to="/Partners">Partner with us</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="aside-contact-info">
                  <ul>
                    <li>
                      <i className="dlicon ui-1_email-84"></i>info@DECOSMITH.com
                    </li>
                  </ul>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
