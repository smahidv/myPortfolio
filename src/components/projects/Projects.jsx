import React from "react";

import "../../slider/Slider";

import Slider from "../../slider/Slider";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="centered-heading margin-block">
        <span>F</span>
        <span>e</span>
        <span>a</span>
        <span>t</span>
        <span>u</span>
        <span>r</span>
        <span>e</span>
        <span>d</span>
        &nbsp;&nbsp;
        <span>P</span>
        <span>r</span>
        <span>o</span>
        <span>j</span>
        <span>e</span>
        <span>c</span>
        <span>t</span>
        <span>s</span>
        <span className="period">.</span>
      </h2>
      <div className="projects-hero">
        <Slider />
        <div className="project-container">
          <div className="project-description">
            <h3 className="project-title"></h3>
            <div className="project-language"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
