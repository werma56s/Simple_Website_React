import React, { Component } from 'react'
import { Form, ModalTitle } from 'react-bootstrap'
import axios from 'axios'
import Baner from '../componets/Baner'
import Footer from '../componets/Footer'
import Menu from '../componets/Menu'
import Post from '../componets/Post'
import img from '../img/pic1.jpg'
import './style/Home.css'
import { text } from '../utillities/Utillities'
import { title } from '../utillities/Utillities'

 class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loader: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
                this.setState({data: response.data, loader: false})
            })
        }, 2500)
    }
    render() {
        return (
            <div className="home">
                <Menu />
                <Baner />
                <div className="postCollation">
                <h2>Posts</h2> 
                 <ul>
                     <li><Post src={img} autor="{title(this.state,1)} text={text(this.state,'1')}"/></li>
                     <li><Post src={img} autor="XYZ" text="Lorem2 ipsume.."/></li>
                     <li><Post src={img} autor="XYZ" text="Lorem3 ipsume.."/></li>
                     <li><Post src={img} autor="XYZ" text="Lorem4 ipsume.."/></li>
                     <li><Post src={img} autor="XYZ" text="Lorem5 ipsume.."/></li>
                     <li><Post src={img} autor="XYZ" text="Lorem6 ipsume.."/></li>
                 </ul>
                </div>
               
                <Footer />
                
            </div>
        )
    }
}

export default Home
