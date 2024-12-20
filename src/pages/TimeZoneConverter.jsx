import React, { useState, useEffect } from 'react';

const TimeZoneConverter = () => {
  const [fromTimeZone, setFromTimeZone] = useState('');
  const [toTimeZone, setToTimeZone] = useState('');
  const [time, setTime] = useState('');
  const [difference, setDifference] = useState('');
  const [localTime, setLocalTime] = useState(new Date().toLocaleTimeString());

  const timeZones = [
    "America/New_York", "Europe/London", "Asia/Tokyo", "Australia/Sydney",
    "America/Los_Angeles", "America/Chicago", "Europe/Berlin", "Europe/Paris",
    "Asia/Shanghai", "Asia/Hong_Kong", "Asia/Singapore", "Asia/Seoul",
    "Europe/Moscow", "America/Toronto", "Europe/Madrid", "Europe/Rome",
    "Africa/Cairo", "America/Sao_Paulo", "Pacific/Auckland", "Asia/Bangkok",
    "Africa/Johannesburg"
  ];

  useEffect(() => {
    const timer = setInterval(() => setLocalTime(new Date().toLocaleTimeString()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleFromTimeZoneChange = (e) => {
    setFromTimeZone(e.target.value);
    calculateTimeDifference(e.target.value, toTimeZone);
  };

  const handleToTimeZoneChange = (e) => {
    setToTimeZone(e.target.value);
    calculateTimeDifference(fromTimeZone, e.target.value);
  };

  const calculateTimeDifference = (from, to) => {
    if (from && to) {
      const fromDate = new Date().toLocaleString('en-US', { timeZone: from });
      const toDate = new Date().toLocaleString('en-US', { timeZone: to });
      const fromDateTime = new Date(fromDate);
      const toDateTime = new Date(toDate);
      const diff = (toDateTime - fromDateTime) / 3600000;
      setDifference(diff);
      setTime(new Date().toLocaleTimeString('en-US', { timeZone: to }));
    }
  };

  useEffect(() => {
    if (fromTimeZone && toTimeZone) {
      calculateTimeDifference(fromTimeZone, toTimeZone);
    }
  }, [fromTimeZone, toTimeZone]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 p-6">
      <h3 className="text-4xl font-extrabold text-white mb-6">🌍 Time Zone Converter</h3>
      <div className="text-white mb-4">
        <h4 className="text-2xl">Local Time:</h4>
        <p className="text-xl">{localTime}</p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="mb-6">
          <label className="block text-gray-800 font-semibold">From Time Zone</label>
          <select
            onChange={handleFromTimeZoneChange}
            className="block w-full mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Time Zone</option>
            {timeZones.map((zone) => (
              <option key={zone} value={zone}>
                {zone.replace(/_/g, ' ')}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-6">
          <label className="block text-gray-800 font-semibold">To Time Zone</label>
          <select
            onChange={handleToTimeZoneChange}
            className="block w-full mt-2 p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Time Zone</option>
            {timeZones.map((zone) => (
              <option key={zone} value={zone}>
                {zone.replace(/_/g, ' ')}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <p className="text-gray-800 font-semibold">
            Current Time:
            <span className={`ml-2 ${time ? 'text-green-600' : 'text-gray-400'}`}>
              {time || 'N/A'}
            </span>
          </p>
          <p className="text-gray-800 font-semibold">
            Time Difference:
            <span className={`ml-2 ${difference ? 'text-green-600' : 'text-gray-400'}`}>
              {difference !== '' ? `${difference} hours` : 'N/A'}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TimeZoneConverter;
