import React from 'react'
import * as firebase from 'firebase'
class data extends React.Component{
    constructor(){
        super()
        console.log('Hi')
        this.state = ({
            users: []
        })
        for(var i=1;i<=5;i++){
            var database = firebase.database().ref("/users/"+i+"/a");
            database.on('value', function(snapshot){
                console.log("hello")
                this.users.push(snapshot.val())
            })
        }
    }
    render(){  
        console.log("bbbbbb",this.state.users)
        return this.users
    }
}

export default data