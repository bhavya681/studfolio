import React, { useState } from 'react';
import { motion } from 'framer-motion';

const UrlShortener = () => {
  const [longURL, setLongURL] = useState('');
  const [shortURL, setShortURL] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const generateShortURL = async () => {
    if (!longURL) {
      setError('Please enter a URL');
      return;
    }

    try {
      setIsLoading(true);
      setError('');
      
      // Using a real URL shortening API (TinyURL)
      const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(longURL)}`, {
        method: 'GET',
      });
      
      if (!response.ok) throw new Error('Failed to shorten URL');
      
      const shortUrl = await response.text();
      setShortURL(shortUrl);
    } catch (err) {
      setError('Failed to shorten URL. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 py-12 px-4"
    >
      <div className="max-w-xl mx-auto">
        <motion.div 
          className="bg-white/80 rounded-3xl shadow-2xl p-8 backdrop-blur-xl border border-gray-100"
          whileHover={{ boxShadow: "0 25px 30px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            URL Shortener Pro
          </h2>
          <div className="space-y-6">
            <div className="relative">
              <input
                type="url"
                value={longURL}
                onChange={(e) => setLongURL(e.target.value)}
                placeholder="Enter your URL (e.g., https://example.com)..."
                className="w-full px-6 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
              />
              {error && (
                <p className="text-red-500 text-sm mt-2">{error}</p>
              )}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={generateShortURL}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                  </svg>
                  Processing...
                </div>
              ) : 'Shorten URL'}
            </motion.button>

            {shortURL && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-6 bg-gray-50/50 rounded-xl border border-gray-100"
              >
                <p className="text-sm text-gray-600 mb-2">Your shortened URL:</p>
                <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-gray-200">
                  <a 
                    href={shortURL} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-indigo-600 hover:text-indigo-700 font-medium truncate"
                  >
                    {shortURL}
                  </a>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      navigator.clipboard.writeText(shortURL);
                      // Show a toast or notification here
                    }}
                    className="ml-4 p-2 text-gray-600 hover:text-indigo-600 transition-colors duration-200 rounded-lg hover:bg-indigo-50"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </motion.button>
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
