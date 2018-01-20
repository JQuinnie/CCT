// Setting up app dependencies
const express = require('express');
const bodyParser = require('body-parser');

// Create Express server and set the PORT
const app = express();
const PORT = process.env.PORT || 4000;

// Requiring mdoels for syncing
var db = require('./models');

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));

// Sets up Express to use handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// static files under public folder need express setup
app.use(express.static(__dirname + '/public'));

// Sets up ROUTES
// app.get('/', function (req, res) {
//   res.render('index');
// });
require('./routes/html-routes.js')(app);
require('./routes/api-routes.js')(app);

// Listening on PORT, Syncing Sequelize models and starting Express app
db.sequelize.sync({
  force: true
}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
