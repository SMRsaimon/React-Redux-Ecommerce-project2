import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDataFromLocalStorage } from "../../redux/actions/CartAction";
import MainHeader from "../Shared/MainHeader/MainHeader";
import TopMenu from "../Shared/TopMenu/TopMenu";
import "./OrderCheckout.scss";

const OrderCheckout = () => {
  const products = useSelector((state) => {
    return state.cart.cart;
  });
  const Dispatch = useDispatch();
  useEffect(() => {
    Dispatch(getDataFromLocalStorage());
  }, []);
  console.log(products);
  return (
    <div>
      <TopMenu></TopMenu>
      <MainHeader></MainHeader>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-7">
            <div className="my-cart-style p-4 shadow d-flex justify-content-between">
              <h4>My Cart ({products.length})</h4>
              <h4>Total: $1200</h4>
            </div>
            <div className="p-4 shadow mt-4">
              {products.map((product) => (
                <div className="row p-3 order-checkout-style">
                  <div className="col-md-3 d-flex justify-content-center align-items-center">
                    <img
                      className="order-checkout-img-style"
                      src={product.img}
                      alt=""
                    />
                  </div>
                  <div className="col-md-3">
                    <h6>{product.name}</h6>
                    <p>Quantity: {product.quentity}</p>
                    <p>Seller: {product.seller}</p>
                    <Link className="text-danger">
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </Link>
                  </div>
                  <div className="col-md-3 d-flex justify-content-center align-items-center">
                    <div className="">
                      <button className="btn btn-style border">-</button>
                      <button className="btn btn-style border" disabled>
                        {product.quentity}
                      </button>
                      <button className="btn btn-style border">+</button>
                    </div>
                  </div>
                  <div className="col-md-3 d-flex justify-content-center align-items-center">
                    <h6>USD 1200</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-5">
            <div className="border p-4">
              <h5 className="checkout-summary">Checkout Summary</h5>
              <table class="table table-borderless">
                <tbody>
                  <tr className="p-3">
                    <td colspan="2">Sub Total</td>
                    <td>$1200</td>
                  </tr>
                  <tr className="p-3">
                    <td colspan="2">Shipping</td>
                    <td>$1200</td>
                  </tr>
                  <tr className="p-3">
                    <td colspan="2">Total</td>
                    <td>$1200</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-center">
                <Link to="" className="btn btn-success text-center">
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCheckout;
