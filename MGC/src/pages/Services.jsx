import BookSection from "../components/BookSection";
import Scroller from "../components/Scroller";
import ServiceAreas from "../components/ServiceAreas";
import ServiceLandingSection from "../components/ServiceLandingSection";
import ServicesIntroSection from "../components/ServicesIntroSection";
import ServicesSection from "../components/ServicesSection";
import ThreeSteps from "../components/ThreeSteps";
import WhatSetsUsApart from "../components/WhatSetsUsApart";

function Services() {
  return (
    <div>
      <ServiceLandingSection/>
      <ServicesIntroSection/>
      <ServicesSection/>
      <WhatSetsUsApart/>

      <ServiceAreas/>
      <ThreeSteps/>

      <BookSection/>
    </div>
  )
}

export default Services;
