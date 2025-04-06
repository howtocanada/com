
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gc-footer border-t border-gray-300 mt-12">
      <div className="gc-container pt-8 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-gc-dark-gray text-lg font-bold mb-4">About government</h3>
            <ul className="space-y-2">
              <li><a className="gc-footer-link text-sm" href="#">Contact us</a></li>
              <li><a className="gc-footer-link text-sm" href="#">Departments and agencies</a></li>
              <li><a className="gc-footer-link text-sm" href="#">Public service and military</a></li>
              <li><a className="gc-footer-link text-sm" href="#">News</a></li>
              <li><a className="gc-footer-link text-sm" href="#">Treaties, laws and regulations</a></li>
              <li><a className="gc-footer-link text-sm" href="#">Government-wide reporting</a></li>
              <li><a className="gc-footer-link text-sm" href="#">Prime Minister</a></li>
              <li><a className="gc-footer-link text-sm" href="#">How government works</a></li>
              <li><a className="gc-footer-link text-sm" href="#">Open government</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-gc-dark-gray text-lg font-bold mb-4">About Canada.ca</h3>
            <ul className="space-y-2">
              <li><a className="gc-footer-link text-sm" href="#">Social media</a></li>
              <li><a className="gc-footer-link text-sm" href="#">Mobile applications</a></li>
              <li><a className="gc-footer-link text-sm" href="#">About Canada.ca</a></li>
              <li><a className="gc-footer-link text-sm" href="#">Terms and conditions</a></li>
              <li><a className="gc-footer-link text-sm" href="#">Privacy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gc-dark-gray text-lg font-bold mb-4">Government services</h3>
            <ul className="space-y-2">
              <li><Link to="/application-status" className="gc-footer-link text-sm">Check application status</Link></li>
              <li><a className="gc-footer-link text-sm" href="#">Find a job</a></li>
              <li><a className="gc-footer-link text-sm" href="#">Get a passport</a></li>
              <li><a className="gc-footer-link text-sm" href="#">Income taxes</a></li>
              <li><a className="gc-footer-link text-sm" href="#">Immigration and citizenship</a></li>
              <li><a className="gc-footer-link text-sm" href="#">Business and industry</a></li>
              <li><a className="gc-footer-link text-sm" href="#">Benefits</a></li>
              <li><a className="gc-footer-link text-sm" href="#">Health</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-gc-dark-gray text-lg font-bold mb-4">Government of Canada</h3>
            <div className="flex items-center justify-center md:justify-start">
              <img 
                src="https://www.canada.ca/etc/designs/canada/wet-boew/assets/wmms-blk.svg" 
                alt="Symbol of the Government of Canada" 
                className="h-12" 
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gc-blue py-4">
        <div className="gc-container text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              <li><a href="#" className="text-white hover:underline text-sm">Social media</a></li>
              <li><a href="#" className="text-white hover:underline text-sm">Mobile applications</a></li>
              <li><a href="#" className="text-white hover:underline text-sm">About Canada.ca</a></li>
              <li><a href="#" className="text-white hover:underline text-sm">Terms and conditions</a></li>
              <li><a href="#" className="text-white hover:underline text-sm">Privacy</a></li>
            </ul>
            <div className="text-sm mt-2 md:mt-0 md:text-right">
              © His Majesty the King in Right of Canada, {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
