import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './regiserServiceWorker';
const users = [
  {name: 'A'},
  {name: 'B'},
  {name: 'C'},
  {name: 'D'}
]
ReactDOM.render(<App users={users} />, document.getElementById('root'));
//registerServiceWorker();
