import React from "react";
import "../../../App.css";
import DealImg from "../../../Resources/images/HomeSlider/deal.jpeg";
import Fade from "react-reveal/Fade";

function Deals() {
  return (
    <div className="deal_wrapper">
      <div className="deal_content">
        <ul>
          <Fade left>
            <li className="odd">
              <a href="#">Deal1</a>
            </li>
          </Fade>
          <Fade left delay="100">
            <li className="even">
              <a href="#">Deal2</a>
            </li>
          </Fade>
          <Fade left delay="200">
            <li className="odd">
              <a href="#">Deal3</a>
            </li>
          </Fade>
          <Fade left delay="300">
            <li className="even">
              <a href="#">Deal4</a>
            </li>
          </Fade>
          <Fade left delay="400">
            <li className="odd">
              <a href="#">Deal5</a>
            </li>
          </Fade>
        </ul>
      </div>
      <div className="deal_image">
        <Fade right>
          <img src={DealImg} className="img" />
        </Fade>
      </div>
    </div>
  );
}

export default Deals;
