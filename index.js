const xpbRandom = require("./source");

module.exports = xPoweredByRandom = async (req, res, next) => {
  res.setHeader('X-Powered-By', await xpbRandom());
  next();
};