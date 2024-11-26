import React from "react";
import { FaUser } from "react-icons/fa"; // Si deseas usar el ícono
import "../Components/ProfileSection.scss";

function ProfileSection() {
  const userData = {
    name: "John",
    lastname: "Doe",
    address: "*****",
    email: "john.doe@example.com",
    phone: "+1234567890",
  };

  return (
    <div className="profile-container">
      <div className="profile">
        <div className="profile-header">
          <h1>Profile</h1>
          <FaUser size={50} color="#0099cc" />
        </div>
        <div className="profile-content">
          <div className="profile-card">
            <div className="profile-item">
              <strong>Name:</strong>
              <p>{userData.name}</p>
            </div>
            <div className="profile-item">
              <strong>Lastname:</strong>
              <p>{userData.lastname}</p>
            </div>
            <div className="profile-item">
              <strong>Address:</strong>
              <p>{userData.address}</p>
            </div>
            <div className="profile-item">
              <strong>Email:</strong>
              <p>{userData.email}</p>
            </div>
            <div className="profile-item">
              <strong>Phone:</strong>
              <p>{userData.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;
