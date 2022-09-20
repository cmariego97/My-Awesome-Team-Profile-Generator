const Engineer = require('../lib/Engineer');

test("get your role here", () => {
    let e = new Engineer ()
    expect(e.getRole()).toBe("Engineer")
});