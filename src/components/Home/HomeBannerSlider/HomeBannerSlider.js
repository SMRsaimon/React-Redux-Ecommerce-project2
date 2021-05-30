import React from "react";
import car from "../../../images/sliderImg/car.png";
import bike from "../../../images/sliderImg/bike.jpg";
import laptop from "../../../images/sliderImg/laptopK.jpg";
import "./HomeBannerSlider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

SwiperCore.use([Autoplay, Pagination, Navigation]);

const HomeBannerSlider = () => {
  return (
    <div className='sm-mt-3'>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="slider-image-style" src={car} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slider-image-style" src={laptop} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="slider-image-style" src={bike} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeBannerSlider;
