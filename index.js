const randomXPB = require("./xPoweredByList");

module.exports = xPoweredByRandom = async (req, res, next) => {
  res.setHeader('X-Powered-By', await randomXPB());
  next();
};