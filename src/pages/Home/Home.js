import React from "react";
import "./Home.css";
import Header from "../../components/header/Header";
import Profile from "../../components/header/Profile/Profile";

const Home = () => {
  return (
    <div className="home">
      <Profile />
      <Header />
    </div>
  );
};

export default Home;
