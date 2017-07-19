import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import Dtable from './table'
import SessionManagement from './SessionManagement'

class App extends Component {
  
  login(){
    firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    firebase.auth().getRedirectResult().then(function(result){
      if(result.credential){
        var token = result.credential.accessToken
        console.log("logged in")
      }
      var user = result.user
    }).catch(function(error) {
        console.log("error")
    })
  }

  logout(){
    firebase.auth().signOut().then(function() {
      console.log("signed out")
    }).catch(function(error) {
      console.log("error")
    })
  }
  showUser(name){
    if(this.state.show[this.props.users.indexOf(name)]===false)
    {
      this.state.show[this.props.users.indexOf(name)]=true
      this.state.a[this.props.users.indexOf(name)]="nohighlight"
      this.state.b[this.props.users.indexOf(name)]="username"
    } else {
      this.state.show[this.props.users.indexOf(name)]=false
      this.state.a[this.props.users.indexOf(name)]="highlight"
      this.state.b[this.props.users.indexOf(name)]="username-highlight"
    }
    this.forceUpdate()
  }

  render() {
    
    return (
      <div>
        <SessionManagement/>
        <Dtable users={this.props.users} category={this.props.category}/>
      </div>
    );
  }
}

export default App;
