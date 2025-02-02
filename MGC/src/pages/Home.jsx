import BookSection from "../components/BookSection";
import Footer from "../components/Footer";
import HomeLandingSection from "../components/HomeLandingSection";
import LandingCompanyIntro from "../components/LandingCompanyIntro";
import ReviewsSection from "../components/ReviewsSection";
import Scroller from "../components/Scroller";
import ServiceAreas from "../components/ServiceAreas";
import ServicesSection from "../components/ServicesSection";
import ThreeSteps from "../components/ThreeSteps";
import WhatSetsUsApart from "../components/WhatSetsUsApart";
import '../styles/Home.css'

function Home() {
  return (
    <div className="home">
      <HomeLandingSection/>
      <Scroller/>
      <LandingCompanyIntro/>
      <ServicesSection/>
      <WhatSetsUsApart/>
      <ServiceAreas/>
      <ThreeSteps/>
      <ReviewsSection/>
      <BookSection/>
    </div>
  )
}
export default Home;
