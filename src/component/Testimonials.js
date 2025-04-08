import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import CardSwiper from "./CardSwiper";
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/css';
const Testimonials = () => {
  return (
    <div className="testimonials_sec">
      <div className="title_sec">
        <img src="img/coment.svg" alt="" />
        <span>Testimonials</span>
      </div>
      <h3>What are people saying</h3>
      <p>
        "Thank you for your trust in Crypt Land! We are grateful for your
        feedback and are committed to providing the best [products/services
        offered]. Read what our clients have to say about their experience with
        us.
      </p>
      <div className="swiper_sec">
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
        //   navigation
        //   pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide> <CardSwiper /> </SwiperSlide>
          <SwiperSlide><CardSwiper /></SwiperSlide>
          <SwiperSlide><CardSwiper /></SwiperSlide>
          <SwiperSlide><CardSwiper /></SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
