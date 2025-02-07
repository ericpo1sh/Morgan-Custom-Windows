import { Helmet } from "react-helmet-async";
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
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>Custom Window Installation | Morgan Custom Windows - Tulsa, OK</title>
        <meta name="description" content="Morgan Custom Windows offers high-quality custom window installations and replacements in Tulsa, OK. Enhance your home or business with energy-efficient, stylish windows. Get a free estimate today!" />
        <meta name="keywords" content="window installation Tulsa, custom windows Tulsa, replacement windows, energy-efficient windows, Morgan Custom Windows, Tulsa window company, commercial window installation, residential window installation, high quality windows, window installers" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook & LinkedIn) */}
        <meta property="og:title" content="Custom Window Installation | Morgan Custom Windows - Tulsa, OK" />
        <meta property="og:description" content="Upgrade your home with high-quality, energy-efficient custom windows. We provide expert installation and replacement services in Tulsa, OK." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.morgancustomwindows.com/" />
        <meta property="og:image" content="https://www.morgancustomwindows.com/assets/images/window-showcase.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Custom Window Installation | Morgan Custom Windows - Tulsa, OK" />
        <meta name="twitter:description" content="Expert custom window replacements and installations for homes and businesses in Tulsa. Get durable, energy-efficient solutions." />
        <meta name="twitter:image" content="https://www.morgancustomwindows.com/assets/images/window-showcase.jpg" />
      </Helmet>

      {/* Home Page Components */}
      <HomeLandingSection />
      <Scroller />
      <LandingCompanyIntro />
      <ServicesSection />
      <WhatSetsUsApart />
      <ServiceAreas />
      <ThreeSteps />
      <ReviewsSection />
      <BookSection />
    </>
  )
}

export default Home;
