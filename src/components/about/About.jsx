import React from "react";
import { useEffect } from "react";
import "./about.css";
import AOS from "aos";
import { abouts } from "../../constant/about";

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
          <div className="about__cards ">
            {abouts.map((about) => (
              <div
                className="front"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <p id="names">{about.title}</p>

                <article className="about__card">
                  {about.tools.map((tool) => (
                    <div className="about__item">
                      <div className="about__icon">{tool.icon} </div>
                      {tool.name}
                    </div>
                  ))}
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
