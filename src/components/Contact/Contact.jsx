import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookMessenger } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_c1p542q", "template_pc3ty6d", form.current, {
        publicKey: "O63jnZYpzforwG_gl",

      }
     
      )
      e.target.reset()
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5 className="email">abubakrobasanjo@gmail.com</h5>
            <a href="mailto:abubakrobasanjo@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <FaFacebookMessenger className="contact__option-icon" />
            <h4>Messanger</h4>
            <h5>Mubarakbakr</h5>
            <a href="https://m.me/" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <SiWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+2348144188322</h5>
            <a
              href="https://api.whatsapp.com/send?phone+2348144188322"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* end of contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
