import React from "react";
import { Link, useParams } from "react-router-dom";
import { portfolios } from "../../constant/portfolio";
import { BsGithub } from "react-icons/bs";
import { IoIosArrowRoundBack } from "react-icons/io";
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
    <section className="mt-5">
      <div className="container portfolio__container">
        <Link to={"/"} className="flex items-center  btn">
          <IoIosArrowRoundBack /> Back
        </Link>
        <article className="mb-20">
          <div className="flex justify-between mt-5">
            <h1 className="text-[24px] md:text-[44px] text-[#4db5ff] text-center">
              {portfolioItem.title}
            </h1>
            <div className="flex gap-5 ">
              <a
                href={portfolioItem.links[0].github}
                target="_blank"
                id="portfolio-btn"
                rel="noreferrer"
              >
                Code <BsGithub />
              </a>
            </div>
          </div>
          <h1 className="text-[20px] md:text-[30px] text-[#a5a5a5]">
            Introduction
          </h1>
          <p className="text-[16px] md:text-[20px] mt-3 mb-10 text-justify">
            {portfolioItem.introduction}
          </p>

          <div className="mockup-browser border bg-[#0d0f14]">
            <div className="mockup-browser-toolbar">
              {portfolioItem.links[0].demo ? (
                <a
                  href={portfolioItem.links[0].demo}
                  target="_blank"
                  className="input"
                  rel="noreferrer"
                >
                  {portfolioItem.links[0].demo}
                </a>
              ) : (
                <span className="input">Demo Not Available</span>
              )}
            </div>

            <div className="flex justify-center bg-white h-[600px]">
              {portfolioItem.links[0].demo ? (
                <iframe
                  src={portfolioItem.links[0].demo}
                  title={portfolioItem.title}
                  className="h-full w-full object-cover"
                ></iframe>
              ) : (
                <video
                  src={portfolioItem.video}
                  title={portfolioItem.title}
                  className="h-full w-full object-cover"
                  controls
                ></video>
              )}
            </div>
          </div>
          <h1 className="text-[20px] md:text-[30px] text-[#a5a5a5] mt-10">
            Tech Stack
          </h1>
          <div className=" flex flex-wrap gap-2">
            {portfolioItem.tools.map((tool, toolIndex) => (
              <div className="tool__box visible " key={toolIndex}>
                <p className="">
                  {tool.name} {tool.icon}
                </p>
              </div>
            ))}
          </div>
          <h1 className="text-[20px] md:text-[30px] text-[#a5a5a5] mt-10">
            Features
          </h1>
          {portfolioItem.features.map((feature, index) => (
            <li key={index} className="text-[16px] md:text-[20px]">
              <span className="text-[#4db5ff]">{feature.featureTitle}:</span>{" "}
              {feature.featureDesc}
            </li>
          ))}
        </article>
      </div>
    </section>
  );
}

export default PortfolioDetails;
