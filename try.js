const randomXPB = require('./xPoweredByList');
//! Test that shows how many it can generate in a single millisecond 
//* [ 700-4500 items ] : Quite depends on the time given to generate.
(async (duration = 15) => {
  var gotItems = [];
  var running = true; // is running
  const started = Date.now(); // start time

  while (running) {
    gotItems.push(await randomXPB());
    if (Date.now() - started > duration) {
      running = false;
    }
  }

  //? Print the items count 
  console.log("Duration: " + duration + " ms");
  console.log("Items Count: " + gotItems.length);
  console.log("Speed: " + Math.trunc(gotItems.length / duration) + " items/ms");
  console.log("ItemTime: " + Math.trunc(duration / gotItems.length * 100000)/100 + " μs/item");
})(1);