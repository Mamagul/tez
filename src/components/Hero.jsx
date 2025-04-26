import React from "react";
import "../styles/hero.css";
import Header from "./Header";
import StayFocused from "./StayFocused";
import ofis from "../images/ofis.jpg";

export default function Hero() {
  return (
    <>
      <section className="hero">
        {/* <Header></Header> */}
        <div className="headerStay">
          <StayFocused></StayFocused>
        </div>
        <div>
          <img src={ofis} alt="" />
        </div>
      </section>
    </>
  );
}
