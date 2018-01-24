// require mySql
const mysql = require('mysql');
// setting up connection
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
<<<<<<< HEAD
    password: 'santal33!',
=======
    password: 'mysqlpw!',
>>>>>>> 02e157f4b27d603141b3b298262b6499def82021
    database: 'crypto_db'
  })
}

// establishing connection
connection.connect(function (err) {
  if (err) {
    console.error('Connection error: ' + err.stack);
  };
  console.log('Connection id: ' + connection.threadId);
  return;
});
// export connection
module.exports = connection;
