// PomodoroTimer.js
import React, { useState, useEffect } from 'react';

const PomodoroTimer = () => {
  const [time, setTime] = useState(1500); // 25 minutes
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let timer;
    if (isActive) {
      timer = setInterval(() => {
        setTime((prev) => {
          if (prev === 0) {
            setIsBreak(!isBreak);
            return isBreak ? 1500 : 300; // Switch between 25 minutes and 5 minutes
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isActive, isBreak]);

  const resetTimer = () => {
    setTime(1500);
    setIsActive(false);
    setIsBreak(false);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded text-center">
      <h2 className="text-xl font-bold mb-4">Pomodoro Timer</h2>
      <div className="text-3xl font-bold mb-4">{formatTime(time)}</div>
      <button onClick={() => setIsActive(!isActive)} className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
        {isActive ? 'Pause' : 'Start'}
      </button>
      <button onClick={resetTimer} className="bg-red-500 text-white p-2 rounded hover:bg-red-600 ml-2">
        Reset
      </button>
    </div>
  );
};

export default PomodoroTimer;
