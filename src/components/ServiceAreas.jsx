import '../styles/ServiceAreas.css';
import OklahomaState from '../assets/OklahomaState.png';

const ServiceAreas = () => {
  return (
    <section className="service-areas">
      <div className="service-areas-container">
        <div className="map-container">
          <img
            src={OklahomaState}
            alt="Map highlighting Tulsa Metropolitan Area"
            className="oklahoma-map"
          />
        </div>
        <div className="content-container">
          <h2>Your Trusted Window Experts Across the Tulsa Metropolitan Area</h2>
          <h3>Proudly Serving The Tulsa Metropolitan Area</h3>
          <p>
            We proudly serve the entire Tulsa Metropolitan Area, including Tulsa, Broken Arrow, Bixby, Jenks,
            Owasso, Sand Springs, Sapulpa, Claremore, and surrounding communities. Wherever you are in the
            region, Morgan Custom Windows is dedicated to providing exceptional window solutions tailored to your
            home.
          </p>
          <div className='cta-container'>
            <a className="cta-button" aria-label='Book your assessment with Morgan Custom Windows' title="Book your assessment with Morgan Custom Windows" href='/contact/'>Book Your Assessment</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
