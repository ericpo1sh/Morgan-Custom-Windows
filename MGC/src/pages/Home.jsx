import HomeLandingSection from "../components/HomeLandingSection";
import LandingCompanyIntro from "../components/LandingCompanyIntro";
import Scroller from "../components/Scroller";
import ServicesSection from "../components/ServicesSection";
import WhatSetsUsApart from "../components/WhatSetsUsApart";

function Home() {
  return (
    <div>
      <HomeLandingSection/>
      <Scroller/>
      <LandingCompanyIntro/>
      <ServicesSection/>
      <WhatSetsUsApart/>
    </div>
  )
}
export default Home;
