import React, { useState } from "react";
import "../Css/AboutUs.css";
import Image1 from "../Images/Imageland6.jpg";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const renderContent = () => {
    switch (activeTab) {
      case "mission":
        return (
          <p>
            Our mission at Menter is to create an honest, hassle-free, and
            quality moving experience for our customers. We specialize in large
            residential moves as well as local, long distance, and office moves.
            We offer packing moving services.
          </p>
        );
      case "values":
        return (
          <p>
            Our values are integrity, reliability, and customer satisfaction. We
            aim to provide the best service with transparency and dedication.
          </p>
        );
      case "vision":
        return (
          <p>
            Our vision is to be the leading moving service provider known for
            exceptional service and customer care. We envision a future where
            moving is stress-free and efficient for everyone.
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="about-us-container">
      <div className="about-box">
        <div className="box" />
        <div className="box" />
        <div className="box" />
        <div className="box" />
      </div>
      <div className="about-us">
        <h1>About Us</h1>
        <div className="tabs">
          <div
            className={`tab ${activeTab === "mission" ? "active" : ""}`}
            onClick={() => setActiveTab("mission")}
          >
            OUR MISSION
          </div>
          <div
            className={`tab ${activeTab === "values" ? "active" : ""}`}
            onClick={() => setActiveTab("values")}
          >
            OUR Values
          </div>
          <div
            className={`tab ${activeTab === "vision" ? "active" : ""}`}
            onClick={() => setActiveTab("vision")}
          >
            OUR VISION
          </div>
        </div>
        <div className="content">{renderContent()}</div>
        <button className="read-more">Read More</button>
      </div>
      <div className="aboutimage-container">
        <img src={Image1} alt="About Us" />
      </div>
    </div>
  );
};

export default AboutUs;
