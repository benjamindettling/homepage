import React from "react";
import profileImg from "/assets/profile.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About me</h2>
        <div className="row about-wrapper">
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__image">
              <img
                alt="Profile"
                className="img-fluid rounded shadow-lg"
                height="auto"
                width="300px"
                src={profileImg}
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__info">
              <p className="about-wrapper__info-text">
                I’m a motivated computer scientist who studied at ETH Zürich and have worked on multiple projects independently.
              </p>
              <p className="about-wrapper__info-text">
                dancer, pianist, model
              </p>
              <span className="d-flex mt-3">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="cta-btn cta-btn--resume"
                  href="/assets/CV_Benjamin_Dettling.pdf"
                >
                  View Resume
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
