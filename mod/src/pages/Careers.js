import React, { useState } from "react";
import "./Careers.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import AboutBanner from "../components/aboutbanner/AboutBanner";
import axios from "axios";

const Careers = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    resume: null,
  });

  const [fileName, setFileName] = useState("No file chosen");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "No file chosen");
    setFormData({ ...formData, resume: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message || !formData.resume) {
      setStatusMessage("All fields and resume are required!");
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("firstName", formData.firstName);
    formDataToSend.append("lastName", formData.lastName);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("message", formData.message);
    formDataToSend.append("resume", formData.resume);

    try {
      const response = await axios.post("http://localhost:5000/apply-job", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setStatusMessage(response.data.message);
      setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "", resume: null });
      setFileName("No file chosen");
    } catch (error) {
      setStatusMessage(error.response?.data?.error || "Error submitting application");
    }
  };

  return (
    <>
      <AboutBanner title="CAREERS" />
      <div className="careers-conatiner"></div>
      <div className="careers-mid-container">
        <div className="careers-left">
          <div className="gradient-circle"></div>
          <h1>GROW WITH <br /> US!</h1>
        </div>
        <div className="careers-right">
          <h3 className="form-header">Build your Career</h3>
          <h1 className="form-title">Send your Resume</h1>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group form-row">
              <input type="text" name="firstName" placeholder="First Name" className="form-input" value={formData.firstName} onChange={handleChange} />
              <input type="text" name="lastName" placeholder="Last Name" className="form-input" value={formData.lastName} onChange={handleChange} />
            </div>
            <div className="form-row">
              <input type="email" name="email" placeholder="Email*" className="form-input" value={formData.email} onChange={handleChange} />
              <input type="tel" name="phone" placeholder="Phone" className="form-input" value={formData.phone} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="resume-upload" className="form-label" style={{cursor:"pointer"}}>Upload Resume</label>
              <div style={{ position: "relative" }}>
                <label htmlFor="resume-upload" className="upload-btn" style={{color:"white", marginLeft:"10px", marginTop:"10px",fontFamily:"Montserrat"}}>
                  Choose File :
                </label>
                <span id="file-chosen" style={{color:"#ffd74e", fontFamily:"Montserrat"}}>{fileName}</span>
                <input type="file" id="resume-upload" className="form-input" style={{ display: "none" }} onChange={handleFileChange} />
              </div>
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Tell Us About Project *" className="form-textarea" value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="form-button">
              <FontAwesomeIcon icon={faShare} style={{ marginRight: "10px" }} />
              Submit
            </button>
            {statusMessage && <p className="status-message">{statusMessage}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default Careers;
