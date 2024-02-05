import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

import { Pagination} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


const Testimonial = () => {
  const data = [
    {
      avatar: AVTR1,
      name: "Tina Snow",
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitiaquasi harum omnis quae nemo, aliquam reiciendis dicta veniam totam,sed quaerat tenetur delectus accusamus iste dolores? Quasi laborum,eaque molestias assumenda ab totam praesentium iure eligendirecusandae, perferendis vitae voluptatum",
    },
  ];
  return (
    <section id="testimonial">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            quasi harum omnis quae nemo, aliquam reiciendis dicta veniam totam,
            sed quaerat tenetur delectus accusamus iste dolores? Quasi laborum,
            eaque molestias assumenda ab totam praesentium iure eligendi
            recusandae, perferendis vitae voluptatum.
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            quasi harum omnis quae nemo, aliquam reiciendis dicta veniam totam,
            sed quaerat tenetur delectus accusamus iste dolores? Quasi laborum,
            eaque molestias assumenda ab totam praesentium iure eligendi
            recusandae, perferendis vitae voluptatum.
          </small>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="" />
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            quasi harum omnis quae nemo, aliquam reiciendis dicta veniam totam,
            sed quaerat tenetur delectus accusamus iste dolores? Quasi laborum,
            eaque molestias assumenda ab totam praesentium iure eligendi
            recusandae, perferendis vitae voluptatum.
          </small>
        </article>
      </div>
    </section>
  );
};

export default Testimonial;
