import React, { useState } from 'react';

const DataBreachChecker = () => {
    const [image, setImage] = useState('');
    const [quote, setQuote] = useState('');
    const [boardItems, setBoardItems] = useState([]);
    const [error, setError] = useState('');

    const addItem = () => {
        if (!quote || !image) {
            setError('Please provide both image URL and quote.');
            return;
        }
        setError('');
        setBoardItems([...boardItems, { image, quote }]);
        setImage('');
        setQuote('');
    };

    return (
        <div className="p-6 max-w-4xl mx-auto m-8 my-11 bg-gradient-to-r from-blue-500 to-teal-500 shadow-lg rounded-lg">
            <h2 className="text-3xl font-semibold text-white text-center mb-6">
                Create Your Vision Board
            </h2>
            <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="space-y-4">
                    <input
                        type="text"
                        value={quote}
                        onChange={(e) => setQuote(e.target.value)}
                        placeholder="Enter your motivational quote"
                        className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-300"
                    />
                    <input
                        type="url"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        placeholder="Enter image URL"
                        className="w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-300"
                    />
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <button
                        onClick={addItem}
                        className="w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-400 focus:outline-none transition duration-300 ease-in-out"
                    >
                        Add to Vision Board
                    </button>
                </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {boardItems.map((item, index) => (
                    <div key={index} className="p-4 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out">
                        <img
                            src={item.image}
                            alt="Vision Item"
                            className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <p className="text-lg text-gray-800 font-semibold">{item.quote}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DataBreachChecker;

