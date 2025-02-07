import { Helmet } from "react-helmet-async";
import BookSection from "../components/BookSection";
import ReviewsSection from "../components/ReviewsSection";
import Scroller from "../components/Scroller";
import ServiceAreas from "../components/ServiceAreas";
import ServiceLandingSection from "../components/ServiceLandingSection";
import ServicesIntroSection from "../components/ServicesIntroSection";
import ServicesSection from "../components/ServicesSection";
import ServicesWindowStyles from "../components/ServicesWindowStyles";
import ThreeSteps from "../components/ThreeSteps";
import WhatSetsUsApart from "../components/WhatSetsUsApart";

function Services() {
  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>Window Installation & Replacement Services | Morgan Custom Windows - Tulsa, OK</title>
        <meta name="description" content="Morgan Custom Windows offers expert window installation, replacement, and custom designs for homes and businesses in Tulsa, OK. Get a free estimate for high-quality, energy-efficient windows." />
        <meta name="keywords" content="window installation Tulsa, custom windows Tulsa, window replacement services, energy-efficient windows, commercial windows Tulsa, home window installation, vinyl windows, aluminum windows, residential windows Tulsa" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook & LinkedIn) */}
        <meta property="og:title" content="Window Installation & Replacement Services | Morgan Custom Windows - Tulsa, OK" />
        <meta property="og:description" content="Upgrade your home or business with expert window installation and custom designs in Tulsa, OK. Get a free estimate today!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.morgancustomwindows.com/services" />
        <meta property="og:image" content="https://www.morgancustomwindows.com/assets/images/services-showcase.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Window Installation & Replacement Services | Morgan Custom Windows - Tulsa, OK" />
        <meta name="twitter:description" content="Need window installation or replacement in Tulsa? Morgan Custom Windows offers high-quality, energy-efficient solutions for homes and businesses." />
        <meta name="twitter:image" content="https://www.morgancustomwindows.com/assets/images/services-showcase.jpg" />
      </Helmet>

      {/* Services Page Components */}
      <ServiceLandingSection/>
      <Scroller/>
      <ServicesIntroSection/>
      <ServicesWindowStyles/>
      <WhatSetsUsApart/>
      <ServicesSection/>
      <ServiceAreas/>
      <ThreeSteps/>
      <ReviewsSection/>
      <BookSection/>
    </>
  )
}

export default Services;
