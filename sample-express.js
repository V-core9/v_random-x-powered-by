const xPoweredByRandom = require('.');
const app = require('express')();

app.use(xPoweredByRandom);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000);