import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assest/me.png'
import HeaderSocial from './HeaderSocial'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        
        <h5>Hello I'm</h5>
        <div className='h1'>
          <h1>Sandeep <span>Joshi</span></h1>
          </div>
          <h5 className="text-light">A Game Developer</h5>
          <p>Thank you for taking the time to look at my <span>portfolio.</span></p>

        <CTA/>
        <HeaderSocial/>

        {/* <div className="me">
          <img src={ME} alt="" />
        </div> */}

        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
  
    </header>
      
  )
 
}

export default Header