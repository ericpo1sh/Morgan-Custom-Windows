import '../styles/Footer.css';
import FacebookIcon from '../assets/FacebookIcon';
import MailIcon from '../assets/MailIcon';
import PhoneIcon from '../assets/PhoneIcon';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
        <hr/>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/gallery'>Gallery</Link></li>
            <li><Link to='/faq'>FAQ</Link></li>
          </ul>
          <ul>
            <li><Link to='/about-us'>About Us</Link></li>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/privacy'>Privacy</Link></li>
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
            <a href="https://www.facebook.com/people/Morgan-Custom-Windows/61572983758335/" target="_blank" rel="noopener noreferrer">
              <FacebookIcon />
            </a>
            <a href="mailto:cam@morgancustomwindows.com">
              <MailIcon />
            </a>
            <a href="tel:+19182023996">
              <PhoneIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Morgan Custom Windows | All Rights Reserved | <Link to="/privacy">Privacy & Accessibility</Link></p>
      </div>
    </footer>
  );
};

export default Footer;
