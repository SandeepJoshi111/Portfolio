import React, { useEffect } from "react";
import CV from "../../assest/Sandeep Resumee.pdf";
import AOS from "aos";
import "aos/dist/aos.css";
const CTA = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="cta" data-aos="fade-up" data-aos-duration="2000">
      <a
        href={CV}
        className="btn"
        target="_blank"
        rel="noopener noreferrer"
        title="Sandeep Resume"
      >
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
