import React from "react";
import Header from "./base/Header";
import Footer from "./base/Footer";
import Movies from "./Movies";
import MainCarousel from "./MainCarousel";
// import Example from "./Example";
import SignIn from "./SignIn.js";
import SignUp from "./SignUp";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header />
          <MainCarousel />
          {/* <Example /> */}
          <Route exact path="/" component={Movies} />
          <Route path="/SignIn" component={SignIn} />
          <Route path="/Signup" component={SignUp} />

          <Footer />
        </div>
      </Router>
    );
  }
}
