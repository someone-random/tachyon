import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import Dtable from './table'
import SessionManagement from './SessionManagement'
import Data from './data'
class App extends Component {
  constructor(){
    super()
    var users=<Data/>
    console.log("123",users)
  }
  render() {
    return (
      <div>
        <SessionManagement users={this.props.users} category={this.props.category}/>
        <Dtable category={this.props.category} users={this.props.users}/>
      </div>
    );
  }
}

export default App;
