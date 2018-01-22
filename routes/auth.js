// setting up routes for authorization
var authController = require('../controllers/authcontroller.js');

module.exports = function (app) {
  app.get('/registration', authController.signup);
}
