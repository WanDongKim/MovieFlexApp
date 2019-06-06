import React from "react";
import Header from "./base/Header";
import Footer from "./base/Footer";
import Movies from "./Movies";
import Movie from './Movie';
import SignIn from './SignIn.js';
import SignUp from './SignUp';

import { BrowserRouter as Router, Route, Link, Switch, Redirect } from "react-router-dom";

{ /* import MainCarousel from "./MainCarousel"; */} 
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Header/>
          <Route exact path="/" component={Movie} />
          


          <Route path="/SignIn" component={SignIn} />
          <Route path="/Signup" component={SignUp} />
          <Footer />
        </div>
      </Router>
      // <div className="wrapper">
      //   <Header />
      //   {/* <MainCarousel /> */}
      //   <Movies />
      //   <Footer />
      // </div>
    );
  }
}
