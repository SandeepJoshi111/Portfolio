import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {AiOutlineBook} from 'react-icons/ai'
import {BsFillGearFill} from 'react-icons/bs'
import {AiOutlinePhone} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav,setActiveNav] = useState('#')
  return (
   <nav>
    <a href="#" onClick={()=> setActiveNav('#')} className={activeNav ==='#' ? 'active' : ''}><AiOutlineHome/></a>
    <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav ==='#about' ? 'active' : ''}><AiOutlineUser/></a>
    {/* <a href="#services" onClick={()=> setActiveNav('#services')} className={activeNav ==='#services' ? 'active' : ''}><BsFillGearFill/></a> */}
    <a href="#portfolio" onClick={()=> setActiveNav('#portfolio')} className={activeNav ==='#portfolio' ? 'active' : ''}><AiOutlineBook/></a>
    <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav ==='#contact' ? 'active' : ''}><AiOutlinePhone/></a>
   </nav>
  )
}

export default Nav