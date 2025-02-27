import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./ServiceSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBullseye } from "@fortawesome/free-solid-svg-icons/faBullseye";
import {
  faBookOpen,
  faBrush,
  faCamera,
  faCode,
  faDrawPolygon,
  faPaintBrush,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ServiceSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with options
  }, []);

  return (
    <div class="container" data-aos="fade-up">
      <div class="overlapping-rows">
        <div class="row mb-4" id="row1">
          <Link to="/Strategy" className="full-link">
            <div class="col-lg-6 d-flex align-items-center">
              <h1>Strategy</h1>
            </div>
            <div class="col-lg-3 d-flex align-items-center">
              <p>
                Brand Identity, Strategy & Consult,
                <br />
                Position, Rebrand
              </p>
            </div>
            <div class="col-lg-3 d-flex align-items-end">
              <h2>
                <FontAwesomeIcon icon={faBullseye} style={{ color: "#fff" }} />
              </h2>
            </div>
          </Link>
        </div>

        <div class="row mb-4" id="row2">
        <Link to="/Design" className="full-link">
          <div class="col-lg-6 d-flex align-items-center">
            <h1>Design</h1>
          </div>
          <div class="col-lg-3 d-flex align-items-center">
            <p>
              Brand Identity, Strategy & Consult,
              <br />
              Position, Rebrand
            </p>
          </div>
          <div class="col-lg-3 d-flex align-items-center">
            <h2>
              <FontAwesomeIcon icon={faPaintBrush} style={{ color: "#fff;" }} />
            </h2>
          </div></Link>
        </div>
        <div class="row mb-4" id="row3">
        <Link to="/Develop" className="full-link">
          <div class="col-lg-6 d-flex align-items-center">
            <h1>Develop</h1>
          </div>
          <div class="col-lg-3 d-flex align-items-center">
            <p>
              Brand Identity, Strategy & Consult,
              <br />
              Position, Rebrand
            </p>
          </div>
          <div class="col-lg-3 d-flex align-items-center">
            <h2>
              <FontAwesomeIcon icon={faCode} style={{ color: "#fff;" }} />
            </h2>
          </div></Link>
        </div>
        <div class="row mb-4" id="row4">
        <Link to="/Content" className="full-link">
          <div class="col-lg-6 d-flex align-items-center">
            <h1>Content</h1>
          </div>
          <div class="col-lg-3 d-flex align-items-center">
            <p>
              Brand Identity, Strategy & Consult,
              <br />
              Position, Rebrand
            </p>
          </div>
          <div class="col-lg-3 d-flex align-items-center">
            <h2>
              <FontAwesomeIcon icon={faBookOpen} style={{ color: "#fff;" }} />
            </h2>
          </div></Link>
        </div>
        <div class="row mb-4" id="row5">
        <Link to="/Digital" className="full-link">
          <div class="col-lg-6 d-flex align-items-center">
            <h1>Digital</h1>
          </div>
          <div class="col-lg-3 d-flex align-items-center">
            <p>
              Brand Identity, Strategy & Consult,
              <br />
              Position, Rebrand
            </p>
          </div>
          <div class="col-lg-3 d-flex justify-content-end align-items-center">
            <h2>
              <FontAwesomeIcon icon={faCamera} style={{ color: "#fff;" }} />
            </h2>
          </div></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
