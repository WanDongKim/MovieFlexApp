import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
export default class Header extends React.Component {
  render() {
    // $(function() {
    //   $(".container").on("click", function() {
    //     var that = $(this);
    //     if (that.hasClass("is-open")) {
    //       that.removeClass("is-open").addClass("is-closed");
    //     } else {
    //       that.removeClass("is-closed").addClass("is-open");
    //     }
    //   });
    // });
    return (
      <div className="top-nav">
        <div className="stage">
          <div className="container">
            <div className="line-top" />
            <div className="line-middle" />
            <div className="line-bottom" />
          </div>
        </div>
        <div className="main-logo">MOVIEFLEX</div>
        <ul className="top-navbar">
          <li className="menu">
            <Link to="/" className="firstAnchor">
              Home
            </Link>
          </li>
          <li className="menu">
            <Link to="/">List</Link>
          </li>
          <li className="menu">
            <Link to="/">Account</Link>
          </li>
          <li className="menu">
            <Link to="/SignIn" className="login">
              Login
            </Link>
          </li>
          <li className="menu">
            <i className="fa fa-search" />
          </li>
        </ul>
      </div>
    );
  }
}
