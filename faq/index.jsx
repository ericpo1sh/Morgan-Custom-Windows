import BookSection from '../src/components/BookSection';
import FAQLandingSection from '../src/components/FAQLandingSection';
import FAQSection from '../src/components/FAQSection';
import ReviewsSection from '../src/components/ReviewsSection';
import ServiceAreas from '../src/components/ServiceAreas';
import ThreeSteps from '../src/components/ThreeSteps';
import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import TopDescription from '../src/components/TopDescription'

ReactDOM.createRoot(document.getElementById("faq")).render(
  <>
    <TopDescription/>
    <Navbar/>
    <FAQLandingSection/>
    <FAQSection/>
    <ServiceAreas/>
    <ThreeSteps/>
    <ReviewsSection/>
    <BookSection/>
    <Footer/>
  </>
);
