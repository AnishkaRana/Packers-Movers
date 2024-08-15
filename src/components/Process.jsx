import React from 'react';
import ProcessStep from './ProcessStep';
import '../Css/Process.css';

const steps = [
    { number: 1, icon: 'https://via.placeholder.com/50', title: 'Book Your Order' },
    { number: 2, icon: 'https://via.placeholder.com/50', title: 'Pack Your Things' },
    { number: 3, icon: 'https://via.placeholder.com/50', title: 'Move Your Things' },
    { number: 4, icon: 'https://via.placeholder.com/50', title: 'Deliver Your Things' },
];

const Process = () => {
    return (
        <div className="process-section">
            <h2 className="process-title">Our <span>Process</span></h2>
            <p className="process-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Maecenas venenatis augue nec pretium ornare, ante mauris congue dui.
            </p>
            <div className="process-steps">
                {steps.map((step, index) => (
                    <ProcessStep 
                        key={index}
                        number={step.number}
                        icon={step.icon}
                        title={step.title}
                    />
                ))}
            </div>
        </div>
    );
}

export default Process;
