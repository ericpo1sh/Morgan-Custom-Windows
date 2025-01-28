import '../styles/BookSection.css';

const BookSection = () => {
  return (
    <section className="book-section">
      <h2>Book Your <span className="highlight">FREE</span> Assessment</h2>
      <form className="book-form">
        <div className='form-container'>
          <div className='left-form'>
            <div className="form-group">
              <input type="text" name="name" placeholder="Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <input type="text" name="address" placeholder="Address" required />
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
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </section>
  );
};

export default BookSection;
