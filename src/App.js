import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.showUser=this.showUser.bind(this)
    this.state = {
      show: [this.props.users.length],
      a: "nohighlight"
    }
  }
  handleClick(a){
    console.log("hi")
  }
  showUser(name){
    if(this.state.show[this.props.users.indexOf(name)]===false)
    {
      this.state.show[this.props.users.indexOf(name)]=true
      this.setState({
        a: "nohighlight"
      })
    } else {
      this.state.show[this.props.users.indexOf(name)]=false
      this.setState({
        a: "highlight"
      })
    }
    console.log(this.state.show[this.props.users.indexOf(name)])
  }
  getColor(name){
    if(this.state.show[this.props.users.indexOf(name)]){
      return "nohighlight"
    } else {
      return "highlight"
    }
  }
  render() {
    console.log(this.state.a)
    return (
      <div id="data">
        <div id="names">
          {this.props.users.map((user) => (
            <div id="username" onClick={this.showUser}>
              {user.name}
            </div>
          ))}
        </div>
        <table>
        {this.props.users.map((user) => (
          <tbody id={this.state.a}>
              <td>{user.name}</td>
              <td>Category</td>
              <td>Brand</td>
              <td>Model</td>
              <td>Serial Number</td>
            </tbody>))}
        </table>
      </div>
    );
  }
}

export default App;
