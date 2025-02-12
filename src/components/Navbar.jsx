import "../styles/Navbar.css";
import menu_open from "../assets/menu_open.svg";
import menu_close from "../assets/menu_close.svg";
import logo from "../assets/MorganCustomWindows.png";
import { useRef } from "react";

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
          <a href="/"><img src={logo} alt="Morgan Custom Windows Logo" /></a>
        </div>
        <img src={menu_open} onClick={openMenu} className="nav-mob-open" alt="Open Menu" />
        <ul className="navbar" ref={menuRef}>
          <img src={menu_close} onClick={closeMenu} className="nav-mob-close" alt="Close Menu" />
          <li><a href="/" onClick={closeMenu} className="nav-link">Home</a></li>
          <li><a href="/services/" onClick={closeMenu} className="nav-link">Services</a></li>
          <li><a href="/gallery/" onClick={closeMenu} className="nav-link">Gallery</a></li>
          <li><a href="/faq/" onClick={closeMenu} className="nav-link">FAQ</a></li>
          <li><a href="/about/" onClick={closeMenu} className="nav-link">About Us</a></li>
          <li><a href="/contact/" onClick={closeMenu} className="nav-link">Contact</a></li>
        </ul>
      </nav>
      {/* Overlay */}
      <div ref={overlayRef} className="menu-overlay" onClick={closeMenu}></div>
    </>
  );
}

export default Navbar;
