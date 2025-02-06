import BookSection from "../components/BookSection";
import CoreValues from "../components/CoreValues";
import LandingAboutSection from "../components/LandingAboutSection";
import MeetCameron from "../components/MeetCameron";
import ReviewsSection from "../components/ReviewsSection";
import Scroller from "../components/Scroller";
import ServiceAreas from "../components/ServiceAreas";
import ThreeSteps from "../components/ThreeSteps";

function About() {
  return (
    <>
      <LandingAboutSection/>
      <Scroller/>
      <MeetCameron/>
      <CoreValues/>
      <ServiceAreas/>
      <ThreeSteps/>
      <ReviewsSection/>
      <BookSection/>
    </>
  )
}

export default About;
