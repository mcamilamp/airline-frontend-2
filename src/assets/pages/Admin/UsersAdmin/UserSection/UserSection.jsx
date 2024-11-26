import React, { useState } from "react";
import "./UserSection.scss";
import { Link } from "react-router-dom";

function UserSection() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
  ]);

  const [newUser, setNewUser] = useState({ name: "", email: "" });

  return (
    <div className="admin-users">
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
              <Link to="/DestinationsAdmin">Destinations</Link>
            </li>
            <li>
              <Link to="/login" className="btn-login">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      <div className="user-section">
        <h2 className="title-h2">Admin: Users Management</h2>
        <div className="user-list">
          <h2>Current Users</h2>
          {users.length > 0 ? (
            <ul>
              {users.map((user) => (
                <li key={user.id}>
                  <p>
                    Name:<span>{user.name}</span>
                  </p>
                  <p>
                    Email:
                    <span>{user.email}</span>
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No users available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserSection;
