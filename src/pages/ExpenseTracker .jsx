import React, { useState } from 'react';

const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState([
    { description: "Groceries", amount: 50, category: "Food", date: "2024-07-01" },
    { description: "Electricity Bill", amount: 75, category: "Utilities", date: "2024-07-03" },
    // Add more expenses here
  ]);

  const [newExpense, setNewExpense] = useState({ description: "", amount: "", category: "", date: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExpense({ ...newExpense, [name]: value });
  };

  const addExpense = () => {
    if (newExpense.description && newExpense.amount && newExpense.category && newExpense.date) {
      setExpenses([...expenses, newExpense]);
      setNewExpense({ description: "", amount: "", category: "", date: "" });
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-200 to-gray-400 min-h-screen py-10 px-4">
      <h1 className="text-3xl md:text-4xl text-center font-bold mb-8 text-gray-800">Expense Tracker</h1>
      <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 shadow-md rounded-md">
        <div className="mb-6">
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newExpense.description}
            onChange={handleInputChange}
            className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={newExpense.amount}
            onChange={handleInputChange}
            className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={newExpense.category}
            onChange={handleInputChange}
            className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="date"
            name="date"
            value={newExpense.date}
            onChange={handleInputChange}
            className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addExpense}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add Expense
          </button>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Expenses</h2>
          {expenses.map((expense, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-100 rounded-md shadow-md">
              <p className="text-lg font-semibold text-gray-700">{expense.description}</p>
              <p className="text-gray-600">Amount: ${expense.amount}</p>
              <p className="text-gray-600">Category: {expense.category}</p>
              <p className="text-gray-600">Date: {expense.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
