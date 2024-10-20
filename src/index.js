import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { PetProvider } from './context/PetContext';
import './index.css';

ReactDOM.render(
  <PetProvider>
    <App />
  </PetProvider>,
  document.getElementById('root')
);
