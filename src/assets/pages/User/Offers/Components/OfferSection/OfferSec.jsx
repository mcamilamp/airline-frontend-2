import React from "react";
import "../OfferSection/OfferSec.scss";
import { PiHandbagFill } from "react-icons/pi";
import { FaSuitcase } from "react-icons/fa";
import { PiCurrencyDollarBold } from "react-icons/pi";
import { MdFastfood } from "react-icons/md";

import offer1 from "../../../../../img/offer1.jpg";
import offer2 from "../../../../../img/offer2.jpg";
import offer3 from "../../../../../img/offer3.jpg";

const offers = [
  {
    id: 1,
    img: offer1,
    title: "Cartagena",
    price: "$100",
  },
  {
    id: 2,
    img: offer2,
    title: "Cancun",
    price: "$200",
  },
  {
    id: 3,
    img: offer3,
    title: "Bogota",
    price: "$160",
  },
];

function OfferSec() {
  return (
    <section className="container">
      <div className="most-wanted">
        <h2>Most searched flights</h2>
        <div className="most-wanted-section">
          <a href="">
            <div className="prom">
              <div className="text">
                <h4>
                  From: <span>Bogota</span> to Cartagena
                </h4>
                <p>$70</p>

                <div className="amenities flex">
                  <div className="singleAmenity flex">
                    <FaSuitcase />

                    <small>HandBag</small>
                  </div>
                  <div className="singleAmenity flex">
                    <PiCurrencyDollarBold />

                    <small>Economy</small>
                  </div>
                  <div className="singleAmenity flex">
                    <MdFastfood />

                    <small>Food</small>
                  </div>
                </div>
                <p className="round-trip">Round trip</p>
              </div>
            </div>
          </a>

          <a href="">
            <div className="prom">
              <div className="text">
                <h4>
                  From: <span>Santa Marta</span> to Medellin
                </h4>
                <p>$75</p>
                <div className="amenities flex">
                  <div className="singleAmenity flex">
                    <FaSuitcase />

                    <small>HandBag</small>
                  </div>
                  <div className="singleAmenity flex">
                    <PiCurrencyDollarBold />

                    <small>Economy</small>
                  </div>
                  <div className="singleAmenity flex">
                    <MdFastfood />

                    <small>Food</small>
                  </div>
                </div>
                <p className="round-trip">Round trip</p>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="offer-container">
        <div className="offer-section">
          {offers.map(({ img, title, price }, index) => (
            <a href="">
              {" "}
              <div className="offer-item">
                <div className="OfferImg">
                  <img src={img} alt="Image Name" />
                </div>
                <div className="offerText">
                  <h4>{title}</h4>
                </div>
                <div className="offerPrice">
                  <p>{price}</p>
                  <p>Economy</p>
                  <p>
                    Carry-on luggage
                    <PiHandbagFill />
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OfferSec;
