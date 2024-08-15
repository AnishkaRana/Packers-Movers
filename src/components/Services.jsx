import React from "react";
import "../Css/Services.css";
import Image from "../Images/ImagePort.jpg";
import Image1 from "../Images/ImagePort2.jpg";
import Image2 from "../Images/ImagePort5.jpg";
import Alwaysavailable from "../Icons/Icon9.png";
import Offer from "../Icons/Icon2.png";
import Residential from "../Icons/Icon14.png";
import Corporaterelocation from "../Icons/Icon10.png";
import Intermoves from "../Icons/Icon8.png";
import miltrymoving from "../Icons/Icon12.png";

const Services = () => {
  return (
    <>
      <div>
        <div className="Services-div">Our Services</div>
        <div className="service-image-container">
          <div className="image-wrapper">
            <img src={Image} alt="Left" />
          </div>
          <div className="image-wrapper">
            <img src={Image1} alt="Middle" />
          </div>
          <div className="image-wrapper">
            <img src={Image2} alt="Right" />
          </div>
        </div>
        <div>
          <div className="services-container">
            <div className="service-box">
              <div className="service-icon">
                <img src={Alwaysavailable} alt="Always-Available" />
              </div>
              <h3>Always Available</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas venenatis augue nec pretium ornare.
              </p>
            </div>
            <div className="service-box">
              <div className="service-icon">
                <img src={Offer} alt="Best-Offer" />
              </div>
              <h3>Best Offers</h3>
              <p>
                Nam ultrices enim eu mattis cursus. Nam consectetur urna eget
                efficitur pulvinar sae cenas.
              </p>
            </div>
            <div className="service-box">
              <div className="service-icon">
                <img src={Residential} alt="Residential-Moves" />
              </div>
              <h3>Residential Moves</h3>
              <p>
                Morbi volutpat consequat cofdonium. Proin vel rutrum est, quisav
                rahus justo. Quisque et tortor sem.
              </p>
            </div>
            <div className="service-box">
              <div className="service-icon">
                <img src={Corporaterelocation} alt="Corporate-Relocation" />
              </div>
              <h3>Corporate Relocation</h3>
              <p>
                Vestibulum maximus orci in ante convallis egestas. Nulla a ex
                eget ex suscipit viverra. Duis a augue id urna.
              </p>
            </div>
            <div className="service-box">
              <div className="service-icon">
                <img src={Intermoves} alt="International-Moves" />
              </div>
              <h3>International Moves</h3>
              <p>
                Ut non magna pellentesque, scelerisque erat ut, ultrices lorem.
                Morbi nisl osuere, efficitur varius orci.
              </p>
            </div>
            <div className="service-box">
              <div className="service-icon">
                <img src={miltrymoving} alt="Military-Moving" />
              </div>
              <h3>Military Moving</h3>
              <p>
                Nam ultrices enim eu mattis cursus. Nam consectetur urna eget
                efficitur pulvinar sae cenas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
