import React, { useState } from 'react';

const QuestionBankGenerator = () => {
  const [syllabus, setSyllabus] = useState('');
  const [questions, setQuestions] = useState([]);
  const [filterKeyword, setFilterKeyword] = useState('');

  const generateQuestions = () => {
    const generatedQuestions = syllabus
      .split('\n')
      .map((topic, index) => ({
        id: index + 1,
        question: `What is ${topic.trim()}?`,
      }))
      .filter((q) => !filterKeyword || q.question.toLowerCase().includes(filterKeyword.toLowerCase()));
    setQuestions(generatedQuestions);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-4">
      <h2 className="text-4xl font-bold text-gray-800 mb-8">Question Bank Generator</h2>
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6 mb-6">
        <textarea
          className="w-full p-2 mb-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring focus:border-blue-300"
          rows="6"
          placeholder="Enter syllabus (one topic per line)"
          value={syllabus}
          onChange={(e) => setSyllabus(e.target.value)}
        />
        <input
          type="text"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          placeholder="Filter by keyword"
          value={filterKeyword}
          onChange={(e) => setFilterKeyword(e.target.value)}
        />
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          onClick={generateQuestions}
        >
          Generate Questions
        </button>
      </div>
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-6">
        {questions.length > 0 ? (
          <ul className="list-disc list-inside">
            {questions.map((q) => (
              <li key={q.id} className="mb-2">{q.question}</li>
            ))}
          </ul>
        ) : (
          <p>No questions generated yet.</p>
        )}
      </div>
    </div>
  );
};

export default QuestionBankGenerator;
