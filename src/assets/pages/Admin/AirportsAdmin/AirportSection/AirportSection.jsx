import React from "react";
import { Link } from "react-router-dom";
import "../AirportSection/AirportSection.scss";

function AirportSection() {
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
                <p>Id Airport: </p>
                <p>City: </p>
                <p>Country: </p>
                <p>Name: </p>
                <button href="#" className="btnDelete">
                  Delete Airport
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="airport-form">
          <h2>Add new Airport</h2>
          <form action="">
            <label htmlFor="">
              Id Airport: <input type="text" />
            </label>

            <label htmlFor="">
              City: <input type="text" />
            </label>

            <label htmlFor="">
              Country: <input type="text" />
            </label>

            <label htmlFor="">
              Name: <input type="text" />
            </label>

            <button type="submit" className="btn">
              Add Airport
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AirportSection;
