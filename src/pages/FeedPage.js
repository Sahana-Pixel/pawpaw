import React, { useState, useContext } from 'react';
import { PetContext } from '../context/PetContext'; // Correct path based on your folder structure

import './FeedPage.css'; // Separate CSS for feed page styling

const FeedPage = () => {
  const { selectedAvatar } = useContext(PetContext); // Get the selected avatar from context
  const [posts, setPosts] = useState([]);
  const [postContent, setPostContent] = useState('');

  const handlePostSubmit = () => {
    if (postContent.trim()) {
      const newPost = {
        content: postContent,
        timestamp: new Date().toLocaleString(),
      };
      setPosts([...posts, newPost]);
      setPostContent('');
    }
  };

  return (
    <div className="feed-page">
      <h1>Pet Feed</h1>
    
    
      
    </div>
  );
};

export default FeedPage;
