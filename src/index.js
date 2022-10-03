import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FavContextProvider from './content/FavContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavContextProvider>
    <App />
  </FavContextProvider>
);
