import React, { useEffect, useState } from "react";
import "./Shop.scss";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faStar } from "@fortawesome/free-solid-svg-icons";
import { addToCart, getDataFromLocalStorage } from "../../../redux/actions/CartAction";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Pagination, Navigation } from "swiper/core";
import ProductModal from "../Home/ProductModal/ProductModal";


SwiperCore.use([Pagination, Navigation]);

const Shop = () => {
  const products = useSelector((state) => {
    return state.cart.fakeData;
  });
  const Dispatch = useDispatch();

  const [productss, setProductss] = useState({});
  const handleDetails = (id) => {
    const productsDetails = products.find((x) => x.key === id);
    console.log(productsDetails);
    setProductss(productsDetails);
  };

  useEffect(() => {

    Dispatch(getDataFromLocalStorage())
   
  }, []);

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
        {products.slice(1, 16).map((product) => (
          <SwiperSlide className=" col-md-4 ">
            <div class="">
              <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={product.img} />

                <Card.Body>
                  <p>
                    <small>{product.category}</small>
                  </p>
                  <Card.Title>{product.name.slice(0, 40)}...</Card.Title>
                  <h3>
                    <b>Price: ${product.price}</b>
                  </h3>
                  <p>
                    {product.star}
                    <FontAwesomeIcon icon={faStar} />
                  </p>
                  <div>
                    <button
                      onClick={() => Dispatch(addToCart(product))}
                      className="btn btn-outline-dark"
                    >
                      <FontAwesomeIcon icon={faCartPlus} />
                      Add to cart{" "}
                    </button>
                    <button
                      className="btn btn-outline-dark ms-4"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModalToggle"
                      onClick={() => handleDetails(product.key)}
                    >
                      View Details
                    </button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <ProductModal
        handleDetails={handleDetails}
        productinfo={productss}
      ></ProductModal>
    </div>
  );
};

export default Shop;
