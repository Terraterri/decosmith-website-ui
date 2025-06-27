import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { Country, State, City } from "country-state-city";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiClient } from "../Utills/httpClient";

const Contact = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });

  // State declarations
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [phoneCode, setPhoneCode] = useState("+91");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [errors, setErrors] = useState({});
  const [otp, setOtp] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [isNumberVerified, setIsNumberVerified] = useState(false);
  const [otpTimer, setOtpTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  // Form data state
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    country: "",
    state: "",
    city: "",
    subject: "",
    message: "",
    type: "contact",
  });

  // Initialize countries
  useEffect(() => {
    const allCountries = Country.getAllCountries();
    setCountries(allCountries);
  }, []);

  // OTP timer logic
  useEffect(() => {
    let timer;
    if (isModalOpen && otpTimer > 0) {
      timer = setInterval(() => {
        setOtpTimer((prev) => prev - 1);
      }, 1000);
    }

    if (otpTimer === 0) {
      setCanResend(true);
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isModalOpen, otpTimer]);

  // Handle country selection
  useEffect(() => {
    if (selectedCountry) {
      const pc = countries.find(
        (country) => country.isoCode === selectedCountry.isoCode
      );
      const newPhoneCode = pc.phonecode ? `+${pc.phonecode}` : "+--";
      setPhoneCode(newPhoneCode);

      setFormData((prev) => ({
        ...prev,
        country: selectedCountry.name,
        state: "",
        city: "",
      }));

      setSelectedState(null);
      setSelectedCity(null);
      setStates(State.getStatesOfCountry(selectedCountry.isoCode));
      setCities([]);
    }
  }, [selectedCountry, countries]);

  // Handle state selection
  useEffect(() => {
    if (selectedState && selectedCountry) {
      setCities(
        City.getCitiesOfState(selectedCountry.isoCode, selectedState.isoCode)
      );
      setFormData((prev) => ({ ...prev, state: selectedState.name, city: "" }));
      setSelectedCity(null);
    }
  }, [selectedState, selectedCountry]);

  // Handle city selection
  useEffect(() => {
    if (selectedCity) {
      setFormData((prev) => ({ ...prev, city: selectedCity }));
    }
  }, [selectedCity]);

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "mobile") {
      const onlyDigits = value.replace(/\D/g, "");
      setFormData((prev) => ({
        ...prev,
        mobile: onlyDigits,
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // OTP request handler
  const handleOtpRequest = async () => {
    if (!formData.mobile || formData.mobile.length !== 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    setLoading(true);
    try {
      // Actual OTP generation would go here
      const mockOtp = Math.floor(100000 + Math.random() * 900000).toString();
      console.log("Generated OTP:", mockOtp);
      setGeneratedOtp(mockOtp);
      setIsModalOpen(true);
      setOtpTimer(60);
      setCanResend(false);
      toast.success("OTP sent to your mobile number");
      setLoading(false);
    } catch (err) {
      toast.error("Something went wrong! Please try after sometime");
      setLoading(false);
    }
  };

  // OTP verification handler
  const handleVerifyOtp = async () => {
    if (!otp || otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }

    setLoading(true);
    try {
      if (otp === generatedOtp) {
        setVerificationStatus("success");
        setIsOtpVerified(true);
        setIsNumberVerified(true);
        toast.success("OTP verified successfully!");
        setIsModalOpen(false);
        setOtp("");
      } else {
        setVerificationStatus("error");
        toast.error("Invalid OTP. Please try again.");
      }
      setLoading(false);
    } catch (err) {
      setVerificationStatus("error");
      toast.error("Error verifying OTP. Please try after sometime");
      setLoading(false);
    }
  };

  // Resend OTP handler
  const handleResendOtp = async () => {
    setLoading(true);
    try {
      const mockOtp = Math.floor(100000 + Math.random() * 900000).toString();
      console.log("New OTP:", mockOtp);
      setGeneratedOtp(mockOtp);
      setOtpTimer(60);
      setCanResend(false);
      toast.success("New OTP sent successfully!");
      setLoading(false);
    } catch (err) {
      toast.error("Failed to resend OTP. Please try again.");
      setLoading(false);
    }
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    const fullMobile = phoneCode + formData.mobile;

    // Validation checks
    if (!isOtpVerified) {
      toast.error("Please verify your mobile number with OTP before submitting.");
      return;
    }

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.mobile || formData.mobile.length !== 10) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }
    if (!formData.country) newErrors.country = "Country is required";
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.subject) newErrors.subject = "Subject is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Prepare submission data
    const submissionData = {
      ...formData,
      mobile: fullMobile,
    };

    setLoading(true);
    try {
      // Submit form data
      const response = await apiClient.post("/submissions", submissionData);

      if (response.data.status) {
        toast.success("Form submitted successfully!");

        // Reset form
        setFormData({
          name: "",
          mobile: "",
          email: "",
          country: "",
          state: "",
          city: "",
          subject: "",
          message: "",
          type: "contact",
        });
        setIsNumberVerified(false);
        setIsOtpVerified(false);
      } else {
        toast.error(response.data.message || "Form submission failed");
      }
    } catch (error) {
      console.error("Submission error:", error);
      const errorMsg =
        error.response?.data?.message ||
        error.message ||
        "An error occurred while submitting the form";
      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <nav aria-label="breadcrumb mt-5 mb-5">
        <ol className="breadcrumb"></ol>
      </nav>

      <div className="section section-padding">
        <div className="container">
          <div className="row">
            <h2 className="text-center underLineContact">Contact Us</h2>

            {/* Contact Information Card */}
            <div className="col-lg-5 col-md-6">
              <div className="contact-card">
                <img 
                  src="assets/images/project/contact.jpg" 
                  alt="Contact" 
                  className="img-fluid"
                />
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

            {/* Contact Form */}
            <div className="col-lg-7 col-md-6">
              <div className="contact-from-wrap">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    {/* Name Field */}
                    <div className="col-md-6 pe-0">
                      <input
                        name="name"
                        type="text"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`form-control ${errors.name ? "is-invalid" : ""}`}
                      />
                      {errors.name && (
                        <div className="invalid-feedback d-block">
                          {errors.name}
                        </div>
                      )}
                    </div>

                    {/* Email Field */}
                    <div className="col-md-6">
                      <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                      />
                      {errors.email && (
                        <div className="invalid-feedback d-block">
                          {errors.email}
                        </div>
                      )}
                    </div>

                    {/* Country Select */}
                    <div className="col-md-4 form-group pe-0 mb-3">
                      <select
                        className={`form-control ${errors.country ? "is-invalid" : ""}`}
                        value={
                          selectedCountry ? JSON.stringify(selectedCountry) : ""
                        }
                        onChange={(e) =>
                          setSelectedCountry(JSON.parse(e.target.value))
                        }
                        required
                      >
                        <option value="">Select Country</option>
                        {countries.map((c) => (
                          <option key={c.isoCode} value={JSON.stringify(c)}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                      {errors.country && (
                        <div className="invalid-feedback d-block">
                          {errors.country}
                        </div>
                      )}
                    </div>

                    {/* State Select */}
                    <div className="col-md-4 form-group pe-0 mb-3">
                      <select
                        className={`form-control ${errors.state ? "is-invalid" : ""}`}
                        value={
                          selectedState ? JSON.stringify(selectedState) : ""
                        }
                        onChange={(e) =>
                          setSelectedState(JSON.parse(e.target.value))
                        }
                        disabled={!states.length}
                        required
                      >
                        <option value="">Select State</option>
                        {states.map((s) => (
                          <option key={s.isoCode} value={JSON.stringify(s)}>
                            {s.name}
                          </option>
                        ))}
                      </select>
                      {errors.state && (
                        <div className="invalid-feedback d-block">
                          {errors.state}
                        </div>
                      )}
                    </div>

                    {/* City Select */}
                    <div className="col-md-4 form-group mb-3">
                      <select
                        className={`form-control ${errors.city ? "is-invalid" : ""}`}
                        value={selectedCity || ""}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        disabled={!cities.length}
                        required
                      >
                        <option value="">Select City</option>
                        {cities.map((city) => (
                          <option key={city.name} value={city.name}>
                            {city.name}
                          </option>
                        ))}
                      </select>
                      {errors.city && (
                        <div className="invalid-feedback d-block">
                          {errors.city}
                        </div>
                      )}
                    </div>

                    {/* Mobile Field with OTP Button */}
                    <div className="col-md-8 pe-0">
                      <input
                        name="mobile"
                        type="text"
                        placeholder="Mobile Number"
                        value={formData.mobile}
                        onChange={handleChange}
                        maxLength="10"
                        disabled={isNumberVerified}
                        className={`form-control ${errors.mobile ? "is-invalid" : ""}`}
                      />
                      {errors.mobile && (
                        <div className="invalid-feedback d-block">
                          {errors.mobile}
                        </div>
                      )}
                    </div>
                    <div className="col-md-4">
                      {isNumberVerified ? (
                        <button
                          className="form-control verified btn-success"
                          disabled
                        >
                          ✓ Verified
                        </button>
                      ) : (
                        <button
                          className="form-control btn-primary"
                          type="button"
                          onClick={handleOtpRequest}
                          disabled={
                            loading ||
                            !formData.mobile ||
                            formData.mobile.length !== 10
                          }
                        >
                          {loading ? "Sending..." : "Get OTP"}
                        </button>
                      )}
                    </div>

                    {/* Subject Field */}
                    <div className="col-md-12">
                      <input
                        name="subject"
                        type="text"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`form-control ${errors.subject ? "is-invalid" : ""}`}
                      />
                      {errors.subject && (
                        <div className="invalid-feedback d-block">
                          {errors.subject}
                        </div>
                      )}
                    </div>

                    {/* Message Field */}
                    <div className="col-md-12">
                      <textarea
                        name="message"
                        rows={3}
                        placeholder="Your message"
                        value={formData.message}
                        onChange={handleChange}
                        className="form-control"
                      />
                      <button
                        className="submit btn btn-primary w-100 mt-3"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? "Sending..." : "Send Message"}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="map mt-6 mt-md-12">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.25176871577!2d78.40804555!3d17.4123487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1707457499416!5m2!1sen!2sin"
              style={{ border: 0, width: "100%", height: "450px" }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* OTP Verification Modal */}
      {isModalOpen && (
        <div className="otp-modal">
          <div className="otp-modal-content">
            <div className="otp-modal-header">
              <h5>Verify Mobile Number</h5>
              <button
                type="button"
                className="close-btn"
                onClick={() => {
                  setIsModalOpen(false);
                  setOtp("");
                  setVerificationStatus(null);
                }}
              >
                &times;
              </button>
            </div>
            <div className="otp-modal-body">
              <p className="text-center mb-3">
                We've sent an OTP to {phoneCode}
                {formData.mobile}
              </p>

              <div className="form-group mb-3">
                <input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");
                    if (value.length <= 6) {
                      setOtp(value);
                    }
                  }}
                  maxLength={6}
                  className="form-control text-center otp-input"
                />
              </div>

              <div className="timer-text mb-3 text-center">
                {otpTimer > 0 ? (
                  <span>OTP expires in {otpTimer} seconds</span>
                ) : (
                  <span>OTP expired</span>
                )}
              </div>

              {verificationStatus === "error" && (
                <div className="alert alert-danger text-center">
                  Invalid OTP. Please try again.
                </div>
              )}

              <div className="d-flex gap-3">
                <button
                  className="theme-btn btn-one flex-grow-1"
                  onClick={handleVerifyOtp}
                  disabled={loading || otp.length !== 6}
                >
                  {loading ? "Verifying..." : "Verify OTP"}
                </button>
              </div>

              <div className="text-center mt-3">
                <button
                  className="btn btn-link text-primary"
                  onClick={handleResendOtp}
                  disabled={!canResend || loading}
                >
                  Resend OTP
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <ToastContainer position="top-right" autoClose={5000} />
    </>
  );
};

export default Contact;