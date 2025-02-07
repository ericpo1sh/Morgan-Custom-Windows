import '../styles/ServicesSection.css';
import CustomIcon from '../assets/CustomIcon';
import InstallationIcon from '../assets/InstallationIcon';
import ReplacementIcon from '../assets/ReplacementIcon';

const ServicesSection = () => {
  return (
    <section className="services-section">
      <header className="services-header">
        <h2>Tulsa Metropolitan Area Window Replacement Services</h2>
        <h3>Tailored Window Solutions for Every Tulsa Home</h3>
      </header>
      <div className="services-cards">
        <div className="service-card">
          <CustomIcon alt="Custom Window Design Icon"/>
          <h4>Custom Window Design</h4>
          <p>
            Our custom window designs provide the perfect combination of elegance and functionality, tailored
            to your unique needs and style preferences.
          </p>
        </div>
        <div className="service-card">
          <InstallationIcon alt= "Expert Window Installation Icon"/>
          <h4>Expert Window Installation</h4>
          <p>
            Our team ensures professional window installation with precision and care, enhancing your home's
            energy efficiency and overall aesthetics.
          </p>
        </div>
        <div className="service-card">
          <ReplacementIcon alt="Replacement Windows Icon"/>
          <h4>Replacement Windows</h4>
          <p>
            Upgrade your home with high-quality replacement windows that improve energy efficiency and add a
            modern touch to your living space.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
