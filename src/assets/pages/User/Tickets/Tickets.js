import React from "react";
import NavBar from "../../../Components/NavBar/NavBar";
import Footer from "../../../Components/Footer/Footer";
import AsideTicket from "./Components/AsideTicket/AsideTickets";
import TicketsSection from "./Components/TicketsSection/TicketsSection";

function Tickets() {
  return (
    <>
      <NavBar />
      <AsideTicket />
      {/* <TicketsSection /> */}

      <Footer />
    </>
  );
}

export default Tickets;
