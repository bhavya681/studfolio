import React from 'react';

const Predictions = ({ kundaliData }) => {
  const { planets } = kundaliData;

  const getPrediction = (planet, house) => {
    // Basic predictive logic (can be more complex)
    if (planet === 'Saturn' && house === 10) {
      return 'You will have a disciplined and successful career path.';
    } else if (planet === 'Jupiter' && house === 7) {
      return 'Your relationships will be blessed with wisdom and understanding.';
    }
    return 'General good fortune.';
  };

  return (
    <div className="predictions">
      <h2>Predictions</h2>
      <p>Career: {getPrediction(planets.Saturn, 10)}</p>
      <p>Relationships: {getPrediction(planets.Jupiter, 7)}</p>
      <p>Health: {getPrediction(planets.Mars, 6)}</p>
    </div>
  );
};

export default Predictions;
