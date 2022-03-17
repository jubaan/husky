const usersController = {
  signup: (req, res) => {
    res.render('signup', {title: 'Signup'});
  },
  signupProcess: (req, res) => {
    res.redirect('/');
  },
  login: (req, res) => {
    res.render('login', { title: 'Login' });
  },
  loginProcess: (req, res) => {
    res.redirect('/');
  },
};

module.exports = usersController;