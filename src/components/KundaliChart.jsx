import React from 'react';

const KundaliChart = ({ kundaliData }) => {
  // Ensure kundaliData is defined and contains the necessary properties
  if (!kundaliData || !kundaliData.sun) {
    return <div>Loading Kundali data...</div>;
  }

  const { sun, moon, mars } = kundaliData;

  return (
    <div className="kundali-chart">
      <div className="house house1">Sun: {sun.ra} (RA), {sun.declination} (Declination)</div>
      <div className="house house2">Moon: {moon ? moon.ra : 'N/A'}</div>
      <div className="house house3">Mars: {mars ? mars.ra : 'N/A'}</div>
      {/* Add more houses and planetary positions */}
    </div>
  );
};

export default KundaliChart;
