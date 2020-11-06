import React, { Component } from 'react'
import Baner from '../componets/Baner'
import Footer from '../componets/Footer'
import LoginForm from '../componets/LoginForm'
import Menu from '../componets/Menu'

 class LoginPage extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Baner />
                <LoginForm />
                <Footer />
            </div>
        )
    }
}

export default LoginPage
