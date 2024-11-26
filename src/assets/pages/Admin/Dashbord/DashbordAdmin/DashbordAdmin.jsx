import React from "react";
import "../DashbordAdmin/DashbordAdmin.scss";
import { Link } from "react-router-dom";

function DashbordAdmin() {
  return (
    <div className="admin-dashboard">
      <aside className="sidebar">
        <nav>
          <ul>
            <li>
              <a href="#users">Users</a>
            </li>
            <li>
              <a href="#reservations">Reservations</a>
            </li>
            <li>
              <a href="#offers">Offers</a>
            </li>
            <li>
              <Link to="/login" className="btn-login">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <main className="content">
        <h2>Welcome to the Administration Panel</h2>
        <p>Manage your operations with efficiency and total control.</p>
        <section id="users" className="dashboard-section">
          <h2>Users</h2>
          <button className="btn btn-create">Create User</button>
        </section>

        <section id="reservations" className="dashboard-section">
          <h2>Reservations</h2>
          <button className="btn btn-create">Create Reservation</button>
        </section>

        <section id="offers" className="dashboard-section">
          <h2>Offers</h2>
          <button className="btn btn-create">Create Offer</button>
        </section>
      </main>
    </div>
  );
}

export default DashbordAdmin;