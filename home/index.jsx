import BookSection from "../src/components/BookSection";
import HomeLandingSection from "../src/components/HomeLandingSection";
import LandingCompanyIntro from "../src/components/LandingCompanyIntro";
import ReviewsSection from "../src/components/ReviewsSection";
import Scroller from "../src/components/Scroller";
import ServiceAreas from "../src/components/ServiceAreas";
import ServicesSection from "../src/components/ServicesSection";
import ThreeSteps from "../src/components/ThreeSteps";
import WhatSetsUsApart from "../src/components/WhatSetsUsApart";
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import TopDescription from '../src/components/TopDescription'
import '../src/styles/Home.css'
import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("home")).render(
    <>
      <TopDescription/>
      <Navbar/>
      <HomeLandingSection />
      <Scroller />
      <LandingCompanyIntro />
      <ServicesSection />
      <WhatSetsUsApart />
      <ServiceAreas />
      <ThreeSteps />
      <ReviewsSection />
      <BookSection />
      <Footer/>
    </>
  )


