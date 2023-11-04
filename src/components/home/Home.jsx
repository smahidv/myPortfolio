import React from "react";
import Lottie from "lottie-react";

import annimationLottie from "../../assets/done.json"
import "./home.css";

const Home = () => {


  return (
    <section className="home grid" id="home">
      <div className="quote center">
        <h1 className="margin-block">
          Greatness Isn't Born.<br/>
          It's Grown.
        </h1>
        <p className="home-description">
          I'm currently focused on becoming a full stack developer.My curiosity
          and passion drive my disciplined approach to learning. I aim to master
          both front-end and back-end development, crafting user-friendly
          applications with innovation and care.
        </p>
      </div>
      <div className="home-annimation">
      <div className="lottie-costomize" id="animation-test">
     
      <Lottie animationData={annimationLottie}

       />
      </div>
        
      
         
       
      </div>
    </section>
  );
};

export default Home;
