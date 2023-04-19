import React from 'react'
import './portfolio.css'
import IMG1 from '../../assest/portfolio1.jpg'
import IMG2 from '../../assest/portfolio2.jpg'
import IMG3 from '../../assest/portfolio3.jpg'
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Latest Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
            <h3>Title</h3>
            <div className="portfolio__item-cta">
            
            <a href="https://github.com"  className='btn btn-primary' target='_blank'>View Project</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
            <h3>Title</h3>
            <div className="portfolio__item-cta">
            
            <a href="https://github.com"  className='btn btn-primary' target='_blank'>View Project</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
            <h3>Title</h3>
            <div className="portfolio__item-cta">
            
            <a href="https://github.com"  className='btn btn-primary' target='_blank'>View Project</a>
            </div>
        </article>

      

     

      </div>
    </section>
  )
}

export default Portfolio