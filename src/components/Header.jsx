import React from "react";
// import "../styles/header.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="containerNav">
        <h1 className="logo">FocusFlow</h1>
        <nav>
          <ul className="nav-list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
