import GreenCheckCircle from '../assets/GreenCheckCircle.svg';
import InteriorDoubleHungWindow from '../assets/InterriorDoubleHungWindow.jpg';
import '../styles/WhyItMatters.css';

const WhyItMatters = () => {
  return (
    <section className="why-it-matters">
      {/* Image Section */}
      <div className="image-container">
        <img
          src={InteriorDoubleHungWindow}
          alt="Interior Double Hung Window"
          className="window-image"
        />
      </div>

      {/* Content Section */}
      <div className="content-container">
        <h3 className="subheading">Why Quality Windows Matter For Your Tulsa Home</h3>
        <h2 className="heading">How High-Quality Windows Benefit Homes</h2>
        <p className="description">
          High-quality windows are essential for any home, offering more than just aesthetic appeal. They improve energy efficiency, enhance comfort, reduce noise, and increase the value of your property. Investing in superior windows is a decision that delivers long-term benefits, ensuring your home remains a safe, stylish, and functional space for years to come.
        </p>

        {/* Benefits List */}
        <ul className="benefits-list">
          {[
            'Improved Energy Efficiency',
            'Noise Reduction',
            'Increased Property Value',
            'Enhanced Comfort'
          ].map((benefit, index) => (
            <li key={index} className="benefit-item">
              <img src={GreenCheckCircle} alt="Check" className="check-icon" />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="button-container">
          <button className="call-button">CALL (123) 456-7890</button>
          <button className="assessment-button">BOOK YOUR ASSESSMENT</button>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
