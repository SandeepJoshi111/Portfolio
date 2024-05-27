import React, { useEffect } from "react";
import "./portfolio.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { BsGithub } from "react-icons/bs";
import { CiShare1 } from "react-icons/ci";
import { portfolios } from "../../constant/portfolio";
import { Link } from "react-router-dom";

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
        {portfolios.map((portfolio, index) => (
          <article
            className="portfolio__item"
            data-aos="zoom-out"
            data-aos-duration="2000"
            key={index}
          >
            <div className="portfolio__item-image">
              <Link
                to={`/${portfolio.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <img src={portfolio.image} alt="" />
              </Link>
            </div>

            <div className="portfolio__item-body">
              <h3>{portfolio.title}</h3>
              <p>{portfolio.description}</p>

              <div className="tools__container">
                {portfolio.tools.map((tool, toolIndex) => (
                  <div className="tool__box" key={toolIndex}>
                    <p>
                      {tool.name} {tool.icon}
                    </p>
                  </div>
                ))}
              </div>

              <div className="portfolio__item-cta">
                <a
                  href={portfolio.links[0].github}
                  target="_blank"
                  id="portfolio-btn"
                  rel="noreferrer"
                >
                  Code <BsGithub />
                </a>
                {portfolio.links[0].demo && (
                  <a
                    href={portfolio.links[0].demo}
                    target="_blank"
                    id="portfolio-btn"
                    rel="noreferrer"
                  >
                    Demo <CiShare1 />
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
