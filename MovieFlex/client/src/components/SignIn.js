import React, { Component } from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import '../styles/SignIn.css';

class SignIn extends Component {
  render() {
    return (
        <div class="login-page">

        <div class="form">
            <div class="main-logo">
                MOVIEFLEX
            </div>
            <div class="login-form">
                <form>
                    <input class="loginFormTextBox" type="email" placeholder="username or email" />
                    <input class="loginFormTextBox" type="password" placeholder="password" />
                    <button class="loginFormButton" name="btnLogin"><i
                            class="fas fa fa-sign-in-alt"></i> Login</button>
                    <p class="message">New to Movieflex? <a><Link to='/SignUp'>Sign up now</Link></a></p>
                </form>

            </div>

        </div>
    </div>

    );
  }
}

export default SignIn;
