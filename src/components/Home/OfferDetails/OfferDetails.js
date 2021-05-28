import React from "react";
import "./OfferDetails.scss";
import watch from "../../../images/offerImg/watch.jpg";
import mobile from "../../../images/offerImg/mobile.jpg";
import bag from "../../../images/offerImg/bag.jpg";
import { Link } from "react-router-dom";

const offerData = [
  {
    name: "Watch",
    img: watch,
    offerParsent: "40%",
    goLink: "",
  },
  {
    name: "Mobile",
    img: mobile,
    offerParsent: "35%",
    goLink: "",
  },
  {
    name: "Bag",
    img: bag,
    offerParsent: "45%",
    goLink: "",
  },
];

const OfferDetails = () => {
  return (
    <div className='mt-3'>
      <div className="row">
        {offerData.map((offer) => (
          <div className="col-md-4 mt-2">
            <div
              style={{ backgroundImage: `url(${offer.img})` }}
              className="offer-details-style"
            >
              <h2 className="offer-parsent d-flex align-items-center justify-content-center ms-3">{offer.offerParsent}</h2>
              <Link to='' className="btn btn-dark float-end me-3">Shop Now</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferDetails;
