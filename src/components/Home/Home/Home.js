import React from "react";
import MainHeader from "../../Shared/MainHeader/MainHeader";
import TopMenu from "../../Shared/TopMenu/TopMenu";
import HomeBannerSlider from "../HomeBannerSlider/HomeBannerSlider";
import HomeFeature from "../HomeFeature/HomeFeature";
import HomeMenu from "../HomeMenu/HomeMenu";
import Shop from "../Shop/Shop";
import OfferDetails from "../OfferDetails/OfferDetails";
import OfferSlider from "../OfferSlider/OfferSlider";
import SubscribeNews from "../SubscribeNews/SubscribeNews";
import Review from "../Review/Review";
import Blog from "../Blog/Blog";
import Sponser from "../Sponser/Sponser";

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
            <OfferSlider></OfferSlider>
            <SubscribeNews></SubscribeNews>
            <Review></Review>
            <Blog></Blog>
          </div>
          <div className="col-md-9 right-part">
            <HomeBannerSlider></HomeBannerSlider>
            <OfferDetails></OfferDetails>
            <Shop />
            <Sponser></Sponser>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
