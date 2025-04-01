import React from "react";
import projectImg from "/assets/project.jpg";

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="project-wrapper">
          <h2 className="section-title dark-blue-text">Projects</h2>

          {/* Todo List App */}
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="project-wrapper__text">
                <h3 className="project-wrapper__text-title">REST API Todo List</h3>
                <p className="mb-4">
                  A full-stack web app where I implemented a RESTful API backend and interactive frontend to manage todos.
                </p>
                <div className="project-links">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="cta-btn cta-btn--hero"
                    href="https://todo.benjamindettling.ch"
                  >
                    See Live
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="cta-btn text-color-main"
                    href="https://github.com/yourusername/todo-app"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="project-wrapper__image">
                <div className="thumbnail rounded">
                  <img
                    alt="Todo List Project"
                    className="img-fluid js-tilt"
                    src={projectImg}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Digit Classifier */}
          <div className="row">
            <div className="col-lg-4 col-sm-12">
              <div className="project-wrapper__text">
                <h3 className="project-wrapper__text-title">Digit Classifier</h3>
                <p className="mb-4">
                  A deep learning project where I trained a neural network to accurately classify handwritten digits.
                </p>
                <div className="project-links">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="cta-btn cta-btn--hero"
                    href="https://todo.benjamindettling.ch"
                  >
                    See Live
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="cta-btn text-color-main"
                    href="https://github.com/yourusername/todo-app"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="project-wrapper__image">
                <div className="thumbnail rounded">
                  <img
                    alt="Digit Classifier Project"
                    className="img-fluid js-tilt"
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
                <h3 className="project-wrapper__text-title">Game Data Aggregator</h3>
                <p className="mb-4">
                  A system for extracting and analyzing player statistics across various matches for insights and performance.
                </p>
                <div className="project-links">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="cta-btn cta-btn--hero"
                    href="https://todo.benjamindettling.ch"
                  >
                    See Live
                  </a>
                  <a
                    rel="noreferrer"
                    target="_blank"
                    className="cta-btn text-color-main"
                    href="https://github.com/yourusername/todo-app"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-sm-12">
              <div className="project-wrapper__image">
                <div className="thumbnail rounded">
                  <img
                    alt="Game Data Project"
                    className="img-fluid js-tilt"
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
