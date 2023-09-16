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
import { BsWordpress } from "react-icons/bs";
import { FaPhp } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si";
import { SiUnrealengine } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { SiMysql } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
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
              <SiHtml5 className="about__icon" title="HTML" />
            </article>

            <article className="about__card">
              <SiCss3 className="about__icon" title="CSS" />
            </article>

            <article className="about__card">
              <SiJavascript className="about__icon" title="Javascript" />
            </article>

            <article className="about__card">
              <SiReact className="about__icon" title="React" />
            </article>

            <article className="about__card">
              <SiUnity className="about__icon" title="Unity" />
            </article>

            <article className="about__card">
              <SiBlender className="about__icon" title="Blender" />
            </article>

            <article className="about__card">
              <FaLaravel className="about__icon" title="Laravel" />
            </article>

            <article className="about__card">
              <BsWordpress className="about__icon" title="Word Press" />
            </article>

            <article className="about__card">
              <FaPhp className="about__icon" title="PHP" />
            </article>

            <article className="about__card">
              <SiVisualstudiocode
                className="about__icon"
                title="Visual Studio Code"
              />
            </article>

            <article className="about__card">
              <SiUnrealengine className="about__icon" title="Unreal Engine" />
            </article>

            <article className="about__card">
              <AiFillGithub className="about__icon" title="Git Hub" />
            </article>

            <article className="about__card">
              <SiMysql className="about__icon" title="MySQL" />
            </article>

            <article className="about__card">
              <SiFirebase className="about__icon" title="Firebase" />
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
