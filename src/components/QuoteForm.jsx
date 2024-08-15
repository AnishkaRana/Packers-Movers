import React from "react";
import "../Css/QuoteForm.css";

const QuoteForm = () => {
  return (
    <div className="quote-form-container">
      <h2>Request a quota</h2>
      <form className="quote-form">
        <div className="form-row">
          <div className="form-group">
            <label>Pickup Location</label>
            <input type="text" name="pickupLocation" />
          </div>
          <div className="form-group">
            <label>Delivery Location</label>
            <input type="text" name="deliveryLocation" />
          </div>
          <div className="form-group">
            <label>Type of Departure</label>
            <input type="text" name="typeOfDeparture" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="tel" name="phoneNumber" />
          </div>
          <div className="form-group form-submit">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default QuoteForm;
