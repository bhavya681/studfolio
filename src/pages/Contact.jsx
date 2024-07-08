import { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () =>  {
  const [formData, setFormData] = useState({ name: '', email: '', rating: 0, message: '' });
  const [reviews, setReviews] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRatingChange = (rating) => {
    setFormData({ ...formData, rating });
  };

  const submitFeedback = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.rating && formData.message) {
      setReviews([...reviews, formData]);
      setFormData({ name: '', email: '', rating: 0, message: '' });
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-200 to-gray-400 min-h-screen py-10 px-4">
      <h1 className="text-3xl md:text-4xl text-center font-bold mb-8 text-gray-800">Feedback and Reviews</h1>
      <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 shadow-md rounded-md">
        <form onSubmit={submitFeedback}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Rating</label>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  onClick={() => handleRatingChange(star)}
                  className={`p-2 rounded-full ${
                    formData.rating >= star ? 'bg-yellow-400' : 'bg-gray-200'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your feedback"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Feedback
          </button>
        </form>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Reviews</h2>
          {reviews.map((review, index) => (
            <div key={index} className="mb-4 p-4 bg-gray-100 rounded-md shadow-md">
              <p className="text-lg font-semibold text-gray-700">{review.name}</p>
              <p className="text-gray-600">{review.email}</p>
              <div className="flex mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className={`${review.rating >= star ? 'text-yellow-400' : 'text-gray-300'}`}>★</span>
                ))}
              </div>
              <p className="text-gray-600">{review.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
