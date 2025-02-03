import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./component.css";

const Navbar = () => {
  useEffect(() => {
    const body = document.body;

    // Create a new cursor specifically for the navbar
    const navbarCursor = document.createElement("div");
    navbarCursor.className = "navbar-cursor";
    body.appendChild(navbarCursor);

    const customCursor = document.querySelector(".custom-cursor");

    // Handle cursor movement
    const handleMouseMove = (e) => {
      navbarCursor.style.left = `${e.clientX}px`;
      navbarCursor.style.top = `${e.clientY}px`;
    };

    // Add hover effects for navbar links
    const navbarLinks = document.querySelectorAll(".nav-link, .navbar-brand");

    const handleMouseEnter = () => {
      navbarCursor.classList.add("hovering");
      if (customCursor) customCursor.style.display = "none"; // Hide the main custom cursor
    };

    const handleMouseLeave = () => {
      navbarCursor.classList.remove("hovering");
      if (customCursor) customCursor.style.display = ""; // Restore the main custom cursor
    };

    navbarLinks.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    // Attach mousemove event listener
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup on component unmount
    return () => {
      navbarCursor.remove();
      document.removeEventListener("mousemove", handleMouseMove);
      navbarLinks.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky" id="home">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Wecode
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#projects" className="nav-link">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
