import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export let dialogs = [
    {id: 1, name: 'Uliana'},
    {id: 2, name: 'Marianna'},
    {id: 3, name: 'Alexey'},
];

export let messages = [
    {id: 1, message: 'Let it go'},
    {id: 2, message: 'Show yourself'},
    {id: 3, message: 'Into the unknown'},
];

export let posts = [
    {message: 'Go Eva!', likeCount: '18'},
    {message: 'Wake up Sindzy!', likeCount: 12},
    {message: 'Wake up!', likeCount: 122},
];


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
