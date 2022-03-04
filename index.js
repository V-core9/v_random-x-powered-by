const xPoweredByRandom = require("./xPoweredByList");

module.exports = randomXPoweredBy = async (req, res, next) => {
  res.set('X-Powered-By', await xPoweredByRandom());
  next();
};