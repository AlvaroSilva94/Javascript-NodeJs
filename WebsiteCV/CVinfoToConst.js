//This file is used just to store the info from the CV in variables to send to database in case
//the tables are empty, else this file will be ignored

//For personal info
const PersonalInfo = {
    firstLastName: "Álvaro Silva",
    job_title: "Software Developer",
    photo: "TODO add link",
    description: "As a seasoned software developer with 4+ years of experience in embedded software solutions for critical systems, I am a highly adaptable professional with a strong focus on client satisfaction. I have a proven track record of success in both Agile and Waterfall methodologies," + 
    "and am a dedicated team player who takes pride in building positive cross-functional working relationships." +
    "My passion for the software development field drives me to continuously seek opportunities for growth, whether in backend development or full-stack." +
    " I am eager to bring my skills and enthusiasm to your organization and make a real impact.",
    awards: "1st Place ContiStudent award 2021",
    awardDesc: "Best master thesis dissertation related to work done in curricular internship at Continental."
}

//For contacts
const Contacts = {
    email: 'alvaro.ma.silva@outlook.com',
    phone: '913310408',
    address: 'Vila Nova de Gaia',
    linkedin: 'in/alvaromasilva/',
    github: 'https://github.com/AlvaroSilva94'
}

//For education for licentitate degree (line1)
const EducationLicenciate = {
    degree: 'Licentiate Degree in Electical and Computer Engineering',
    institution: 'Instituto Superior de Engenharia do Porto (ISEP)',
    start_year: '2012',
    end_year: '2016'   
}

//For education for master degree (line2)
const EducationMaster = {
    degree: 'Master Degree in Electical and Computer Engineering - Systems and Industrial Planning',
    institution: 'Instituto Superior de Engenharia do Porto (ISEP)',
    start_year: '2016',
    end_year: '2018'   
}

const Competences = {
    skill_1: 'C/C++ (basic, advanced, STL)',
    skill_2: 'Javascript (Vanilla, Express.js, Node.js, React.js)',
    skill_3: 'Git(Github, Gitlab, Bitbucket)/SVN',
    skill_4: 'Python(Advanced, Flask)',
    skill_5: 'Bash(basic for utility scripts)',
    skill_6: 'Kotlin(Advanced, Android Studio)',
    skill_7: 'Linux/Windows/Mac',
    skill_8: 'SQL(MySQL/MongoDB/NoSQL)',
    skill_9: 'HTML/CSS',
    skill_10: 'C#(basic, advanced, .NET)'
}

const Languages  = {
    language_1: 'Portuguese',
    language_2: 'English',
    language_3: 'Spanish',
    language_4: 'French',
    level_1: 'Native',
    level_2: 'C2',
    level_3: 'B1',
    level_4: 'A2',

}

const ProfExperience = {
    job_title_1: 'Industial Engineer - Curricular Internship',
    job_title_2: 'Software developer - Professional Internship',
    job_title_3: 'Software developer - Project Engineer',
    company_1: 'Continental Mabor Industria de Pneus S.A',
    company_2: 'Critical Software S.A',
    company_3: 'Critical Software S.A',
    description_1: "Project: Optimization of the transportation of tires between the painting and vulcanization processes."+
   "- Creation and computer validation of a model to improve in-bound logistics."+
   "- Definition of routes for the vehicles to travel"+
   "- Optimization of the number of vehicles needed to supply the machines.",
    description_2: "- Worked on international projects in the railway sector developing embedded software solutions for HMIs using QT, fixing defects, and unit testing software developed."+
    "- Agile-oriented projects (Scrum with Kanban boards)"+
    "- Legacy code optimization and performance improvement. "+
    "- Multiple business travels to India and England to validate implementations and fixes.",
    description_3: "- Worked on multiple international projects in the railway sector developing embedded software solutions for HMIs using QT, creating requirements, and unit/component testing of features developed."+
    "- In one of the projects, worked as a system tester in a project regarding micro service-oriented architectures and messaging systems."+
    "- Agile-oriented projects (Scrum with Kanban boards)"+
    "- Multiple business travels to Germany and England to validate implementations and fixes.",
    tech_stack_1: 'Linux, Word, Excel, C++, Javascript, HTML, CSS, Python and Bash ',
    tech_stack_2: 'Linux (Ubuntu), Javascript, HTML/CSS/XML, SQL, QT, Bash, Python, Git, SVN, Scrum and others including client proprietary software for various purposes',
    tech_stack_3: 'Linux (Ubuntu,Kubuntu), QT, C++, SQL, Python, ActiveMQ, Docker, Bash, Git, SVN, HTML/XML, and others including client proprietary software for various purposes.',
    start_year_1: 'Nov. 2017',
    start_year_2: 'Jun. 2018',
    start_year_3: 'Jul. 2019',
    end_year_1: 'May. 2018',
    end_year_2: 'Jul. 2019',
    end_year_3: 'The moment'
}

module.exports = {
    PersonalInfo,
    Contacts,
    EducationLicenciate,
    EducationMaster,
    Competences,
    Languages,
    ProfExperience
}