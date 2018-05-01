const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "localhost", 
    user: "root", 
    password: "", 
    database: "burgers_db"
});

connection.connect(function(error) {
    if (error) {
        console.log("error connection: ", error.stack);
        return;
    }

    console.log("connection.js: connected as id " + connection.threadId + "\n");
});

// module.exports.connection = connection;
module.exports = connection;