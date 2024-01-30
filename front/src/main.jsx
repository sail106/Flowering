import React from 'react';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
 import store from '../src/redux/store.js'
 import { createRoot } from 'react-dom/client';
 
// createRoot(document.getElementById('root')).render(
import ReactDOM from 'react-dom/client'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>  
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
