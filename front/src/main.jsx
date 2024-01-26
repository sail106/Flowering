import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
 import store from '../src/redux/store.js'
 import { createRoot } from 'react-dom/client';
 
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> { /* Wrap your App component with Provider and pass the Redux store */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
