import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="centered-heading margin-block">
        <span>A</span>
        <span>b</span>
        <span>o</span>
        <span>u</span>
        <span>t</span>
        &nbsp; &nbsp;
        <span>M</span>
        <span>e</span>
        <span className="period">.</span>
      </h2>
      <div className="about-container relative grid">
        <div className="about-container_skills grid   absolute">
          <div className="skills-list grid">
            <div className="skills-list-title">My Skills</div>
            <div className="skill">HTML5 & CSS3</div>
            <div className="skill">JavaScript / ES6</div>
            <div className="skill">React.js</div>
            <div className="skill">Spring Boot</div>
            <div className="skill">PHP</div>
            <div className="skill">Express.js</div>
            <div className="skill">Tailwind</div>
            <div className="skill">MongoDB</div>
            <div className="skill">MySQL</div>
            <div className="skill">MongoDB</div>
          </div>
        </div>
        <div className="about-container_description  relative ">
          <p>
            I'm a fifth-year student studying software engineering at a Moroccan
            school of engineering sciences. I've discovered a deep passion for
            web development. I thoroughly enjoy dedicating time to coding and
            tackling novel challenges.
          </p>
          <p>
            Creating concise code results in streamlined, efficient software
            that remains manageable in the long run. I consistently prioritize
            this principle, aiming to write the least amount of code necessary.
            That's why, when it comes to design, I instinctively lean towards a
            clean and uncomplicated website layout.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
