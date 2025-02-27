import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import AboutBanner from "../components/aboutbanner/AboutBanner";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/send-email", { // Change 5001 to 5000
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSuccessMessage("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setSuccessMessage("Error sending message. Please try again.");
      }
    } catch (error) {
      setSuccessMessage("Failed to connect to server.");
    }
  };

  return (
    <>
      <AboutBanner title="CONTACT US" />
      <div className="contact-wrapper" data-aos="fade-up">
        <div className="contact-info">
          {/* <div className="hero-gradient-circle"></div> */}
          <h2>
            <FontAwesomeIcon icon={faPhone} /> +91 91366 32429
          </h2>
          <h3>
            <FontAwesomeIcon icon={faLocationDot} /> Location:
          </h3>
          <p>
            <a href="https://maps.app.goo.gl/BHv5qKPYcKgvUwWr9">
              Office No 706, Filix Tower, Bhandup, Mumbai - 400078
            </a>
          </p>
          <h3>
            <FontAwesomeIcon icon={faEnvelope} /> Email:
          </h3>
          <p>hello@modiclestudioss.com</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/modiclestudios" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/modiclestudios/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.youtube.com/@modiclestudios9852" target="_blank">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://www.linkedin.com/company/modicle-studios/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>

        <div className="contact-form-container">
          <h3>HAVE QUESTIONS?</h3>
          <h1>Send us a Message</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
              <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
            </div>
            <div className="form-row">
              <input type="email" name="email" placeholder="Email*" value={formData.email} onChange={handleChange} required />
              <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
            </div>
            <textarea name="message" placeholder="Tell Us About Your Project *" value={formData.message} onChange={handleChange} required></textarea>
            <button type="submit">
              <FontAwesomeIcon icon={faPaperPlane} /> Get In Touch
            </button>
          </form>
          {successMessage && <p className="success-message">{successMessage}</p>}
        </div>
      </div>
    </>
  );
};

export default Contact;
