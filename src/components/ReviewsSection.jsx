import '../styles/ReviewsSection.css';
import ReviewsBackground from '../assets/ReviewsBackground.png';
import Reviewer from '../assets/TemporaryReviewer.png';
import FiveStars from '../assets/5Stars.png';

const ReviewsSection = () => {
  return (
    <section className="reviews-section" style={{ backgroundImage: `url(${ReviewsBackground})` }}>
      <div className="reviews-header">
        <h2>MORGAN CUSTOM WINDOWS REVIEWS</h2>
        <h3>Hear What Tulsa Customers Are Saying About Us</h3>
      </div>
      <div className="reviews-cards">
        {[1, 2, 3].map((_, index) => (
          <div className="review-card" key={index}>
            <img className="reviewer-image" src={Reviewer} alt="Reviewer" />
            <img className="stars" src={FiveStars} alt="5 Stars" />
            <h4>Highly Satisfied!</h4>
            <p>
              “Morgan Windows has provided the best work when it comes to new windows. They are such high quality!”
            </p>
            <a href="#" className="read-more">
              Read The Full Review
            </a>
            <p className="reviewer-info">Eric Dzyk - 1/16/2025</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
