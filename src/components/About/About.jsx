import React from "react";
import "./about.css";
import me from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import { GrFolderCycle } from "react-icons/gr";
function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experirnce</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <TbUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worlddwide</small>
            </article>
            <article  className="about__card"> 
              <GrFolderCycle className="about__icon" />
              <h5>Projects</h5>
              <small>80+ completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            assumenda aut nam quo harum ex rerum, accusantium unde nulla labore
            non nesciunt, vel quae hic aspernatur tenetur blanditiis in beatae?
          </p>
          <a href="#contact" className="btn btn-primary">let's Talk</a>
        </div>
      </div>
    </section>
  );
}

export default About;
