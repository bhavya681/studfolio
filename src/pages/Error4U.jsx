import React from 'react';
import { Link } from 'react-router-dom';

const Error4U = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-600">404</h1>
        <p className="text-2xl font-semibold mt-4">
          Oops! The page you're looking for isn't here.
        </p>
        <p className="text-gray-600 mt-2">
          You might have the wrong address, or the page may have moved.
        </p>
        <div className="mt-6">
          <img
            src="https://via.placeholder.com/400x250.png?text=404+Illustration"
            alt="404 Illustration"
            className="mx-auto w-full max-w-md"
          />
        </div>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error4U;
