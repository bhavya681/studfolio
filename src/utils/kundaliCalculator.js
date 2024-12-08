export const getKundaliData = (dob, time, latitude, longitude) => {
  // Some logic for date and planetary calculations...
  const sunPosition = solar.apparentEquatorial(jdn);
  const moonPosition = solar.apparentEquatorial(jdn); // For example purposes
  const marsPosition = solar.apparentEquatorial(jdn); // For example purposes

  return {
    sun: {
      ra: sunPosition.ra,
      declination: sunPosition.dec,
    },
    moon: {
      ra: moonPosition.ra,
      declination: moonPosition.dec,
    },
    mars: {
      ra: marsPosition.ra,
      declination: marsPosition.dec,
    }
  };
};
