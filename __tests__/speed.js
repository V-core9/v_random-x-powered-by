const xPoweredByRandom = require('../source');

test("Base Speed Test", async () => {
  let duration = 15;
  let gotItems = [];
  let running = true; // is running
  let started = Date.now(); // start time
  let exited = false;

  while (running) {
    gotItems.push(await xPoweredByRandom());
    if (Date.now() - started === duration) {
      running = false;
      exited = Date.now();
    }
  }

  // Match running time duration
  expect(duration).toBe(exited - started);

  // Speed test / Items per millisecond [ipms]
  const ipms = gotItems.length / duration;
  expect(ipms).toBeGreaterThan(500);
  expect(ipms).toBeLessThan(1000);
});