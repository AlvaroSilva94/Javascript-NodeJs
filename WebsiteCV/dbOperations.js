const mysql = require('mysql');
const { connection, testConnection, checkExistenceOfTable } = require('./dbConnection');

//Test to see if connected succeeded
testConnection()
  .then(() => {
    console.log('Successful database connection');
  })
  .catch((err) => {
    console.error('Failed to connect to database', err);
  });

let atLeastOneEmpty = false;

// Store the existence of tables
const checkTables = async () => {
  try {
    let persinfo = await checkExistenceOfTable('PersonalInfo');
    let contacts = await checkExistenceOfTable('Contacts');
    let education = await checkExistenceOfTable('Education');
    let competences = await checkExistenceOfTable('Competences');
    let languages = await checkExistenceOfTable('Languages');
    let profExperience = await checkExistenceOfTable('ProfExperience');

    return !persinfo || !contacts || !education || !competences || !languages || !profExperience;
  } catch (err) {
    console.error(err);
    return err;
  }
};

checkTables().then(result => {
  atLeastOneEmpty = result;
});

//Create a new function to create tables in database
const createTable = (table_name) => {
  return new Promise((resolve, reject) => {
    connection.query(`CREATE TABLE \`${table_name}\` (id INT)`, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(console.log(`Table ${table_name} created`));
    });
  });
};  

//Add columns information------------------------------
const addTableColumns = (tableName, columns) => {
    return new Promise((resolve, reject) => {
      let query = `ALTER TABLE ${tableName} `;
      columns.forEach((column) => {
        query += `ADD COLUMN ${column.name} ${column.type},`;
      });
      query = query.slice(0, -1);
  
      connection.query(query, (err) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(console.log(`Columns added to ${tableName}`));
      });
    });
  };
  
//-----------------------------------------------------


module.exports = {
  atLeastOneEmpty,
  createTable,
  checkTables,
  addTableColumns
};

//Need to create a function to put information to tables in database
//Need to create a function to retrive information from database
  
//db tables: 
//personal info (nome, titulo, foto, descrição, awards)
//Contacts (phone, email, linkedin, github)
//Education
//Competencies
//Languages
//ProfExperience by year