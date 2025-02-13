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
        <a className="cta-button" href='/contact/' aria-label='Book your assessment with Morgan Custom Windows' title="Book your assessment with Morgan Custom Windows">Book Your Assessment</a>
      </div>
    </section>
  )
}

export default ServiceLandingSection
