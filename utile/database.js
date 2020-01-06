const mysql = require('mysql2');

//connection with the database
const connection = mysql.createConnection({
    //local
    // host: "localhost",
    // user: "root",
    // password: "root",
    // database: "toDoNode"
    //server
    host: "localhost",
    user: "S1133868",
    password: "HeAPb@wLbt9KJp",
    database: "S1133868_toDoNode"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('You are now connected with mysql database...')
});

//end mysql connection

module.exports = connection;