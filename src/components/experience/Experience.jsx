import React from 'react'
import './experience.css'
import AD from '../../assest/adbhud.png'

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experiecne</h2>
      <div className="container experience__conatiner">
    
      <div className="image">
        <div className="experience__image">
        <img src={AD} alt="" />
        </div>
      </div>
        
        <div className="experience__content">
        <h2>Intern</h2>
        <a href="">AdBhud Marketing</a>
        <h5 className='text-light'>Date</h5>
        </div>
      </div>
    </section>
  )
}

export default Experience