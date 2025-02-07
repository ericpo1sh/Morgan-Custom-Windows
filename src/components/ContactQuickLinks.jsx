import SocialsIcon from '../assets/SocialsIcon.svg';
import ReviewIcon from '../assets/ReviewIcon.svg';
import ClockIcon from '../assets/ClockIcon.svg';
import GoldCallIcon from '../assets/GoldCallIcon';
import GoldMailIcon from '../assets/GoldMailIcon.svg';
import GoldFacebookIcon from '../assets/GoldFacebookIcon';
import GoogleReviewIcon from '../assets/GoogleReviewIcon.svg';
import '../styles/ContactQuickLinks.css';

const ContactQuickLinks = () => {
  return (
    <section className="contact-quick-links">
      <div className="quick-links-container">
        {/* Hours Section */}
        <div className="quick-link-item">
          <img src={ClockIcon} alt="Operating Hours Icon" />
          <p className="quick-link-title">Hours</p>
          <hr />
          <p className='hours-text'>Monday–Friday: 8 AM–6 PM</p>
          <p className='hours-text'>Saturday: 8 AM–6 PM</p>
          <p className='hours-text'>Sunday: Closed</p>
        </div>

        {/* Connect With Us Section */}
        <div className="quick-link-item">
          <img src={SocialsIcon} alt="Social Media Icon" />
          <p className="quick-link-title">Connect With Us</p>
          <hr />
          <div className="social-icons">
            <a
              href="https://facebook.com/morgancustomwindows"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Connect with us on Facebook"
            >
              <GoldFacebookIcon />
            </a>
            <a
              href="mailto:cam@morgancustomwindows.com"
              className="social-link"
              aria-label="Send us an email"
            >
              <img src={GoldMailIcon} alt="Email Icon" />
            </a>
            <a
              href="tel:0000000000"
              className="social-link"
              aria-label="Call us"
            >
              <GoldCallIcon width="50px" height="50px" />
            </a>
          </div>
        </div>

        {/* Review Us Section */}
        <div className="quick-link-item">
          <img src={ReviewIcon} alt="Review Icon" />
          <p className="quick-link-title">Review Us</p>
          <hr />
          <a
            href="https://www.google.com/maps/place/Morgan+Custom+Windows"
            target="_blank"
            rel="noopener noreferrer"
            className="review-link"
            aria-label="Review us on Google"
          >
            <img src={GoogleReviewIcon} alt="Google Review Icon" />
            Review Us On Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactQuickLinks;
