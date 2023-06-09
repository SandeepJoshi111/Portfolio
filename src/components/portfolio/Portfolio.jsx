import React, { useEffect } from "react";
import "./portfolio.css";
import IMG1 from "../../assest/Jottin.svg";
import IMG2 from "../../assest/3D Workshop.svg";
import IMG3 from "../../assest/Weather Wiz.svg";
import IMG4 from "../../assest/Health Care Nepal.svg";
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
            <img src={IMG1} alt="" />
          </div>
          <h3>Jottin App</h3>
          <p>A Note Platform where you can jot down anything</p>
          <div className="portfolio__item-cta">
            <a
              href="https://jottin.vercel.app/"
              className="btn btn-primary portfolio-btn"
              target="_blank"
            >
              View Project
            </a>
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
          <h3>Blender Website</h3>
          <p>
            Explore, Inspire, and Showcase Your Blender Models on our Platform
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://3dworkshop.vercel.app/"
              className="btn btn-primary portfolio-btn"
              target="_blank"
            >
              View Project
            </a>
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
          <h3>Weather Wiz</h3>
          <p>Forecast Your World with Weather Wiz</p>
          <div className="portfolio__item-cta">
            <a
              href="https://weatherwiz.vercel.app/"
              className="btn btn-primary portfolio-btn "
              target="_blank"
            >
              View Project
            </a>
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
          <h3>Health Care Nepal</h3>
          <p>
            {" "}
            Find Support, Guidance, and Healing through our Comprehensive Online
            Mental Health Platform."
          </p>
          <div className="portfolio__item-cta">
            <a
              href="https://healthcarenepal.vercel.app/"
              className="btn btn-primary portfolio-btn "
              target="_blank"
            >
              View Project
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
