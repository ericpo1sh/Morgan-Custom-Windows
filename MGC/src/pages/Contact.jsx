import BookSection from "../components/BookSection";
import ContactLandingSection from "../components/ContactLandingSection";
import ContactQuickLinks from "../components/ContactQuickLinks";
import Scroller from "../components/Scroller";

function Contact() {
  return (
    <>
      <ContactLandingSection/>
      <Scroller/>
      <ContactQuickLinks/>
      <BookSection/>
    </>
  )
}

export default Contact;
