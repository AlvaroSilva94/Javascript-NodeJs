//File to unit test dbInfo using jest framework
//Alvaro Silva - 21/02/2023
const mysql = require('mysql');
const {
  checkTables,
  createTable,
  addTableColumns,
  insertInfo,
} = require('./dbOperations');

const { PersonalInfo, Contacts } = require('./CVinfoToConst');

const testData = {
  PersonalInfo: {
    columns: ['name', 'job_title', 'photo', 'description', 'awards', 'awardDesc'],
    values: [
      PersonalInfo.firstLastName,
      PersonalInfo.job_title,
      PersonalInfo.photo,
      PersonalInfo.description,
      PersonalInfo.awards,
      PersonalInfo.awardDesc,
    ],
  },
  Contacts: {
    columns: ['email', 'phone', 'address', 'linkedin', 'github'],
    values: [
      Contacts.email,
      Contacts.phone,
      Contacts.address,
      Contacts.linkedin,
      Contacts.github,
    ],
  },
};

// Jest test suite
describe('CV database operations', () => {
  // Declare the test database connection
  const connection = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'root',
    database:'cvinfo',
    port:'3306'
  });

  // Connect to the database before running tests
  beforeAll((done) => {
    connection.connect((err) => {
      if (err) {
        console.error('Database connection failed: ', err);
        return;
      }
      done();
    });
  });

  // Close the database connection after running tests
  afterAll((done) => {
    connection.end((err) => {
      if (err) {
        console.error('Error closing the database connection: ', err);
        return;
      }
      done();
    });
  });

  test('Check tables are empty', () => {
    return checkTables(connection).then((result) => {
      expect(result).toBe(true);
    });
  });

  test('Create table', () => {
    return createTable(connection, 'TestTable').then((result) => {
      expect(result).toBe(true);
    });
  });

  test('Add columns to table', () => {
    return addTableColumns(connection, 'TestTable', [
      { name: 'column1', type: 'VARCHAR(255)' },
      { name: 'column2', type: 'TEXT' },
    ]).then((result) => {
      expect(result).toBe(true);
    });
  });

  test('Insert data into table', () => {
    return insertInfo(connection, 'TestTable', testData.PersonalInfo.columns, testData.PersonalInfo.values).then(
      (result) => {
        expect(result).toBe(true);
      }
    );
  });
});
