// Set up routes for displaying and saving data to the db

// Setting up dependencies
var db = require('../models');

// Setting up routes
module.exports = function (app) {

  // GET route for getting all of the different cryptocoin and user data
  //db.findAll
  app.get('/api/coins', function (req, res) {
    db.Coins.findAll({}).then(function (result) {
      res.json(result);
    });
  });

  app.get('/api/user', function (req, res) {
    db.User.findAll({}).then(function (result) {
      res.json(result);
    });
  });

  // GET route for retrieving data on a single cyptocoin
  //db.findOne
  app.get('/api/coins/:id', function (req, res) {
    db.Coins.findOne({
      where: {
        coin_id: req.params.id
      }
    }).then(function (result) {
      res.json(result);
    })
  });

  // GET route for retrieving data of all cyptocoins a user is tracking
  //db.findAll where:query include:userId

  // POST/PUT route for saving a cyptocoin for user to track
  //db.create

  // DELETE route for deleting a cyptocoin for user to track
  //db.destroy

}
