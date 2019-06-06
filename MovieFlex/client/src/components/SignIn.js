import React, { Component } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import '../styles/SignIn.css';

class SignIn extends Component {
  render() {
    return (
        <div className="login-page">

        <div className="form">
            <div className="main-logo">
                MOVIEFLEX
            </div>
            <div className="login-form">
                <form>
                    <input className="loginFormTextBox" type="email" placeholder="username or email" />
                    <input className="loginFormTextBox" type="password" placeholder="password" />
                    <button className="loginFormButton" name="btnLogin"><i
                            className="fas fa fa-sign-in-alt"></i> Login</button>
                    <p className="message">New to Movieflex?<Link to='/SignUp'>Sign up now</Link></p>
                </form>

            </div>

        </div>
    </div>

    );
  }
}

export default SignIn;
