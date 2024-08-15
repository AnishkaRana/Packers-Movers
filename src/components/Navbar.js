import React from 'react';
import { Link } from 'react-router-dom';
import '../Css//Navbar.css';
import Button from 'react-bootstrap/Button';

const NavigationBar = () => {
  return (
    <>
    
    <div className="top-bar">
      <div className="container">
        <span className="contact-number">+91 5736824251</span>
        <div className="auth-buttons">
          <Button variant="primary">Sign Up</Button>
          <Button variant="primary">Sign In</Button>
        </div>
      </div>
    </div>
    

    <div className="nav-bar">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/service">Service</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/project">Project</Link>
          <Link to="/about">About</Link>
          <Link to="/quote" className="quote-btn">Get a Quote</Link>
        </nav>
      </div>
    </>

  );
};

export default NavigationBar;
