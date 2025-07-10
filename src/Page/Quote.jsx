import React from "react";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Quote = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  return (
    <>
      {/* <div className="breadcrumb-area breadcrumb-padding bg-img serv-bg">
        <div className="container">
          <div className="breadcrumb-content text-center">
            <h2>Contact Us</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <i className="fa fa-angle-right"></i>
              </li>
              <li>Contact Us</li>
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
            <a href="/contact"> / contact</a>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            / Data
          </li> */}
        </ol>
      </nav>
      <div className="section section-padding">
        <div className="container">
          <div className="row">
            <h2 className="text-center underLineContact text-uppercase">Get A Quote</h2>
            <div className="col-lg-5 col-md-6">
              <div className="contact-card">
                <img src="assets//images//banner//quote.jpg" />
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="contact-from-wrap">
                <form>
                  <input name="name" type="text" placeholder="Name" />
                  <input name="email" type="email" placeholder="Email" />
                  <input name="subject" type="text" placeholder="Subject" />
                  <textarea name="message" placeholder="Your message" />
                  <input class="submit" type="submit" value="Get Quote" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
