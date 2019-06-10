import React, {Component} from 'react';
import axios from 'axios';
import { BrowserRouter as Route, Link, Redirect } from "react-router-dom";
import '../styles/SignUp.css';

const endpoint = 'http://localhost:4000/api/';
const axiosConfig = {
            headers:{
                
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept'
            }
}
class SignUp extends Component {
    constructor(props){
        super(props);
        this.state= {
            username: '',
            lastName: '',
            firstName: '',
            password: '',
            confirmPassword:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    handleChange = event => {
        this.setState({[event.target.name]: event.target.value});
        console.log(this.state.password);
        console.log(this.state.confirmPassword);

    }
    handleSubmit = event =>{
        event.preventDefault();
        if(this.state.password !== this.state.confirmPassword){
            alert('Passwords do not match');
        }else{
            axios({
                method: 'POST',
                baseURL: 'http://localhost:4000/api/',
                url: '/register',
                data:{
                    username: this.state.username,
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    password: this.state.password
                }
            }).then(response =>{
                this.props.history.push('/SignIn');
            }).catch(err =>{
                console.log(err);
            })
        }
    }

  render() {

    return (
        <div className="signUp-page">
        <div className="form">
            <div className="main-logo">
                Welcome to MOVIEFLEX
            </div>
            <div className="signUp-form">
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <input className="signUpFormTextBox" name="lastName" type="text" placeholder="Last Name" required  onChange={this.handleChange}/>
                        </div>
                        <div className="col-md-6">
                            <input className="signUpFormTextBox" name="firstName" type="text" placeholder="First Name" required  onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <input className="signUpFormTextBox" name="username" type="text" placeholder="email" required onChange={this.handleChange}/>
                        </div>
    
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <input className="signUpFormTextBox" name="password" type="password" placeholder="Password" required onChange={this.handleChange}/>
                        </div>
    
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <input className="signUpFormTextBox" name="confirmPassword" type="password"  placeholder="Confirm Password" required onChange={this.handleChange}/>
                        </div>
    
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                                <button type="submit"className="signUpFormButton" name="btnSignUp">Join Now</button>
                                <p className="message">Already a member? <Link to='/SignIn'>Sign in</Link></p>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    </div>

    );
  }
}

export default SignUp;
