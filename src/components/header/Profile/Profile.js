import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div>
      <div className="yellow_box"></div>
      <div className="blue_box">
        <img src="mahi.jpg" className="blue_box" />
      </div>
      <div className="profile_details">
        <span>Hello I'm Mahendran </span>
        <br />
        <span>MERN Stack Developer</span>
        <p>
          Exploring and learning to keep being <strong>VERSATILE</strong>
        </p>
      </div>
    </div>
  );
};

export default Profile;
