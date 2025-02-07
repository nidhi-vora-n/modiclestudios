import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocation,
  faMailBulk,
  faMailForward,
  faMessage,
  faMobile,
  faMobileAlt,
  faMobileAndroid,
  faPaperPlane,
  faPhone,
  faPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {

useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with options
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5001/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert("Error sending message. Please try again.");
      }
    } catch (error) {
      alert("Failed to connect to server.");
    }
  };

  return (
    <div className="contact-container" data-aos="fade-up">
      <div className="contact-left">
        <h2 className="foot-para-contact-numnber">
          <FontAwesomeIcon icon={faMobileAlt} style={{ marginRight: "10px" }} />
          +91 91366 32429
        </h2>
        <h2 className="foot-para-contact">
          <strong>
            <span>
              <FontAwesomeIcon
                icon={faLocation}
                style={{ marginRight: "10px" }}
              />
              LOCATION
            </span>
          </strong>
          <br></br>
          <br></br>Office No 706, Filix Tower, Bhandup, Mumbai - 400078
        </h2>
        <h2 className="foot-para-contact">
          <strong>
            <span>
              <FontAwesomeIcon
                icon={faMailForward}
                style={{ marginRight: "10px" }}
              />
              OFFICIAL EMAIL
            </span>
          </strong>
          <br></br>
          <br></br>hello@modiclestudioss.com
        </h2>

        <div className="social-links">
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
      <div className="contact-right">
        <h3 className="form-header">HAVE QUESTIONS?</h3>
        <h1 className="form-title">Send us a Message</h1>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group form-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="form-input"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="form-input"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder="Email*"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="form-input"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Tell Us About Project *"
              className="form-textarea"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="form-button">
            <FontAwesomeIcon
              icon={faPaperPlane}
              style={{ marginRight: "10px" }}
            />
            Get In Touch
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
