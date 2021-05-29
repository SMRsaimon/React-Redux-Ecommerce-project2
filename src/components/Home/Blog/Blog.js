import React from "react";
import blogImg from "../../../images/reviewImg/proffesional.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, { Pagination } from "swiper/core";
import { Link } from "react-router-dom";

SwiperCore.use([Pagination]);

const Blog = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  const blogInfo = [
    {
      img: blogImg,
      name: "Format Post Video",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eum autem voluptatibus quaerat reiciendis velit.",
    },
    {
      img: blogImg,
      name: "Format Post Video",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eum autem voluptatibus quaerat reiciendis velit.",
    },
    {
      img: blogImg,
      name: "Format Post Video",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et eum autem voluptatibus quaerat reiciendis velit.",
    },
  ];
  return (
    <div className='mt-4'>
      <Swiper pagination={pagination} className="mySwiper">
        {blogInfo.map((blog) => (
          <SwiperSlide>
            <div className="border text-center pb-5 px-3">
            <img className="" src={blog.img} alt="" />
              <h4 className="text-start">{blog.name}</h4>
              <p className="text-start">{blog.details} <br /><Link to=''>continue...</Link> </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;
