import React from "react";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
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
            <h2 className="text-center underLineContact">Contact Us</h2>
            <div className="col-lg-5 col-md-6">
              <div className="contact-card">
                <img src="assets/images/project/contact.jpg" />
                <div className="card-cont">
                  <div className="row">
                    <div className="cont1 col-md-6">
                      <div className="info-content">
                        <h3 className="etitle">Email</h3>
                        <p className="support">info@dekorlane.com</p>
                      </div>
                    </div>
                    <div className="cont2 col-md-6">
                      <div className="social-icon-style mt-4">
                      <Link className="facebook" target="_blank" to="https://www.facebook.com/profile.php?id=61556083902320">
                    <FaFacebookF />
                    </Link>
                    <Link className="twitter" target="_blank" to="https://twitter.com/DekorLane">
                    <FaXTwitter />
                    </Link>
                   
                    <Link className="behance" target="_blank" to="https://www.instagram.com/dekor_lane/">
                    <FaInstagram />
                    </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="contact-from-wrap">
                <form>
                  <input name="name" type="text" placeholder="Name" />
                  <input name="email" type="email" placeholder="Email" />
                  <input name="subject" type="text" placeholder="Subject" />
                  <textarea name="message" placeholder="Your message" />
                  <input class="submit" type="submit" value="Send Message" />
                </form>
              </div>
            </div>
          </div>
          <div className="map mt-6 mt-md-12">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.25176871577!2d78.40804555!3d17.4123487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1707457499416!5m2!1sen!2sin"></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
