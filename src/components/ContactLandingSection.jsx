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
        <a href="#Book" id='ContactButton' className="cta-button" aria-label='Book your assessment with Morgan Custom Windows' title="Book your assessment with Morgan Custom Windows">Book Your Assessment</a>
      </div>
    </section>
  )
}

export default ContactLandingSection
