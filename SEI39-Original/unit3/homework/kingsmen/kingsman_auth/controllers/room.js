// DEPENDENCIES
const express = require('express');
const router = express.Router();
// const User = require('../models/users.js');

// ROUTES

// post a new message
// NOTE: as given, this only works if you have sessions working correctly
// if you can't get sessions working correctly, see if you can modify this code so that it works even without sessions!
const newMessage = (req, res) => {
  // finds user by id (based on current logged in user )
  User.findOneAndUpdate(
    {_id: req.session.currentUser._id},
    // uses $push method to push the req.body.message
    { $push: { messages: req.body.message } });
};

// EXPORT
module.exports = {
  newMessage,
};
