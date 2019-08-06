// var mysql = require('mysql');

// //local mysql db connection
// var connection = mysql.createConnection({
//     host     : 'heroku_e33b4e79e270bb3',
//     user     : 'b8e4369abbd8d9',
//     password : 'fa7df067',
//     database : 'heroku_e33b4e79e270bb3'
// });

// connection.connect();

// module.exports = connection;
var mysql = require('mysql');

var connection = mysql.createConnection({
<<<<<<< HEAD
    // host     : 'localhost',
    // user     : 'root',
    // password : 'root123456',
    // database : 'revelsoft_havana'
    host     : 'us-cdbr-iron-east-02.cleardb.net',
    user     : 'b0f4b625fa0364',
    password : 'e85daf56',
    database : 'heroku_b50ed251f6062c7'
=======
    host     : 'localhost',
    user     : 'root',
    password : 'root123456',
    database : 'revelsoft_havana'
    // host     : 'us-cdbr-iron-east-02.cleardb.net',
    // user     : 'b8e4369abbd8d9',
    // password : 'fa7df067',
    // database : 'heroku_e33b4e79e270bb3'
>>>>>>> parent of 6763588... make it by chun
});

connection.connect(function(err){
  if(err) throw err;
    console.log("Complete S");
});
module.exports = connection;