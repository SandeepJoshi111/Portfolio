import React, { useEffect } from "react";
import "./portfolio.css";
import IMG1 from "../../assest/Jottin.svg";
import IMG2 from "../../assest/3D Workshop.svg";
import IMG3 from "../../assest/Weather Wiz.svg";
import IMG4 from "../../assest/Health Care Nepal.svg";
import IMG5 from "../../assest/Wave Assult.png";
import IMG6 from "../../assest/asl.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
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
            <img src={IMG4} alt="" />
          </div>

          <div className="portfolio__item-body">
            <h3>Health Care Nepal</h3>
            <p>
              {" "}
              Find Support, Guidance, and Healing through our Comprehensive
              Online Mental Health Platform."
            </p>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/SandeepJoshi111/project-app"
                className="btn btn-primary portfolio-btn "
                target="_blank"
                id="portfolio-btn"
              >
                Git Hub
              </a>
              <a
                href="https://healthcarenepal.vercel.app/"
                className="btn btn-primary portfolio-btn "
                target="_blank"
                id="portfolio-btn"
              >
                View Project
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
            <h3>Weather Wiz</h3>
            <p>Forecast Your World with Weather Wiz</p>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/SandeepJoshi111/weather-wiz"
                className="btn btn-primary portfolio-btn "
                id="portfolio-btn"
                target="_blank"
              >
                Git Hub
              </a>
              <a
                href="https://weatherwiz.vercel.app/"
                className="btn btn-primary portfolio-btn "
                id="portfolio-btn"
                target="_blank"
              >
                View Project
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
            <img src={IMG1} alt="" />
          </div>
          <div className="portfolio__item-body">
            <h3>Jottin</h3>
            <p>A Note Platform where you can jot down anything</p>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/SandeepJoshi111/note-app"
                className="btn btn-primary portfolio-btn "
                target="_blank"
                id="portfolio-btn"
              >
                Git Hub
              </a>
              <a
                href="https://jottin.vercel.app/"
                className="btn btn-primary portfolio-btn"
                target="_blank"
                id="portfolio-btn"
              >
                View Project
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
            <h3>Blender Website</h3>
            <p>
              A website to showcase some blender model.
            </p>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/SandeepJoshi111/blender-app"
                className="btn btn-primary portfolio-btn "
                id="portfolio-btn"
                target="_blank"
              >
                Git Hub
              </a>
              <a
                href="https://3dworkshop.vercel.app/"
                className="btn btn-primary portfolio-btn"
                id="portfolio-btn"
                target="_blank"
              >
                View Project
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
            <img src={IMG5} alt="" />
          </div>

          <div className="portfolio__item-body">
            <h3>Wave Assault</h3>
            <p>
            Survival game built using Unreal Engine, where players must endure relentless waves of challenges and enemies in a hostile environment
            </p>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/SandeepJoshi111/Wave-Assault"
                className="btn btn-primary portfolio-btn "
                id="portfolio-btn"
                target="_blank"
              >
                Git Hub
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
            <img src={IMG6} alt="" />
          </div>

          <div className="portfolio__item-body">
            <h3>Americal Sign Language Detection</h3>
            <p>
              Created a Sign Language detection that does basic arithmetic operations.
            </p>
            <div className="portfolio__item-cta">
              <a
                href="https://github.com/SandeepJoshi111/American-Sign-Language-Detection"
                className="btn btn-primary portfolio-btn "
                id="portfolio-btn"
                target="_blank"
              >
                Git Hub
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
