// set up controller for routes
var exports = module.exports = {}

exports.signup = function (req, res) {
  res.render('registration');
}

exports.signin = function (req, res) {
  res.render('login');
}
