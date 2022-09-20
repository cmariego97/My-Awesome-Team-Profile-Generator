const Manager = require('../lib/Manager');

test("get your role here", () => {
    let e = new Manager ()
    expect(e.getRole()).toBe("Manager")
});