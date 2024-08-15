import React from "react";
import "../Css/ProcessStep.css";

const ProcessStep = ({ number, icon, title }) => {
    return (
        <div className="process-step">
            <div className="step-circle">{number}</div>
            <img src={icon} alt={title} className="step-icon" />
            <p className="step-title">{title}</p>
        </div>
    );
};

export default ProcessStep;
