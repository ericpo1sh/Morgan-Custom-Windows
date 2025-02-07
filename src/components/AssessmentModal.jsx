import { useState } from "react";
import "../styles/AssessmentModal.css";

const AssessmentModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render modal if not open

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Book Your <span className="highlight">FREE</span> Assessment</h2>
        <form className="assessment-form">
          <div className="form-group">
            <input type="text" name="name" placeholder="Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <input type="text" name="address" placeholder="Address" required />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Tell us about your project..." rows="4" required></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AssessmentModal;
