import React from "react";
import MainHeader from "../../Shared/MainHeader/MainHeader";
import TopMenu from "../../Shared/TopMenu/TopMenu";
import HomeBannerSlider from "../HomeBannerSlider/HomeBannerSlider";
import HomeFeature from "../HomeFeature/HomeFeature";
import HomeMenu from "../HomeMenu/HomeMenu";
import OfferDetails from "../OfferDetails/OfferDetails";

const Home = () => {
  return (
    <div>
      <TopMenu></TopMenu>
      <MainHeader></MainHeader>
      <HomeFeature></HomeFeature>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3 ps-0 left-part">
            <HomeMenu></HomeMenu>
          </div>
          <div className="col-md-9 right-part">
            <HomeBannerSlider></HomeBannerSlider>
            <OfferDetails></OfferDetails>
          </div>
        </div>
      </div>
      <h2>This is Home</h2>
    </div>
  );
};

export default Home;
