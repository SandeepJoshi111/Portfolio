import React, { useEffect } from "react";
import "./portfolio.css";
// import IMG1 from "../../assest/Jottin.svg";
// import IMG2 from "../../assest/3D Workshop.svg";
// import IMG3 from "../../assest/Weather Wiz.svg";
import IMG1 from "../../assest/Health Care Nepal.svg";
import IMG2 from "../../assest/bakespace mockup.png";
import IMG3 from "../../assest/Wave Assult.png";
import IMG4 from "../../assest/ASL mockup.png";

import AOS from "aos";
import "aos/dist/aos.css";

import { SiJupyter } from "react-icons/si";
import { SiKeras } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiOpencv } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiUnrealengine } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { CiShare1 } from "react-icons/ci";
const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section id="portfolio">
      <h5 data-aos="zoom-in-down" data-aos-duration="700">
        My Latest Work
      </h5>
      <h2 data-aos="zoom-in-down" data-aos-duration="1000">
        Portfolio
      </h2>

      <div className="container portfolio__container">
        <article
          className="portfolio__item"
          data-aos="zoom-out"
          data-aos-duration="2000"
        >
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>

          <div className="portfolio__item-body">
            <h3>Health Care Nepal</h3>
            <p>
              {" "}
              Health Care Nepal is a platform dedicated to mental health, assisting individuals in finding the therapist they need and offering real-time chat functionality for communication.
            </p>

            <div className="tools__container">
                  <div className="tool__box">
                    <p>React <FaReact/></p>
                  </div>
                  <div className="tool__box">
                    <p>Firebase <IoLogoFirebase/></p>
                  </div>
            </div>


            <div className="portfolio__item-cta">
                <a
                  href="https://github.com/SandeepJoshi111/project-app"
                  target="_blank"
                  id="portfolio-btn"
                  rel="noreferrer"
                >
                 Code <BsGithub/>
                </a>
                <a
                  href="https://healthcarenepal.vercel.app/"
                  target="_blank"
                  id="portfolio-btn"
                  rel="noreferrer"
                >
                  Demo<CiShare1 />
                </a>
            </div>
          </div>
        </article>


        <article
          className="portfolio__item"
          data-aos="zoom-out"
          data-aos-duration="2000"
        >
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>

          <div className="portfolio__item-body">
            <h3>BakeSpace</h3>
            <p>
              {" "}
              BackSpace is an online retail platform specializing in bakery items, offering features such as adding items to a cart and demo payment processing through integrated online payment systems.
            </p>

            <div className="tools__container">
                  <div className="tool__box">
                    <p>Laravel <FaReact/></p>
                  </div>
                  <div className="tool__box">
                    <p>PHP <IoLogoFirebase/></p>
                  </div>
            </div>


            <div className="portfolio__item-cta">
                <a
                  href="https://github.com/SandeepJoshi111/BakeSpace"
                  target="_blank"
                  id="portfolio-btn"
                  rel="noreferrer"
                >
                 Code <BsGithub/>
                </a>
            </div>
          </div>
        </article>


        <article
          className="portfolio__item"
          data-aos="zoom-out"
          data-aos-duration="2000"
        >
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>

          <div className="portfolio__item-body">
            <h3>Wave Assault</h3>
            <p>
              {" "}
              Wave Assault is a competitive, wave-based game where players engage in combat until they successfully navigate through each wave, striving to survive until the end.
            </p>

            <div className="tools__container">
                  <div className="tool__box">
                    <p>Unreal Engine <SiUnrealengine/></p>
                  </div>
            </div>


            <div className="portfolio__item-cta">
                <a
                  href="https://github.com/SandeepJoshi111/Wave-Assault"
                  target="_blank"
                  id="portfolio-btn"
                  rel="noreferrer"
                >
                 Code <BsGithub/>
                </a>
            </div>
          </div>
        </article>


        <article
          className="portfolio__item"
          data-aos="zoom-out"
          data-aos-duration="2000"
        >
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>

          <div className="portfolio__item-body">
            <h3>Sign Language Detection</h3>
            <p>
              {" "}
              An interactive platform designed to communicate with diffrently ableed people using American Sign Language. Additionally, the platform offers the ability to perform basic mathematical calculations.
            </p>

            <div className="tools__container">
                  <div className="tool__box">
                    <p>Python <FaPython/></p>
                  </div>
                  <div className="tool__box">
                    <p>OpenCV <SiOpencv/></p>
                  </div>
                  <div className="tool__box">
                    <p>TensorFlow <SiTensorflow/></p>
                  </div>
                  <div className="tool__box">
                    <p>Keras <SiKeras/></p>
                  </div>
                  <div className="tool__box">
                    <p>Jupyter <SiJupyter/></p>
                  </div>
            </div>


            <div className="portfolio__item-cta">
                <a
                  href="https://github.com/SandeepJoshi111/American-Sign-Language-Detection"
                  target="_blank"
                  id="portfolio-btn"
                  rel="noreferrer"
                >
                 Code <BsGithub/>
                </a>
            </div>
          </div>
        </article>
    


      </div>
    </section>
  );
};

export default Portfolio;
