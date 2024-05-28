import React, { useEffect } from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { RiMessengerLine } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  // Linking email Js and form
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_93mxinu",
      "template_xb0pv3l",
      form.current,
      "EACVzdlFnYh2JfrHc"
    );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5 data-aos="zoom-in-down" data-aos-duration="700">
        Get In Touch
      </h5>
      <h2 data-aos="zoom-in-down" data-aos-duration="1000">
        Contact
      </h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article
            className="contact__option"
            data-aos="zoom-out"
            data-aos-duration="2000"
          >
            <div className="flex justify-center items-center gap-5">
              <AiOutlineMail className="contact__option-icon" />
              <h5>Email</h5>
            </div>
            <a
              href="mailto:joshisandip111@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article
            className="contact__option"
            data-aos="zoom-out"
            data-aos-duration="2000"
          >
            <div className="flex justify-center items-center gap-5">
              <RiMessengerLine className="contact__option-icon" />
              <h5>Messenger</h5>
            </div>

            <a
              href="https://m.me/profile.php?id=100005611095592"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            data-aos="zoom-out"
            data-aos-duration="2000"
            className="p-2"
          />
          <input
            type="email"
            name="email"
            className="p-2"
            placeholder="Email"
            required
            data-aos="zoom-out"
            data-aos-duration="2000"
          />
          <textarea
            name="message"
            className="p-2"
            rows="7"
            placeholder="Your Message"
            required
            data-aos="zoom-out"
            data-aos-duration="2000"
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
