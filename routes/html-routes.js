// Set up routes for sending user to various HTML pages

// Setting up dependencies
var path = require('path');

// setting up Routes
module.exports = function (app) {
  // index route loads index.handlebars
  app.get('/', function (req, res) {
    res.render('index');
  })
}