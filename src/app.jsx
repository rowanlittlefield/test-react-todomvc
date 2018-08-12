import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Todo from './components/todo';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  const store = configureStore();

  ReactDOM.render(<Todo store={store} />, root);
});
