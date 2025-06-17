import React, { useState } from "react";
import { Link } from "react-router-dom";
const Quote = () => {
  const [propertyType, setPropertyType] = useState(null);
  const handlePropertyType = (event) => {
    const type = event.target.value;
    setPropertyType(type);
  };
  // console.log("state value of property type ===", propertyType);
  return (
    <>
      {/* <div className="breadcrumb-area breadcrumb-padding bg-img serv-bg">
        <div className="container">
          <div className="breadcrumb-content text-center">
            <h2>Quotation Details</h2>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <i className="fa fa-angle-right"></i>
              </li>
              <li>Quotation Details</li>
            </ul>
          </div>
        </div>
      </div> */}
      <nav aria-label="breadcrumb mt-5 mb-5">
        <ol className="breadcrumb">
          {/* <li className="breadcrumb-item">
            <Link to="/">Home </Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/quote"> / Get Free Quotation</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            / Data
          </li> */}
        </ol>
      </nav>

      <div className="get-form pt-5 pb-5 mt-5">
        <div className="container">
        <h2 className="text-center underLineContact">  Get a<span className="serv-span"> Free Quote</span></h2>
          <div className="contact-box ">
            <div className="left">
              <img src="assets//images//banner//form.jpg" />
            </div>
            <div className="right">
              <h2 className="title text-center">
                Get a<span className="serv-span"> Free Quote</span>
              </h2>
              <form className="form-get">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Enter E-mail"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="number"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Enter Mobile"
                  />
                </div>
                <div className="form-group">
                  <select className="form-control">
                    <option value="">Select Your City</option>
                    <option value="1"> Kakinada</option>
                    <option value="2">Hyderabad</option>
                    <option value="3">Vizag</option>
                    <option value="4">Rajahmundry</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    type="textarea"
                    className="form-control"
                    id="inputEmail4"
                    placeholder="Type Your Message"
                  />
                </div>{" "}
                <div className="form-group">
                  <select
                    className="form-control"
                    onChange={handlePropertyType}
                  >
                    <option value="">Select Property Type</option>
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </div>
                <div className="form-group">
                  {propertyType == "Residential" ? (
                    <select className="form-control ">
                      <option value="">Select Property</option>
                      <option value="Villa">Villa</option>
                      <option value="Apartment">Apartment</option>
                    </select>
                  ) : (
                    <select className="form-control ">
                      <option value="">Select Property</option>

                      <option value="Office Hall">Office Hall</option>
                      <option value="Shopping Mall">Shopping Mall</option>
                      <option value="Hotels">Hotels</option>
                    </select>
                  )}
                </div>
                <div className="btn-frm">
                  <button className="sub-frm">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
