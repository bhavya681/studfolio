import React from 'react';
import UnityHubLogo from '../../public/unityhub-high-resolution-logo-black-transparent.png'; // Import your logo image

const Footer = () => {
  return (
    <footer className="bg-gray-700 shadow-lg shadow-gray-200 text-white py-4 text-center rounded-tl-lg rounded-tr-lg">
      <div className="container mx-auto">
        <div className="flex justify-center items-center mb-4">
          <img
            src={UnityHubLogo} // Use your imported logo image
            alt="UnityHub"
            className="h-12 mr-2"
          />
         
        </div>
        <p className="mb-2">
          This application is free to use without any authentication, login, or subscription needed.
        </p>
        <p className="mb-4">
          Connect with me:
        </p>
        <ul className="flex justify-center space-x-4">
          <li><a href="https://www.instagram.com/bhavya_wade/" className="text-blue-400 hover:text-blue-300">Instagram</a></li>
          <li><a href="https://www.linkedin.com/in/bhavya-wade/" className="text-blue-400 hover:text-blue-300">LinkedIn</a></li>
          <li><a href="https://twitter.com/wade_bhavy55123" className="text-blue-400 hover:text-blue-300">Twitter</a></li>
        </ul>
        <p className="mt-4">
          Made With Love ❤️ From Bhavya Wade &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
