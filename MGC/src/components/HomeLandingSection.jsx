import HomeBackground from '../assets/HomeBackgroundPic.png'
import Logo from '../assets/MorganCustomWindows.png'
import '../styles/HomeLandingSection.css'

const HomeLandingSection = () => {
  return (

    <section className='HomePageLandingSection'>
      <div className='HomePageLandingInnerContainer'>
        <div className='HomePageLeftModule'>
          <h1>Custom Window Replacements for the Tulsa Metropolitan Area</h1>
          <h2>Elevate Your Tulsa Home with Custom Windows Built for Quality and Efficiency</h2>
          <h3>Proudly Serving Tulsa, Broken Arrow, Owasso, and the Surrounding Areas Across Northeastern Oklahoma</h3>
          <button aria-label="Book your assessment with Morgan Custom Windows" className="cta-button">BOOK YOUR ASSESSMENT</button>
        </div>
        <div className='HomePageRightModule'>
          <img src={Logo} alt='Morgan Custom Windows' title='Morgan Custom Windows'></img>
        </div>
      </div>
    </section>
  )
}

export default HomeLandingSection
