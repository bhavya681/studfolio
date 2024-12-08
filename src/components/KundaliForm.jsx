import React, { useState } from 'react';
import moment from 'moment-timezone';

const KundaliForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    time: '',
    place: '',
    latitude: '',
    longitude: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="kundali-form">
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Date of Birth:</label>
        <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
      </div>
      <div>
        <label>Time of Birth:</label>
        <input type="time" name="time" value={formData.time} onChange={handleChange} required />
      </div>
      <div>
        <label>Latitude:</label>
        <input type="text" name="latitude" value={formData.latitude} onChange={handleChange} required />
      </div>
      <div>
        <label>Longitude:</label>
        <input type="text" name="longitude" value={formData.longitude} onChange={handleChange} required />
      </div>
      <button type="submit">Generate Kundali</button>
    </form>
  );
};

export default KundaliForm;
