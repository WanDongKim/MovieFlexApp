let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
let passport = require("passport");

let jwt = require('jsonwebtoken');
let DB = require('../config/db');

// define the User Model
let userModel = require("../models/user");
let User = userModel.User; 

// Process Login Function
module.exports.processLoginPage = (req, res, next) => {
    console.log('login page');
    passport.authenticate('local', 
    (err, user, info) => {
      // server error?
      if(err) {
        return next(err);
      }
      // is there a user login error?
      if(!user) {
        return res.json({success: false, msg: 'ERROR: Failed to Log In User!'});
      }
      req.logIn(user, (err) => {
        // server error?
        if(err) {
          return next(err);
        }
        const payload ={
          id:user._id,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName
        }
  
        const authToken = jwt.sign(payload, DB.secret, {
          expiresIn: 604800 //1 week
        });
        return res.json({success: true, msg: 'User Logged in Successfully!', user:{
            id:user._id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName
        }, token: authToken}); 
      });
    })(req, res, next);
  }

  //User reigistration API
module.exports.processRegisterPage = (req, res, next) => {
  console.log('Register page');
  console.log(req.body);
  console.log(req.body.user)
    // define a new user object
    let newUser = new User({
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName
    });
    console.log(req.body)
    console.log(newUser);
    User.register(newUser, req.body.password, (err) => {
      if (err) {
        console.log("Error: Inserting New User");
        console.log(err);
        if (err.name == "UserExistsError") {
          console.log("Error: User Already Exists!");
        }
        return res.json({success: false, msg: 'ERROR: Failed to Register User!'});
      } else {
        // if no error exists, then registration is successful
  
        // redirect the user
        return passport.authenticate("local")(req, res, () => {
          return res.json({success: true, msg: 'User Registered Successfully!'});
        });
      }
    });
  };
  
  module.exports.performLogout = (req, res, next) => {
      console.log('logout paage');
    req.logout();
    res.json({success: true, msg: 'User Successfully Logged Out!'});
  };