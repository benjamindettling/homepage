import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer navbar-static-bottom">
      <div className="container">
        <a rel="noreferrer" href="#top" className="back-to-top">
          <i className="fa fa-angle-up fa-2x" aria-hidden="true"></i>
        </a>

        <div className="social-links">
          <a rel="noreferrer" href="https://www.instagram.com/benjamin.dettling" target="_blank">
            <i className="fa fa-instagram fa-inverse"></i>
          </a>
          <a rel="noreferrer" href="https://github.com/benjamindettling" target="_blank">
            <i className="fa fa-github fa-inverse"></i>
          </a>
        </div>

        <hr />

        <p className="footer__text">
          © 2025 - {t("footer.text")}&nbsp;
          <a rel="noreferrer" href="https://github.com/cobiwave" target="_blank">
            Jacobo Martínez
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
