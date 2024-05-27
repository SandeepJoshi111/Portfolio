import React from "react";
import { useParams } from "react-router-dom";
import { portfolios } from "../../constant/portfolio";
import { BsGithub } from "react-icons/bs";
import { CiShare1 } from "react-icons/ci";

function PortfolioDetails() {
  const { title } = useParams();

  // Find the portfolio item with the matching title
  const portfolioItem = portfolios.find(
    (portfolio) =>
      portfolio.title.toLowerCase().replace(/\s+/g, "-") === title.toLowerCase()
  );

  console.log(portfolioItem);
  // If a portfolio item is found, display it
  return (
    <section id="portfolio ">
      <div className="container portfolio__container">
        <article className="">
          <div className="h-[600px] flex items-center justify-center">
            <img
              src={portfolioItem.image}
              alt={portfolioItem.title}
              className="h-full w-full object-cover  rounded-3xl"
            />
          </div>
          <div className="flex justify-between mt-5">
            <h1 className="text-[32px] text-[#4db5ff]">
              {portfolioItem.title}
            </h1>
            <div className="flex gap-5">
              <a
                href={portfolioItem.links[0].github}
                target="_blank"
                id="portfolio-btn"
                rel="noreferrer"
              >
                Code <BsGithub />
              </a>
              {portfolioItem.links[0].demo && (
                <a
                  href={portfolioItem.links[0].demo}
                  target="_blank"
                  id="portfolio-btn"
                  rel="noreferrer"
                >
                  Demo <CiShare1 />
                </a>
              )}
            </div>
          </div>
          <p className="mb-20">{portfolioItem.description}</p>
        </article>
      </div>
    </section>
  );
}

export default PortfolioDetails;
