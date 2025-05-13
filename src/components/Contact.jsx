import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">{t("contact.title")}</h2>
        <div className="contact-wrapper">
          <p className="contact-wrapper__text">{t("contact.text")}</p>
          <a
            rel="noreferrer"
            target="_blank"
            className="cta-btn cta-btn--resume"
            href="mailto:benjamin@benjamindettling.ch"
          >
            {t("contact.button")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
