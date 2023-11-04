import React from "react";
import { BrowserRouter } from "react-router-dom";
import About from "./components/about/About";
import Home from "./components/home/Home";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects"
import SocialMedia from "./components/socialMedia/SocialMedia";
import "./App.css";
import "./global.css"
import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const homeElement = document.getElementById("home");
      const rect = homeElement.getBoundingClientRect();

      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setCurrentSection("home");
      } else {
        setCurrentSection("other");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="all-content-wrap ">
      <BrowserRouter>
        <Navigation />

        <main className="main-content">
          <div className="grid">
         <Home/>
         </div>
         <About/> 
         <Projects/> 
        <Contact/> 
        </main>
         <Footer/> 
         {currentSection !== "home" ? <SocialMedia /> : null}

      </BrowserRouter>
    
    </div>
  );
}

export default App;
