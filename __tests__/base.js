const xPoweredByRandom = require('../source');


test( "base test", async () => {
  let gotItems = [];
  let testCount = 100;
  
  for (var i = 0; i < testCount; i++) {
    gotItems.push(await xPoweredByRandom());
  }

  
  expect(gotItems.length).toBe(testCount);
});