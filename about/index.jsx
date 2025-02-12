import BookSection from "../src/components/BookSection";
import CoreValues from "../src/components/CoreValues";
import LandingAboutSection from "../src/components/LandingAboutSection";
import MeetCameron from "../src/components/MeetCameron";
import ReviewsSection from "../src/components/ReviewsSection";
import Scroller from "../src/components/Scroller";
import ServiceAreas from "../src/components/ServiceAreas";
import ThreeSteps from "../src/components/ThreeSteps";
import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import TopDescription from '../src/components/TopDescription'

ReactDOM.createRoot(document.getElementById("about")).render(
  <>
    <TopDescription/>
    <Navbar/>
    <LandingAboutSection />
    <Scroller />
    <MeetCameron />
    <CoreValues />
    <ServiceAreas />
    <ThreeSteps />
    <ReviewsSection />
    <BookSection />
    <Footer/>
  </>
)
