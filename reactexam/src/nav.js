import React, { Component } from 'react';
import {BrowserRouter as Router , Route , Switch , Link } from 'react-router-dom';

class nav extends Component {
    render() {
     
        return (
            <div>
                 <Link to="home">home</Link>    
            </div>
        );
    }
}

export default nav;