import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { motion, AnimatePresence } from 'framer-motion';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="flex items-center justify-between p-4 mb-3 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
    >
      <label className="flex items-center cursor-pointer group">
        <motion.input
          whileTap={{ scale: 0.9 }}
          type="checkbox"
          className="mr-4 form-checkbox h-6 w-6 text-blue-600 rounded-md border-gray-300 focus:ring-blue-500 transition-colors duration-200"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <motion.span
          animate={{ color: task.completed ? '#9CA3AF' : '#1F2937' }}
          className={`text-lg font-medium ${task.completed ? 'line-through' : ''}`}
        >
          {task.text}
        </motion.span>
      </label>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onDelete(task.id)}
        className="p-2 rounded-full hover:bg-red-50 text-gray-400 hover:text-red-500"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </motion.button>
    </motion.div>
  );
};

const StudyPlanner = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleChange = (e) => {
    setNewItem(e.target.value);
  };

  const addItem = () => {
    if (newItem.trim() !== '') {
      const newItemObj = { id: uuidv4(), text: newItem, completed: false };
      setItems([...items, newItemObj]);
      setNewItem('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addItem();
    }
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter(item => item.id !== id);
    setItems(updatedItems);
  };

  const toggleCompletion = (id) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setItems(updatedItems);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4"
    >
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8 backdrop-blur-lg border border-gray-100"
          whileHover={{ boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
        >
          <motion.h1 
            className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
          >
            Study Planner
          </motion.h1>
          
          <div className="flex mb-6 gap-2">
            <motion.input 
              whileFocus={{ scale: 1.01 }}
              type="text" 
              value={newItem} 
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              className="flex-grow px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              placeholder="Add a new task..."
            />
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={addItem}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200"
            >
              Add Task
            </motion.button>
          </div>

          <AnimatePresence>
            {items.map(item => (
              <Task 
                key={item.id} 
                task={item} 
                onDelete={deleteItem} 
                onToggle={toggleCompletion} 
              />
            ))}
          </AnimatePresence>

          {items.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              className="text-center text-gray-500 mt-8"
            >
              No tasks yet. Add some to get started!
            </motion.p>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default StudyPlanner;
