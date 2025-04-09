import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { ArrowRight,ArrowLeft  } from "lucide";
import CardSwiper from "./CardSwiper";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
// import 'swiper/css/pagination';
import "swiper/css";
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
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          //   pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <CardSwiper />
          </SwiperSlide>
          <SwiperSlide>
            <CardSwiper />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <CardSwiper />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <CardSwiper />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <CardSwiper />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <CardSwiper />
          </SwiperSlide>
          <div className="arrow_btns">
            <div className="custom-prev custom-arrow">
              <span>
                {" "}
                <svg
                  alt="Next"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-left-icon lucide-arrow-left"
                >
                  <path d="m12 19-7-7 7-7" />
                  <path d="M19 12H5" />
                </svg>
              </span>
            </div>
            <div className="custom-next custom-arrow">
              <span>
                <svg
                  alt="Previous"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-arrow-right-icon lucide-arrow-right"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
