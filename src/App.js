import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProfilePage from './pages/ProfilePage';
import React, { useState } from 'react';
import ChatPage from './pages/ChatPage';
import FeedPage from './pages/FeedPage'; // Import FeedPage


function App() {
  const [selectedPet, setSelectedPet] = useState('dog'); // State to hold the selected pet

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home selectedPet={selectedPet} setSelectedPet={setSelectedPet} />} />
        
        <Route path="/profile" element={<ProfilePage selectedPet={selectedPet} />} />

        <Route path="/chat" element={<ChatPage />}/>
        <Route path="/feed" element={<FeedPage />} />
      </Routes>
    </Router>
  );
}

export default App;
