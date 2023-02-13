const mysql = require('mysql');
const {checkTables,
       atLeastOneEmpty,
       createTable,
       addTableColumns,
       insertInfo} = require('./dbOperations');

 const {PersonalInfo,
        Contacts,
        EducationLicenciate,
        EducationMaster,
        Competences,
        Languages,
        ProfExperience} = require("./CVinfoToConst");

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
        { name: 'description', type: 'TEXT'},
        { name: 'awards', type: 'VARCHAR(255)'},
        { name: 'awardDesc', type: 'VARCHAR(255)'},
    ]);

    addTableColumns('Contacts', [
        { name: 'email', type: 'VARCHAR(255)' },
        { name: 'phone', type: 'VARCHAR(20)' },
        { name: 'address', type: 'VARCHAR(255)' },
        { name: 'linkedin', type: 'VARCHAR(255)'},
        { name: 'github', type: 'VARCHAR(255)'},
      ]);

    addTableColumns('Education', [
      { name: 'degree', type: 'TEXT' },
      { name: 'institution', type: 'TEXT' },
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
        { name: 'description', type: 'TEXT' },
        { name: 'tech_stack', type: 'TEXT' },
        { name: 'start_year', type: 'VARCHAR(255)' },
        { name: 'end_year', type: 'VARCHAR(255)'},
      ]);

//Populate table with information
//Populate personalInfo table
    insertInfo('PersonalInfo', ['name', 'job_title', 'photo', 'description', 'awards', 'awardDesc'], [PersonalInfo.firstLastName, PersonalInfo.job_title, PersonalInfo.photo, PersonalInfo.description, PersonalInfo.awards, PersonalInfo.awardDesc])
    .then(() => console.log(`Successful Insertion of all field for table PersonalInfo!`))
    .catch(err => console.log(`Insertion Failed: ${err}`));

//Populate contacts table
    insertInfo('Contacts', ['email', 'phone', 'address', 'linkedin', 'github'], [Contacts.email, Contacts.phone, Contacts.address, Contacts.linkedin, Contacts.github])
    .then(() => console.log(`Successful Insertion of all field for table 'Contacts'!`))
    .catch(err => console.log(`Insertion Failed: ${err}`));

//Populate Education table
//Licentiate
    insertInfo('Education', ['degree', 'institution', 'start_year', 'end_year'], [EducationLicenciate.degree, EducationLicenciate.institution, EducationLicenciate.start_year, EducationLicenciate.end_year])
    .then(() => console.log(`Successful Insertion of all field for table 'Education'!`))
    .catch(err => console.log(`Insertion Failed: ${err}`));
//Master
    insertInfo('Education', ['degree', 'institution', 'start_year', 'end_year'], [EducationMaster.degree, EducationMaster.institution, EducationMaster.start_year, EducationMaster.end_year])
    .then(() => console.log(`Successful Insertion of all field for table 'Education'!`))
    .catch(err => console.log(`Insertion Failed: ${err}`));

//Populate Competences table
for (let i = 1; i <= 10; i++) {
  const skill = Competences[`skill_${i}`];

  insertInfo('Competences', ['skill'], [skill])
    .then(() => console.log(`Successful Insertion of skill!`))
    .catch(err => console.log(`Insertion Failed: ${err}`));
    }

//Populate Languages
for (let i = 1; i<=4; i++){
  const language = Languages[`language_${i}`];
  const level = Languages[`level_${i}`];

  insertInfo('Languages', ['language', 'level'], [language,level])
    .then(() => console.log(`Successful Insertion of language and level!`))
    .catch(err => console.log(`Insertion Failed: ${err}`));
    }  

//Populate Professional experience
for (let i = 1; i<=4; i++){
  const job_title = ProfExperience[`job_title_${i}`];
  const company = ProfExperience[`company_${i}`];
  const description = ProfExperience[`description_${i}`];
  const tech_stack = ProfExperience[`tech_stack_${i}`];
  const start_year = ProfExperience[`start_year_${i}`];
  const end_year = ProfExperience[`end_year_${i}`];

  insertInfo('ProfExperience', ['job_title', 'company', 'description','tech_stack','start_year','end_year'],[job_title, company, description, tech_stack, start_year, end_year])
  .then(() => console.log(`Successful Insertion of Profissional Information!`))
  .catch(err => console.log(`Insertion Failed: ${err}`));
  } 
}
   else {
    console.log("Tables already exist in Database! Retrieving Info!");

    //retrive the information from there
  }
});

//After is done, need to export this to index.js to be started with npm start