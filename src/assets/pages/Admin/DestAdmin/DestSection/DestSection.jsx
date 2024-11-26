import React, { useState } from "react";
import "../DestSection/DestSection.scss";
import { Link } from "react-router-dom";

function DestSection() {
  const [destinations, setDestinations] = useState([
    {
      id: 1,
      origin: "New York",
      destination: "London",
      departureTime: "10:00 AM",
      departureDate: "2024-12-01",
      duration: "7h",
    },
    {
      id: 2,
      origin: "Paris",
      destination: "Tokyo",
      departureTime: "8:00 PM",
      departureDate: "2024-12-05",
      duration: "13h",
    },
  ]);

  const [newDestination, setNewDestination] = useState({
    origin: "",
    destination: "",
    departureTime: "",
    departureDate: "",
    duration: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDestination({ ...newDestination, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newDestination.origin &&
      newDestination.destination &&
      newDestination.departureTime &&
      newDestination.departureDate &&
      newDestination.duration
    ) {
      setDestinations([
        ...destinations,
        { id: destinations.length + 1, ...newDestination },
      ]);
      setNewDestination({
        origin: "",
        destination: "",
        departureTime: "",
        departureDate: "",
        duration: "",
      });
    } else {
      alert("Please fill out all fields");
    }
  };

  return (
    <div className="destSection">
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
            <li>
              <Link to="/OffersAdmin">Offers</Link>
            </li>
            <li>
              <Link to="/DestAdmin">Destinations</Link>
            </li>
            <li>
              <Link to="/login" className="btn-login">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <div className="section-dest">
        <h2 className="title-h2">Admin: Destinations Management</h2>

        <div className="destinations-list">
          <h3>Current Destinations</h3>
          {destinations.length > 0 ? (
            <ul>
              {destinations.map((dest) => (
                <li key={dest.id}>
                  <p>
                    Origin: <span>{dest.origin}</span>
                  </p>
                  <p>
                    Destination: <span>{dest.destination}</span>
                  </p>
                  <p>
                    Departure Time: <span>{dest.departureTime}</span>
                  </p>
                  <p>
                    Departure Date: <span>{dest.departureDate}</span>
                  </p>
                  <p>
                    Duration: <span>{dest.duration}</span>
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No destinations available</p>
          )}
        </div>

        <div className="add-destination-form">
          <h3>Add New Destination</h3>
          <form onSubmit={handleSubmit}>
            <label>
              Origin:
              <input
                type="text"
                name="origin"
                value={newDestination.origin}
                onChange={handleChange}
              />
            </label>
            <label>
              Destination:
              <input
                type="text"
                name="destination"
                value={newDestination.destination}
                onChange={handleChange}
              />
            </label>
            <label>
              Departure Time:
              <input
                type="text"
                name="departureTime"
                value={newDestination.departureTime}
                onChange={handleChange}
              />
            </label>
            <label>
              Departure Date:
              <input
                type="date"
                name="departureDate"
                value={newDestination.departureDate}
                onChange={handleChange}
              />
            </label>
            <label>
              Duration:
              <input
                type="text"
                name="duration"
                value={newDestination.duration}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Add Destination</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DestSection;
