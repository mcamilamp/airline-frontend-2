import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../ReservationSection/ReservSection.scss";

function ReservSection() {
  const [reservations, setReservations] = useState([
    {
      id: 1,
      customer: "John Doe",
      flight: "Flight 123",
      reservationDate: "2024-11-25",
      numberOfPassengers: 2,
    },
    {
      id: 2,
      customer: "Jane Smith",
      flight: "Flight 456",
      reservationDate: "2024-11-26",
      numberOfPassengers: 3,
    },
    {
      id: 3,
      customer: "Maria Gonzales",
      flight: "Flight 469",
      reservationDate: "2025-10-26",
      numberOfPassengers: 19,
    },
    {
      id: 4,
      customer: "Juan Montoya",
      flight: "Flight 156",
      reservationDate: "2024-01-16",
      numberOfPassengers: 10,
    },
  ]);

  return (
    <div className="reservation-section">
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

      <div className="reserv-section">
        <h2 className="title-h2">Admin: Reservations Management</h2>
        <div className="reservation-list">
          <h3>Current Reservations</h3>
          {reservations.length > 0 ? (
            <div className="reserv-item">
              <ul>
                {reservations.map((reservation) => (
                  <li key={reservation.id}>
                    <p>
                      Customer: <span>{reservation.customer}</span>
                    </p>
                    <p>
                      Flight: <span>{reservation.flight}</span>
                    </p>
                    <p>
                      Reservation Date:{" "}
                      <span>{reservation.reservationDate}</span>
                    </p>
                    <p>
                      Number of Passengers:{" "}
                      <span>{reservation.numberOfPassengers}</span>
                    </p>
                    <p>
                      <button href="#" className="btnDelete">
                        Delete Reservation
                      </button>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>No reservations available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ReservSection;
