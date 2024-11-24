import React from "react";
import "../../../styles/_globals.scss";
import NavBar from "./../../../Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import FamDest from "./Components/FamousDestinations/FamDest";
import Offer from "./Components/Offer/Offer";
import About from "./Components/About/About";
import Footer from "./../../../Components/Footer/Footer";

function PrincipalPage() {
  return (
    <>
      <NavBar />
      <Home />
      <FamDest />
      <Offer />
      <About />
      <Footer />
    </>
  );
}

export default PrincipalPage;
