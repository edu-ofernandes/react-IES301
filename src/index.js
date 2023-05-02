import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Letreiro } from './components/letreiro/Letreiro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Letreiro />
  </React.StrictMode>
);
