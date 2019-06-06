import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <div className="top-nav">
        <div className="main-logo">MOVIEFLEX</div>
        <ul className="top-navbar">
          <li className="menu">
            <Link to='/' className="firstAnchor">Home</Link>
          </li>
          <li className="menu">
          <Link to='/'>List</Link>
          </li>
          <li className="menu">
          <Link to='/'>Account</Link>
          </li>
          <li className="menu">
            <Link to='/SignIn' className="login">Login</Link>
              
          </li>
          <li className="menu">
            <i className="fa fa-search" />
          </li>
        </ul>
      </div>
    );
  }
}
