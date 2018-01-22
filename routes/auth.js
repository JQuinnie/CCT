// setting up routes for authorization
var authController = require('../controllers/authcontroller.js');

module.exports = function (app, passport) {
  app.get('/registration', authController.signup);
  app.get('/login', authController.signin);

  // add route for posting to signup (registration page)
  app.post('/registration', passport.authenticate('local-signup', {
    successRedirect: '/user',
    failureRedirect: '/login'
  }));
}
