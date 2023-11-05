import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import reactPng from "../../images/react.ico";
import netifyPng from "../../images/netify.jpg";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer relative">
      <div className="center sub_footer">
        <p className="text-footer">© Oumaima smahi - 2023. Built with</p>
        <img className="react-png png" src={reactPng} alt="react logo" />
        <p className="text-footer">open sourced on</p>
        <a
          className="git-footer"
          href="https://github.com/smahidv/myPortfolio"
        >
          <FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff" }} />
        </a>
        <p className="text-footer">and deployed on</p>
        <img className="netify-png png" src={netifyPng} alt="react logo" />
      </div>
    </footer>
  );
};

export default Footer;
