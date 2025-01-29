import '../styles/MeetCameron.css';
import CameronMorganPortrait from '../assets/CameronMorganPortrait.png';

const MeetCameron = () => {
  return (
    <section className="meet-cameron">
      <div className="meet-cameron-container">
        <div className="portrait-container">
          <img
            src={CameronMorganPortrait}
            alt="Cameron Morgan Portrait"
            className="portrait"
          />
        </div>
        <div className="text-container">
          <h2>RESIDENTIAL & COMMERCIAL WINDOW REPLACEMENT COMPANY</h2>
          <h3>Meet Cameron Morgan</h3>
          <p>
            At Morgan Custom Windows, I take pride in delivering top-quality window
            solutions for both residential and commercial properties. As the
            founder, I’ve built this company on the belief that every home and
            business deserves windows that combine style, durability, and
            functionality. Whether you're upgrading your home with
            energy-efficient designs or enhancing your business with custom
            windows, my team and I are here to make the process seamless and
            worry-free.
          </p>
          <p>
            From the moment you reach out to us to the final installation, my
            goal is to ensure every detail is handled with care. We’re not just
            about installing windows; we’re about building trust and lasting
            relationships. I’m committed to craftsmanship, transparent
            communication, and delivering results that exceed expectations.
            When you choose Morgan Custom Windows, you’re choosing a team that
            cares about the comfort, efficiency, and beauty of your property.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeetCameron;
