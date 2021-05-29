import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { addToCart } from "../../../redux/actions/CartAction";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
SwiperCore.use([Pagination, Navigation]);

const Shop = () => {
  const products = useSelector((state) => {
    return state.cart.fakeData;
  });
  const Dispatch = useDispatch();

  return (
    <div style={{}} className="">
        <h2>FEATURED PRODUCTS</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={false}
        navigation={true}
        className="mySwiper row"
      >
        {products.slice(1, 9).map((product) => (
          <SwiperSlide className=" col-md-4">
            <div>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                  <p>
                    <small>{product.category}</small>
                  </p>
                  <Card.Title>{product.name.slice(1, 40)}...</Card.Title>
                  <h3>
                    <b>Price: ${product.price}</b>
                  </h3>
                  <p>
                    {product.star}
                    <FontAwesomeIcon icon={faStar} />
                  </p>
                  <button
                    onClick={() => Dispatch(addToCart(product))}
                    className="btn btn-primary"
                  >
                    Add to cart
                  </button>
                </Card.Body>
              </Card>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Shop;
