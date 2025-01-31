import BookSection from "../components/BookSection";
import CoreValues from "../components/CoreValues";
import LandingAboutSection from "../components/LandingAboutSection";
import MeetCameron from "../components/MeetCameron";
import Scroller from "../components/Scroller";
import ServiceAreas from "../components/ServiceAreas";
import ThreeSteps from "../components/ThreeSteps";

function About() {
  return (
    <div>
      <LandingAboutSection/>
      <Scroller/>
      <MeetCameron/>
      <CoreValues/>
      <ServiceAreas/>
      <ThreeSteps/>
      <BookSection/>
    </div>
  )
}

export default About;
