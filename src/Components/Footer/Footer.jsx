import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="detail"><h2>Gaurav</h2>
      <p>Computer Science Student with 1 Year experience in Web Development</p></div>
      <hr />
     
      <div className="bottom-section">
        <div className="policy">
          <p>Terms Of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>

        <div className="copyright">2024&copy; Gaurav All rights reserved</div>
      </div>
    </div>
  );
}

export default Footer;
