import '../styles/ContactLandingSection.css';
import ContactBackground from '../assets/ContactSectionBackground.jpg';

const ContactLandingSection = () => {
  return (
    <section
      className="landing-contact-section"
      style={{ backgroundImage: `url(${ContactBackground})` }}>
      <div className="contact-intro-content-container">
        <h1>Custom Window Replacement Services in Tulsa</h1>
        <h2>Contact Morgan Custom Windows</h2>
        <h3>Reach Out Today for Tailored Window Solutions and Expert Guidance</h3>
        <a href="#Book" id='ContactButton' className="cta-button">BOOK YOUR ASSESSMENT</a>
      </div>
    </section>
  )
}

export default ContactLandingSection
