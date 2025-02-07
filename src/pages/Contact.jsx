import { Helmet } from "react-helmet-async";
import BookSection from "../components/BookSection";
import ContactLandingSection from "../components/ContactLandingSection";
import ContactQuickLinks from "../components/ContactQuickLinks";
import Scroller from "../components/Scroller";

function Contact() {
  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>Contact Morgan Custom Windows | Get a Free Estimate in Tulsa</title>
        <meta name="description" content="Get in touch with Morgan Custom Windows for expert window installations and replacements in Tulsa, OK. Schedule your free consultation today!" />
        <meta name="keywords" content="contact Morgan Custom Windows, window installation Tulsa, custom windows contact, free window estimate Tulsa, window replacement Tulsa, window services near me" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook & LinkedIn) */}
        <meta property="og:title" content="Contact Morgan Custom Windows | Tulsa's Trusted Window Experts" />
        <meta property="og:description" content="Need window installation or replacement services in Tulsa? Contact Morgan Custom Windows today for a free estimate!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.morgancustomwindows.com/contact" />
        <meta property="og:image" content="https://www.morgancustomwindows.com/assets/images/contact-us.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Morgan Custom Windows | Free Window Estimate in Tulsa" />
        <meta name="twitter:description" content="Schedule a free consultation with Morgan Custom Windows for expert window installations and replacements in Tulsa, OK." />
        <meta name="twitter:image" content="https://www.morgancustomwindows.com/assets/images/contact-us.jpg" />
      </Helmet>

      {/* Contact Page Components */}
      <ContactLandingSection/>
      <Scroller/>
      <ContactQuickLinks/>
      <BookSection/>
    </>
  )
}

export default Contact;
