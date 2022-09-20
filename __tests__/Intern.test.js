const Intern = require('../lib/Intern');

test("get your role here", () => {
    let e = new Intern ()
    expect(e.getRole()).toBe("Intern")
});