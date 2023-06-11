import React from "react";
import { useEffect } from "react";
import "./about.css";
import { SiBlender } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiUnity } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { FaLaravel } from "react-icons/fa";
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
            I`ve been learning web design, 3D modeling and Game Development for
            several years and am presently pursuing a degree for Computer
            Science and Information technology. I am always looking for new
            challednges and opportunities to learn.I love being able to use my
            passion and creativity to uplift a business and achieve their goals.
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
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
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

            <article className="about__card">
              <FaLaravel className="about__icon" />
              <h5>Laravel</h5>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
