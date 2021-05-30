import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./AllProduct.scss";

const AllProduct = () => {
  const products = useSelector((state) => {
    return state.cart.fakeData;
  });
  const topRatedProduct = products.slice(1, 4);
  const bestSellingProduct = products.slice(5, 8);
  const latestProduct = products.slice(9, 12);
  return (
    <div className="mt-4">
      <div className="row">
        <div className="col-md-4 text-center mt-3 mt-md-0">
          <h4 className='text-start'>TOP RATED PRODUCTS</h4>
          <div className="row">
            {topRatedProduct.map((top) => (
              <div className="col-12">
                <div className="row">
                  <div className="col-4">
                    <img
                      className="top-rated-product-style"
                      src={top.img}
                      alt=""
                    />
                  </div>
                  <div className="col-8">
                    <h6>
                      <Link>{top.name.slice(0, 20)}...</Link>
                    </h6>
                    <p>
                      {top.star}
                      <FontAwesomeIcon icon={faStar} />
                    </p>
                    <p>${top.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4 text-center mt-3 mt-md-0">
          <h4 className='text-start'>BEST SELLING PRODUCTS</h4>
          <div className="row">
            {bestSellingProduct.map((top) => (
              <div className="col-12">
                <div className="row">
                  <div className="col-4">
                    <img
                      className="top-rated-product-style"
                      src={top.img}
                      alt=""
                    />
                  </div>
                  <div className="col-8">
                    <h6>
                      <Link>{top.name.slice(1, 20)}...</Link>
                    </h6>
                    <p>
                      {top.star}
                      <FontAwesomeIcon icon={faStar} />
                    </p>
                    <p>${top.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-4 text-center mt-3 mt-md-0">
          <h4 className='text-start'>LATEST PRODUCTS</h4>
          <div className="row">
            {latestProduct.map((top) => (
              <div className="col-12">
                <div className="row">
                  <div className="col-4">
                    <img
                      className="top-rated-product-style"
                      src={top.img}
                      alt=""
                    />
                  </div>
                  <div className="col-8">
                    <h6>
                      <Link>{top.name.slice(1, 20)}...</Link>
                    </h6>
                    <p>
                      {top.star}
                      <FontAwesomeIcon icon={faStar} />
                    </p>
                    <p>${top.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
