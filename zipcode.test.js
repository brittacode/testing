const validateZipCode = require("./zipCode");

test("Zip codes", () => {
  expect(validateZipCode("48229")).toEqual(true);
});

test("Zip codes", () => {
  expect(validateZipCode("48229-1234")).toEqual(true);
});

test("Zip codes", () => {
  expect(validateZipCode("4822y")).toEqual(false);
});
