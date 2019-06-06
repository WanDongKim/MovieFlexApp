import React, { Component } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import '../styles/SignUp.css';

class SignUp extends Component {
  render() {
    return (
        <div class="signUp-page">
        <div class="form">
            <div class="main-logo">
                Welcome to MOVIEFLEX
            </div>
            <div class="signUp-form">
                <form>
                    <div class="row">
                        <div class="col-md-6">
                            <input class="signUpFormTextBox" type="text" placeholder="Last Name" required />
                        </div>
                        <div class="col-md-6">
                            <input class="signUpFormTextBox" type="text" placeholder="First Name" required />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <input class="signUpFormTextBox" type="email" placeholder="Email" required />
                        </div>
    
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <input class="signUpFormTextBox" type="password" placeholder="Password" required />
                        </div>
    
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <input class="signUpFormTextBox" type="password" placeholder="Confirm Password" required />
                        </div>
    
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                                <button class="signUpFormButton" name="btnSignUp">Join Now</button>
                                <p class="message">Already a member? <a><Link to='/SignIn'>Sign in</Link></a></p>
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
