import { useState } from "react";
import "../styles/Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Ritik</div>

      <button className="menu-btn" onClick={() => setOpen(!open)}>
        ☰     
      </button>
        {/* html -> &#9776; */}
      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li><a href="#">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
