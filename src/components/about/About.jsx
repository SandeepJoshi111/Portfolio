import React from "react";
import "./about.css";
import { SiBlender } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiUnity } from "react-icons/si";
import { SiReact } from "react-icons/si";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <h5>What I Do </h5>
        <h2>About Me</h2>
        <div className="about__content">
          <p>
            I`ve been learning web design, 3D modeling and Game Development for
            several years and am presently pursuing a degree for Computer Science and Information technology.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
          <div className="about__cards">
            <article className="about__card">
              <SiHtml5 className="about__icon" />
              <h5>HTML</h5>
            </article>

            <article className="about__card">
              <SiCss3 className="about__icon" />
              <h5>CSS</h5>
            </article>

            <article className="about__card">
              <SiJavascript className="about__icon" />
              <h5>Javascript</h5>
            </article>

            <article className="about__card">
              <SiReact className="about__icon" />
              <h5>React</h5>
            </article>

            <article className="about__card">
              <SiUnity className="about__icon" />
              <h5>Unity</h5>
            </article>

            <article className="about__card">
              <SiBlender className="about__icon" />
              <h5>Blender</h5>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
