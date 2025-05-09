import React from "react";
import { useTranslation } from "react-i18next";
import profileImg from "/assets/profile.jpg";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">{t("about.title")}</h2>
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
                {t("about.description1")}
              </p>
              <p className="about-wrapper__info-text">
                {t("about.description2")}
              </p>
              <span className="d-flex mt-3">
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="cta-btn cta-btn--resume"
                  href="/assets/Benjamin_Dettling_CV.pdf"
                >
                  {t("about.resume")}
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
