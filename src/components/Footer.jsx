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
            <li><a href='/'>Home</a></li>
            <li><a href='/services'>Services</a></li>
            <li><a href='/gallery'>Gallery</a></li>
            <li><a href='/faq'>FAQ</a></li>
          </ul>
          <ul>
            <li><a href='/about-us'>About Us</a></li>
            <li><a href='/contact'>Contact</a></li>
            <li><a href='/privacy'>Privacy</a></li>
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
        <p>&copy; {new Date().getFullYear()} Morgan Custom Windows | All Rights Reserved | <a href="/privacy">Privacy & Accessibility</a></p>
      </div>
    </footer>
  );
};

export default Footer;
