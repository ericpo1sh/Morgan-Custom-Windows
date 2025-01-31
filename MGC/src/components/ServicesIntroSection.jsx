import '../styles/ServicesIntroSection.css';
import CheckBox from '../assets/CheckBox.jsx';

const ServicesIntroSection = () => {
  return (
    <section className="services-intro-section">
      <div className='intro-outer-container'>
        <div className='intro-inner-container'>
          <div className="intro-left">
            <h2>SERVING THE NORTHEASTERN OKLAHOMA AREA</h2>
            <h3>Premium Residential & Commercial Custom Window Company In Tulsa & Surrounding Areas</h3>
            <p>
            At Morgan Custom Windows, we specialize in creating custom window designs that match the unique style and architecture of your home or business. Whether you’re looking for modern aesthetics, classic charm, or something entirely bespoke, our team will work with you to design windows that perfectly reflect your vision and exceed expectations. With high-quality materials and innovative designs, our custom windows not only enhance the look and value of your property but also improve energy efficiency, functionality, and long-term durability.
            </p>
          </div>
          <div className="intro-right">
            <ul className="feature-list">
              <li>
                <CheckBox /> Free Estimates
              </li>
              <li>
                <CheckBox /> No-Surprise Guarantee
              </li>
              <li>
                <CheckBox /> Clear, Transparent, Daily Communication
              </li>
              <li>
                <CheckBox /> Always On Time
              </li>
              <li>
                <CheckBox /> Locally Owned and Operated
              </li>
              <li>
                <CheckBox /> Custom Window Shapes and Sizes
              </li>
            </ul>
            <button className="cta-button">BOOK YOUR ASSESSMENT</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesIntroSection;
