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
        <h3>See Why Countless Homeowners Trust Us for Quality Custom Windows</h3>
        <button className="cta-button">BOOK YOUR ASSESSMENT</button>
      </div>
    </section>
  );
};

export default LandingAboutSection;
