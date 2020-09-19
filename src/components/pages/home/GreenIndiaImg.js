import React from "react";
import Zoom from "react-reveal/Zoom";
import greenImg from "../../../Resources/images/HomeSlider/cleangreen.jpg";
import ReactTypingEffect from "react-typing-effect";

function GreenIndiaImg() {
  return (
    <div>
      <div className="green_wrapper">
        <Zoom>
          <div
            className="green_image"
            style={{
              background: `url(${greenImg}) no-repeat`,
              height: "320px",
              borderRadius: "20px",
            }}
          ></div>
        </Zoom>

        <div className="green_content">
          <div className="green_typing">
            <ReactTypingEffect
              text="CLEAN INDIA GREEN INDIA – AN INITIATIVE UNDER THE SWACHH BHARAT MISSION LAUNCHED BY HON'BLE PRIME MINISTER OF INDIA ON 02-10-2014."
              speed="60"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GreenIndiaImg;
