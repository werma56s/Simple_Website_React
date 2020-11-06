import React, { Component } from 'react'
import Form  from '../componets/Form';
import Baner from '../componets/Baner';
import Menu from '../componets/Menu';
import Footer from '../componets/Footer';

 class Contact extends Component {
    render() {
        return (
            <div>
            <Menu />
            <Baner/>
            <Form />
            <Footer />
            </div>
        )
    }
}

export default Contact
