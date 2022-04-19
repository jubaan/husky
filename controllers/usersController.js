const User = require("../models/User");

const usersController = {
  signup: (req, res) => {
    res.render('users/signup', { title: 'Signup' });
  },
  signupProcess: (req, res) => {
    // const { username, email, password, passwordConfirmation } = req.body;
    User.create(req.body);
    res.redirect('/');
  },
  login: (req, res) => {
    res.render('users/login', { title: 'Login' });
  },
  loginProcess: (req, res) => {
    res.redirect('/');
  },
};

module.exports = usersController;
