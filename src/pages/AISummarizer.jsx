import { useState } from 'react';
import { motion } from 'framer-motion';

// Mock summarization function (replace this with an API call in a real implementation)
const summarizeText = (text) => {
  return text.split(' ').slice(0, Math.min(text.split(' ').length, 30)).join(' ') + '...';
};

const AISummarizer = () => {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');

  const handleSummarize = () => {
    const summarizedText = summarizeText(text);
    setSummary(summarizedText);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          className="bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-lg border border-gray-100"
          whileHover={{ boxShadow: "0 25px 30px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
        >
          <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            AI Text Summarizer
          </h1>

          <motion.textarea
            whileFocus={{ scale: 1.01 }}
            className="w-full h-48 p-6 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none text-gray-700"
            placeholder="Enter your text here to generate a concise summary..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div className="flex justify-between items-center mt-6 mb-8">
            <span className="text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
              {text.length} characters
            </span>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={handleSummarize}
            >
              Generate Summary
            </motion.button>
          </div>

          {summary && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-8 space-y-4"
            >
              <h3 className="text-2xl font-semibold text-gray-800">Summary</h3>
              <motion.div
                className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-gray-200"
                whileHover={{ scale: 1.01 }}
              >
                <p className="text-gray-700 leading-relaxed">{summary}</p>
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AISummarizer;
