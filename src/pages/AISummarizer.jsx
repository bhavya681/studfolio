import { useState } from 'react';

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
    <div className="flex flex-col items-center justify-center min-h-screen  p-4 bg-gray-200">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">AI Summarizer</h2>
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
        <textarea
          className="w-full h-40 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="10"
          placeholder="Enter text to summarize"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-gray-600">{text.length} characters</span>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleSummarize}
          >
            Summarize
          </button>
        </div>
        {summary && (
          <div className="mt-6">
            <h3 className="text-2xl font-bold text-gray-800">Summary</h3>
            <p className="mt-2 p-2 bg-gray-100 border border-gray-300 rounded-md">{summary}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AISummarizer;
