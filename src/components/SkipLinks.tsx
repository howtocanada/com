
import React from 'react';

const SkipLinks = () => {
  return (
    <div className="sr-only focus-within:not-sr-only">
      <a href="#main-content" className="gc-skip-link">
        Skip to main content
      </a>
      <a href="#about-government" className="gc-skip-link">
        Skip to "About government"
      </a>
    </div>
  );
};

export default SkipLinks;
