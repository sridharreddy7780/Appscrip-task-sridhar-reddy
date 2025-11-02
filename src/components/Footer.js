import { FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* TOP SECTION */}
      <div className="footer-top">
        {/* LEFT SUBSCRIBE BOX */}
        <div className="footer-subscribe">
          <h1 className="footer-title">BE THE FIRST TO KNOW</h1>
          <p className="footer-text">Sign up for updates from METTA MUSE.</p>

          <div className="subscribe-box">
            <input type="email" placeholder="ENTER YOUR EMAIL" />
            <button className="subscribe-btn">SUBSCRIBE</button>
          </div>
        </div>

        {/* RIGHT CONTACT + CURRENCY BOX */}
        <div className="footer-contact-box">
          <h1 className="footer-title">CONTACT US</h1>
          <p className="footer-text">+44 221 133 5360</p>
          <p className="footer-text">customercare@mettamuse.com</p>

          <h2 className="footer-currency-title">CURRENCY</h2>
          <p className="footer-currency">🌐 USD</p>
          <p className="footer-small-note">
            Transactions will be completed in US Dollars and a currency reference is available
            on hover.
          </p>
        </div>
      </div>

      {/* UNDERLINE */}
      <div className="footer-divider"></div>

      {/* BOTTOM SECTION */}
      <div className="footer-bottom">

        <div className="footer-links">
          <h3>METTA MUSE</h3>
          <ul>
            <li>About Us</li>
            <li>Stories</li>
            <li>Artisans</li>
            <li>Boutiques</li>
            <li>Contact Us</li>
            <li>EU Compliances Docs</li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>QUICK LINKS</h3>
          <ul>
            <li>Orders & Shipping</li>
            <li>Join/Login as a Seller</li>
            <li>Payment & Pricing</li>
            <li>Return & Refunds</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        <div className="footer-social-pay">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <FaInstagram className="social-icon" />
            <FaLinkedin className="social-icon" />
          </div>

          <h3 className="pay-title">METTA MUSE ACCEPTS</h3>
          <div className="payments">
            <img src="https://via.placeholder.com/40x20" alt="Visa" />
            <img src="https://via.placeholder.com/40x20" alt="Mastercard" />
            <img src="https://via.placeholder.com/40x20" alt="PayPal" />
            <img src="https://via.placeholder.com/40x20" alt="Amex" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
