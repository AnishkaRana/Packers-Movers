import React from "react";
import "../Css/Home.css";
import Image from "../Images/Blur4.jpg";
import Image1 from "../Images/Imageland12.jpg";
import QuoteForm from "../components/QuoteForm";
import Services from "../components/Services";
import AboutUs from "../components/AboutUs";
import Reviews from "../components/Reviews";
import Process from "../components/Process";

const Home = () => {
  return (
    <>
      <div className="image-container">
        <div className="left-image">
          <img src={Image} alt="Left Image" />
        </div>
        <div className="right-image">
          <img src={Image1} alt="Right Image" />
        </div>
      </div>
      <div className="form-container">
        <QuoteForm />
      </div>
      <div className="form-container">
        <Services />
      </div>
      <div className="form-container">
        <AboutUs />
      </div>
      <div className="form-container">
        <Reviews />
      </div>
      <div className="form-container">
        <Process />
      </div>
    </>
  );
};

export default Home;
