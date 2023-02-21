const { getData } = require('./db/dbOperations');
const { retrieveTableData } = require('./db/dbOperations');

test('retrieveTableData rejects with an error if table does not exist', async () => {
    await expect(retrieveTableData('nonexistent_table')).rejects.toThrow();
  });  

test('getData should retrieve all necessary data', async () => {
    const result = await getData();
    expect(result.personalinfo_db).toBeDefined();
    expect(result.contacts_db).toBeDefined();
    expect(result.education_db_list).toBeDefined();
    expect(result.competences_db_list).toBeDefined();
    expect(result.languages_db_list).toBeDefined();
    expect(result.profexperience_db_list).toBeDefined();
  });

  test('getData should handle errors properly', async () => {
    const retrieveTableDataMock = jest.fn().mockRejectedValue(new Error('Database error'));
    jest.mock('./dbOperations', () => ({
      retrieveTableData: retrieveTableDataMock,
    }));
  
    const result = await getData();
    expect(result).toBeUndefined();
    expect(console.error).toHaveBeenCalled();
  });

  