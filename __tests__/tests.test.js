import { validateInputs } from  './../src/main.js'


describe('validateInputs', () => {

  test('should test that the month and day are valid inputs', () => {
    let test1 = validateInputs(0, 13, 19);
    expect(test1).toEqual("Invalid");
  })
  test('should test that the year is outside the specified floor and ceiling range', () => {
    let test2 = validateInputs(276759, 12, 20);
    expect(test2).toEqual("Invalid");
  })

  test('should test that the year is within the specified range', () => {
    let test3 = validateInputs(0, 1, 1);
    expect(test3).toEqual("Valid");
  })
});