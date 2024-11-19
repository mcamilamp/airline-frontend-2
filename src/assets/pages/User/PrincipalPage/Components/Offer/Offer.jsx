import React from "react";
import "../Offer/Offer.scss";
import { FaSuitcaseRolling } from "react-icons/fa";
import { FaSuitcase } from "react-icons/fa";
import { PiCurrencyDollarBold } from "react-icons/pi";
import { MdFastfood } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

import offer1 from "../../../../../img/offer1.jpg";
import offer2 from "../../../../../img/offer2.jpg";
import offer3 from "../../../../../img/offer3.jpg";

const Offers = [
  {
    id: 1,
    imgSrc: offer1,
    destTitle: "Cartagena",
    price: "$100",
  },
  {
    id: 2,
    imgSrc: offer2,
    destTitle: "Cancun",
    price: "$200",
  },
  {
    id: 3,
    imgSrc: offer3,
    destTitle: "Bogota",
    price: "$160",
  },
];

function Offer() {
  return (
    <section className="offer container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">Special Offers</h2>
          <p>
            Lorem ipsum dolor sit delectus facilis repudiandae provident
            reiciendis labore nostrum, iure maxime quo.
          </p>
        </div>

        <div className="mainContent grid">
          {Offers.map(({ id, imgSrc, destTitle, price }) => {
            return (
              <div className="singleOffer">
                <div className="destImage">
                  <img src={imgSrc} alt="Image Name" />
                  <span className="discount">30% off</span>
                </div>

                <div className="offerBody">
                  <div className="price flex">
                    <h4>{price}</h4>
                    <span className="status">{destTitle}</span>
                  </div>

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

                  {/* <div className="location"></div> */}

                  <button className="btn flex">
                    View Details <FaArrowRight className="icon" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Offer;
