import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.showUser=this.showUser.bind(this)
    this.state = ({
      show: [this.props.users.length],
      a: [this.props.users.length],
      b:[this.props.users.length]
    })
    for (var i=0;i<this.props.users.length;i++){
      this.state.show[i]= true,
      this.state.a[i]= "nohighlight"
      this.state.b[i]="username"
      }
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
      <div id="data">
        <div id="names">
          {this.props.users.map((user) => (
            <div className={this.state.b[this.props.users.indexOf(user)]} onClick={() => this.showUser(user)}>
              {user.name}
            </div>
          ))}
        </div>
        <table>
          {this.props.users.map((user) => (
            <tbody className={this.state.a[this.props.users.indexOf(user)]}>
              <tr>
                <td>{user.name}</td>
                <td>Category</td>
                <td>Brand</td>
                <td>Model</td>
                <td>Serial Number</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

export default App;
