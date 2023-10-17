// const mysql = require('mysql2/promise');
const mysql = require('mysql2');



// Create a MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'recipedb'
});


// const db = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'recipedb'
//   });



// Establish the database connection
db.connect((err) => {
  if (err) {
    console.error('Database connection error: ' + err.message);
  } else {
    console.log('Database connected');
  }
});

module.exports = db;


// module.exports = {
//     HOST: 'localhost',
//     USER: 'root',
//     PASSWORD: '',
//     DB: 'recipedb'
//   };
  