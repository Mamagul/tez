import React from "react";
import "../styles/form.css";
import woman from "../images/woman.png";

export default function Form() {
  return (
    <section class="form-section">
      <div class="form-container">
        <div class="form-content">
          <h2>Get in touch</h2>
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="E-mail" required />
            <label class="checkbox-wrapper">
              <input type="checkbox" />I accept <a href="#">Privacy policy</a>
            </label>
            <button type="submit">SUBMIT FORM</button>
          </form>
        </div>
        <div class="form-image">
          <img src={woman} alt="Woman with documents" />
        </div>
      </div>
    </section>
  );
}
