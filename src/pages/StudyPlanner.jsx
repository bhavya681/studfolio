import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className="flex  items-center justify-between px-4 pt-13  border-b border-gray-200 transition duration-500 ease-in-out transform hover:translate-x-2">
      <label className="flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="mr-4 form-checkbox h-6 w-6 bg-green-400 text-green-500 focus:ring-green-400  checked:bg-green-500 checked:border-transparent"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span
          className={`text-lg font-medium ${task.completed ? 'line-through text-gray-500' : ''}`}
        >
          {task.text}
        </span>
      </label>
      <button
        onClick={() => onDelete(task.id)}
        className="text-gray-500 hover:text-red-500 transition duration-300 ease-in-out transform hover:scale-125"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
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
    <div className="flex items-center justify-center  bg-gray-200 h-screen">
      <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Study Planner</h2>
        <div className="flex mb-4">
          <input 
            type="text" 
            value={newItem} 
            onChange={handleChange} 
            className="flex-grow border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:border-blue-500"
            placeholder="Add new item..."
          />
          <button 
            onClick={addItem} 
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-r-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Add
          </button>
        </div>
        <ul>
          {items.map(item => (
            <Task 
              key={item.id} 
              task={item} 
              onDelete={deleteItem} 
              onToggle={toggleCompletion} 
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StudyPlanner;
