import React from 'react';
import { Link } from 'react-router-dom'
import App from './App'
import ReactDOM from 'react-dom';
import './index.js'
class home extends React.Component{
    constructor(){
        super();
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        ReactDOM.render(<App users={this.props.users} category={this.props.category}/>, document.getElementById('root'))
    }
    render(){
        return(
            <div>
                <button onClick={() =>this.handleClick()}>Display data</button>
            </div>
        )
    }
}

export default home