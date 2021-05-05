import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: "1", message: 'Привет, ты как?', like_count: 12},
    {id: "2", message: 'Мой первый пост', like_count: 20},
]

let dialogs = [
    {id: '1', name: 'Alexandr'},
    {id: '2', name: 'Viktor'},
    {id: '3', name: 'Yuri'},
    {id: '4', name: 'Vladimir'},
]
let messages = [
    {id: 1, message: 'нОрм?'},
    {id: 2, message: 'нОрм.'},
    {id: 3, message: 'нОрм!'},
]

ReactDOM.render(
  <React.StrictMode>
    <App
        posts={posts}
        dialogs={dialogs}
        messages={messages}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
