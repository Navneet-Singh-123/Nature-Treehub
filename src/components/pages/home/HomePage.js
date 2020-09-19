import React from "react";
import Header from "../../header_footer/Header";
import Footer from "../../header_footer/Footer";
import Slider from "./Slider";
import GreenClean from "./GreenIndiaImg";
import Offers from "./Offers";

function HomePage() {
  return (
    <div>
      <Header />
      <Slider />
      <GreenClean />
      <Offers />
      <div style={{ height: "500px" }}></div>
      <Footer />
    </div>
  );
}

export default HomePage;
