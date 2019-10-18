const router = require('express').Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/user-model.js');

const authenticate = require('./authenticate-middleware.js');

const validateUserData = require('../users/validate-user-data.js');

router.post('/register', validateUserData, (req, res) => {
  // implement registration
  const userData = req.body;
  const hash = bcrypt.hashSync(userData.password, 10);
  
  userData.password = hash;

  Users.addUser(userData)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => {
      res.status(500).json(err);
    })
});

router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
