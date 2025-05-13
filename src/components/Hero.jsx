import React from "react";
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="hero" className="jumbotron">
      <div className="container">
        <h1 className="hero-title load-hidden">
          <Trans
            i18nKey="hero.intro"
            components={{ name: <span className="text-color-main" /> }}
          />
          <br />
          {t("hero.subtitle")}
        </h1>
        <p className="hero-cta load-hidden">
          <a rel="noreferrer" className="cta-btn cta-btn--hero" href="#about">
            {t("hero.cta")}
          </a>
        </p>
      </div>
    </section>
  );
};

export default Hero;
