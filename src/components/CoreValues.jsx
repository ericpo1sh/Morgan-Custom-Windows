import '../styles/CoreValues.css';
import CoreValuesImage from '../assets/CoreValuesWindowImage.png';

const CoreValues = () => {
  return (
    <section className="core-values-section">
      <div className="core-value-text-header">
        <h2>LEARN MORE ABOUT OUR COMMITMENT TO EXCELLENCE</h2>
        <h3>Morgan Custom Windows Core Values</h3>
      </div>
      <div className="core-values-container">
        <div className="core-values-content">
          <div className="core-value">
            <h4>Excellence in Craftsmanship</h4>
            <p>
              We take pride in every detail of our work, ensuring that each window
              we design and install reflects the highest standards of quality and precision.
            </p>
          </div>
          <div className="core-value">
            <h4>Customer-First Approach</h4>
            <p>
              Our customers are at the heart of everything we do. From the first call
              to installation, we commit to clear communication, transparency, and
              solutions tailored to your needs.
            </p>
          </div>
          <div className="core-value">
            <h4>Innovation and Efficiency</h4>
            <p>
              We embrace modern designs and cutting-edge technology to provide
              energy-efficient, stylish, and functional windows that enhance your
              property while reducing environmental impact.
            </p>
          </div>
          <div className="core-value">
            <h4>Integrity and Trust</h4>
            <p>
              We believe in honesty and doing what’s right. Our "No-Surprise Guarantee"
              means you can trust us to deliver what we promise, ensuring peace of mind every step of the way.
            </p>
          </div>
        </div>
        <div className="core-values-image">
          <img
            src={CoreValuesImage}
            alt="Bright Window View"
            className="values-image"
          />
        </div>
      </div>
      <div className="cta-button-container">
        <a className="cta-button" href='/contact/' aria-label='Book your assessment with Morgan Custom Windows' title="Book your assessment with Morgan Custom Windows">Book Your Assessment</a>
      </div>
    </section>
  );
};

export default CoreValues;
