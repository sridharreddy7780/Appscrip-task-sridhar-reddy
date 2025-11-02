import { useState } from "react";
import { FaSearch, FaHeart, FaShoppingBag, FaUser, FaBars } from "react-icons/fa";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["SHOP", "SKILLS", "STORIES", "ABOUT", "CONTACT US"];

  return (
    <header className="header">
      <div className="header-top">
        <div className="left-section">
          <FaBars className="menu-toggle-btn" onClick={() => setMenuOpen(!menuOpen)} />
          <img
            src="https://image2url.com/images/1762081674200-eb84734c-902a-4312-a1fe-4483c6552b3b.png"
            alt="Muse brand logo"
            loading="lazy"
            className="brand-logo"
          />
        </div>

        <h1 className="brand-title"> METTA MUSE</h1>

        <div className="action-icons">
          <FaSearch className="icon-btn" />
          <FaHeart className="icon-btn" />
          <FaShoppingBag className="icon-btn" />
          <FaUser className="icon-btn" />
          <select aria-label="Select Language" className="language-select">
            <option>ENG</option>
            <option>ES</option>
            <option>FR</option>
          </select>
        </div>
      </div>

      <nav className={`main-nav ${menuOpen ? "show" : ""}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
