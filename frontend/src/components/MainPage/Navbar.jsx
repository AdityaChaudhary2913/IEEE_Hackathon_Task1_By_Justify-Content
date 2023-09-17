import React, { useState } from "react";
import "./Navbar.css";
import logo from "./logo.avif";
import logo2 from "./logo2.avif";
import logo3 from "./logo3.jpg";
import { useNavigate } from "react-router-dom";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const goToHomeHandler = () => {
    navigate("/landing");
  };
  const showMediaLinks = () => {
    setShowMediaIcons(!showMediaIcons);
  };
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <img src={logo} alt="" onClick={goToHomeHandler} />
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li onClick={showMediaLinks}>
              <NavLink to="/landing">Home</NavLink>
            </li>
            <li onClick={showMediaLinks}>
              <NavLink to="/calculator">Calculator</NavLink>
            </li>
            <li onClick={showMediaLinks}>
              <NavLink to="/compare">Compare</NavLink>
            </li>
            <li onClick={showMediaLinks}>
              <NavLink to="/offset">Offset</NavLink>
            </li>
            <li onClick={showMediaLinks}>
              <NavLink to="/contact">contact Us</NavLink>
            </li>
          </ul>
        </div>

        {/* <button type="button" class="btn btn-outline-success">Logout</button> */}

        <div className="social-media">
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={showMediaLinks}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      {/* <section className="hero-section">
        <p>Welcome to </p>
        <h1>Thapa Technical</h1>
      </section> */}
    </>
  );
};

export default Navbar;
