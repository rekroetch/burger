// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "td5l74lo6615qq42.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "zid9ijnnpmacdabt",
  password: "vdwkp560wzi6abcc",
  database: "xttve8zfp2rh3f7v"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
