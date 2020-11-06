import React, { Component } from 'react'
import 'react-bootstrap'
import './style/From.css'

 class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email:'',
            password:'',
            address:'',
            address2:'',
            city:'',
            statee:'',
            zip:''
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
    changeAddress = (event) =>{
        this.setState({
            address: event.target.value
        })
        
    }
    changeAddress2 = (event) =>{
        this.setState({
            address2: event.target.value
        })
        
    }
    changeCity = (event) =>{
        this.setState({
            city: event.target.value
        })
        
    }
    changeStatee = (event) =>{
        this.setState({
            statee: event.target.value
        })
        
    }
    changeZip = (event) =>{
        this.setState({
            zip: event.target.value
        })
        
    }
    
    //Wyswietlenie
    handleSubmit = event =>{
        alert(`|( ${this.state.email} )|( ${this.state.password} )|( ${this.state.address} )|( ${this.state.address2} )|( ${this.state.city} )|( ${this.state.statee} )|( ${this.state.zip} )|`)
        event.preventDefault()
    }
    
    render() {
        const {email, password, address, address2, city, statee, zip} = this.state
        return (
            <div className="formm">
            <h2>Contact Form</h2>
            <form onSubmit={this.handleSubmit}>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input type="email" class="form-control" id="inputEmail4" value={email} onChange={this.changeEmail} />
                </div>
                <div class="form-group col-md-6">
                <label for="inputPassword4">Password</label>
                <input type="password" class="form-control" id="inputPassword4" value={password} onChange={this.changePassword}/>
                </div>
            </div>
            <div class="form-group">
                <label for="inputAddress">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" value={address} onChange={this.changeAddress} />
            </div>
            <div class="form-group">
                <label for="inputAddress2">Address 2</label>
                <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" value={address2} onChange={this.changeAddress2} />
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" class="form-control" id="inputCity" value={city} onChange={this.changeCity}/>
                </div>
                <div class="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" class="form-control" value={statee} onChange={this.changeStatee.bind()}>
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
                </div>
                <div class="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="text" class="form-control" id="inputZip" value={zip} onChange={this.changeZip} />
                </div>
            </div>
            <div class="form-group">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck"/>
                <label class="form-check-label" for="gridCheck" >
                    Check me out
                </label>
                </div>
            </div>
            <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
</div>
        )
    }
}

export default Form
