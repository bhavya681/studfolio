import React from 'react';

const Service = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 text-center cursor-pointer">
    {icon}
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-gray-700">{description}</p>
  </div>
);

export default Service;
