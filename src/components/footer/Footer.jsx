import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import LOGO from '../../assest/3d-removebg-preview.png'
const Footer = () => {
  return (
    <footer>
      <div className='logo'>
        <img src={LOGO} alt="" />
        </div>

      <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href=""><BsFacebook/></a>
        <a href=""><BsInstagram/></a>
        <a href=""><BsTwitter/></a>
        <a href=""><BsLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; EGTOR Tutorials. All right reserved</small>
      </div>
    </footer>
  )
}

export default Footer