import React from "react";
import Card from "../Components/Card";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div >
        <h1 style={{fontFamily:"sans-serif",fontSize:"3rem"}}>live and grow with</h1>
        <h1 style={{fontFamily:"sans-serif",fontSize:"3rem"}}>ambitious builders</h1>
      </div>
      <div className="home-banner">
        <img src="../src/assets/1.webp" alt="Banner" className="banner-img" />
      </div>
      <br />
      <Card />
    </div>
  );
}

export default Home;
