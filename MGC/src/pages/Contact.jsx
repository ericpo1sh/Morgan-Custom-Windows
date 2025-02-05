import BookSection from "../components/BookSection";
import ContactLandingSection from "../components/ContactLandingSection";
import ContactQuickLinks from "../components/ContactQuickLinks";
import Scroller from "../components/Scroller";

function Contact() {
  return (
    <div>
      <ContactLandingSection/>
      <Scroller/>
      <ContactQuickLinks/>
      <BookSection/>
    </div>
  )
}

export default Contact;
