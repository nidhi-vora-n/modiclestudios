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
        <h2 className="foot-para foot-para-loc">
          <strong>LOCATION</strong>
          <br></br><a href="https://maps.app.goo.gl/BHv5qKPYcKgvUwWr9" style={{textDecoration:"none", color:"white"}}>Office No 706, Filix Tower, Bhandup, Mumbai - 400078</a>
        </h2>
        <h2 className="foot-para">
          <strong>INQUIRY</strong>
          <br></br>hello@modiclestudios.com<br></br>+91 91366 32429
        </h2>
      </div>

      <div className="foot-icons">
        <a href="https://www.instagram.com/modiclestudios/" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.facebook.com/modiclestudios" target="_blank">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://www.youtube.com/@modiclestudios9852" target="_blank">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://www.linkedin.com/company/modicle-studios/" target="_blank">
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
