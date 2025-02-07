import { Helmet } from "react-helmet-async";
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
      {/* SEO Metadata */}
      <Helmet>
        <title>About Morgan Custom Windows | Expert Window Installers in Tulsa</title>
        <meta name="description" content="Learn more about Morgan Custom Windows, a trusted window installation company in Tulsa, OK. Meet our team, discover our core values, and see why customers trust us for quality custom windows." />
        <meta name="keywords" content="about Morgan Custom Windows, window installers Tulsa, custom windows team, window installation experts, Tulsa window company, energy-efficient windows Tulsa" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook & LinkedIn) */}
        <meta property="og:title" content="About Morgan Custom Windows | Trusted Window Experts in Tulsa" />
        <meta property="og:description" content="Meet the team behind Morgan Custom Windows. Learn about our expertise, core values, and why we're Tulsa's top choice for window replacements." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.morgancustomwindows.com/about-us" />
        <meta property="og:image" content="https://www.morgancustomwindows.com/assets/images/about-us.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Morgan Custom Windows | Tulsa Window Installation Experts" />
        <meta name="twitter:description" content="Discover why Morgan Custom Windows is the preferred window installation company in Tulsa. Meet our team and explore our commitment to quality and efficiency." />
        <meta name="twitter:image" content="https://www.morgancustomwindows.com/assets/images/about-us.jpg" />
      </Helmet>

      {/* About Page Components */}
      <LandingAboutSection />
      <Scroller />
      <MeetCameron />
      <CoreValues />
      <ServiceAreas />
      <ThreeSteps />
      <ReviewsSection />
      <BookSection />
    </>
  )
}

export default About;
