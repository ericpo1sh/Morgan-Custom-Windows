import '../styles/GalleryLandingSection.css';
import GalleryBackground from '../assets/GalleryBackground.png'

const GalleryLandingSection = () => {
  return (
    <section
      className="landing-gallery-section"
      style={{ backgroundImage: `url(${GalleryBackground})` }}>
      <div className="gallery-intro-content-container">
        <h1>Premium Custom Window Installations and Replacements in Tulsa, OK</h1>
        <h2>Morgan Custom Windows Gallery</h2>
        <h3>Discover the Beauty of Our Tailored Window Solutions</h3>
        <button className="cta-button">BOOK YOUR ASSESSMENT</button>
      </div>
    </section>
  )
}

export default GalleryLandingSection
