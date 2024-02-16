import React from "react";
import "./header.css";
import CTA from "./CTA";
import meme from "../../assets/frame.png";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm </h5>
        <h1>Abubakr Mubarak</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={meme} alt="" className="img" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
