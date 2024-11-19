import React from "react";
import "../About/About.scss";
import { GrMoney } from "react-icons/gr";
import { BiWorld } from "react-icons/bi";
import { FaHandHoldingHeart } from "react-icons/fa";

function About() {
  return (
    <section className="about section">
      <div className="secContainer">
        <div className="title">Why Airline?</div>

        <div className="mainContent container grid">
          <div className="singleItem">
            <GrMoney className="icon" />

            <p>Fair rates, without compromising quality.</p>
          </div>

          <div className="singleItem">
            <BiWorld className="icon" />

            <p>Wide network of international destinations.</p>
          </div>

          <div className="singleItem">
            <FaHandHoldingHeart className="icon" />

            <p>Commitment to your comfort and safety.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
