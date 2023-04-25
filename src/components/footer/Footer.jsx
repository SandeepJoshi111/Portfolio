import React, { useEffect } from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import LOGO from '../../assest/3d-removebg-preview.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  
    useEffect(()=>{
      AOS.init({duration:2000});
    },[]);
  return (
    <footer>
      <div className='logo' data-aos="zoom-out" data-aos-duration="2000">
        <img src={LOGO} alt="" />
        </div>

      <ul className='permalinks' data-aos="fade-up" data-aos-duration="2000">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials" data-aos="fade-up" data-aos-duration="2000">
        <a href="https://www.facebook.com/profile.php?id=100005611095592" target='_blank'><BsFacebook/></a>
        <a href="https://www.instagram.com/josh_sandip/" target='_blank'><BsInstagram/></a>
        <a href="https://www.linkedin.com/in/sandeep-joshi-90210a24a/" target='_blank'><BsGithub/></a>
        <a href="https://www.linkedin.com/in/sandeep-joshi-90210a24a/" target='_blank'><BsLinkedin/></a>
      </div>

      <div className="footer__copyright" data-aos="zoom-in" data-aos-duration="2000">
        <small>&copy; Designed by EGTOR.</small>
      </div>
    </footer>
  )
}

export default Footer