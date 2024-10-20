import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ label, value, max }) => {
  // Calculate the percentage for the width of the bar
  const percentage = (value / max) * 100;

  // Choose color based on the value
  let color;
  if (value > 50) {
    color = '#4CAF50'; // Green for happy
  } else if (value > 20) {
    color = '#FF9800'; // Orange for neutral
  } else {
    color = '#F44336'; // Red for hungry
  }

  return (
    <div className="progress-bar-container">
      <span className="label">{label}: {value}%</span>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${percentage}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
