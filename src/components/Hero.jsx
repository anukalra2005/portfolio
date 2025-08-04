import React from 'react';
import './Hero.css';
function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h1>Hello, I'm <span>Anu Kalra</span></h1>
        <p>Frontend Developer • React • JavaScript • UI Designer</p>
        <a href="#projects" className="cta-btn">View My Work</a>
      </div>
    </section>
  );
}

export default Hero;
