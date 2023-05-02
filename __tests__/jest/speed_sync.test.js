test("Base Speed Test JS", async () => {
  let { xPoweredByRandom } = require("../../dist");
  let { gotItems, duration } = require("../shared/settings");
  let started = Date.now(); // start time
  const endTime = started + duration;

  do {
    xPoweredByRandom.xpbRandomSync();
    gotItems++;
  } while (Date.now() < endTime);

  // Speed test / Items per millisecond [ipms]
  const ipms = gotItems / duration;
  expect(ipms).toBeGreaterThan(400);
  return ipms;
});
