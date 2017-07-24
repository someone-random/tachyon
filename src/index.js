import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase'
import Home from './Home'
import Data from './data'
//import registerServiceWorker from './regiserServiceWorker';
var config = {
  apiKey: "AIzaSyAj0Q6DBp0d6xXd3qlts4c0q-ZWzRzP8lI",
  authDomain: "tachyon-173612.firebaseapp.com",
  databaseURL: "https://tachyon-173612.firebaseio.com",
  projectId: "tachyon-173612",
  storageBucket: "tachyon-173612.appspot.com",
  messagingSenderId: "336062402100"
};
export const category = [
  'A','B','C','D','E','F','G','H','I'
]
firebase.initializeApp(config);
var users = [
  {name:'A'},
  {name:'B'},
  {name:'C'},
  {name:'D'},
  {name:'E'},
  {name:'G'},
  {name:'F'},
  {name:'H'},
  {name:'I'},
]
new Promise((resolve,reject) => {
  console.log("abc")
  var data=[]
  for(var i=1;i<=5;i++){
    var database = firebase.database().ref("/users/"+i+"/a");
    database.on('value', (snapshot)=>{
      data.push(snapshot.val())
      if(data.length===5){
        resolve(data)
      }
    })
  }
  console.log("2",data)
  })
  .then((data) => {
    console.log("dafs",data)
    ReactDOM.render(<Home users={data} category={category}/>, document.getElementById('root'))
  })
firebase.auth().onAuthStateChanged(function(user){
  if(user){
    var email = user.email
    console.log(email)
  }
  else{
    console.log("out")
  }
})
console.log("hi")

//registerServiceWorker();