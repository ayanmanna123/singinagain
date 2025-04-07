import React, { useEffect, useState } from "react";
import "./UserProfile.css";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const authToken = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/auth/getuser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": authToken,
          },
        });

        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error("Failed to fetch user profile:", err);
      }
    };

    fetchProfile();
  }, [authToken]);

  if (!user) return <p>Loading profile...</p>;

  return (
    <div className="user-profile">
      <div className="user-card">
        <img
          src={`https://api.dicebear.com/6.x/initials/svg?seed=${user.name}`}
          alt="avatar"
          className="avatar"
        />
        <h2>{user.name}</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Joined:</strong> {new Date(user.date).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default UserProfile;
