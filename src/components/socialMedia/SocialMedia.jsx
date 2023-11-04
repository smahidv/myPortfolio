import React from 'react';
import "./socialMedia.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub ,faLinkedinIn } from "@fortawesome/free-brands-svg-icons";


const SocialMedia = () => {
    return (
       <section className="social-media fixed ">
        <div className="social-media_brands relative ">

        <a
          className="git-footer"
          href="https://www.linkedin.com/in/smahi-oumaima/"
        >
          <FontAwesomeIcon icon={faLinkedinIn} style={{ color: "#ffffff" }} />
        </a>
           <a
          className="git-footer"
          href="https://github.com/smahidv/"
        >
          <FontAwesomeIcon icon={faGithub} style={{ color: "#ffffff" }} />
        </a>
        </div>
      
       </section>
    );
}

export default SocialMedia;
