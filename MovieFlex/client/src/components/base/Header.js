import React from "react";
export default class Header extends React.Component {
  render() {
    return (
      <div className="top-nav">
        <div className="main-logo">MOVIEFLEX</div>
        <ul className="top-navbar">
          <li className="menu">
            <a href="http://#" className="firstAnchor">
              Home
            </a>
          </li>
          <li className="menu">
            <a href="http://#"> List</a>
          </li>
          <li className="menu">
            <a href="http://#"> Account</a>
          </li>
          <li className="menu">
            <a href="http://#" className="login">
              Login
            </a>
          </li>
          <li className="menu">
            <i className="fa fa-search" />
          </li>
        </ul>
      </div>
    );
  }
}
