import React from "react";
import "../FamousDestinations/FamDest.scss";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

import img1 from "../../../../../img/1.jpg";
import img2 from "../../../../../img/2.jpg";
import img3 from "../../../../../img/3.jpg";
import img4 from "../../../../../img/4.jpg";

function FamDest() {
  return (
    <section className="popular section container">
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">Popular Destination</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              eos reprehenderit fuga dolor aliquam suscipit aut.
            </p>
          </div>
          <div className="iconsDiv flex">
            <FaArrowLeft className="icon leftIcon" />
            <FaArrowRight className="icon" />
          </div>
        </div>

        <div className="mainContent grid">
          <div className="singleDestination">
            <div className="destImage">
              <img src={img1} alt="Image title" />
              <div className="overlayInfo">
                <h3>Some text</h3>
                <p>
                  Lorem ipsum quod quaerat, nam labore exercitationem laborum
                  odit ea ipsam!
                </p>
                <FaArrowRight className="icon" />
              </div>
            </div>

            <div className="destFooter">
              <div className="number">01</div>
              <div className="destText flex">
                <h6>South Korea</h6>
                <span className="flex">
                  <span className="dot">
                    <GoDotFill className="icon" />
                  </span>
                  Dot
                </span>
              </div>
            </div>
          </div>
          <div className="singleDestination">
            <div className="destImage">
              <img src={img2} alt="Image title" />
              <div className="overlayInfo">
                <h3>Some text</h3>
                <p>
                  Lorem ipsum quod quaerat, nam labore exercitationem laborum
                  odit ea ipsam!
                </p>
                <FaArrowRight className="icon" />
              </div>
            </div>

            <div className="destFooter">
              <div className="number">02</div>
              <div className="destText flex">
                <h6>Switzerland</h6>
                <span className="flex">
                  <span className="dot">
                    <GoDotFill className="icon" />
                  </span>
                  Dot
                </span>
              </div>
            </div>
          </div>
          <div className="singleDestination">
            <div className="destImage">
              <img src={img3} alt="Image title" />
              <div className="overlayInfo">
                <h3>Some text</h3>
                <p>
                  Lorem ipsum quod quaerat, nam labore exercitationem laborum
                  odit ea ipsam!
                </p>
                <FaArrowRight className="icon" />
              </div>
            </div>

            <div className="destFooter">
              <div className="number">03</div>
              <div className="destText flex">
                <h6>Italy</h6>
                <span className="flex">
                  <span className="dot">
                    <GoDotFill className="icon" />
                  </span>
                  Dot
                </span>
              </div>
            </div>
          </div>
          <div className="singleDestination">
            <div className="destImage">
              <img src={img4} alt="Image title" />
              <div className="overlayInfo">
                <h3>Some text</h3>
                <p>
                  Lorem ipsum quod quaerat, nam labore exercitationem laborum
                  odit ea ipsam!
                </p>
                <FaArrowRight className="icon" />
              </div>
            </div>

            <div className="destFooter">
              <div className="number">04</div>
              <div className="destText flex">
                <h6>USA</h6>
                <span className="flex">
                  <span className="dot">
                    <GoDotFill className="icon" />
                  </span>
                  Dot
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FamDest;
