import React, { useState } from "react";
import Home from "../Pages/Home";
import AboutUs from "../Pages/AboutUs";
import ApplyNow from "../Pages/ApplyNow";
import Donate from "../Pages/Donate";
import Inspire from "../Pages/Inspire";

function Header() {
  const [active, setActive] = useState("Home");
  const [isHovered, setIsHovered] = useState(false);

  const renderComponent = () => {
    switch (active) {
      case "Home":
        return <Home />;
      case "AboutUs":
        return <AboutUs />;
      case "ApplyNow":
        return <ApplyNow />;
      case "Donate":
        return <Donate />;
      case "Inspire":
        return <Inspire />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "50vw", 
          backgroundColor: "transparent",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: "15px 0",
          zIndex: 1000,
          backdropFilter: "blur(10px)",
        }}
      >
        <button
          style={{
            border: "none",
            cursor: "pointer",
            background: "transparent",
            color: "black",
            fontSize: "16px",
          }}
          onClick={() => setActive("Home")}
        >
          Home
        </button>
        <button
          style={{
            border: "none",
            cursor: "pointer",
            background: "transparent",
            color: "black",
            fontSize: "16px",
          }}
          onClick={() => setActive("AboutUs")}
        >
          About Us
        </button>
        <button
          style={{
            border: "2px solid black",
            font: "small-caption",
            width: "100px",
            height: "40px",
            borderRadius: "30px",
            cursor: "pointer",
            color: isHovered ? "black" : "white",
            background: isHovered ? "white" : "black",
            transition: "all 0.3s",
          }}
          onClick={() => setActive("ApplyNow")}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Apply Now
        </button>
        <button
          style={{
            border: "none",
            cursor: "pointer",
            background: "transparent",
            color: "black",
            fontSize: "16px",
          }}
          onClick={() => setActive("Donate")}
        >
          Donate
        </button>
        <button
          style={{
            border: "none",
            cursor: "pointer",
            background: "transparent",
            color: "black",
            fontSize: "16px",
          }}
          onClick={() => setActive("Inspire")}
        >
          Inspire
        </button>
      </div>

      <div style={{ height: "80px" }} />

      <div style={{ padding: "20px" }}>{renderComponent()}</div>
    </>
  );
}

export default Header;
