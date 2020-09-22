import React from "react";
import Header from "../../header_footer/Header";
import Footer from "../../header_footer/Footer";
import Slider from "./Slider";
import GreenClean from "./GreenIndiaImg";
import Offers from "./Offers";
import Deals from "./Deals";
import FestivalSale from "./FestivalSale";

function HomePage() {
  return (
    <div>
      <Header />
      <Slider />
      <GreenClean />
      <Offers />
      <Deals />
      <FestivalSale />
      <Footer />
    </div>
  );
}

export default HomePage;
