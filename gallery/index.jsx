import GalleryLandingSection from "../src/components/GalleryLandingSection";
import GallerySection from "../src/components/GallerySection";
import BookSection from '../src/components/BookSection';
import ReactDOM from "react-dom/client";
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import TopDescription from '../src/components/TopDescription'


ReactDOM.createRoot(document.getElementById("gallery")).render(
  <>
    <TopDescription/>
    <Navbar/>
    <GalleryLandingSection/>
    <GallerySection/>
    <BookSection/>
    <Footer/>
  </>
)
