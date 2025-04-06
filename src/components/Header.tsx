
import { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="bg-gc-red py-2">
        <div className="gc-container flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="https://wet-boew.github.io/themes-dist/GCWeb/assets/sig-blk-en.svg" 
              alt="Government of Canada" 
              className="h-6" 
            />
          </div>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <div className="relative hidden md:block">
              <input
                type="search"
                placeholder="Search Canada.ca"
                className="pl-10 pr-2 py-1 text-sm border border-gray-300 rounded w-48"
              />
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-b border-gray-200 bg-white">
        <div className="gc-container py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img 
                src="https://www.canada.ca/etc/designs/canada/wet-boew/assets/wmms-blk.svg" 
                alt="Symbol of the Government of Canada" 
                className="h-8 mr-4" 
              />
              <span className="text-xl font-bold">Canada.ca</span>
            </div>
            
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
            
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li><a href="#" className="gc-nav-link">Jobs</a></li>
                <li><a href="#" className="gc-nav-link">Immigration</a></li>
                <li><a href="#" className="gc-nav-link">Travel</a></li>
                <li><a href="#" className="gc-nav-link">Business</a></li>
                <li><a href="#" className="gc-nav-link">Benefits</a></li>
                <li><a href="#" className="gc-nav-link">Health</a></li>
                <li><a href="#" className="gc-nav-link">Taxes</a></li>
                <li><a href="#" className="gc-nav-link">More services</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <div className="gc-container py-2">
            <nav>
              <ul className="space-y-2">
                <li><a href="#" className="gc-nav-link block">Jobs</a></li>
                <li><a href="#" className="gc-nav-link block">Immigration</a></li>
                <li><a href="#" className="gc-nav-link block">Travel</a></li>
                <li><a href="#" className="gc-nav-link block">Business</a></li>
                <li><a href="#" className="gc-nav-link block">Benefits</a></li>
                <li><a href="#" className="gc-nav-link block">Health</a></li>
                <li><a href="#" className="gc-nav-link block">Taxes</a></li>
                <li><a href="#" className="gc-nav-link block">More services</a></li>
              </ul>
            </nav>
            
            <div className="mt-4">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search Canada.ca"
                  className="pl-10 pr-2 py-1 text-sm border border-gray-300 rounded w-full"
                />
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
