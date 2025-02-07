import '../styles/FAQLandingSection.css';
import FAQBackground from '../assets/FAQBackground.png'

const FAQLandingSection = () => {
  return (
    <section
      className="landing-faq-section"
      style={{ backgroundImage: `url(${FAQBackground})` }}>
      <div className="faq-intro-content-container">
        <h1>Custom Window Replacement in Tulsa – FAQs & Expert Answers</h1>
        <h2>Morgan Custom Windows FAQs</h2>
        <h3>Serving Tulsa & Northeastern Oklahoma with Quality Window Replacements</h3>
        <button className="cta-button">BOOK YOUR ASSESSMENT</button>
      </div>
    </section>
  )
}

export default FAQLandingSection
