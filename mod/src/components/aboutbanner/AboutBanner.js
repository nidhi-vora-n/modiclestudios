import React from "react";
import "./AboutBanner.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faHomeAlt, faHomeLg, faHomeUser } from "@fortawesome/free-solid-svg-icons";

const AboutBanner = ({title}) => {
  return (
    <div className="banner-section">
      {/* Background Video */}
      <video autoPlay muted loop className="background-video">
        <source src="../../assets/images/modicleabout.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Yellow Overlay */}
      <div className="yellow-overlay"></div>

      {/* Overlay Content */}
      <div className="banner-content">
        {/* <p className="breadcrumb"><FontAwesomeIcon icon={faHomeUser} /><Link to="/" style={{textDecoration:"none", color:"#fff"}}> Home</Link> &gt; <span> About Us</span></p> */}
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default AboutBanner;
