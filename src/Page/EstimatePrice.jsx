import React, { useState } from "react";
// import "./StepForm.css";

const EstimatePrice = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    propertyType: "",
    floorplan: "",
    purpose: "",
    requirements: {
      kitchen: true,
      wardrobe: 1,
      entertainment: 1,
      study: 1,
      crockery: 1,
    },
    name: "",
    phone: "",
    email: "",
    possession: "",
    pincode: "",
  });

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSelect = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleRequirementChange = (item, type) => {
    setFormData({
      ...formData,
      requirements: {
        ...formData.requirements,
        [item]:
          type === "inc"
            ? formData.requirements[item] + 1
            : Math.max(0, formData.requirements[item] - 1),
      },
    });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitForm = () => {
    console.log("Form Submitted:", formData);
    alert("Form Submitted! Check console for data.");
  };

  return (
    <div className="step-form-container">
      {/* STEP 1: Property Type */}
      {step === 1 && (
        <div>
          <h2 className="step-title">LET'S GET STARTED</h2>
          <p className="step-subtitle">STEP 1 OF 4</p>
          <h4>Property Type</h4>
          {["Apartment", "Villa", "Office", "Commercial"].map((type) => (
            <button
              key={type}
              onClick={() => handleSelect("propertyType", type)}
              className={`select-btn ${
                formData.propertyType === type ? "active" : ""
              }`}
            >
              {type}
            </button>
          ))}
          <br />
          <button className="nav-btn" onClick={nextStep}>
            NEXT
          </button>
        </div>
      )}

      {/* STEP 2: Floor Plan & Purpose */}
      {step === 2 && (
        <div>
          <h2 className="step-title">SELECT FLOOR PLAN</h2>
          <p className="step-subtitle">STEP 2 OF 4</p>
          <h4>Your Floorplan</h4>
          {["1 BHK", "2 BHK", "3 BHK", "3+ BHK"].map((plan) => (
            <button
              key={plan}
              onClick={() => handleSelect("floorplan", plan)}
              className={`select-btn ${
                formData.floorplan === plan ? "active" : ""
              }`}
            >
              {plan}
            </button>
          ))}

          <h4>Purpose</h4>
          {["Move In", "Rent Out", "Renovate"].map((p) => (
            <button
              key={p}
              onClick={() => handleSelect("purpose", p)}
              className={`select-btn ${
                formData.purpose === p ? "active" : ""
              }`}
            >
              {p}
            </button>
          ))}

          <br />
          <button className="nav-btn back" onClick={prevStep}>
            BACK
          </button>
          <button className="nav-btn" onClick={nextStep}>
            NEXT
          </button>
        </div>
      )}

      {/* STEP 3: Requirements */}
      {step === 3 && (
        <div>
          <h2 className="step-title">TELL US WHAT YOU NEED</h2>
          <p className="step-subtitle">STEP 3 OF 4</p>
          <h4>Your requirements for {formData.floorplan}</h4>

          <div className="requirement-item">
            <label>
              <input
                type="checkbox"
                checked={formData.requirements.kitchen}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    requirements: {
                      ...formData.requirements,
                      kitchen: e.target.checked,
                    },
                  })
                }
              />
              Kitchen
            </label>
          </div>

          {["wardrobe", "entertainment", "study", "crockery"].map((item) => (
            <div className="requirement-item" key={item}>
              <span className="requirement-label">{item}</span>
              <div>
                <button
                  className="counter-btn"
                  onClick={() => handleRequirementChange(item, "dec")}
                >
                  -
                </button>
                <span className="counter-value">
                  {formData.requirements[item]}
                </span>
                <button
                  className="counter-btn"
                  onClick={() => handleRequirementChange(item, "inc")}
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <br />
          <button className="nav-btn back" onClick={prevStep}>
            BACK
          </button>
          <button className="nav-btn" onClick={nextStep}>
            NEXT
          </button>
        </div>
      )}

      {/* STEP 4: Signup */}
      {step === 4 && (
        <div>
          <h2 className="step-title">YOUR ESTIMATE IS ALMOST READY</h2>
          <p className="step-subtitle">STEP 4 OF 4</p>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Enter your mobile number"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="possession"
            placeholder="Possession in"
            value={formData.possession}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="pincode"
            placeholder="Enter your pincode"
            value={formData.pincode}
            onChange={handleInputChange}
          />
          <br />
          <button className="nav-btn back" onClick={prevStep}>
            BACK
          </button>
          <button className="nav-btn" onClick={submitForm}>
            SIGN UP
          </button>
        </div>
      )}
    </div>
  );
};

export default EstimatePrice;
