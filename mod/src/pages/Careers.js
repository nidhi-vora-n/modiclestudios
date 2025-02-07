import React from "react";
import "./Careers.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHomeUser,
  faPaperPlane,
  faShare,
  faShareAlt,
  faShareFromSquare,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <>
      <div className="careers-conatiner">
        <div className="careers-head">
          <img src="../../assets/images/careers-banner.jpg"></img>
        </div>
        <div className="breadcrumbs-content">
          <p className="breadcrumb">
            <FontAwesomeIcon icon={faHomeUser} />
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              {" "}
              Home
            </Link>{" "}
            &gt; <span> Careers</span>
          </p>
          <h1>CAREERS</h1>
        </div>
      </div>
      <div className="careers-mid-container">
        <div className="careers-left">
          <img src="../../assets/images/yellow.png" alt="Background" />
          <img src="../../assets/images/career-human.png" alt="Overlay" />
        </div>
        <div className="careers-right">
          <h3 className="form-header">Build your Career</h3>
          <h1 className="form-title">Send your Resume</h1>
          <form className="contact-form">
            <div className="form-group form-row">
              <input
                type="text"
                placeholder="First Name"
                className="form-input"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="form-input"
              />
            </div>
            <div className="form-row">
              <input type="email" placeholder="Email*" className="form-input" />
              <input type="tel" placeholder="Phone" className="form-input" />
            </div>
            <div className="form-group">
              <label htmlFor="resume-upload" className="form-label">
                Upload Resume
              </label>
              <div style={{ position: "relative" }}>
                <label
                  htmlFor="resume-upload"
                  style={{
                    background: "linear-gradient(90deg, #ffd74e, #e5a837)",
                    color: "#000",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    display: "inline-block",
                    marginTop: "14px",
                    fontFamily: "Montserrat, serif",
                  }}
                >
                  Choose File
                </label>
                <span
                  id="file-chosen"
                  style={{
                    marginLeft: "10px",
                    color: "#fff",
                    fontFamily: "Montserrat, serif",
                  }}
                >
                  No file chosen
                </span>
                <input
                  type="file"
                  id="resume-upload"
                  className="form-input"
                  style={{
                    display: "none",
                  }}
                  onChange={(e) => {
                    const fileName =
                      e.target.files[0]?.name || "No file chosen";
                    document.getElementById("file-chosen").textContent =
                      fileName;
                  }}
                />
              </div>
            </div>

            <div className="form-group">
              <textarea
                placeholder="Tell Us About Project *"
                className="form-textarea"
              ></textarea>
            </div>

            <button type="submit" className="form-button">
              <FontAwesomeIcon icon={faShare} style={{ marginRight: "10px" }} />
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Careers;
