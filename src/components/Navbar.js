// Navbar.js
import React from 'react';
import '../styles/Navbar.css';



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
      <a href="/">
          Check Weather  
        </a>
      </div>
      {/* <div className="navbar-links">
        <a href="/Parcourir" className="nav-item">Parcourir</a>

        <a href="/Rejoindre" className="nav-item join">Rejoindre</a>
        <a href="/Avis" className="nav-item avis">Avis</a>
      </div> */}
    </nav>
  );
};

export default Navbar;
