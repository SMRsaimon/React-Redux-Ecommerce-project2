import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-cube/effect-cube.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Autoplay, EffectCube, Pagination } from "swiper/core";
import "./Review.scss";
import proffesionalPic from "../../../images/reviewImg/proffesional.jpg";

SwiperCore.use([Autoplay, EffectCube, Pagination]);

const Review = () => {
  const reviews = [
    {
      img: proffesionalPic,
      name: "Md Nayem Hossain",
      tittle: "CEO & Founder",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, reprehenderit.",
    },
    {
      img: proffesionalPic,
      name: "Md Nayem Hossain",
      tittle: "CEO & Founder",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, reprehenderit.",
    },
    {
      img: proffesionalPic,
      name: "Md Nayem Hossain",
      tittle: "CEO & Founder",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, reprehenderit.",
    },
  ];
  return (
    <div className="mt-4">
      <Swiper
        // effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={false}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide>
            <div className="border border-info p-4">
              <div className="row">
                <div className="col-5">
                  <img
                    className="review-img-style rounded-circle"
                    src={review.img}
                    alt=""
                  />
                </div>
                <div className="col-7">
                  <h3>{review.name}</h3>
                  <p>{review.tittle}</p>
                </div>
              </div>
              <p>{review.details}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
