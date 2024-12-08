import React from 'react';
import { motion } from 'framer-motion';

const Documentation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <motion.div
          className="bg-white rounded-2xl shadow-2xl p-12 backdrop-blur-lg border border-gray-100"
          whileHover={{ boxShadow: "0 25px 30px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
        >
          <h1 className="text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Application Documentation
          </h1>

          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Welcome to UnityHub's comprehensive documentation. Navigate through our powerful features and tools using the guide below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { route: '/e-sign', short: 'E-Sign', full: 'E-Signature' },
              { route: '/smart-board', short: 'SB', full: 'Smart Board' },
              { route: '/question-bank', short: 'QB', full: 'Question Bank' },
              { route: '/ai-summarizer', short: 'AI-S', full: 'AI Summarizer' },
              { route: '/expense-tracker', short: 'ET', full: 'Expense Tracker' },
              { route: '/project-tracker', short: 'PT', full: 'Project Tracker' },
              { route: '/invoice-generator', short: 'IG', full: 'Invoice Generator' },
              { route: '/study-plan', short: 'SP', full: 'Study Planner' },
              { route: '/grade-tracker', short: 'GT', full: 'Grade Tracker' },
              { route: '/passport-photo', short: 'PP', full: 'Passport Photo' },
              { route: '/dictionary', short: 'Dict', full: 'Dictionary' },
              { route: '/translate', short: 'Trans', full: 'Translate' }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300"
              >
                <code className="text-sm bg-white px-3 py-1 rounded-full border border-gray-200">{item.route}</code>
                <p className="mt-4 text-lg font-medium text-gray-900">{`${item.short} → ${item.full}`}</p>
              </motion.div>
            ))}
          </div>

          {/* Feature Documentation Sections */}
          <div className="space-y-16">
            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">E-Sign Component</h2>
              <p className="text-lg text-gray-600 mb-6">Securely sign and manage your documents electronically with our advanced E-Sign solution.</p>
              <div className="bg-white p-6 rounded-lg">
                <p className="font-medium mb-4">Quick Start Guide:</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Access the E-Sign interface at <code className="bg-gray-100 px-2 py-1 rounded">/e-sign</code></li>
                  <li>Upload your document (PDF, DOC, DOCX supported)</li>
                  <li>Choose your signature style or draw a new one</li>
                  <li>Place and adjust your signature</li>
                  <li>Download your signed document</li>
                </ol>
              </div>
            </motion.section>

            <motion.section 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-xl"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Smart Board</h2>
              <p className="text-lg text-gray-600 mb-6">Transform your ideas into visual masterpieces with our intuitive Smart Board tool.</p>
              <div className="bg-white p-6 rounded-lg">
                <p className="font-medium mb-4">Key Features:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Real-time collaboration</li>
                  <li>Multiple canvas styles</li>
                  <li>Rich drawing tools</li>
                  <li>Cloud storage integration</li>
                  <li>Export in multiple formats</li>
                </ul>
              </div>
            </motion.section>
          </div>

          <motion.footer 
            className="mt-20 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Connect With Us</h3>
            <div className="flex justify-center space-x-8">
              {[
                { name: 'LinkedIn', url: 'https://www.linkedin.com/in/bhavya-wade/', icon: '🔗' },
                { name: 'Twitter', url: 'https://twitter.com/wade_bhavy55123', icon: '🐦' },
                { name: 'Instagram', url: 'https://www.instagram.com/bhavya_wade/', icon: '📸' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
                >
                  <span>{social.icon}</span>
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.footer>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Documentation;
