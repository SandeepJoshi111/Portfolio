import React, { useEffect } from 'react'
import './portfolio.css'
import IMG1 from '../../assest/jottin app.png'
import IMG2 from '../../assest/portfolio2.jpg'
import IMG3 from '../../assest/portfolio3.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Portfolio = () => {
  useEffect(()=>{
    AOS.init({duration:2000});
  },[]);
  return (
    <section id="portfolio">
      <h5 data-aos="zoom-in-down" data-aos-duration="700">My Latest Work</h5>
      <h2 data-aos="zoom-in-down" data-aos-duration="1000">Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item' data-aos="zoom-out" data-aos-duration="2000">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
            <h3>JOTTIN APP</h3>
            <p>A Note App where you can jot down anything</p>
            <div className="portfolio__item-cta">
            
            <a href="https://sandeepjoshi111.github.io/note-app/"  className='btn btn-primary' target='_blank'>View Project</a>
            </div>
        </article>

        <article className='portfolio__item' data-aos="zoom-out" data-aos-duration="2000">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
            <h3>Blender Website</h3>
            <div className="portfolio__item-cta">
            
            <a href="https://github.com"  className='btn btn-primary' target='_blank'>View Project</a>
            </div>
        </article>

        <article className='portfolio__item' data-aos="zoom-out" data-aos-duration="2000">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
            <h3>Weather App</h3>
            <div className="portfolio__item-cta">
            
            <a href="https://github.com"  className='btn btn-primary' target='_blank'>View Project</a>
            </div>
        </article>

      

     

      </div>
    </section>
  )
}

export default Portfolio