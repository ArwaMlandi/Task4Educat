import React from "react";
import "./NaveBarDown.css";
import { Link } from "react-router-dom";
import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";
import { BsList } from "react-icons/bs";
function NaveBarDown() {
  const [menueopen, setmenueopen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (item) => {
    setActiveItem(item);
  };
  return (
    <nav className="navbar">
      <h2>Learner</h2>
      <div className="top-menue" onClick={() => setmenueopen((prev) => !prev)}>
        <BsList />
      </div>
      <ul className="menue" style={{ top: menueopen && "0" }}>
        <li className={`nav-item ${activeItem === "home" ? "active" : ""}`}>
          <Link onClick={() => handleClick("home")} to="/Task4Educat/">
            Home
          </Link>
        </li>
        <li
          className={`nav-item dropdown ${
            activeItem === "dropdown" ? "active" : ""
          }`}
        >
          <a
            href="#!"
            className="nav-link"
            onClick={() => handleClick("dropdown")}
          >
            Dropdown <BiChevronDown />
          </a>
          <ul className="dropdown-menu">
            <li className="dropdown-item">
              <Link to="/option1">Option 1</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/option2">Option 2</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/option3">Option 3</Link>
            </li>
          </ul>
        </li>
        <li className={`nav-item ${activeItem === "staff" ? "active" : ""}`}>
          <Link to="/" onClick={() => handleClick("staff")}>
            Our Staff
          </Link>
        </li>
        <li className={`nav-item ${activeItem === "news" ? "active" : ""}`}>
          <Link to="/Task4Educat/news" onClick={() => handleClick("news")}>
            News
          </Link>
        </li>
        <li className={`nav-item ${activeItem === "gallery" ? "active" : ""}`}>
          <Link to="/" onClick={() => handleClick("gallery")}>
            Gallery
          </Link>
        </li>

        <li className={`nav-item ${activeItem === "about" ? "active" : ""}`}>
          <Link to="/Task4Educat/about" onClick={() => handleClick("about")}>
            About
          </Link>
        </li>
        <li className={`nav-item ${activeItem === "contact" ? "active" : ""}`}>
          <Link to="/contact" onClick={() => handleClick("contact")}>
            Contact
          </Link>
        </li>
      </ul>

      <button className="nav-button">ENROLL NOW</button>
    </nav>
  );
}

export default NaveBarDown;
