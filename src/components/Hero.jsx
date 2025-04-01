import React from "react";

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <h1 className="hero-title load-hidden">
          Hi, my name is <span className="text-color-main">Benjamin Dettling</span>
          <br />
          I'm a motivated computer scientist from ETH Zürich.
        </h1>
        <p className="hero-cta load-hidden">
          <a rel="noreferrer" className="cta-btn cta-btn--hero" href="#about">
            Know more
          </a>
        </p>
      </div>
    </section>
  );
};

export default Hero;
