import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProfilePage.css';
import dogImage from './dog2.png';
import catImage from './cat.jpg';
import ProgressBar from './ProgressBar'; // Import the ProgressBar component

function ProfilePage({ selectedPet }) {
  const [petName, setPetName] = useState('Buddy'); // Default pet name
  const petStats = {
    happiness: 80,
    hunger: 40,
  };

  // Load saved pet name from localStorage if it exists
  useEffect(() => {
    const savedName = localStorage.getItem('petName');
    if (savedName) {
      setPetName(savedName);
    }
  }, []);

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setPetName(newName);
    localStorage.setItem('petName', newName); // Save the name to localStorage
  };

  return (
    <div className="profile-container">
      <h1 className="welcome-text">Pet Profile</h1>
      <div className="avatar-container">
        <img
          src={selectedPet === 'dog' ? dogImage : catImage}
          alt="Pet Avatar"
          className="pet-avatar"
        />
      </div>
      <div className="profile-info">
        <h2>Name: {petName}</h2>
        
        {/* Use ProgressBar component for happiness and hunger */}
        <ProgressBar label="Happiness" value={petStats.happiness} max={100} />
        <ProgressBar label="Hunger" value={petStats.hunger} max={100} />

        <input
          type="text"
          value={petName}
          onChange={handleNameChange}
          placeholder="Edit Pet Name"
          className="name-input"
        />
      </div>
      <Link to="/" className="action-button">Return Home</Link>
    </div>
  );
}

export default ProfilePage;
