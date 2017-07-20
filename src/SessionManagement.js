import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css'
import ReactDOM from 'react-dom';
import Home from './Home'
import Data from './data'
class SessionManagment extends Component{
    login(){
        firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
        firebase.auth().getRedirectResult().then(function(result){
        if(result.credential){
            var token = result.credential.accessToken
            console.log(token)
            console.log("logged in")
        }
        var user = result.user
        console.log(user)
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

    render(){
        return(
            <div>
                <button type="button" onClick={() => this.login()}>Sign in</button>
                <button type="button" onClick={() => this.logout()}>Sign out</button>
                <button type="button" onClick={() => ReactDOM.render(<Home users={this.props.users} category={this.props.category}/>, document.getElementById('root'))}>Return to home</button>
            </div>
        )
    }
}
export  default SessionManagment