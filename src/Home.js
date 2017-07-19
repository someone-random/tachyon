import React from 'react';
import { Link } from 'react-router-dom'
class home extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <Link to='/App.js'>Display Data</Link>
            </div>
        )
    }
}

export default home