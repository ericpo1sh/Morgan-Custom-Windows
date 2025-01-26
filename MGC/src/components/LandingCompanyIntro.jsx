import WindowExamplePic from '../assets/WindowsExamples.png'
import GoldCheck from '../assets/GoldenCheckmark.png'
import '../styles/LandingCompanyIntro.css';

const LandingCompanyIntro = () => {
  return (
    <section className='IntroOuterContainer'>
      <div className='InnerIntroContainer'>
        <div className='IntroLeftModule'>
          <div className='IntroTextContainer'>
            <h2>SERVING THE GREATER SOUTHEASTERN OKLAHOMA AREA</h2>
            <h3>Our Commitment to Excellence</h3>
            <p>At Morgan Custom Windows, we take pride in delivering top-quality window  solutions for both residential and commercial properties. Whether you're upgrading your home with energy-efficient designs or enhancing your  business with custom windows, our team is here to make the process  seamless and worry-free. We’re committed to craftsmanship, transparency, and customer satisfaction, ensuring every project exceeds expectations from start to finish.</p>
          </div>
          <div className='FourChecksIntro'>
            <span><img src={GoldCheck} alt='' width={'50px'} height={'50px'}/><p>Free Estimates</p></span>
            <span><img src={GoldCheck} alt='' width={'50px'} height={'50px'}/><p>Always On Time</p></span>
            <span><img src={GoldCheck} alt='' width={'50px'} height={'50px'}/><p>Licensed & Insured</p></span>
            <span><img src={GoldCheck} alt='' width={'50px'} height={'50px'}/><p>Clear Communication</p></span>
          </div>
          <button aria-label="Book your assessment with Morgan Custom Windows" className="cta-button">BOOK YOUR ASSESSMENT</button>
        </div>
        <div className='ExamplePicFrame'>
          <img alt='Example Of Our Tulsa High Quality Windows' src={WindowExamplePic}/>
        </div>
      </div>
    </section>
  )
}

export default LandingCompanyIntro
