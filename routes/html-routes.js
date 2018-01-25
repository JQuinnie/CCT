// Set up routes for sending user to various HTML pages

// Setting up dependencies
var path = require('path');
var db = require('../models');

// setting up Routes
module.exports = function (app) {
  // index route loads index.handlebars
  app.get('/', function (req, res) {
    res.render('index');
  })
  // user route loads user.handlebars
  app.get("/dashboard", function (req, res) {
    db.User.findAll({}).then(function (result) {
      res.render('dashboard', {
        userData: result
      })
    });
  })
  // login route loads login.handlebars
  app.get("/login", function (req, res) {
    res.render("login");
  })
  // registration route loads registration.handlebars
  app.get("/registration", function (req, res) {
    res.render("registration");
  })
  // route for actual API TEST
  app.get("/apiTest", function (req, res) {
    res.sendFile(path.join(__dirname, "/../public/test/test-server.js"));
  })
};
