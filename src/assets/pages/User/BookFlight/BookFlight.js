import React from "react";
import "../../../styles/_globals.scss";
import NavBar from "../../../Components/NavBar/NavBar";
import PrincDest from "./Components/PrincipalDestinations/PrincDest";
import Footer from "../../../Components/Footer/Footer";
import Home from "./Components/Home/HomeFlight";

function BookFlight() {
  return (
    <>
      <NavBar />
      <Home></Home>
      <PrincDest />
      <Footer />
    </>
  );
}

export default BookFlight;
