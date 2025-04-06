
import React from 'react';

const SkipLinks = () => {
  return (
    <div className="sr-only focus-within:not-sr-only focus-within:fixed focus-within:z-50 focus-within:top-0 focus-within:left-0 focus-within:w-full">
      <a href="#main-content" className="gc-skip-link block w-full text-center py-2 px-4">
        Skip to main content
      </a>
      <a href="#about-government" className="gc-skip-link block w-full text-center py-2 px-4">
        Skip to "About government"
      </a>
    </div>
  );
};

export default SkipLinks;
