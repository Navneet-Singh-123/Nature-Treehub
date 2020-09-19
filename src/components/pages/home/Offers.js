import React from "react";

function Offers() {
  return (
    <div className="offer_wrapper">
      <div className="offer_header">Discounts</div>
      <div className="offer_content">
        <ul>
          <li className="odd">
            <a href="#">
              <span>Offer1 </span>
            </a>
          </li>
          <li className="even">
            <a href="#">Offer2</a>
          </li>
          <li className="odd">
            <a href="#">Offer3</a>
          </li>
          <li className="even">
            <a href="#">Offer4</a>
          </li>
          <li className="odd">
            <a href="#">Offer5</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Offers;
