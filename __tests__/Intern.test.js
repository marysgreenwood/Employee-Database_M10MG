const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "UNC";
  const e = new Intern("Bar", 1, "test@test.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern ("Bob", 1, "test@test.com", testValue);
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UNC";
  const e = new Intern ("Bob", 1, "test@test.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});