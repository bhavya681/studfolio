import { useState } from 'react';

function JobDescriptionAnalyzer() {
  const [jobDescription, setJobDescription] = useState('');
  const [resumeText, setResumeText] = useState('');
  const [feedback, setFeedback] = useState('');
  const [improvementTips, setImprovementTips] = useState([]);

  const analyzeResume = () => {
    if (!jobDescription || !resumeText) {
      setFeedback('Please enter both job description and resume text.');
      return;
    }

    const jobWords = jobDescription.toLowerCase().split(/\s+/);
    const resumeWords = resumeText.toLowerCase().split(/\s+/);
    const matchingWords = jobWords.filter((word) => resumeWords.includes(word));

    const matchPercentage = (matchingWords.length / jobWords.length) * 100;

    const missingWords = jobWords.filter((word) => !resumeWords.includes(word));
    const tips = missingWords.map((word) => `Consider adding the word "${word}" to improve your match.`);

    setImprovementTips(tips);

    if (matchPercentage >= 60) {
      setFeedback(`Your resume matches ${matchPercentage.toFixed(2)}% of the job description. It is a good match!`);
    } else {
      setFeedback(`Your resume matches ${matchPercentage.toFixed(2)}% of the job description. Consider improving it.`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <div className="bg-white p-10 shadow-lg rounded-lg max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Job Description Analyzer</h1>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2" htmlFor="job-description">Job Description</label>
          <textarea
            id="job-description"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            rows="6"
            placeholder="Paste the job description here..."
          ></textarea>
        </div>

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
          onClick={analyzeResume}
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
        >
          Analyze Resume
        </button>

        {feedback && <p className="mt-6 text-lg font-semibold text-center text-gray-800">{feedback}</p>}

        {improvementTips.length > 0 && (
          <div className="mt-4 bg-yellow-100 p-4 rounded-md">
            <h2 className="text-lg font-bold mb-2 text-yellow-800">Improvement Tips:</h2>
            <ul className="list-disc list-inside">
              {improvementTips.map((tip, index) => (
                <li key={index} className="text-yellow-700">{tip}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default JobDescriptionAnalyzer;
