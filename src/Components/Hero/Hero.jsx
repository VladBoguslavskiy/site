import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>Новинки</h2>
        <div>
          <div className="hero-hand-icon">
            <p>Нове</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Колекції</p>
          <p>для всіх</p>
        </div>
        <div className="hero-latest-btn">
          <div>Остання колекція</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
