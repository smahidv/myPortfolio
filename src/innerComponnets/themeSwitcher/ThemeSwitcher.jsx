import React, { useEffect } from 'react';
import "./themeSwitcher.css"
const ThemeSwitcher = () => {

  useEffect(() => {
    const containerWidth = document.querySelector(".radio-container").offsetWidth - 20 + "px";
    let clicked = false;

    const handleRadioClick = () => {
      const radioCircle = document.querySelector(".radio-circle");

      if (!clicked) {
        radioCircle.style.transform = "translateX(" + containerWidth + ")";
        clicked = true;

        document.body.classList.remove("day");
        document.body.classList.add("night");
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
    

        const radioWrapper = document.querySelector(".radio-wrapper");
        radioWrapper.classList.add("dark-back");
        radioWrapper.classList.remove("light-back");

        setTimeout(() => {
          radioCircle.classList.add("night-icon");
          radioCircle.classList.remove("day-icon");
        }, 200);
      } else {
        clicked = false;
        radioCircle.style.transform = "translateX(0)";

        document.body.classList.remove("night");
        document.body.classList.add("day");
        document.body.style.backgroundColor="initial";
        document.body.style.color="initial";

        const radioWrapper = document.querySelector(".radio-wrapper");
        radioWrapper.classList.add("light-back");
        radioWrapper.classList.remove("dark-back");

        setTimeout(() => {
          radioCircle.classList.add("day-icon");
          radioCircle.classList.remove("night-icon");
        }, 200);
      }
    };

    document.querySelector(".radio-container").addEventListener("click", handleRadioClick);

    return () => {
      document.querySelector(".radio-container").removeEventListener("click", handleRadioClick);
    };
  }, []);

  return (
    <div className="radio-wrapper light-back">
      <div className="radio-container">
        <div className="radio-circle day-radio day-icon">
          <div className="sun-icon">
          </div>
          <div className="sun-ray">
          </div>
          <div className="sun-ray turn transition-all">
          </div>
          <div className="moon-icon-shadow">
            <div className="star-wrapper transition-all">
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
              <div className="star"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThemeSwitcher;
