import { useState } from 'react';
import axios from 'axios';

const Dictionary = () => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchDefinition = async () => {
    if (!word) return;
    setLoading(true);
    setError('');
    try {
      // Replace with your dictionary API endpoint and key
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      setDefinition(response.data[0].meanings[0].definitions[0].definition);
    } catch (err) {
      setError('Word not found. Please try another.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchDefinition();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-6">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Professional Dictionary</h1>
        <form onSubmit={handleSearch} className="flex flex-col items-center">
          <input
            type="text"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            placeholder="Enter a word"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm mb-4 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
          >
            Search
          </button>
        </form>
        {loading && <p className="mt-4 text-blue-600">Loading...</p>}
        {error && <p className="mt-4 text-red-600">{error}</p>}
        {definition && !loading && !error && (
          <div className="mt-6 p-4 border border-gray-300 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Definition:</h2>
            <p className="text-gray-700">{definition}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dictionary;
