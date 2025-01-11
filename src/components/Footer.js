import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Weather App. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
