import React from "react";
import { createRoot } from "react-dom/client";
import "../src/styles/NotFound.css";

const NotFound = () => {
  return (
    <section className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Oops! The page you’re looking for doesn’t exist.</p>
      <a href="/" className="home-button">Go Back Home</a>
    </section>
  );
};

createRoot(document.getElementById("notfound")).render(<NotFound />);
