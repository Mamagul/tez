import React from "react";
import "../styles/hero.css";
import StayFocused from "./StayFocused";
import ofis from "../images/ofis.jpg";

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="main">
          <StayFocused></StayFocused>
        </div>
        <div className="imageOfis">
          <img src={ofis} alt="" />
        </div>
      </section>
    </>
  );
}
