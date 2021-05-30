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
import AllProduct from "../AllProduct/AllProduct";
import Service from "../Service/Service";
import Footer from "../../Footer/Footer";

const Home = () => {
  return (
    <div>
      <TopMenu></TopMenu>
      <MainHeader></MainHeader>
      <HomeFeature></HomeFeature>
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-3 ps-0 left-part mt-2">
            <HomeMenu></HomeMenu>
            <div className="d-none d-md-block">
              <OfferSlider></OfferSlider>
              <SubscribeNews></SubscribeNews>
              <Review></Review>
              <Blog></Blog>
            </div>
          </div>
          <div className="col-md-9 right-part mt-2">
            <HomeBannerSlider></HomeBannerSlider>
            <OfferDetails></OfferDetails>
            <Shop />
            <Sponser></Sponser>
            <AllProduct></AllProduct>
          </div>
        </div>
      </div>
      <Service></Service>
      <Footer />
    </div>
  );
};

export default Home;
