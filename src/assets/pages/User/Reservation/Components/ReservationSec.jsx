import React, { useState } from "react";
import "../Components/ReservationSec.scss"; // Asegúrate de que la ruta sea correcta

function ReservationSec() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    flightNumber: "AA123", // Datos del vuelo seleccionados previamente
    departureDate: "2024-12-01",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Reservation Successful!");
  };

  return (
    <div className="booking-container">
      <div className="booking-header">
        <h1>Flight Reservation</h1>
        <p>Reserve your flight with us today!</p>
      </div>
      <div className="booking-form">
        <h2>Flight Information</h2>
        <div className="flight-info">
          <p>
            <strong>Flight Number:</strong> {formData.flightNumber}
          </p>
          <p>
            <strong>Departure Date:</strong> {formData.departureDate}
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            Reserve Flight
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReservationSec;
