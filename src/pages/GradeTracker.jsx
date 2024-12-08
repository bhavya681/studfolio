import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { motion, AnimatePresence } from 'framer-motion';

const GradeTracker = () => {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState('');
  const [grade, setGrade] = useState('');

  const addCourse = () => {
    if (courseName.trim() !== '' && grade.trim() !== '' && !isNaN(grade)) {
      const newCourse = { id: uuidv4(), name: courseName, grade: parseFloat(grade) };
      setCourses([...courses, newCourse]);
      setCourseName('');
      setGrade('');
    }
  };

  const deleteCourse = (id) => {
    const updatedCourses = courses.filter(course => course.id !== id);
    setCourses(updatedCourses);
  };

  const calculateGPA = () => {
    if (courses.length === 0) return 0;
    const totalGrades = courses.reduce((acc, course) => acc + course.grade, 0);
    return (totalGrades / courses.length).toFixed(2);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-purple-50 to-rose-100 py-12 px-4"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-white/20"
          whileHover={{ boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.25)" }}
        >
          <motion.h1 
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="text-5xl font-extrabold mb-12 text-center bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Grade Tracker
          </motion.h1>

          <div className="mb-10">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              <motion.input
                whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)" }}
                type="text"
                value={courseName}
                onChange={(e) => setCourseName(e.target.value)}
                className="w-full px-6 py-4 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-lg"
                placeholder="Course Name"
              />
              <motion.input
                whileFocus={{ scale: 1.02, boxShadow: "0 0 0 2px rgba(59, 130, 246, 0.5)" }}
                type="text"
                value={grade}
                onChange={(e) => setGrade(e.target.value)}
                className="w-full px-6 py-4 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 text-lg"
                placeholder="Grade"
              />
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={addCourse}
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 px-8 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Add Course
              </motion.button>
            </motion.div>
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div layout className="space-y-4">
              {courses.map(course => (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex justify-between items-center bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/40 hover:border-blue-300 hover:bg-white/60 transition-all duration-300 group"
                >
                  <motion.span 
                    className="text-xl text-gray-800 font-semibold"
                    whileHover={{ scale: 1.02 }}
                  >
                    {course.name}
                  </motion.span>
                  <div className="flex items-center space-x-8">
                    <motion.span 
                      className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent"
                      whileHover={{ scale: 1.1 }}
                    >
                      {course.grade}
                    </motion.span>
                    <motion.button
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      whileTap={{ scale: 0.8 }}
                      onClick={() => deleteCourse(course.id)}
                      className="text-red-400 hover:text-red-600 focus:outline-none transition-colors duration-300"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <motion.div 
            layout
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 p-8 bg-gradient-to-r from-blue-100/50 via-purple-100/50 to-pink-100/50 rounded-2xl border border-white/40 backdrop-blur-sm"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.15)"
            }}
          >
            <motion.h3 
              className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-700 via-purple-600 to-pink-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Current GPA: {calculateGPA()}
            </motion.h3>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default GradeTracker;
