import React, { Component } from 'react'
import Baner from '../componets/Baner'
import Footer from '../componets/Footer';
import Menu from '../componets/Menu'
import axios from 'axios'
import img from '../img/pic1.jpg'
import './style/StamplePage.css'
import Table from '../componets/Table'
//data task
 class SamplePage extends Component {
    render() {
        return (
            <div>
            <Menu />
            <Baner />
            <Table />
            <Footer /> 
            </div>
        )
    }
}

export default SamplePage
