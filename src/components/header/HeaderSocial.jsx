import React, { useEffect } from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const HeaderSocial = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="header__social" data-aos="fade-down">
      <a
        href="https://www.facebook.com/profile.php?id=100005611095592"
        target="_blank"
        id="facebook"
      >
        <BsFacebook />
      </a>
      <a
        href="https://www.instagram.com/josh_sandip/"
        target="_blank"
        id="instagram"
      >
        <BsInstagram />
      </a>
      <a href="https://github.com/SandeepJoshi111" target="_blank" id="github">
        <BsGithub />
      </a>
    </div>
  );
};

export default HeaderSocial;
