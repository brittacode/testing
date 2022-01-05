const sum = require("./sum");

test("1 + 2 should equal 3", () => {
  expect(sum(1, 2)).toEqual(3);
});
