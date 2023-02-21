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

  const getData = require("./dbRetriveFromDB");

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
    async_p_info();
    async_contacts();
    async_education();
    async_competences();
    async_languages();
   }
  });
    
// Async functions to call getData to retrieve the data and assign it 
async function async_p_info() {
  const data = await getData();
  let f_personalInfo = {};
  
  //Store personal info
  f_personalInfo.name = data.personalinfo_db.name;
  f_personalInfo.job_title = data.personalinfo_db.job_title;
  f_personalInfo.photo = data.personalinfo_db.photo;
  f_personalInfo.description = data.personalinfo_db.description;
  f_personalInfo.awards = data.personalinfo_db.awards;
  f_personalInfo.awardDesc = data.personalinfo_db.awardDesc;
  
  return f_personalInfo;
  }

async function async_contacts(){
  const data = await getData();
  let f_contacts = {};

  //Store contacts
  f_contacts.email = data.contacts_db.email;
  f_contacts.phone = data.contacts_db.phone;
  f_contacts.address = data.contacts_db.address;
  f_contacts.linkedin = data.contacts_db.linkedin;
  f_contacts.github = data.contacts_db.github;

  return f_contacts;
}

async function async_education(){
  const data = await getData();
  let f_education = [];

  //Store education
  let education1 = {};
  let education2 = {};
  education1.degree = data.education_db_list[0].degree;
  education1.institution = data.education_db_list[0].institution;
  education1.start_year = data.education_db_list[0].start_year;
  education1.end_year =  data.education_db_list[0].end_year;
  education2.degree = data.education_db_list[1].degree;
  education2.institution = data.education_db_list[1].institution;
  education2.start_year = data.education_db_list[1].start_year;
  education2.end_year =  data.education_db_list[1].end_year;
  f_education.push(education1);
  f_education.push(education2);

  return f_education;
}

async function async_competences(){
  const data = await getData();
  let f_competences = [];

  //Store competences
  for (let i = 1; i <= 10; i++) {
    let competence = {
        skill: data.competences_db_list[i - 1].skill,
    };
    f_competences.push(competence);
  }

  return f_competences;
}

async function async_languages(){
  const data = await getData();
  let f_languages = [];

  //Store languages
  for (let i = 1; i <= 4; i++) {
    let language = {
        language: data.languages_db_list[i - 1].language,
        level: data.languages_db_list[i - 1].level,
    };
    f_languages.push(language);
 }

  return f_languages;
}

async function async_profexperience(){
  const data = await getData();
  let f_profexperience = [];

  //Store professional experience from DB
  let profexperience1 = {};
  let profexperience2 = {};
  let profexperience3 = {};

  //For index 0
  profexperience1.job_title = data.profexperience_db_list[0].job_title;
  profexperience1.company = data.profexperience_db_list[0].company;
  profexperience1.description = data.profexperience_db_list[0].description;
  profexperience1.tech_stack = data.profexperience_db_list[0].tech_stack;
  profexperience1.start_year = data.profexperience_db_list[0].start_year;
  profexperience1.end_year = data.profexperience_db_list[0].end_year;
  //For index 1
  profexperience2.job_title = data.profexperience_db_list[1].job_title;
  profexperience2.company = data.profexperience_db_list[1].company;
  profexperience2.description = data.profexperience_db_list[1].description;
  profexperience2.tech_stack = data.profexperience_db_list[1].tech_stack;
  profexperience2.start_year = data.profexperience_db_list[1].start_year;
  profexperience2.end_year = data.profexperience_db_list[1].end_year;
  //For index 2
  profexperience3.job_title = data.profexperience_db_list[2].job_title;
  profexperience3.company = data.profexperience_db_list[2].company;
  profexperience3.description = data.profexperience_db_list[2].description;
  profexperience3.tech_stack = data.profexperience_db_list[2].tech_stack;
  profexperience3.start_year = data.profexperience_db_list[2].start_year;
  profexperience3.end_year = data.profexperience_db_list[2].end_year;
 //Store into correct var to be imported
  f_profexperience.push(profexperience1);
  f_profexperience.push(profexperience2);
  f_profexperience.push(profexperience3);

  return f_profexperience;
}

module.exports =  {async_p_info,
                  async_contacts,
                  async_competences,
                  async_education,
                  async_languages,
                  async_profexperience};

