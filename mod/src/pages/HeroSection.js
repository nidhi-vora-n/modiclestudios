import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./HeroSection.css";
import "font-awesome/css/font-awesome.min.css";

const HeroSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with options
  }, []);

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="hero-container">
      {/* Gradient Circle */}
      <div className="gradient-circle"></div>

      {/* Left Content */}
      <div className="hero-content">
        <h1 data-aos="fade-up">Ideate.</h1>
        <h1 data-aos="fade-up" data-aos-delay="300">Innovate.</h1>
        <h1 data-aos="fade-up" data-aos-delay="600">Implement.</h1>
      </div>

      {/* Right Award Badge */}
      <div className="award-badge" onClick={handlePopup}>
        <div className="badge-circle">
          <svg width="160" height="160" viewBox="0 0 120 120" className="circular-text">
            <defs>
              <path id="circlePath" d="M60,10 a50,50 0 1,1 -0.1,0"></path>
            </defs>
            <text fill="#fff" fontSize="14" fontWeight="bold">
              <textPath href="#circlePath">
                • CHECK OUT OUR TEAM • CHECK OUT OUR TEAM • CHECK OUT NOW
              </textPath>
            </text>
          </svg>
          <i className="fa fa-play-circle" aria-hidden="true"></i>
        </div>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className={`popup-overlay ${showPopup ? "show" : ""}`}>
          <div className="popup-content">
            <span className="popup-close" onClick={handlePopup}>
              &times;
            </span>
            <video controls autoPlay>
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
