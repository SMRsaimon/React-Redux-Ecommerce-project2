import React from "react";
import "./HomeFeature.scss";
import coin from "../../../images/coin.png";
import delivery from "../../../images/delivery.png";
import hours24 from "../../../images/24Hours.png";

const features = [
  {
    icon: delivery,
    featureName: "FREE SHIPPING & RETURN",
    featureDetails: "Free shipping on all orders over $99",
  },
  {
    icon: coin,
    featureName: "MONEY BACK GUARANTEE",
    featureDetails: "100% money back guarantee",
  },
  {
    icon: hours24,
    featureName: "ONLINE SUPPORT 24/7",
    featureDetails: "Lorem ipsum dolor sit amet.",
  },
];

const HomeFeature = () => {
  return (
    <div className="home-features d-flex justify-content-center mt-3 px-3">
      <div className="container row border">
        {features.map((feature) => (
          <div className="col-md-4 d-flex justify-content-center py-3">
            <img src={feature.icon} alt="" />
            <div className="ms-3 d-flex align-items-center">
              <div className="">
                <h6>{feature.featureName}</h6>
                <p>
                  <small>{feature.featureDetails}</small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeFeature;
