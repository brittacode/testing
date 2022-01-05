const validatePhoneNumber = require("./phonenumber");

test("Valid numbers should return true", () => {
  expect(validatePhoneNumber("123-456-7890")).toEqual(true);
});

test("Valid numbers should return true", () => {
  expect(validatePhoneNumber("456-780")).toEqual(false);
});

test("Valid numbers should return true", () => {
  expect(validatePhoneNumber("(123) 456-7890")).toEqual(true);
});

test("Valid numbers should return true", () => {
  expect(validatePhoneNumber("(123)456-7890")).toEqual(false);
});

test("Valid numbers should return true", () => {
  expect(validatePhoneNumber("123 456 7890")).toEqual(true);
});

test("Valid numbers should return true", () => {
  expect(validatePhoneNumber("1234567890")).toEqual(false);
});

test("Valid numbers should return true", () => {
  expect(validatePhoneNumber("123.456.7890")).toEqual(true);
});
