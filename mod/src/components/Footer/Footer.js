import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="foot-conatiner">
      <div className="foot-head">
        <h1>
          LET'S MAKE <br></br>SOMETHING GREAT!
        </h1>
      </div>
      <div className="contact-circle">
        <Link to="/contact"> {/* Link to the Contact page */}
          Contact<br /> Us
          <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: "10px" }} />
        </Link>
      </div>

      <div className="foot-2">
        <img src="../../assets/images/mod-new.png" alt="Logo" />
        <h2 className="foot-para">
          <strong>LOCATION</strong>
          <br></br>Office No 706, Filix Tower, Bhandup, Mumbai - 400078
        </h2>
        <h2 className="foot-para">
          <strong>INQUIRY</strong>
          <br></br>hello@modiclestudioss.com<br></br>+91 91366 32429
        </h2>
      </div>

      <div className="foot-icons">
        <a href="">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>

      <div className="foot-3">
        <p className="foot-para">
          © 2018 <strong>Modicle Studios Pvt. Ltd.</strong> All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
