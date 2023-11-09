import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./about.css";

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);
  const leftVariants = {
    visible: { x: 0,transition: { duration: 1, bounce: 1 } },
    hidden: { x: "-70px" },
  };
  const upVariants = {
    visible: { y: 0,opacity:1 ,transition: { duration: 1, delay:0.2,bounce: 1 } },
    hidden: { y: "-100px",opacity:0 },
  };
  const delayUpVariants = {
    visible: { y: 0,opacity:1 ,transition: { duration: 1, delay:0.4,bounce: 1 } },
    hidden: { y: "-100px",opacity:0 },
  };


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
        <div className="about-container_skills  grid   absolute">
          <div className="skills-list grid">
            <div className="skills-list-title">My Skills</div>
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={upVariants}
              className="skill"
            >
              HTML5 & CSS3
            </motion.div>
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={delayUpVariants}
              className="skill"
            >
              JavaScript / ES6
            </motion.div>
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={upVariants}
              className="skill"
            >
              React.js
            </motion.div>
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={delayUpVariants}
              className="skill"
            >
              Spring Boot
            </motion.div>
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={upVariants}
              className="skill"
            >
              PHP
            </motion.div>
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={delayUpVariants}
              className="skill"
            >
              Express.js
            </motion.div>
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={upVariants}
              className="skill"
            >
              Tailwind
            </motion.div>
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={delayUpVariants}
              className="skill"
            >
              MongoDB
            </motion.div>
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={upVariants}
              className="skill"
            >
              MySQL
            </motion.div>
            <motion.div
              ref={ref}
              animate={controls}
              initial="hidden"
              variants={delayUpVariants}
              className="skill"
            >
              MongoDB
            </motion.div>
          </div>
        </div>
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={leftVariants}
          className="about-container_description  relative "
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default About;
