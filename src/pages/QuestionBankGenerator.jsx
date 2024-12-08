import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineLightBulb, HiOutlineFilter, HiOutlineDocumentText } from 'react-icons/hi';

const QuestionBankGenerator = () => {
  const [syllabus, setSyllabus] = useState('');
  const [questions, setQuestions] = useState([]);
  const [filterKeyword, setFilterKeyword] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [activeTab, setActiveTab] = useState('input');

  const generateQuestions = () => {
    setIsGenerating(true);
    setTimeout(() => {
      const generatedQuestions = syllabus
        .split('\n')
        .map((topic, index) => ({
          id: index + 1,
          question: `What is ${topic.trim()}?`,
        }))
        .filter((q) => !filterKeyword || q.question.toLowerCase().includes(filterKeyword.toLowerCase()));
      setQuestions(generatedQuestions);
      setIsGenerating(false);
      setActiveTab('questions');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Smart Question Generator
          </h1>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Transform your syllabus into intelligent question sets using our advanced generation system
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-lg bg-opacity-90 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineDocumentText className="w-6 h-6 text-indigo-600" />
                <h2 className="text-2xl font-semibold text-gray-800">Content Input</h2>
              </div>
              <textarea
                className="w-full p-6 border border-gray-200 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 text-gray-700 min-h-[300px]"
                placeholder="Enter your syllabus content (one topic per line)..."
                value={syllabus}
                onChange={(e) => setSyllabus(e.target.value)}
              />
              <button
                className={`mt-6 w-full py-4 rounded-2xl text-white font-semibold text-lg transition-all duration-300 
                  ${isGenerating 
                    ? 'bg-gray-400 cursor-wait' 
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:scale-[1.02]'
                  } shadow-lg hover:shadow-xl`}
                onClick={generateQuestions}
                disabled={isGenerating}
              >
                {isGenerating ? 'Generating Questions...' : 'Generate Smart Questions'}
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-lg bg-opacity-90 border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <HiOutlineFilter className="w-6 h-6 text-purple-600" />
                <h2 className="text-2xl font-semibold text-gray-800">Filters</h2>
              </div>
              <input
                type="text"
                className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                placeholder="Filter questions..."
                value={filterKeyword}
                onChange={(e) => setFilterKeyword(e.target.value)}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-white rounded-3xl shadow-2xl p-8 backdrop-blur-lg bg-opacity-90 border border-gray-100"
        >
          <div className="flex items-center gap-3 mb-8">
            <HiOutlineLightBulb className="w-6 h-6 text-yellow-500" />
            <h2 className="text-2xl font-semibold text-gray-800">Generated Questions</h2>
          </div>
          
          {questions.length > 0 ? (
            <div className="grid gap-4">
              {questions.map((q, index) => (
                <motion.div
                  key={q.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-gray-800 text-lg">{q.question}</span>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-xl">Start by entering your syllabus content above</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default QuestionBankGenerator;
