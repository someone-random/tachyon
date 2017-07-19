import React, { Component } from 'react';
import * as firebase from 'firebase';
import './App.css'
class SessionManagment extends Component{
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
    render(){
        return(
            <div>
                <button type="button" onClick={() => this.login()}>Sign in</button>
                <button type="button" onClick={() => this.logout()}>Sign out</button>
            </div>
        )
    }
}

export default SessionManagment