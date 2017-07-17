import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase'
//import registerServiceWorker from './regiserServiceWorker';
const users = [
  {name: 'A'},
  {name: 'B'},
  {name: 'C'},
  {name: 'D'},
  {name: 'E'},
  {name: 'F'},
  {name: 'G'},
  {name: 'H'},
  {name: 'I'}
]
var config = {
  apiKey: "AIzaSyAj0Q6DBp0d6xXd3qlts4c0q-ZWzRzP8lI",
  authDomain: "tachyon-173612.firebaseapp.com",
  databaseURL: "https://tachyon-173612.firebaseio.com",
  projectId: "tachyon-173612",
  storageBucket: "tachyon-173612.appspot.com",
  messagingSenderId: "336062402100"
};
firebase.initializeApp(config);
ReactDOM.render(<App users={users} />, document.getElementById('root'));
//registerServiceWorker();
