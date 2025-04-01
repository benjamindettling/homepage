import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-wrapper">
          <p className="contact-wrapper__text">
            Feel free to reach out to collaborate, connect, or ask questions!
          </p>
          <a
            rel="noreferrer"
            target="_blank"
            className="cta-btn cta-btn--resume"
            href="mailto:benjamin@benjamindettling.ch"
          >
            Email Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
