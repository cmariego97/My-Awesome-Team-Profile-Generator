const Employee = require('../lib/Employee');

test("get your role here", () => {
    let e = new Employee ()
    expect(e.getRole()).toBe("Employee")
});