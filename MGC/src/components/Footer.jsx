import '../styles/Footer.css';
import FacebookIcon from '../assets/FacebookIcon';
import MailIcon from '../assets/MailIcon';
import PhoneIcon from '../assets/PhoneIcon';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
        <hr/>
          <ul>
            <li>Services</li>
            <li>Gallery</li>
            <li>Testimonials</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-column">
        <hr/>
          <ul>
            <li>(000) 000-0000</li>
            <li>info@morganwindows.com</li>
            <li>123 Oak Leaf Dr, Tulsa OK 74131</li>
          </ul>
        </div>
        <div className="footer-column">
        <hr/>
          <ul>
            <li>Monday–Friday: 8 AM–6 PM</li>
            <li>Saturday: 8 AM–6 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>
        <div className="footer-column">
        <hr/>
          <p>Connect With Us!</p>
          <div className="social-icons">
          <FacebookIcon/>
          <MailIcon/>
          <PhoneIcon/>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyright 2025 | Morgan Custom Windows | All Rights Reserved | <a href="/privacy">Privacy & Accessibility</a></p>
      </div>
    </footer>
  );
};

export default Footer;
