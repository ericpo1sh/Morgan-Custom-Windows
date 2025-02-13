import '../styles/LandingAboutSection.css';
import AboutBackground from '../assets/AboutBackground.png';

const LandingAboutSection = () => {
  return (
    <section
      className="landing-about-section"
      style={{ backgroundImage: `url(${AboutBackground})` }}>
      <div className="about-intro-content-container">
        <h1>Custom Window Replacements for the Tulsa Metropolitan Area</h1>
        <h2>About Morgan Custom Windows</h2>
        <p>See Why Countless Homeowners Trust Us for Quality Custom Windows</p>
        <a className="cta-button" href='/contact/' aria-label='Book your assessment with Morgan Custom Windows' title="Book your assessment with Morgan Custom Windows">Book Your Assessment</a>
      </div>
    </section>
  );
};

export default LandingAboutSection;
