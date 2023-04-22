import React, { useEffect } from 'react'
import CV from '../../assest/Cv.pdf'
import AOS from 'aos'
import 'aos/dist/aos.css'
const CTA = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[]);
  return (
    <div className="cta" data-aos="fade-up" data-aos-duration="2000">
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA