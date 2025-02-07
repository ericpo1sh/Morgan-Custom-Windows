import { useState } from 'react';
import '../styles/FAQSection.css';

const faqData = [
  {
    question: "What types of windows do you install?",
    answer: "We specialize in custom window installations, including double-hung, casement, sliding, bay, bow, picture windows, and energy-efficient windows for both residential and commercial properties."
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
  },
  {
    question: "How do I maintain my new windows?",
    answer: "Regular cleaning with mild soap and water, inspecting seals, and lubricating moving parts will help extend the life of your windows."
  },
  {
    question: "Do you offer warranties on your windows?",
    answer: "Yes! Our windows come with manufacturer warranties, and we stand behind our workmanship with a satisfaction guarantee."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2>Frequently Asked Questions</h2>
        <p>Find answers to common questions about our custom window solutions.</p>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                {item.question}
                <span className={`faq-icon ${activeIndex === index ? 'open' : ''}`}>&#x25BC;</span>
              </button>
              <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
