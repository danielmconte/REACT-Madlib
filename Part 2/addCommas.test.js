const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
  it('should commify things in threes', () => {
    expect(1234).toEqual("1,234");
    expect(1000000).toEqual("1,000,000");
    expect(9876543210).toEqual("9,876,543,210");
    expect(6).toEqual("-6");
    expect(-10).toEqual("-10");
    expect(-5678).toEqual("-5,678");
  })
});