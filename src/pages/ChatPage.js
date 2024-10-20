import React, { useState, useContext, useEffect } from 'react';
import { PetContext } from '../context/PetContext'; // Ensure the import path is correct
import './ChatPage.css'; // Add a separate CSS for chat-specific styling

const ChatPage = () => {
  const { selectedAvatar } = useContext(PetContext); // Access the chosen avatar (not used for image anymore)
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const userMessage = { text: inputValue, fromUser: true };
      setMessages([...messages, userMessage]);
      setInputValue('');

      // Generate pet response
      generatePetResponse(inputValue);
    }
  };

  const generatePetResponse = (userMessage) => {
    let petResponse = '';
    
    if (userMessage.toLowerCase().includes('how are you')) {
      petResponse = "I'm just a paw-some pet! How about you, hooman?";
    } else if (userMessage.toLowerCase().includes('play')) {
      petResponse = "Let's play fetch! 🐾";
     } else if (userMessage.toLowerCase().includes('hello')) {
        petResponse = "Hey Hooman!!! 🐾";
    } else if (userMessage.toLowerCase().includes('feed')) {
      petResponse = "Yummy! I love treats! 🍖";
    } else {
      petResponse = "I’m here! What’s up? 🐶";
    }

    // Add pet response to messages after a short delay
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { text: petResponse, fromUser: false }]);
    }, 1000); // Respond after 1 second
  };

  return (
    <div className="chat-page">
      <h1>Chat with Your Paw-Pal</h1>

      <div className="chat-container">
        <div className="chat-box">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.fromUser ? 'from-user' : 'from-pet'}`}>
              {msg.text}
            </div>
          ))}
        </div>

        <div className="chat-input-container">
          <input
            type="text"
            placeholder="Type a message..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>

      {/* Add some decorative elements */}
      <div className="pet-decoration">
        <div className="pet-icon">🐶</div>
        <div className="pet-icon">🐱</div>
      </div>
    </div>
  );
};

export default ChatPage;
