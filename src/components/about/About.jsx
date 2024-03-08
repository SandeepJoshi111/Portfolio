import React from "react";
import { useEffect } from "react";
import "./about.css";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { BsGithub, BsWordpress } from "react-icons/bs";

import { FaPython } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";

import { SiJupyter } from "react-icons/si";
import { SiKeras } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";

// Designing
import { SiAdobeillustrator } from "react-icons/si";
import { IoLogoFigma } from "react-icons/io5";
import { SiBlender } from "react-icons/si";

// Gamde Development
import { SiUnrealengine } from "react-icons/si";
import { SiUnity } from "react-icons/si";

// Productivity
import { SiVisualstudiocode } from "react-icons/si";

// Databases
import { FaLaravel } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section id="about">
      <div className="container about__container">
        <h5 data-aos="zoom-in-down" data-aos-duration="700">
          What I Do{" "}
        </h5>
        <h2 data-aos="zoom-in-down" data-aos-duration="1000">
          About Me
        </h2>
        <div className="about__content">
          <p data-aos="fade-up" data-aos-duration="1000">
            Welcome to my portfolio! My name is Sandeep, and I'm a passionate
            and dedicated 3D Artist, Web Designer with a love for creativity and
            innovation. With several years of experience in the field. I
            embarked on my journey in 2020 when I discovered my fascination for
            web deisgning and 3D modeling. Since then, I've been having fun
            improving my skills by countless hours of learning, experimenting,
            and pushing boundaries to deliver exceptional results.
          </p>

          <a
            href="#contact"
            className="btn btn-primary"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Let's Talk
          </a>
          <div
            className="about__cards "
          >
            <div className="front"             
            data-aos="zoom-in"
            data-aos-duration="1000">
              <p id="names">Frontend Centric</p>
     
              <article className="about__card">
                <div className="about__item">
                  <SiHtml5 className="about__icon" title="HTMl" />HTMl
                </div>
                <div className="about__item">
                  <SiCss3 className="about__icon" title="CSS" />CSS
                </div>
                <div className="about__item">
                  <SiReact className="about__icon" title="React" />React
                </div>
                <div className="about__item">
                  <SiTailwindcss className="about__icon" title="Tailwindcss" />Tailwindcss
                </div>
                <div className="about__item">
                  <FaBootstrap className="about__icon" title="Bootstrap" />Bootstrap
                </div>
                <div className="about__item">
                  <BsWordpress className="about__icon" title="Worppress" />Worppress
                </div>
              </article>
            </div>

            <div className="front"
                 data-aos="zoom-in"
            data-aos-duration="1000">
              <p id="names">Backend Centric</p>
  
              <article className="about__card">
                <div className="about__item">
                  <SiJavascript className="about__icon" title="JavaScript" />JavaScript
                </div>
                <div className="about__item">
                  <FaPython className="about__icon" title="Python" />Python
                </div>
                <div className="about__item">
                  <FaNodeJs className="about__icon" title="Node.js" />Node.js
                </div>
                <div className="about__item">
                  <SiExpress className="about__icon" title="Express" />Express
                </div>
              </article>
            </div>
            <div className="front"
                 data-aos="zoom-in"
            data-aos-duration="1000">
              <p id="names">Designing</p>

              <article className="about__card">
                <div className="about__item">
                  <SiBlender className="about__icon" title="Blender" />Blender
                </div>
                <div className="about__item">
                  <SiAdobeillustrator className="about__icon" title="Adobe Illutrator" />Adobe Illutrator
                </div>
                <div className="about__item">
                  <IoLogoFigma className="about__icon" title="Figma" />Figma
                </div>
              </article>
            </div>

            <div className="front"
                 data-aos="zoom-in"
            data-aos-duration="1000">
              <p id="names">Databases</p>

              <article className="about__card">
                <div className="about__item">
                  <FaLaravel className="about__icon" title="Laravel" />Laravel
                </div>
                <div className="about__item">
                  <FaPhp className="about__icon" title="PHP" />PHP
                </div>
                <div className="about__item">
                  <SiMysql className="about__icon" title="MySql" />MySql
                </div>
                <div className="about__item">
                  <SiFirebase className="about__icon" title="Firebase" />Firebase
                </div>
                <div className="about__item">
                  <SiMongodb className="about__icon" title="MongoDB" />MongoDB
                </div>
              </article>
            </div>

            <div className="front"
                 data-aos="zoom-in"
            data-aos-duration="1000">
              <p id="names">Data Science</p>

              <article className="about__card">
                <div className="about__item">
                  <SiJupyter className="about__icon" title="Jupyter" />Jupyter
                </div>
                <div className="about__item">
                  <SiKeras className="about__icon" title="Keras" />Keras
                </div>
                <div className="about__item">
                  <SiTensorflow className="about__icon" title="Tensorflow" />Tensorflow
                </div>
              </article>
            </div>

            <div className="front"
                 data-aos="zoom-in"
            data-aos-duration="1000">
              <p id="names">Game Development</p>

              <article className="about__card">
                <div className="about__item">
                  <SiUnity className="about__icon" title="Unity" />Unity
                </div>
                <div className="about__item">
                  <SiUnrealengine className="about__icon" title="Unreal Engine" />Unreal Engine
                </div>
              </article>
            </div>

            <div className="front"     
            data-aos="zoom-in"
            data-aos-duration="1000">
              <p id="names">Productivity</p>

              <article className="about__card">
                <div className="about__item">
                  <SiVisualstudiocode className="about__icon" title="VS Code" />VS Code
                </div>
                <div className="about__item">
                  <BsGithub className="about__icon" title="Github" />Github
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
