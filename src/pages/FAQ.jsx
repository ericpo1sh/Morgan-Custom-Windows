import { Helmet } from 'react-helmet-async';
import BookSection from '../components/BookSection';
import FAQLandingSection from '../components/FAQLandingSection';
import FAQSection from '../components/FAQSection';
import ReviewsSection from '../components/ReviewsSection';
import ServiceAreas from '../components/ServiceAreas';
import ServicesSection from '../components/ServicesSection';
import ThreeSteps from '../components/ThreeSteps';
import WhatSetsUsApart from '../components/WhatSetsUsApart';
import { useEffect } from 'react';

const FAQ = () => {
  
  // Generate FAQ Schema JSON
  useEffect(() => {
    const faqData = [
      {
        question: "What types of windows do you install?",
        answer: "We specialize in custom window installations, including double-hung, casement, sliding, bay, bow, and energy-efficient windows for both residential and commercial properties."
      },
      {
        question: "How long does window installation take?",
        answer: "Installation time varies depending on the number of windows and complexity, but most projects are completed within one to two days."
      },
      {
        question: "Do you offer free estimates?",
        answer: "Yes! We provide free assessments to help you determine the best window solutions for your property."
      },
      {
        question: "What are the benefits of energy-efficient windows?",
        answer: "Energy-efficient windows help reduce energy costs, improve insulation, and increase comfort by maintaining indoor temperatures more effectively."
      }
    ];

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>Frequently Asked Questions | Morgan Custom Windows</title>
        <meta name="description" content="Find answers to the most common questions about our custom window installations, replacements, and services. Learn about energy-efficient windows, warranties, and maintenance." />
        <meta name="keywords" content="window installation FAQ, custom windows questions, energy-efficient windows, window maintenance, window warranty, Morgan Custom Windows FAQ" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph (Facebook & LinkedIn) */}
        <meta property="og:title" content="Frequently Asked Questions | Morgan Custom Windows" />
        <meta property="og:description" content="Have questions about custom window installations? Read our FAQ section to learn about energy-efficient windows, warranties, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.morgancustomwindows.com/faq" />
        <meta property="og:image" content="https://www.morgancustomwindows.com/assets/images/window-faq.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Frequently Asked Questions | Morgan Custom Windows" />
        <meta name="twitter:description" content="Learn more about our custom window installation process, warranties, and energy-efficient options." />
        <meta name="twitter:image" content="https://www.morgancustomwindows.com/assets/images/window-faq.jpg" />
      </Helmet>

      {/* Page Sections */}
      <FAQLandingSection/>
      <FAQSection/>
      <ServiceAreas/>
      <ThreeSteps/>
      <ReviewsSection/>
      <BookSection/>
    </>
  );
};

export default FAQ;
