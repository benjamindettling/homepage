import React from "react";
import { useTranslation } from "react-i18next";
import { FaGithub, FaInstagram, FaAngleUp } from "react-icons/fa";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer navbar-static-bottom">
      <div className="container">
        <a rel="noreferrer" href="#top" className="back-to-top">
          <FaAngleUp size={40} />
        </a>

        <div className="social-links">
          <a
            rel="noreferrer"
            href="https://github.com/benjamindettling"
            target="_blank"
          >
            <FaGithub size={60} />
          </a>
          <a
            rel="noreferrer"
            href="https://www.instagram.com/benjamin.dettling"
            target="_blank"
          >
            <FaInstagram size={60} />
          </a>
        </div>

        <hr />

        <p className="footer__text">
          © 2025 - {t("footer.text")}&nbsp;
          <a
            rel="noreferrer"
            href="https://github.com/cobiwave"
            target="_blank"
          >
            Jacobo Martínez
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
