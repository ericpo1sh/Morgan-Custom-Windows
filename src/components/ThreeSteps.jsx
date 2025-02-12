import '../styles/ThreeSteps.css';
import GoldCallIcon from '../assets/GoldCallIcon.jsx';
import CalendarIcon from '../assets/CalendarIcon.jsx';
import HandshakeIcon from '../assets/HandshakeIcon.jsx';

const ThreeSteps = () => {
  return (
    <section className="three-steps">
      <header className="three-steps-header">
        <h2>How to Get Started with Morgan Custom Windows</h2>
        <h3>3 Easy Steps to Beautiful Windows in Tulsa</h3>
      </header>
      <div className="steps-container">
        <div className="step-card">
          <GoldCallIcon/>
          <h4>Call (000) 000-0000</h4>
          <p>
          Reach out to us today to discuss your window needs and get personalized answers to any questions you have.
          </p>
          <div className="step-number-one">1</div>
        </div>
        <div className="step-card">
          <CalendarIcon/>
          <h4>Schedule an Assessment</h4>
          <p>
            Set up a no-obligation in-home consultation where we’ll assess your
            windows and provide tailored recommendations.
          </p>
          <div className="step-number-two">2</div>
        </div>
        <div className="step-card">
          <HandshakeIcon/>
          <h4>Meet Our Experts</h4>
          <p>
            Our team will work with you, from finalizing designs to completing
            a flawless installation that transforms your home.
          </p>
          <div className="step-number-three">3</div>
        </div>
      </div>
      <div className="cta-buttons">
        <a className="cta-button" aria-label='Book your assessment with Morgan Custom Windows' title="Book your assessment with Morgan Custom Windows" href='/contact/'>Book Your Assessment</a>
      </div>
    </section>
  );
};

export default ThreeSteps;
