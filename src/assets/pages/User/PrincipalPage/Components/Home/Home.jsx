import React from "react";
import "./../Home/Home.scss";
import bookFlight from "../../../BookFlight/BookFlight";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LuPlaneTakeoff } from "react-icons/lu";

function Home() {
  return (
    <section className="home">
      <div className="secContainer containerr">
        <div className="homeText">
          <h1 className="title">Nothing to lose, and a world to see</h1>
          <p className="subTitle">
            Safe, fast and comfortable flights so you can enjoy every moment.
          </p>

          <button className="btn">
            <Link to="/bookflight">Book Your Flight</Link>
          </button>
        </div>

        <div className="homeCard grid">
          {/* <h1 className="subtitle">
            Find your next destination and make it a reality.
          </h1> */}
          <div className="originDiv">
            {/* <label htmlFor="origin">Origin</label> */}
            <input type="text" placeholder="Origin" />
          </div>

          <div className="distDiv">
            {/* <label htmlFor="distance">Destination</label> */}
            <input type="text" placeholder="Destination" />
          </div>

          <div className="departureDiv">
            {/* <label htmlFor="departure">Departure Date</label> */}
            <input type="date" placeholder="Departure Date" />
          </div>

          <div className="arrivalnDiv">
            {/* <label htmlFor="arrival">Arrival Date</label> */}
            <input type="date" placeholder="Arrival Date" />
          </div>

          <div className="passengerQuantitynDiv">
            {/* <label htmlFor="passenger Quantityn">Passenger</label> */}
            <input type="number" placeholder="Passenger quantity" min={1} />
          </div>

          <button className="btn">Search</button>
        </div>
      </div>
    </section>
  );
}

export default Home;
