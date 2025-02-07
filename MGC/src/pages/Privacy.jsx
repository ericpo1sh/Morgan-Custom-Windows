import '../styles/Privacy.css';
import { Helmet } from "react-helmet-async";

const Privacy = () => {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Privacy Policy | Morgan Custom Windows</title>
        <meta name="description" content="Read Morgan Custom Windows' Privacy Policy to understand how we handle your personal data, cookies, and user privacy in compliance with legal standards." />
        <meta name="robots" content="index, follow" />

        {/* ✅ Open Graph (Facebook & LinkedIn) */}
        <meta property="og:title" content="Privacy Policy | Morgan Custom Windows" />
        <meta property="og:description" content="Learn how Morgan Custom Windows protects your privacy, handles cookies, and complies with data protection laws." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.morgancustomwindows.com/privacy" />
        <meta property="og:image" content="https://www.morgancustomwindows.com/assets/images/privacy-policy.jpg" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Privacy Policy | Morgan Custom Windows" />
        <meta name="twitter:description" content="Read our Privacy Policy to understand how we collect and use your data while ensuring legal compliance." />
        <meta name="twitter:image" content="https://www.morgancustomwindows.com/assets/images/privacy-policy.jpg" />
      </Helmet>

      <section className="privacy-section">
        <div className="privacy-container">
          <h1>Privacy Policy</h1>
          <p>Last Updated: 2/6/2025</p>

          <h2>1. Introduction</h2>
          <p>
            At Morgan Custom Windows, we value your privacy and are committed to protecting
            your personal information. This Privacy Policy outlines how we collect, use,
            and safeguard your data when you visit our website.
          </p>

          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li>Personal details (name, email, phone number, address) provided via contact forms.</li>
            <li>Technical data such as IP address, browser type, and pages visited.</li>
            <li>Cookies and tracking data to improve website performance.</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>Your information may be used for:</p>
          <ul>
            <li>Responding to inquiries and providing customer support.</li>
            <li>Improving website functionality and user experience.</li>
            <li>Marketing and promotional communications (only if you opt-in).</li>
          </ul>

          <h2>4. Data Protection & Security</h2>
          <p>
            We implement security measures to safeguard your information from unauthorized
            access, disclosure, or misuse.
          </p>

          <h2>5. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party sites. We are not responsible for
            the privacy policies or content of those websites.
          </p>

          <h2>6. Your Rights</h2>
          <p>
            You have the right to access, modify, or delete your personal data. Contact us
            at <a href="mailto:cam@morgancustomwindows.com">cam@morgancustomwindows.com</a> to make a request.
          </p>

          <h2>7. Updates to this Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted
            on this page.
          </p>

          <h2>8. Contact Us</h2>
          <p>
            If you have any questions about our Privacy Policy, please reach out to us at:
          </p>
          <p><strong>Email:</strong> <a href="mailto:cam@morgancustomwindows.com">cam@morgancustomwindows.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:0000000000">000-000-0000</a></p>
        </div>
      </section>
    </>
  );
};

export default Privacy;
