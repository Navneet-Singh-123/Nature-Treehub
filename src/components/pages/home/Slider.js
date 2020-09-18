import React from "react";
import Slider from "react-slick";
import "../../../App.css";
import img1 from "../../../Resources/images/HomeSlider/image1.jfif";
import img2 from "../../../Resources/images/HomeSlider/image2.jfif";
import img3 from "../../../Resources/images/HomeSlider/image3.jfif";

const SlidingImage = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
  };

  return (
    <div
      className="slider_wrapper"
      style={{ overflow: "hidden", height: "400px", background: "red" }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="slider_image"
            style={{
              background: `url(${img1}) no-repeat`,
              height: "400px",
            }}
          ></div>
        </div>
        <div>
          <div
            className="slider_image"
            style={{ background: `url(${img2}) no-repeat`, height: "400px" }}
          ></div>
        </div>
        <div>
          <div
            className="slider_image"
            style={{ background: `url(${img3}) no-repeat`, height: "400px" }}
          ></div>
        </div>
      </Slider>
    </div>
  );
};

export default SlidingImage;
