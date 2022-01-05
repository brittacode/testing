const translate = require("./piglatin");

test("apple to appleway", () => {
  expect(translate("apple")).toEqual("appleway");
});

test("else to elseway", () => {
  expect(translate("else")).toEqual("elseway");
});

test("ink to inkway", () => {
  expect(translate("ink")).toEqual("inkway");
});

test("open to openway", () => {
  expect(translate("open")).toEqual("openway");
});

test("under to underway", () => {
  expect(translate("under")).toEqual("underway");
});

test("giraffe to iraffgay", () => {
  expect(translate("giraffe")).toEqual("iraffgay");
});
