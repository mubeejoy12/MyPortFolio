import React from 'react'
import './contact.css'
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
    <section id='contact'>
      Contact
    </section>
  )
}

export default Contact
