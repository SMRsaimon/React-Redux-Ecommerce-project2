import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./OfferSlider.scss";
import camera from "../../../images/offerSliderImg/camera.jpg";
import headphone from "../../../images/offerSliderImg/headphones.jpg";
import airpod from "../../../images/offerSliderImg/airpods.jpg";

import SwiperCore, { Pagination } from "swiper/core";
import { Link } from "react-router-dom";

SwiperCore.use([Pagination]);

const OfferSlider = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  const offerSlider = [
    {
      name: "Canon 4500D",
      img: camera,
      offPrice: "20% off",
      goLink: "",
    },
    {
      name: "Headphone",
      img: headphone,
      offPrice: "25% off",
      goLink: "",
    },
    {
      name: "Airpod",
      img: airpod,
      offPrice: "40% off",
      goLink: "",
    },
  ];
  return (
    <div className="mt-4 offer-slider-style">
      <Swiper pagination={pagination} className="mySwiper">
        {offerSlider.map((offer) => (
          <SwiperSlide>
              <div className="border text-center pb-5">
                <h2>{offer.name}</h2>
                <img className="offer-img-style" src={offer.img} alt="" />
                <h1>{offer.offPrice}</h1>
                <Link to="" className="btn btn-dark">VIEW SALE</Link>
              </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OfferSlider;
