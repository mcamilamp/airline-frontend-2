import React from "react";
import "../Footer/footer.scss";
import { FaPlane } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <a href="#" className="logo">
              <h1 className="flex">
                <FaPlane className="icon" /> AirPlane
              </h1>
            </a>
          </div>

          <div className="socials flex">
            <FaFacebookSquare className="icon" />
            <BsInstagram className="icon" />
            <FaSquareXTwitter className="icon" />
          </div>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Information</span>
          <li>Home</li>
          <li>Offers</li>
          <li>Destinations</li>
          <li>Contacts</li>
        </div>

        <div className="footerLinks">
          <span className="linkTitle">Contact Us</span>
          <span className="phone">+777 524 8790</span>
          <span className="email">airplane@gmail.com</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
