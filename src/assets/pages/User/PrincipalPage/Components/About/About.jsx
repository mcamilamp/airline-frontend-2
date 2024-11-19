import React from "react";
import "../About/About.scss";
import { GrMoney } from "react-icons/gr";
import { BiWorld } from "react-icons/bi";
import { FaHandHoldingHeart } from "react-icons/fa";

import video from "../../../../../video/video.mp4";

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

        <div className="videoContainer">
          <div className="videoCard">
            <video src={video} loop autoPlay muted></video>
            {/* <h3>Live the adventure.</h3> */}
          </div>

          <div className="content">
            <h3>
              Discover the world with us: your next adventure begins on board.
            </h3>
            <p>
              Explore unique destinations with comfort, safety and the best
              service. Your ideal trip is just a flight away!
            </p>
            <button className="btn">
              <a href="#">Explore</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
