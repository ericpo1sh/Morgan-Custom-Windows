import BookSection from "../src/components/BookSection";
import ReviewsSection from "../src/components/ReviewsSection";
import Scroller from "../src/components/Scroller";
import ServiceAreas from "../src/components/ServiceAreas";
import ServiceLandingSection from "../src/components/ServiceLandingSection";
import ServicesIntroSection from "../src/components/ServicesIntroSection";
import ServicesSection from "../src/components/ServicesSection";
import ServicesWindowStyles from "../src/components/ServicesWindowStyles";
import ThreeSteps from "../src/components/ThreeSteps";
import WhatSetsUsApart from "../src/components/WhatSetsUsApart";
import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import TopDescription from '../src/components/TopDescription';


ReactDOM.createRoot(document.getElementById("services")).render(
  <>
      <TopDescription/>
      <Navbar/>
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
      <Footer/>
  </>
)
