const mysql = require('mysql');
const {checkTables,atLeastOneEmpty,createTable,addTableColumns} = require('./dbOperations');

//Wrap inside a then block to ensure the value of atleastOneEmpty
//is updated only after the calculation is done
checkTables().then((atLeastOneEmpty) => {
  if(atLeastOneEmpty) {
    //Create all of them 
    createTable('PersonalInfo');
    createTable('Contacts');
    createTable('Education'); 
    createTable('Competences');
    createTable('Languages');
    createTable('ProfExperience');

    //Add the information to each table
    //First add the columns and the structure for the information

    addTableColumns('PersonalInfo', [
        { name: 'name', type: 'VARCHAR(255)' },
        { name: 'job_title', type: 'VARCHAR(255)' },
        { name: 'photo', type: 'VARCHAR(255)' },  //Use link reference to photo in folders
        { name: 'description', type: 'VARCHAR(255)'},
        { name: 'awards', type: 'VARCHAR(255)'},
    ]);

    addTableColumns('Contacts', [
        { name: 'email', type: 'VARCHAR(255)' },
        { name: 'phone', type: 'VARCHAR(20)' },
        { name: 'address', type: 'VARCHAR(255)' },
        { name: 'linkedin', type: 'VARCHAR(255)'},
        { name: 'github', type: 'VARCHAR(255)'},
      ]);

    addTableColumns('Education', [
      { name: 'degree', type: 'VARCHAR(255)' },
      { name: 'institution', type: 'VARCHAR(255)' },
      { name: 'start_year', type: 'VARCHAR(255)' },
      { name: 'end_year', type: 'VARCHAR(255)'},
    ]);

    addTableColumns('Competences', [
        { name: 'skill', type: 'VARCHAR(255)' },
    ]);

    addTableColumns('Languages', [
        { name: 'language', type: 'VARCHAR(255)' },
        { name: 'level', type: 'VARCHAR(255)' },
    ]);

    addTableColumns('ProfExperience', [
        { name: 'job_title', type: 'VARCHAR(255)' },
        { name: 'company', type: 'VARCHAR(255)' },
        { name: 'description', type: 'VARCHAR(255)' },
        { name: 'tech_stack', type: 'VARCHAR(255)' },
        { name: 'start_year', type: 'VARCHAR(255)' },
        { name: 'end_year', type: 'VARCHAR(255)'},
      ]);

//Populate table with information (TODO)

  } else {
    console.log("Tables already exist in Database! Retrieving Info!");

    //retrive the information from there
  }
});

