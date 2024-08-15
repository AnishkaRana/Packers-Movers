import React from "react";
import "../Css/Reviews.css";
import Image from "../Images/ImagePort.jpg";

const Reviews = () => {
  return (
    <>
      <div className="reviews-section">
        <h2 className="reviews-title">Reviews</h2>
        <p className="reviews-subtitle">Our Happy Customers</p>
        <div className="review-card">
          <p className="review-text">
            sdnweifmmxkamixdnqwurhwimiwdfmiwefjqwuisdoqmdu9wefudbji
          </p>
          <div className="reviewer">
            <img src={Image} alt="Reena Sharma" className="reviewer-image" />
            <p className="reviewer-name">Reena Sharma</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
