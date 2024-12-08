import { useState } from 'react';

function ATSScore() {
  const [resumeText, setResumeText] = useState('');
  const [score, setScore] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const requiredKeywords = ['React', 'JavaScript', 'Node.js', 'API', 'Frontend', 'Backend'];

  const calculateATSScore = () => {
    if (!resumeText) {
      alert('Please enter your resume text.');
      return;
    }

    const resumeWords = resumeText.split(/\s+/);
    const matches = requiredKeywords.filter((word) => resumeWords.includes(word));
    const atsScore = (matches.length / requiredKeywords.length) * 100;

    // Suggest keywords that are missing
    const missingKeywords = requiredKeywords.filter((word) => !resumeWords.includes(word));
    const keywordSuggestions = missingKeywords.map((word) => `Consider adding "${word}" to improve your ATS score.`);

    setSuggestions(keywordSuggestions);
    setScore(atsScore);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="bg-white p-10 shadow-lg rounded-lg max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">ATS Score Checker</h1>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2" htmlFor="resume-text">Resume Text</label>
          <textarea
            id="resume-text"
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            rows="6"
            placeholder="Paste your resume text here..."
          ></textarea>
        </div>

        <button
          onClick={calculateATSScore}
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
        >
          Check ATS Score
        </button>

        {score !== null && (
          <div className="mt-6 text-lg font-semibold text-center text-gray-800">
            <p>Your ATS Score: {score.toFixed(2)}%</p>
            {suggestions.length > 0 && (
              <div className="mt-4 bg-red-100 p-4 rounded-md">
                <h2 className="text-lg font-bold mb-2 text-red-800">Suggestions to Improve Your ATS Score:</h2>
                <ul className="list-disc list-inside">
                  {suggestions.map((suggestion, index) => (
                    <li key={index} className="text-red-700">{suggestion}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ATSScore;
