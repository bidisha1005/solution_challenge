import React from "react";
import "./HomePage.css"; // Import CSS file

const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Find Care</a>
        <a href="#">Telehealth</a>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="gradient-text">Your Health, Our Priority</h1>
          <p>Find the best healthcare services tailored to your needs.</p>
          <button className="btn-primary">Get Started</button>
          <button className="btn-emergency">Emergency</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="service-card blue">
          <h3>Online Consultation</h3>
          <p>Get expert advice from top doctors remotely.</p>
        </div>
        <div className="service-card green">
          <h3>Find a Specialist</h3>
          <p>Connect with the best healthcare professionals.</p>
        </div>
        <div className="service-card purple">
          <h3>Emergency Care</h3>
          <p>Quick response to critical health conditions.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
