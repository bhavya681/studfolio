import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([
    { id: uuidv4(), description: "Groceries", amount: 50, category: "Food", date: "2024-07-01" },
    { id: uuidv4(), description: "Electricity Bill", amount: 75, category: "Utilities", date: "2024-07-03" },
  ]);

  const [newExpense, setNewExpense] = useState({ description: "", amount: "", category: "", date: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({ ...newExpense, [name]: value });
  };

  const addExpense = () => {
    if (newExpense.description && newExpense.amount && newExpense.category && newExpense.date) {
      setExpenses([...expenses, { ...newExpense, id: uuidv4() }]);
      setNewExpense({ description: "", amount: "", category: "", date: "" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-blue-100 via-purple-50 to-rose-100 py-12 px-4"
    >
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <motion.h1 
          className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Expense Tracker
        </motion.h1>

        <motion.div
          className="bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-lg border border-gray-100"
          whileHover={{ boxShadow: "0 25px 30px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              name="description"
              placeholder="Description"
              value={newExpense.description}
              onChange={handleInputChange}
              className="p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="number"
              name="amount"
              placeholder="Amount"
              value={newExpense.amount}
              onChange={handleInputChange}
              className="p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="text"
              name="category"
              placeholder="Category"
              value={newExpense.category}
              onChange={handleInputChange}
              className="p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="date"
              name="date"
              value={newExpense.date}
              onChange={handleInputChange}
              className="p-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={addExpense}
            className="w-full p-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Add Expense
          </motion.button>

          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Expenses</h2>
            <AnimatePresence>
              {expenses.map((expense) => (
                <motion.div
                  key={expense.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="mb-4 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                >
                  <p className="text-xl font-semibold text-gray-800 mb-2">{expense.description}</p>
                  <div className="grid grid-cols-3 gap-4 text-gray-600">
                    <p className="flex items-center gap-2">
                      <span className="text-blue-500">$</span>
                      {expense.amount}
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-purple-500">📁</span>
                      {expense.category}
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-rose-500">📅</span>
                      {expense.date}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ExpenseTracker;
