const mysql = require("mysql2");
const dbConfig = require("../config/recipe.config");

// connection with database model
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
})

connection.connect((error)=>{
    if(error) console.log("MySQL Connection: " +error);
    else console.log("Suscessfully connected to the database.");
});
module.exports = connection;