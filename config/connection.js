// Set up MySQL connection.
var mysql = require("mysql");

var connection;
if (process.env.JAWSDB_PURPLE_URL) {
  // Database is JawsDB on Heroku
  connection = mysql.createConnection({
      host: "nuskkyrsgmn5rw8c.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      user: "s3a3n64bw9csptd0",
      password: "rz9dq88fjjw15jte",
      database: "g9ors53of9pr8fpf"
  });
} else {
  // Database is local
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Test123!",
    database: "burgers_db",
  });

  // Make connection.
  connection.connect(function (err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
}

// Export connection for our ORM to use.
module.exports = connection;
