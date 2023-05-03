import React from 'react';
import ReactDOM from 'react-dom/client';
import PeopleCounter  from './components/people-counter/PoelpeCounter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PeopleCounter />
  </React.StrictMode>
);
