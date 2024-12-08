import React, { useState } from 'react';
import { motion } from 'framer-motion';

const UrlShortener = () => {
  const [longURL, setLongURL] = useState('');
  const [shortURL, setShortURL] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const generateShortURL = () => {
    setIsLoading(true);
    // Simulate URL shortening with delay for effect
    setTimeout(() => {
      const url = longURL.split('/').slice(0, 3).join('/') + '/short/' + Math.random().toString(36).substr(2, 5);
      setShortURL(url);
      setIsLoading(false);
    }, 800);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4"
    >
      <div className="max-w-xl mx-auto">
        <motion.div 
          className="bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-lg border border-gray-100"
          whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            URL Shortener
          </h2>
          <div className="space-y-6">
            <div className="relative">
              <input
                type="text"
                value={longURL}
                onChange={(e) => setLongURL(e.target.value)}
                placeholder="Enter your long URL here..."
                className="w-full px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={generateShortURL}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
            >
              {isLoading ? 'Generating...' : 'Shorten URL'}
            </motion.button>

            {shortURL && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-6 bg-gray-50 rounded-xl border border-gray-100"
              >
                <p className="text-sm text-gray-600 mb-2">Your shortened URL:</p>
                <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-200">
                  <a 
                    href={shortURL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:text-blue-700 font-medium truncate"
                  >
                    {shortURL}
                  </a>
                  <button
                    onClick={() => navigator.clipboard.writeText(shortURL)}
                    className="ml-4 p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default UrlShortener;
