//File to unit test dbOperations using jest framework
//Alvaro Silva - 21/02/2023
const { db, connection } = require('./db/dbConnection');
const { retrieveTableData } = require('./db/dbOperations');

// Test the checkTables function to ensure it returns a boolean
test('checkTables should return a boolean', async () => {
  const result = await db.checkTables();
  expect(typeof result).toBe('boolean');
});

// Test the createTable function to ensure it creates a table successfully
test('createTable should create a table successfully', async () => {
  const tableName = 'test_table';
  try {
    await db.createTable(tableName);
    const tableExists = await db.checkExistenceOfTable(tableName);
    expect(tableExists).toBe(true);
  } catch (err) {
    expect(err).toBeUndefined();
  }
});

describe('retrieveTableData', () => {
  it('should retrieve data from a table', async () => {
    // Create a new table with sample data for testing
    await connection.query(`CREATE TABLE test_table (id INT, name VARCHAR(255))`);
    await connection.query(`INSERT INTO test_table (id, name) VALUES (1, 'Alvaro Silva')`);

    // Call retrieveTableData to get the data from the table
    const result = await retrieveTableData('test_table');

    // Expect the result to contain the correct data
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe(1);
    expect(result[0].name).toBe('Alvaro Silva');

    // Drop the test table after the test
    await connection.query(`DROP TABLE test_table`);
  });

  it('should return an error if the table does not exist', async () => {
    // Call retrieveTableData with a table that does not exist
    await expect(retrieveTableData('non_existent_table')).rejects.toThrow();
  });
});
