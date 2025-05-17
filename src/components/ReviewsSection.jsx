import { useEffect } from 'react';
import '../styles/ReviewsSection.css';
import ReviewsBackground from '../assets/ReviewsBackground.png';

const ReviewsSection = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section
      className="reviews-section"
      style={{ backgroundImage: `url(${ReviewsBackground})` }}
    >
      <div className="reviews-header">
        <h2>MORGAN CUSTOM WINDOWS REVIEWS</h2>
        <h3>Hear What Tulsa Customers Are Saying About Us</h3>
      </div>
      <div className="reviews-cards">
        <div
          className="elfsight-app-0f1e1dbc-3e0f-4de5-bfd6-a9da36e3c73e"
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
};

export default ReviewsSection;
