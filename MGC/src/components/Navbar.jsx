import { NavLink } from "react-router-dom";
import '../styles/Navbar.css';
import menu_open from '../assets/menu_open.svg';
import menu_close from '../assets/menu_close.svg';
import logo from '../assets/MorganCustomWindows.png';
import { useRef } from 'react';

function Navbar() {
  const menuRef = useRef(null);
  const overlayRef = useRef(null);

  const openMenu = () => {
    menuRef.current.style.right = "0";
    overlayRef.current.style.display = "block";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
    overlayRef.current.style.display = "none";
  };

  return (
    <>
      <nav className="navbar-container">
        <div className="logo">
          <img src={logo} alt="Morgan Custom Windows Logo" />
        </div>
        <img
          src={menu_open}
          onClick={openMenu}
          className="nav-mob-open"
          alt="Open Menu"
        />
        <ul className="navbar" ref={menuRef}>
          <img
            src={menu_close}
            onClick={closeMenu}
            className="nav-mob-close"
            alt="Close Menu"
          />
          <li>
            <NavLink to="/" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/faq" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink to="/about-us" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => (isActive ? "active" : "")}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* Overlay */}
      <div ref={overlayRef} className="menu-overlay" onClick={closeMenu}></div>
    </>
  );
}

export default Navbar;
