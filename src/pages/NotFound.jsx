import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <>
      {/* SEO Metadata */}
      <Helmet>
        <title>404 Page Not Found | Morgan Custom Windows</title>
        <meta name="description" content="Oops! The page you’re looking for doesn’t exist. Return to the home page or explore our custom window services in Tulsa." />
        <meta name="robots" content="noindex, follow" />

        {/* Open Graph (Facebook & LinkedIn) */}
        <meta property="og:title" content="404 Page Not Found | Morgan Custom Windows" />
        <meta property="og:description" content="Oops! The page you’re looking for doesn’t exist. Return to the home page or explore our window installation services in Tulsa." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.morgancustomwindows.com/404" />
        <meta property="og:image" content="https://www.morgancustomwindows.com/assets/images/404-error.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="404 Page Not Found | Morgan Custom Windows" />
        <meta name="twitter:description" content="Oops! The page you’re looking for doesn’t exist. Return to the home page or explore our custom window solutions." />
        <meta name="twitter:image" content="https://www.morgancustomwindows.com/assets/images/404-error.jpg" />
      </Helmet>

      {/* 404 Page Content */}
      <section className="not-found">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Oops! The page you’re looking for doesn’t exist.</p>
        <Link to="/" className="home-button">Go Back Home</Link>
      </section>
    </>
  );
};

export default NotFound;
