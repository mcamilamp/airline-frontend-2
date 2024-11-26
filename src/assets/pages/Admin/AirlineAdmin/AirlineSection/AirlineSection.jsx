import { Link } from "react-router-dom";
import React from "react";
import "../../AirportsAdmin/AirportSection/AirportSection.scss";

function AirlineSection() {
  return (
    <section className="airport-section">
      <aside className="sidebar">
        <nav>
          <ul>
            <li>
              <Link to="/AdminDashbord">Home</Link>
            </li>
            <li>
              <Link to="/UserAdmin">Users</Link>
            </li>
            <li>
              <Link to="/ReservationAdmin">Reservations</Link>
            </li>
            {/* <li>
              <Link to="/OffersAdmin">Offers</Link>
            </li> */}
            <li>
              <Link to="/DestAdmin">Destinations</Link>
            </li>
            <li>
              <Link to="/Airport">Airports</Link>
            </li>
            <li>
              <Link to="/Airline">Airlines</Link>
            </li>
            <li>
              <Link to="/login" className="btn-login">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <div className="airport-grid">
        <div className="airport-info">
          <h2>Current Airports</h2>
          <div className="info-a">
            <ul>
              <li>
                <p>Id Airline: </p>
                <p>Code Airline: </p>
                <p>Country of origin: </p>
                <p>Name: </p>
                <button href="#" className="btnDelete">
                  Delete Airport
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="airport-form">
          <h2>Add new Airline</h2>
          <form action="">
            <label htmlFor="">
              Id Airline: <input type="text" />
            </label>

            <label htmlFor="">
              Code Airline: <input type="text" />
            </label>

            <label htmlFor="">
              Country of origin: <input type="text" />
            </label>

            <label htmlFor="">
              Name: <input type="text" />
            </label>

            <button type="submit" className="btn">
              Add Airline
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AirlineSection;
