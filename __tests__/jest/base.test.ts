test("base test", async () => {
  let { xPoweredByRandom } = require("../../dist/");
  let { gotItems } = require("../shared/settings");

  let testCount = 100;

  for (var i = 0; i < testCount; i++) {
    await xPoweredByRandom.xpbRandom();
    gotItems++;
  }

  expect(gotItems).toBe(testCount);
});
