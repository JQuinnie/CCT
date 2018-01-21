// Set up routes for sending user to various HTML pages

// Setting up dependencies
var path = require('path');

// setting up Routes
module.exports = function(app) {
  // index route loads index.handlebars
  app.get('/', function(req, res) {
    res.render('index');
  })

  app.get("/user", function(req, res) {
    res.render("user");
  })

  app.get("/login", function(req, res) {
    res.render("login");
  })

  app.get("/registration", function(req, res) {
    res.render("registration");
  })
};