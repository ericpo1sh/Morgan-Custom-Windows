import '../styles/BookSection.css';
import React, { useState } from 'react';

const BookSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        alert("Form Submitted Successfully!");
        event.target.reset();
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      alert("Something went wrong. Please try again later.");
    }

    setIsSubmitting(false);
  };

  return (
    <section className="book-section" id="Book">
      <h2>Book Your <span className="highlight">FREE</span> Assessment</h2>
      <form className="book-form" onSubmit={onSubmit}>
        <div className="form-container">
          <div className="left-form">
            <div className="form-group">
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="text" name="address" placeholder="Address" />
            </div>
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="I would like to work on..."
              rows="5"
              required
            ></textarea>
          </div>
        </div>
        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Submit"}
        </button>
      </form>
    </section>
  );
};

export default BookSection;
