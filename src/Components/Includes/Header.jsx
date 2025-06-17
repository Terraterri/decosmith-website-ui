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
          <div className="row align-items-center text-center">
            <div className="col-lg-4 col-md-5 col-4">
              <div className="logo">
                <Link to="/">
                  <img
                    src="assets/images/work/main-logo1.png"
                    alt="Dekorlane-Logo"
                  />
                  {/* <img src="assets/images/work/logo-text.png" className="logText" alt="Dekorlane-Logo" /> */}
                  {/* <span><h2 className="doklogo">Dekor<span className="logoSpan">Lane</span></h2></span> */}
                </Link>
              </div>
            </div>
            <div className="col-lg-7 d-none d-lg-block d-flex">
              <div className="main-menu">
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
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
                    {/* <Link className="dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Our Works
  </Link>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><Link className="dropdown-item dropDeko" to="/">DekoLens</Link></li>
    
                      <li><Link className="dropdown-item" to="/DekoMatch">DekoMatch</Link></li>
    
   
  </ul> */}
                    {/* <li>
                      <Link to="/Dekolen">DekoLens</Link>
                    </li>
                    <li>
                      <Link to="/DekoMatch">Dekomatch</Link>
                    </li> */}
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
      {/* {hamburger && (
        <div className="header-aside-active  in-left">
          <div className="header-aside-wrap">
            <button
              className="aside-close hamburger-menu-btn"
              onClick={closeHamburger}
            >
              <i className="dlicon ui-1_simple-remove"></i>
            </button>
            <div className="header-aside-content">
              <div className="mobile-menu-area">
                <div className="mobile-menu-wrap ">
                  <div className="mobile-navigation">
                    <nav>
                      <ul className="mobile-menu">
                        <li className="menu-item-has-children">
                          <Link to="/">HOME</Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link to="/services">SERVICE</Link>
                        </li>
                        <li className="menu-item-has-children">
                          <Link to="/quote">GET A FREE QUOTE</Link>
                        </li>
                        <li>
                          <Link to="/contact">CONTACT </Link>
                        </li>
                        <li>
                          <Link to="/about">ABOUT US</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="header-aside-menu">
                <nav>
                  <ul className="sideUi">
                    <li className="sideLi">
                      <Link to="/about">About Us</Link>
                    </li>
                    <li className="sideLi">
                      <Link to="/contact">Help Center</Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="aside-contact-info">
                <ul>
                  <li>
                    <i className="dlicon ui-1_email-84"></i>info@dekorlane.com
                  </li>
                </ul>
              </div>
              <div className="social-icon-style">
                <Link className="facebook" to="/">
                  <i className="fa-brands fa-facebook-f"></i>
                </Link>
                <Link className="twitter" to="/">
                  <i className="fa-brands fa-twitter"></i>
                </Link>
                <Link className="google-plus" to="/">
                  <i className="fa-brands fa-google-plus-g"></i>
                </Link>
                <Link className="behance" to="/">
                  <i className="fa-brands fa-square-instagram"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )} */}

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
                      <i className="dlicon ui-1_email-84"></i>info@dekorlane.com
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
                    to="https://twitter.com/DekorLane"
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
