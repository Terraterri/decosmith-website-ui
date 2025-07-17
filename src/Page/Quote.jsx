import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaPlus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";


const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [files, setFiles] = useState([]); // Start with no file inputs

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (index, file) => {
    const updatedFiles = [...files];
    updatedFiles[index] = file;
    setFiles(updatedFiles);
  };

  const handleAddFileInput = () => {
    setFiles([...files, null]);
  };

  const handleRemoveFileInput = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("subject", formData.subject);
    data.append("message", formData.message);

    files.forEach((file, index) => {
      if (file) {
        data.append(`floor_plan_${index + 1}`, file);
      }
    });

    try {
      const response = await fetch("/api/submit-quote", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        toast.success("Form submitted successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setFiles([]);
      } else {
        toast.error("Failed to submit form.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <div className="section section-padding">
        <div className="container">
          <div className="row mt-5">
            <h2 className="text-center underLineContact text-uppercase mt-5">Get A Quote</h2>
            <div className="col-lg-5 col-md-6">
              <div className="contact-card">
                <img src="assets//images//banner//quote.jpg" alt="Quote" />
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="contact-from-wrap">
                <form onSubmit={handleSubmit}>
                  <input
                    name="name"
                    type="text"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <input
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  <textarea
                    name="message"
                    placeholder="Your message"
                    value={formData.message}
                    onChange={handleChange}
                  />

                  {/* Show file inputs only if added */}
                  {files.map((file, index) => (
                    <div
                      key={index}
                      style={{ marginBottom: "10px", display: "flex", alignItems: "start" }}
                    >
                      <input
                        type="file"
                        onChange={(e) => handleFileChange(index, e.target.files[0])}
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveFileInput(index)}
                        title="Remove"
                        className="removeBtn"
                      >
                        <IoMdClose />
                      </button>
                    </div>
                  ))}
                  <div className="col-md-12">
                    <button
                      type="button"
                      onClick={handleAddFileInput}
                      className="addBtn"
                     
                    >
                      <FaPlus className="me-1" />
                      Add Floor Plan
                    </button>
                  </div>
                  <input className="submit w-100" type="submit" value="Get Quote" />
                </form>

                <ToastContainer position="top-right" autoClose={3000} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quote;
