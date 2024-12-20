import React from 'react';
import UnityHubLogo from '../../public/newLogo-removebg-preview.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <img
              src={UnityHubLogo}
              alt="LearnNova"
              className="h-10 w-auto animate-bounce"
            />
            <p className="text-sm">
              Empowering productivity and collaboration with innovative tools and solutions.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase">Resources</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <p className="text-sm">
                    Free to use - No authentication or subscription required
                  </p>
                </li>
                <li>
                  <a href="/documentation" className="text-sm hover:text-white">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase">Connect</h3>
              <ul className="mt-4 space-y-4">
                <li>
                  <a href="https://www.linkedin.com/in/bhavya-wade/" className="text-sm hover:text-white">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/wade_bhavy55123" className="text-sm hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/bhavya_wade/" className="text-sm hover:text-white">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-700 pt-8">
          <p className="text-sm text-gray-400 text-center">
            &copy; {new Date().getFullYear()} LearnNova. Developed by Bhavya Wade. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
