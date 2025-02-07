import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/About";
import Contact from "./pages/Contact";
import TopDescription from "./components/TopDescription";
import Footer from "./components/Footer";
import NotFound from './pages/NotFound';
import Privacy from "./pages/Privacy";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <>
      <TopDescription/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
