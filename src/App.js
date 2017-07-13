import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.showUser=this.showUser.bind(this)
    this.state = ({
      show: [this.props.users.length],
      a: [this.props.users.length]
    })
  for (var i=0;i<this.props.users.length;i++){
    this.setState({
        [this.state.show[i]]: true,
        [this.state.a[i]]: "nohighlight",
    })
    console.log(this.state.show)
  }
}
  showUser(name){
    if(this.state.show[this.props.users.indexOf(name)]===false)
    {
      this.setState({
        [this.state.show[this.props.users.indexOf(name)]]: true,
        [this.state.a[this.props.users.indexOf(name)]]: "nohighlight",
      })
    } else {
      this.setState({
        [this.state.show[this.props.users.indexOf(name)]]: false,
        [this.state.a[this.props.users.indexOf(name)]]: "highlight",
      })
    }
    console.log(this.state.show[0])
    console.log(this.state.show[1])
    console.log(this.state.show[2])
    console.log(this.state.show[3])
    console.log(this.state.a[0])
    console.log(this.state.a[1])
    console.log(this.state.a[2])
    console.log(this.state.a[3])
  }
  getColor(name){
    if(this.state.show[this.props.users.indexOf(name)]){
      return "nohighlight"
    } else {
      return "highlight"
    }
  }
  render() {
    return (
      <div id="data">
        <div id="names">
          {this.props.users.map((user) => (
            <div id="username" onClick={() => this.showUser(user)}>
              {user.name}
            </div>
          ))}
        </div>
        <table>
        {this.props.users.map((user) => (
          <tbody className={this.state.a[this.props.users.indexOf(user)]}>
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
