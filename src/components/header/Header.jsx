import React, { useEffect, useState } from "react";
import "./header.css";
import CTA from "./CTA";
// import ME from '../../assest/me.png'
import HeaderSocial from "./HeaderSocial";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
import Dark from "./Dark";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <div className="h1">
          <h1>
            Sandeep <span>Joshi</span>
          </h1>
        </div>

        <div data-aos="zoom-out-down" data-aos-duration="8000">
          <span className="text-light">A </span>
          <TypeAnimation
            sequence={["Web Developer", 2000, "3D Artist", 2000]}
            speed={50}
            className="text-light"
            wrapper="span"
            repeat={Infinity}
          />
        </div>
        <br />
        <p>
          Thank you for taking the time to look at my{" "}
          <a href="#portfolio" className="cursor-pointer">
            portfolio.
          </a>
        </p>

        <CTA />
        <HeaderSocial />

        {/* <div className="me">
          <img src={ME} alt="" />
        </div> */}

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>

        <Dark />
      </div>
    </header>
  );
};

export default Header;
