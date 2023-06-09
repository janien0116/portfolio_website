import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-router-dom';
import './index.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './custom-bootstrap.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
