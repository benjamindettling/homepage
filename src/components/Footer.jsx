import React from "react";

const Footer = () => {
  return (
    <footer className="footer navbar-static-bottom">
      <div className="container">
        <a rel="noreferrer" href="#top" className="back-to-top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </a>
        <div className="social-links">
          {/* Instagram */}
          <a
            rel="noreferrer"
            href="https://www.instagram.com/benjamin.dettling"
            target="_blank"
          >
            <i className="fab fa-instagram fa-2x" style={{ marginRight: '1rem' }}></i>

          </a>
          {/* Github */}
          <a
            rel="noreferrer"
            href="https://github.com/benjamindettling"
            target="_blank"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
        </div>

        <hr />

        <p className="footer__text">
          © {new Date().getFullYear()} - Portfolio developed by Benjamin Dettling | Based on template by{" "}
          <a rel="noreferrer" href="https://github.com/cobiwave" target="_blank">
            Jacobo Martínez
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
