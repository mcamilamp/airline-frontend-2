import React from "react";
import NavBar from "../../../Components/NavBar/NavBar";
import Footer from "../../../Components/Footer/Footer";
import OfferSec from "./Components/OfferSection/OfferSec";
import HomeOffer from "./Components/HomeOffer/HomeOffer";

function OfferPage() {
  return (
    <>
      <NavBar />
      <HomeOffer />
      <OfferSec />
      <Footer />
    </>
  );
}

export default OfferPage;
