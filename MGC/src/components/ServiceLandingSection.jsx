import '../styles/ServiceLandingSection.css';
import ServicesBackground from '../assets/ServicesBackground.png'

const ServiceLandingSection = () => {
  return (
    <section
      className="landing-services-section"
      style={{ backgroundImage: `url(${ServicesBackground})` }}>
      <div className="services-intro-content-container">
        <h1>Custom Window Replacement Services for the Tulsa Metropolitan Area</h1>
        <h2>Morgan Custom Windows Services</h2>
        <h3>Explore Our Expert Window Installation Services</h3>
        <button className="cta-button">BOOK YOUR ASSESSMENT</button>
      </div>
    </section>
  )
}

export default ServiceLandingSection
