import React from "react";
import { useTranslation } from "react-i18next";
import todolistImg from "/assets/todolist.jpg";
import projectImg from "/assets/project.jpg";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects">
      <div className="container">
        <div className="project-wrapper">
          <h2 className="section-title dark-blue-text">
            {t("projects.title")}
          </h2>

          {/* Todo List App */}
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="project-wrapper__text">
                <h3 className="project-wrapper__text-title">
                  {t("projects.todo.title")}
                </h3>
                <p className="mb-4">{t("projects.todo.description")}</p>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="cta-btn cta-btn--hero"
                  href="https://todolist.benjamindettling.ch"
                >
                  {t("projects.seeLive")}
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="cta-btn text-color-main"
                  href="https://github.com/benjamindettling/PERN-Stack-TodoList"
                >
                  {t("projects.sourceCode")}
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="project-wrapper__image">
                <div className="thumbnail rounded js-tilt">
                  <img
                    alt="Todo List Project"
                    className="img-fluid"
                    src={todolistImg}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Digit Classifier */}
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="project-wrapper__text">
                <h3 className="project-wrapper__text-title">
                  {t("projects.digits.title")}
                </h3>
                <p className="mb-4">{t("projects.digits.description")}</p>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="project-wrapper__image">
                <div className="thumbnail rounded js-tilt">
                  <img
                    alt="Digit Classifier Project"
                    className="img-fluid"
                    src={projectImg}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Game Data Aggregator */}
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="project-wrapper__text">
                <h3 className="project-wrapper__text-title">
                  {t("projects.foe.title")}
                </h3>
                <p className="mb-4">{t("projects.foe.description")}</p>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="project-wrapper__image">
                <div className="thumbnail rounded js-tilt">
                  <img
                    alt="Game Data Project"
                    className="img-fluid"
                    src={projectImg}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
