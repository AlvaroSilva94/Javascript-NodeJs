const mysql = require('mysql');

//Create a connection to the database
const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'root',
    database:'cvinfo',
    port:'3306'
});

//Test the connection to see if worked or if got rejected
const testConnection = () => {
    return new Promise((resolve, reject) => {
      connection.connect((err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(true);
      });
    });
  };
  
//Create a new function to test table existence with promises
const checkExistenceOfTable = (table_name) => {
    return new Promise((resolve, reject) => {
      connection.query(`SHOW TABLES LIKE '${table_name}'`, (err, results) => {
        if (err) {
          reject(err);
          return;
        }
    
        if (results.length > 0) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  };  

//export to use in another js file
module.exports = {
    connection,
    testConnection,
    checkExistenceOfTable
  };

  
  
  