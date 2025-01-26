import '../styles/ThreeSteps.css';
import CallIcon from '../assets/CallIcon.png';
import CalendarIcon from '../assets/CalendarIcon.png';
import HandshakeIcon from '../assets/HandshakeIcon.png';

const ThreeSteps = () => {
  return (
    <section className="three-steps">
      <header className="three-steps-header">
        <h2>How to Get Started with Morgan Custom Windows</h2>
        <h3>3 Easy Steps to Beautiful Windows in Tulsa</h3>
      </header>
      <div className="steps-container">
        <div className="step-card">
          <img src={CallIcon} alt="Call Icon" />
          <h4>Call (000) 000-0000</h4>
          <p>
            Reach out to us to discuss your window needs and get answers to any
            questions you have.
          </p>
          <div className="step-number">1</div>
        </div>
        <div className="step-card">
          <img src={CalendarIcon} alt="Calendar Icon" />
          <h4>Schedule an Assessment</h4>
          <p>
            Set up a no-obligation in-home consultation where we’ll assess your
            windows and provide tailored recommendations.
          </p>
          <div className="step-number">2</div>
        </div>
        <div className="step-card">
          <img src={HandshakeIcon} alt="Handshake Icon" />
          <h4>Meet Our Experts</h4>
          <p>
            Our team will work with you, from finalizing designs to completing
            a flawless installation that transforms your home.
          </p>
          <div className="step-number">3</div>
        </div>
      </div>
      <div className="cta-buttons">
        <button className="cta-button">Call (123) 456-7890</button>
        <button className="cta-button">Book Your Assessment</button>
      </div>
    </section>
  );
};

export default ThreeSteps;
