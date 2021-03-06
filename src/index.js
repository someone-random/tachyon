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
const category = [
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
var a0 = new Promise((resolve,reject) => {
  console.log("abc")
  var data0=[]
  for(var i=1;i<=5;i++){
    var database = firebase.database().ref("/users/"+i+"/a");
    database.on('value', (snapshot)=>{
      data0.push({name: snapshot.val()})
      if(data0.length===5){
        resolve(data0)
      }
    })
  }
})
var a = new Promise((resolve,reject) => {
  console.log("abc")
  var data=[]
  for(var i=1;i<=5;i++){
    var database = firebase.database().ref("/users/"+i+"/b");
    database.on('value', (snapshot)=>{
      data.push(snapshot.val())
      if(data.length===5){
        resolve(data)
      }
    })
  }
})
var b = new Promise((resolve,reject) => {
  console.log("abc")
  var data=[]
  for(var i=1;i<=5;i++){
    var database = firebase.database().ref("/users/"+i+"/c");
    database.on('value', (snapshot)=>{
      data.push(snapshot.val())
      if(data.length===5){
        resolve(data)
      }
    })
  }
})
Promise.all([a0,a,b]).then((a,)=>{
  console.log("a and b",a)
  ReactDOM.render(<Home users={a[0]} category={a[1]} brand={a[2]}/>, document.getElementById('root'))
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