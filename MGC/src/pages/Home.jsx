import HomeLandingSection from "../components/HomeLandingSection";
import LandingCompanyIntro from "../components/LandingCompanyIntro";
import Scroller from "../components/Scroller";
import ServiceAreas from "../components/ServiceAreas";
import ServicesSection from "../components/ServicesSection";
import ThreeSteps from "../components/ThreeSteps";
import WhatSetsUsApart from "../components/WhatSetsUsApart";

function Home() {
  return (
    <div>
      <HomeLandingSection/>
      <Scroller/>
      <LandingCompanyIntro/>
      <ServicesSection/>
      <WhatSetsUsApart/>
      <ServiceAreas/>
      <ThreeSteps/>
    </div>
  )
}
export default Home;
