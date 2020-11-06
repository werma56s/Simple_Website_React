import React, { Component } from 'react'
import './style/LoginForm.css'
import {Redirect} from "react-router-dom";

 class LoginForm extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              email: '',
              password: '',
              redirect: false
         }
     }

    changeEmail = (event) =>{
         this.setState({
             email: event.target.value
         })
     }     

    changePassword = (event) =>{
        this.setState({
            password: event.target.value
        })
    } 
    
    /**/
    Log() {
        sessionStorage.setItem('userSession', JSON.stringify(this.state))
        alert('You are logged in!')
        this.setState({redirect: true})
    } 

    render() {
        const {email, password} = this.state
        return (
            <div className="loginForm">
                <form >
                <h2>Login</h2>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  value={email} onChange={this.changeEmail.bind(this)}/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" value={password} onChange={this.changePassword.bind(this)}/>
                </div>
                <button type="submit" class="btn btn-outline-secondary" onClick={()=>this.Log()}>Login</button>
                </form>
            </div>
        )
    }
}

export default LoginForm
