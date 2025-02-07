import { Helmet } from "react-helmet-async";
import GalleryLandingSection from "../components/GalleryLandingSection";
import GallerySection from "../components/GallerySection";
import Scroller from "../components/Scroller";
import BookSection from '../components/BookSection';

function Gallery() {
  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>Gallery | Custom Window Installations in Tulsa | Morgan Custom Windows</title>
        <meta name="description" content="Browse our gallery of custom window installations in Tulsa, OK. See our high-quality replacement windows, energy-efficient designs, and expert craftsmanship." />
        <meta name="keywords" content="window installation gallery, custom windows Tulsa, window replacement images, before and after windows, energy-efficient windows, residential window installations, commercial window gallery" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph (Facebook & LinkedIn) */}
        <meta property="og:title" content="Gallery | Custom Window Installations in Tulsa | Morgan Custom Windows" />
        <meta property="og:description" content="See real examples of our expert custom window installations in Tulsa. High-quality, energy-efficient window solutions for homes and businesses." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.morgancustomwindows.com/gallery" />
        <meta property="og:image" content="https://www.morgancustomwindows.com/assets/images/gallery-showcase.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Gallery | Custom Window Installations in Tulsa | Morgan Custom Windows" />
        <meta name="twitter:description" content="Explore our custom window installation gallery. High-quality, energy-efficient windows for Tulsa homes and businesses." />
        <meta name="twitter:image" content="https://www.morgancustomwindows.com/assets/images/gallery-showcase.jpg" />
      </Helmet>

      {/* Gallery Page Components */}
      <GalleryLandingSection/>
      <GallerySection/>
      <BookSection/>
    </>
  )
}

export default Gallery;
