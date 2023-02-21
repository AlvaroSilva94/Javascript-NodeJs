// in the file where you want to use the data
const { retrieveTableData } = require('./dbOperations');

let personalinfo_db = {};
let contacts_db = {};

//async/await to retrive the data from db
async function getData() {
  try {
    const personalInfo = await retrieveTableData('personalinfo');
    const contacts = await retrieveTableData('contacts');
    const education = await retrieveTableData('education');
    const competences = await retrieveTableData('competences');
    const languages = await retrieveTableData('languages');
    const profExperience = await retrieveTableData('profexperience');

    //For the cases with multiple rows, I'll use a list and access it by index
    const education_db_list = [];
    const competences_db_list = [];
    const languages_db_list = [];
    const profexperience_db_list = [];

      //associate the results to something
      await personalInfo.forEach((row) => {
            personalinfo_db.name = row.name;
            personalinfo_db.job_title = row.job_title;
            personalinfo_db.photo = row.photo;
            personalinfo_db.description = row.description;
            personalinfo_db.awards = row.awards;
            personalinfo_db.awardDesc = row.awardDesc;
          });

      await contacts.forEach((row) => {
            contacts_db.email = row.email;
            contacts_db.phone = row.phone;
            contacts_db.address = row.address;
            contacts_db.linkedin = row.linkedin;
            contacts_db.github = row.github;
          });

      await education.forEach((row) => {
            const education_db = {
              degree: row.degree,
              institution: row.institution,
              start_year: row.start_year,
              end_year: row.end_year,
            };
            education_db_list.push(education_db);
          });
      
       await competences.forEach((row) => {
            const competences_db = {
              skill: row.skill,
            };
            competences_db_list.push(competences_db);
          });

        await languages.forEach((row) => {
            const languages_db = {
              language: row.language,
              level: row.level,
            };
            languages_db_list.push(languages_db);
          });
    
        await profExperience.forEach((row) => {
            const profexperience_db = {
              job_title: row.job_title,
              company: row.company,
              description: row.description,
              tech_stack: row.tech_stack,
              start_year: row.start_year,
              end_year: row.end_year,
            };
            profexperience_db_list.push(profexperience_db);
        });

          return {personalinfo_db, 
                  contacts_db,
                  education_db_list,
                  competences_db_list,
                  languages_db_list,
                  profexperience_db_list};

        } catch (error) {
          console.error(error);
        }
      }

//This will export the promisse, if I export directly It will be null because
//the promisse won't resolve it self on time
module.exports = getData;