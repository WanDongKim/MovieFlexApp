import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-icon">
          <a href="http://">
            <i className="fa fa-facebook-f" />
          </a>
          <a href="http://#">
            <i className="fa fa-instagram" />
          </a>
          <a href="http://#">
            <i className="fa fa-twitter" />
          </a>
        </div>

        <div className="footer-support">
          <div className="footer-links">
            <div className="footer-link">
              <a href="http://#">Customer Service</a>
            </div>
            <div className="footer-link">
              <a href="http://#">Terms and Condition</a>
            </div>
            <div className="footer-link">
              <a href="http://#">Contact Detail</a>
            </div>
            <div className="footer-link">
              <a href="http://#">Account</a>
            </div>
          </div>
        </div>
        <div className="copyright">
          Copyright© 2019 MOVIEFLEX toronto All rights reserved.
        </div>
      </div>
    );
  }
}

export default Footer;
