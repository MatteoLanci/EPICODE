import React, { Component } from 'react';
import './navbar.css';

class Navbar extends Component {
    constructor(props){
        super(props)
    }
    
    render(){
        return (
            <nav>
                <div>
                    <ul>
                        <li>Link 1</li>
                        <li>Link 2</li>
                        <li>Link 3</li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;