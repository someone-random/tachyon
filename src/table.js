import React, { Component } from 'react';
import './App.css';
import './App'
import './index'
import * as firebase from 'firebase'
class table extends React.Component{
    constructor(props){
        super(props);
        this.showUser=this.showUser.bind(this)
        var users=[]
        console.log("dafsad",this.props.users)
        this.state = ({
            show: [this.props.users.length], 
            a: [this.props.users.length],
            b:[this.props.users.length],
            cat: [this.props.category.length],
            bran: [this.props.brand.length]
        })
        for (var i=0;i<this.props.users.length;i++){
            this.state.show[i]= true
            this.state.a[i]= "nohighlight"
            this.state.b[i]="username"
            this.state.cat[i]=this.props.category[i]
            this.state.bran[i]=this.props.brand[i]
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

    render(){
        return(
        <div id="data">
            <div id="names">
            {this.props.users.map((user) => (
                <div className={this.state.b[this.props.users.indexOf(user)]} onClick={() => this.showUser(user)} key={this.props.users.indexOf(user)}>
                {user.name}
                </div>
            ))}
            </div>
            <table>
            {this.props.users.map((user) => (
                <tbody className={this.state.a[this.props.users.indexOf(user)]} key={this.props.users.indexOf(user)}>
                    <tr>
                        <td>{user.name}</td>
                        <td>{this.state.cat[this.props.users.indexOf(user)]}</td>
                        <td>{this.state.bran[this.props.users.indexOf(user)]}</td>
                    </tr>
                </tbody>
                ))}
            </table>
        </div>
        )
    }
}

export default table