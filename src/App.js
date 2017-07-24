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
  }
  render() {
    console.log("z",this.props.users)
    return (
      <div>
        <SessionManagement data={this.props.users} category={this.props.category}/>
        <Dtable category={this.props.category} users={this.props.users} brand={this.props.brand}/>
      </div>
    );
  }
}

export default App;
