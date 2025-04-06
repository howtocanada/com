
import { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';
import SkipLinks from './SkipLinks';
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  // Close mobile menu when switching to desktop view
  useEffect(() => {
    if (!isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMobile]);

  return (
    <header>
      <SkipLinks />
      <div className="bg-gc-red py-2">
        <div className="gc-container flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/">
              <img 
                src="https://wet-boew.github.io/themes-dist/GCWeb/assets/sig-blk-en.svg" 
                alt="Government of Canada" 
                className="h-5 sm:h-6" 
              />
            </Link>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <LanguageToggle />
            <div className="hidden md:block">
              <SearchBox className="w-48" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-b border-gray-200 bg-white">
        <div className="gc-container py-3 md:py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link to="/" className="flex items-center">
                <img 
                  src="https://www.canada.ca/etc/designs/canada/wet-boew/assets/wmms-blk.svg" 
                  alt="Symbol of the Government of Canada" 
                  className="h-6 sm:h-8 mr-2 sm:mr-4" 
                />
                <span className="text-lg sm:text-xl font-bold">Canada.ca</span>
              </Link>
            </div>
            
            <button 
              className="md:hidden flex items-center gap-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="main-menu"
              aria-label="Main menu"
            >
              {isMenuOpen ? (
                <>
                  <X size={20} />
                  <span className="text-sm">Close</span>
                </>
              ) : (
                <>
                  <Menu size={20} />
                  <span className="text-sm">Menu</span>
                </>
              )}
            </button>
            
            <nav className="hidden md:block">
              <ul className="flex space-x-6" id="main-menu">
                <li><Link to="/" className="gc-nav-link">Jobs</Link></li>
                <li><Link to="/" className="gc-nav-link">Immigration</Link></li>
                <li><Link to="/" className="gc-nav-link">Travel</Link></li>
                <li><Link to="/" className="gc-nav-link">Business</Link></li>
                <li><Link to="/" className="gc-nav-link">Benefits</Link></li>
                <li><Link to="/" className="gc-nav-link">Health</Link></li>
                <li><Link to="/" className="gc-nav-link">Taxes</Link></li>
                <li><Link to="/" className="gc-nav-link">More services</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      
      {/* Mobile menu with improved styling */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b shadow-sm">
          <div className="gc-container py-2">
            <nav>
              <ul className="space-y-0" id="mobile-menu">
                <li><Link to="/" className="gc-nav-link block py-3 border-b border-gray-200">Jobs</Link></li>
                <li><Link to="/" className="gc-nav-link block py-3 border-b border-gray-200">Immigration</Link></li>
                <li><Link to="/" className="gc-nav-link block py-3 border-b border-gray-200">Travel</Link></li>
                <li><Link to="/" className="gc-nav-link block py-3 border-b border-gray-200">Business</Link></li>
                <li><Link to="/" className="gc-nav-link block py-3 border-b border-gray-200">Benefits</Link></li>
                <li><Link to="/" className="gc-nav-link block py-3 border-b border-gray-200">Health</Link></li>
                <li><Link to="/" className="gc-nav-link block py-3 border-b border-gray-200">Taxes</Link></li>
                <li><Link to="/" className="gc-nav-link block py-3 border-b border-gray-200">More services</Link></li>
                <li><Link to="/application-status" className="gc-nav-link block py-3">Check Application Status</Link></li>
              </ul>
            </nav>
            
            <div className="mt-4">
              <SearchBox />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
