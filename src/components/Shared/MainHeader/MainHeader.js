import React from "react";
import "./MainHeader.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faHeart, faUser } from "@fortawesome/free-regular-svg-icons";
import { useSelector } from "react-redux";

const categories = [
  {
    categoryName: "Cloths",
  },
  {
    categoryName: "Watch",
  },
  {
    categoryName: "Dress",
  },
  {
    categoryName: "T-Shirt",
  },
  {
    categoryName: "Mobile",
  },
  {
    categoryName: "Computer",
  },
  {
    categoryName: "Electronic",
  },
];

const MainHeader = () => {
  const products = useSelector(state => {

    return state.cart.cart
})
console.log(products);
  return (
    <section className="main-header mt-3 d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-between">
          <div className="logo col-2">
            <h2>E-commerce</h2>
          </div>
          <div className="row search-cate-btn-part d-flex align-items-center col-5">
            <div className="col-7">
              <input type="text" placeholder="search" />
            </div>
            <div className="col-5 d-flex float-end">
              <ul className="navbar-nav category-nav">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    All Categories
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    {categories.map((category) => (
                      <li>
                        <Link className="dropdown-item" to="#">
                          {category.categoryName}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
              <button className="">search</button>
            </div>
          </div>
          <div className="about-part d-flex align-items-center justify-content-end col-4">
            <div className="icon-part d-none d-md-block">
              <FontAwesomeIcon icon={faPhone} size="2x" />
            </div>
            <div className="phone-text-part d-none d-md-block">
              <h6>
                <small>call us now</small>
              </h6>
              <h4>
                <small>+8801841181011</small>
              </h4>
            </div>
            <div className="my-account ps-4">
              <Link to="">
                <FontAwesomeIcon icon={faUser} size="2x" />
              </Link>
            </div>
            <div className="my-wishlist ps-4">
              <Link to="">
                <FontAwesomeIcon icon={faHeart} size="2x" />
              </Link>
            </div>
            <div className="my-cart ps-4">
              <Link to="">
                <FontAwesomeIcon icon={faCartArrowDown} size="2x" />
                <span>{products.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainHeader;
