import '../styles/WhatSetsUsApart.css';

const WhatSetsUsApart = () => {
  return (
    <section className="what-sets-us-apart">
      <header className="section-header">
        <h2>The Features That Set Our Tulsa Windows Apart</h2>
        <h3>What Makes Our Windows the Best Choice for Tulsa</h3>
        <p>
          At Morgan Custom Windows, we believe in delivering nothing less than the best. Our custom-made windows are
          designed with both quality and efficiency in mind, ensuring they not only elevate the look of your
          home but also provide exceptional performance. Here’s what makes our windows stand out:
        </p>
      </header>
      <div className="features-grid">
        <div className="feature-card">
          <h4>Low E Coating</h4>
          <p>Advanced technology to reflect heat, keeping your home comfortable and reducing energy costs.</p>
        </div>
        <div className="feature-card">
          <h4>Argon Gas Insulation</h4>
          <p>
            A layer of argon gas between the panes for superior thermal insulation and energy efficiency.
          </p>
        </div>
        <div className="feature-card">
          <h4>3.25-Inch Thickness</h4>
          <p>Robust and durable frames that offer long-lasting performance and enhanced security.</p>
        </div>
        <div className="feature-card">
          <h4>Super Spacer Technology</h4>
          <p>
            Reduces heat transfer and condensation, ensuring your windows remain efficient and clear.
          </p>
        </div>
        <div className="feature-card">
          <h4>Double-Hung Vinyl</h4>
          <p>
            Classic, versatile design for easy cleaning, durability, and timeless appeal.
          </p>
        </div>
        <div className="feature-card">
          <h4>Customizable Screens</h4>
          <p>
            Choose between full or half exterior screens to match your style and preferences.
          </p>
        </div>
      </div>
      <div className="cta-container">
        <button className="cta-button">BOOK YOUR ASSESSMENT</button>
      </div>
    </section>
  );
};

export default WhatSetsUsApart;
