const xPoweredByRandom = require('./xPoweredByList');

var gotItems = [];

(async () => {
  for (let i = 0; i < 1000; i++) {
    gotItems.push(await xPoweredByRandom());
  }
  console.log(gotItems);
})();