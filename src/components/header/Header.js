import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-scroll";

const Header = () => {
  const [nav, setNav] = useState(false);

  const navBox = () => {
    setNav(true);
  };

  return (
    <header>
      <nav className="header_nav">
        <h2>Mahendran</h2>
        <div className={nav ? "header_box" : "header_center"}>
          <Link to="home" smooth={true} duration={500}>
            <span> Home</span>
          </Link>
          <Link to="about" smooth={true} duration={500}>
            <span>About</span>
          </Link>
          <Link to="skills" smooth={true} duration={500}>
            <span> Skills</span>
          </Link>
          <Link to="projects" smooth={true} duration={500}>
            <span> Projects</span>
          </Link>
          <Link to="contact" smooth={true} duration={500} className="contact">
            <span>Contact</span>
          </Link>
        </div>
        <button className={nav ? "nav_open" : ""} onClick={() => navBox()}>
          ...
        </button>
        <button
          className={nav ? "" : "nav_close"}
          onClick={() => setNav(false)}
        >
          x
        </button>
      </nav>
    </header>
  );
};

export default Header;

// {/* <button onClick={showNavbar}>
// {/* <i class="fa-solid fa-xmark"></i> */}X
// </button> */}

// {/* <button className="nav_close" onClick={showNavbar}>
//             {/* <i class="fa-solid fa-bars"></i> */}+
//           </button> */}
