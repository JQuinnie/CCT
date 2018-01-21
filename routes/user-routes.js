// Set up routes for displaying and saving data to the db

// Setting up dependencies
var db = require('../models');

// Setting up routes
module.exports = function (app) {

  // GET route for getting all of the user data
  //db.findAll
  app.get('/api/user', function (req, res) {
    db.User.findAll({}).then(function (result) {
      res.json(result);
    });
  });

  // GET route for retrieving data on a specific user
  //db.findOne
  app.get('/api/user/:id', function (req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (result) {
      res.json(result);
    })
  });

  // GET route for retrieving data of all cyptocoins a user is tracking
  //db.findAll where:query include:userId
  app.get('/api/user/fav/:id', function (req, res) {
    db.User.findAll({
      where: {
        id: req.params.id,
      },
      attributes: {
        include: ['fav1', 'fav2', 'fav3']
      }
    }).then(function (result) {
      res.json(result);
    })
  })

  // POST/PUT route for saving a cyptocoin for user to track
  //db.create

  // DELETE route for deleting a cyptocoin for user to track
  //db.destroy

}
