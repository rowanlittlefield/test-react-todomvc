import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/todo';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Todo />, root);
});
