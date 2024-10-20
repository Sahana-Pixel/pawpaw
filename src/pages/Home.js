import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import dogImage from './dog2.png';
import catImage from './cat.jpg';

function Home({ selectedPet, setSelectedPet }) {
  const togglePet = () => {
    setSelectedPet((prev) => (prev === 'dog' ? 'cat' : 'dog'));
  };

  return (
    <div className="home-container">
      <h1 className="welcome-text">Welcome to PawPaw</h1>
      <p className="tagline">Play, Feed, and Love Your Paw-Pals!</p>

      <div className="avatar-container" onClick={togglePet} style={{ cursor: 'pointer' }}>
        <img
          src={selectedPet === 'dog' ? dogImage : catImage}
          alt="Pet Avatar"
          className="pet-avatar"
        />
      </div>

      <div className="button-container">
        <Link to="/feed" className="action-button">Feed</Link>
        <Link to="/profile" className="action-button">Profile</Link>
        <Link to="/chat" className="action-button">Chat</Link>
      </div>
    </div>
  );
}

export default Home;
