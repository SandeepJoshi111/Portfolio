import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {

  // Linking email Js and form
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_93mxinu', 'template_xb0pv3l', form.current, 'EACVzdlFnYh2JfrHc')
    
    e.target.reset()
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>
      <div className="container contact__container">
        <div className='contact__options'>
            <article className='contact__option'>
                  <AiOutlineMail className='contact__option-icon'/>
                  <h5>Email</h5>
                  <a href="mailto:joshisandip111@gmail.com" target='_blank'>Send a message</a>
            </article>

            <article className='contact__option'>
                  <RiMessengerLine className='contact__option-icon'/>
                  <h5>Messenger</h5>

                  <a href="https://m.me/" target='_blank'>Send a message</a>
            </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='email' required />
            <textarea name="message"  rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact