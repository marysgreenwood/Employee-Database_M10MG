const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "foobar";
  const e = new Engineer("Joe", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test('getRole() should return "Engineer"', () => {
  const testValue = "Engineer";
  const e = new Engineer("Joe", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "foobar";
  const e = new Engineer("Joe", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
