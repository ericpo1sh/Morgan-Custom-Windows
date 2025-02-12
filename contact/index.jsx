import BookSection from "../src/components/BookSection";
import ContactLandingSection from "../src/components/ContactLandingSection";
import ContactQuickLinks from "../src/components/ContactQuickLinks";
import Scroller from "../src/components/Scroller";
import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import TopDescription from '../src/components/TopDescription'


ReactDOM.createRoot(document.getElementById("contact")).render(
  <>
    <TopDescription/>
    <Navbar/>
    <ContactLandingSection/>
    <Scroller/>
    <ContactQuickLinks/>
    <BookSection/>
    <Footer/>
  </>
)
