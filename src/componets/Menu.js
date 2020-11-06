import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { isLogged } from '../utillities/Utillities';
import './style/Menu.css'
import axios from 'axios'

class Menu extends Component {
    /*{isLogged() ? <li><Link to="/login">{JSON.parse(sessionStorage.userSession)}</Link></li>: 
                    <li><Link to="/login">'login now'</Link></li>*/
    render() {
        return (
         <div className="wrapper">
            <h1 className="logo">Renro.</h1>
            <nav>
                <h3>Main Navigation</h3>
                <ul>
                    <li><Link to="/"> Home</Link></li>
                    <li><Link to="/samplePage">Blog</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/contact">Contact</Link></li> 
                    {isLogged() ? <li><Link to="/login">{JSON.parse(sessionStorage.userSession).email}</Link></li>: 
                    <li><Link to="/login">'login now'</Link></li>}
                </ul>
            </nav>
        </div>
        )
    }
}

export default Menu
