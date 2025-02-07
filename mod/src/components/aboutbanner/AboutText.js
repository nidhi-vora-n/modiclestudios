import React, { useRef } from "react";
import "./AboutText.css";

const AboutText = () => {
  const containerRef = useRef(null);
  const movingImageRef = useRef(null);

  const handleMouseMove = (event) => {
    const container = containerRef.current;
    const movingImage = movingImageRef.current;
    const centerImage = movingImageRef.current.previousSibling; // This targets the center image

    if (!container || !movingImage || !centerImage) return;

    const rect = container.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const mouseX = event.clientX - rect.left - centerX;
    const mouseY = event.clientY - rect.top - centerY;

    const angle = Math.atan2(mouseY, mouseX); // Calculate angle
    const radius = 120; // Circle radius

    const x = centerX + radius * Math.cos(angle) - movingImage.offsetWidth / 2;
    const y = centerY + radius * Math.sin(angle) - movingImage.offsetHeight / 2;

    // Apply the transformations to the moving image
    movingImage.style.transform = `translate(${x}px, ${y}px) rotate(${angle}rad)`;

    // Apply the rotation only to the center image, keeping it in the same position
    centerImage.style.transform = `rotate(${angle}rad)`;
  };

  return (
    <div className="about-container">
      <div
        className="about-container-left"
        ref={containerRef}
        onMouseMove={handleMouseMove}
      >
        <div className="background-text">
          <p>360° Marketing Solutions</p>
        </div>
        {/* Center Image */}
        <img
          src="../../assets/images/logo-mono.png"
          alt="Center"
          className="center-image"
        />

        {/* Moving Image */}
        <div className="moving-image" ref={movingImageRef}></div>
      </div>

      <div className="about-container-right">
        <h1 style={{ color: "#fff" }}>Hello</h1>
        <p>
          Modicle Studios is a leading Marketing Communications Agency; an
          extension of your arm, a partner that understands your business vision
          & delivers meaningful solutions. We are a team of passionate
          go-getters who combine our hunger for knowledge and vision to deliver
          the best brand experiences, build emotional connections & brand
          loyalty. We work at the confluence of insights, storytelling, and
          technology to create lasting, active connections between people,
          products and companies. Your Idea, Your Business, Your Story; is what
          got us this far and what keeps us going. We Ideate, We Innovate We
          Implement, and we know to bring a smile on your face.
        </p>
      </div>
    </div>
  );
};

export default AboutText;
