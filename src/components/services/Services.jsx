import React, { useEffect } from 'react'
import './services.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Services = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[]);
  return (
    <section id="services">
        <h5 data-aos="zoom-in-down" data-aos-duration="700">What I Offer </h5>
        <h2 data-aos="zoom-in-down" data-aos-duration="1000">Services</h2>

        <div className="container services__container">
          <article className='service' data-aos="zoom-out" data-aos-duration="2000">
            <div className='service__head'>
              <h3>UI/UX Designer</h3>
            </div>

            <p></p>
          </article>



          <article className='service' data-aos="zoom-out" data-aos-duration="2000">
            <div className='service__head'>
              <h3>Game Developer</h3>
            </div>

            <p></p>
          </article>


          <article className='service' data-aos="zoom-out" data-aos-duration="2000">
            <div className='service__head'>
              <h3>3D Artist</h3>
            </div>

            <p></p>
          </article>
        </div>

    </section>
  )
}

export default Services