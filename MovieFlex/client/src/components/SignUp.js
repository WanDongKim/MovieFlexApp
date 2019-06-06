import React, { Component } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import '../styles/SignUp.css';

class SignUp extends Component {
  render() {
    return (
        <div className="signUp-page">
        <div className="form">
            <div className="main-logo">
                Welcome to MOVIEFLEX
            </div>
            <div className="signUp-form">
                <form>
                    <div className="row">
                        <div className="col-md-6">
                            <input className="signUpFormTextBox" type="text" placeholder="Last Name" required />
                        </div>
                        <div className="col-md-6">
                            <input className="signUpFormTextBox" type="text" placeholder="First Name" required />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <input className="signUpFormTextBox" type="email" placeholder="Email" required />
                        </div>
    
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <input className="signUpFormTextBox" type="password" placeholder="Password" required />
                        </div>
    
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <input className="signUpFormTextBox" type="password" placeholder="Confirm Password" required />
                        </div>
    
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                                <button className="signUpFormButton" name="btnSignUp">Join Now</button>
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
