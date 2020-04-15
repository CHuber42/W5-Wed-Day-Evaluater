import { validateInputs } from  './../src/main.js'


describe('validateInputs', () => {

  test('should test that the month day and year are valid inputs', () => {
    let test1 = validateInputs(0, 13, 19);
    expect(test1).toEqual("Invalid");
  
  })
});